import { chromium } from 'playwright-core';
import { mkdir, writeFile } from 'node:fs/promises';
import assert from 'node:assert/strict';
const base=process.env.TEST_URL||'http://127.0.0.1:5173/';
await mkdir('.test-results',{recursive:true});
const browser=await chromium.launch({executablePath:'/usr/bin/chromium',headless:true,args:['--no-sandbox']});
const page=await browser.newPage({viewport:{width:1440,height:1000}});
const errors=[];page.on('pageerror',e=>errors.push(e.message));
const results=[];
async function go(hash){await page.goto(base+'#'+hash);await page.locator('main h1').first().waitFor();await page.waitForTimeout(80);}
try{
 await go('accueil');await page.screenshot({path:'.test-results/accueil-desktop.png',fullPage:true});
 for(const width of [1440,390]){
  await page.setViewportSize({width,height:900});
  const routes=['accueil','ateliers','revision','exercices',...['a1','a2','a3','a4','a5','a6','b1','b2','b3','b4','b5','c1','c2','c3','c4','c5','c6'],...['reservoir','motion','tangent','constant','accumulation','recognition','initial','join'].map(x=>'atelier-'+x)];
  for(const route of routes){await go(route);const overflow=await page.evaluate(()=>document.documentElement.scrollWidth>innerWidth+1);assert.equal(overflow,false,`Débordement ${width}px ${route}`);assert.equal(await page.locator('.katex-error').count(),0,`KaTeX ${route}`);results.push(`${width}px / ${route} : OK`);}
 }
 await go('exercices');const first=page.locator('.exercise').first();assert.equal(await first.locator('.solution').getAttribute('open'),null);await first.locator('.hint-row summary').first().click();assert.equal(await first.locator('.solution').getAttribute('open'),null);assert.equal(await first.locator('.hint-row details').nth(1).getAttribute('open'),null);
 await first.locator('textarea').fill('Je distingue une valeur et une pente.');await first.locator('input[type=radio]').first().check();await first.locator('.verify-answer').click();await page.locator('#bilan').getByText('1 / 32 exercices acquis').waitFor();await page.reload();assert.equal(await page.locator('.exercise textarea').first().inputValue(),'Je distingue une valeur et une pente.');results.push('Indices indépendants, choix corrigé et notes persistantes : OK');
 await go('a1');await page.locator('#complete-lesson').check();await page.reload();assert.ok(await page.locator('#complete-lesson').isChecked());results.push('Progression persistante : OK');
 for(const lab of ['reservoir','motion','tangent','constant','accumulation','initial','join']){await go('atelier-'+lab);for(const slider of await page.locator('[data-lab] input[type=range]').all()){await slider.fill(await slider.getAttribute('max'));await slider.dispatchEvent('input');}assert.equal(await page.locator('[data-lab] svg').evaluateAll(els=>els.some(el=>/NaN|Infinity/.test(el.innerHTML))),false);const play=page.locator('[data-action=play]');if(await play.count()){await play.click();await page.waitForTimeout(120);await play.click();await page.locator('[data-action=reset]').click();}results.push(`Commandes atelier ${lab} : OK`);}
 await go('atelier-join');await page.locator('[data-action=join]').click();await page.getByText('Les limites coïncident', {exact:false}).waitFor();
 await go('atelier-recognition');const selects=page.locator('[data-recognition-controls] select');assert.equal(await selects.count(),3);for(const select of await selects.all()){await select.selectOption({index:1});}await page.locator('[data-action=check]').click();await page.locator('.lab-feedback').waitFor();results.push('Raccordement et reconnaissance interactifs : OK');
 await go('accueil');await page.screenshot({path:'.test-results/accueil-mobile.png',fullPage:true});await page.locator('.mobile-menu').click();assert.equal(await page.locator('.mobile-menu').getAttribute('aria-expanded'),'true');await page.keyboard.press('Escape');assert.equal(await page.locator('.mobile-menu').getAttribute('aria-expanded'),'false');results.push('Menu mobile et touche Échap : OK');
 await go('atelier-reservoir');await page.locator('#motion-toggle').uncheck();await page.locator('[data-action=play]').click();await page.getByText('Animations désactivées.',{exact:false}).waitFor();results.push('Animations désactivables : OK');
 await go('imprimer');assert.equal(await page.locator('.print-lesson').count(),17);assert.equal(await page.locator('.print-exercises .exercise').count(),32);results.push('Version imprimable : 17 chapitres et 32 corrections');
 assert.deepEqual(errors,[]);
 await writeFile('.test-results/browser.json',JSON.stringify({base,passed:results,errors},null,2));console.log(`${results.length} contrôles navigateur réussis. Aucune erreur JS.`);
}finally{await browser.close();}

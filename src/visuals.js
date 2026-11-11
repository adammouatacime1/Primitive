import { plot } from './labs.js';
const m=String.raw;
const flow=steps=>`<div class="concept-flow">${steps.map((s,i)=>`<div><small>0${i+1}</small>${s}</div>${i<steps.length-1?'<span aria-hidden="true">→</span>':''}`).join('')}</div>`;
export function observationVisual(id){
 if(id==='a1')return `<div class="lab-graphs observation-graphs">${plot({title:'Valeur : F(3) = 9 ; pente de la tangente : 6',x:[0,4],y:[-2,18],curves:[{fn:x=>x*x,color:'#174d44'},{fn:x=>9+6*(x-3),color:'#c36d47',dash:true}],points:[{x:3,y:9}],vline:3})}${plot({title:'Au même x = 3 : f(3) = 6',x:[0,4],y:[0,9],curves:[{fn:x=>2*x,color:'#c36d47'}],points:[{x:3,y:6}],vline:3})}</div>`;
 if(id==='b1')return flow([m`Une fonction \(F\), dérivable sur \(I\)`,m`Calculer \(F'(x)\)`,m`Vérifier \(F'(x)=f(x)\) pour tout \(x\in I\)`]);
 if(id==='b2')return flow([m`\(f\) continue sur un intervalle`,m`Au moins une primitive existe`,m`Une formule simple n’est pas garantie`]);
 if(id==='b3')return `<div class="domain-visual"><span>\(]-\infty,0[\)<br/>\(-1/x+C_-\)</span><b>0<br/><small>exclu</small></b><span>\(]0,+\infty[\)<br/>\(-1/x+C_+\)</span></div><p class="visual-caption">Pour \(f(x)=1/x^2\), deux intervalles séparés, deux constantes indépendantes.</p>`;
 if(id==='c1')return flow([m`\(f(x)=x^3\)`,m`Exposant : \(3+1=4\)<br/>Compensation : \(1/4\)`,m`\(F(x)=x^4/4\)<br/>\(F'(x)=x^3\)`]);
 if(id==='c2')return flow([m`\(\dfrac{x^2+1}{\sqrt x}\), \(x>0\)`,m`\(x^{3/2}+x^{-1/2}\)`,m`\(\dfrac25 x^{5/2}+2\sqrt x\)`]);
 if(id==='c4')return flow([m`\((u^4)'=4u^3u'\)`,m`Comparer le facteur présent à \(u'\)`,m`Ajuster une constante seulement`]);
 if(id==='c5')return flow(['Polynômes et puissances','Racines, fractions, trigonométrie','Composées et produits dérivés']);
 if(id==='c6')return flow(['Domaine et structure','Proposition et compensation','Dérivée complète et condition']);
 return '';
}
export function printLabVisual(id){
 const shared={x:[-2,2],y:[-4,8]};
 if(id==='reservoir')return plot({title:'Réservoir à t = 3 min : 5 L au départ + 9 L ajoutés = 14 L',x:[0,3],y:[0,15],xLabel:'t (min)',yLabel:'F(t) (L)',curves:[{fn:t=>5+t*t}],points:[{x:0,y:5},{x:3,y:14}]});
 if(id==='motion')return plot({title:'X(t)=4+2t−t² : changement de sens à t = 1 s',x:[0,3],y:[0,6],xLabel:'t (s)',yLabel:'X(t) (m)',curves:[{fn:t=>4+2*t-t*t}],points:[{x:0,y:4},{x:1,y:5},{x:3,y:1}]});
 if(id==='tangent')return plot({...shared,title:'F(x)=x² ; à x=1, la tangente a pour pente f(1)=2',curves:[{fn:x=>x*x},{fn:x=>2*x-1,color:'#c36d47',dash:true}],points:[{x:1,y:1}]});
 if(id==='constant')return plot({...shared,title:'x²−2, x² et x²+3 : mêmes pentes, hauteurs différentes',curves:[{fn:x=>x*x-2,color:'#6f7e76'},{fn:x=>x*x,color:'#174d44'},{fn:x=>x*x+3,color:'#a16016'}]});
 if(id==='accumulation')return plot({title:'Six rectangles à gauche : somme 7,5 ; variation exacte 9',x:[0,3],y:[0,6.5],xLabel:'t',yLabel:'f(t)',curves:[{fn:t=>2*t}],extras:({px,py})=>Array.from({length:6},(_,i)=>`<rect x="${px(i/2)}" y="${py(i)}" width="${px((i+1)/2)-px(i/2)}" height="${py(0)-py(i)}" fill="#b5d5c7" fill-opacity=".5" stroke="#6e9e88"/>`).join('')});
 if(id==='initial')return plot({title:'F(x)=x²+6 passe par A(1 ; 7) et vérifie F′=2x',x:[-2,2],y:[0,11],curves:[{fn:x=>x*x+6}],points:[{x:1,y:7}],vline:1});
 if(id==='join')return plot({title:'Après raccordement : F(x)=x|x|/2, F′(x)=|x| même en 0',x:[-2,2],y:[-3,3],curves:[{fn:x=>x*Math.abs(x)/2}],points:[{x:0,y:0}]});
 return '';
}

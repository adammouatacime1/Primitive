import test from 'node:test';
import assert from 'node:assert/strict';
import { reservoirValues, motionValues, rectangleSum } from '../src/labs.js';
import { chapters } from '../src/course.js';
import { exercises } from '../src/exercises.js';
test('Réservoir : unités implicites L et min, valeurs de référence et volumes physiques',()=>{
 assert.deepEqual([0,1,2,3].map(t=>reservoirValues(t).rate),[0,2,4,6]);
 assert.deepEqual([0,1,2,3].map(t=>reservoirValues(t).volume),[5,6,9,14]);
 for(const initial of [0,5,10])for(const t of [0,1,2,3])for(const mode of ['constant','variable']){const v=reservoirValues(t,initial,mode);assert.equal(v.volume-initial,v.added);assert.ok(v.volume>=0&&v.volume<=20);}
 assert.equal(reservoirValues(2,5,'constant').volume,11);
});
test('Mouvement : position positive et vitesse négative, déplacement ≠ distance',()=>{
 const at2=motionValues(2);assert.equal(at2.position,4);assert.equal(at2.speed,-2);assert.equal(at2.displacement,0);assert.equal(at2.distance,2);
 const at3=motionValues(3);assert.equal(at3.displacement,-3);assert.equal(at3.distance,5);
 for(let t=0;t<=3;t+=.05)assert.ok(motionValues(t).distance+1e-10>=Math.abs(motionValues(t).displacement));
});
test('Accumulation : méthode déclarée, encadrement et convergence vers 9',()=>{
 for(const n of [1,2,6,20,80]){assert.ok(rectangleSum(n,'left')<9);assert.ok(rectangleSum(n,'right')>9);assert.equal(rectangleSum(n,'mid'),9);}
 assert.ok(9-rectangleSum(80,'left')<9-rectangleSum(6,'left'));
 assert.equal(rectangleSum(6,'left'),7.5);assert.equal(rectangleSum(6,'right'),10.5);
});
test('Parcours complet, huit ateliers et exercices exploitables',()=>{
 assert.equal(chapters.length,17);assert.equal(new Set(chapters.map(c=>c.id)).size,17);
 assert.equal(chapters.filter(c=>c.lab).length,8);
 assert.ok(exercises.length>=20);
 for(const e of exercises){assert.equal(e.hints.length,2);assert.equal(e.choices.length,3);assert.ok(e.answer>=0&&e.answer<3);assert.ok(chapters.some(c=>c.id.toLowerCase()===e.review));assert.ok(e.solution.length>80&&e.verification.length>20);}
});

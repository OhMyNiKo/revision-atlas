import fs from 'node:fs';
import vm from 'node:vm';
import assert from 'node:assert/strict';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
const root=path.resolve(path.dirname(fileURLToPath(import.meta.url)),'..');
const read=p=>fs.readFileSync(path.join(root,p),'utf8');
const context={window:{}};
vm.createContext(context);
vm.runInContext(read('step-notes.js'),context);
const data=JSON.parse(JSON.stringify(context.window.STEP_NOTES));
const catalog=JSON.parse(read('step-catalog.json'));
assert.equal(data.modules.filter(m=>m[0].startsWith('P')).length,17);
assert.equal(data.modules.filter(m=>m[0].startsWith('M')).length,8);
assert.equal(data.modules.filter(m=>m[0].startsWith('X')).length,3);
assert.equal(data.modules.filter(m=>m[0].startsWith('S')).length,0);
assert.equal(new Set(data.modules.map(m=>m[0])).size,data.modules.length);
assert.equal(new Set(data.notes.map(n=>n.id)).size,data.notes.length);
const squash=s=>s.replace(/\s+/g,'');
for(const source of catalog.sources){
  const tex=read(source.file);
  const originalMath=[...tex.matchAll(/\\\[([\s\S]*?)\\\]|\\\(([\s\S]*?)\\\)/g)].map(m=>squash(m[1]||m[2]));
  const imported=data.notes.filter(n=>n.source===source.file);
  assert.deepEqual(imported.flatMap(n=>n.formulas).map(squash),originalMath,'Every original formula must be preserved in source order');
  assert.equal(imported.length,source.sections.length);
  const boldCount=(tex.match(/\\textbf\{/g)||[]).length;
  assert.equal(imported.reduce((sum,n)=>sum+(n.html.match(/<strong>/g)||[]).length+1,0),boldCount,'Preserve emphasis, allowing each note title to become h3');
}
for(const note of data.notes){
  assert(data.modules.some(m=>m[0]===note.module));
  assert(!/katex-error|class="longtable"|<script\b/i.test(note.html));
  assert.equal((note.html.match(/class="katex"/g)||[]).length,note.formulas.length);
}
const html=read('index.html');
for(const m of html.matchAll(/<script>([\s\S]*?)<\/script>/g))new Function(m[1]);
assert(html.includes('renderSTEPNotes();'));
assert(html.includes("'step'].includes(subject)"));
assert(html.includes("body.dataset.moduleReader = 'single'"));
assert(html.includes('target.dataset.moduleHidden = String('));
assert(html.includes('const module = currentModule();'));
assert(!html.includes('new IntersectionObserver('),'Directory selection, not scrolling, must select modules');
assert(!html.includes('margin-left: var(--rail-w)'),'Collapsed sidebar must not leave a rail');
assert(html.includes('overscroll-behavior-y: contain'));
assert(html.includes('sidebar.inert = hidden'));
console.log(JSON.stringify({modules:data.modules.length,notes:data.notes.length,formulas:data.formulaCount,tables:data.notes.reduce((n,s)=>n+(s.html.match(/<table>/g)||[]).length,0),sourceMathAndEmphasis:'unchanged',scripts:'valid'}));

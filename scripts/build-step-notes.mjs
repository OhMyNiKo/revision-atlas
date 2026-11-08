// Build-time conversion only. The website needs no CDN or math JavaScript.
// Usage: node scripts/build-step-notes.mjs /absolute/path/to/node_modules/katex
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { createRequire } from 'node:module';
import { spawnSync } from 'node:child_process';

const require = createRequire(import.meta.url);
const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const katexRoot = path.resolve(process.argv[2] || 'node_modules/katex');
const katex = require(katexRoot);
const catalog = JSON.parse(fs.readFileSync(path.join(root, 'step-catalog.json'), 'utf8'));
const moduleCodes = new Set(catalog.modules.map(m => m[0]));
const notes = [];
let formulaCount = 0;
const unescape = s => s.replace(/&#39;/g, "'").replace(/&quot;/g, '"').replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&amp;/g, '&');

function pandoc(source, format) {
  const r = spawnSync('pandoc', ['--from=latex', `--to=${format}`, '--mathjax', '--wrap=none'], {input:source, encoding:'utf8'});
  if (r.status !== 0 || (r.stderr.trim() && format !== 'plain')) throw new Error(`Pandoc: ${r.stderr}`);
  return r.stdout;
}

// Pandoc does not understand this exported p{...\real{...}} column preamble.
// Change only table layout syntax, preserving every cell and its order.
function normaliseTables(source) {
  return source.replace(/\\begin\{longtable\}\[\]\{@\{\}[\s\S]*?@\{\}\}/g, '\\begin{longtable}{llll}')
    .replace(/\\begin\{minipage\}\[b\]\{\\linewidth\}\\raggedright\s*/g, '')
    .replace(/\\end\{minipage\}/g, '');
}

for (const source of catalog.sources) {
  const raw = fs.readFileSync(path.join(root, source.file), 'utf8');
  const body = raw.split('\\begin{document}')[1]?.split('\\end{document}')[0];
  if (!body) throw new Error(`No document body: ${source.file}`);
  const chunks = body.trim().split(/\\begin\{center\}\\rule\{0\.5\\linewidth\}\{0\.5pt\}\\end\{center\}/).map(s => s.trim());
  if (chunks.length !== source.sections.length) throw new Error(`Unmapped sections: ${source.file}`);
  for (let i = 0; i < chunks.length; i++) {
    const mapping = source.sections[i];
    if (!moduleCodes.has(mapping.module)) throw new Error(`Unknown module ${mapping.module}`);
    const heading = chunks[i].match(/^\\textbf\{([^\n]+)\}/)?.[1];
    if (!heading || !heading.startsWith(`${mapping.number}．`)) throw new Error(`Unexpected heading: ${heading}`);
    let html = pandoc(normaliseTables(chunks[i]), 'html5');
    if (html.includes('class="longtable"')) throw new Error('A table was not converted');
    html = html.replace(/^<p><strong>([\s\S]*?)<\/strong><\/p>/, '<h3 class="step-note__title">$1</h3>');
    const formulas = [];
    html = html.replace(/<span\s+class="math (display|inline)">([\s\S]*?)<\/span>/g, (_, mode, encoded) => {
      const tex = unescape(encoded).replace(/^\\[\[(]/, '').replace(/\\[\])]$/, '');
      formulas.push(tex);
      formulaCount++;
      const math = katex.renderToString(tex, {displayMode:mode==='display', throwOnError:true, strict:'ignore', output:'htmlAndMathml', trust:false});
      return mode === 'display' ? `<span class="step-equation" tabindex="0" aria-label="可横向滚动的公式">${math}</span>` : math;
    });
    html = html.replace(/<table>/g, '<div class="step-table" tabindex="0" aria-label="笔记原文表格"><table>').replace(/<\/table>/g, '</table></div>');
    notes.push({id:`step-${source.date.replaceAll('-','')}-${mapping.number}`, module:mapping.module, number:mapping.number, date:source.date, title:heading, tags:mapping.tags, source:source.file, html, formulas, searchText:pandoc(chunks[i], 'plain')});
  }
}

// Bundle font bytes in the CSS, so visitors never need a third-party math CDN.
let css = fs.readFileSync(path.join(katexRoot, 'dist/katex.min.css'), 'utf8');
css = css.replace(/src:[^;}]+/g, declaration => {
  const font = declaration.match(/url\((fonts\/[^)]+\.woff2)\)/)?.[1];
  if (!font) throw new Error(`Missing WOFF2 font: ${declaration}`);
  return `src:url(data:font/woff2;base64,${fs.readFileSync(path.join(katexRoot,'dist',font)).toString('base64')}) format("woff2")`;
});
fs.mkdirSync(path.join(root,'assets'), {recursive:true});
fs.writeFileSync(path.join(root,'assets/step-math.css'), `/* KaTeX ${katex.version}, MIT license: katex-LICENSE.txt. Generated; do not edit. */\n${css}\n`);
fs.copyFileSync(path.join(katexRoot,'LICENSE'), path.join(root,'assets/katex-LICENSE.txt'));
fs.writeFileSync(path.join(root,'step-notes.js'), `// Generated from the unchanged .tex sources. Edit the sources and catalog, then rebuild.\nwindow.STEP_NOTES = ${JSON.stringify({modules:catalog.modules, notes, formulaCount},null,2)};\n`);
console.log(JSON.stringify({modules:catalog.modules.length, notes:notes.length, formulaCount, tables:notes.reduce((n,s)=>n+(s.html.match(/<table>/g)||[]).length,0)}));

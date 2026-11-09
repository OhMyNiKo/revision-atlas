import { readFileSync, writeFileSync } from 'node:fs';
import { execFileSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';

const root = fileURLToPath(new URL('../', import.meta.url));
const source = readFileSync(`${root}language-sources/Niko_Instructional_Text_Revision_Table.md`, 'utf8');
// Explicitly resolve bold spans before Markdown parsing: CommonMark can leave
// adjacent Chinese punctuation/emphasis delimiters visible as literal asterisks.
const formatted = source.replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>');
let html = execFileSync('pandoc', ['-f', 'gfm', '-t', 'html5', '--wrap=none'], { input: formatted, encoding: 'utf8' });
let rowCount = 0;
html = html.replace(/<h[12]([^>]*)>([\s\S]*?)<\/h[12]>/g, '<h3$1>$2</h3>');
html = html.replace(/<tbody>([\s\S]*?)<\/tbody>/g, (_, body) => `<tbody>${body.replace(/<tr[^>]*>([\s\S]*?)<\/tr>/g, (_, cells) => {
  rowCount += 1;
  return `<tr class="aqa-test3-row" id="aqa-test3-term-${rowCount}">${cells.replace('<td>', '<td class="syllabus-wording">')}</tr>`;
})}</tbody>`);
html = html.replace(/<th>/g, '<th scope="col">');
html = html.replace(/<table>/g, '<div class="aqa-reference-table aqa-test3-table" role="region" aria-label="Test 3 revision table" tabindex="0"><table>');
html = html.replace(/<\/table>/g, '</table></div>');
writeFileSync(`${root}aqa-test3-notes.js`, `// Generated from the supplied Markdown. Run node scripts/build-aqa-test3.mjs.\nwindow.AQA_TEST3_HTML = ${JSON.stringify(html)};\n`);
console.log(`Test 3: ${rowCount} terminology rows; all original document sections retained.`);

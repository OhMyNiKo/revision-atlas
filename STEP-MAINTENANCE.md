# STEP notes

This is an additional subject in the existing Revision Atlas, not a replacement site.
The topic taxonomy combines STEP 2 and STEP 3. Probability/Statistics is intentionally excluded.

## Source of truth

- `step-sources/`: unchanged uploaded LaTeX documents.
- `step-catalog.json`: source dates, topic assignments and related-topic tags.
- `step-notes.js`: generated note bodies, formula annotations and source search text.
- `step-reader.js`: rendering of topic modules and links, without rewriting imported bodies.
- `step-notes.css`: continuous mathematical-handout layout, scoped to STEP.

## Import and verification

Install KaTeX 0.16.22 in a temporary build directory and have Pandoc 3.1.11.1 available.

```sh
node scripts/build-step-notes.mjs /absolute/path/to/node_modules/katex
node scripts/test-step-notes.mjs
```

Add future source documents and explicit section mappings before rebuilding. Keep the original
text, mathematical expressions, tables and emphasis; only normalise unsupported layout syntax.
The current import fixes an exported longtable column preamble without changing its cells.
The tests compare every source formula and count emphasis, notes, modules and table conversion.

KaTeX is run at build time; its MIT-licensed stylesheet and WOFF2 fonts are bundled in
`assets/step-math.css`. Visitors do not need a math CDN, a TeX installation or client-side math code.
Keep `assets/katex-LICENSE.txt` with the bundle. The existing subject search ranks STEP notes using
their source text, rather than duplicated KaTeX HTML/MathML text. There are no collapsible note cards.

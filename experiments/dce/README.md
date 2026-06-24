# Dead-server-code elimination experiments (runtime-tags) — ESM

Reproducible harness measuring how much dead server-only code reaches the
**client** bundle for various page shapes, under modern ESM bundling. See
`RESULTS.md` for findings.

Fixtures (`*.marko`):

- `static.marko` — fully static page (expect 0 client bytes)
- `page.marko` — static Header/Footer + interactive Counter island
- `Layout.marko` — deep static layout (Nav/Sidebar/Footer) + island
- `Dashboard.marko` — many server-only `${input.*}` bindings + island + `<if>`
- `List.marko` — static `<for>` list + island
- `islandonly.marko` — minimal interactive surface
- `ServerData.marko` — static `<const>` computed from a server-only dep
- `Article.marko` / `ArticlePage.marko` — static child embedded in an
  interactive parent

Scripts (run from repo root):

- `node experiments/dce/setup-deps.mjs` — one-time: creates the `heavy-lib`
  server-only dependency fixture (node_modules is gitignored)
- `node -r ~ts experiments/dce/floor.ts` — static-zero + runtime floor
- `node -r ~ts experiments/dce/sweep3.ts` — static `<for>` list
- `node -r ~ts experiments/dce/serverdep.ts` — server-only dependency leak
- `node experiments/dce/corpus.mjs` — aggregate the repo's own 574
  fixture `sizes.json` snapshots (real compiled+bundled output)

All use the repo's rolldown bundling harness
(`packages/runtime-tags/src/__tests__/utils/bundle.ts`) with `optimize: true`.

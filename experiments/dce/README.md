# Dead-server-code elimination experiments (runtime-tags)

Reproducible harness measuring how much dead server-only code reaches the
**client** bundle for various page shapes. See `RESULTS.md` for findings.

Fixtures (`*.marko`):

- `static.marko` — fully static page (expect 0 client bytes)
- `page.marko` — static Header/Footer + interactive Counter island
- `Layout.marko` — deep static layout (Nav/Sidebar/Footer) + island
- `Dashboard.marko`— many server-only `${input.*}` bindings + island + `<if>`
- `List.marko` — static `<for>` list + island
- `islandonly.marko` — minimal interactive surface

Scripts (run from repo root):

- `node -r ~ts experiments/dce/floor.ts` — static-zero + runtime floor
- `node -r ~ts experiments/dce/sweep.ts` — ESM vs downleveled-CJS across shapes
- `node -r ~ts experiments/dce/sweep2.ts` — island-only ESM vs CJS
- `node -r ~ts experiments/dce/sweep3.ts` — static `<for>` list

All use the repo's rolldown bundling harness
(`packages/runtime-tags/src/__tests__/utils/bundle.ts`) with `optimize: true`.

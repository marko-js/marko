---
type: cleanup
impact: low
effort: med
site: packages/runtime-tags/src/dom/resume.ts › Patcher
---

# Type each patcher's wire value by its patch kind

`Patcher` takes `value: unknown`, so every feature narrows its wire shape with a cast at the top of its handler (`entry as string`, `id as string`, tuple casts in `patch-value.feat.ts` and `patch-dynamic-tag.feat.ts`). Annotating the parameter directly (`id: string`) is rejected under strict function types because the table is `Record<string, Patcher>`. A per-kind value map (an interface keyed by `PatchKey` that each feature augments, with `patchers` mapped over it) would move each wire shape to a single declaration and drop the casts; dispatch keeps one cast from the entry key to `PatchKey.Value`.

Check: `grep -n " as " packages/runtime-tags/src/dom/patch-*.feat.ts | grep -c "entry as\|id as\|value as"` counts the narrowing casts; changing `patch-var.feat.ts` to `(scope, _key, id: string)` fails `pnpm exec tsc -b tsconfig.build.json --force` with TS2322.

---
type: bug
impact: low
effort: low
site: packages/runtime-tags/src/translator/util/references.ts › trackReference
---

# Read a written rest element's members from the rest object

`trackReference` reads a rest element's member through its source (the `excludeProperties` branch: `rest.b` is `live.b`), but a rest is a copy: with `<const/live={ a: 1, b: 2 }>` and `<const/{ a, ...rest }=live>`, `rest.b = 3` compiles to `$scope.rest.b = 3` while a later `rest.b` read compiles to `$scope.live_b` and still reads 2. `readMembersThroughWrittenValue` cannot redirect it, since the `live_b` alias chain never passes the rest binding. Direction: have `trackReference` stop at a rest whose value is written into instead of reading through its source, which needs the write known before the read (or the read recorded as starting at the rest).

Check: `pnpm run compile -- -o dom -d` on `<const/live={ a: 1, b: 2 }><const/{ a, ...rest }=live><button onClick() { rest.b = 3; }>set</button><button onClick() { console.log(rest.b); }>read</button>` shows `console.log($scope.live_b)`.

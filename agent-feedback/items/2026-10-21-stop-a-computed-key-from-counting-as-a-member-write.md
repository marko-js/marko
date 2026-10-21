---
type: bug
impact: low
effort: low
site: packages/runtime-tags/src/translator/util/references.ts › trackReference
---

# Stop a computed key from counting as a member write

`trackReference` walks up while the parent is any member expression, without checking that the reference is the member's object, then asks `isAssignedMember`. So in `o[x] = 1`, `o[x]++` or `delete o[x]`, the key `x` is treated as if its own members were assigned in place: a needless de-optimization of `x`, and for a rest binding a wrong error. Guard the walk with "the reference is the member's `object`" (an `isMemberObject(path)` next to `isAssignedMember`); the same applies one level up for `o[x.y] = 1`.

Check: `printf '<const/{ a, ...rest }=input/>\n<let/o={}/>\n<button onClick() { o[rest] = 1 }>x</button>\n' > rest.tmp.marko && pnpm run compile -- -o dom rest.tmp.marko` throws "`rest` is a rest element … assigning its members would be lost", though nothing assigns a member of `rest`.

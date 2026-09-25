---
type: bug
impact: med
effort: med
site: packages/runtime-tags/src/translator/util/references.ts › trackReference
---

# Read a value's members through it after a method call mutates it

`trackReference` adds a value to `getWrittenValues` only for a syntactic member write (`hasWrittenMember`), so a value mutated by a method call keeps its property aliases, each a copy taken when the value was assigned: with `<const/seen=new Set()>`, `seen.add(1)` in one handler and `console.log(seen.size)` in another, the read compiles to `$scope.seen_size` and logs 0 forever. `list.push(x)` then `list.length` is the same. Direction: treat the object of a method call (the `isInvokedFunction` break) as written into, limited to values the template creates (a `<const>`/`<let>` value, not `input`, whose prop tree would lose its known props), and measure the aliases it drops in `build:sizes` and fixture `sizes.json`; or say at the site that only syntactic writes count.

Check: `pnpm run compile -- -o dom -d` on `<const/seen=new Set()><button onClick() { seen.add(1); }>add</button><button onClick() { console.log(seen.size); }>read</button>` shows `console.log($scope.seen_size)`.

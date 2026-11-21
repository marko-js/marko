---
type: perf
impact: low
effort: low
site: packages/runtime-tags/src/translator/util/optional.ts › forEach
---

# Index the `Opt` list helpers instead of iterating them

`forEach`, `some` and `every` in `optional.ts` loop over a `Many` list with `for…of`. Outside TurboFan (most of a short compile runs in the interpreter, Sparkplug or Maglev), each loop allocates an array iterator plus one `{ value, done }` result per item. These helpers run per binding, section, read and call site across the translator, so the garbage grows with the template. Index them as `reduce` already does (`for (let i = 0, len = data.length; i < len; i++)`); `fromIter` takes an `Iterable` and keeps its `for…of`.

Check: `node --jitless -e 'const v8=require("v8"),a=[1,2,3];let s=v8.getHeapStatistics().total_allocated_bytes;for(let i=0;i<1e5;i++)for(const x of a);const f=v8.getHeapStatistics().total_allocated_bytes-s;s=v8.getHeapStatistics().total_allocated_bytes;for(let i=0;i<1e5;i++)for(let j=0;j<a.length;j++)a[j];console.log("for-of", f, "indexed", v8.getHeapStatistics().total_allocated_bytes-s)'` prints about 21 MB for the `for…of` loops against 43 KB indexed.

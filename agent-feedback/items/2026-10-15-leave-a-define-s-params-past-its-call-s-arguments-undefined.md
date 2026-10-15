---
type: bug
impact: med
effort: med
site: packages/runtime-tags/src/translator/util/known-tag.ts › writeParamsToSignals
---

# Leave a `<define>`'s params past a direct call's arguments undefined in the browser

A known `<define>` called directly with fewer arguments than it has params gets, in the DOM output, the call's input object (`{}`) in the param at the argument count (the slot the input takes when a call has no arguments), and nothing in the params after it, so their defaults never apply. The server render (`getRenderArgs`) and a dynamic tag pass only the arguments, so a client render disagrees with SSR: `<define/MyTag|a, b, c = a + 1|>` called as `<MyTag(n)/>` renders `1|object|` in the browser and `1|undefined|2` on the server, and an `<if=isOpen>` on the second param of `<Panel(input.label)/>` shows its body in the browser only. Attributes next to arguments are an error, so a call with arguments needs its input only to carry a body or attribute tags; analysis (`analyzeParams`), `getRenderArgs` and `writeParamsToSignals` should share that rule and write every param past what the call passes as undefined in setup.

Check: add a fixture whose `template.marko` is `<let/n=1/><define/MyTag|a, b, c = a + 1|><span>${a}|${typeof b}|${c}</span></define><MyTag(n)/><button onClick() { n++; }>${n}</button>` and whose steps are `[{}, click]` (clicking the button); `pnpm run test:update -- --grep "runtime-tags/translator <name> "` fails with a `render.debug.md` conflict: the client render writes `1|object|` then `2|object|3`, the resumed one `1|undefined|2` then `2|undefined|3`.

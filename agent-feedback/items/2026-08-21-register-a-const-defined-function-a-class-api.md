---
type: bug
impact: high
effort: med
site: packages/runtime-tags/src/translator/visitors/function.ts › finalizeFunctionRegistry
---

# Register a `<const>`-defined function a Class API child's handler closes over

A Tags parent that declares `<const/log = (s) => s * 2/>` and passes `onCount(newCount) { count = log(newCount) }` to a Class API child fails SSR with `TypeError: Unable to serialize "log" in …/template.marko:1:8`. Two controls isolate it: the identical template with a Tags child renders, and inlining the body into the handler renders. The compiled output shows why — with a Tags child the declaration becomes `const log = _resume((s) => s * 2, "…/log")`, a registered function the serializer can write, while through the interop path (`_dynamic_tag` onto the Class renderer) it stays a bare `const log = (s) => s * 2` even though `writeScope($scope0_id, { log }, …)` still lists the binding. So the serialize-reason analysis and the function-registration analysis disagree about one binding, and the error names neither the interop boundary nor `<const>`. `resolveSerializeReason` needs the class-child attribute reference to count the way the tags-child one already does.

Check: an interop fixture whose Tags parent holds `<const/log = (s) => s * 2/>` and passes `onCount(newCount) { count = log(newCount) }` to a `components/class-counter.marko` Class child fails its `ssr` step with `Unable to serialize "log"`, while the same fixture pointed at a Tags child passes every step; expect both to pass.

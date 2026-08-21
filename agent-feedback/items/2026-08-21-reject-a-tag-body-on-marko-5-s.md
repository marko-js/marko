---
type: bug
impact: high
effort: low
site: packages/runtime-class/src/translator/taglib/core/translate-await.js › enter
---

# Reject a tag body on Marko 5's `<await>` instead of dropping it

`enter` checks only the argument count, so the Marko 6 spelling `<await(promise)|v|><span>${v}</span></await>` compiles clean in a Class API file into `renderTag(_await, { _provider, _name, renderBody: (out, v) => … })`. `core-tags/core/await/renderer.js` renders `input.then.renderBody`, `input.catch.renderBody` and `input.placeholder.renderBody` and never the tag's own `renderBody`, so the body and its parameter are discarded: the region is empty in the response, the status is 200 and nothing is logged, while the correct `<@then|v|>` form beside it in the same template renders. This is the exact edit a migration makes, and it is the one direction that goes quiet — the Tags API rejects the same source with `Tag does not support arguments. Write the promise as a value attribute and receive the result as a tag parameter instead`. `enter` already walks the tag; have it throw a code-frame error naming `<@then|result|>` when `<await>` carries a body or params.

Check: compile and render `<await(Promise.resolve("x"))|v|><span>${v}</span></await>` in a Class API template — the emitted region is empty today with no diagnostic; expect a compile error pointing at `<@then>`.

---
type: bug
impact: med
effort: low
site: packages/runtime-tags/src/translator/core/for.ts › analyze
---

# Reject a `<for>` parameter the iteration form never supplies

`<for|item, index, extra| of=[1,2,3]>` compiles clean and `extra` is `undefined` on every iteration, so the mistake surfaces only as blank output. Each iteration form has a fixed arity that is known at analyze time — `of=` yields the item and its index, `in=` yields key and value, and the `to=`/`from=`/`step=` form yields one value — so a parameter beyond that arity is provably dead and is exactly the kind of thing a developer coming from another framework's `map((item, i, arr) => …)` writes. `<for>`'s existing attribute diagnostics are the model to copy: they name the tag, list what is legal for the form in use, and link the docs.

Check: `pnpm run compile -- -o html -d <file>` on `<for|item, index, extra| of=[1,2,3]><div>${extra}</div></for>` compiles without error.

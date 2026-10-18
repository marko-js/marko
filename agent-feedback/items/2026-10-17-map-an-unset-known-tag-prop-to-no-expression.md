---
type: perf
impact: low
effort: low
site: packages/runtime-tags/src/translator/util/reasons.ts › getKnownExprsAt
---

# Map an unset known tag prop to no expression in param reasons

`analyzeAttrs` gives a prop the call leaves unset no entry in `known`, and `getKnownExprsAt` reads a missing entry as one a spread passes (`{ value: known.value }`). Beside a rest, `value` is the tag's merged references, so a param reason group holding the unset prop takes every attribute's sources: the call's scope reason masks groups no attribute it passes changes. Tell an unset prop (always `undefined`) apart from one a spread passes, so its group maps to no expression.

Check: in `patch-define-created-rest-unset-beside-stateful-body` (`hidden` unset beside `...rest`), the call's `_set_scope_reason` in html.bundle.js masks five groups; giving each unset prop `known[name] = { value: undefined }` in `analyzeAttrs` leaves four.

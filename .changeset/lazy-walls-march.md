---
"@marko/runtime-tags": patch
---

Fix `&&`, ternary (`a ? b : c`), and `&&=` expression results being treated as non-nullable unless _both_ sides were nullable. Since `a && b` yields `a` when `a` is falsy and a ternary yields whichever branch is taken, the result is nullable if _either_ side is. Under-approximating dropped the optional-chaining / `|| {}` guards on reads of such bindings, throwing at runtime; the result is now correctly treated as nullable when either side is, matching the `||`/`??` cases.

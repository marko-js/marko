---
"@marko/compiler": patch
---

An invalid parameter in an attribute method (`<a onClick(1){}>`) is now reported as a compile error with a code frame at the parameter, instead of crashing with Babel's `TypeError: Property params[0] of FunctionExpression …`.

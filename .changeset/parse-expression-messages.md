---
"@marko/compiler": patch
---

Expression parse errors no longer name Babel's internal `parseExpression()` API. An expression that is empty or only comments now reports "Expected an expression, but found only whitespace or comments.", and one followed by more input, such as `${a b}`, reports "Expected a single expression, but found `b` after it."

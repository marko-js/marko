---
"@marko/babel-utils": major
"@marko/translator-default": minor
"@marko/compiler": minor
"marko": minor
---

Allow parse errors to be recovered from by migrations. This adds a new ast node type of MarkoParseError.
MarkoParseError nodes can be removed during the migration stage to handle legacy syntaxes. Any MarkoParseError
left in the AST at the end of the migration phase will throw an error similar to what it would have previously
thrown synchronously.

This also means that all parse errors can be surfaced as an aggregate error instead of bailing on the first
parse error. When the compiler is ran with `errorRecovery: true` these errors become diagnostics instead of
being thrown.

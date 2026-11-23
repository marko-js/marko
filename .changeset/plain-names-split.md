---
"@marko/runtime-tags": patch
---

A toggled class's names must be one space apart, as the client splits them: a literal key spaced otherwise (`{ "a  b": on }`) is a compile error, and debug builds throw for a style import read spaced otherwise. The debug class check no longer reports an empty class name for literal parts with extra whitespace, and the client adds or removes a toggled class's several names in one call.

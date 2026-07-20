---
"@marko/runtime-tags": patch
---

Throw clear development errors for invalid `<for>` inputs instead of failing opaquely. A `<for of>` whose value is a truthy non-iterable (a number, plain object, `Date`, …) previously surfaced the engine's `x is not iterable` with a stack pointing into compiled runtime; it now names the `of` attribute. A `<for to>`/`<for until>` with a non-finite bound previously rendered nothing (`NaN`) or looped forever (`Infinity`, hanging server rendering); it now reports the offending attribute and value. These checks are development-only, so production output is unchanged.

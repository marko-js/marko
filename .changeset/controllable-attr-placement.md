---
"@marko/runtime-tags": patch
---

Error when a controllable change handler is used on an element that doesn't support it. `valueChange`, `checkedChange`, `checkedValue`, `checkedValueChange`, and `openChange` are Marko controllable conventions that are only wired up on specific elements (value → `<input>`/`<select>`/`<textarea>`, checked → `<input>`, open → `<details>`/`<dialog>`). On any other element (e.g. `<div valueChange=fn>`, `<select checkedChange=fn>`) they previously fell through to a plain attribute and silently did nothing. Statically known misuses are a compile error; dynamic/spread usage is caught by a `MARKO_DEBUG`-only runtime check.

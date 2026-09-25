---
"@marko/runtime-tags": patch
---

Fix `Unable to serialize` (or content silently missing in production) when content passed into a tag reaches an attribute tag `<for of>`/`<for in>` inside a known child tag and is read, through the loop's param, by content first created in the browser, such as an `<if>` that turns on after resume. The passed content is now registered for resume.

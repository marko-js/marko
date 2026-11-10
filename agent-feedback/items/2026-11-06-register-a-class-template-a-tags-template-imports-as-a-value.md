---
type: bug
impact: low
effort: med
site: packages/runtime-tags/src/translator/visitors/tag/dynamic-tag.ts › needsCompat
---

# Register a Class API template a Tags template imports as a value

A Tags template registers a Class API template for the browser (`s("…/class-thing.marko", _marko_template)`) and links the compat runtime only when it renders that template as a tag (`<class-thing/>`). Imported as a value instead (`import ClassThing from "./class-thing.marko"`, or `import * as ClassThing`) and rendered through a dynamic tag that resumes, the server renders it but cannot serialize its renderer key, the template itself, so a debug build throws and an optimized one remounts it on the first client update. On a page with no other Class API tag use the compat runtime is not even loaded, and the value renders nothing in either build. Treat a value import of a Class API template like a tag use: register it and link the compat runtime.

Check: a `fixtures-interop` fixture whose `template.marko` is a `class {}` with `show` state toggled by a `#toggle` button, `<tags-host show=state.show/>` and `<init-components/>`, with `components/tags-host.marko` as `// use tags`, `import ClassThing from "./class-thing.marko";`, `<${input.show && ClassThing}/>` and `components/class-thing.marko` as `class {}` then `<b id="thing">thing</b>`, fails debug `ssr` with ``Unable to serialize the conditional renderer of `<text>` ``.

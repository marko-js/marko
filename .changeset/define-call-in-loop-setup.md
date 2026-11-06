---
"@marko/runtime-tags": patch
---

Fix a client crash (`$…_content__setup is not defined`) when a `<define>` in a `<for>` body reads only the loop's key and its own params, and is rendered statically (`<D/>`) or dynamically (`<${D}/>`).

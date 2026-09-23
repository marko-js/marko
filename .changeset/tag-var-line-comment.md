---
"@marko/compiler": patch
---

Accept a tag var that ends in a line comment (`<div/el // the box\n  class="box"/>`), which htmljs-parser folds into the var, and keep the comment from swallowing the rest of the tag in source output.

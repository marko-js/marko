---
"@marko/compiler": patch
---

Raise htmljs-parser to 5.22, which fixes several misparses: regular expressions after keywords like `return`, escaped quotes and regular expressions in `<script>` bodies, `<!-- a->b -->` comments, spaced non-null `!` assertions, attribute values starting with a comment, and unfinished concise constructs at EOF.

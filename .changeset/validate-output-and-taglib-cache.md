---
"@marko/compiler": patch
---

Reject an unrecognized `output` compiler option with an error naming the accepted values (`html`, `dom`, `source`, `migrate`, `hydrate`) instead of silently compiling to the DOM runtime. Also stop caching a taglib whose JSON failed to parse, so fixing a broken `marko-tag.json` takes effect without restarting, and include the JSON parse error in the message.

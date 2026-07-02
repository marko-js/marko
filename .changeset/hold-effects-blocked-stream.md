---
"@marko/runtime-tags": patch
---

Fix a resume crash (`Cannot read properties of undefined (reading 'nodeType')` in `setConditionalRenderer`) when a `<script>` effect flushed before an in-order `<await>` resolved triggered a state update targeting content rendered after the pending `<await>`. Effects are now held on the blocked chunk and flush once its async content completes, so state updates only run against markers that exist in the document.

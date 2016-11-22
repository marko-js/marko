Marko Helpers
=============

This directory contains helpers that were deprecated in Marko v3. Marko v4 no longer adds these helpers to every compiled template, but you can still import them if needed:

```xml
<script marko-init>
var empty = require('marko/helpers/empty');
var notEmpty = require('marko/helpers/notEmpty');
</script>
```

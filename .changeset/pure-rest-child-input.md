---
"@marko/runtime-tags": patch
---

Fix children consuming input only through a rest pattern or direct alias: their input groups now map their real feeders (restoring resume serialization for fed values), and the generated `$input` alias export no longer references its target before declaration.

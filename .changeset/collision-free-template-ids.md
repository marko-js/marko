---
"@marko/compiler": patch
---

Fix an optimized build failing with "Property value expected type of string but got undefined" for the rare file path whose hashed template id came out undefined. Known template ids (`optimizeKnownTemplates`) no longer contain digits, so one can no longer equal another template's register id once an app passes more than 2862 known templates. The digest fix changes about half of hashed template ids, and known template ids change from the 2863rd template on, so rebuild server and client together.

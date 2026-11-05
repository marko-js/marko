---
"@marko/runtime-tags": patch
---

Share one precomputed `class` table between elements whose toggles produce the same markup in server output, rather than declaring a copy per element. A spread on an element named by a template literal now enables only that element's control kind: a custom element no longer pulls in every controllable, and `<input>` stays controlled when a custom tag shares its name.

---
"@marko/runtime-tags": patch
---

Fix an html compile crash (`Cannot read properties of null (reading 'isExpressionStatement')`) when hoisting a serialized rest alias whose owning section is the program itself, such as a `{ a, ...rest }` destructure spread inside an `<else>`

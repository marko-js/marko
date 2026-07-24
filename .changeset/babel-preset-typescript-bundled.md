---
"@marko/compiler": patch
---

Fix `dist/babel.js` shipping an unresolvable `require("@babel/preset-typescript/package.json")`, which broke bundling the compiler — `@marko/ts-plugin` and `marko-vscode` both failed with `Could not resolve "@babel/preset-typescript/package.json"`.

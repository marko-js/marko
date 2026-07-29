---
"@marko/compiler": patch
---

Stop blanking modules inside Babel's re-export barrels. Emptying `@babel/generator`'s jsx printer perturbed the bundler's analysis of the barrel that assembles the printer, and parentheses were dropped from generated code: `(await fetch(url)).json()` printed as `await fetch(url).json()`. The remaining prunes, which rewrite explicit registries rather than blanking modules, are unaffected.

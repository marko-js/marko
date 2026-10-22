---
"@marko/runtime-tags": patch
---

A `<define>` that calls another `<define>` whose body reads a value of the template around them (`<define/E>${input.x}</define><define/D><E/></define><D/>`) no longer throws `Cannot read properties of undefined (reading 'ClosureScopes:…')` when it renders in the browser, or when a resumed page creates the inner call later.

---
"@marko/compiler": patch
---

Restore three Babel modules that the last release pruned but the compiler does reach. `@babel/generator`'s flow printer is borrowed by the class printer and owns `TypeParameterDeclaration`, so dropping it mangled unrelated output: an arrow IIFE lost its wrapping parentheses and emitted `}()`. The flow and jsx node definitions are needed because `helper-create-class-features-plugin` registers a `JSXIdentifier` visitor, which `@babel/traverse` rejects when the type is missing.

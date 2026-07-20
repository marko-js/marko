# Context Map

## Contexts

- [Runtime Tags (Marko 6)](./packages/runtime-tags/CONTEXT.md) — the Marko 6 runtime and its translator; fine-grained reactivity, serialization, and resume

Other packages (`compiler`, `runtime-class`) do not yet have a documented context; add them here when their first term is resolved.

## Relationships

- **Compiler → Runtime Tags**: `@marko/compiler` parses `.marko` into the hybrid Babel AST and hands it to the runtime-tags translator (`marko/translator`) for analysis and codegen.
- **Runtime Tags → Runtime Class**: runtime-class (Marko 5) wraps the class-API translator with runtime-tags' interop layer.

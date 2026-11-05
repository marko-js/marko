---
"@marko/compiler": patch
---

Find a template's package root with a cached directory walk instead of `lasso-package-root`, dropping it and `lasso-caching-fs` from the dependencies. The lookup is `getRootPackage` on `@marko/compiler/modules`, beside `resolve` and `tryResolve`, so an environment without a real file system can replace it the same way.

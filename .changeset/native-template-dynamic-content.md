---
"@marko/runtime-tags": patch
---

Support dynamic content inside a native `<template>`. The parser moves a `<template>`'s body into its `content` fragment, which neither a client render's walk nor resume reached, so control flow, placeholders or tags inside one crashed. A template with dynamic content now imports a `template-content` feature that walks into `content` on client renders and, from a marker written after the `<template>` when its content resumes, on resume; content inside keeps updating, so later clones of it see the current state. Bundles without such a template are unchanged.

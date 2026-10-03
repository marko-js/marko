---
"@marko/runtime-tags": patch
---

Report a compile error for dynamic content inside a native `<template>`, such as a placeholder, control flow, an event handler or a tag that renders content. The browser's parser moves a `<template>`'s body into its `content` fragment, which Marko's client code never reaches, so such content crashed a client render or a resumed page. Attributes on the `<template>` element itself still update.

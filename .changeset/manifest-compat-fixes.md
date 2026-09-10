---
"@marko/compiler": patch
---

Improve custom elements manifest compatibility with published libraries: normalize leading-slash module refs when resolving declarations (Spectrum), and keep tags typed but skip browser registration when the manifest points at a module the package does not ship (Nord).

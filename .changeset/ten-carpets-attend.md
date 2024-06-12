---
"@marko/translator-default": patch
"@marko/translator-interop-class-tags": patch
"@marko/compiler": patch
"marko": patch
---

Misc backward compat improvements:

- Expose `marko/browser-refresh` as a noop
- Allow translators to specify "optional" taglibs to load if they're installed (used for automatically loading compat taglibs)
- `marko/node-require` legacy require hook now disables user babel transforms by default
- Allow `<macro>` tag instances to use tag arguments syntax

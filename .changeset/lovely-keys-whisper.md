---
"marko": patch
"@marko/compiler": patch
"@marko/translator-default": patch
---

Fix issue where `module-code` entries were not properly checking the expected module output (causing them to always output esm). This was previously fine due to the cjs conversion plugin running for these, however a recent change caused that plugin to no longer run for these files since (which should have been unnecessary, except for that they had the incorrect check).

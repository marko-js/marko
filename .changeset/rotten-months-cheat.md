---
"marko": patch
---

Fix regression where interpolating null/undefined in a script/style tag was being replaced with an empty string instead of toString'd and added.

Eg `<script>${undefined}</>` was changed to render nothing, when previously it output `undefined` as a string inside the script.

Note this behavior should not be relied on and will change in the next major of Marko to normalize the interpolated value to an empty string for nullish values.

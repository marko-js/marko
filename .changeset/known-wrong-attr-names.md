---
"@marko/runtime-tags": patch
---

Error on native tags when an attribute name is a recognizable idiom from another framework (React, Svelte, Vue) that is not valid in Marko, with a suggestion for the correct syntax. These previously compiled but silently produced a junk attribute (HTML attribute names are case-insensitive, so e.g. `className` becomes the `classname` attribute, not `class`). Examples:

- React: `className` → `class`, `htmlFor` → `for`, `defaultValue` → `value`, `defaultChecked` → `checked`, `acceptCharset` → `accept-charset`, `httpEquiv` → `http-equiv`
- Svelte: `class:active` → `class={ active: condition }`, `style:color` → `style={ color: value }`, `on:click` → `onClick`, `bind:value` → `value:=state`
- Vue: `v-if` → `<if>`, `v-for` → `<for>`, `v-model` → `value:=state`, `v-on:click` → `onClick`, `v-bind:class` → `class`

The check runs for both static attributes (compile error) and dynamic/spread attributes (`MARKO_DEBUG`-only runtime error in the server and client attribute runtimes). Only native tags are checked — custom components may still accept input props with these names. (Vue's `:`/`@` and Angular's `[`/`(`/`*` shorthands already error as invalid attribute names.)

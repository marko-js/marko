Changelog
=========

# 2.x

## 2.8.x

### 2.8.0

-  Added support for automatically discovering taglibs from installed packages that are scoped. ([PR #183](https://github.com/marko-js/marko/pull/183) by [@tropperstyle](https://github.com/tropperstyle)) 

## 2.7.x

### 2.7.31

- Fixes #167 - Nested tags only work one level deep

### 2.7.30

- docs: don't exclude docs in .npmignore

### 2.7.29

- Fixes #161 - Nested tags with no body content are not handled correctly

### 2.7.28

- Fixes #140 - Also de-dupe cached taglibs in finder

### 2.7.27

- Make loading template from String template source easier:

```javascript
var template = marko.load(
    templatePath,
    'Hello $!{data.name}!');
```

_NOTE: Loading directly from source only works on the server_

See [Pull Request #153](https://github.com/marko-js/marko/pull/153)

### 2.7.26

- Use shorter relative paths in error messages

### 2.7.25

- Fixes #150 - Provide option to prevent writing compiled templates to disk. Example usage:

```javascript
require('marko/compiler').defaultOptions.writeToDisk = false;
```

NOTE: If you disable writing compiled templates to disk then it will be a little harder to debug errors in templates on the server since the stack trace will refer to a file that has not been written to disk.

For a more complete list of compiler options please see: http://markojs.com/docs/marko/javascript-api/#defaultoptions

### 2.7.24

- Fixes #140 - De-dupe taglibs by module name
- Documentation: Miscellaneous changes

### 2.7.23

- Fixed a typo for `rendererFunc` `in helpers.js` (commit: 0205a47f04911f34ca4d458970d710f81a143987)

### 2.7.22

- New language feature: [`unless` support added](http://markojs.com/docs/marko/language-guide/#unlesselse-ifelse)

### 2.7.21

- Automatically enable hot-reload and browser-refresh if launched using [browser-refresh](https://github.com/patrick-steele-idem/browser-refresh)

### 2.7.20

- Documentation: Miscellaneous changes

### 2.7.19

- Fixes #137 - adds support for dynamic HTML tag names

### 2.7.18

- Improvement: Better resolving of tag renderer
- Compiler: Fix to make compiler work in the browser

### 2.7.17

- Fixes #135 Allow "attrs" attribute on custom tags

### 2.7.16

- Improved handling of imports
- Better handling of loading taglibs with circular dependencies

### 2.7.15

- Handle circular taglib imports

### 2.7.14

- Fixes #131 - Recursively handle taglib imports

### 2.7.13

- Added a `.npmignore` file
- Fixed licensing header in source
- Documentation: improved docs for input.renderBody()
- Documentation: Miscellaneous changes

### 2.7.12

- Fixes #122 Don't allow invalid attributes when using shorthand
- Fixes #122 Typo in hasAttributes
- Fixes #127 - Make sure all possible input files are accounted for when checking if a compiled template is up-to-date
- Use `browser.json` files instead of `optimizer.json` files
- Documentation: Improved docs for async taglib
- Documentation: Added empty() and notEmpty() helpers to the readme
- Added Martin Aberer as a maintainer
- Documentation: Miscellaneous changes

### 2.7.11

- New logo!

### 2.7.10

- Fixes #118 Better error when parsing JSON file for tag
- Testing: More test cases related to empty attributes
- Documentation: Clarification for the Node.js require extension
- Documentation: doc reference for `getLength()` of loop `status-var`
- Documentation: Added reference to [sublime-marko](https://github.com/merwan7/sublime-marko) under the tools section.

### 2.7.9

- Fixes #109 - Allow `compiler.createNode('div')`
- Fixes #108 - Improve how the `MARKO_CLEAN` env variable is handled

### 2.7.8

- Minor documentation changes

### 2.7.7

- Allow `.html` extension for layouts (Fix for https://github.com/raptorjs/marko-layout/issues/2)

### 2.7.6

- Make require('marko/node-require').install() a noop in the browser

### 2.7.5

- Improvement: Allow `template-data` to be combined with other attributes on the `<include>` tag
- Documentation: Fixes #98 - docs for `<include template-data="...">`

### 2.7.4

- Fixes #96 - Allow relative, dynamic include paths

### 2.7.3

- Internal change: Additional test cases added for using promises with async fragments

### 2.7.2

- Fixes #73 - Prevent same taglib from being loaded multiple times

### 2.7.1

- Fixes #88 - Assign global data to the correct out

### 2.7.0

- Fixes [#27](https://github.com/raptorjs/marko/issues/27) - IE conditional comments (e.g., `<!--[if lt IE 9]><div><![endif]-->`) are automatically preserved. Previously, all HTML comments were stripped out when loading a template. For example:
- Added support for `<compiler-options comments="preserve"/>` to enable comments to preserved in a template. For example:

```xml
<compiler-options comments="preserve"/>
Hello
<!--This comment should be preserved-->
World
```

Output:

```xml
Hello
<!--This comment should be preserved-->
World
```

## 2.6.x

### 2.6.0

- Performance improvements
    - `'use strict';`
    - Optimized render code paths
- Code cleanup
- Compatibility fixes for Node.js 0.12
    - Bad: `fs.readFile(path, 'utf8')`
    - Good: `fs.readFile(path, {encoding: 'utf8'})`

## 2.5.x

### 2.5.0

- Fixes #78 - Custom Node.js require extension for Marko template files. Example usage:

```javascript
// Install the Node.js require extension in your application's main script (server-side only)
require('marko/node-require').install();

// Now you can require `*.marko` files just like any other JavaScript module
var template = require('./hello.marko');
var html = template.renderSync({ name: 'Frank' });
```

- Compiled templates now export a loaded Template instance. In the previous version of marko, compiled templates exported a function that could be used to create a loaded Template instance.

## 2.4.x

### 2.4.3

- Fixes edge case: More precise regular expression for decoding HTML entities

### 2.4.2

- Internal: Fixes #75 Always assign the tag property to custom tag nodes

### 2.4.1

- Improvement to allow taglibs to be imported from other taglibs ([commit](https://github.com/raptorjs/marko/commit/73e9a3420a1bac3e2c201d4dcadf21c0701b5222))

### 2.4.0

- Added support for short-hand tags and attributes

Old `marko-taglib.json`:

```json
{
    "tags": {
        "my-hello": {
            "renderer": "./hello-renderer",
            "attributes": {
                "name": "string"
            }
        }
    }
}
```

Short-hand `marko-taglib.json`:

```json
{
    "<my-hello>": {
        "renderer": "./hello-renderer",
        "@name": "string"
    }
}
```

- Fixes #61 Simplify parent/child relationships

Marko now supports custom tags in the following format: `<parent_tag.nested_tag>`

Example usage:

```html
<ui-tabs orientation="horizontal">
    <ui-tabs.tab title="Home">
        Content for Home
    </ui-tabs.tab>
    <ui-tabs.tab title="Profile">
        Content for Profile
    </ui-tabs.tab>
    <ui-tabs.tab title="Messages">
        Content for Messages
    </ui-tabs.tab>
</ui-tabs>
```

___ui-tabs/marko-tag.json___

```json
{
    "@orientation": "string",
    "@tabs <tab>[]": {
        "@title": "string"
    }
}
```

___ui-tabs/renderer.js___

```javascript
var template = require('marko').load(require.resolve('./template.marko'));

exports.renderer = function(input, out) {
    var tabs = input.tabs;

    // Tabs will be in the following form:
    // [
    //     {
    //         title: 'Home',
    //         renderBody: function(out) { ... }
    //     },
    //     {
    //         title: 'Profile',
    //         renderBody: function(out) { ... }
    //     },
    //     {
    //         title: 'Messages',
    //         renderBody: function(out) { ... }
    //     }
    // ]
    console.log(tabs.length); // Output: 3

    template.render({
        tabs: tabs
    }, out);

};
```

___ui-tabs/template.marko___

```html
<div class="tabs">
    <ul class="nav nav-tabs">
        <li class="tab" for="tab in data.tabs">
            <a href="#${tab.title}">
                ${tab.title}
            </a>
        </li>
    </ul>
    <div class="tab-content">
        <div class="tab-pane" for="tab in data.tabs">
            <invoke function="tab.renderBody(out)"/>
        </div>
    </div>
</div>
```

## 2.3.x

### 2.3.2

Fixes #66 - Allow circular dependencies when loading templates

### 2.3.1

- Testing framework changes
- Fixes #65 - Generated variable name is an empty string in some cases

### 2.3.0

- Fixes #53 Merge c-input with attr props

## 2.2.x

### 2.2.2

Fixes #60 Don't replace special operators for body functions

### 2.2.1

- Fixes #58 Added support for MARKO_CLEAN env variable (force recompile of all loaded templates). Example usage:

```bash
MARKO_CLEAN=true node run.js
```

- Code formatting: add spaces in var code

### 2.2.0

- Fixes #51 Allow body content to be mapped to a String input property
- Fixes #52 Remove JavaScript comments from JSON taglib files before parsing

## 2.1.x

### 2.1.6

- Fixes #50 Initialize the loader after the runtime is fully initialized

### 2.1.5

- Fixes #50 Ensure that all instances of marko have hot-reload and browser-refresh enabled

### 2.1.4

- Allowing complex var names (i.e. LHS) for the `<assign>` tag.

### 2.1.3

- Minor change: Slight improvement to code to resolve tag handler

### 2.1.2

- Minor change: Improve how renderer is resolved

### 2.1.1

- Fixes #48 name in marko-tag.json should override default name given during discovery

### 2.1.0

- Fixes #47 - Added support for "taglib-imports"

## 2.0.x

### 2.0.12

- Fixes #31 - Add support for providing prefix when scanning for tags
- Allow "code" to be a function that lazily evaluates to a code string during code generation

### 2.0.11

- Added method for custom node compilers to get access to the `escapeXml` function at runtime

### 2.0.10

- Fixes #39 - Added missing return when using hot-reload

### 2.0.9

- Fixed bad publish

### 2.0.8

- Better merging of tags when loading and merging taglibs

### 2.0.7

- Changes to avoid problems associated with the same taglib being found multiple times in the search path

### 2.0.6

- `renderBody` function is only added if tag has children

### 2.0.5

- Fixed #36 - Don't use `invokeBody()` in the cache taglib

### 2.0.4

- :exclamation: Fixed #36 - Deprecated - When using `<include>` with body content, nested body content is now passed in as `String` property named `body`. Old behavior: nested content would be passed in as a `Function` property named `invokeBody` that would return the `String` value of the nested content. `invokeBody()` has been deprecated.

### 2.0.3

- Fixed #36 - Don't use `invokeBody()` in test code and the HTML comments tag

### 2.0.2

- :exclamation: Fixed #36 - Deprecated `input.invokeBody()` in favor of `input.renderBody(out)`
- Fixed #37 - Duplicate input property for custom tag renderers

### 2.0.1

- Fixed #35 - Added support for `<compiler-options>`. Example:

```html
<compiler-options whitespace="preserve" />
A
B
C
```

### 2.0.0


- Dynamic attributes for scanned tags without a tag will have dashes removed by default.
    - :exclamation: When using `tags-dir` to discover tags that do not have a `marko-tag.json`, the previous behavior was to allow all attributes and to use the actual attribute name as the input property name. For example, when using `<hello first-name="John">`, first name would need to be read in as `input['first-name']`. This was changed such that the first name property should now be read in as `input.firstName` (dashes removed and converted to camel case)
- Changes to allow UI component to be put into a single JS file:
    - Updated taglib directory scanner to use `index.js` if found. New search order:
        1. `renderer.js` (use `renderer.js` if it exists)
        2. `index.js` (use `index.js` if it exists and assume it exports a `renderer` or `render` property)
        3. `template.marko` (use the template as the renderer if no `renderer.js` or `index.js`)
    - :exclamation: Changes to the taglib directory scanner could break existing code. Specifically, if a UI component directory had an `index.js` file and a `template.marko` file then in in `marko@<2` the `template.marko` file would have been selected as the renderer. In `marko@2.x`, the `index.js` will be selected as the tag renderer.
- :exclamation: Removed support for mapping a tag renderer to a module with a `process` method
- Removed sub-module `marko/renderer` that exports [raptor-renderer](https://github.com/raptorjs/raptor-renderer)

# 1.x

## 1.6.x

### 1.6.1

- Added back code to allow the new marko runtime to load templates compiled by an earlier compiler that used `module.exports`

### 1.6.0

- Fixed #32. Switched from `module.exports = function create(__helpers) { ... }` to `exports.create = function(__helpers) { ... }` to avoid circular dependency problems


## 1.5.x

### 1.5.8

- Added support for adding "static" code to the top of a compiled template (helpful for initializing variables or running code once).

### 1.5.7

- Added sub-module `marko/renderer` that exports [raptor-renderer](https://github.com/raptorjs/raptor-renderer)

### 1.5.6

- Changes to avoid unoptimized code in V8

### 1.5.5

- Handle case where template was loaded before hot-reload was enabled

## 1.5.4

- Added support for `$global` in `renderSync`

Changelog
=========

# 3.x

## 3.10.x

### 3.10.0

- Fixed [#357](https://github.com/marko-js/marko/issues/357)  - Deprecate `empty`/`notEmpty` in Marko v3

## 3.9.x

### 3.9.4

- Fixed [#355](https://github.com/marko-js/marko/issues/355) - `status-var`/`separator` options not handled when looping over properties
- Fixed [#354](https://github.com/marko-js/marko/issues/354) - regular expressions used in attribute values are not being handled correctly
- Fixed [#353](https://github.com/marko-js/marko/issues/353) - `body-only-if` attribute does not work with custom tags (only HTML tags)

### 3.9.3

- Upgraded to `raptor-util@^2`

### 3.9.2

- Fixed [#327](https://github.com/marko-js/marko/issues/327) - alt attribute with empty string should be allowed ([Pull Request #350](https://github.com/marko-js/marko/pull/350) by [@mlrawlings](https://github.com/mlrawlings))

### 3.9.1

- Fixed [#348](https://github.com/marko-js/marko/issues/348) - exclude all `*.orig` and other files from published npm package

### 3.9.0

- Fixed [#231](https://github.com/marko-js/marko/issues/231) - Allow <assign count++>
- Fixed [#345](https://github.com/marko-js/marko/issues/345) - Whitespace preservation now applies to all deeply nested text nodes
- Fixed [#344](https://github.com/marko-js/marko/issues/344) - Introduced [defineRenderer](./docs/javascript-api.md#requiremarkodefinerenderer) for Marko
- Docs: Added docs for excluding directories from taglib discovery ([@mlrawlings](https://github.com/mlrawlings))
- Docs: Added docs for component autodiscovery ([@mlrawlings](https://github.com/mlrawlings))
- Docs: Added docs for passing a data object to a custom tag

## 3.8.x

### 3.8.1

- Fixed [#342](https://github.com/marko-js/marko/issues/342) - `await:finish` event not emitted for async fragments with client reorder and that complete synchronously

### 3.8.0

- Fixed [#329](https://github.com/marko-js/marko/issues/329) - Add autodiscover of components/ directory ([Pull Request #338](https://github.com/marko-js/marko/pull/338) by [@mlrawlings](https://github.com/mlrawlings))

## 3.7.x

### 3.7.4

- Fixed [#339](https://github.com/marko-js/marko/issues/339) - Tag transformers are not being applied to tags with a dynamic tag name (fixes [#146](https://github.com/marko-js/marko-widgets/issues/146) for Marko Widgets)

### 3.7.3

- Fixed [#332](https://github.com/marko-js/marko/issues/332) and [#333](https://github.com/marko-js/marko/issues/333) - Correct values for `literalUndefined` and `literalFalse` in the Builder API [@bkuri](https://github.com/bkuri)
- Fixed [#336](https://github.com/marko-js/marko/issues/336) - Upgraded to latest version of `minimatch`

### 3.7.2

- Fixed [#328](https://github.com/marko-js/marko/issues/328) - Improve error reporting when taglib/tag definition fails to load
- Additional change to disable escaping for dynamic `Text` nodes added to body of `<script>` tag to fix [issue #326](https://github.com/marko-js/marko/issues/326)

### 3.7.1

- Improved escaping within the `<script>` tag to fix [issue #322](https://github.com/marko-js/marko/issues/322). Special HTML characters will no longer be escaped within the context of the `<script>` tag since browsers do not decode HTML entities within the `<script>` tag. Instead, only the ending `</script>` tag sequence is escaped using JavaScript string escaping sequences.

### 3.7.0

- Made change to make configuration a true singleton shared across all instances of `marko` loaded at runtime ([commit](https://github.com/marko-js/marko/commit/cd797322adf80f2890015de7b8f62301c2921a0a))

## 3.6.x

### 3.6.2

- Improved support for hot reloading by automatically disabling `assumeUpToDate` if hot reload is enabled. ([Pull Request #320](https://github.com/marko-js/marko/pull/320) by [@ianvonholt](https://github.com/ianvonholt))

### 3.6.1

- Fixed a bug that was causing transforms to be run on detached nodes.  This was manifesting itself in the `<async-fragment>` to `<await>` transform if an `if()` attribute was present (or other core attributes that end up wrapping the tag it is defined on).

### 3.6.0

- Introduced a new and simpler `<await>` tag that should be used instead of the now deprecated `<async-fragment>` tag (see deprecation details below) ([Pull Request #312](https://github.com/marko-js/marko/pull/312) by [@mlrawlings](https://github.com/mlrawlings))

#### Deprecations

- Deprecated the `<async-fragment var="<var>" data-provider=<data-provider>>` tag in favor of the `<await(<var> from <data-provider>)>` tag:

OLD:

```xml
<async-fragment var="userInfo" data-provider=data.userInfoPromise>
    Hello ${userInfo.name}!
</async-fragment>
```

NEW:

```xml
<await(userInfo from data.userInfoPromise)>
    Hello ${userInfo.name}!
</await>
```

The `<await>` tag supports all of the attributes of the previous `<async-fragment>` tag except for `var` and `data-provider`:

```xml
<await(userInfo from data.userInfoPromise) name="userInfo" timeout=10000 client-reorder>
    Hello ${userInfo.name}!
</await>
```

Finally, the nested tags for providing content for the placeholder, error and timeout messages have been renamed accordingly:

```xml
<await(userInfo from data.userInfoPromise) client-reorder>
    <await-placeholder>
        This is alternate content while the async fragment is loading.
    </await-placeholder>
    <await-timeout>
        A timeout has occurred!
    </await-timeout>
    <await-error>
        A error has occurred!
    </await-error>

    Hello ${userInfo.name}!
</await>
```

## 3.5.x

### 3.5.1

- Fixes #316 - Autocomplete for tags is not updated when tag files updated despite clearing cache. This improves the [autocomplete-marko](https://github.com/marko-js/atom-autocomplete-marko) plugin for Atom.
- Fixes #314 - Remove hyphens from include props
- Deprecated:
    - Properties passed in using the `<include>` tag should not be access using hyphens.

For example, given the following template:

```xml
<include("./include-target.marko") first-name='Jane'/>
```

The `first-name` data should be accessed using the `firstName` property:

```javascript
var firstName = input.firstName;
// NOT: var firstName = input['first-name'];
```

### 3.5.0

- Added functionality to exclude specific directory or package from taglib finder ([Pull Request #309](https://github.com/marko-js/marko/pull/309) by [@oxala](https://github.com/oxala))

## 3.4.x

### 3.4.9

- Fixed [https://github.com/marko-js/marko/issues/307] - Marko concise syntax, with multiple class names ([Pull Request #308](https://github.com/marko-js/marko/pull/308) by [@mlrawlings](https://github.com/mlrawlings))

### 3.4.8

- Added support for an "enum" attribute value

### 3.4.7

- Async fragment improvements ([Pull Request #305](https://github.com/marko-js/marko/pull/305) by [@mlrawlings](https://github.com/mlrawlings))
    - Adds additional event info (finished/timedout) to the data emitted from <async-fragment> tags.
    - Ensures that renderBody() is not called again if the fragment has already finished (timed out).
    - Fixes `npm run test-async`
    - Removes a redundant `async-fragment` timeout related test

### 3.4.6

- Updated autocomplete information

### 3.4.5

- Fixes #304 - async-fragment-tag-transformer.js being loaded by PhantomJS
- Updated taglibs with additional information to support tooling
- Added [Michael Rawlings](https://github.com/mlrawlings) as a maintainer

### 3.4.4

- Fixes #303 - `addStaticVar` is not generating unique variable names correctly

### 3.4.3

- Improved validation for macros ([@mlrawlings](https://github.com/mlrawlings), [PR #300](https://github.com/marko-js/marko/pull/300))
- Added code coverage reporting ([@mlrawlings](https://github.com/mlrawlings), [PR #301](https://github.com/marko-js/marko/pull/301))

### 3.4.2

- Improved error reporting in cases when code generation fails ([@mlrawlings](https://github.com/mlrawlings))

### 3.4.1

- Additional tweaks for #298 - Always emit correct events for async fragments

### 3.4.0

- Fixes #298 - Always emit correct events for async fragments
- Updated docs

## 3.3.x

### 3.3.0

- Include async fragment name in the `asyncFragmentFinish` events ([@kprakasam](https://github.com/kprakasam))

## 3.2.x

### 3.2.0

- Fixes #286 - Add res.marko(templateData) for use with Express ([@mlrawlings](https://github.com/mlrawlings))

## 3.1.x

### 3.1.9

- Fixes #288 - Provide API for discovering custom tags and attributes for autocomplete/tooling purposes
- Documentation improvements

### 3.1.8

- Fixes #280 - Switch from jsonminify to strip-json-comments
- Updated docs for Koa and Hapi
- Additional tests for Node.js v6

### 3.1.7

- Fixes #274 - marko-compiler-options tag is not properly ended when using raw parsing (for prettyprint)

### 3.1.6

- Fixes #268 - this.write is not a function for empty ArrayExpression

### 3.1.5

- Fixes #262 - node-require module removes `.marko` extension from filenames in compiled code

### 3.1.4

- Fixes #267 - Shorthand CSS class name cannot be combined with object/array class names

### 3.1.3

- Fixed #266 - Hot reloading fails if original template is deleted

### 3.1.2

- Fixed error reporting when using `compiler.parseRaw()`
- Added test for #262

### 3.1.1

- Improved whitespace removal for text nodes directly below the root

### 3.1.0

- Fixes #254 - Allow preserve whitespace to be enabled at the global level

## 3.0.x

### 3.0.7

- Fixes #240 - Always trim start and end of template (even if preserveWhitespace is true)
- Fixes #260 - Circular custom tags causes infinite recursion when writeToDisk is set to false
- Minor internal cleanup

### 3.0.6

- Don't wrap exception in `parseJavaScript` if error object was not created by Esprima

### 3.0.5

- Fixes #257 - Placeholders don't render for out-of-order async fragments

### 3.0.4

- Fixes #256 - Convert attributes to title case if no attributes are declared for a custom tag
- Use `<noscript>` for out-of-order async fragment placeholders

### 3.0.3

- Make renderSync behave if no context was supplied ([PR #250](https://github.com/marko-js/marko/pull/250) by [@jsumners](https://github.com/jsumners))

### 3.0.2

- Store `tagDef` with `HtmlElement` node (needed for pretty printing)

### 3.0.1

- Docs: Fixed minor issues in docs
- Reintroduced support for the `MARKO_CLEAN` environment variable: `MARK_CLEAN=true node server.js`

### 3.0.0

- See: [What's New in Marko v3](http://markojs.com/docs/marko/what-is-new-marko-v3/)

# 2.x

## 2.8.x

### 2.8.4

- Fixes circular dependency issue between runtime/index.js and hot-reload/index.js

### 2.8.3

- Fixes circular dependency issue between runtime/index.js and hot-reload/index.js

### 2.8.2

- Fixes #203 - Incorrect behavior when attrs is used on a standard HTML tag with a tag def

### 2.8.1

-  Fixes #202 - Pass along options to compiler when loading a template

### 2.8.0

-  Added support for automatically discovering taglibs from installed packages that are scoped. ([PR #183](https://github.com/marko-js/marko/pull/183) by [@tropperstyle](https://github.com/tropperstyle))

### 2.8.3

- Fixes circular dependency issue between `hot-reload/index.js` and `runtime/index.js`

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

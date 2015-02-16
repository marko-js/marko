Changelog
=========

# 2.x

## 2.0.x

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
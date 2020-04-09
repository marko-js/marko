# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

### [4.19.13](https://github.com/marko-js/marko/compare/v4.19.12...v4.19.13) (2020-04-08)


### Bug Fixes

* add devmode warning for removing fragment markers ([#1541](https://github.com/marko-js/marko/issues/1541)) ([1c3852f](https://github.com/marko-js/marko/commit/1c3852f2c7938a689c249b6d59b6280becda216e))

### [4.19.12](https://github.com/marko-js/marko/compare/v4.19.11...v4.19.12) (2020-04-07)


### Bug Fixes

* implement missing methods for void-writer ([#1540](https://github.com/marko-js/marko/issues/1540)) ([2806066](https://github.com/marko-js/marko/commit/28060669a421837cec19f35f307f35c0ef636b0e))

### [4.19.11](https://github.com/marko-js/marko/compare/v4.19.10...v4.19.11) (2020-04-06)

### [4.19.10](https://github.com/marko-js/marko/compare/v4.19.9...v4.19.10) (2020-04-03)


### Bug Fixes

* regression with nullish values in partial string attribute values ([#1537](https://github.com/marko-js/marko/issues/1537)) ([a469e02](https://github.com/marko-js/marko/commit/a469e020cc60089bae73bf1a311a8e6919bc0ce0))

### [4.19.9](https://github.com/marko-js/marko/compare/v4.19.8...v4.19.9) (2020-03-30)

### [4.19.8](https://github.com/marko-js/marko/compare/v4.19.7...v4.19.8) (2020-03-16)


### Bug Fixes

* improve legacy compatibility with getWidgetForEl api ([#1533](https://github.com/marko-js/marko/issues/1533)) ([d5e3a27](https://github.com/marko-js/marko/commit/d5e3a272ae3c02ad48860d5ccddd8a6e2bcba3c9))

### [4.19.7](https://github.com/marko-js/marko/compare/v4.19.6...v4.19.7) (2020-03-13)


### Bug Fixes

* prevent issue with range loop iterating in reverse ([#1531](https://github.com/marko-js/marko/issues/1531)) ([cd6459d](https://github.com/marko-js/marko/commit/cd6459dc8d057de0eb88040c81dcf034ae7ca5ad))

### [4.19.6](https://github.com/marko-js/marko/compare/v4.19.5...v4.19.6) (2020-03-13)


### Bug Fixes

* spread attrs for native tag preserves case ([#1530](https://github.com/marko-js/marko/issues/1530)) ([f972707](https://github.com/marko-js/marko/commit/f97270746e7580d0d38e3a2a43e585721a256baf))

### [4.19.5](https://github.com/marko-js/marko/compare/v4.19.4...v4.19.5) (2020-03-10)


### Bug Fixes

* issue with keys under ssr no-update root ([#1527](https://github.com/marko-js/marko/issues/1527)) ([fd03031](https://github.com/marko-js/marko/commit/fd03031c47881bf5dd7b311dd1fec843c98a1c06))
* return raw state for legacy widgets ([#1526](https://github.com/marko-js/marko/issues/1526)) ([6905521](https://github.com/marko-js/marko/commit/6905521c875a1ecc18d7afbdfd0ef53df31831c5))

### [4.19.4](https://github.com/marko-js/marko/compare/v4.19.3...v4.19.4) (2020-03-09)


### Bug Fixes

* don't serialize component boundary keys if the owner isn't hydrated ([#1525](https://github.com/marko-js/marko/issues/1525)) ([9bf16b8](https://github.com/marko-js/marko/commit/9bf16b81f46abda06e42cbbd9341dd023fdcadc0))

### [4.19.3](https://github.com/marko-js/marko/compare/v4.19.2...v4.19.3) (2020-03-05)


### Bug Fixes

* add 'get' API for marko-widgets compat ([#1524](https://github.com/marko-js/marko/issues/1524)) ([095459f](https://github.com/marko-js/marko/commit/095459f43947b8f4be380286bd1f720109a3d86a))
* improve support for legacy widget for range ([#1523](https://github.com/marko-js/marko/issues/1523)) ([ca4afb9](https://github.com/marko-js/marko/commit/ca4afb98165a063b0b5f85255235b87f332ddf92))

### [4.19.2](https://github.com/marko-js/marko/compare/v4.19.1...v4.19.2) (2020-03-04)


### Bug Fixes

* don't serialize input for stateful widgets ([#1522](https://github.com/marko-js/marko/issues/1522)) ([3a14f62](https://github.com/marko-js/marko/commit/3a14f629688645d11b11678bd149a77cadfe745e))

### [4.19.1](https://github.com/marko-js/marko/compare/v4.19.0...v4.19.1) (2020-02-28)


### Bug Fixes

* support monkey patching lifecycle methods for legacy widgets ([#1521](https://github.com/marko-js/marko/issues/1521)) ([3056bd1](https://github.com/marko-js/marko/commit/3056bd11a63e2bf36d44657dc8d2ccf2381cfc92))

## [4.19.0](https://github.com/marko-js/marko/compare/v4.18.51...v4.19.0) (2020-02-27)


### Features

* all vnodes have owner components ([#1517](https://github.com/marko-js/marko/issues/1517)) ([cb42609](https://github.com/marko-js/marko/commit/cb426099ea83638f5feba85562ba7b56083dac4c))

### [4.18.51](https://github.com/marko-js/marko/compare/v4.18.50...v4.18.51) (2020-02-26)


### Bug Fixes

* always include nested contexts when serializing ([#1515](https://github.com/marko-js/marko/issues/1515)) ([c4f28e4](https://github.com/marko-js/marko/commit/c4f28e433cee13f206736c85431975e62b8ceed2))

### [4.18.50](https://github.com/marko-js/marko/compare/v4.18.48...v4.18.50) (2020-02-26)

### Bug Fixes

- non standard template literals filter out null & undefined ([#1514](https://github.com/marko-js/marko/issues/1514)) ([d5fa202](https://github.com/marko-js/marko/commit/d5fa20267b0b0bfc5c835ebdda1c6cb61955c9c7))

### [4.18.49](https://github.com/marko-js/marko/compare/v4.18.48...v4.18.49) (2020-02-26)

### 4.18.48

- Fixes a regression from [#1499](https://github.com/marko-js/marko/pull/1499) which caused `<${dynamic}>` tags with body content to not have their events registered. [#1507](https://github.com/marko-js/marko/pull/1507)
- Fixes issue with `getEl` being used on a keyed `<${dynamic}>` tag. [#1507](https://github.com/marko-js/marko/pull/1507)
- Fixes registering event handlers added to a `<${dynamic}>` tag that renders a native element under a split component. [#1507](https://github.com/marko-js/marko/pull/1507)

### 4.18.47

- Deprecate implicit JSON.stringify for attributes, attr toString fix. [#1505](https://github.com/marko-js/marko/pull/1505)
- Remove data-widget, add warning for non-split, non-stateful widgets. [#1503](https://github.com/marko-js/marko/pull/1503)
- Flushing improvements. [#1502](https://github.com/marko-js/marko/pull/1502)

### 4.18.46

- Fixed issue with `<init-components>` being rendered under nested async outs. [#1500](https://github.com/marko-js/marko/pull/1500)

### 4.18.45

- Fixed dynamic tags to add data-marko-key for split components [#1499](https://github.com/marko-js/marko/pull/1499)
- Fixed dynamic tags properly render self-closing tags on the server [#1499](https://github.com/marko-js/marko/pull/1499)

### 4.18.44

- Fix issue with diffing SSR'd `no-update` section. [#1498](https://github.com/marko-js/marko/pull/1498)

### 4.18.43

- No longer serialize input for split legacy widgets. [#1497](https://github.com/marko-js/marko/pull/1497)

### 4.18.42

- Fix regression for unkeyed elements with toggled spread attributes [#1496](https://github.com/marko-js/marko/pull/1496)
- Fix regression with body-only-if migration for legacy renderers [#1495](https://github.com/marko-js/marko/pull/1495)

### 4.18.41

- Improve support for conditional `w-bind`. [#1494](https://github.com/marko-js/marko/pull/1494)
- No longer delete `onBeforeDestroy` and `onBeforeUpdate` from legacy widget prototypes. [#1494](https://github.com/marko-js/marko/pull/1494)
- Fix regression with registering event handlers for SSR content under a `no-update`. [#1493](https://github.com/marko-js/marko/pull/1493)

### 4.18.40

- Fix issue with the `ignoreUnrecognizedTags` compiler option with `<@attribute>` tags inside of a `<${dynamic}>` tag. [#1491](https://github.com/marko-js/marko/pull/1491)
- Improve support for legacy widgets by allowing for custom `init` method on prototype. [#1490](https://github.com/marko-js/marko/pull/1490)
- Removes some unused properties that were serialized with legacy widgets [#1489](https://github.com/marko-js/marko/pull/1489)
- Improves consistency with `...spread` attributes onto native tags. [#1488](https://github.com/marko-js/marko/pull/1488)
  - Now turns `camelCase` properties into `dash-cash`
  - Now omits `renderBody` properties.
- Improves `this.el` warning for legacy widgets. [#1487](https://github.com/marko-js/marko/pull/1487)
- Fixes an issue with nested `no-update`'s around components not initializing properly. [#1486](https://github.com/marko-js/marko/pull/1486)

### 4.18.39

- Support overriding the 'ready' method in legacy widgets. [#1484](https://github.com/marko-js/marko/pull/1484)

### 4.18.38

- Fix regression with ssr'd components under 'no-update' not initializing. [#1483](https://github.com/marko-js/marko/pull/1483)

### 4.18.37

- Fix regression with no-update-body on textarea tags. [#1482](https://github.com/marko-js/marko/pull/1482)

### 4.18.36

- Fix issue for legacy widget rerenders not preserving props. [#1481](https://github.com/marko-js/marko/pull/1481)
- `no-update` will now preserve elements rendered from the server side. [#1480](https://github.com/marko-js/marko/pull/1480)

### 4.18.35

- Improve support for legacy split widgets. [#1477](https://github.com/marko-js/marko/pull/1477)

### 4.18.34

- Improve legacy widgets assigning into state causing a replace instead of merge. [#1476](https://github.com/marko-js/marko/pull/1476)

### 4.18.33

- Fix event name case normalization for legacy components with `w-on`. [#1475](https://github.com/marko-js/marko/pull/1475)

### 4.18.32

- Return the component id if no key is passed to getElId/elId. [#1474](https://github.com/marko-js/marko/pull/1474)
- Support having nullish keys in the legacy (v3) renderer. [#1473](https://github.com/marko-js/marko/pull/1473)

### 4.18.31

- Fix legacy render lifecycle order to match marko-widgets@6. [#1472](https://github.com/marko-js/marko/pull/1472)

### 4.18.30

- Fix regression with browser remap for legacy widgets. [#1471](https://github.com/marko-js/marko/pull/1471)

### 4.18.29

- Fixed regression which was causing getTemplateData to be serialized.
- Refactor helpers, fix circular deps, improve code splitting [#1468](https://github.com/marko-js/marko/pull/1468)
- Remove unused deps, update package-lock [#1469](https://github.com/marko-js/marko/pull/1469)
- Fixed typo in example output [#1463](https://github.com/marko-js/marko/pull/1463)

### 4.18.28

- Allow support for `<state>` tag and calling `setState` on null state [#1460](https://github.com/marko-js/marko/pull/1460)

### 4.18.27

- Allow empty `<@catch>` in `<await>` [#1456](https://github.com/marko-js/marko/pull/1456)

### 4.18.26

- Improve errors emitted from AsyncWriter

### 4.18.25

- Better async stack traces in dev [#1453](https://github.com/marko-js/marko/pull/1453)

### 4.18.24

- Remove circular dep for dom weakmaps. [#1449](https://github.com/marko-js/marko/pull/1449)
- Fix invalid deprecation message for core-tags on windows. [#1448](https://github.com/marko-js/marko/pull/1448)

### 4.18.23

- Allow `<macro>` nested under `<if>`. [#1445](https://github.com/marko-js/marko/pull/1445)

### 4.18.22

- Improve legacy compatibilty layer by exposing `widgetProps` on the `data` object. [#1443](https://github.com/marko-js/marko/pull/1443)
- Improve getComponentByEl lookup to prefer owner components. [#1444](https://github.com/marko-js/marko/pull/1444)

### 4.18.21

- Fix issue where duplicated attributes were not being included properly in compiled templates. [#1442](https://github.com/marko-js/marko/pull/1442)

### 4.18.20

- Fix initialization edge-case for top-level async components. [#1441](https://github.com/marko-js/marko/pull/1441)

### 4.18.19

- Deprecate `$global.widgetIdPrefix` (should use `$global.componentIdPrefix` instead). [#1439](https://github.com/marko-js/marko/pull/1439)
- Improve support for rollup by removing usage of `require.resolve`. [#1440](https://github.com/marko-js/marko/pull/1440)
- Update minimum version of htmljs-parser to bring in patch release for parsing css calc values.

### 4.18.18

- Adds a missing method used by part of the legacy compatibility layer.

### 4.18.17

- Fix issue with async out of order components initializing in the wrong order [#1436](https://github.com/marko-js/marko/pull/1436)
- Improvements to the legacy compatibility layer [#1437](https://github.com/marko-js/marko/pull/1437)

### 4.18.16

- Fix top-level components throwing error on hydrate [#1428](https://github.com/marko-js/marko/pull/1428)
- Ensure scripts only have one text node as a child [#1429](https://github.com/marko-js/marko/pull/1429)

### 4.18.15

- Improve support for conditional comments spanning multiple comments. [#1427](https://github.com/marko-js/marko/pull/1427)
- Add a check for loading precompiled templates. [#1426](https://github.com/marko-js/marko/pull/1426)

### 4.18.14

- Improve support for running multiple versions of Marko on the page. [#1418](https://github.com/marko-js/marko/pull/1418)
- Add migration for `component.elId` when used in a place where `:scoped` is recommended. [#1413](https://github.com/marko-js/marko/pull/1413)
- Fix issue where static regexps in the template would output differently than dynamic ones. [#1412](https://github.com/marko-js/marko/pull/1412)
- Improve `marko.json` definitions for core/html tags [#1411](https://github.com/marko-js/marko/pull/1411)

### 4.18.13

- Improve support for consuming v3 components via webpack. [#1410](https://github.com/marko-js/marko/pull/1410)

### 4.18.12

- Improve autocompletion for core tags. [#1405](https://github.com/marko-js/marko/pull/1405)
- Fix issue when using `getComponentForEl` with split components. [#1400](https://github.com/marko-js/marko/pull/1400)

### 4.18.11

- Fix server-rendered conditional widgets in the compatibility layer. [#1395](https://github.com/marko-js/marko/pull/1395)
- Deprecate the partial dynamic tag. [#1397](https://github.com/marko-js/marko/pull/1397)

### 4.18.10

- Improve migration for `getInitialState` with legacy widgets. [#1385](https://github.com/marko-js/marko/pull/1385)

### 4.18.9

- Legacy compat fixes [#1383](https://github.com/marko-js/marko/pull/1383)
  - Temporary fix to ensure `getComponents` doesn't return `null` entries - these should really be removed from the `lookup` instead
  - Use a `for...in` loop to extend the `BaseComponent` (doesn't support getters properly) to maintain the same behavior as `marko-widgets`
  - Ensure that the original `input` for a widget is what gets serialized, not the result of `getTemplateData` (which is called again when hydrating)

### 4.18.8

- Fixes an issue where `require("marko/components").getComponentForEl` could return undefined when a component exists, or the wrong component, when nested fragments are present. [#1382](https://github.com/marko-js/marko/pull/1382)

### 4.18.7

- Fixes a regression from 4.18.6 that could cause some body content to be omitted from the output [#1380](https://github.com/marko-js/marko/pull/1380)
- Adds deprecated string dynamic attributes to the vdom runtime for improved legacy compatibility [#1378](https://github.com/marko-js/marko/pull/1378)

### 4.18.6

- Migration does not add `id:scoped` when migrating a repeated `w-id` [#1377](https://github.com/marko-js/marko/pull/1377)
- Fixes an issue diffing the selected option within an optgroup [#1376](https://github.com/marko-js/marko/pull/1376)
- Fixes component tracking for client-reorder [#1375](https://github.com/marko-js/marko/pull/1375)
- Improve the migration for legacy `<for>` syntax [#1374](https://github.com/marko-js/marko/pull/1374)
- Add migration for named classes in the template [#1372](https://github.com/marko-js/marko/pull/1372)

### 4.18.5

- Fix issue with invoke tag migration when a inline control flow is used [#1366](https://github.com/marko-js/marko/pull/1366)

### 4.18.4

- Lazily evaluate attributes for dynamic tags [#1365](https://github.com/marko-js/marko/pull/1365)

### 4.18.3

- Fix `registerTaglib`: use correct function call [#1363](https://github.com/marko-js/marko/pull/1363)
- Fix tryonline: correct paths and no `taglibImports` [#1360](https://github.com/marko-js/marko/pull/1360)
- Migration fix: [#1364](https://github.com/marko-js/marko/pull/1364)
- Migration improvement: deprecation warnings that are automatically migratable now have a `MIGRATION` heading [#1364](https://github.com/marko-js/marko/pull/1364) (also included test improvements)
- Migration improvement: remove empty `<layout-put>` tags [#1355](https://github.com/marko-js/marko/pull/1355)

### 4.18.2

- Fixes an issue where fragments could remove nodes from their siblings [#1359](https://github.com/marko-js/marko/pull/1359)

### 4.18.1

- Fixes a regression with `body-only-if` and a legacy control flow attribute [#1356](https://github.com/marko-js/marko/pull/1356)

### 4.18.0

- Added dynamic tags to act like body-only-if. If dynamic tags are null then the outer tag will not be rendered. However, the body will be rendered. Deprecated body-only-if [#1332](https://github.com/marko-js/marko/pull/1332)

## 4.17.x

### 4.17.5

- Fix issue where setting the `value` attribute of a textarea to `false` caused the string `"false"` to be used in the vdom. [#1348](https://github.com/marko-js/marko/issues/1348)

### 4.17.4

- Updates htmljs-parser to fix an issue with comments inside inline scriptlets.
- Fix some issues with for loop auto keying. [#1346](https://github.com/marko-js/marko/issues/1346)
- Fix error when using a non string as a key (now logs a deprecation). [#1344](https://github.com/marko-js/marko/issues/1344)

### 4.17.3

- Fix issue were `getEls` would not work with repeated keys for split components. [#1343](https://github.com/marko-js/marko/issues/1343)

### 4.17.2

- Fix regression with namespaces in nested fragments. [#1340](https://github.com/marko-js/marko/issues/1340)

### 4.17.1

- Allow emitting events while the parent is mounting. [#1336](https://github.com/marko-js/marko/issues/1336)
- Fix issue where `component.el` and `component.getEl` could return a marker node. [#1339](https://github.com/marko-js/marko/issues/1339)

### 4.17.0

- Element namespaces are now calculated at runtime, fixes some edge cases with the dynamic tag. [#1333](https://github.com/marko-js/marko/issues/1333)

## 4.16.x

### 4.16.15

- Fix an issue where nodes may be preserved if another node with the same key was rendered as preserved. [#1334](https://github.com/marko-js/marko/issues/1334)
- Improve the `ignoreUnrecognizedTags` compiler option to ignored nested `@tags` on unrecognized tags (removes the need for the `escapeAtTags` option). [#1335](https://github.com/marko-js/marko/issues/1335)

### 4.16.14

- Prevent treating macro usage with parameters as a component. [#1326](https://github.com/marko-js/marko/issues/1326)

### 4.16.13

- Fixes a regression with printing nested unary expressions (eg typeof). [#1323](https://github.com/marko-js/marko/issues/1323)

### 4.16.12

- fix destorying a component that has already removed some top-level nodes [#1321](https://github.com/marko-js/marko/issues/1321)
- fix components runtime path after refactor released in 4.16.11 [#1322](https://github.com/marko-js/marko/issues/1322)

### 4.16.11

- Fixes a regression (syntax) in IE 11 introduced in 4.16.10

### 4.16.10

- Hydrating components now consistently render from the top down. [#1317](https://github.com/marko-js/marko/issues/1317)

### 4.16.9

- Fixes an issue where legacy widgets could loose a reference to their parent components. [#1311](https://github.com/marko-js/marko/issues/1311)

### 4.16.8

- Fixes an issue with hot-reload. [#1282](https://github.com/marko-js/marko/issues/1282)
- If the require hook is enabled, all templates loaded by marko will now use the require hook, including hot-reloaded templates and tags loaded from compiled templates. [#1310](https://github.com/marko-js/marko/pull/1310)

### 4.16.7

- Improve parsing of tag arguments (allows for `<${input.renderBody}(...spread)/>`). [#1308](https://github.com/marko-js/marko/pull/1308)

### 4.16.6

- Fix issue with hydrating legacy Marko 3 widgets from the server. [#1306](https://github.com/marko-js/marko/pull/1306)

### 4.16.5

- Fix regression with legacy dynamic attributes when a string without whitespace is used. [#1304](https://github.com/marko-js/marko/pull/1304)
- The `disabled` property on buttons is now properly synced with the template. [#1303](https://github.com/marko-js/marko/pull/1303)

### 4.16.4

- Fix regression with migrating legacy `<macro>` syntax with a magic `renderBody` variable. [#1300](https://github.com/marko-js/marko/pull/1300)

### 4.16.3

- Fix issue with migrating `<var>` and `<assign>` with `widget` properties. [#1298](https://github.com/marko-js/marko/pull/1298)

### 4.16.2

- Fix issue with nested fragments (often as dynamic tags) that were adjacent in the DOM not hydrating properly. [#1294](https://github.com/marko-js/marko/pull/1294)
- Remove redundant portion of keys for `<macro>` tags within `<for>` loops. [#1295](https://github.com/marko-js/marko/pull/1295)

### 4.16.1

- Fix regression for `:no-update` on dynamic tag html attributes. [#1292](https://github.com/marko-js/marko/pull/1292)

### 4.16.0

- Add `<marko deprecated-no-create-or-input-for-top-level-hydrate />` option to revert to pre `4.9.0` hydrate behavior. [#1289](https://github.com/marko-js/marko/pull/1289)

## 4.15.x

### 4.15.6

- Fix regression in older browsers caused by using `string.startsWith` in the runtime code.

### 4.15.5

- Allow syntax that Marko does not understand (but esprima does) to pass through in the arguments syntax. [#1286](https://github.com/marko-js/marko/pull/1286)
- Fix issue with `<title>` inside of an `<svg>` using the wrong namespace. [#1284](https://github.com/marko-js/marko/pull/1284)

### 4.15.4

- Forward errors from `<await client-reorder>` to the parent out to prevent potential unhandled rejections. [#1275](https://github.com/marko-js/marko/pull/1275)

### 4.15.3

- Fix false positive deprecation message for legacy nested tag syntax. [#1271](https://github.com/marko-js/marko/pull/1271)

### 4.15.2

- Improve the webpack server-bundling experience by guarding a legacy (lasso-specific) api that uses a dynamic require and causes a warning to be emitted. [#1267](https://github.com/marko-js/marko/pull/1267)

### 4.15.1

- Improve support for using raw functions as event handlers by not outputing `data-marko` content for components that will rerender in the browser. [#1262](https://github.com/marko-js/marko/pull/1262)

### 4.15.0

The most notable change here is to the `<for>`, `<macro>` and `<await>` core tags. These tags previously each relied on custom syntax to implement an API that was not possible to do in userland when they were introduced. Generic solutions for these problems has arrived in the form of [attribute tags](https://markojs.com/docs/syntax#attribute-tag) and [tag parameters](https://markojs.com/docs/syntax#parameters).

With these new features in place and currently available in userland we set out to normalize these existing tags, hopefully making the learning process for Marko a little easier, and also promoting the use of these new features. We've also spent time formalizing some best practices, and highlighting this new syntax in the documentation on the [markojs.com](https://markojs.com) website.

The existing syntax will continue to be supported until Marko 5 and will currently log a deprecation warning. For these deprecations and most others you can automatically migrate existing code using the [marko migrate](https://github.com/marko-js/cli/blob/master/packages/migrate/README.md) cli tool.

- Updated documentation with guides and changes to syntax/core tags. [#1260](https://github.com/marko-js/marko/pull/1260)
- Modernize the [`<for>` tag](https://markojs.com/docs/core-tags#for). [#1238](https://github.com/marko-js/marko/pull/1238)
- Modernize the [`<await>` tag](https://markojs.com/docs/core-tags#await). [#1244](https://github.com/marko-js/marko/pull/1244)
- Modernize the [`<macro>` tag](https://markojs.com/docs/core-tags#macro). [#1227](https://github.com/marko-js/marko/pull/1227)
- Deprecated legacy top level imports (jquery/ready) and compiler option tags (recommended to use marko.json instead). [#1258](https://github.com/marko-js/marko/pull/1258)
- Modern arguments support for the dynamic tag. [#1259](https://github.com/marko-js/marko/pull/1259)
- Improves parsing inside of the `<html-comment>` tag to support the same style of content as actual html comments. [#1261](https://github.com/marko-js/marko/pull/1261)
- Ignore only whitespace content inside of concise mode tags (including `class` and `style`) which would previously error. [#1256](https://github.com/marko-js/marko/pull/1256)
- Fixes a regression with passing a string literal as a `${dynamic}` attribute and add a deprecation warning. [#1257](https://github.com/marko-js/marko/pull/1257)

## 4.14.x

### 4.14.25

- Fix regression with non standard template literals (`"stuff ${placeholder}"`) that have escaped content such as newlines [#1254](https://github.com/marko-js/marko/pull/1254)

### 4.14.24

- Fix regression in `<await>` that caused flushing to not occur in all cases [#1252](https://github.com/marko-js/marko/pull/1252)

### 4.14.23

- Fix warning that `"marko"` was using deprecated features. [#1250](https://github.com/marko-js/marko/pull/1250)
- Improve code optimization for conditional `@nested` tags. [#1249](https://github.com/marko-js/marko/pull/1249)

### 4.14.22

- Fix issue with `no-update` not moving preserved items [#1247](https://github.com/marko-js/marko/pull/1247).
- Fix regression with include tag migration where `<include(data())>` has side effects. [#1246](https://github.com/marko-js/marko/pull/1246)
- Treat importing tags the same as using them in the template (uses `load` api instead of `require` when configured). [#1245](https://github.com/marko-js/marko/pull/1245)
- Gracefully handle async client-reorder when nodes are missing during hydrate. [#1243](https://github.com/marko-js/marko/pull/1243)

### 4.14.21

- Update `htmljs-parser` to improve parsing regexes [htmljs-parser #61](https://github.com/marko-js/htmljs-parser/pull/61)

### 4.14.20

- Add new `<tag|params|>` support and migrator for old syntax/flag [#1236](https://github.com/marko-js/marko/pull/1236)
- Remove unneeded deprecation warning when using `component` within a template [#1235](https://github.com/marko-js/marko/pull/1235)

### 4.14.19

- Fixes walking into some AST nodes which was causing some migrations to not be as effective [#1233](https://github.com/marko-js/marko/pull/1233)

### 4.14.18

- Fixes [#1230](https://github.com/marko-js/marko/issues/1230) - regression with include tag migration outputing invalid identifiers [#1231](https://github.com/marko-js/marko/pull/1231)
- Add migration for legacy nested tag syntax [#1129](https://github.com/marko-js/marko/pull/1129)

### 4.14.17

- Fixes [#1219](https://github.com/marko-js/marko/issues/1219) - transitive widget getEl and events [#1225](https://github.com/marko-js/marko/pull/1225)
- Importing a marko template adds it to tags meta (fixes regression with `<include>` tag) [#1226](https://github.com/marko-js/marko/pull/1226)

### 4.14.16

- Add migration for non-standard template literals. [#1224](https://github.com/marko-js/marko/pull/1224)
- Fix regression with dynamic attribute migration. [#1223](https://github.com/marko-js/marko/pull/1223)

### 4.14.15

- Improve migrating `widget` references to `component` in attributes. [#1220](https://github.com/marko-js/marko/pull/1220)

### 4.14.14

- Fix regression with `eval`ing class names in debug mode. [#1218](https://github.com/marko-js/marko/pull/1218)

### 4.14.13

- Support file name migrations with Marko migrate. [#1216](https://github.com/marko-js/marko/pull/1216)
- Skip `id:scoped` when migrating w-id for custom tags. [#1217](https://github.com/marko-js/marko/pull/1217)

### 4.14.12

- Add migrator for `w-config` attribute. [#1214](https://github.com/marko-js/marko/pull/1214)
- Add migrator for and deprecate `unless` tag/directive. [#1210](https://github.com/marko-js/marko/pull/1210)

### 4.14.11

- Fix regression with `w-body` tag. [#1213](https://github.com/marko-js/marko/pull/1213)

### 4.14.10

- Add migrator for `ref` attribute. [#1207](https://github.com/marko-js/marko/pull/1207)
- Fix regression with `var` tag and `w-body/include` tags. [#1212](https://github.com/marko-js/marko/pull/1212)

### 4.14.9

- Add migrator for layout tags and include tag/directive. [#1206](https://github.com/marko-js/marko/pull/1206) & [#1204](https://github.com/marko-js/marko/pull/1204)
- Add migrator for `<script template-helpers>` and `<script marko-init>`. [#1209](https://github.com/marko-js/marko/pull/1209)

### 4.14.8

- Add migrator from w-body to dynamic tag. [#1199](https://github.com/marko-js/marko/pull/1199)
- Add migrator from dynamic attributes to spread attributes. [#1202](https://github.com/marko-js/marko/pull/1202)

### 4.14.7

- Fix regression for `widget.elId` migration. [#1198](https://github.com/marko-js/marko/pull/1198)

### 4.14.6

- Add a whitelist of files to publish to NPM. [#1197](https://github.com/marko-js/marko/pull/1197)

### 4.14.5

- Add `getTemplateData` migrator. [#1195](https://github.com/marko-js/marko/pull/1195)
- Add migrators for most of the `w-*` attributes. [#1190](https://github.com/marko-js/marko/pull/1190)
- Add basic legacy widget migration. [#1192](https://github.com/marko-js/marko/pull/1192)

### 4.14.4

- Fix regression with `setProps` on legacy compatibility layer. [#1193](https://github.com/marko-js/marko/pull/1193)

### 4.14.3

- Move `w-on` compatibility to the migrate stage. [#1186](https://github.com/marko-js/marko/pull/1186)
- Legacy compatibility (v3) improvements. [#1189](https://github.com/marko-js/marko/pull/1189)
- Specially handle template literals in templates. [#1188](https://github.com/marko-js/marko/pull/1188)

### 4.14.2

- Convert the `<async-fragment>` transformer into a migrator. [#1185](https://github.com/marko-js/marko/pull/1185)

### 4.14.1

- Fix regression causing some parsed javascript nodes to be omitted from output. [#1184](https://github.com/marko-js/marko/pull/1184)

### 4.14.0

- Add migration stage, deprecate rendering with `out`, deprecate control-flow directive as attributes. [#1180](https://github.com/marko-js/marko/pull/1180)
- parse = parseRaw + normalize [#1179](https://github.com/marko-js/marko/pull/1179)
- parse nonstandard string with placeholder to TemplateLiteral node, transpile template literals. [#1179](https://github.com/marko-js/marko/pull/1179)
- add new parse api

## 4.13.x

### 4.13.13

- Fix regression: parsing of `if` statements without braces (in scriptlets & otherwise). [#1175](https://github.com/marko-js/marko/pull/1175)
- Fix regression: `<var>` and `<assign>` tags with non-standard placeholders in normal string attributes. [#1176](https://github.com/marko-js/marko/pull/1176)

### 4.13.12

- `<invoke>` tag translates to modern Marko scriptlet (or dynamic tag). [#1165](https://github.com/marko-js/marko/pull/1165)
- `<assign>` tag translates to modern Marko scriptlet. [#1158](https://github.com/marko-js/marko/pull/1158)
- Imperative rendering in scriptlets translates to modern Marko dynamic tag. [#1174](https://github.com/marko-js/marko/pull/1174)

### 4.13.11

- Add spread attribute optimization, fix issue with spreading non objects. [#1171](https://github.com/marko-js/marko/pull/1171)
- Move `#` to the start of `:scoped` attributes (allows for `href:scoped="#name"`). [#1172](https://github.com/marko-js/marko/pull/1172)

### 4.13.10

- Adds a hidden api used to make [@marko-tags/context](https://github.com/marko-js/tags/tree/master/tags/context) possible. [#1168](https://github.com/marko-js/marko/pull/1168)

### 4.13.9

- Improve support for [arc]() by normalizing file system names with square brackets. [#1166](https://github.com/marko-js/marko/pull/1166)

### 4.13.8

- Quick patch for `4.13.7` that removes a `let` assignment. [#1153](https://github.com/marko-js/marko/pull/1153)

### 4.13.7

- Prevent treating components with tag params being treated as implicit components. [#1149](https://github.com/marko-js/marko/pull/1149)

### 4.13.6

- Prevent mutating component input when using a single spread attribute with repeated @tags. [#1142](https://github.com/marko-js/marko/pull/1142)
- Fix for include tag hydration when transcluded. [#1143](https://github.com/marko-js/marko/pull/1143)

### 4.13.5

- Add additional reference to fragment nodes which resolves an issue with IE. [#1130](https://github.com/marko-js/marko/pull/1130)

### 4.13.4

- Remove Object.assign calls in the browser. [#1120](https://github.com/marko-js/marko/pull/1120)

### 4.13.3

- Propagate errors to express automatically with the `res.marko` api. [#1119](https://github.com/marko-js/marko/pull/1119)
- Support multi line import statments. [#1118](https://github.com/marko-js/marko/pull/1118)

### 4.13.2

- Allow discovering tags where the template name matches the directory name [#1117](https://github.com/marko-js/marko/pull/1117):

```
components/
  tag-name/
    tag-name.marko
    tag-name.style.css
```

### 4.13.1

- Remove es2015 features from runtime. [#1115](https://github.com/marko-js/marko/pull/1115)

### 4.13.0

#### PR #1094

**Introducing HTMLFragment**

- Updates the diffing algorithm to use an HTMLFragment node as an abstraction rather than keeping track of startNode and endNode all throughout the diffing algorithm.
- Uses the HTMLFragment for the `<${dynamic}>` tag and `<include>` tags to preserve server-rendered content for which the `renderBody` is not available in the browser.

**Changes to keys**

- Component ids are based on the resulting parent tree (not the owner tree). This means we cannot rely on the ids in the global lookup, so component key/refs are now also stored on the component instance.
- Autokeyed elements are now stored on the parent rather than the owner. User assigned key/refs are still stored on the owner component. Because of this, user assigned keys are now prefixed to differentiate them from autokeys. This also has the benefit that assigning numeric keys can no longer conflict with the autokeys.
- Static node trees are now only auto assigned a key for the top-level node (instead of all nodes). This is because:
  - When updating, only the top-level node is considered.
  - When static nodes are hoisted out of the render method, they are not associated with the owner component

**Changes to Hydration**

- Server comment starting markers now have the component's key serialized so the component can be attached to its owner
- Server comment markers no longer have the id on the closing marker, it is stack based.
- Normalize differences between hydration and client-rendering, so post mount the DOM looks the same regardless of whether a component was server or client rendered.

## 4.12.x

### 4.12.4

- Don't render invalid attribute names on the server [#1103](https://github.com/marko-js/marko/pull/1103)

### 4.12.3

- Removes extra parentheses in output javascript for expressions that Marko does not understand.

### 4.12.2

- Fixes automatic keying of elements/components in `for()` attribute loops

### 4.12.1

- Fix #1022 - transcluded keys don't match, stateful component not preserved [#1086](https://github.com/marko-js/marko/pull/1086)

### 4.12.0

- Tag params [#1076](https://github.com/marko-js/marko/pull/1076)
- Style arrays [#1082](https://github.com/marko-js/marko/pull/1082)
- Fix #1075 - cannot compile dynamic tag at root with user key [#1081](https://github.com/marko-js/marko/pull/1081)
- Fix #1078 - mutating spread attributes [#1080](https://github.com/marko-js/marko/pull/1080)

## 4.11.x

### 4.11.5

- Add fallback location for compile-time deprecation warnings

### 4.11.4

- Fixes an issue with scoped attributes automatically setting keys in a problematic way [#1069](https://github.com/marko-js/marko/pull/1069)
- Fixes #1059 and #1052 - `Cannot read property 'nextSibling' of null`

### 4.11.3

- Fixes #952
- Fixes automatic keying of elements/components in `<for>` loops

### 4.11.2

- Fixes another regression in the `<${dynamic}>` tag where `dashed-case` attributes were being converted to `camelCase` when rendering html elements.

### 4.11.1

- Fixes a regression in `<${dynamic}>` tags for object/array class/style attributes:
  ```marko
  $ const style = { color:'blue' };
  <${tagName} style=style/>
  ```
- Allows dynamic attributes defined using `...spread` to include object/array class/style [#933](https://github.com/marko-js/marko/pull/933):
  ```marko
  $ const attrs = { style:{ color:'blue' } };
  <tag ...attrs/>
  ```
- Fixes issue where object/array class/style attributes could not be used with `...spread` [#1007](https://github.com/marko-js/marko/pull/1007):
  ```marko
  $ const attrs = {};
  <tag class=["oops"] ...attrs/>
  ```

### 4.11.0

- Implement #880: `<${dynamic}>` tag
- `<include>` should be considered deprecated. Formal deprecation warning to come.

## 4.10.x

### 4.10.1

- Fix issue with calling `require('marko/components').init(components)` multiple times.

### 4.10.0

- Fix #1049 Fix documentation urls on the website.

## 4.9.x

### 4.9.7

- Fix #1038 Legacy compatibility dirty check returning false positives.

### 4.9.6

- Fix #1008 Spread attribute now supports functions (`..attrs()`) [#1029](https://github.com/marko-js/marko/pull/1029)

### 4.9.5

- Fix `onBeforeUpdate` timing for legacy component layer [#1027](https://github.com/marko-js/marko/pull/1027)

### 4.9.4

- Fix breaking older browsers with es6 object shorthand notation [bc0e91d5](https://github.com/marko-js/marko/commit/bc0e91d517d7b8de484c745a5734f15347ed0d26)

### 4.9.3

- Fix import-var compilation when there are no explicit attributes [#1002](https://github.com/marko-js/marko/pull/1002)

### 4.9.2

- Fixes collisions with multiple Marko runtimes on the same page. [#1019](https://github.com/marko-js/marko/pull/1019)
- Switch to using prettier and eslint. [#1016](https://github.com/marko-js/marko/pull/1016)

### 4.9.1

- Fixes an issue with keyed elements not getting properly removed. [#1013](https://github.com/marko-js/marko/pull/1013)

### 4.9.0

- Fixes related to hydration, split components, and the legacy compatibility layer [#1010](https://github.com/marko-js/marko/pull/1010)

- Fix paths for vdom dependencies [#1011](https://github.com/marko-js/marko/pull/1011)

## 4.8.x

### 4.8.0

- Add `once-[event]` directive [#990](https://github.com/marko-js/marko/pull/990)

- Improve testing setup [#989](https://github.com/marko-js/marko/pull/989)

## 4.7.x

### 4.7.5

- Update docs for advanced attribute definition [#968](https://github.com/marko-js/marko/pull/968)

- Improve error message for async rendering [#958](https://github.com/marko-js/marko/pull/958)

### 4.7.4

- Make jQuery optional for legacy components [#951](https://github.com/marko-js/marko/pull/951)

### 4.7.3

- Prevent onRender running on the server for legacy widgets

### 4.7.2

- Fixes [#946](https://github.com/marko-js/marko/issues/946) - don't put legacy init code in a separate lasso bundle

- Fixes allowing conditionally binding to different roots in a legacy widget [#944](https://github.com/marko-js/marko/pull/944)

### 4.7.1

- Fix issue with multiple top level elements being removed twice. [#940](https://github.com/marko-js/marko/pull/940)

### 4.7.0

- Add jQuery legacy compatibility layer support [#937](https://github.com/marko-js/marko/pull/937)

- Reorganize Marko tests [#934](https://github.com/marko-js/marko/pull/934)

- Switch to using jsdom in test suite [#935](https://github.com/marko-js/marko/pull/935)

- Decouple component hydration from Lasso [#929](https://github.com/marko-js/marko/pull/929)

## 4.6.x

### 4.6.0

- Fixes [#914](https://github.com/marko-js/marko/issues/914) and [#920](https://github.com/marko-js/marko/issues/920) -
  Resolves top-level component bugs

- Setup `marko.load()` to prefer precompiled templates from [marko-cli](https://github.com/marko-js/marko-cli)

- Various compiler changes to improve [marko-migrate](https://github.com/marko-js/marko-migrate)

- Fixes [#916](https://github.com/marko-js/marko/pull/916) - Add Marko debug mode.
  Adds babel plugin to remove and statically evaluate 'MARKO_DEBUG' literals for
  adding deprecation warnings and hints for the runtime without a performance
  penalty for production builds.

## 4.5.x

### 4.5.6

- Fixes [#909](https://github.com/marko-js/marko/issues/909) - Fix condition preventing bubbling DOM events from properly being attached to a component.

### 4.5.5

- Add 10 Awesome Marko Features article to documentation

### 4.5.4

- Fixes [#904](https://github.com/marko-js/marko/issues/904) - The loop status variable is not compiling when the equal sign is padded in spacing

### 4.5.3

- Fixes [#903](https://github.com/marko-js/marko/issues/903) - Special unicode chars (\u2028 and \u2029) need to be escaped if within script tag

### 4.5.2

- Fixes [#899](https://github.com/marko-js/marko/issues/899) - Keyed element could be incorrectly removed after DOM diffing/patching in case of HTML element mismatch for elements with the same key. [PR #900](https://github.com/marko-js/marko/pull/900)

### 4.5.1

- Fixes [#893](https://github.com/marko-js/marko/issues/893) - Keyed element could be incorrectly removed after DOM diffing/patching in case of HTML element mismatch for elements with the same key. [PR #894](https://github.com/marko-js/marko/pull/894) by [@westtrade](https://github.com/westtrade)

### 4.5.0

Summary of changes across all beta releases for the `4.5.0` release:

- Fixes [#886](https://github.com/marko-js/marko/issues/886) - Write component initialization code when async out and all of its nested async outs finish
- Fixes [#854](https://github.com/marko-js/marko/issues/854) - Make every .marko file a UI component ([PR #855](https://github.com/marko-js/marko/pull/855))
- Added support for the `:scoped` modifier on attributes and deprecated `:key`:

```marko
<label for:scoped="name">Name</label>
<input id:scoped="name" value="Frank"/>
```

- Fixes [#817](https://github.com/marko-js/marko/issues/817) - Support dynamic root elements
- Marko no longer attaches `id` attributes to elements for purposes of keyed matching
  - Keyed elements are maintained in an internal, per-component lookup
- Keys are now assigned to all custom tags and HTML elements at compile-time to improve reliability and performance of DOM diffing
- Optimized internal bookkeeping required during rendering a UI component tree (no more UI component stack)
- DOM diffing/patching changes:
  - Significant performance improvements
  - morphdom is now UI component-aware

### 4.5.0-beta.3

- Fixes [#854](https://github.com/marko-js/marko/issues/854) - Make every .marko file a UI component ([PR #855](https://github.com/marko-js/marko/pull/855))

### 4.5.0-beta.2

- Add ids for any key when component.elId/getElId is used as an attribute value
- Use indexOf instead of includes to support Node 4
- [docs] Fixes [#841](https://github.com/marko-js/marko/issues/841) - `docs/components.md` refers to deprecated "data" variable [#842](https://github.com/marko-js/marko/pull/842)

### 4.5.0-beta.1

- Add back (legacy) support for component.elId + key in template
- Fixes [#837](https://github.com/marko-js/marko/issues/837) - Update esprima to the latest to support async/await and ES2017 inside of components. ([PR #839](https://github.com/marko-js/marko/pull/839))
- Fixes key/scope for attributes that have dashes in the name

### 4.5.0-beta.0

- Fixes [#817](https://github.com/marko-js/marko/issues/817) - Support dynamic root elements
- Marko no longer attaches `id` attributes to elements for purposes of keyed matching
  - Keyed elements are maintained in an internal, per-component lookup
- Keys are now assigned to all custom tags and HTML elements at compile-time to improve reliability and performance of DOM diffing
- Optimized internal bookkeeping required during rendering a UI component tree (no more UI component stack)
- DOM diffing/patching changes:
  - Significant performance improvements
  - morphdom is now UI component-aware

## 4.4.x

### 4.4.28

- fix undefined reference error in Component.js
- Increase mocha timeout to avoid CI build's failing [#821](https://github.com/marko-js/marko/pull/821)

### 4.4.27

- Add ability to update globals by setting new input.
- [docs] Remove unneeded command from installation docs
- [docs] Update installing.md

### 4.4.26

- Add better interop for importing modules with default exports [#803](https://github.com/marko-js/marko/pull/803)

### 4.4.25

- Fixes #778 - Fix Marko compiler generating incorrect path for requires on Windows.

### 4.4.24

- [docs] Update installing.md

### 4.4.23

- Fixes #796 - Fix events for event targets that are SVGElementInstance types in IE11.
- Used shortcut for escapeAtTags;
- Added `escapeAtTags` options in order to render `<@tags>` as they are;
- simplify a condition judgement in components-jquery
- Fixes #790 - Class tag should not allow nested body content.
- Update `compile/index.js` test description
- Update handleRootNodes.js [#747](https://github.com/marko-js/marko/pull/747)
- [docs] Fix reference to lifecycle section in docs.

### 4.4.22

- Fixes #784 - Fix compiled preserve-attrs path.
- [testing] Fix express tests [#779](https://github.com/marko-js/marko/pull/779)
- [docs] Update webpack.md

### 4.4.21

- Updated description in `package.json`

### 4.4.20

- update bindComponentVar to use dynamic location
- updating location of bindComponent helper

### 4.4.19

- [testing] Fix key suffix test assertions.
- Address key suffix feedback. Additional tests.
- [morphdom] Removed bad and unhelpful optimization to avoid infinite loops
- [morphdom] Ensure `onBeforeNodeDiscarded` is only called once by looking to see if the node is still attached.
- [morphdom] Infinite loop fix in morphdom
- Fixes #761 - component.elId() does not work on the server
- Fixes #755 - Allow diffing of HTML, head, and body. [#756](https://github.com/marko-js/marko/pull/756)
- [docs] Updated component docs
- [docs] Use relative link for image
- [testing] User default npm version for each Node.js version

### 4.4.18

- Fixes #749 #690 - Do not rely on root node having an ID on rerender and properly handle style root nodes.

### 4.4.17

- Put package (`browser.json`) deps before others and parent deps before child deps [#750](https://github.com/marko-js/marko/pull/750)
- [docs] Fix typo in redux.md
- [docs] Add redux document to structure.json
- [docs] Add doc describing how to use Redux with Marko.

### 4.4.16

- Fix duplicate body variable

### 4.4.15

- Fixes #739 - Should not attempt to check instanceof of type Map if it does not exist in the browser.
- Added build scripts

### 4.4.14

- Fixes issue with renderToString not rendering text nodes

### 4.4.13

- Fixes #721 - Add a Code of Conduct
- Fixes #655 - Implement renderToString in the browser.

### 4.4.12

- Fixes #695 - Always ignore unrecognized tags for XML files when using the compiler.
- Fixes #705 - Throw error when the root HTML element is a component and has a dynamic id attribute.
- [testing] Additional test for root node with dynamic id of a component with a component.js file.

### 4.4.11

- Fixes #728 - Do not use module keyword because webpack compiles it to a custom object.
- Fixes #719 - Support Express 4 and Express 5.
- fixes #658 by removing empty style blocks [#715](https://github.com/marko-js/marko/pull/715)
- fixes #688 - add reference to browser.json in meta dependencies
- [docs] Fix broken link
- [docs] Fix Marko syntax in docs causing compilation errors on the website.
- [docs] Change pixels to percent in doc images.
- [testing] Purge express cache so that express tests both use correct module versions.

### 4.4.9

- Revert "Fixes #705 - Throw error when the root HTML element has a dynamic id …"
- [testing] Only run Node 4, 6, & 8 in travis

### 4.4.8

- [docs] Clean up why-is-marko-fast.md
- [docs] Clean up marko-vs-react.md

### 4.4.7

- Add silent option to browser-refresh and hot-reload
- Check id attribute for Literal. Update error message to include error page.
- Fixes #705 - Throw error when the root HTML element has a dynamic id attribute.
- [docs] Clean up components.md
- [docs] Fix typo in webpack.md
- [testing] give extra time for test timing out in travis
- [testing] run tests on node 8
- [testing] ignore test-dist from coverage

### 4.4.6

- Fixes #693 - [SSR] Improved handling of top-level UI components with renderBody func
- Switching to using `prepublish` with npm@5

### 4.4.3

- Use parent module to require express patch [#701](https://github.com/marko-js/marko/pull/701)
- [docs] Reference app should point to "marko-lasso" because "ui-components-playground" does not contain lasso
- [docs] Add articles section to docs.

### 4.4.2

- Build fixes related to compiler

### 4.4.0

- Improve no-update-if condition check
- Compatibility improvements for Try Online
- Code size reduction
- Introduced src/ and dist/ folders for optimized production builds
- Fixes #695 - Default to ignoring unrecognized tags for XML files.

## 4.3.x

### 4.3.1

- Add basic test for ensuring that res.marko returns a promise.
- enable res.marko can catch a error safe

### 4.3.0

- [compiler] Added more control over how attributes are targeted to props
- Don't add root markers to tags that don't produce output
- [docs] Added docs for Marko + Huncwot integration
- [AST] Added `node.removeChildren()`
- Extend marko globals with defaults

### 4.3.0-beta.4

- Fixes #673 - Circular dependency is causing problems with Webpack

### 4.3.0-beta.3

- Changes related to #670 - Globals must be serialized earlier to allow early mount of UI components in
- [docs] Improved docs for SSR

### 4.3.0-beta.2

- Fixes for #670 - Add support for serialized globals and retain globals on re-render

## 4.2.x

### 4.2.8

- Bug: Fixes [#661](https://github.com/marko-js/marko/issues/661) - Component initialization code may end up in the wrong place
- Bug: Fixes [#668](https://github.com/marko-js/marko/issues/668) - Declarative event listeners are now allowed on the `<include>` tag

### 4.2.7

- Bug: Fixes [#650](https://github.com/marko-js/marko/issues/650) - The tag "await" does not support attribute "unless"
- Improvements to legacy state

### 4.2.6

- Bug: Fixes [#654](https://github.com/marko-js/marko/issues/654) - Bug: components implementing a `key` attribute break in Marko v4
- Improvements to legacy compatibility layer

### 4.2.5

- Improved support for UI components implemented using native JavaScript class in a separate file
- Improved how legacy layout tags are handled by Marko v4

### 4.2.4

- Bug: Fixes [#653](https://github.com/marko-js/marko/issues/653) - Event handlers are no longer bound in edge case

### 4.2.3

- Bug: Fixes [#649](https://github.com/marko-js/marko/issues/649) - New line always added to `textarea` and other elements for single line/delimited HTML blocks

### 4.2.2

- Bug: Fixes [#648](https://github.com/marko-js/marko/issues/648) - Style attribute object and lengths not handled properly

### 4.2.1

- Bug: Fixed [#644](https://github.com/marko-js/marko/issues/644) - Attribute not rendered by Marko is not preserved if component first rendered on the server
- [Performance] Escaping is not needed for the `data-marko` attribute

### 4.2.0

- Bug: Fixed [#629](https://github.com/marko-js/marko/issues/629) - VDOM: Rendering unescaped HTML produces non-functioning HTML input controls
- Bug: Fixed [#634](https://github.com/marko-js/marko/issues/634) - writeInitComponentsCode is not a function
- Enhancement: Added support to allow improved precompiling of templates
- Enhancement: Fixed [#636](https://github.com/marko-js/marko/issues/636) - Add error when macro with duplicate name is found
- Performance: Optimized diffing/patching to avoid indexing entire tree to find keyed elements
- Performance: Optimized how event handlers are attached to VDOM nodes (separated from attributes)

## 4.1.x

### 4.1.3

- Bug: Fixed losing cursor position in Edge (see [morphdom PR #100](https://github.com/patrick-steele-idem/morphdom/pull/100) by [@zastavnitskiy](https://github.com/zastavnitskiy))
- Bug: Ignore `xmlns` attributes when virtualizing real DOM nodes (needed when inserting an HTML string when rendering to a VDOM)

### 4.1.2

- Bug: Fixed [#623](https://github.com/marko-js/marko/issues/623) - Uncaught TypeError: `toEl.$__hasAttribute` is not a function
- Bug: Fixed [#619](https://github.com/marko-js/marko/issues/619) - Deprecated `constructor()` for UI component classes

### 4.1.1

- Added `"use strict";` to restore Node.js compatibility for Node.js v4 and v5

### 4.1.0

- Bug: Fixes [#611](https://github.com/marko-js/marko/issues/611) - Component IDs are not being assigned correctly when intermediate non-component is rendered
- Performance: SVG namespaced elements are now resolved determined at compile-time
- Performance: Merged in `morphdom` and optimized for Marko
- Performance: Optimized diffing/patching of elements with only simple attributes in the following set: `class`, `id` and `style`

## 4.0.x

### 4.0.1

- Bug: Fixes [#612](https://github.com/marko-js/marko/issues/612) - Compile error when class method has empty `return`
- Bug: Fixes [#604](https://github.com/marko-js/marko/issues/604) - `no-update` attributes error when first rendered on the server
- Bug: Fixes [#608](https://github.com/marko-js/marko/issues/608) - Component losing `renderBody` input on a particular redraw
- Enhancement: Fixes [#606](https://github.com/marko-js/marko/issues/606) - named single-file component doesn't work

### 4.0.0

- Marko v4! [Release Announcement](https://medium.com/@mlrawlings/marko-4-0-is-here-837884c5f60d)

# 3.x

## 3.13.x

### 3.13.2

- Fixed [#478](TagLookup fails when merging taglibs) - TagLookup fails when merging taglibs

### 3.13.1

- Fixes [#465](https://github.com/marko-js/marko/issues/465)

### 3.13.0

## 3.12.x

### 3.12.0

- Added warnings for using render methods when you want string output ([Pull Request #450](https://github.com/marko-js/marko/pull/450) by [@mlrawlings](https://github.com/mlrawlings))

## 3.11.x

### 3.11.8

- Fixes [#382](https://github.com/marko-js/marko/issues/382) - Local variable for tag should have prefix or suffix to avoid conflict

### 3.11.7

- Fixes [#381](https://github.com/marko-js/marko/issues/381) - `$global` broken when using `template.stream()`

### 3.11.6

- Internal change: `AsyncWriter` → `AsyncStream`

### 3.11.5

- (no changes)

### 3.11.4

- Update to `async-writer@2`

### 3.11.3

- Silently ignore errors when parsing tag definition code inlined in JavaScript

### 3.11.2

- Fixed [#318](https://github.com/marko-js/marko/issues/318) - Use compiler options passed to require hook to configure marko globally

```javascript
require("marko/node-require").install({
  compilerOptions: {
    writeToDisk: false
  }
});
```

### 3.11.1

- Fixed [#370](https://github.com/marko-js/marko/issues/370) - HTML characters in loop separator string should not be escaped

### 3.11.0

- Introduced the `<include-html(path)>` tag for including static HTML:

```xml
<include-html('./foo.html')>
```

## 3.10.x

### 3.10.1

- Fixed [#44](https://github.com/marko-js/marko/issues/44) - Webpack compatibility fixes. Also see [marko-loader](https://github.com/marko-js/marko-loader) (A marko loader for webpack)

### 3.10.0

- Fixed [#357](https://github.com/marko-js/marko/issues/357) - Deprecate `empty`/`notEmpty` in Marko v3

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

- Fixed [#339](https://github.com/marko-js/marko/issues/339) - Tag transformers are not being applied to tags with a dynamic tag name (fixes [#146](https://github.com/marko-js/marko-components/issues/146) for Marko Components)

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

- Fixed a bug that was causing transforms to be run on detached nodes. This was manifesting itself in the `<async-fragment>` to `<await>` transform if an `if()` attribute was present (or other core attributes that end up wrapping the tag it is defined on).

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

- Fixes #202 - Pass along options to compiler when loading a template

### 2.8.0

- Added support for automatically discovering taglibs from installed packages that are scoped. ([PR #183](https://github.com/marko-js/marko/pull/183) by [@tropperstyle](https://github.com/tropperstyle))

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
var template = marko.load(templatePath, "Hello $!{data.name}!");
```

_NOTE: Loading directly from source only works on the server_

See [Pull Request #153](https://github.com/marko-js/marko/pull/153)

### 2.7.26

- Use shorter relative paths in error messages

### 2.7.25

- Fixes #150 - Provide option to prevent writing compiled templates to disk. Example usage:

```javascript
require("marko/compiler").defaultOptions.writeToDisk = false;
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
require("marko/node-require").install();

// Now you can require `*.marko` files just like any other JavaScript module
var template = require("./hello.marko");
var html = template.renderSync({ name: "Frank" });
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
  <ui-tabs.tab title="Home"> Content for Home </ui-tabs.tab>
  <ui-tabs.tab title="Profile"> Content for Profile </ui-tabs.tab>
  <ui-tabs.tab title="Messages"> Content for Messages </ui-tabs.tab>
</ui-tabs>
```

**_ui-tabs/marko-tag.json_**

```json
{
  "@orientation": "string",
  "@tabs <tab>[]": {
    "@title": "string"
  }
}
```

**_ui-tabs/renderer.js_**

```javascript
var template = require("marko").load(require.resolve("./template.marko"));

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

  template.render(
    {
      tabs: tabs
    },
    out
  );
};
```

**_ui-tabs/template.marko_**

```html
<div class="tabs">
  <ul class="nav nav-tabs">
    <li class="tab" for="tab in data.tabs">
      <a href="#${tab.title}"> ${tab.title} </a>
    </li>
  </ul>
  <div class="tab-content">
    <div class="tab-pane" for="tab in data.tabs">
      <invoke function="tab.renderBody(out)" />
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
<compiler-options whitespace="preserve" /> A B C
```

### 2.0.0

- Dynamic attributes for scanned tags without a tag will have dashes removed by default.
  - :exclamation: When using `tags-dir` to discover tags that do not have a `marko-tag.json`, the previous behavior was to allow all attributes and to use the actual attribute name as the input property name. For example, when using `<hello first-name="John">`, first name would need to be read in as `input['first-name']`. This was changed such that the first name property should now be read in as `input.firstName` (dashes removed and converted to camel case)
- Changes to allow UI component to be put into a single JS file:
  - Updated taglib directory scanner to use `index.js` if found. New search order:
    1.  `renderer.js` (use `renderer.js` if it exists)
    2.  `index.js` (use `index.js` if it exists and assume it exports a `renderer` or `render` property)
    3.  `template.marko` (use the template as the renderer if no `renderer.js` or `index.js`)
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

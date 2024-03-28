# Change Log

## 5.32.11

### Patch Changes

- [#2187](https://github.com/marko-js/marko/pull/2187) [`fe344b0`](https://github.com/marko-js/marko/commit/fe344b00041677f40ce49d03c0fb283322a1c898) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Fix some tags/class interop issues.

## 5.32.10

### Patch Changes

- [#2182](https://github.com/marko-js/marko/pull/2182) [`1fa3b05`](https://github.com/marko-js/marko/commit/1fa3b056006d5d0e3ac221b5b4a18b78de5add21) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Support tracking the "input" using babels scope analysis.

## 5.32.9

### Patch Changes

- [#2180](https://github.com/marko-js/marko/pull/2180) [`a8bfb50`](https://github.com/marko-js/marko/commit/a8bfb50d7617d338c8e6b11c3f18cbb4829a5cba) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Fix issue where vdom optimizer was including elements with user key attributes.

## 5.32.8

### Patch Changes

- [#2173](https://github.com/marko-js/marko/pull/2173) [`614f432`](https://github.com/marko-js/marko/commit/614f432bfeab93eb35c23d6e378e914b27540f7f) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Fix regression where hydrate dependencies had the incorrect resolved path if they were in node_modules.

## 5.32.7

### Patch Changes

- [`409ef4e`](https://github.com/marko-js/marko/commit/409ef4e76d680b6e4202658fdf9567c663898d8b) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Fix regression where hydrate entry files had incorrect relative paths.

## 5.32.6

### Patch Changes

- [#2164](https://github.com/marko-js/marko/pull/2164) [`08823b9`](https://github.com/marko-js/marko/commit/08823b916b0aca172edeaba86b632a4cf5462a8a) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Fix issue with interop translator not outputting correct hydrate entry code.

- Updated dependencies [[`08823b9`](https://github.com/marko-js/marko/commit/08823b916b0aca172edeaba86b632a4cf5462a8a)]:
  - @marko/babel-utils@6.4.2

## 5.32.5

### Patch Changes

- [#2162](https://github.com/marko-js/marko/pull/2162) [`88b45d4`](https://github.com/marko-js/marko/commit/88b45d4901647ae99e8cfab29c5aa13ee4599358) Thanks [@rturnq](https://github.com/rturnq)! - Avoid pre-bundling interop and including tags runtime

## 5.32.4

### Patch Changes

- [#2159](https://github.com/marko-js/marko/pull/2159) [`f9cf946`](https://github.com/marko-js/marko/commit/f9cf9467cd7e0cb59dd3254f9695a56434e97743) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Fix issue with interop translator incorrectly caching feature detection in parse stage with incomplete program.

- [#2159](https://github.com/marko-js/marko/pull/2159) [`f9cf946`](https://github.com/marko-js/marko/commit/f9cf9467cd7e0cb59dd3254f9695a56434e97743) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Expose runtime entry file information for tags api.

## 5.32.3

### Patch Changes

- [#2153](https://github.com/marko-js/marko/pull/2153) [`f2a924b`](https://github.com/marko-js/marko/commit/f2a924b2afa3d8f8810b71d72f91695c23bff4a2) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Fix issues with importing both cjs and mjs @marko/runtime-tags when loaded via compat layer.

## 5.32.2

### Patch Changes

- [#2148](https://github.com/marko-js/marko/pull/2148) [`b095755`](https://github.com/marko-js/marko/commit/b09575529493039ade02d9c35bcf21d5d4e6ef1d) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Fix issue with interop translator loading init-components tag.

## 5.32.1

### Patch Changes

- [#2138](https://github.com/marko-js/marko/pull/2138) [`105c26b`](https://github.com/marko-js/marko/commit/105c26bd4f7f37bd6073e4795b01b83d31ecda06) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Fix issue with package json src/dist override script.

- Updated dependencies [[`105c26b`](https://github.com/marko-js/marko/commit/105c26bd4f7f37bd6073e4795b01b83d31ecda06)]:
  - @marko/babel-utils@6.4.1

## 5.32.0

### Minor Changes

- [#2004](https://github.com/marko-js/marko/pull/2004) [`2704819`](https://github.com/marko-js/marko/commit/27048199d6a0ee48ed8118e9f7017a94c7dc4f3d) Thanks [@mlrawlings](https://github.com/mlrawlings)! - Release alpha of tags api translator/runtime.

- [#2004](https://github.com/marko-js/marko/pull/2004) [`2704819`](https://github.com/marko-js/marko/commit/27048199d6a0ee48ed8118e9f7017a94c7dc4f3d) Thanks [@mlrawlings](https://github.com/mlrawlings)! - Add `mount` api for client rendered components and expose `Symbol.asyncIterator` for server rendered components.

### Patch Changes

- Updated dependencies [[`2704819`](https://github.com/marko-js/marko/commit/27048199d6a0ee48ed8118e9f7017a94c7dc4f3d), [`2704819`](https://github.com/marko-js/marko/commit/27048199d6a0ee48ed8118e9f7017a94c7dc4f3d)]:
  - @marko/babel-utils@6.4.0

## 5.31.17

### Patch Changes

- [#2119](https://github.com/marko-js/marko/pull/2119) [`ee2d9f9`](https://github.com/marko-js/marko/commit/ee2d9f9880273382812690bf2609c6b8d698c0b1) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Fix regression with merging input and attribute tags if input defined the same property as the attribute tag name.

## 5.31.16

### Patch Changes

- [#2117](https://github.com/marko-js/marko/pull/2117) [`462992e`](https://github.com/marko-js/marko/commit/462992ee51fea27e56894b367870e608ea1009a0) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Fix issue where `:no-update` modifier was not working on special element handlers.

- [#2117](https://github.com/marko-js/marko/pull/2117) [`462992e`](https://github.com/marko-js/marko/commit/462992ee51fea27e56894b367870e608ea1009a0) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Use vdom to vdom comparison for special attributes (input.value, input.checked and option.selected) to improve consistency with how other attributes are handled.

- [#2117](https://github.com/marko-js/marko/pull/2117) [`462992e`](https://github.com/marko-js/marko/commit/462992ee51fea27e56894b367870e608ea1009a0) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Avoid setting attribute value for special properties (like input.value, input.checked and option.selected)

- [#2117](https://github.com/marko-js/marko/pull/2117) [`462992e`](https://github.com/marko-js/marko/commit/462992ee51fea27e56894b367870e608ea1009a0) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Normalize attribute values before setting value to avoid unnecessary work.

## 5.31.15

### Patch Changes

- [#2115](https://github.com/marko-js/marko/pull/2115) [`a55fb06`](https://github.com/marko-js/marko/commit/a55fb06ec638eb830eb72c71cb766fc05b6ea8cb) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Improve nested attribute tag handling with scriptlets.

## 5.31.14

### Patch Changes

- [#2108](https://github.com/marko-js/marko/pull/2108) [`9a18ced`](https://github.com/marko-js/marko/commit/9a18ced27b04b6fbd391d84c61d97269bcf7f851) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Fix and optimize the output for vdom hoisting.

- [#2108](https://github.com/marko-js/marko/pull/2108) [`a87b692`](https://github.com/marko-js/marko/commit/a87b69212f8b204dbe3d5a1396d95ddafd1adb85) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Fix diffing issues when swapping keyed elements between native tags, custom tags and fragments.

## 5.31.13

### Patch Changes

- [#2085](https://github.com/marko-js/marko/pull/2085) [`d82b21e`](https://github.com/marko-js/marko/commit/d82b21e8f505c5006d3781cf9056743dd9972fe1) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Improve compile error output.

## 5.31.12

### Patch Changes

- [#2079](https://github.com/marko-js/marko/pull/2079) [`2976dfa`](https://github.com/marko-js/marko/commit/2976dfac56c592dfd80ea79c6ea0e1389346f44c) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Fix issue where additional exports were being removed when stripping typescript types.

## 5.31.11

### Patch Changes

- [#2076](https://github.com/marko-js/marko/pull/2076) [`69b3ff5`](https://github.com/marko-js/marko/commit/69b3ff57c829418946e05c13b644a5560f589086) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Upgrade all package deps to latest

- Updated dependencies [[`69b3ff5`](https://github.com/marko-js/marko/commit/69b3ff57c829418946e05c13b644a5560f589086)]:
  - @marko/babel-utils@6.3.5

## 5.31.10

### Patch Changes

- [#2074](https://github.com/marko-js/marko/pull/2074) [`bf23c566fac02f4e2991be357a95483663493b3f`](https://github.com/marko-js/marko/commit/bf23c566fac02f4e2991be357a95483663493b3f) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Upgrade package lock and built types.

## 5.31.9

### Patch Changes

- [#2069](https://github.com/marko-js/marko/pull/2069) [`977d69078`](https://github.com/marko-js/marko/commit/977d690784f1d97acb3494bb822fa852c1380685) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Fix issue with printing variable declarations with multiple variables.

## 5.31.8

### Patch Changes

- [#2060](https://github.com/marko-js/marko/pull/2060) [`648a94928`](https://github.com/marko-js/marko/commit/648a94928f662b04634a61395d5d48a956a8ff36) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Expose meta data about which child Marko templates were analyzed for a given compilation.

- Updated dependencies [[`648a94928`](https://github.com/marko-js/marko/commit/648a94928f662b04634a61395d5d48a956a8ff36)]:
  - @marko/babel-utils@6.3.4

## 5.31.7

### Patch Changes

- [#2056](https://github.com/marko-js/marko/pull/2056) [`84f443d60`](https://github.com/marko-js/marko/commit/84f443d60539cc1b3382c6b16da4061070f97aca) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Fix issue when the Marko hot-reload runtime is loaded in native esm

## 5.31.6

### Patch Changes

- [#2054](https://github.com/marko-js/marko/pull/2054) [`1c5eccadf`](https://github.com/marko-js/marko/commit/1c5eccadf8d968552dbe8756905009107d783718) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Fix regression with @marko/babel-utils not exposing new parse helpers.

- Updated dependencies [[`1c5eccadf`](https://github.com/marko-js/marko/commit/1c5eccadf8d968552dbe8756905009107d783718)]:
  - @marko/babel-utils@6.3.3

## 5.31.5

### Patch Changes

- [#2051](https://github.com/marko-js/marko/pull/2051) [`5354d4411`](https://github.com/marko-js/marko/commit/5354d44112c56fcbbd7f44dd3bf91be1e5a7747c) Thanks [@LuLaValva](https://github.com/LuLaValva)! - add ts to ast

- Updated dependencies [[`5354d4411`](https://github.com/marko-js/marko/commit/5354d44112c56fcbbd7f44dd3bf91be1e5a7747c)]:
  - @marko/babel-utils@6.3.2

## 5.31.4

### Patch Changes

- [#2049](https://github.com/marko-js/marko/pull/2049) [`1554b1e1e`](https://github.com/marko-js/marko/commit/1554b1e1e53a75980af0b238cc27bed5ddfa215a) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Allow `template.marko` to act as `index.marko` for backword compat with v4/v3.

## 5.31.3

### Patch Changes

- [#2038](https://github.com/marko-js/marko/pull/2038) [`71a227a5f`](https://github.com/marko-js/marko/commit/71a227a5ff8b16c0bb983e082f28280518f712ce) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Fix issue where using the longhand nested attribute tag syntax in a marko.json with a `target-property` defined was not registering the alias as a known attribute, leading to compile errors.

## 5.31.2

### Patch Changes

- [#2032](https://github.com/marko-js/marko/pull/2032) [`034f96741`](https://github.com/marko-js/marko/commit/034f967419d840ae7b8a8cead6c657d5cc64b0a6) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Add js file extension to compiled import of the registry runtime. This improves prebundling in Vite.

## 5.31.1

### Patch Changes

- [#2020](https://github.com/marko-js/marko/pull/2020) [`6a4e947b5`](https://github.com/marko-js/marko/commit/6a4e947b5ac9944e61d7871d314a6325a0522d1d) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Ensure .marko files are resolved for legacy renderer taglib configs.

## 5.31.0

### Minor Changes

- [#2012](https://github.com/marko-js/marko/pull/2012) [`9aede281f`](https://github.com/marko-js/marko/commit/9aede281f95a788df03d607b7d6ca10d9025d39f) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Add compiler option to disable initializing components when outputting hydrate code.

### Patch Changes

- [#2012](https://github.com/marko-js/marko/pull/2012) [`17099cd8f`](https://github.com/marko-js/marko/commit/17099cd8ff4ef5868b79f32bdb682fd7393e7139) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Allow skipping output of virtual dependencies by returning a falsey value from the `resolveVirtualDependency` option.

- [#2012](https://github.com/marko-js/marko/pull/2012) [`ec21e799f`](https://github.com/marko-js/marko/commit/ec21e799f39e74c3d5b0fcfb5839a3954fbc7ad0) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Fix issue where data (legacy alias of input) was overwritten by assignment but still being migrated.

## 5.30.1

### Patch Changes

- [#2008](https://github.com/marko-js/marko/pull/2008) [`1235cf700`](https://github.com/marko-js/marko/commit/1235cf7005447bdad7a84bacf20d40c7c457c03a) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Fix regression with static template literal expressions.

- Updated dependencies [[`1235cf700`](https://github.com/marko-js/marko/commit/1235cf7005447bdad7a84bacf20d40c7c457c03a)]:
  - @marko/babel-utils@6.3.1

## 5.30.0

### Minor Changes

- [#2006](https://github.com/marko-js/marko/pull/2006) [`b2e70bc45`](https://github.com/marko-js/marko/commit/b2e70bc45006a8cccfa61ac99bbca40a71d05fd1) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Add compute node helper to replace babels `evaluate` helper. This helper is less aggressive and doesn't suffer from the false positives that popped up with babels version.

### Patch Changes

- [#2006](https://github.com/marko-js/marko/pull/2006) [`b2e70bc45`](https://github.com/marko-js/marko/commit/b2e70bc45006a8cccfa61ac99bbca40a71d05fd1) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Avoid adding trailing semicolon to style attribute output.

- [#2006](https://github.com/marko-js/marko/pull/2006) [`d45962db1`](https://github.com/marko-js/marko/commit/d45962db1def9b025a1d75d98b4c655c0565e3ef) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Include transitive Marko files loaded from `renderer` entry points in hydrate output.

- Updated dependencies [[`b2e70bc45`](https://github.com/marko-js/marko/commit/b2e70bc45006a8cccfa61ac99bbca40a71d05fd1)]:
  - @marko/babel-utils@6.3.0

## 5.29.2

### Patch Changes

- [#1999](https://github.com/marko-js/marko/pull/1999) [`7957fb564`](https://github.com/marko-js/marko/commit/7957fb56485a8607ab5b928531001085aba2d104) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Switch to .d.marko file for <await> tag types to avoid issues when loaded in a pure typescript project. By default TypeScript doesn't play well with `node_modules` which are seen as `.js` files which is what the jsdoc version of a Marko file appears as. By switching to a `.d.marko` it is instead always seen as `.ts` which is always analyzed by typescript.

## 5.29.1

### Patch Changes

- [#1997](https://github.com/marko-js/marko/pull/1997) [`2afa3f6e6`](https://github.com/marko-js/marko/commit/2afa3f6e61ca262debde88bc11400a6ba97a2f19) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Ensure source maps are loaded in dev mode when using the @marko/register hook.

## 5.29.0

### Minor Changes

- [#1996](https://github.com/marko-js/marko/pull/1996) [`d93037843`](https://github.com/marko-js/marko/commit/d930378434279451b0113ae6a268304063b037f4) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Move <macro> tag validation to the translate phase and expose new utilities for working with macros in @marko/babel-utils. This allows for migration/transformer/etc compiler hooks to better work with <macro>'s.

### Patch Changes

- [#1994](https://github.com/marko-js/marko/pull/1994) [`57b280b2f`](https://github.com/marko-js/marko/commit/57b280b2ff0af217c8381a1b0a9ef61a31ba211c) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Inline component class definitions with a name (eg `class MyComponent {}`) are now deprecated instead of being a hard error. This makes it easier to upgrade from Marko 4 for apps doing that.

- Updated dependencies [[`d93037843`](https://github.com/marko-js/marko/commit/d930378434279451b0113ae6a268304063b037f4)]:
  - @marko/babel-utils@6.2.0

## 5.28.3

### Patch Changes

- [#1992](https://github.com/marko-js/marko/pull/1992) [`1bc993012`](https://github.com/marko-js/marko/commit/1bc993012375315a6cbda3eed75291abf821de6b) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Fix regression which would happen if tools tried to "delete" the `loc` property on error instances returned from Marko. This property is now configurable and can be deleted again.

## 5.28.2

### Patch Changes

- [#1990](https://github.com/marko-js/marko/pull/1990) [`a54a23794`](https://github.com/marko-js/marko/commit/a54a2379487fd20e6598d5fdfc7c7dbe0f644e8b) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Change the stack frame for error messages generated by the compiler to work better with how node prints error messages.

## 5.28.1

### Patch Changes

- [#1987](https://github.com/marko-js/marko/pull/1987) [`8bf5cb1f0`](https://github.com/marko-js/marko/commit/8bf5cb1f097769c835a452ff4bbea67a6c741810) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - When duplicate taglib entries are found and merged, nullish values are now ignored. This means if you specify a property in a taglib it will not be unset by another (merged) taglib.

- [#1986](https://github.com/marko-js/marko/pull/1986) [`1b29b859f`](https://github.com/marko-js/marko/commit/1b29b859fb0876d9a8d0d7bba44d08f77f1706bb) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Fix issue where `module-code` entries were not properly checking the expected module output (causing them to always output esm). This was previously fine due to the cjs conversion plugin running for these, however a recent change caused that plugin to no longer run for these files since (which should have been unnecessary, except for that they had the incorrect check).

## 5.28.0

### Minor Changes

- [#1984](https://github.com/marko-js/marko/pull/1984) [`c6e2d0655`](https://github.com/marko-js/marko/commit/c6e2d06554166daa8eefe34121323413cf2d9cb1) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Allow migrator as a tag entry file.

### Patch Changes

- Updated dependencies [[`c6e2d0655`](https://github.com/marko-js/marko/commit/c6e2d06554166daa8eefe34121323413cf2d9cb1)]:
  - @marko/babel-utils@6.1.0

## 5.27.0

### Minor Changes

- [#1980](https://github.com/marko-js/marko/pull/1980) [`9d3b34eef`](https://github.com/marko-js/marko/commit/9d3b34eefa2d0d9f9b27b9635950360b62be2f1f) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Allow parse errors to be recovered from by migrations. This adds a new ast node type of MarkoParseError.
  MarkoParseError nodes can be removed during the migration stage to handle legacy syntaxes. Any MarkoParseError
  left in the AST at the end of the migration phase will throw an error similar to what it would have previously
  thrown synchronously.

  This also means that all parse errors can be surfaced as an aggregate error instead of bailing on the first
  parse error. When the compiler is ran with `errorRecovery: true` these errors become diagnostics instead of
  being thrown.

### Patch Changes

- Updated dependencies [[`9d3b34eef`](https://github.com/marko-js/marko/commit/9d3b34eefa2d0d9f9b27b9635950360b62be2f1f)]:
  - @marko/babel-utils@6.0.0

## 5.26.5

### Patch Changes

- [#1978](https://github.com/marko-js/marko/pull/1978) [`931a5d24b`](https://github.com/marko-js/marko/commit/931a5d24bbf77d7b29922f34d66d8ca7c42cea07) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Avoids loading babel config when compiler output is set to source or migrate.

## 5.26.4

### Patch Changes

- [#1976](https://github.com/marko-js/marko/pull/1976) [`7555a46a1`](https://github.com/marko-js/marko/commit/7555a46a19cee973b279fd582ffd51671490dc40) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Fix issue where aggregate errors from the compiler were not exposing error objects (was exposing the raw diagnostics).

- [#1976](https://github.com/marko-js/marko/pull/1976) [`7555a46a1`](https://github.com/marko-js/marko/commit/7555a46a19cee973b279fd582ffd51671490dc40) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Include locations and original message for errors thrown from the compiler.

## 5.26.3

### Patch Changes

- [#1974](https://github.com/marko-js/marko/pull/1974) [`42f7b46e2`](https://github.com/marko-js/marko/commit/42f7b46e25168ef4998e9c3f6014f9b6e1234486) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Run migration fixes synchronously.

- Updated dependencies [[`42f7b46e2`](https://github.com/marko-js/marko/commit/42f7b46e25168ef4998e9c3f6014f9b6e1234486)]:
  - @marko/babel-utils@5.22.1

## 5.26.2

### Patch Changes

- [#1972](https://github.com/marko-js/marko/pull/1972) [`897b8beba`](https://github.com/marko-js/marko/commit/897b8bebadbb08e0457fb959bd573cb2a5a4d593) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Fix issue where error messages without a source location were losing their message

## 5.26.1

### Patch Changes

- [#1970](https://github.com/marko-js/marko/pull/1970) [`ce5c40c95`](https://github.com/marko-js/marko/commit/ce5c40c9570c3410f62a2c9feb635ee7c7e54799) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Fix issue when outputting hydrate code with commonjs modules enabled.

## 5.26.0

### Minor Changes

- [#1968](https://github.com/marko-js/marko/pull/1968) [`70922e68e`](https://github.com/marko-js/marko/commit/70922e68e07578a867fff846e9bb623d64298e14) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Add support for additional diagnostics emitted from the compiler.

### Patch Changes

- Updated dependencies [[`70922e68e`](https://github.com/marko-js/marko/commit/70922e68e07578a867fff846e9bb623d64298e14)]:
  - @marko/babel-utils@5.22.0

## 5.25.9

### Patch Changes

- [#1965](https://github.com/marko-js/marko/pull/1965) [`08ea9febc`](https://github.com/marko-js/marko/commit/08ea9febcf1d8652409a23b82f3d2c2d912bbd52) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Fixes support for usage with [arc](https://github.com/eBay/arc) and adaptive `.marko` files.

## 5.25.8

### Patch Changes

- [#1949](https://github.com/marko-js/marko/pull/1949) [`7f6b65a4b`](https://github.com/marko-js/marko/commit/7f6b65a4b6d34dad6b4f6961be3b8766b7146e63) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Use @internal module to host browser/worker remapped files. Improves support for some tools that don't work well with nested package.json files.

## 5.25.7

### Patch Changes

- [#1934](https://github.com/marko-js/marko/pull/1934) [`04d6fad6d`](https://github.com/marko-js/marko/commit/04d6fad6d599adc98d6f0ef00a5c44b4a4fc7485) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Fix issue where types were not being stripped from the inline Marko component class.

## 5.25.6

### Patch Changes

- [#1929](https://github.com/marko-js/marko/pull/1929) [`c7a197a5c`](https://github.com/marko-js/marko/commit/c7a197a5c2e49e4b365d185d6e24ab431a61abc9) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Adds strict typescript types for the native HTML tags.

## 5.25.5

### Patch Changes

- [`712f68062`](https://github.com/marko-js/marko/commit/712f68062326b5fb71073b691d1761d4ac71bdc3) Thanks [@LuLaValva](https://github.com/LuLaValva)! - Add types for Marko translator-default

## 5.25.4

### Patch Changes

- [#1923](https://github.com/marko-js/marko/pull/1923) [`62afb3256`](https://github.com/marko-js/marko/commit/62afb3256a0c402e75b90f06af4e8cdc5c8112f3) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Remove class lifecycle types to avoid the need to `override` them.

## 5.25.3

### Patch Changes

- [#1921](https://github.com/marko-js/marko/pull/1921) [`f0c697d7b`](https://github.com/marko-js/marko/commit/f0c697d7b5b0afcbe524f390db2b3c5fa54d5607) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Avoids using a package.json remap for the browser implementation of the \_preserve internal tag (used to implement `no-update` directives). This fixes an issue where in vite the module could not be loaded properly.

## 5.25.2

### Patch Changes

- [#1920](https://github.com/marko-js/marko/pull/1920) [`7d5dab41c`](https://github.com/marko-js/marko/commit/7d5dab41c33cacbdff376570df09f65eb228a6a9) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Avoid adding `export {}` (from "@babel/plugin-transform-typescript") when outputing a template with the types stripped.

- [#1918](https://github.com/marko-js/marko/pull/1918) [`cceab7d20`](https://github.com/marko-js/marko/commit/cceab7d2061c627d5f3ea296f0acba80f97ad494) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Reduce script parsing restrictions added by Babel.
  This was causing Babel to error when parsing partial scripts.

  ```marko
  static const x = 1;
  export { x };
  ```

  Before this change in the above code Babel would error when parsing `export { x }` saying `x` was not previously defined. This is because Marko parses these statements in isolation.

- [#1920](https://github.com/marko-js/marko/pull/1920) [`7d5dab41c`](https://github.com/marko-js/marko/commit/7d5dab41c33cacbdff376570df09f65eb228a6a9) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Avoid outputing a `declare`'d type on a `class`.

## 5.25.1

### Patch Changes

- [#1916](https://github.com/marko-js/marko/pull/1916) [`ac1d5062a`](https://github.com/marko-js/marko/commit/ac1d5062a7be8bb359ba8d378d3c7b2ec6dc14f6) Thanks [@mlrawlings](https://github.com/mlrawlings)! - fix: modify/remove some inefficient regexes

## 5.25.0

### Minor Changes

- [#1909](https://github.com/marko-js/marko/pull/1909) [`e8f1370cf`](https://github.com/marko-js/marko/commit/e8f1370cf668bb579e48fd05a60c086bed6bb466) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Allow repeated attribute tags without using a `marko.json` file. Attribute tag objects now also contain `Symbol.iterator` implementation to make the single case more easily forwarded to the `<for>` tag.

### Patch Changes

- [#1914](https://github.com/marko-js/marko/pull/1914) [`22228e804`](https://github.com/marko-js/marko/commit/22228e804c76d630c0fc333fa4750bb6e42c0814) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Upgrades the included version of HTMLJS-Parser

- [#1910](https://github.com/marko-js/marko/pull/1910) [`8512cf397`](https://github.com/marko-js/marko/commit/8512cf3976ebf67dcd19ba4485b5e38979061520) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Removes circular dependencies from the Marko runtime.

## 5.24.0

### Minor Changes

- [#1907](https://github.com/marko-js/marko/pull/1907) [`7211a6937`](https://github.com/marko-js/marko/commit/7211a6937b2044a14f2c2194269a697c76066b54) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Expose `$global` as a shorthand for `out.global` within the template scope.

## 5.23.1

### Patch Changes

- [#1903](https://github.com/marko-js/marko/pull/1903) [`f2c8cad86`](https://github.com/marko-js/marko/commit/f2c8cad861d5efd5ef464de7cacea696031bfb93) Thanks [@LuLaValva](https://github.com/LuLaValva)! - Allow empty class members

## 5.23.0

### Minor Changes

- [#1899](https://github.com/marko-js/marko/pull/1899) [`4fc38e800`](https://github.com/marko-js/marko/commit/4fc38e80010241da76d24a46c2cd838aa5cf309f) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Expose the ability to intercept errors from the taglib builder.

## 5.22.6

### Patch Changes

- [#1892](https://github.com/marko-js/marko/pull/1892) [`c55ae937c`](https://github.com/marko-js/marko/commit/c55ae937c4d756482d49a6b8797669cd39ca6288) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Improve types for the await tag and Marko.Template.

## 5.22.5

### Patch Changes

- [#1888](https://github.com/marko-js/marko/pull/1888) [`d110b0b5f`](https://github.com/marko-js/marko/commit/d110b0b5f6607a911d15b2045d46b9aa6ecba2d2) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Improve type definitions.

## 5.22.4

### Patch Changes

- [`23e36a04b`](https://github.com/marko-js/marko/commit/23e36a04b0c6f7d6b53307d7838f61a1e0f2ce29) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Add missing type definition file to exposed types in package.json.

- [`d920e833d`](https://github.com/marko-js/marko/commit/d920e833df0b58456f28f7cb45ebd38b56c05ba7) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Add missing type definition for taglib.

- Updated dependencies [[`d920e833d`](https://github.com/marko-js/marko/commit/d920e833df0b58456f28f7cb45ebd38b56c05ba7)]:
  - @marko/babel-utils@5.21.4

## 5.22.3

### Patch Changes

- [#1885](https://github.com/marko-js/marko/pull/1885) [`f1efd707a`](https://github.com/marko-js/marko/commit/f1efd707aa1c2aeac092ef7fff4ef5cb959f45b6) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Add taglib extensions and type definitions for typescript support.

## 5.22.2

### Patch Changes

- [#1880](https://github.com/marko-js/marko/pull/1880) [`c4cce33e8`](https://github.com/marko-js/marko/commit/c4cce33e8c917af7c45ffc64d748e88364a0b91a) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Fix an issue where merging scripts (via the out.script api) was not properly inserting delimeters when scripts are added in different async writers.

## 5.22.1

### Patch Changes

- [#1875](https://github.com/marko-js/marko/pull/1875) [`b744720db`](https://github.com/marko-js/marko/commit/b744720db5483633643c5a75bd2eedc37aa9ff25) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Upgrades "magic-string" module (used for css sourcemaps) to avoid deprecation warning.

## 5.22.0

### Minor Changes

- [#1865](https://github.com/marko-js/marko/pull/1865) [`797e90489`](https://github.com/marko-js/marko/commit/797e90489359e1e87a9756da5082c1e085555546) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Changes the "default" attributes name to be "value". This is technically a breaking change, but it primarily only impacts the tags-api-preview which will also be getting a release to support this change.

## 5.21.8

### Patch Changes

- [#1862](https://github.com/marko-js/marko/pull/1862) [`30e0ea43d`](https://github.com/marko-js/marko/commit/30e0ea43d56e0a3c59748eae32a0ab85921c1aeb) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Avoid mutating component instance in HMR mode. (Improves support in tags api preview)

## 5.21.7

### Patch Changes

- [#1860](https://github.com/marko-js/marko/pull/1860) [`e64809458`](https://github.com/marko-js/marko/commit/e648094582c6a5c10d567bb7c844b50b6541e355) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Improve tag scanning performance.

* [#1860](https://github.com/marko-js/marko/pull/1860) [`e64809458`](https://github.com/marko-js/marko/commit/e648094582c6a5c10d567bb7c844b50b6541e355) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Update htmljs-parser version.

## 5.21.6

### Patch Changes

- [#1849](https://github.com/marko-js/marko/pull/1849) [`26dbb84f9`](https://github.com/marko-js/marko/commit/26dbb84f90ffa35b7d346b3c11ae24e92c2d47f4) Thanks [@mlrawlings](https://github.com/mlrawlings)! - fix: autokey all nodes under a static root

## 5.21.5

### Patch Changes

- [#1845](https://github.com/marko-js/marko/pull/1845) [`65bab8e6d`](https://github.com/marko-js/marko/commit/65bab8e6df02e6fd485a45d9a9c2200545f21479) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Fix issue where Marko runtime was being incorrectly matched when swapping from dev to prod runtimes.

- Updated dependencies [[`65bab8e6d`](https://github.com/marko-js/marko/commit/65bab8e6df02e6fd485a45d9a9c2200545f21479)]:
  - @marko/babel-utils@5.21.3

## 5.21.4

### Patch Changes

- [#1827](https://github.com/marko-js/marko/pull/1827) [`ae0c003a5`](https://github.com/marko-js/marko/commit/ae0c003a545a3610330b44c677a7521990c90b05) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Fix issue where there was whitespace or a comment between else/else-if tags.

## 5.21.3

### Patch Changes

- [#1824](https://github.com/marko-js/marko/pull/1824) [`2f6459d2c`](https://github.com/marko-js/marko/commit/2f6459d2c421ac82c4627c90f1c50cb229a99d33) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Fix issue where shorthand attribute methods could not have a "return" statement.

## 5.21.2

### Patch Changes

- [#1794](https://github.com/marko-js/marko/pull/1794) [`b9d26355f`](https://github.com/marko-js/marko/commit/b9d26355fa9bc334a96cea32c3ac90d70673c8a5) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Add file extensions to getRuntimeEntryFiles helper.

## 5.21.1

### Patch Changes

- [#1792](https://github.com/marko-js/marko/pull/1792) [`c9107ea7f`](https://github.com/marko-js/marko/commit/c9107ea7f6fc69df10700114fe35b7b494414194) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Fix broken previous release where the "main" field for package.json files was not correctly updated when published

- Updated dependencies [[`c9107ea7f`](https://github.com/marko-js/marko/commit/c9107ea7f6fc69df10700114fe35b7b494414194)]:
  - @marko/babel-utils@5.21.1

## 5.21.0

### Minor Changes

- [#1787](https://github.com/marko-js/marko/pull/1787) [`dd9009d66`](https://github.com/marko-js/marko/commit/dd9009d665f4f660d106aa0c3364e34ca3561abc) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Upgrades the compiler to use the latest major release of `htmljs-parser` bringing in the improvements listed here:
  https://github.com/marko-js/htmljs-parser/pull/93

### Patch Changes

- Updated dependencies [[`dd9009d66`](https://github.com/marko-js/marko/commit/dd9009d665f4f660d106aa0c3364e34ca3561abc)]:
  - @marko/babel-utils@5.21.0

## [5.20.9](https://github.com/marko-js/marko/compare/v5.20.8...v5.20.9) (2022-04-27)

**Note:** Version bump only for package @marko/translator-default

## [5.20.8](https://github.com/marko-js/marko/compare/v5.20.7...v5.20.8) (2022-04-26)

**Note:** Version bump only for package @marko/translator-default

## [5.20.7](https://github.com/marko-js/marko/compare/v5.20.6...v5.20.7) (2022-04-26)

**Note:** Version bump only for package @marko/translator-default

## [5.20.6](https://github.com/marko-js/marko/compare/v5.20.5...v5.20.6) (2022-04-25)

### Bug Fixes

- issue with style tag with variable treated as block ([e82df08](https://github.com/marko-js/marko/commit/e82df080072841842b42dd424bfc45a567bf5b6c))

## [5.20.5](https://github.com/marko-js/marko/compare/v5.20.4...v5.20.5) (2022-04-15)

### Bug Fixes

- removing some nullish static attributes on native tags with spreads ([bae0d66](https://github.com/marko-js/marko/commit/bae0d66afa7724930dd56eec803d3de25f413770))
- **translator-default:** string literals in dynamic tags incorrectly doing component lookup ([28aa2e8](https://github.com/marko-js/marko/commit/28aa2e84c1f7335f77c2d0ef29d30453401e7b0d))

## [5.20.4](https://github.com/marko-js/marko/compare/v5.20.3...v5.20.4) (2022-04-11)

**Note:** Version bump only for package @marko/translator-default

## [5.20.3](https://github.com/marko-js/marko/compare/v5.20.2...v5.20.3) (2022-03-24)

**Note:** Version bump only for package @marko/translator-default

## [5.20.2](https://github.com/marko-js/marko/compare/v5.20.1...v5.20.2) (2022-03-23)

**Note:** Version bump only for package @marko/translator-default

## [5.20.1](https://github.com/marko-js/marko/compare/v5.20.0...v5.20.1) (2022-03-22)

**Note:** Version bump only for package @marko/translator-default

# [5.20.0](https://github.com/marko-js/marko/compare/v5.19.3...v5.20.0) (2022-03-11)

**Note:** Version bump only for package @marko/translator-default

## [5.19.3](https://github.com/marko-js/marko/compare/v5.19.2...v5.19.3) (2022-03-08)

**Note:** Version bump only for package @marko/translator-default

## [5.19.2](https://github.com/marko-js/marko/compare/v5.19.1...v5.19.2) (2022-03-08)

**Note:** Version bump only for package @marko/translator-default

## [5.19.1](https://github.com/marko-js/marko/compare/v5.19.0...v5.19.1) (2022-01-28)

**Note:** Version bump only for package @marko/translator-default

# [5.19.0](https://github.com/marko-js/marko/compare/v5.18.2...v5.19.0) (2022-01-28)

### Bug Fixes

- **translator-default:** temporarily disable local variable tagname warning ([3d0a74a](https://github.com/marko-js/marko/commit/3d0a74ab1c51c98d576581bcb556f1cddf9cb770))

## [5.18.2](https://github.com/marko-js/marko/compare/v5.18.1...v5.18.2) (2022-01-25)

**Note:** Version bump only for package @marko/translator-default

## [5.18.1](https://github.com/marko-js/marko/compare/v5.18.0...v5.18.1) (2022-01-25)

### Bug Fixes

- unnecessary warnings with dynamic tag shorthand ([22f1220](https://github.com/marko-js/marko/commit/22f1220f6481b767f02c117dba2f223bb84b9299))

# [5.18.0](https://github.com/marko-js/marko/compare/v5.17.10...v5.18.0) (2022-01-24)

### Features

- add shorthand for dynamic tag names from identifier ([#1766](https://github.com/marko-js/marko/issues/1766)) ([94e4fd8](https://github.com/marko-js/marko/commit/94e4fd818bffaf798298317e6813d369a3c7f413))

## [5.17.10](https://github.com/marko-js/marko/compare/v5.17.9...v5.17.10) (2022-01-14)

**Note:** Version bump only for package @marko/translator-default

## [5.17.9](https://github.com/marko-js/marko/compare/v5.17.8...v5.17.9) (2022-01-07)

**Note:** Version bump only for package @marko/translator-default

## [5.17.8](https://github.com/marko-js/marko/compare/v5.17.7...v5.17.8) (2022-01-06)

**Note:** Version bump only for package @marko/translator-default

## [5.17.7](https://github.com/marko-js/marko/compare/v5.17.6...v5.17.7) (2022-01-06)

**Note:** Version bump only for package @marko/translator-default

## [5.17.6](https://github.com/marko-js/marko/compare/v5.17.5...v5.17.6) (2022-01-02)

### Bug Fixes

- use full file extension for compiler imports ([#1762](https://github.com/marko-js/marko/issues/1762)) ([041011a](https://github.com/marko-js/marko/commit/041011afceb581a64169c4ee370b31448a81c0e7))

## [5.17.5](https://github.com/marko-js/marko/compare/v5.17.4...v5.17.5) (2021-11-24)

**Note:** Version bump only for package @marko/translator-default

## [5.17.4](https://github.com/marko-js/marko/compare/v5.17.3...v5.17.4) (2021-11-17)

**Note:** Version bump only for package @marko/translator-default

## [5.17.3](https://github.com/marko-js/marko/compare/v5.17.2...v5.17.3) (2021-10-30)

### Bug Fixes

- upgrade babel deps & fix builder regression ([91b3c58](https://github.com/marko-js/marko/commit/91b3c5855923adb64ab30677729e2d0404245846))

## [5.17.2](https://github.com/marko-js/marko/compare/v5.17.1...v5.17.2) (2021-10-26)

**Note:** Version bump only for package @marko/translator-default

## [5.17.1](https://github.com/marko-js/marko/compare/v5.17.0...v5.17.1) (2021-10-25)

**Note:** Version bump only for package @marko/translator-default

# [5.17.0](https://github.com/marko-js/marko/compare/v5.16.1...v5.17.0) (2021-10-25)

**Note:** Version bump only for package @marko/translator-default

## [5.16.1](https://github.com/marko-js/marko/compare/v5.16.0...v5.16.1) (2021-10-22)

**Note:** Version bump only for package @marko/translator-default

# [5.16.0](https://github.com/marko-js/marko/compare/v5.15.12...v5.16.0) (2021-10-11)

**Note:** Version bump only for package @marko/translator-default

## [5.15.12](https://github.com/marko-js/marko/compare/v5.15.11...v5.15.12) (2021-10-04)

**Note:** Version bump only for package @marko/translator-default

## [5.15.11](https://github.com/marko-js/marko/compare/v5.15.10...v5.15.11) (2021-09-29)

### Bug Fixes

- normalize file opts similar to babel ([86310e6](https://github.com/marko-js/marko/commit/86310e603985ed96cba523fb07e25a0852cff8e6))

## [5.15.10](https://github.com/marko-js/marko/compare/v5.15.9...v5.15.10) (2021-09-07)

### Bug Fixes

- deduping issue with hydrate output ([e5d38e1](https://github.com/marko-js/marko/commit/e5d38e14d3c27cd7d3644868f10ec3e8ad2955cb))

## [5.15.9](https://github.com/marko-js/marko/compare/v5.15.8...v5.15.9) (2021-09-05)

**Note:** Version bump only for package @marko/translator-default

## [5.15.8](https://github.com/marko-js/marko/compare/v5.15.7...v5.15.8) (2021-09-05)

**Note:** Version bump only for package @marko/translator-default

## [5.15.7](https://github.com/marko-js/marko/compare/v5.15.6...v5.15.7) (2021-09-03)

### Bug Fixes

- cyclic hydration deps ([#1736](https://github.com/marko-js/marko/issues/1736)) ([3dfa904](https://github.com/marko-js/marko/commit/3dfa904f7296ec29ce74ff1e32bf13e239e05be6))

## [5.15.6](https://github.com/marko-js/marko/compare/v5.15.5...v5.15.6) (2021-09-03)

### Bug Fixes

- supports babel 7.15.4 ([a301a87](https://github.com/marko-js/marko/commit/a301a870e8e719d770ccef1958e9d9c03a93d765))

## [5.15.5](https://github.com/marko-js/marko/tree/master/packages/translator-default/compare/v5.15.4...v5.15.5) (2021-08-26)

**Note:** Version bump only for package @marko/translator-default

## [5.15.4](https://github.com/marko-js/marko/tree/master/packages/translator-default/compare/v5.15.3...v5.15.4) (2021-08-07)

**Note:** Version bump only for package @marko/translator-default

## [5.15.3](https://github.com/marko-js/marko/tree/master/packages/translator-default/compare/v5.15.2...v5.15.3) (2021-08-06)

**Note:** Version bump only for package @marko/translator-default

## [5.15.2](https://github.com/marko-js/marko/tree/master/packages/translator-default/compare/v5.15.1...v5.15.2) (2021-08-06)

**Note:** Version bump only for package @marko/translator-default

## [5.15.1](https://github.com/marko-js/marko/tree/master/packages/translator-default/compare/v5.15.0...v5.15.1) (2021-07-30)

**Note:** Version bump only for package @marko/translator-default

# [5.15.0](https://github.com/marko-js/marko/tree/master/packages/translator-default/compare/v5.14.2...v5.15.0) (2021-07-28)

**Note:** Version bump only for package @marko/translator-default

## [5.14.2](https://github.com/marko-js/marko/tree/master/packages/translator-default/compare/v5.14.1...v5.14.2) (2021-07-28)

### Bug Fixes

- support method shorthand from updated parser ([accb1bf](https://github.com/marko-js/marko/tree/master/packages/translator-default/commit/accb1bf51ff73ccff5f3fcbd0c65172b9a7a262a))

## [5.14.1](https://github.com/marko-js/marko/tree/master/packages/translator-default/compare/v5.14.0...v5.14.1) (2021-07-26)

### Bug Fixes

- **translator-default:** issue when MarkoClass added via compiler hook ([c5ba393](https://github.com/marko-js/marko/tree/master/packages/translator-default/commit/c5ba3934ff1657eabe15fb66521401e4e2f7f4c4))

# [5.14.0](https://github.com/marko-js/marko/tree/master/packages/translator-default/compare/v5.13.0...v5.14.0) (2021-07-24)

**Note:** Version bump only for package @marko/translator-default

# [5.13.0](https://github.com/marko-js/marko/tree/master/packages/translator-default/compare/v5.12.1...v5.13.0) (2021-07-23)

### Features

- add support for new binding shorthand syntax ([1c20064](https://github.com/marko-js/marko/tree/master/packages/translator-default/commit/1c20064bdf04c3491b40e68aa6e57113dd40bc40))

## [5.12.1](https://github.com/marko-js/marko/tree/master/packages/translator-default/compare/v5.12.0...v5.12.1) (2021-07-21)

### Bug Fixes

- issue with tag var scope hoisting ([ed8de11](https://github.com/marko-js/marko/tree/master/packages/translator-default/commit/ed8de119f1d81da04f2006922864be0ef8a60ab0))

# [5.12.0](https://github.com/marko-js/marko/tree/master/packages/translator-default/compare/v5.11.3...v5.12.0) (2021-07-12)

### Features

- **translator-default:** support new tag runtime props via compile hook ([f345b0c](https://github.com/marko-js/marko/tree/master/packages/translator-default/commit/f345b0c071dce3906049ff65a0430b4cd621bdad))

## [5.11.3](https://github.com/marko-js/marko/tree/master/packages/translator-default/compare/v5.11.2...v5.11.3) (2021-07-08)

### Bug Fixes

- allow key attribute to pass through for attribute tags ([ab52ae4](https://github.com/marko-js/marko/tree/master/packages/translator-default/commit/ab52ae4c41fd94f27b397507423b3da4343bd9a5))

## [5.11.2](https://github.com/marko-js/marko/tree/master/packages/translator-default/compare/v5.11.1...v5.11.2) (2021-07-07)

**Note:** Version bump only for package @marko/translator-default

## [5.11.1](https://github.com/marko-js/marko/tree/master/packages/translator-default/compare/v5.11.0...v5.11.1) (2021-07-07)

**Note:** Version bump only for package @marko/translator-default

# [5.11.0](https://github.com/marko-js/marko/tree/master/packages/translator-default/compare/v5.10.7...v5.11.0) (2021-07-07)

**Note:** Version bump only for package @marko/translator-default

## [5.10.7](https://github.com/marko-js/marko/tree/master/packages/translator-default/compare/v5.10.6...v5.10.7) (2021-06-23)

### Bug Fixes

- **translator-default:** delay no tag var assertion if translator exists ([3f7b570](https://github.com/marko-js/marko/tree/master/packages/translator-default/commit/3f7b570fa11688b84345d056e08d31b737fa4783))

## [5.10.6](https://github.com/marko-js/marko/tree/master/packages/translator-default/compare/v5.10.5...v5.10.6) (2021-06-10)

### Bug Fixes

- **translator-default:** issue with user defined component var ([a36cfd1](https://github.com/marko-js/marko/tree/master/packages/translator-default/commit/a36cfd1bbbc213ea7889b5f59aec61e94cc5598c))

## [5.10.5](https://github.com/marko-js/marko/tree/master/packages/translator-default/compare/v5.10.4...v5.10.5) (2021-06-08)

**Note:** Version bump only for package @marko/translator-default

## [5.10.4](https://github.com/marko-js/marko/tree/master/packages/translator-default/compare/v5.10.3...v5.10.4) (2021-05-19)

**Note:** Version bump only for package @marko/translator-default

## [5.10.3](https://github.com/marko-js/marko/tree/master/packages/translator-default/compare/v5.10.2...v5.10.3) (2021-05-14)

**Note:** Version bump only for package @marko/translator-default

## [5.10.2](https://github.com/marko-js/marko/tree/master/packages/translator-default/compare/v5.10.1...v5.10.2) (2021-05-04)

**Note:** Version bump only for package @marko/translator-default

## [5.10.1](https://github.com/marko-js/marko/tree/master/packages/translator-default/compare/v5.10.0...v5.10.1) (2021-05-04)

**Note:** Version bump only for package @marko/translator-default

# [5.10.0](https://github.com/marko-js/marko/tree/master/packages/translator-default/compare/v5.9.0...v5.10.0) (2021-04-30)

### Features

- add new HMR runtime ([a873762](https://github.com/marko-js/marko/tree/master/packages/translator-default/commit/a87376299952c8f9fc5c3d467c571acc0956bfb3))

# [5.9.0](https://github.com/marko-js/marko/tree/master/packages/translator-default/compare/v5.8.4...v5.9.0) (2021-04-21)

### Features

- expose api to get runtime entry files for translator ([#1687](https://github.com/marko-js/marko/tree/master/packages/translator-default/issues/1687)) ([fad9159](https://github.com/marko-js/marko/tree/master/packages/translator-default/commit/fad91598b28f3ab6e8e3550e42c50d062ea41ad9))

## [5.8.4](https://github.com/marko-js/marko/tree/master/packages/translator-default/compare/v5.8.3...v5.8.4) (2021-04-19)

### Bug Fixes

- **translator-default:** ignore browser.json with resolveVirtualDependency api ([b101623](https://github.com/marko-js/marko/tree/master/packages/translator-default/commit/b101623d7a46a5c0fa497998530fd14b93497433))

## [5.8.3](https://github.com/marko-js/marko/tree/master/packages/translator-default/compare/v5.8.2...v5.8.3) (2021-04-18)

### Bug Fixes

- **translator-default:** resolve correct production paths with hydrate output ([33302ef](https://github.com/marko-js/marko/tree/master/packages/translator-default/commit/33302ef30c9f362ef5029384f3f54d881c517881))

## [5.8.2](https://github.com/marko-js/marko/tree/master/packages/translator-default/compare/v5.8.1...v5.8.2) (2021-04-18)

### Bug Fixes

- **translator-default:** hydrate mode watchFiles missing stateless component, css source map content ([c0da831](https://github.com/marko-js/marko/tree/master/packages/translator-default/commit/c0da831860dae704d2912833b94a4a9ad343fed0))

## [5.8.1](https://github.com/marko-js/marko/tree/master/packages/translator-default/compare/v5.8.0...v5.8.1) (2021-04-16)

**Note:** Version bump only for package @marko/translator-default

# [5.8.0](https://github.com/marko-js/marko/tree/master/packages/translator-default/compare/v5.7.0...v5.8.0) (2021-04-16)

### Bug Fixes

- remove unecessary windows path normalization ([6d1a4f5](https://github.com/marko-js/marko/tree/master/packages/translator-default/commit/6d1a4f556400adf8a1a9161212e4c516ac9ce8e5))

### Features

- add new hydrateIncludeImports option ([#1686](https://github.com/marko-js/marko/tree/master/packages/translator-default/issues/1686)) ([db84f91](https://github.com/marko-js/marko/tree/master/packages/translator-default/commit/db84f913b47e4372c84c09a34ca8529b646b7869))

# [5.7.0](https://github.com/marko-js/marko/tree/master/packages/translator-default/compare/v5.6.2...v5.7.0) (2021-04-07)

### Bug Fixes

- **translator-default:** issue with inline sourcmeaps and virtual files ([94ce0e1](https://github.com/marko-js/marko/tree/master/packages/translator-default/commit/94ce0e136492294760d6a016c719e09c813f59f1))

## [5.6.2](https://github.com/marko-js/marko/tree/master/packages/translator-default/compare/v5.6.1...v5.6.2) (2021-03-30)

### Bug Fixes

- **translator-default:** some bundlers not supporting hoisted imports ([0233d04](https://github.com/marko-js/marko/tree/master/packages/translator-default/commit/0233d042206233ebaaf2ee551b8a926589c7f02f))

## [5.6.1](https://github.com/marko-js/marko/tree/master/packages/translator-default/compare/v5.6.0...v5.6.1) (2021-03-27)

**Note:** Version bump only for package @marko/translator-default

# [5.6.0](https://github.com/marko-js/marko/tree/master/packages/translator-default/compare/v5.5.4...v5.6.0) (2021-03-27)

### Features

- flush_here_and_after tag ([#1681](https://github.com/marko-js/marko/tree/master/packages/translator-default/issues/1681)) ([9d01322](https://github.com/marko-js/marko/tree/master/packages/translator-default/commit/9d0132281a89b804fe847e98f915aab951ba78a7))

## [5.5.4](https://github.com/marko-js/marko/tree/master/packages/translator-default/compare/v5.5.3...v5.5.4) (2021-03-22)

### Bug Fixes

- resolveVirtualDependency typo ([be762ee](https://github.com/marko-js/marko/tree/master/packages/translator-default/commit/be762ee84f3c10160bcf7bb253f6f9c9e68bd3ce))

## [5.5.3](https://github.com/marko-js/marko/tree/master/packages/translator-default/compare/v5.5.2...v5.5.3) (2021-03-22)

### Bug Fixes

- **translator-default:** hydration mismatch with conditional dynamic tag ([91d3ee6](https://github.com/marko-js/marko/tree/master/packages/translator-default/commit/91d3ee66b2df589e3e42afb9c534b5f94a6fa6bb))

## [5.5.2](https://github.com/marko-js/marko/tree/master/packages/translator-default/compare/v5.5.1...v5.5.2) (2021-03-19)

**Note:** Version bump only for package @marko/translator-default

## [5.5.1](https://github.com/marko-js/marko/tree/master/packages/translator-default/compare/v5.5.0...v5.5.1) (2021-03-18)

**Note:** Version bump only for package @marko/translator-default

# [5.5.0](https://github.com/marko-js/marko/tree/master/packages/translator-default/compare/v5.4.2...v5.5.0) (2021-03-18)

### Features

- add hydrate option ([#1673](https://github.com/marko-js/marko/tree/master/packages/translator-default/issues/1673)) ([a4e7013](https://github.com/marko-js/marko/tree/master/packages/translator-default/commit/a4e701355efcd93971eb46988f5e990f4517796f))

## [5.4.2](https://github.com/marko-js/marko/tree/master/packages/translator-default/compare/v5.4.1...v5.4.2) (2021-03-10)

**Note:** Version bump only for package @marko/translator-default

## [5.4.1](https://github.com/marko-js/marko/tree/master/packages/translator-default/compare/v5.4.0...v5.4.1) (2021-03-10)

**Note:** Version bump only for package @marko/translator-default

# [5.4.0](https://github.com/marko-js/marko/tree/master/packages/translator-default/compare/v5.3.0...v5.4.0) (2021-03-10)

**Note:** Version bump only for package @marko/translator-default

# [5.3.0](https://github.com/marko-js/marko/tree/master/packages/translator-default/compare/v5.2.4...v5.3.0) (2021-03-08)

**Note:** Version bump only for package @marko/translator-default

## [5.2.4](https://github.com/marko-js/marko/tree/master/packages/translator-default/compare/v5.2.3...v5.2.4) (2021-03-08)

**Note:** Version bump only for package @marko/translator-default

## [5.2.3](https://github.com/marko-js/marko/tree/master/packages/translator-default/compare/v5.2.2...v5.2.3) (2021-03-05)

**Note:** Version bump only for package @marko/translator-default

## [5.2.2](https://github.com/marko-js/marko/tree/master/packages/translator-default/compare/v5.2.1...v5.2.2) (2021-03-01)

**Note:** Version bump only for package @marko/translator-default

## [5.2.1](https://github.com/marko-js/marko/tree/master/packages/translator-default/compare/v5.2.0...v5.2.1) (2021-03-01)

**Note:** Version bump only for package @marko/translator-default

# [5.2.0](https://github.com/marko-js/marko/tree/master/packages/translator-default/compare/v5.1.21...v5.2.0) (2021-03-01)

**Note:** Version bump only for package @marko/translator-default

## [5.1.21](https://github.com/marko-js/marko/tree/master/packages/translator-default/compare/v5.1.20...v5.1.21) (2021-03-01)

**Note:** Version bump only for package @marko/translator-default

## [5.1.20](https://github.com/marko-js/marko/tree/master/packages/translator-default/compare/v5.1.19...v5.1.20) (2021-02-26)

**Note:** Version bump only for package @marko/translator-default

## [5.1.19](https://github.com/marko-js/marko/tree/master/packages/translator-default/compare/v5.1.18...v5.1.19) (2021-02-26)

### Bug Fixes

- move @marko/babel-types into compiler ([5369a63](https://github.com/marko-js/marko/tree/master/packages/translator-default/commit/5369a63e0ce66c422981893525ff6c9bcbd461dd))

## [5.1.18](https://github.com/marko-js/marko/tree/master/packages/translator-default/compare/v5.1.17...v5.1.18) (2021-02-21)

### Bug Fixes

- **marko:** add back missing preserve-name & remove-dashes config ([4283178](https://github.com/marko-js/marko/tree/master/packages/translator-default/commit/428317863d0a1d563019715194064a3cdd7c26d0))

## [5.1.17](https://github.com/marko-js/marko/tree/master/packages/translator-default/compare/v5.1.16...v5.1.17) (2021-02-18)

**Note:** Version bump only for package @marko/translator-default

## [5.1.16](https://github.com/marko-js/marko/tree/master/packages/translator-default/compare/v5.1.15...v5.1.16) (2021-02-17)

**Note:** Version bump only for package @marko/translator-default

## [5.1.15](https://github.com/marko-js/marko/tree/master/packages/translator-default/compare/v5.1.14...v5.1.15) (2021-02-13)

**Note:** Version bump only for package @marko/translator-default

## [5.1.14](https://github.com/marko-js/marko/tree/master/packages/translator-default/compare/v5.1.13...v5.1.14) (2021-02-12)

### Bug Fixes

- **translator-default:** issue with style tag source positions ([415161b](https://github.com/marko-js/marko/tree/master/packages/translator-default/commit/415161ba134d038da5ac3ab81718329a45e0f02f))

## [5.1.13](https://github.com/marko-js/marko/tree/master/packages/translator-default/compare/v5.1.12...v5.1.13) (2021-02-12)

**Note:** Version bump only for package @marko/translator-default

## [5.1.12](https://github.com/marko-js/marko/tree/master/packages/translator-default/compare/v5.1.11...v5.1.12) (2021-02-12)

### Bug Fixes

- **marko:** avoid prematurely resolving taglib paths ([29f3cbe](https://github.com/marko-js/marko/tree/master/packages/translator-default/commit/29f3cbeccf07108d05e600a2a12dab2a3a0fa6a9))

## [5.1.11](https://github.com/marko-js/marko/tree/master/packages/translator-default/compare/v5.1.10...v5.1.11) (2021-02-11)

**Note:** Version bump only for package @marko/translator-default

## [5.1.10](https://github.com/marko-js/marko/tree/master/packages/translator-default/compare/v5.1.9...v5.1.10) (2021-02-05)

### Bug Fixes

- add else-if to transparent tags ([#1657](https://github.com/marko-js/marko/tree/master/packages/translator-default/issues/1657)) ([7c14bdf](https://github.com/marko-js/marko/tree/master/packages/translator-default/commit/7c14bdf5536eb8df8831624a4996de8b6970d184))

## [5.1.9](https://github.com/marko-js/marko/tree/master/packages/translator-default/compare/v5.1.8...v5.1.9) (2021-02-03)

**Note:** Version bump only for package @marko/translator-default

## [5.1.8](https://github.com/marko-js/marko/tree/master/packages/translator-default/compare/v5.1.7...v5.1.8) (2021-02-02)

**Note:** Version bump only for package @marko/translator-default

## [5.1.7](https://github.com/marko-js/marko/tree/master/packages/translator-default/compare/v5.1.6...v5.1.7) (2021-02-01)

### Bug Fixes

- allow passing 'dom' output instead of 'vdom' ([9c11a9b](https://github.com/marko-js/marko/tree/master/packages/translator-default/commit/9c11a9be187c728b46caca9a37a9b383cc20ce1b))

## [5.1.6](https://github.com/marko-js/marko/tree/master/packages/translator-default/compare/v5.1.5...v5.1.6) (2021-01-29)

**Note:** Version bump only for package @marko/translator-default

## [5.1.5](https://github.com/marko-js/marko/tree/master/packages/translator-default/compare/v5.1.4...v5.1.5) (2021-01-28)

**Note:** Version bump only for package @marko/translator-default

## [5.1.4](https://github.com/marko-js/marko/tree/master/packages/translator-default/compare/v5.1.3...v5.1.4) (2021-01-27)

**Note:** Version bump only for package @marko/translator-default

## [5.1.3](https://github.com/marko-js/marko/tree/master/packages/translator-default/compare/v5.1.2...v5.1.3) (2021-01-27)

**Note:** Version bump only for package @marko/translator-default

## [5.1.2](https://github.com/marko-js/marko/tree/master/packages/translator-default/compare/v5.1.1...v5.1.2) (2021-01-26)

**Note:** Version bump only for package @marko/translator-default

## [5.1.1](https://github.com/marko-js/marko/tree/master/packages/translator-default/compare/v5.1.0...v5.1.1) (2021-01-26)

**Note:** Version bump only for package @marko/translator-default

# [5.1.0](https://github.com/marko-js/marko/tree/master/packages/translator-default/compare/v5.0.0-next.82...v5.1.0) (2021-01-26)

### Bug Fixes

- importing some Marko files properly includes meta ([d67bac5](https://github.com/marko-js/marko/tree/master/packages/translator-default/commit/d67bac58183f46679212bbd2773adc36566cbc92))

### Features

- no longer publish as 'next' dist-tag ([8113e25](https://github.com/marko-js/marko/tree/master/packages/translator-default/commit/8113e250d823000810d0fa13d76efc4cc69f4ad1))

# [5.0.0-next.82](https://github.com/marko-js/marko/tree/master/packages/translator-default/compare/v5.0.0-next.81...v5.0.0-next.82) (2021-01-21)

**Note:** Version bump only for package @marko/translator-default

# [5.0.0-next.81](https://github.com/marko-js/marko/tree/master/packages/translator-default/compare/v5.0.0-next.80...v5.0.0-next.81) (2021-01-20)

### Bug Fixes

- **translator-default:** browser.json auto discovery path ([965c407](https://github.com/marko-js/marko/tree/master/packages/translator-default/commit/965c40735f03b0c29397f77503a3bf2253ee0f91))

# [5.0.0-next.80](https://github.com/marko-js/marko/tree/master/packages/translator-default/compare/v5.0.0-next.79...v5.0.0-next.80) (2021-01-19)

### Bug Fixes

- src to dist translations in some cases ([60772b7](https://github.com/marko-js/marko/tree/master/packages/translator-default/commit/60772b7098b3f832ad620d43d965664167b5a035))

# [5.0.0-next.79](https://github.com/marko-js/marko/tree/master/packages/translator-default/compare/v5.0.0-next.78...v5.0.0-next.79) (2021-01-19)

### Bug Fixes

- targetProperty for dynamic attribute tags when multiple ([2d1238f](https://github.com/marko-js/marko/tree/master/packages/translator-default/commit/2d1238f78294056ec2cf7a1b26cd0e01e5b9a108))

# [5.0.0-next.78](https://github.com/marko-js/marko/tree/master/packages/translator-default/compare/v5.0.0-next.77...v5.0.0-next.78) (2021-01-19)

### Bug Fixes

- webpack's file system not converting buffer properly ([#1649](https://github.com/marko-js/marko/tree/master/packages/translator-default/issues/1649)) ([1cd24b6](https://github.com/marko-js/marko/tree/master/packages/translator-default/commit/1cd24b68c9dae62d53a681f48a0cf61e9b8e8aed))

# [5.0.0-next.77](https://github.com/marko-js/marko/tree/master/packages/translator-default/compare/v5.0.0-next.76...v5.0.0-next.77) (2021-01-19)

**Note:** Version bump only for package @marko/translator-default

# [5.0.0-next.76](https://github.com/marko-js/marko/tree/master/packages/translator-default/compare/v5.0.0-next.75...v5.0.0-next.76) (2021-01-15)

### Features

- improve analysis for stateful tag parameters ([#1648](https://github.com/marko-js/marko/tree/master/packages/translator-default/issues/1648)) ([8c34cb4](https://github.com/marko-js/marko/tree/master/packages/translator-default/commit/8c34cb4be6bd571f6013f50dc6808e3d9de10763))

# [5.0.0-next.75](https://github.com/marko-js/marko/tree/master/packages/translator-default/compare/v5.0.0-next.74...v5.0.0-next.75) (2021-01-14)

**Note:** Version bump only for package @marko/translator-default

# [5.0.0-next.74](https://github.com/marko-js/marko/tree/master/packages/translator-default/compare/v5.0.0-next.73...v5.0.0-next.74) (2021-01-14)

**Note:** Version bump only for package @marko/translator-default

# [5.0.0-next.73](https://github.com/marko-js/marko/tree/master/packages/translator-default/compare/v5.0.0-next.72...v5.0.0-next.73) (2021-01-14)

### Bug Fixes

- use same debug check for compiler and runtime ([#1647](https://github.com/marko-js/marko/tree/master/packages/translator-default/issues/1647)) ([0c8632f](https://github.com/marko-js/marko/tree/master/packages/translator-default/commit/0c8632fe92d06b27d0741fa2d5a2b599f0890693))

# [5.0.0-next.72](https://github.com/marko-js/marko/tree/master/packages/translator-default/compare/v5.0.0-next.71...v5.0.0-next.72) (2021-01-13)

**Note:** Version bump only for package @marko/translator-default

# [5.0.0-next.71](https://github.com/marko-js/marko/tree/master/packages/translator-default/compare/v5.0.0-next.70...v5.0.0-next.71) (2021-01-12)

### Features

- move tag param ast to MarkoTagBody ([02c1e29](https://github.com/marko-js/marko/tree/master/packages/translator-default/commit/02c1e29426b7995d869ab8a9fd1f8dd6dccaeca5))
- simplify ast defs ([0f00ec7](https://github.com/marko-js/marko/tree/master/packages/translator-default/commit/0f00ec7693ebfe3a74a870d2033b6a44c1d1ec2c))

# [5.0.0-next.70](https://github.com/marko-js/marko/tree/master/packages/translator-default/compare/v5.0.0-next.69...v5.0.0-next.70) (2020-12-16)

### Features

- add cached analyze stage ([bb6a050](https://github.com/marko-js/marko/tree/master/packages/translator-default/commit/bb6a050bbb82d5a4fcfc5e1ca6835d36a67809fa))

# [5.0.0-next.69](https://github.com/marko-js/marko/tree/master/packages/translator-default/compare/v5.0.0-next.68...v5.0.0-next.69) (2020-12-14)

**Note:** Version bump only for package @marko/translator-default

# [5.0.0-next.68](https://github.com/marko-js/marko/tree/master/packages/translator-default/compare/v5.0.0-next.67...v5.0.0-next.68) (2020-12-11)

### Features

- **babel-utils:** expose import and id utils ([#1636](https://github.com/marko-js/marko/tree/master/packages/translator-default/issues/1636)) ([644e4d8](https://github.com/marko-js/marko/tree/master/packages/translator-default/commit/644e4d8756c2260a1e2d28374a31a67552414179))

# [5.0.0-next.67](https://github.com/marko-js/marko/tree/master/packages/translator-default/compare/v5.0.0-next.66...v5.0.0-next.67) (2020-12-09)

**Note:** Version bump only for package @marko/translator-default

# [5.0.0-next.66](https://github.com/marko-js/marko/tree/master/packages/translator-default/compare/v5.0.0-next.65...v5.0.0-next.66) (2020-12-08)

### Bug Fixes

- renderbody with dynamic attrs ([6c33c0f](https://github.com/marko-js/marko/tree/master/packages/translator-default/commit/6c33c0fcf1f240e50ce7bccbb10ea1efb0daaed3))

# [5.0.0-next.65](https://github.com/marko-js/marko/tree/master/packages/translator-default/compare/v5.0.0-next.64...v5.0.0-next.65) (2020-12-02)

**Note:** Version bump only for package @marko/translator-default

# [5.0.0-next.64](https://github.com/marko-js/marko/tree/master/packages/translator-default/compare/v5.0.0-next.63...v5.0.0-next.64) (2020-12-02)

### Bug Fixes

- **babel-types:** support scope analysis for tag variables ([c527474](https://github.com/marko-js/marko/tree/master/packages/translator-default/commit/c5274740b5fde01b85b8b46381fadf2fc75245f2))

# [5.0.0-next.63](https://github.com/marko-js/marko/tree/master/packages/translator-default/compare/v5.0.0-next.62...v5.0.0-next.63) (2020-12-01)

**Note:** Version bump only for package @marko/translator-default

# [5.0.0-next.62](https://github.com/marko-js/marko/tree/master/packages/translator-default/compare/v5.0.0-next.61...v5.0.0-next.62) (2020-12-01)

**Note:** Version bump only for package @marko/translator-default

# [5.0.0-next.61](https://github.com/marko-js/marko/tree/master/packages/translator-default/compare/v5.0.0-next.60...v5.0.0-next.61) (2020-12-01)

**Note:** Version bump only for package @marko/translator-default

# [5.0.0-next.60](https://github.com/marko-js/marko/tree/master/packages/translator-default/compare/v5.0.0-next.59...v5.0.0-next.60) (2020-11-22)

### Bug Fixes

- typing for attr nodes ([b885ee2](https://github.com/marko-js/marko/tree/master/packages/translator-default/commit/b885ee2032a2a5a81db859432520663e123444c9))

# [5.0.0-next.59](https://github.com/marko-js/marko/tree/master/packages/translator-default/compare/v5.0.0-next.58...v5.0.0-next.59) (2020-11-21)

**Note:** Version bump only for package @marko/translator-default

# [5.0.0-next.58](https://github.com/marko-js/marko/tree/master/packages/translator-default/compare/v5.0.0-next.57...v5.0.0-next.58) (2020-11-20)

### Bug Fixes

- **translator-default:** avoid vdom hoisting for directive attrs ([abf5b8c](https://github.com/marko-js/marko/tree/master/packages/translator-default/commit/abf5b8ce1286072f728dacd78427cf6ca2c09bc4))

# [5.0.0-next.57](https://github.com/marko-js/marko/tree/master/packages/translator-default/compare/v5.0.0-next.56...v5.0.0-next.57) (2020-11-20)

### Bug Fixes

- **translator-default:** ensure accruate component id metadata ([c4b0360](https://github.com/marko-js/marko/tree/master/packages/translator-default/commit/c4b036058ea57f31e151e0dae965858839d1795c))

### Features

- add default attribute support ([#1631](https://github.com/marko-js/marko/tree/master/packages/translator-default/issues/1631)) ([46ceab3](https://github.com/marko-js/marko/tree/master/packages/translator-default/commit/46ceab34a5c1815933b8b2a9f3533716ae0fedcf))
- add parser support for tag variables ([#1630](https://github.com/marko-js/marko/tree/master/packages/translator-default/issues/1630)) ([43c4433](https://github.com/marko-js/marko/tree/master/packages/translator-default/commit/43c4433cb026f7eace199203e15d1050a53dc35d))

# [5.0.0-next.56](https://github.com/marko-js/marko/tree/master/packages/translator-default/compare/v5.0.0-next.55...v5.0.0-next.56) (2020-11-20)

**Note:** Version bump only for package @marko/translator-default

# [5.0.0-next.55](https://github.com/marko-js/marko/tree/master/packages/translator-default/compare/v5.0.0-next.54...v5.0.0-next.55) (2020-11-19)

**Note:** Version bump only for package @marko/translator-default

# [5.0.0-next.54](https://github.com/marko-js/marko/tree/master/packages/translator-default/compare/v5.0.0-next.53...v5.0.0-next.54) (2020-11-17)

**Note:** Version bump only for package @marko/translator-default

# [5.0.0-next.53](https://github.com/marko-js/marko/tree/master/packages/translator-default/compare/v5.0.0-next.52...v5.0.0-next.53) (2020-11-17)

**Note:** Version bump only for package @marko/translator-default

# [5.0.0-next.52](https://github.com/marko-js/marko/tree/master/packages/translator-default/compare/v5.0.0-next.51...v5.0.0-next.52) (2020-11-12)

**Note:** Version bump only for package @marko/translator-default

# [5.0.0-next.51](https://github.com/marko-js/marko/tree/master/packages/translator-default/compare/v5.0.0-next.50...v5.0.0-next.51) (2020-11-11)

### Bug Fixes

- refactor and optimize optimizers ([7e1d058](https://github.com/marko-js/marko/tree/master/packages/translator-default/commit/7e1d0588c54f4143ecd04ec8e04426ac4d37a655))

### Features

- cached compilations, nested tag analysis ([74d5f10](https://github.com/marko-js/marko/tree/master/packages/translator-default/commit/74d5f104b8f35178c399ab5c3514c33f8b63cdf0))

# [5.0.0-next.50](https://github.com/marko-js/marko/tree/master/packages/translator-default/compare/v5.0.0-next.49...v5.0.0-next.50) (2020-10-12)

### Bug Fixes

- dynamic tag html attr normalize ([bae4a3d](https://github.com/marko-js/marko/tree/master/packages/translator-default/commit/bae4a3d388412e387514ce11416f4e6cbddecd28))
- no longer use fragments for preserved native els ([22e9322](https://github.com/marko-js/marko/tree/master/packages/translator-default/commit/22e9322a7e72b50812ab223f70bf9e68aee2208d))
- **translator-default:** body only if being preserved incorrectly ([aa1ef05](https://github.com/marko-js/marko/tree/master/packages/translator-default/commit/aa1ef05f965df21879f1a6bcca566a2b9851a720))
- **translator-default:** owner component missing for text nodes ([50b4e97](https://github.com/marko-js/marko/tree/master/packages/translator-default/commit/50b4e9746b4fc5158d35ba78110199de4a4e7956))

# [5.0.0-next.49](https://github.com/marko-js/marko/tree/master/packages/translator-default/compare/v5.0.0-next.48...v5.0.0-next.49) (2020-09-28)

### Bug Fixes

- **marko:** output esm for module-code ([db4793d](https://github.com/marko-js/marko/tree/master/packages/translator-default/commit/db4793df11c08b7d8f8b3cf5591528f35fd643d9))

# [5.0.0-next.48](https://github.com/marko-js/marko/tree/master/packages/translator-default/compare/v5.0.0-next.47...v5.0.0-next.48) (2020-09-18)

### Bug Fixes

- **compiler:** improve hash template id performance and consistency ([d111748](https://github.com/marko-js/marko/tree/master/packages/translator-default/commit/d11174853f02b4edf25cb4b1b3cf0b687ca2bf4e))

# [5.0.0-next.47](https://github.com/marko-js/marko/tree/master/packages/translator-default/compare/v5.0.0-next.46...v5.0.0-next.47) (2020-09-18)

**Note:** Version bump only for package @marko/translator-default

# [5.0.0-next.46](https://github.com/marko-js/marko/tree/master/packages/translator-default/compare/v5.0.0-next.45...v5.0.0-next.46) (2020-09-17)

### Bug Fixes

- only include template path with meta option enabled ([e1b39e1](https://github.com/marko-js/marko/tree/master/packages/translator-default/commit/e1b39e18c430b86e2406187958d5503d83a7d79a))

# [5.0.0-next.45](https://github.com/marko-js/marko/tree/master/packages/translator-default/compare/v5.0.0-next.44...v5.0.0-next.45) (2020-08-26)

**Note:** Version bump only for package @marko/translator-default

# [5.0.0-next.44](https://github.com/marko-js/marko/tree/master/packages/translator-default/compare/v5.0.0-next.43...v5.0.0-next.44) (2020-08-26)

**Note:** Version bump only for package @marko/translator-default

# [5.0.0-next.43](https://github.com/marko-js/marko/tree/master/packages/translator-default/compare/v5.0.0-next.42...v5.0.0-next.43) (2020-08-20)

**Note:** Version bump only for package @marko/translator-default

# [5.0.0-next.42](https://github.com/marko-js/marko/tree/master/packages/translator-default/compare/v5.0.0-next.41...v5.0.0-next.42) (2020-08-18)

### Bug Fixes

- escape filename regexps for multi file components ([eb0cfb7](https://github.com/marko-js/marko/tree/master/packages/translator-default/commit/eb0cfb71346ce3bec329cc562122f67a0ab86dd8))
- pass through xlink:href ([2e7e3dd](https://github.com/marko-js/marko/tree/master/packages/translator-default/commit/2e7e3dd98671869348403c8098bf5b2c016a0afa))

# [5.0.0-next.41](https://github.com/marko-js/marko/tree/master/packages/translator-default/compare/v5.0.0-next.40...v5.0.0-next.41) (2020-08-18)

**Note:** Version bump only for package @marko/translator-default

# [5.0.0-next.40](https://github.com/marko-js/marko/tree/master/packages/translator-default/compare/v5.0.0-next.39...v5.0.0-next.40) (2020-08-12)

### Bug Fixes

- component type use relative path in dev mode ([7b7a4f9](https://github.com/marko-js/marko/tree/master/packages/translator-default/commit/7b7a4f9637648c7ded113fd132ce3ce5f2785e0a))
- **translator-default:** component meta not set on tag params ([da2eb18](https://github.com/marko-js/marko/tree/master/packages/translator-default/commit/da2eb187072b1e766509da1d4a2eab2a92798111))

# [5.0.0-next.39](https://github.com/marko-js/marko/tree/master/packages/translator-default/compare/v5.0.0-next.38...v5.0.0-next.39) (2020-08-10)

### Bug Fixes

- invalid missing closing svg tags ([47a9834](https://github.com/marko-js/marko/tree/master/packages/translator-default/commit/47a98341a2bdb4ae136495c5e3976dfe7c24a77c))

# [5.0.0-next.38](https://github.com/marko-js/marko/tree/master/packages/translator-default/compare/v5.0.0-next.37...v5.0.0-next.38) (2020-08-10)

**Note:** Version bump only for package @marko/translator-default

# [5.0.0-next.37](https://github.com/marko-js/marko/tree/master/packages/translator-default/compare/v5.0.0-next.36...v5.0.0-next.37) (2020-08-05)

### Features

- only enable optimization stage for production mode ([ee16e96](https://github.com/marko-js/marko/tree/master/packages/translator-default/commit/ee16e96580b67e0cacb87a78001be940dc0324df))

# [5.0.0-next.36](https://github.com/marko-js/marko/tree/master/packages/translator-default/compare/v5.0.0-next.35...v5.0.0-next.36) (2020-08-05)

### Features

- expose watch file meta data ([#1591](https://github.com/marko-js/marko/tree/master/packages/translator-default/issues/1591)) ([f14e46a](https://github.com/marko-js/marko/tree/master/packages/translator-default/commit/f14e46a1f3ddd01f659a0f86678773fb12a7f1a5))

# [5.0.0-next.35](https://github.com/marko-js/marko/tree/master/packages/translator-default/compare/v5.0.0-next.34...v5.0.0-next.35) (2020-08-04)

### Features

- add custom fileSystem config option ([#1590](https://github.com/marko-js/marko/tree/master/packages/translator-default/issues/1590)) ([212dda9](https://github.com/marko-js/marko/tree/master/packages/translator-default/commit/212dda9c004af1958feacf5c9be9ac381feb2708))

# [5.0.0-next.34](https://github.com/marko-js/marko/tree/master/packages/translator-default/compare/v5.0.0-next.33...v5.0.0-next.34) (2020-08-04)

### Bug Fixes

- diffing dynamic attributes with mismatched keys ([#1587](https://github.com/marko-js/marko/tree/master/packages/translator-default/issues/1587)) ([4b8cce4](https://github.com/marko-js/marko/tree/master/packages/translator-default/commit/4b8cce41c7f3a020142e2d3e3d1e194ab64ffe65))
- issue with hydrating no-update-if content ([#1581](https://github.com/marko-js/marko/tree/master/packages/translator-default/issues/1581)) ([457f3d4](https://github.com/marko-js/marko/tree/master/packages/translator-default/commit/457f3d4acb480e5382fdfa30d0c1d4ea0062c4cc))

# [5.0.0-next.33](https://github.com/marko-js/marko/tree/master/packages/translator-default/compare/v5.0.0-next.32...v5.0.0-next.33) (2020-08-03)

**Note:** Version bump only for package @marko/translator-default

# [5.0.0-next.32](https://github.com/marko-js/marko/tree/master/packages/translator-default/compare/v5.0.0-next.31...v5.0.0-next.32) (2020-07-31)

**Note:** Version bump only for package @marko/translator-default

# [5.0.0-next.31](https://github.com/marko-js/marko/tree/master/packages/translator-default/compare/v5.0.0-next.30...v5.0.0-next.31) (2020-07-31)

### Features

- improve index position to line, column perf ([680dad6](https://github.com/marko-js/marko/tree/master/packages/translator-default/commit/680dad65dafdb4300d3f86ea2be6bb322ecd7de9))

# [5.0.0-next.30](https://github.com/marko-js/marko/tree/master/packages/translator-default/compare/v5.0.0-next.29...v5.0.0-next.30) (2020-07-29)

**Note:** Version bump only for package @marko/translator-default

# [5.0.0-next.29](https://github.com/marko-js/marko/tree/master/packages/translator-default/compare/v5.0.0-next.28...v5.0.0-next.29) (2020-07-29)

**Note:** Version bump only for package @marko/translator-default

# [5.0.0-next.28](https://github.com/marko-js/marko/tree/master/packages/translator-default/compare/v5.0.0-next.27...v5.0.0-next.28) (2020-07-27)

### Bug Fixes

- **translator-default:** improve source maps for non concise root tags ([571b4fa](https://github.com/marko-js/marko/tree/master/packages/translator-default/commit/571b4faf0925db4290e15b8b9b4d284c0ee49f0b))
- better errors, track deps and cleanup for import shorthand ([00464f2](https://github.com/marko-js/marko/tree/master/packages/translator-default/commit/00464f27b2fef2a454745b424e3cce18c76ae33f))

### Features

- add new syntax for dynamic component import ([e9b4cd6](https://github.com/marko-js/marko/tree/master/packages/translator-default/commit/e9b4cd61acff70d7d0d0d49cab7034e000493346))

# [5.0.0-next.27](https://github.com/marko-js/marko/tree/master/packages/translator-default/compare/v5.0.0-next.26...v5.0.0-next.27) (2020-07-24)

**Note:** Version bump only for package @marko/translator-default

# [5.0.0-next.26](https://github.com/marko-js/marko/tree/master/packages/translator-default/compare/v5.0.0-next.25...v5.0.0-next.26) (2020-07-24)

### Bug Fixes

- load correct taglib utils based on env ([#1585](https://github.com/marko-js/marko/tree/master/packages/translator-default/issues/1585)) ([af2bc2a](https://github.com/marko-js/marko/tree/master/packages/translator-default/commit/af2bc2a11c45cab380e9698af2d1329b4d4eb8d6))

# [5.0.0-next.25](https://github.com/marko-js/marko/tree/master/packages/translator-default/compare/v5.0.0-next.24...v5.0.0-next.25) (2020-07-23)

**Note:** Version bump only for package @marko/translator-default

# [5.0.0-next.24](https://github.com/marko-js/marko/tree/master/packages/translator-default/compare/v5.0.0-next.23...v5.0.0-next.24) (2020-07-22)

**Note:** Version bump only for package @marko/translator-default

# [5.0.0-next.23](https://github.com/marko-js/marko/tree/master/packages/translator-default/compare/v5.0.0-next.22...v5.0.0-next.23) (2020-07-14)

### Features

- expose inline style block position for better sourcemaps ([83e6dca](https://github.com/marko-js/marko/tree/master/packages/translator-default/commit/83e6dcaf5ca7d30e64493ddc95b22cb05a2ecc54))

# [5.0.0-next.22](https://github.com/marko-js/marko/tree/master/packages/translator-default/compare/v5.0.0-next.21...v5.0.0-next.22) (2020-07-10)

### Bug Fixes

- **translator-default:** mixing repeated and non-repeated attributes ([f93534f](https://github.com/marko-js/marko/tree/master/packages/translator-default/commit/f93534faf1da8254cf1a1cfe3284da35468be7d5))

# [5.0.0-next.21](https://github.com/marko-js/marko/tree/master/packages/translator-default/compare/v5.0.0-next.20...v5.0.0-next.21) (2020-07-07)

### Features

- switch to storing marko meta on babels metadata ([ee6ad38](https://github.com/marko-js/marko/tree/master/packages/translator-default/commit/ee6ad38d9f31fe1d1314350ddd011a39c6c2ab9a))

# [5.0.0-next.20](https://github.com/marko-js/marko/tree/master/packages/translator-default/compare/v5.0.0-next.19...v5.0.0-next.20) (2020-07-07)

**Note:** Version bump only for package @marko/translator-default

# [5.0.0-next.19](https://github.com/marko-js/marko/tree/master/packages/translator-default/compare/v5.0.0-next.18...v5.0.0-next.19) (2020-07-06)

**Note:** Version bump only for package @marko/translator-default

# [5.0.0-next.18](https://github.com/marko-js/marko/tree/master/packages/translator-default/compare/v5.0.0-next.17...v5.0.0-next.18) (2020-05-27)

**Note:** Version bump only for package @marko/translator-default

# [5.0.0-next.17](https://github.com/marko-js/marko/tree/master/packages/translator-default/compare/v5.0.0-next.16...v5.0.0-next.17) (2020-05-27)

**Note:** Version bump only for package @marko/translator-default

# [5.0.0-next.16](https://github.com/marko-js/marko/tree/master/packages/translator-default/compare/v5.0.0-next.15...v5.0.0-next.16) (2020-05-27)

### Features

- website compatibility fixes ([4390fd1](https://github.com/marko-js/marko/tree/master/packages/translator-default/commit/4390fd1654d7b2753d2af899917ced7b3a395bc2))

# [5.0.0-next.14](https://github.com/marko-js/marko/tree/master/packages/translator-default/compare/v5.0.0-next.13...v5.0.0-next.14) (2020-05-26)

### Bug Fixes

- improve browser support for website ([#1574](https://github.com/marko-js/marko/tree/master/packages/translator-default/issues/1574)) ([9df798a](https://github.com/marko-js/marko/tree/master/packages/translator-default/commit/9df798af5e71b71881995b6e06a9fb1b30b6fac2))

# [5.0.0-next.13](https://github.com/marko-js/marko/tree/master/packages/translator-default/compare/v5.0.0-next.12...v5.0.0-next.13) (2020-05-20)

### Bug Fixes

- **translator-default:** optional params on for tag ([b550417](https://github.com/marko-js/marko/tree/master/packages/translator-default/commit/b55041728d9f4e45196c1d7e07abd770e4af68be))

# [5.0.0-next.12](https://github.com/marko-js/marko/tree/master/packages/translator-default/compare/v5.0.0-next.11...v5.0.0-next.12) (2020-05-19)

### Bug Fixes

- data-marko attributes under 'no-update' with <await> ([#1564](https://github.com/marko-js/marko/tree/master/packages/translator-default/issues/1564)) ([0a227d0](https://github.com/marko-js/marko/tree/master/packages/translator-default/commit/0a227d0c7c27821df551c1367e160793dc9e234e))

# [5.0.0-next.11](https://github.com/marko-js/marko/tree/master/packages/translator-default/compare/v5.0.0-next.10...v5.0.0-next.11) (2020-04-27)

**Note:** Version bump only for package @marko/translator-default

# [5.0.0-next.10](https://github.com/marko-js/marko/tree/master/packages/translator-default/compare/v5.0.0-next.9...v5.0.0-next.10) (2020-04-23)

### Performance Improvements

- minify runtime comments, remove unnecessary attr quotes ([#1557](https://github.com/marko-js/marko/tree/master/packages/translator-default/issues/1557)) ([2882626](https://github.com/marko-js/marko/tree/master/packages/translator-default/commit/28826265f88c9f038886945471584f1b4b3b9be6))

# [5.0.0-next.9](https://github.com/marko-js/marko/tree/master/packages/translator-default/compare/v5.0.0-next.8...v5.0.0-next.9) (2020-04-16)

### Bug Fixes

- regression with nullish values in partial string attribute values ([#1537](https://github.com/marko-js/marko/tree/master/packages/translator-default/issues/1537)) ([144c352](https://github.com/marko-js/marko/tree/master/packages/translator-default/commit/144c352863b75b75d513c8f080b8b19881e5dbde))

### Features

- improve serialization across multiple writes ([#1542](https://github.com/marko-js/marko/tree/master/packages/translator-default/issues/1542)) ([45e42df](https://github.com/marko-js/marko/tree/master/packages/translator-default/commit/45e42dfd84a86dd3377a4d2968191b7dde8388d2))

### Performance Improvements

- optimize dynamic tag when types are statically known ([#1550](https://github.com/marko-js/marko/tree/master/packages/translator-default/issues/1550)) ([4719405](https://github.com/marko-js/marko/tree/master/packages/translator-default/commit/47194054de15eeb19247a8f50926ac81c6d03671))

# [5.0.0-next.8](https://github.com/marko-js/marko/tree/master/packages/translator-default/compare/v5.0.0-next.7...v5.0.0-next.8) (2020-03-17)

### Bug Fixes

- **translator-default:** include full filename in meta.component ([bc0bc69](https://github.com/marko-js/marko/tree/master/packages/translator-default/commit/bc0bc69b3179b7ffbbe44046cb84933af3db095c))

# [5.0.0-next.7](https://github.com/marko-js/marko/tree/master/packages/translator-default/compare/v5.0.0-next.6...v5.0.0-next.7) (2020-03-17)

### Bug Fixes

- **translator-default:** set meta component for inline component ([bd21c79](https://github.com/marko-js/marko/tree/master/packages/translator-default/commit/bd21c79449f4e082ad17d297ba3c4d1e87e3421b))

# [5.0.0-next.6](https://github.com/marko-js/marko/tree/master/packages/translator-default/compare/v5.0.0-next.5...v5.0.0-next.6) (2020-03-16)

### Bug Fixes

- make Marko a peerDependency ([2eac257](https://github.com/marko-js/marko/tree/master/packages/translator-default/commit/2eac2572bec0986b2ac3903b1d43bef11d0bd437))

### Features

- all vnodes have owner components ([#1517](https://github.com/marko-js/marko/tree/master/packages/translator-default/issues/1517)) ([585b2f1](https://github.com/marko-js/marko/tree/master/packages/translator-default/commit/585b2f1de7797f909f1204f7c52c4b6891f8e156))

# [5.0.0-next.5](https://github.com/marko-js/marko/tree/master/packages/translator-default/compare/v5.0.0-next.4...v5.0.0-next.5) (2020-02-26)

**Note:** Version bump only for package @marko/translator-default

# [5.0.0-next.4](https://github.com/marko-js/marko/tree/master/packages/translator-default/compare/v5.0.0-next.3...v5.0.0-next.4) (2020-02-25)

### Bug Fixes

- improve node locations in sourcemaps ([#1512](https://github.com/marko-js/marko/tree/master/packages/translator-default/issues/1512)) ([f4a39e9](https://github.com/marko-js/marko/tree/master/packages/translator-default/commit/f4a39e91ca90aa734882ba234119ade3b0436e73))

# [5.0.0-next.3](https://github.com/marko-js/marko/tree/master/packages/translator-default/compare/v5.0.0-next.2...v5.0.0-next.3) (2020-02-25)

### Bug Fixes

- only use minprops on runtime code ([#1511](https://github.com/marko-js/marko/tree/master/packages/translator-default/issues/1511)) ([eb7441f](https://github.com/marko-js/marko/tree/master/packages/translator-default/commit/eb7441f78779272577d8a19433644c0440ac6b80))

# [5.0.0-next.2](https://github.com/marko-js/marko/tree/master/packages/translator-default/compare/v5.0.0-next.1...v5.0.0-next.2) (2020-02-25)

**Note:** Version bump only for package @marko/translator-default

# [5.0.0-next.1](https://github.com/marko-js/marko/tree/master/packages/translator-default/compare/v4.18.48...v5.0.0-next.1) (2020-02-25)

### Features

- import compiler from marko-js/x ([02670c8](https://github.com/marko-js/marko/tree/master/packages/translator-default/commit/02670c86931396c52a5a03a7ae4fcef873297f60))

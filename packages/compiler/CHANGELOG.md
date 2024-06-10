# Change Log

## 5.37.1

### Patch Changes

- [#2244](https://github.com/marko-js/marko/pull/2244) [`934dc13`](https://github.com/marko-js/marko/commit/934dc13972b14b6cc9511ae19db70f5b74a366b5) Thanks [@LuLaValva](https://github.com/LuLaValva)! - Allow mixing comments with attr tags

## 5.37.0

### Minor Changes

- [#2238](https://github.com/marko-js/marko/pull/2238) [`a741f36`](https://github.com/marko-js/marko/commit/a741f36e60583a2403a912627765c3ec2aa824e5) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Add new optimizedRegistryIds compiler option

### Patch Changes

- Updated dependencies [[`a741f36`](https://github.com/marko-js/marko/commit/a741f36e60583a2403a912627765c3ec2aa824e5)]:
  - @marko/babel-utils@6.5.0

## 5.36.2

### Patch Changes

- [#2232](https://github.com/marko-js/marko/pull/2232) [`a67e1c4`](https://github.com/marko-js/marko/commit/a67e1c42b04ede5d9b9ef3cb2f8e21bedd2f004f) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Fix issue where the `ignoreUnrecognizedTags` compiler option was incorrectly escaping attribute tags for recognized tags that did not explicitly define their attribute tags in a marko.json

## 5.36.1

### Patch Changes

- [#2217](https://github.com/marko-js/marko/pull/2217) [`4fc4614`](https://github.com/marko-js/marko/commit/4fc46149ae046dd0fac0e7cc7e904b188f616f7f) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Fix issue where element keys could be different because of hoisted const elements not always being keyed. This could cause a hydration issue since the server and client compilations would not agree on the keys.

## 5.36.0

### Minor Changes

- [#2214](https://github.com/marko-js/marko/pull/2214) [`2d0a566`](https://github.com/marko-js/marko/commit/2d0a566a569e0d8caab2fd9abc960e6810e29b56) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Using event handlers now causes a template to become an implicit component or split component (depending on if a string event handler is used).

## 5.35.14

### Patch Changes

- [#2212](https://github.com/marko-js/marko/pull/2212) [`a1a91a4`](https://github.com/marko-js/marko/commit/a1a91a474853a4b6dc31217d374ee0e7e1179cec) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Fix issues related to hydrating sections under a native tag with the `no-update` directive.

## 5.35.13

### Patch Changes

- [#2210](https://github.com/marko-js/marko/pull/2210) [`7d1bbdb`](https://github.com/marko-js/marko/commit/7d1bbdb9af63164448697ceb20490ee0776bc70f) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - I completely messed up the release of https://github.com/marko-js/marko/pull/2205, this fixes that.

## 5.35.12

### Patch Changes

- [`c8fe951`](https://github.com/marko-js/marko/commit/c8fe951813bf6c7d11e581faf9e43522ae76ae98) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Bump compiler and translator to pull in Marko runtime changes.

## 5.35.11

### Patch Changes

- [#2190](https://github.com/marko-js/marko/pull/2190) [`638ca07`](https://github.com/marko-js/marko/commit/638ca07db382345c26f90247115eef13394e9905) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Update dependencies

- Updated dependencies [[`638ca07`](https://github.com/marko-js/marko/commit/638ca07db382345c26f90247115eef13394e9905)]:
  - @marko/babel-utils@6.4.3

## 5.35.10

### Patch Changes

- [#2187](https://github.com/marko-js/marko/pull/2187) [`fe344b0`](https://github.com/marko-js/marko/commit/fe344b00041677f40ce49d03c0fb283322a1c898) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Fix some tags/class interop issues.

## 5.35.9

### Patch Changes

- [#2182](https://github.com/marko-js/marko/pull/2182) [`1fa3b05`](https://github.com/marko-js/marko/commit/1fa3b056006d5d0e3ac221b5b4a18b78de5add21) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Support tracking the "input" using babels scope analysis.

## 5.35.8

### Patch Changes

- [#2180](https://github.com/marko-js/marko/pull/2180) [`a8bfb50`](https://github.com/marko-js/marko/commit/a8bfb50d7617d338c8e6b11c3f18cbb4829a5cba) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Fix issue where vdom optimizer was including elements with user key attributes.

## 5.35.7

### Patch Changes

- [#2173](https://github.com/marko-js/marko/pull/2173) [`614f432`](https://github.com/marko-js/marko/commit/614f432bfeab93eb35c23d6e378e914b27540f7f) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Fix regression where hydrate dependencies had the incorrect resolved path if they were in node_modules.

## 5.35.6

### Patch Changes

- [`409ef4e`](https://github.com/marko-js/marko/commit/409ef4e76d680b6e4202658fdf9567c663898d8b) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Fix regression where hydrate entry files had incorrect relative paths.

## 5.35.5

### Patch Changes

- [#2164](https://github.com/marko-js/marko/pull/2164) [`08823b9`](https://github.com/marko-js/marko/commit/08823b916b0aca172edeaba86b632a4cf5462a8a) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Fix issue with interop translator not outputting correct hydrate entry code.

- Updated dependencies [[`08823b9`](https://github.com/marko-js/marko/commit/08823b916b0aca172edeaba86b632a4cf5462a8a)]:
  - @marko/babel-utils@6.4.2

## 5.35.4

### Patch Changes

- [#2150](https://github.com/marko-js/marko/pull/2150) [`7ef2b89`](https://github.com/marko-js/marko/commit/7ef2b8956982455953f3c1180b2f9094ca489e52) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Expose all files from compiler exports.

## 5.35.3

### Patch Changes

- [#2148](https://github.com/marko-js/marko/pull/2148) [`b095755`](https://github.com/marko-js/marko/commit/b09575529493039ade02d9c35bcf21d5d4e6ef1d) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Fix issue with interop translator loading init-components tag.

## 5.35.2

### Patch Changes

- [#2140](https://github.com/marko-js/marko/pull/2140) [`4a1db86`](https://github.com/marko-js/marko/commit/4a1db8683d6c67fcff1bdbdaa76ab907c8b09170) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Some packages rely on a `@marko/compiler/package` entry point existing, adds back that export.

## 5.35.1

### Patch Changes

- [#2138](https://github.com/marko-js/marko/pull/2138) [`105c26b`](https://github.com/marko-js/marko/commit/105c26bd4f7f37bd6073e4795b01b83d31ecda06) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Fix issue with package json src/dist override script.

- Updated dependencies [[`105c26b`](https://github.com/marko-js/marko/commit/105c26bd4f7f37bd6073e4795b01b83d31ecda06)]:
  - @marko/babel-utils@6.4.1

## 5.35.0

### Minor Changes

- [#2004](https://github.com/marko-js/marko/pull/2004) [`2704819`](https://github.com/marko-js/marko/commit/27048199d6a0ee48ed8118e9f7017a94c7dc4f3d) Thanks [@mlrawlings](https://github.com/mlrawlings)! - Release alpha of tags api translator/runtime.

- [#2004](https://github.com/marko-js/marko/pull/2004) [`2704819`](https://github.com/marko-js/marko/commit/27048199d6a0ee48ed8118e9f7017a94c7dc4f3d) Thanks [@mlrawlings](https://github.com/mlrawlings)! - Add `mount` api for client rendered components and expose `Symbol.asyncIterator` for server rendered components.

### Patch Changes

- Updated dependencies [[`2704819`](https://github.com/marko-js/marko/commit/27048199d6a0ee48ed8118e9f7017a94c7dc4f3d), [`2704819`](https://github.com/marko-js/marko/commit/27048199d6a0ee48ed8118e9f7017a94c7dc4f3d)]:
  - @marko/babel-utils@6.4.0

## 5.34.7

### Patch Changes

- [#2115](https://github.com/marko-js/marko/pull/2115) [`a55fb06`](https://github.com/marko-js/marko/commit/a55fb06ec638eb830eb72c71cb766fc05b6ea8cb) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Improve nested attribute tag handling with scriptlets.

## 5.34.6

### Patch Changes

- [#2085](https://github.com/marko-js/marko/pull/2085) [`d82b21e`](https://github.com/marko-js/marko/commit/d82b21e8f505c5006d3781cf9056743dd9972fe1) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Improve compile error output.

## 5.34.5

### Patch Changes

- [#2079](https://github.com/marko-js/marko/pull/2079) [`2976dfa`](https://github.com/marko-js/marko/commit/2976dfac56c592dfd80ea79c6ea0e1389346f44c) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Fix issue where additional exports were being removed when stripping typescript types.

## 5.34.4

### Patch Changes

- [#2076](https://github.com/marko-js/marko/pull/2076) [`69b3ff5`](https://github.com/marko-js/marko/commit/69b3ff57c829418946e05c13b644a5560f589086) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Upgrade all package deps to latest

- Updated dependencies [[`69b3ff5`](https://github.com/marko-js/marko/commit/69b3ff57c829418946e05c13b644a5560f589086)]:
  - @marko/babel-utils@6.3.5

## 5.34.3

### Patch Changes

- [#2074](https://github.com/marko-js/marko/pull/2074) [`bf23c566fac02f4e2991be357a95483663493b3f`](https://github.com/marko-js/marko/commit/bf23c566fac02f4e2991be357a95483663493b3f) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Upgrade package lock and built types.

## 5.34.2

### Patch Changes

- [#2069](https://github.com/marko-js/marko/pull/2069) [`977d69078`](https://github.com/marko-js/marko/commit/977d690784f1d97acb3494bb822fa852c1380685) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Fix issue with printing variable declarations with multiple variables.

## 5.34.1

### Patch Changes

- [#2064](https://github.com/marko-js/marko/pull/2064) [`5e294103f`](https://github.com/marko-js/marko/commit/5e294103f78642b8a44887a1569ffd0eabcf6821) Thanks [@LuLaValva](https://github.com/LuLaValva)! - fix sourcemaps

## 5.34.0

### Minor Changes

- [#2062](https://github.com/marko-js/marko/pull/2062) [`436ace040`](https://github.com/marko-js/marko/commit/436ace040b73d11908911d60c10845b6e99e8eca) Thanks [@LuLaValva](https://github.com/LuLaValva)! - Add "exports" to marko.json

## 5.33.8

### Patch Changes

- [#2060](https://github.com/marko-js/marko/pull/2060) [`648a94928`](https://github.com/marko-js/marko/commit/648a94928f662b04634a61395d5d48a956a8ff36) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Expose meta data about which child Marko templates were analyzed for a given compilation.

- [#2059](https://github.com/marko-js/marko/pull/2059) [`aed88284b`](https://github.com/marko-js/marko/commit/aed88284b8b3c68965f70b6bdf9412c7100c5df5) Thanks [@LuLaValva](https://github.com/LuLaValva)! - fix AST types

- Updated dependencies [[`648a94928`](https://github.com/marko-js/marko/commit/648a94928f662b04634a61395d5d48a956a8ff36)]:
  - @marko/babel-utils@6.3.4

## 5.33.7

### Patch Changes

- [#2056](https://github.com/marko-js/marko/pull/2056) [`84f443d60`](https://github.com/marko-js/marko/commit/84f443d60539cc1b3382c6b16da4061070f97aca) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Fix issue when the Marko hot-reload runtime is loaded in native esm

## 5.33.6

### Patch Changes

- [#2054](https://github.com/marko-js/marko/pull/2054) [`1c5eccadf`](https://github.com/marko-js/marko/commit/1c5eccadf8d968552dbe8756905009107d783718) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Fix regression with @marko/babel-utils not exposing new parse helpers.

- Updated dependencies [[`1c5eccadf`](https://github.com/marko-js/marko/commit/1c5eccadf8d968552dbe8756905009107d783718)]:
  - @marko/babel-utils@6.3.3

## 5.33.5

### Patch Changes

- [#2051](https://github.com/marko-js/marko/pull/2051) [`5354d4411`](https://github.com/marko-js/marko/commit/5354d44112c56fcbbd7f44dd3bf91be1e5a7747c) Thanks [@LuLaValva](https://github.com/LuLaValva)! - add ts to ast

- Updated dependencies [[`5354d4411`](https://github.com/marko-js/marko/commit/5354d44112c56fcbbd7f44dd3bf91be1e5a7747c)]:
  - @marko/babel-utils@6.3.2

## 5.33.4

### Patch Changes

- [#2049](https://github.com/marko-js/marko/pull/2049) [`1554b1e1e`](https://github.com/marko-js/marko/commit/1554b1e1e53a75980af0b238cc27bed5ddfa215a) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Allow `template.marko` to act as `index.marko` for backword compat with v4/v3.

## 5.33.3

### Patch Changes

- [#2042](https://github.com/marko-js/marko/pull/2042) [`447104632`](https://github.com/marko-js/marko/commit/44710463258999ad037febef10264e32f3291157) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - When compiling async, prefer using the async babel api for loading babel config files.

## 5.33.2

### Patch Changes

- [#2038](https://github.com/marko-js/marko/pull/2038) [`71a227a5f`](https://github.com/marko-js/marko/commit/71a227a5ff8b16c0bb983e082f28280518f712ce) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Fix issue where using the longhand nested attribute tag syntax in a marko.json with a `target-property` defined was not registering the alias as a known attribute, leading to compile errors.

## 5.33.1

### Patch Changes

- [#2020](https://github.com/marko-js/marko/pull/2020) [`6a4e947b5`](https://github.com/marko-js/marko/commit/6a4e947b5ac9944e61d7871d314a6325a0522d1d) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Ensure .marko files are resolved for legacy renderer taglib configs.

## 5.33.0

### Minor Changes

- [#2012](https://github.com/marko-js/marko/pull/2012) [`6ba268c84`](https://github.com/marko-js/marko/commit/6ba268c841631b3ed36964c8f532e543885ad4f5) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Support registering a taglib in the compiler by just passing in a module id.

## 5.32.0

### Minor Changes

- [#2006](https://github.com/marko-js/marko/pull/2006) [`b2e70bc45`](https://github.com/marko-js/marko/commit/b2e70bc45006a8cccfa61ac99bbca40a71d05fd1) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Add compute node helper to replace babels `evaluate` helper. This helper is less aggressive and doesn't suffer from the false positives that popped up with babels version.

### Patch Changes

- Updated dependencies [[`b2e70bc45`](https://github.com/marko-js/marko/commit/b2e70bc45006a8cccfa61ac99bbca40a71d05fd1)]:
  - @marko/babel-utils@6.3.0

## 5.31.2

### Patch Changes

- [#2001](https://github.com/marko-js/marko/pull/2001) [`037a6ce67`](https://github.com/marko-js/marko/commit/037a6ce67088d63dcdc67a8b5bd02c10cf38b64e) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Improve some typings for the compiler apis.

- Updated dependencies [[`037a6ce67`](https://github.com/marko-js/marko/commit/037a6ce67088d63dcdc67a8b5bd02c10cf38b64e)]:
  - @marko/babel-utils@6.2.1

## 5.31.1

### Patch Changes

- [#1997](https://github.com/marko-js/marko/pull/1997) [`2afa3f6e6`](https://github.com/marko-js/marko/commit/2afa3f6e61ca262debde88bc11400a6ba97a2f19) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Ensure source maps are loaded in dev mode when using the @marko/register hook.

## 5.31.0

### Minor Changes

- [#1996](https://github.com/marko-js/marko/pull/1996) [`d93037843`](https://github.com/marko-js/marko/commit/d930378434279451b0113ae6a268304063b037f4) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Move <macro> tag validation to the translate phase and expose new utilities for working with macros in @marko/babel-utils. This allows for migration/transformer/etc compiler hooks to better work with <macro>'s.

### Patch Changes

- Updated dependencies [[`d93037843`](https://github.com/marko-js/marko/commit/d930378434279451b0113ae6a268304063b037f4)]:
  - @marko/babel-utils@6.2.0

## 5.30.3

### Patch Changes

- [#1992](https://github.com/marko-js/marko/pull/1992) [`1bc993012`](https://github.com/marko-js/marko/commit/1bc993012375315a6cbda3eed75291abf821de6b) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Fix regression which would happen if tools tried to "delete" the `loc` property on error instances returned from Marko. This property is now configurable and can be deleted again.

## 5.30.2

### Patch Changes

- [#1990](https://github.com/marko-js/marko/pull/1990) [`a54a23794`](https://github.com/marko-js/marko/commit/a54a2379487fd20e6598d5fdfc7c7dbe0f644e8b) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Change the stack frame for error messages generated by the compiler to work better with how node prints error messages.

## 5.30.1

### Patch Changes

- [#1987](https://github.com/marko-js/marko/pull/1987) [`8bf5cb1f0`](https://github.com/marko-js/marko/commit/8bf5cb1f097769c835a452ff4bbea67a6c741810) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - When duplicate taglib entries are found and merged, nullish values are now ignored. This means if you specify a property in a taglib it will not be unset by another (merged) taglib.

- [#1986](https://github.com/marko-js/marko/pull/1986) [`1b29b859f`](https://github.com/marko-js/marko/commit/1b29b859fb0876d9a8d0d7bba44d08f77f1706bb) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Fix issue where `module-code` entries were not properly checking the expected module output (causing them to always output esm). This was previously fine due to the cjs conversion plugin running for these, however a recent change caused that plugin to no longer run for these files since (which should have been unnecessary, except for that they had the incorrect check).

## 5.30.0

### Minor Changes

- [#1984](https://github.com/marko-js/marko/pull/1984) [`c6e2d0655`](https://github.com/marko-js/marko/commit/c6e2d06554166daa8eefe34121323413cf2d9cb1) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Allow migrator as a tag entry file.

### Patch Changes

- Updated dependencies [[`c6e2d0655`](https://github.com/marko-js/marko/commit/c6e2d06554166daa8eefe34121323413cf2d9cb1)]:
  - @marko/babel-utils@6.1.0

## 5.29.0

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

## 5.28.5

### Patch Changes

- [#1978](https://github.com/marko-js/marko/pull/1978) [`931a5d24b`](https://github.com/marko-js/marko/commit/931a5d24bbf77d7b29922f34d66d8ca7c42cea07) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Avoids loading babel config when compiler output is set to source or migrate.

## 5.28.4

### Patch Changes

- [#1976](https://github.com/marko-js/marko/pull/1976) [`7555a46a1`](https://github.com/marko-js/marko/commit/7555a46a19cee973b279fd582ffd51671490dc40) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Fix issue where aggregate errors from the compiler were not exposing error objects (was exposing the raw diagnostics).

- [#1976](https://github.com/marko-js/marko/pull/1976) [`7555a46a1`](https://github.com/marko-js/marko/commit/7555a46a19cee973b279fd582ffd51671490dc40) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Include locations and original message for errors thrown from the compiler.

## 5.28.3

### Patch Changes

- [#1974](https://github.com/marko-js/marko/pull/1974) [`42f7b46e2`](https://github.com/marko-js/marko/commit/42f7b46e25168ef4998e9c3f6014f9b6e1234486) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Run migration fixes synchronously.

- Updated dependencies [[`42f7b46e2`](https://github.com/marko-js/marko/commit/42f7b46e25168ef4998e9c3f6014f9b6e1234486)]:
  - @marko/babel-utils@5.22.1

## 5.28.2

### Patch Changes

- [#1972](https://github.com/marko-js/marko/pull/1972) [`897b8beba`](https://github.com/marko-js/marko/commit/897b8bebadbb08e0457fb959bd573cb2a5a4d593) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Fix issue where error messages without a source location were losing their message

## 5.28.1

### Patch Changes

- [#1970](https://github.com/marko-js/marko/pull/1970) [`ce5c40c95`](https://github.com/marko-js/marko/commit/ce5c40c9570c3410f62a2c9feb635ee7c7e54799) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Fix issue when outputting hydrate code with commonjs modules enabled.

## 5.28.0

### Minor Changes

- [#1968](https://github.com/marko-js/marko/pull/1968) [`70922e68e`](https://github.com/marko-js/marko/commit/70922e68e07578a867fff846e9bb623d64298e14) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Add support for additional diagnostics emitted from the compiler.

### Patch Changes

- Updated dependencies [[`70922e68e`](https://github.com/marko-js/marko/commit/70922e68e07578a867fff846e9bb623d64298e14)]:
  - @marko/babel-utils@5.22.0

## 5.27.10

### Patch Changes

- [#1957](https://github.com/marko-js/marko/pull/1957) [`820fa12f4`](https://github.com/marko-js/marko/commit/820fa12f40f33abc1811f148441ff834cfe4654b) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Fix compiler config type definitions

## 5.27.9

### Patch Changes

- [#1955](https://github.com/marko-js/marko/pull/1955) [`ca9bfa2a2`](https://github.com/marko-js/marko/commit/ca9bfa2a2b16cecdbb269a8116b3186166b07061) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Fix type definition for MarkoTagBody AST.

## 5.27.8

### Patch Changes

- [#1949](https://github.com/marko-js/marko/pull/1949) [`7f6b65a4b`](https://github.com/marko-js/marko/commit/7f6b65a4b6d34dad6b4f6961be3b8766b7146e63) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Use @internal module to host browser/worker remapped files. Improves support for some tools that don't work well with nested package.json files.

## 5.27.7

### Patch Changes

- [#1934](https://github.com/marko-js/marko/pull/1934) [`04d6fad6d`](https://github.com/marko-js/marko/commit/04d6fad6d599adc98d6f0ef00a5c44b4a4fc7485) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Fix issue where types were not being stripped from the inline Marko component class.

## 5.27.6

### Patch Changes

- [#1929](https://github.com/marko-js/marko/pull/1929) [`c7a197a5c`](https://github.com/marko-js/marko/commit/c7a197a5c2e49e4b365d185d6e24ab431a61abc9) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Adds strict typescript types for the native HTML tags.

## 5.27.5

### Patch Changes

- [`712f68062`](https://github.com/marko-js/marko/commit/712f68062326b5fb71073b691d1761d4ac71bdc3) Thanks [@LuLaValva](https://github.com/LuLaValva)! - Add types for Marko translator-default

## 5.27.4

### Patch Changes

- [#1923](https://github.com/marko-js/marko/pull/1923) [`62afb3256`](https://github.com/marko-js/marko/commit/62afb3256a0c402e75b90f06af4e8cdc5c8112f3) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Remove class lifecycle types to avoid the need to `override` them.

## 5.27.3

### Patch Changes

- [#1921](https://github.com/marko-js/marko/pull/1921) [`1fe71a502`](https://github.com/marko-js/marko/commit/1fe71a5020c5930c63e9c7ff226a3befca0e58a4) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Avoid using `typeof window` and prefer `typeof document` checks for browser environment (improves future deno support).

- [#1921](https://github.com/marko-js/marko/pull/1921) [`f0c697d7b`](https://github.com/marko-js/marko/commit/f0c697d7b5b0afcbe524f390db2b3c5fa54d5607) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Avoids using a package.json remap for the browser implementation of the \_preserve internal tag (used to implement `no-update` directives). This fixes an issue where in vite the module could not be loaded properly.

## 5.27.2

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

## 5.27.1

### Patch Changes

- [#1916](https://github.com/marko-js/marko/pull/1916) [`ac1d5062a`](https://github.com/marko-js/marko/commit/ac1d5062a7be8bb359ba8d378d3c7b2ec6dc14f6) Thanks [@mlrawlings](https://github.com/mlrawlings)! - fix: modify/remove some inefficient regexes

## 5.27.0

### Minor Changes

- [#1909](https://github.com/marko-js/marko/pull/1909) [`e8f1370cf`](https://github.com/marko-js/marko/commit/e8f1370cf668bb579e48fd05a60c086bed6bb466) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Allow repeated attribute tags without using a `marko.json` file. Attribute tag objects now also contain `Symbol.iterator` implementation to make the single case more easily forwarded to the `<for>` tag.

### Patch Changes

- [#1914](https://github.com/marko-js/marko/pull/1914) [`22228e804`](https://github.com/marko-js/marko/commit/22228e804c76d630c0fc333fa4750bb6e42c0814) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Upgrades the included version of HTMLJS-Parser

## 5.26.0

### Minor Changes

- [#1907](https://github.com/marko-js/marko/pull/1907) [`7211a6937`](https://github.com/marko-js/marko/commit/7211a6937b2044a14f2c2194269a697c76066b54) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Expose `$global` as a shorthand for `out.global` within the template scope.

## 5.25.0

### Minor Changes

- [#1899](https://github.com/marko-js/marko/pull/1899) [`4fc38e800`](https://github.com/marko-js/marko/commit/4fc38e80010241da76d24a46c2cd838aa5cf309f) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Expose the ability to intercept errors from the taglib builder.

## 5.24.0

### Minor Changes

- [#1897](https://github.com/marko-js/marko/pull/1897) [`72cdc3e5b`](https://github.com/marko-js/marko/commit/72cdc3e5b6c72a0b5d4b4738eb420571fa0cafa4) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Expose a top level `@marko/compiler/config` entry point for loading the default compiler config.

## 5.23.6

### Patch Changes

- [#1892](https://github.com/marko-js/marko/pull/1892) [`c55ae937c`](https://github.com/marko-js/marko/commit/c55ae937c4d756482d49a6b8797669cd39ca6288) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Improve types for the await tag and Marko.Template.

## 5.23.5

### Patch Changes

- [#1888](https://github.com/marko-js/marko/pull/1888) [`d110b0b5f`](https://github.com/marko-js/marko/commit/d110b0b5f6607a911d15b2045d46b9aa6ecba2d2) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Improve type definitions.

## 5.23.4

### Patch Changes

- [`23e36a04b`](https://github.com/marko-js/marko/commit/23e36a04b0c6f7d6b53307d7838f61a1e0f2ce29) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Add missing type definition file to exposed types in package.json.

- [`d920e833d`](https://github.com/marko-js/marko/commit/d920e833df0b58456f28f7cb45ebd38b56c05ba7) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Add missing type definition for taglib.

- Updated dependencies [[`d920e833d`](https://github.com/marko-js/marko/commit/d920e833df0b58456f28f7cb45ebd38b56c05ba7)]:
  - @marko/babel-utils@5.21.4

## 5.23.3

### Patch Changes

- [#1885](https://github.com/marko-js/marko/pull/1885) [`f1efd707a`](https://github.com/marko-js/marko/commit/f1efd707aa1c2aeac092ef7fff4ef5cb959f45b6) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Add taglib extensions and type definitions for typescript support.

## 5.23.2

### Patch Changes

- [#1880](https://github.com/marko-js/marko/pull/1880) [`c4cce33e8`](https://github.com/marko-js/marko/commit/c4cce33e8c917af7c45ffc64d748e88364a0b91a) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Fix an issue where merging scripts (via the out.script api) was not properly inserting delimeters when scripts are added in different async writers.

## 5.23.1

### Patch Changes

- [#1875](https://github.com/marko-js/marko/pull/1875) [`b744720db`](https://github.com/marko-js/marko/commit/b744720db5483633643c5a75bd2eedc37aa9ff25) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Upgrades "magic-string" module (used for css sourcemaps) to avoid deprecation warning.

## 5.23.0

### Minor Changes

- [#1865](https://github.com/marko-js/marko/pull/1865) [`797e90489`](https://github.com/marko-js/marko/commit/797e90489359e1e87a9756da5082c1e085555546) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Changes the "default" attributes name to be "value". This is technically a breaking change, but it primarily only impacts the tags-api-preview which will also be getting a release to support this change.

## 5.22.10

### Patch Changes

- [#1862](https://github.com/marko-js/marko/pull/1862) [`30e0ea43d`](https://github.com/marko-js/marko/commit/30e0ea43d56e0a3c59748eae32a0ab85921c1aeb) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Avoid mutating component instance in HMR mode. (Improves support in tags api preview)

## 5.22.9

### Patch Changes

- [#1860](https://github.com/marko-js/marko/pull/1860) [`e64809458`](https://github.com/marko-js/marko/commit/e648094582c6a5c10d567bb7c844b50b6541e355) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Improve tag scanning performance.

* [#1860](https://github.com/marko-js/marko/pull/1860) [`e64809458`](https://github.com/marko-js/marko/commit/e648094582c6a5c10d567bb7c844b50b6541e355) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Update htmljs-parser version.

## 5.22.8

### Patch Changes

- [#1855](https://github.com/marko-js/marko/pull/1855) [`760824659`](https://github.com/marko-js/marko/commit/76082465962b99c6b6f364104c2f135901534c0a) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Fix browser-refresh client support when using @marko/compiler/register

## 5.22.7

### Patch Changes

- [#1853](https://github.com/marko-js/marko/pull/1853) [`76771598e`](https://github.com/marko-js/marko/commit/76771598e83f143697c9a2bca3869f3c9fcf6ab1) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Enable the meta option for the compiler when @marko/compiler/register is used. This makes usage with lasso easier.

## 5.22.6

### Patch Changes

- [#1845](https://github.com/marko-js/marko/pull/1845) [`65bab8e6d`](https://github.com/marko-js/marko/commit/65bab8e6df02e6fd485a45d9a9c2200545f21479) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Fix issue where Marko runtime was being incorrectly matched when swapping from dev to prod runtimes.

- Updated dependencies [[`65bab8e6d`](https://github.com/marko-js/marko/commit/65bab8e6df02e6fd485a45d9a9c2200545f21479)]:
  - @marko/babel-utils@5.21.3

## 5.22.5

### Patch Changes

- [#1843](https://github.com/marko-js/marko/pull/1843) [`963f08ce9`](https://github.com/marko-js/marko/commit/963f08ce92e56f1d210068bedd5fc033b6db71c0) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Upgrade htmljs-parser.

## 5.22.4

### Patch Changes

- [#1841](https://github.com/marko-js/marko/pull/1841) [`26cd305ea`](https://github.com/marko-js/marko/commit/26cd305ea4391fb4846c07d5ba4984cc152584e7) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Upgrade htmljs-parser.

## 5.22.3

### Patch Changes

- [#1839](https://github.com/marko-js/marko/pull/1839) [`1df553e45`](https://github.com/marko-js/marko/commit/1df553e45829c7e0d754c5fec2c7d65e74c89457) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Upgrade HTMLJS-Parser.

## 5.22.2

### Patch Changes

- [#1837](https://github.com/marko-js/marko/pull/1837) [`63161abed`](https://github.com/marko-js/marko/commit/63161abed5fa071e88d06646bf0f55f0c6852b54) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Fix issue with source map position for shorthand attribute methods.

## 5.22.1

### Patch Changes

- [#1830](https://github.com/marko-js/marko/pull/1830) [`efd6da235`](https://github.com/marko-js/marko/commit/efd6da23587567ddf035c06a9ab82472ca1683bb) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Fix issue with parsing type definitions for tag variables

## 5.22.0

### Minor Changes

- [#1826](https://github.com/marko-js/marko/pull/1826) [`e285cbbd1`](https://github.com/marko-js/marko/commit/e285cbbd1092afb1e669156777a3a9ccd46affb2) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Support removing typescript types.

## 5.21.7

### Patch Changes

- [#1824](https://github.com/marko-js/marko/pull/1824) [`2f6459d2c`](https://github.com/marko-js/marko/commit/2f6459d2c421ac82c4627c90f1c50cb229a99d33) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Fix issue where shorthand attribute methods could not have a "return" statement.

## 5.21.6

### Patch Changes

- [#1814](https://github.com/marko-js/marko/pull/1814) [`b11f9d076`](https://github.com/marko-js/marko/commit/b11f9d076f40a0997c5c8534804ebc1b87d417cc) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Upgrade htmljs-parser.

## 5.21.5

### Patch Changes

- [#1811](https://github.com/marko-js/marko/pull/1811) [`49ef9801b`](https://github.com/marko-js/marko/commit/49ef9801b506ea6b7eafcb46e759a3463b0efd3d) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Upgrade htmljs-parser to improve source location information.

## 5.21.4

### Patch Changes

- [#1806](https://github.com/marko-js/marko/pull/1806) [`04adc2d24`](https://github.com/marko-js/marko/commit/04adc2d24eb0111d6e4a8bd760d420199240cb2f) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Fix issue where attribute shorthand methods would have incorrect sourcemap position.

## 5.21.3

### Patch Changes

- [#1800](https://github.com/marko-js/marko/pull/1800) [`c352de67e`](https://github.com/marko-js/marko/commit/c352de67ecb19d45d9c6874a8ba048fb656bb562) Thanks [@mlrawlings](https://github.com/mlrawlings)! - fix: update deps, inline babel helper removed from latest version

## 5.21.2

### Patch Changes

- [#1797](https://github.com/marko-js/marko/pull/1797) [`5921c2297`](https://github.com/marko-js/marko/commit/5921c2297297698c4026f0a4d077c364c42e038a) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Pin a newer version of htmljs-parser that fixes some parser bugs. See: https://github.com/marko-js/htmljs-parser/pull/103

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

**Note:** Version bump only for package @marko/compiler

## [5.20.8](https://github.com/marko-js/marko/compare/v5.20.7...v5.20.8) (2022-04-26)

### Bug Fixes

- type for BabelFile.markoConfig now reflects defaulted values ([cd49696](https://github.com/marko-js/marko/commit/cd496964c13af64b626a9cc10a3b55658e7418c8))

## [5.20.7](https://github.com/marko-js/marko/compare/v5.20.6...v5.20.7) (2022-04-26)

### Bug Fixes

- set cache entry before analysis to prevent infinite recursion ([d327864](https://github.com/marko-js/marko/commit/d3278640dbc403221c070f4529f18e9a05a60370))

## [5.20.6](https://github.com/marko-js/marko/compare/v5.20.5...v5.20.6) (2022-04-25)

**Note:** Version bump only for package @marko/compiler

## [5.20.5](https://github.com/marko-js/marko/compare/v5.20.4...v5.20.5) (2022-04-15)

### Bug Fixes

- **translator-default:** string literals in dynamic tags incorrectly doing component lookup ([28aa2e8](https://github.com/marko-js/marko/commit/28aa2e84c1f7335f77c2d0ef29d30453401e7b0d))

## [5.20.4](https://github.com/marko-js/marko/compare/v5.20.3...v5.20.4) (2022-04-11)

### Bug Fixes

- autoloading translators ([5eda8f3](https://github.com/marko-js/marko/commit/5eda8f388a9d0d253f4cda5c13bd5e716cbbc18d))

## [5.20.3](https://github.com/marko-js/marko/compare/v5.20.2...v5.20.3) (2022-03-24)

**Note:** Version bump only for package @marko/compiler

## [5.20.2](https://github.com/marko-js/marko/compare/v5.20.1...v5.20.2) (2022-03-23)

**Note:** Version bump only for package @marko/compiler

# [5.20.0](https://github.com/marko-js/marko/compare/v5.19.3...v5.20.0) (2022-03-11)

**Note:** Version bump only for package @marko/compiler

## [5.19.1](https://github.com/marko-js/marko/compare/v5.19.0...v5.19.1) (2022-01-28)

**Note:** Version bump only for package @marko/compiler

# [5.19.0](https://github.com/marko-js/marko/compare/v5.18.2...v5.19.0) (2022-01-28)

### Features

- support analyze field in marko.json ([#1769](https://github.com/marko-js/marko/issues/1769)) ([981f7f3](https://github.com/marko-js/marko/commit/981f7f39f932533178c538f8fc2788ea6f93d909))

## [5.18.2](https://github.com/marko-js/marko/compare/v5.18.1...v5.18.2) (2022-01-25)

**Note:** Version bump only for package @marko/compiler

## [5.18.1](https://github.com/marko-js/marko/compare/v5.18.0...v5.18.1) (2022-01-25)

**Note:** Version bump only for package @marko/compiler

# [5.18.0](https://github.com/marko-js/marko/compare/v5.17.10...v5.18.0) (2022-01-24)

**Note:** Version bump only for package @marko/compiler

## [5.17.10](https://github.com/marko-js/marko/compare/v5.17.9...v5.17.10) (2022-01-14)

### Bug Fixes

- issue with dynamic tag names not tracking references ([9d86540](https://github.com/marko-js/marko/commit/9d86540a37b0028370206d2367c0a2fc8a724575))

## [5.17.6](https://github.com/marko-js/marko/compare/v5.17.5...v5.17.6) (2022-01-02)

**Note:** Version bump only for package @marko/compiler

## [5.17.4](https://github.com/marko-js/marko/compare/v5.17.3...v5.17.4) (2021-11-17)

### Bug Fixes

- hoisted variable scopes clean up ([32f382b](https://github.com/marko-js/marko/commit/32f382bb0d054f2cb3709d571a0b95ac267f0523))

## [5.17.3](https://github.com/marko-js/marko/compare/v5.17.2...v5.17.3) (2021-10-30)

### Bug Fixes

- upgrade babel deps & fix builder regression ([91b3c58](https://github.com/marko-js/marko/commit/91b3c5855923adb64ab30677729e2d0404245846))

## [5.16.1](https://github.com/marko-js/marko/compare/v5.16.0...v5.16.1) (2021-10-22)

### Bug Fixes

- regression with identical tag name & taglib deduping ([a8d85d7](https://github.com/marko-js/marko/commit/a8d85d7771378d0e995c988cabe4b511ab95dc3d))
- upgrade htmljs-parser ([d95a37c](https://github.com/marko-js/marko/commit/d95a37c01ae3ddb7532f3add20b7feb8268e728f))

# [5.16.0](https://github.com/marko-js/marko/compare/v5.15.12...v5.16.0) (2021-10-11)

### Features

- upgrade htmljs-parser ([a53fc71](https://github.com/marko-js/marko/commit/a53fc717c1c019e764c677af8665a5159c885dd8))

## [5.15.11](https://github.com/marko-js/marko/compare/v5.15.10...v5.15.11) (2021-09-29)

### Bug Fixes

- normalize file opts similar to babel ([86310e6](https://github.com/marko-js/marko/commit/86310e603985ed96cba523fb07e25a0852cff8e6))

## [5.15.10](https://github.com/marko-js/marko/compare/v5.15.9...v5.15.10) (2021-09-07)

**Note:** Version bump only for package @marko/compiler

## [5.15.9](https://github.com/marko-js/marko/compare/v5.15.8...v5.15.9) (2021-09-05)

### Bug Fixes

- attribute shorthand method source locations ([20e3cf4](https://github.com/marko-js/marko/commit/20e3cf42aa35392edb8582491abf1a31b6a06d8a))

## [5.15.8](https://github.com/marko-js/marko/compare/v5.15.7...v5.15.8) (2021-09-05)

### Bug Fixes

- consistent file.opts during parse & other stages ([ff07ead](https://github.com/marko-js/marko/commit/ff07eadde29ace7aaf4323d11f78c892fdc8f0ed))
- incorrect source position for attribute arguments ([0c0ff04](https://github.com/marko-js/marko/commit/0c0ff04e767342c910f5087faf4bdef2778f0f92))

## [5.15.7](https://github.com/marko-js/marko/compare/v5.15.6...v5.15.7) (2021-09-03)

**Note:** Version bump only for package @marko/compiler

## [5.15.6](https://github.com/marko-js/marko/compare/v5.15.5...v5.15.6) (2021-09-03)

### Bug Fixes

- supports babel 7.15.4 ([a301a87](https://github.com/marko-js/marko/commit/a301a870e8e719d770ccef1958e9d9c03a93d765))

## [5.15.4](https://github.com/marko-js/marko/tree/master/packages/compiler/compare/v5.15.3...v5.15.4) (2021-08-07)

### Bug Fixes

- improve compiler register hook types ([ecdafa0](https://github.com/marko-js/marko/tree/master/packages/compiler/commit/ecdafa047cdcbe87b941856102a00da34d8efe25))

## [5.15.3](https://github.com/marko-js/marko/tree/master/packages/compiler/compare/v5.15.2...v5.15.3) (2021-08-06)

**Note:** Version bump only for package @marko/compiler

## [5.15.2](https://github.com/marko-js/marko/tree/master/packages/compiler/compare/v5.15.1...v5.15.2) (2021-08-06)

### Bug Fixes

- issue with hoisted tag var scopes ([86162a1](https://github.com/marko-js/marko/tree/master/packages/compiler/commit/86162a1471aeb2d6f6729ef2ed872092b549105b))

# [5.15.0](https://github.com/marko-js/marko/tree/master/packages/compiler/compare/v5.14.2...v5.15.0) (2021-07-28)

### Features

- expose @marko/compiler/register api ([5726899](https://github.com/marko-js/marko/tree/master/packages/compiler/commit/572689909618939585e93c1a0d1ab101ff73aefd))

## [5.14.2](https://github.com/marko-js/marko/tree/master/packages/compiler/compare/v5.14.1...v5.14.2) (2021-07-28)

### Bug Fixes

- support method shorthand from updated parser ([accb1bf](https://github.com/marko-js/marko/tree/master/packages/compiler/commit/accb1bf51ff73ccff5f3fcbd0c65172b9a7a262a))

## [5.14.1](https://github.com/marko-js/marko/tree/master/packages/compiler/compare/v5.14.0...v5.14.1) (2021-07-26)

### Bug Fixes

- **compiler:** issue with getters on taglibs not properly merging ([c728439](https://github.com/marko-js/marko/tree/master/packages/compiler/commit/c728439906bc87a9167f02aecd979e5801b1c415))

# [5.14.0](https://github.com/marko-js/marko/tree/master/packages/compiler/compare/v5.13.0...v5.14.0) (2021-07-24)

### Bug Fixes

- issue with root translator running in hydrate mode ([56495ae](https://github.com/marko-js/marko/tree/master/packages/compiler/commit/56495aee99f1adbbdbdc08324561fbbd62ae95a1))

### Features

- lazy load load compiler hook paths, expose error loc object ([f49fc19](https://github.com/marko-js/marko/tree/master/packages/compiler/commit/f49fc1901bb1fc66ae1eb64b98ce2402d4faa8fa))

# [5.13.0](https://github.com/marko-js/marko/tree/master/packages/compiler/compare/v5.12.1...v5.13.0) (2021-07-23)

### Features

- add support for new binding shorthand syntax ([1c20064](https://github.com/marko-js/marko/tree/master/packages/compiler/commit/1c20064bdf04c3491b40e68aa6e57113dd40bc40))

## [5.12.1](https://github.com/marko-js/marko/tree/master/packages/compiler/compare/v5.12.0...v5.12.1) (2021-07-21)

### Bug Fixes

- issue with tag var scope hoisting ([ed8de11](https://github.com/marko-js/marko/tree/master/packages/compiler/commit/ed8de119f1d81da04f2006922864be0ef8a60ab0))

# [5.12.0](https://github.com/marko-js/marko/tree/master/packages/compiler/compare/v5.11.3...v5.12.0) (2021-07-12)

**Note:** Version bump only for package @marko/compiler

## [5.11.3](https://github.com/marko-js/marko/tree/master/packages/compiler/compare/v5.11.2...v5.11.3) (2021-07-08)

**Note:** Version bump only for package @marko/compiler

## [5.11.2](https://github.com/marko-js/marko/tree/master/packages/compiler/compare/v5.11.1...v5.11.2) (2021-07-07)

### Bug Fixes

- incorrect search file types for taglib lookup ([4e6bd9a](https://github.com/marko-js/marko/tree/master/packages/compiler/commit/4e6bd9a2e9de27566b78c98301715054c421c264))

## [5.11.1](https://github.com/marko-js/marko/tree/master/packages/compiler/compare/v5.11.0...v5.11.1) (2021-07-07)

### Bug Fixes

- add missing compiler hook aliases during taglib loading ([0e008e3](https://github.com/marko-js/marko/tree/master/packages/compiler/commit/0e008e33e5c39d99b6a0744c1ad0132adbd0bf6a))

# [5.11.0](https://github.com/marko-js/marko/tree/master/packages/compiler/compare/v5.10.7...v5.11.0) (2021-07-07)

### Features

- add hoisting support for tag var bindings ([956a80c](https://github.com/marko-js/marko/tree/master/packages/compiler/commit/956a80c5c28948745b0e554971853d88ceb41871))
- support taglib translate hook, support arrays in taglib hooks ([e2b0e66](https://github.com/marko-js/marko/tree/master/packages/compiler/commit/e2b0e66138acec5ee11ec0f582da99391a5c7396))

## [5.10.7](https://github.com/marko-js/marko/tree/master/packages/compiler/compare/v5.10.6...v5.10.7) (2021-06-23)

### Bug Fixes

- **compiler:** improve sourceMap config option type definition ([5a5092e](https://github.com/marko-js/marko/tree/master/packages/compiler/commit/5a5092e89d77046b046db2d34a1d34715f93756e))

## [5.10.6](https://github.com/marko-js/marko/tree/master/packages/compiler/compare/v5.10.5...v5.10.6) (2021-06-10)

**Note:** Version bump only for package @marko/compiler

## [5.10.5](https://github.com/marko-js/marko/tree/master/packages/compiler/compare/v5.10.4...v5.10.5) (2021-06-08)

**Note:** Version bump only for package @marko/compiler

## [5.10.2](https://github.com/marko-js/marko/tree/master/packages/compiler/compare/v5.10.1...v5.10.2) (2021-05-04)

### Bug Fixes

- **compiler:** var name typo ([8aaf910](https://github.com/marko-js/marko/tree/master/packages/compiler/commit/8aaf9105323587fae4f40dd69a2497f114a867c5))

## [5.10.1](https://github.com/marko-js/marko/tree/master/packages/compiler/compare/v5.10.0...v5.10.1) (2021-05-04)

### Bug Fixes

- **compiler:** issue with undefined added to watchFiles ([4704b62](https://github.com/marko-js/marko/tree/master/packages/compiler/commit/4704b62a81165856a803b2155946b4d143d58287))

# [5.10.0](https://github.com/marko-js/marko/tree/master/packages/compiler/compare/v5.9.0...v5.10.0) (2021-04-30)

### Features

- add new HMR runtime ([a873762](https://github.com/marko-js/marko/tree/master/packages/compiler/commit/a87376299952c8f9fc5c3d467c571acc0956bfb3))

# [5.9.0](https://github.com/marko-js/marko/tree/master/packages/compiler/compare/v5.8.4...v5.9.0) (2021-04-21)

### Features

- expose api to get runtime entry files for translator ([#1687](https://github.com/marko-js/marko/tree/master/packages/compiler/issues/1687)) ([fad9159](https://github.com/marko-js/marko/tree/master/packages/compiler/commit/fad91598b28f3ab6e8e3550e42c50d062ea41ad9))

## [5.8.4](https://github.com/marko-js/marko/tree/master/packages/compiler/compare/v5.8.3...v5.8.4) (2021-04-19)

**Note:** Version bump only for package @marko/compiler

## [5.8.3](https://github.com/marko-js/marko/tree/master/packages/compiler/compare/v5.8.2...v5.8.3) (2021-04-18)

**Note:** Version bump only for package @marko/compiler

## [5.8.2](https://github.com/marko-js/marko/tree/master/packages/compiler/compare/v5.8.1...v5.8.2) (2021-04-18)

**Note:** Version bump only for package @marko/compiler

## [5.8.1](https://github.com/marko-js/marko/tree/master/packages/compiler/compare/v5.8.0...v5.8.1) (2021-04-16)

### Bug Fixes

- **compiler:** add missing config type definition ([7437e88](https://github.com/marko-js/marko/tree/master/packages/compiler/commit/7437e888b7cbd3c7f8ed5ae164d959d8c0d7eb04))

# [5.8.0](https://github.com/marko-js/marko/tree/master/packages/compiler/compare/v5.7.0...v5.8.0) (2021-04-16)

### Features

- add new hydrateIncludeImports option ([#1686](https://github.com/marko-js/marko/tree/master/packages/compiler/issues/1686)) ([db84f91](https://github.com/marko-js/marko/tree/master/packages/compiler/commit/db84f913b47e4372c84c09a34ca8529b646b7869))

# [5.7.0](https://github.com/marko-js/marko/tree/master/packages/compiler/compare/v5.6.2...v5.7.0) (2021-04-07)

### Features

- **compiler:** use default translator for buildLookup api ([#1682](https://github.com/marko-js/marko/tree/master/packages/compiler/issues/1682)) ([0899847](https://github.com/marko-js/marko/tree/master/packages/compiler/commit/0899847ea80dc65d6d8b80114f7caaf77cadccf5))

## [5.6.2](https://github.com/marko-js/marko/tree/master/packages/compiler/compare/v5.6.1...v5.6.2) (2021-03-30)

**Note:** Version bump only for package @marko/compiler

## [5.6.1](https://github.com/marko-js/marko/tree/master/packages/compiler/compare/v5.6.0...v5.6.1) (2021-03-27)

**Note:** Version bump only for package @marko/compiler

# [5.6.0](https://github.com/marko-js/marko/tree/master/packages/compiler/compare/v5.5.4...v5.6.0) (2021-03-27)

**Note:** Version bump only for package @marko/compiler

## [5.5.4](https://github.com/marko-js/marko/tree/master/packages/compiler/compare/v5.5.3...v5.5.4) (2021-03-22)

**Note:** Version bump only for package @marko/compiler

## [5.5.3](https://github.com/marko-js/marko/tree/master/packages/compiler/compare/v5.5.2...v5.5.3) (2021-03-22)

**Note:** Version bump only for package @marko/compiler

## [5.5.2](https://github.com/marko-js/marko/tree/master/packages/compiler/compare/v5.5.1...v5.5.2) (2021-03-19)

### Bug Fixes

- cast result of readFile to string ([#1679](https://github.com/marko-js/marko/tree/master/packages/compiler/issues/1679)) ([501a7fb](https://github.com/marko-js/marko/tree/master/packages/compiler/commit/501a7fbfbe9e12869fd685f1e5c8ee4417da816d))

## [5.5.1](https://github.com/marko-js/marko/tree/master/packages/compiler/compare/v5.5.0...v5.5.1) (2021-03-18)

### Bug Fixes

- **compiler:** type definitions had incorrect path ([f7d4eb9](https://github.com/marko-js/marko/tree/master/packages/compiler/commit/f7d4eb981e80f87394ab64976e5f31156f80a408))

# [5.5.0](https://github.com/marko-js/marko/tree/master/packages/compiler/compare/v5.4.2...v5.5.0) (2021-03-18)

### Bug Fixes

- **compiler:** use provided FS for taglib building ([#1674](https://github.com/marko-js/marko/tree/master/packages/compiler/issues/1674)) ([edb570e](https://github.com/marko-js/marko/tree/master/packages/compiler/commit/edb570eda4b3d544795536bf81613f6c97c9859a))
- correct Marko debug mode for ci tests ([031ca0d](https://github.com/marko-js/marko/tree/master/packages/compiler/commit/031ca0d93fa77a3405b95467e7a98f2c5a8120de))

### Features

- add hydrate option ([#1673](https://github.com/marko-js/marko/tree/master/packages/compiler/issues/1673)) ([a4e7013](https://github.com/marko-js/marko/tree/master/packages/compiler/commit/a4e701355efcd93971eb46988f5e990f4517796f))

## [5.4.2](https://github.com/marko-js/marko/tree/master/packages/compiler/compare/v5.4.1...v5.4.2) (2021-03-10)

**Note:** Version bump only for package @marko/compiler

## [5.4.1](https://github.com/marko-js/marko/tree/master/packages/compiler/compare/v5.4.0...v5.4.1) (2021-03-10)

**Note:** Version bump only for package @marko/compiler

# [5.4.0](https://github.com/marko-js/marko/tree/master/packages/compiler/compare/v5.3.0...v5.4.0) (2021-03-10)

**Note:** Version bump only for package @marko/compiler

## [5.2.2](https://github.com/marko-js/marko/tree/master/packages/compiler/compare/v5.2.1...v5.2.2) (2021-03-01)

### Bug Fixes

- add some additional missing deps from marko to @marko/compiler ([65ac580](https://github.com/marko-js/marko/tree/master/packages/compiler/commit/65ac580e57cb42ab94adc447c9b59744a69c8b64))

## [5.2.1](https://github.com/marko-js/marko/tree/master/packages/compiler/compare/v5.2.0...v5.2.1) (2021-03-01)

### Bug Fixes

- **compiler:** add missing dependency after moving taglib code ([ae843f1](https://github.com/marko-js/marko/tree/master/packages/compiler/commit/ae843f1b802fcbc1c7347247247a3c8551f6cfd2))

# [5.2.0](https://github.com/marko-js/marko/tree/master/packages/compiler/compare/v5.1.21...v5.2.0) (2021-03-01)

### Features

- move taglib apis into compiler source code ([f7cbb1b](https://github.com/marko-js/marko/tree/master/packages/compiler/commit/f7cbb1b5719ce767b7970ca7264a081010e8e65a))

## [5.1.21](https://github.com/marko-js/marko/tree/master/packages/compiler/compare/v5.1.20...v5.1.21) (2021-03-01)

**Note:** Version bump only for package @marko/compiler

## [5.1.20](https://github.com/marko-js/marko/tree/master/packages/compiler/compare/v5.1.19...v5.1.20) (2021-02-26)

**Note:** Version bump only for package @marko/compiler

## [5.1.19](https://github.com/marko-js/marko/tree/master/packages/compiler/compare/v5.1.18...v5.1.19) (2021-02-26)

### Bug Fixes

- **marko:** bring back hot-reload when node-require hook used ([8d856a0](https://github.com/marko-js/marko/tree/master/packages/compiler/commit/8d856a0250a1f2522f06a91a11c2d73c6a05e7b2))
- move @marko/babel-types into compiler ([5369a63](https://github.com/marko-js/marko/tree/master/packages/compiler/commit/5369a63e0ce66c422981893525ff6c9bcbd461dd))
- **compiler:** issue with path.state missing ([22ab5b2](https://github.com/marko-js/marko/tree/master/packages/compiler/commit/22ab5b282ad5b8eedf2705956a45d21cc1d55717))

## [5.1.18](https://github.com/marko-js/marko/tree/master/packages/compiler/compare/v5.1.17...v5.1.18) (2021-02-21)

**Note:** Version bump only for package @marko/compiler

## [5.1.17](https://github.com/marko-js/marko/tree/master/packages/compiler/compare/v5.1.16...v5.1.17) (2021-02-18)

**Note:** Version bump only for package @marko/compiler

## [5.1.16](https://github.com/marko-js/marko/tree/master/packages/compiler/compare/v5.1.15...v5.1.16) (2021-02-17)

**Note:** Version bump only for package @marko/compiler

## [5.1.15](https://github.com/marko-js/marko/tree/master/packages/compiler/compare/v5.1.14...v5.1.15) (2021-02-13)

**Note:** Version bump only for package @marko/compiler

## [5.1.14](https://github.com/marko-js/marko/tree/master/packages/compiler/compare/v5.1.13...v5.1.14) (2021-02-12)

**Note:** Version bump only for package @marko/compiler

## [5.1.13](https://github.com/marko-js/marko/tree/master/packages/compiler/compare/v5.1.12...v5.1.13) (2021-02-12)

**Note:** Version bump only for package @marko/compiler

## [5.1.12](https://github.com/marko-js/marko/tree/master/packages/compiler/compare/v5.1.11...v5.1.12) (2021-02-12)

**Note:** Version bump only for package @marko/compiler

## [5.1.11](https://github.com/marko-js/marko/tree/master/packages/compiler/compare/v5.1.10...v5.1.11) (2021-02-11)

**Note:** Version bump only for package @marko/compiler

## [5.1.10](https://github.com/marko-js/marko/tree/master/packages/compiler/compare/v5.1.9...v5.1.10) (2021-02-05)

**Note:** Version bump only for package @marko/compiler

## [5.1.9](https://github.com/marko-js/marko/tree/master/packages/compiler/compare/v5.1.8...v5.1.9) (2021-02-03)

**Note:** Version bump only for package @marko/compiler

## [5.1.8](https://github.com/marko-js/marko/tree/master/packages/compiler/compare/v5.1.7...v5.1.8) (2021-02-02)

**Note:** Version bump only for package @marko/compiler

## [5.1.7](https://github.com/marko-js/marko/tree/master/packages/compiler/compare/v5.1.6...v5.1.7) (2021-02-01)

**Note:** Version bump only for package @marko/compiler

## [5.1.6](https://github.com/marko-js/marko/tree/master/packages/compiler/compare/v5.1.5...v5.1.6) (2021-01-29)

### Bug Fixes

- **compiler:** improve type definitions ([291690e](https://github.com/marko-js/marko/tree/master/packages/compiler/commit/291690edb061afd0f98a8eb514db6b8f429fe5a0))

## [5.1.5](https://github.com/marko-js/marko/tree/master/packages/compiler/compare/v5.1.4...v5.1.5) (2021-01-28)

### Bug Fixes

- issue with bundled compiler not respecting NODE_ENV ([c7be2a7](https://github.com/marko-js/marko/tree/master/packages/compiler/commit/c7be2a7052366bff706eb2622a6b059866294b5b))

## [5.1.4](https://github.com/marko-js/marko/tree/master/packages/compiler/compare/v5.1.3...v5.1.4) (2021-01-27)

**Note:** Version bump only for package @marko/compiler

## [5.1.3](https://github.com/marko-js/marko/tree/master/packages/compiler/compare/v5.1.2...v5.1.3) (2021-01-27)

**Note:** Version bump only for package @marko/compiler

## [5.1.2](https://github.com/marko-js/marko/tree/master/packages/compiler/compare/v5.1.1...v5.1.2) (2021-01-26)

**Note:** Version bump only for package @marko/compiler

## [5.1.1](https://github.com/marko-js/marko/tree/master/packages/compiler/compare/v5.1.0...v5.1.1) (2021-01-26)

**Note:** Version bump only for package @marko/compiler

# [5.1.0](https://github.com/marko-js/marko/tree/master/packages/compiler/compare/v5.0.0-next.82...v5.1.0) (2021-01-26)

### Features

- no longer publish as 'next' dist-tag ([8113e25](https://github.com/marko-js/marko/tree/master/packages/compiler/commit/8113e250d823000810d0fa13d76efc4cc69f4ad1))

# [5.0.0-next.82](https://github.com/marko-js/marko/tree/master/packages/compiler/compare/v5.0.0-next.81...v5.0.0-next.82) (2021-01-21)

### Bug Fixes

- issue with path.hub being missing when traversing ([7aef97c](https://github.com/marko-js/marko/tree/master/packages/compiler/commit/7aef97ca48ec26be19a1e5527156cc1c9a13b674))

# [5.0.0-next.81](https://github.com/marko-js/marko/tree/master/packages/compiler/compare/v5.0.0-next.80...v5.0.0-next.81) (2021-01-20)

**Note:** Version bump only for package @marko/compiler

# [5.0.0-next.80](https://github.com/marko-js/marko/tree/master/packages/compiler/compare/v5.0.0-next.79...v5.0.0-next.80) (2021-01-19)

**Note:** Version bump only for package @marko/compiler

# [5.0.0-next.79](https://github.com/marko-js/marko/tree/master/packages/compiler/compare/v5.0.0-next.78...v5.0.0-next.79) (2021-01-19)

**Note:** Version bump only for package @marko/compiler

# [5.0.0-next.78](https://github.com/marko-js/marko/tree/master/packages/compiler/compare/v5.0.0-next.77...v5.0.0-next.78) (2021-01-19)

**Note:** Version bump only for package @marko/compiler

# [5.0.0-next.77](https://github.com/marko-js/marko/tree/master/packages/compiler/compare/v5.0.0-next.76...v5.0.0-next.77) (2021-01-19)

**Note:** Version bump only for package @marko/compiler

# [5.0.0-next.76](https://github.com/marko-js/marko/tree/master/packages/compiler/compare/v5.0.0-next.75...v5.0.0-next.76) (2021-01-15)

**Note:** Version bump only for package @marko/compiler

# [5.0.0-next.75](https://github.com/marko-js/marko/tree/master/packages/compiler/compare/v5.0.0-next.74...v5.0.0-next.75) (2021-01-14)

**Note:** Version bump only for package @marko/compiler

# [5.0.0-next.74](https://github.com/marko-js/marko/tree/master/packages/compiler/compare/v5.0.0-next.73...v5.0.0-next.74) (2021-01-14)

**Note:** Version bump only for package @marko/compiler

# [5.0.0-next.73](https://github.com/marko-js/marko/tree/master/packages/compiler/compare/v5.0.0-next.72...v5.0.0-next.73) (2021-01-14)

### Bug Fixes

- use same debug check for compiler and runtime ([#1647](https://github.com/marko-js/marko/tree/master/packages/compiler/issues/1647)) ([0c8632f](https://github.com/marko-js/marko/tree/master/packages/compiler/commit/0c8632fe92d06b27d0741fa2d5a2b599f0890693))

# [5.0.0-next.72](https://github.com/marko-js/marko/tree/master/packages/compiler/compare/v5.0.0-next.71...v5.0.0-next.72) (2021-01-13)

### Features

- **compiler:** support string as translator option ([0c6e968](https://github.com/marko-js/marko/tree/master/packages/compiler/commit/0c6e968b4eadd9c792c8495cd218791b04206ec5))

# [5.0.0-next.71](https://github.com/marko-js/marko/tree/master/packages/compiler/compare/v5.0.0-next.70...v5.0.0-next.71) (2021-01-12)

### Features

- move tag param ast to MarkoTagBody ([02c1e29](https://github.com/marko-js/marko/tree/master/packages/compiler/commit/02c1e29426b7995d869ab8a9fd1f8dd6dccaeca5))

# [5.0.0-next.70](https://github.com/marko-js/marko/tree/master/packages/compiler/compare/v5.0.0-next.69...v5.0.0-next.70) (2020-12-16)

### Features

- add cached analyze stage ([bb6a050](https://github.com/marko-js/marko/tree/master/packages/compiler/commit/bb6a050bbb82d5a4fcfc5e1ca6835d36a67809fa))

# [5.0.0-next.69](https://github.com/marko-js/marko/tree/master/packages/compiler/compare/v5.0.0-next.68...v5.0.0-next.69) (2020-12-14)

### Features

- **compiler:** provide state object during compiler hooks ([24cefa4](https://github.com/marko-js/marko/tree/master/packages/compiler/commit/24cefa4c068a8b272aa998391a695d2efd5d9786))

# [5.0.0-next.68](https://github.com/marko-js/marko/tree/master/packages/compiler/compare/v5.0.0-next.67...v5.0.0-next.68) (2020-12-11)

### Features

- **babel-utils:** expose import and id utils ([#1636](https://github.com/marko-js/marko/tree/master/packages/compiler/issues/1636)) ([644e4d8](https://github.com/marko-js/marko/tree/master/packages/compiler/commit/644e4d8756c2260a1e2d28374a31a67552414179))

# [5.0.0-next.67](https://github.com/marko-js/marko/tree/master/packages/compiler/compare/v5.0.0-next.66...v5.0.0-next.67) (2020-12-09)

**Note:** Version bump only for package @marko/compiler

# [5.0.0-next.66](https://github.com/marko-js/marko/tree/master/packages/compiler/compare/v5.0.0-next.65...v5.0.0-next.66) (2020-12-08)

**Note:** Version bump only for package @marko/compiler

# [5.0.0-next.65](https://github.com/marko-js/marko/tree/master/packages/compiler/compare/v5.0.0-next.64...v5.0.0-next.65) (2020-12-02)

**Note:** Version bump only for package @marko/compiler

# [5.0.0-next.64](https://github.com/marko-js/marko/tree/master/packages/compiler/compare/v5.0.0-next.63...v5.0.0-next.64) (2020-12-02)

### Bug Fixes

- **babel-types:** support scope analysis for tag variables ([c527474](https://github.com/marko-js/marko/tree/master/packages/compiler/commit/c5274740b5fde01b85b8b46381fadf2fc75245f2))

# [5.0.0-next.63](https://github.com/marko-js/marko/tree/master/packages/compiler/compare/v5.0.0-next.62...v5.0.0-next.63) (2020-12-01)

**Note:** Version bump only for package @marko/compiler

# [5.0.0-next.62](https://github.com/marko-js/marko/tree/master/packages/compiler/compare/v5.0.0-next.61...v5.0.0-next.62) (2020-12-01)

**Note:** Version bump only for package @marko/compiler

# [5.0.0-next.61](https://github.com/marko-js/marko/tree/master/packages/compiler/compare/v5.0.0-next.60...v5.0.0-next.61) (2020-12-01)

**Note:** Version bump only for package @marko/compiler

# [5.0.0-next.60](https://github.com/marko-js/marko/tree/master/packages/compiler/compare/v5.0.0-next.59...v5.0.0-next.60) (2020-11-22)

**Note:** Version bump only for package @marko/compiler

# [5.0.0-next.59](https://github.com/marko-js/marko/tree/master/packages/compiler/compare/v5.0.0-next.58...v5.0.0-next.59) (2020-11-21)

**Note:** Version bump only for package @marko/compiler

# [5.0.0-next.58](https://github.com/marko-js/marko/tree/master/packages/compiler/compare/v5.0.0-next.57...v5.0.0-next.58) (2020-11-20)

**Note:** Version bump only for package @marko/compiler

# [5.0.0-next.57](https://github.com/marko-js/marko/tree/master/packages/compiler/compare/v5.0.0-next.56...v5.0.0-next.57) (2020-11-20)

### Bug Fixes

- **translator-default:** ensure accruate component id metadata ([c4b0360](https://github.com/marko-js/marko/tree/master/packages/compiler/commit/c4b036058ea57f31e151e0dae965858839d1795c))

### Features

- add default attribute support ([#1631](https://github.com/marko-js/marko/tree/master/packages/compiler/issues/1631)) ([46ceab3](https://github.com/marko-js/marko/tree/master/packages/compiler/commit/46ceab34a5c1815933b8b2a9f3533716ae0fedcf))
- add parser support for tag variables ([#1630](https://github.com/marko-js/marko/tree/master/packages/compiler/issues/1630)) ([43c4433](https://github.com/marko-js/marko/tree/master/packages/compiler/commit/43c4433cb026f7eace199203e15d1050a53dc35d))

# [5.0.0-next.56](https://github.com/marko-js/marko/tree/master/packages/compiler/compare/v5.0.0-next.55...v5.0.0-next.56) (2020-11-20)

### Bug Fixes

- **compiler:** no longer error when compiling from root dir ([fe84fb3](https://github.com/marko-js/marko/tree/master/packages/compiler/commit/fe84fb345affb4a48e10d51df18bcf1114e12d3f))

# [5.0.0-next.55](https://github.com/marko-js/marko/tree/master/packages/compiler/compare/v5.0.0-next.54...v5.0.0-next.55) (2020-11-19)

### Bug Fixes

- babel-utils doesnt depend on compiler ([c429ffb](https://github.com/marko-js/marko/tree/master/packages/compiler/commit/c429ffb0aa4e79210b881d089a3db19d272a750d))

# [5.0.0-next.54](https://github.com/marko-js/marko/tree/master/packages/compiler/compare/v5.0.0-next.53...v5.0.0-next.54) (2020-11-17)

**Note:** Version bump only for package @marko/compiler

# [5.0.0-next.53](https://github.com/marko-js/marko/tree/master/packages/compiler/compare/v5.0.0-next.52...v5.0.0-next.53) (2020-11-17)

**Note:** Version bump only for package @marko/compiler

# [5.0.0-next.52](https://github.com/marko-js/marko/tree/master/packages/compiler/compare/v5.0.0-next.51...v5.0.0-next.52) (2020-11-12)

**Note:** Version bump only for package @marko/compiler

# [5.0.0-next.51](https://github.com/marko-js/marko/tree/master/packages/compiler/compare/v5.0.0-next.50...v5.0.0-next.51) (2020-11-11)

### Features

- cached compilations, nested tag analysis ([74d5f10](https://github.com/marko-js/marko/tree/master/packages/compiler/commit/74d5f104b8f35178c399ab5c3514c33f8b63cdf0))

# [5.0.0-next.50](https://github.com/marko-js/marko/tree/master/packages/compiler/compare/v5.0.0-next.49...v5.0.0-next.50) (2020-10-12)

### Bug Fixes

- no longer use fragments for preserved native els ([22e9322](https://github.com/marko-js/marko/tree/master/packages/compiler/commit/22e9322a7e72b50812ab223f70bf9e68aee2208d))

# [5.0.0-next.49](https://github.com/marko-js/marko/tree/master/packages/compiler/compare/v5.0.0-next.48...v5.0.0-next.49) (2020-09-28)

**Note:** Version bump only for package @marko/compiler

# [5.0.0-next.48](https://github.com/marko-js/marko/tree/master/packages/compiler/compare/v5.0.0-next.47...v5.0.0-next.48) (2020-09-18)

### Bug Fixes

- **compiler:** improve hash template id performance and consistency ([d111748](https://github.com/marko-js/marko/tree/master/packages/compiler/commit/d11174853f02b4edf25cb4b1b3cf0b687ca2bf4e))

# [5.0.0-next.47](https://github.com/marko-js/marko/tree/master/packages/compiler/compare/v5.0.0-next.46...v5.0.0-next.47) (2020-09-18)

### Bug Fixes

- **compiler:** normalize windows paths when creating relative requires ([daf2b1a](https://github.com/marko-js/marko/tree/master/packages/compiler/commit/daf2b1af37d1c14175b69b52373d7d36ad115c59))

# [5.0.0-next.46](https://github.com/marko-js/marko/tree/master/packages/compiler/compare/v5.0.0-next.45...v5.0.0-next.46) (2020-09-17)

**Note:** Version bump only for package @marko/compiler

# [5.0.0-next.45](https://github.com/marko-js/marko/tree/master/packages/compiler/compare/v5.0.0-next.44...v5.0.0-next.45) (2020-08-26)

**Note:** Version bump only for package @marko/compiler

# [5.0.0-next.44](https://github.com/marko-js/marko/tree/master/packages/compiler/compare/v5.0.0-next.43...v5.0.0-next.44) (2020-08-26)

### Bug Fixes

- typo with aria-describedby autocomplete ([f499634](https://github.com/marko-js/marko/tree/master/packages/compiler/commit/f499634679eb97003e45e1a9923590abc9190f06))

# [5.0.0-next.43](https://github.com/marko-js/marko/tree/master/packages/compiler/compare/v5.0.0-next.42...v5.0.0-next.43) (2020-08-20)

**Note:** Version bump only for package @marko/compiler

# [5.0.0-next.42](https://github.com/marko-js/marko/tree/master/packages/compiler/compare/v5.0.0-next.41...v5.0.0-next.42) (2020-08-18)

**Note:** Version bump only for package @marko/compiler

# [5.0.0-next.41](https://github.com/marko-js/marko/tree/master/packages/compiler/compare/v5.0.0-next.40...v5.0.0-next.41) (2020-08-18)

**Note:** Version bump only for package @marko/compiler

# [5.0.0-next.40](https://github.com/marko-js/marko/tree/master/packages/compiler/compare/v5.0.0-next.39...v5.0.0-next.40) (2020-08-12)

### Bug Fixes

- component type use relative path in dev mode ([7b7a4f9](https://github.com/marko-js/marko/tree/master/packages/compiler/commit/7b7a4f9637648c7ded113fd132ce3ce5f2785e0a))

# [5.0.0-next.39](https://github.com/marko-js/marko/tree/master/packages/compiler/compare/v5.0.0-next.38...v5.0.0-next.39) (2020-08-10)

**Note:** Version bump only for package @marko/compiler

# [5.0.0-next.38](https://github.com/marko-js/marko/tree/master/packages/compiler/compare/v5.0.0-next.37...v5.0.0-next.38) (2020-08-10)

**Note:** Version bump only for package @marko/compiler

# [5.0.0-next.37](https://github.com/marko-js/marko/tree/master/packages/compiler/compare/v5.0.0-next.36...v5.0.0-next.37) (2020-08-05)

### Features

- only enable optimization stage for production mode ([ee16e96](https://github.com/marko-js/marko/tree/master/packages/compiler/commit/ee16e96580b67e0cacb87a78001be940dc0324df))

# [5.0.0-next.36](https://github.com/marko-js/marko/tree/master/packages/compiler/compare/v5.0.0-next.35...v5.0.0-next.36) (2020-08-05)

### Features

- expose watch file meta data ([#1591](https://github.com/marko-js/marko/tree/master/packages/compiler/issues/1591)) ([f14e46a](https://github.com/marko-js/marko/tree/master/packages/compiler/commit/f14e46a1f3ddd01f659a0f86678773fb12a7f1a5))

# [5.0.0-next.35](https://github.com/marko-js/marko/tree/master/packages/compiler/compare/v5.0.0-next.34...v5.0.0-next.35) (2020-08-04)

### Features

- add custom fileSystem config option ([#1590](https://github.com/marko-js/marko/tree/master/packages/compiler/issues/1590)) ([212dda9](https://github.com/marko-js/marko/tree/master/packages/compiler/commit/212dda9c004af1958feacf5c9be9ac381feb2708))

# [5.0.0-next.34](https://github.com/marko-js/marko/tree/master/packages/compiler/compare/v5.0.0-next.33...v5.0.0-next.34) (2020-08-04)

**Note:** Version bump only for package @marko/compiler

# [5.0.0-next.33](https://github.com/marko-js/marko/tree/master/packages/compiler/compare/v5.0.0-next.32...v5.0.0-next.33) (2020-08-03)

**Note:** Version bump only for package @marko/compiler

# [5.0.0-next.32](https://github.com/marko-js/marko/tree/master/packages/compiler/compare/v5.0.0-next.31...v5.0.0-next.32) (2020-07-31)

### Bug Fixes

- **compiler:** regression with sourcemaps ([bb818c8](https://github.com/marko-js/marko/tree/master/packages/compiler/commit/bb818c8423e1d1cc4528c951b08ddab1579f25a9))

# [5.0.0-next.31](https://github.com/marko-js/marko/tree/master/packages/compiler/compare/v5.0.0-next.30...v5.0.0-next.31) (2020-07-31)

### Features

- improve index position to line, column perf ([680dad6](https://github.com/marko-js/marko/tree/master/packages/compiler/commit/680dad65dafdb4300d3f86ea2be6bb322ecd7de9))

# [5.0.0-next.30](https://github.com/marko-js/marko/tree/master/packages/compiler/compare/v5.0.0-next.29...v5.0.0-next.30) (2020-07-29)

**Note:** Version bump only for package @marko/compiler

# [5.0.0-next.29](https://github.com/marko-js/marko/tree/master/packages/compiler/compare/v5.0.0-next.28...v5.0.0-next.29) (2020-07-29)

**Note:** Version bump only for package @marko/compiler

# [5.0.0-next.28](https://github.com/marko-js/marko/tree/master/packages/compiler/compare/v5.0.0-next.27...v5.0.0-next.28) (2020-07-27)

### Bug Fixes

- **compiler:** false positive for concise mode dynamic tag error ([94c41ca](https://github.com/marko-js/marko/tree/master/packages/compiler/commit/94c41ca8f18dfcc50e1ecb23bdc25b3231e7b790))

# [5.0.0-next.27](https://github.com/marko-js/marko/tree/master/packages/compiler/compare/v5.0.0-next.26...v5.0.0-next.27) (2020-07-24)

### Bug Fixes

- **compiler:** make taglib entry more bundler friendly ([1e89380](https://github.com/marko-js/marko/tree/master/packages/compiler/commit/1e8938085a815b5d9485c3a38b7b643770566282))

# [5.0.0-next.26](https://github.com/marko-js/marko/tree/master/packages/compiler/compare/v5.0.0-next.25...v5.0.0-next.26) (2020-07-24)

### Bug Fixes

- load correct taglib utils based on env ([#1585](https://github.com/marko-js/marko/tree/master/packages/compiler/issues/1585)) ([af2bc2a](https://github.com/marko-js/marko/tree/master/packages/compiler/commit/af2bc2a11c45cab380e9698af2d1329b4d4eb8d6))

# [5.0.0-next.25](https://github.com/marko-js/marko/tree/master/packages/compiler/compare/v5.0.0-next.24...v5.0.0-next.25) (2020-07-23)

### Bug Fixes

- remove unecessary allExtensions api ([9a2c439](https://github.com/marko-js/marko/tree/master/packages/compiler/commit/9a2c439b740fd3431e2d07f3112a8dfe8c734d74))

# [5.0.0-next.24](https://github.com/marko-js/marko/tree/master/packages/compiler/compare/v5.0.0-next.23...v5.0.0-next.24) (2020-07-22)

### Features

- **compiler:** expose register taglib api ([#1583](https://github.com/marko-js/marko/tree/master/packages/compiler/issues/1583)) ([c45c082](https://github.com/marko-js/marko/tree/master/packages/compiler/commit/c45c082b8f4b4a3548271b4526231e22b6d24222))

# [5.0.0-next.23](https://github.com/marko-js/marko/tree/master/packages/compiler/compare/v5.0.0-next.22...v5.0.0-next.23) (2020-07-14)

**Note:** Version bump only for package @marko/compiler

# [5.0.0-next.22](https://github.com/marko-js/marko/tree/master/packages/compiler/compare/v5.0.0-next.21...v5.0.0-next.22) (2020-07-10)

**Note:** Version bump only for package @marko/compiler

# [5.0.0-next.21](https://github.com/marko-js/marko/tree/master/packages/compiler/compare/v5.0.0-next.20...v5.0.0-next.21) (2020-07-07)

### Features

- switch to storing marko meta on babels metadata ([ee6ad38](https://github.com/marko-js/marko/tree/master/packages/compiler/commit/ee6ad38d9f31fe1d1314350ddd011a39c6c2ab9a))

# [5.0.0-next.20](https://github.com/marko-js/marko/tree/master/packages/compiler/compare/v5.0.0-next.19...v5.0.0-next.20) (2020-07-07)

**Note:** Version bump only for package @marko/compiler

# [5.0.0-next.19](https://github.com/marko-js/marko/tree/master/packages/compiler/compare/v5.0.0-next.18...v5.0.0-next.19) (2020-07-06)

### Bug Fixes

- support manually registered taglibs ([9dc4d07](https://github.com/marko-js/marko/tree/master/packages/compiler/commit/9dc4d07d1bfe4bb1c898e16a28289f021917c75f))

# [5.0.0-next.18](https://github.com/marko-js/marko/tree/master/packages/compiler/compare/v5.0.0-next.17...v5.0.0-next.18) (2020-05-27)

### Bug Fixes

- **compiler:** modules override warning when compiled with webpack ([af28bac](https://github.com/marko-js/marko/tree/master/packages/compiler/commit/af28bac6f60b268c88ebe28ab7d74807487cf3b1))

# [5.0.0-next.17](https://github.com/marko-js/marko/tree/master/packages/compiler/compare/v5.0.0-next.16...v5.0.0-next.17) (2020-05-27)

### Bug Fixes

- additional taglib cleanup for website support ([f462d8a](https://github.com/marko-js/marko/tree/master/packages/compiler/commit/f462d8ad95c1d438561f028a7d2a79accccbe739))

# [5.0.0-next.16](https://github.com/marko-js/marko/tree/master/packages/compiler/compare/v5.0.0-next.15...v5.0.0-next.16) (2020-05-27)

### Features

- website compatibility fixes ([4390fd1](https://github.com/marko-js/marko/tree/master/packages/compiler/commit/4390fd1654d7b2753d2af899917ced7b3a395bc2))

# [5.0.0-next.15](https://github.com/marko-js/marko/tree/master/packages/compiler/compare/v5.0.0-next.14...v5.0.0-next.15) (2020-05-26)

### Features

- **compiler:** require passing custom translator directly ([b9d4c46](https://github.com/marko-js/marko/tree/master/packages/compiler/commit/b9d4c46ff3b6d3685c01f7b82e591f3f90d4c02b))

# [5.0.0-next.14](https://github.com/marko-js/marko/tree/master/packages/compiler/compare/v5.0.0-next.13...v5.0.0-next.14) (2020-05-26)

### Bug Fixes

- improve browser support for website ([#1574](https://github.com/marko-js/marko/tree/master/packages/compiler/issues/1574)) ([9df798a](https://github.com/marko-js/marko/tree/master/packages/compiler/commit/9df798af5e71b71881995b6e06a9fb1b30b6fac2))

# [5.0.0-next.13](https://github.com/marko-js/marko/tree/master/packages/compiler/compare/v5.0.0-next.12...v5.0.0-next.13) (2020-05-20)

### Bug Fixes

- **compiler:** ensure marko babel plugin not overwritten ([ac9a4c5](https://github.com/marko-js/marko/tree/master/packages/compiler/commit/ac9a4c58bdedd1cd3ce762e1b5ce744d77719e3c))
- **compiler:** regression causing marko plugin to not load ([a08b55a](https://github.com/marko-js/marko/tree/master/packages/compiler/commit/a08b55ac8d34f3031834dc76a7936ebb8964d01d))

# [5.0.0-next.12](https://github.com/marko-js/marko/tree/master/packages/compiler/compare/v5.0.0-next.11...v5.0.0-next.12) (2020-05-19)

**Note:** Version bump only for package @marko/compiler

# [5.0.0-next.11](https://github.com/marko-js/marko/tree/master/packages/compiler/compare/v5.0.0-next.10...v5.0.0-next.11) (2020-04-27)

**Note:** Version bump only for package @marko/compiler

# [5.0.0-next.10](https://github.com/marko-js/marko/tree/master/packages/compiler/compare/v5.0.0-next.9...v5.0.0-next.10) (2020-04-23)

**Note:** Version bump only for package @marko/compiler

# [5.0.0-next.9](https://github.com/marko-js/marko/tree/master/packages/compiler/compare/v5.0.0-next.8...v5.0.0-next.9) (2020-04-16)

**Note:** Version bump only for package @marko/compiler

# [5.0.0-next.8](https://github.com/marko-js/marko/tree/master/packages/compiler/compare/v5.0.0-next.7...v5.0.0-next.8) (2020-03-17)

**Note:** Version bump only for package @marko/compiler

# [5.0.0-next.7](https://github.com/marko-js/marko/tree/master/packages/compiler/compare/v5.0.0-next.6...v5.0.0-next.7) (2020-03-17)

**Note:** Version bump only for package @marko/compiler

# [5.0.0-next.6](https://github.com/marko-js/marko/tree/master/packages/compiler/compare/v5.0.0-next.5...v5.0.0-next.6) (2020-03-16)

### Bug Fixes

- make Marko a peerDependency ([2eac257](https://github.com/marko-js/marko/tree/master/packages/compiler/commit/2eac2572bec0986b2ac3903b1d43bef11d0bd437))

# [5.0.0-next.5](https://github.com/marko-js/marko/tree/master/packages/compiler/compare/v5.0.0-next.4...v5.0.0-next.5) (2020-02-26)

**Note:** Version bump only for package @marko/compiler

# [5.0.0-next.4](https://github.com/marko-js/marko/tree/master/packages/compiler/compare/v5.0.0-next.3...v5.0.0-next.4) (2020-02-25)

**Note:** Version bump only for package @marko/compiler

# [5.0.0-next.3](https://github.com/marko-js/marko/tree/master/packages/compiler/compare/v5.0.0-next.2...v5.0.0-next.3) (2020-02-25)

**Note:** Version bump only for package @marko/compiler

# [5.0.0-next.2](https://github.com/marko-js/marko/tree/master/packages/compiler/compare/v5.0.0-next.1...v5.0.0-next.2) (2020-02-25)

**Note:** Version bump only for package @marko/compiler

# [5.0.0-next.1](https://github.com/marko-js/marko/tree/master/packages/compiler/compare/v4.18.48...v5.0.0-next.1) (2020-02-25)

### Features

- import compiler from marko-js/x ([02670c8](https://github.com/marko-js/marko/tree/master/packages/compiler/commit/02670c86931396c52a5a03a7ae4fcef873297f60))

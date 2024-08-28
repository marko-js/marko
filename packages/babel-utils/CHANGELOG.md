# Change Log

## 6.5.5

### Patch Changes

- [#2284](https://github.com/marko-js/marko/pull/2284) [`d0723d3`](https://github.com/marko-js/marko/commit/d0723d398338d86b48524e230fe24d93d62ee19a) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Fix off by one issue for static statement sourcemaps (eg import) and for concise mode tags.

## 6.5.4

### Patch Changes

- [#2282](https://github.com/marko-js/marko/pull/2282) [`32e2eff`](https://github.com/marko-js/marko/commit/32e2eff5c3ecdcb36f7b6ed98ea2a1e705538a29) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Improve handling of sourcemaps for inline style blocks and tags.

## 6.5.3

### Patch Changes

- [#2277](https://github.com/marko-js/marko/pull/2277) [`ce88d81`](https://github.com/marko-js/marko/commit/ce88d8194f98b4010032634f5427021810f6acdb) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Fix "off by one" issue with source location information when the index was at the start of the line.

## 6.5.2

### Patch Changes

- [#2274](https://github.com/marko-js/marko/pull/2274) [`5cea7d6`](https://github.com/marko-js/marko/commit/5cea7d65ead9b58d7d7d244078d279d561fd3ea7) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Optimize javascript parsing helpers to pass in start line / column information to babel rather than faking it with whitespace.

  For large templates this can have a significant impact on parsing performance.

## 6.5.1

### Patch Changes

- [#2252](https://github.com/marko-js/marko/pull/2252) [`339c28d`](https://github.com/marko-js/marko/commit/339c28dd590dc15b6a1011f38411809060f1a4ba) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Allow diagnostic fixes in parse stage.

## 6.5.0

### Minor Changes

- [#2238](https://github.com/marko-js/marko/pull/2238) [`a741f36`](https://github.com/marko-js/marko/commit/a741f36e60583a2403a912627765c3ec2aa824e5) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Add new optimizedRegistryIds compiler option

## 6.4.3

### Patch Changes

- [#2190](https://github.com/marko-js/marko/pull/2190) [`638ca07`](https://github.com/marko-js/marko/commit/638ca07db382345c26f90247115eef13394e9905) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Update dependencies

## 6.4.2

### Patch Changes

- [#2164](https://github.com/marko-js/marko/pull/2164) [`08823b9`](https://github.com/marko-js/marko/commit/08823b916b0aca172edeaba86b632a4cf5462a8a) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Fix issue with interop translator not outputting correct hydrate entry code.

## 6.4.1

### Patch Changes

- [#2138](https://github.com/marko-js/marko/pull/2138) [`105c26b`](https://github.com/marko-js/marko/commit/105c26bd4f7f37bd6073e4795b01b83d31ecda06) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Fix issue with package json src/dist override script.

## 6.4.0

### Minor Changes

- [#2004](https://github.com/marko-js/marko/pull/2004) [`2704819`](https://github.com/marko-js/marko/commit/27048199d6a0ee48ed8118e9f7017a94c7dc4f3d) Thanks [@mlrawlings](https://github.com/mlrawlings)! - Release alpha of tags api translator/runtime.

- [#2004](https://github.com/marko-js/marko/pull/2004) [`2704819`](https://github.com/marko-js/marko/commit/27048199d6a0ee48ed8118e9f7017a94c7dc4f3d) Thanks [@mlrawlings](https://github.com/mlrawlings)! - Add `mount` api for client rendered components and expose `Symbol.asyncIterator` for server rendered components.

## 6.3.5

### Patch Changes

- [#2076](https://github.com/marko-js/marko/pull/2076) [`69b3ff5`](https://github.com/marko-js/marko/commit/69b3ff57c829418946e05c13b644a5560f589086) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Upgrade all package deps to latest

## 6.3.4

### Patch Changes

- [#2060](https://github.com/marko-js/marko/pull/2060) [`648a94928`](https://github.com/marko-js/marko/commit/648a94928f662b04634a61395d5d48a956a8ff36) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Expose meta data about which child Marko templates were analyzed for a given compilation.

## 6.3.3

### Patch Changes

- [#2054](https://github.com/marko-js/marko/pull/2054) [`1c5eccadf`](https://github.com/marko-js/marko/commit/1c5eccadf8d968552dbe8756905009107d783718) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Fix regression with @marko/babel-utils not exposing new parse helpers.

## 6.3.2

### Patch Changes

- [#2051](https://github.com/marko-js/marko/pull/2051) [`5354d4411`](https://github.com/marko-js/marko/commit/5354d44112c56fcbbd7f44dd3bf91be1e5a7747c) Thanks [@LuLaValva](https://github.com/LuLaValva)! - add ts to ast

## 6.3.1

### Patch Changes

- [#2008](https://github.com/marko-js/marko/pull/2008) [`1235cf700`](https://github.com/marko-js/marko/commit/1235cf7005447bdad7a84bacf20d40c7c457c03a) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Fix regression with static template literal expressions.

## 6.3.0

### Minor Changes

- [#2006](https://github.com/marko-js/marko/pull/2006) [`b2e70bc45`](https://github.com/marko-js/marko/commit/b2e70bc45006a8cccfa61ac99bbca40a71d05fd1) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Add compute node helper to replace babels `evaluate` helper. This helper is less aggressive and doesn't suffer from the false positives that popped up with babels version.

## 6.2.1

### Patch Changes

- [#2001](https://github.com/marko-js/marko/pull/2001) [`037a6ce67`](https://github.com/marko-js/marko/commit/037a6ce67088d63dcdc67a8b5bd02c10cf38b64e) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Improve some typings for the compiler apis.

## 6.2.0

### Minor Changes

- [#1996](https://github.com/marko-js/marko/pull/1996) [`d93037843`](https://github.com/marko-js/marko/commit/d930378434279451b0113ae6a268304063b037f4) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Move <macro> tag validation to the translate phase and expose new utilities for working with macros in @marko/babel-utils. This allows for migration/transformer/etc compiler hooks to better work with <macro>'s.

## 6.1.0

### Minor Changes

- [#1984](https://github.com/marko-js/marko/pull/1984) [`c6e2d0655`](https://github.com/marko-js/marko/commit/c6e2d06554166daa8eefe34121323413cf2d9cb1) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Allow migrator as a tag entry file.

## 6.0.0

### Major Changes

- [#1980](https://github.com/marko-js/marko/pull/1980) [`9d3b34eef`](https://github.com/marko-js/marko/commit/9d3b34eefa2d0d9f9b27b9635950360b62be2f1f) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Allow parse errors to be recovered from by migrations. This adds a new ast node type of MarkoParseError.
  MarkoParseError nodes can be removed during the migration stage to handle legacy syntaxes. Any MarkoParseError
  left in the AST at the end of the migration phase will throw an error similar to what it would have previously
  thrown synchronously.

  This also means that all parse errors can be surfaced as an aggregate error instead of bailing on the first
  parse error. When the compiler is ran with `errorRecovery: true` these errors become diagnostics instead of
  being thrown.

## 5.22.1

### Patch Changes

- [#1974](https://github.com/marko-js/marko/pull/1974) [`42f7b46e2`](https://github.com/marko-js/marko/commit/42f7b46e25168ef4998e9c3f6014f9b6e1234486) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Run migration fixes synchronously.

## 5.22.0

### Minor Changes

- [#1968](https://github.com/marko-js/marko/pull/1968) [`70922e68e`](https://github.com/marko-js/marko/commit/70922e68e07578a867fff846e9bb623d64298e14) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Add support for additional diagnostics emitted from the compiler.

## 5.21.4

### Patch Changes

- [`d920e833d`](https://github.com/marko-js/marko/commit/d920e833df0b58456f28f7cb45ebd38b56c05ba7) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Add missing type definition for taglib.

## 5.21.3

### Patch Changes

- [#1845](https://github.com/marko-js/marko/pull/1845) [`65bab8e6d`](https://github.com/marko-js/marko/commit/65bab8e6df02e6fd485a45d9a9c2200545f21479) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Fix issue where Marko runtime was being incorrectly matched when swapping from dev to prod runtimes.

## 5.21.2

### Patch Changes

- [#1820](https://github.com/marko-js/marko/pull/1820) [`0a207fbf1`](https://github.com/marko-js/marko/commit/0a207fbf1515fcd6d4045b527c9eb16babb96032) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Fix issue with child template analysis not properly resolving nested node_modules with components.

## 5.21.1

### Patch Changes

- [#1792](https://github.com/marko-js/marko/pull/1792) [`c9107ea7f`](https://github.com/marko-js/marko/commit/c9107ea7f6fc69df10700114fe35b7b494414194) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Fix broken previous release where the "main" field for package.json files was not correctly updated when published

## 5.21.0

### Minor Changes

- [#1787](https://github.com/marko-js/marko/pull/1787) [`dd9009d66`](https://github.com/marko-js/marko/commit/dd9009d665f4f660d106aa0c3364e34ca3561abc) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Upgrades the compiler to use the latest major release of `htmljs-parser` bringing in the improvements listed here:
  https://github.com/marko-js/htmljs-parser/pull/93

## [5.20.9](https://github.com/marko-js/marko/compare/v5.20.8...v5.20.9) (2022-04-27)

**Note:** Version bump only for package @marko/babel-utils

## [5.20.8](https://github.com/marko-js/marko/compare/v5.20.7...v5.20.8) (2022-04-26)

**Note:** Version bump only for package @marko/babel-utils

## [5.20.7](https://github.com/marko-js/marko/compare/v5.20.6...v5.20.7) (2022-04-26)

**Note:** Version bump only for package @marko/babel-utils

## [5.20.6](https://github.com/marko-js/marko/compare/v5.20.5...v5.20.6) (2022-04-25)

**Note:** Version bump only for package @marko/babel-utils

## [5.20.5](https://github.com/marko-js/marko/compare/v5.20.4...v5.20.5) (2022-04-15)

**Note:** Version bump only for package @marko/babel-utils

## [5.20.4](https://github.com/marko-js/marko/compare/v5.20.3...v5.20.4) (2022-04-11)

**Note:** Version bump only for package @marko/babel-utils

## [5.20.3](https://github.com/marko-js/marko/compare/v5.20.2...v5.20.3) (2022-03-24)

**Note:** Version bump only for package @marko/babel-utils

## [5.20.2](https://github.com/marko-js/marko/compare/v5.20.1...v5.20.2) (2022-03-23)

### Bug Fixes

- **babel-utils:** missing prop types on TagDefinition ([5d8abd5](https://github.com/marko-js/marko/commit/5d8abd53d8fc87e16cf69abe0b0a596606023268))

# [5.20.0](https://github.com/marko-js/marko/compare/v5.19.3...v5.20.0) (2022-03-11)

### Features

- relative import normalization now works better with node_modules ([#1779](https://github.com/marko-js/marko/issues/1779)) ([db2539a](https://github.com/marko-js/marko/commit/db2539ab8fa1a87c68fd44b2ca4bc6cf8452a76a))

## [5.19.1](https://github.com/marko-js/marko/compare/v5.19.0...v5.19.1) (2022-01-28)

### Bug Fixes

- **babel-utils:** improve plugin types ([ff0e5c6](https://github.com/marko-js/marko/commit/ff0e5c6b1f2ec4daa64d1909b1e3aefa61e48063))

# [5.19.0](https://github.com/marko-js/marko/compare/v5.18.2...v5.19.0) (2022-01-28)

### Features

- support analyze field in marko.json ([#1769](https://github.com/marko-js/marko/issues/1769)) ([981f7f3](https://github.com/marko-js/marko/commit/981f7f39f932533178c538f8fc2788ea6f93d909))

## [5.18.2](https://github.com/marko-js/marko/compare/v5.18.1...v5.18.2) (2022-01-25)

**Note:** Version bump only for package @marko/babel-utils

## [5.17.10](https://github.com/marko-js/marko/compare/v5.17.9...v5.17.10) (2022-01-14)

**Note:** Version bump only for package @marko/babel-utils

## [5.17.4](https://github.com/marko-js/marko/compare/v5.17.3...v5.17.4) (2021-11-17)

**Note:** Version bump only for package @marko/babel-utils

## [5.17.3](https://github.com/marko-js/marko/compare/v5.17.2...v5.17.3) (2021-10-30)

### Bug Fixes

- upgrade babel deps & fix builder regression ([91b3c58](https://github.com/marko-js/marko/commit/91b3c5855923adb64ab30677729e2d0404245846))

## [5.16.1](https://github.com/marko-js/marko/compare/v5.16.0...v5.16.1) (2021-10-22)

**Note:** Version bump only for package @marko/babel-utils

# [5.16.0](https://github.com/marko-js/marko/compare/v5.15.12...v5.16.0) (2021-10-11)

**Note:** Version bump only for package @marko/babel-utils

## [5.15.11](https://github.com/marko-js/marko/compare/v5.15.10...v5.15.11) (2021-09-29)

### Bug Fixes

- normalize file opts similar to babel ([86310e6](https://github.com/marko-js/marko/commit/86310e603985ed96cba523fb07e25a0852cff8e6))

## [5.15.9](https://github.com/marko-js/marko/compare/v5.15.8...v5.15.9) (2021-09-05)

**Note:** Version bump only for package @marko/babel-utils

## [5.15.8](https://github.com/marko-js/marko/compare/v5.15.7...v5.15.8) (2021-09-05)

### Bug Fixes

- consistent file.opts during parse & other stages ([ff07ead](https://github.com/marko-js/marko/commit/ff07eadde29ace7aaf4323d11f78c892fdc8f0ed))

## [5.15.7](https://github.com/marko-js/marko/compare/v5.15.6...v5.15.7) (2021-09-03)

**Note:** Version bump only for package @marko/babel-utils

## [5.15.6](https://github.com/marko-js/marko/compare/v5.15.5...v5.15.6) (2021-09-03)

**Note:** Version bump only for package @marko/babel-utils

## [5.15.4](https://github.com/marko-js/marko/tree/master/packages/babel-utils/compare/v5.15.3...v5.15.4) (2021-08-07)

**Note:** Version bump only for package @marko/babel-utils

## [5.15.3](https://github.com/marko-js/marko/tree/master/packages/babel-utils/compare/v5.15.2...v5.15.3) (2021-08-06)

### Bug Fixes

- **babel-utils:** ensure relative paths when using import utils ([9d5ef81](https://github.com/marko-js/marko/tree/master/packages/babel-utils/commit/9d5ef81e0bdb0e4fbad5370ff3d2eaeeedf5e413))

## [5.15.2](https://github.com/marko-js/marko/tree/master/packages/babel-utils/compare/v5.15.1...v5.15.2) (2021-08-06)

**Note:** Version bump only for package @marko/babel-utils

# [5.15.0](https://github.com/marko-js/marko/tree/master/packages/babel-utils/compare/v5.14.2...v5.15.0) (2021-07-28)

**Note:** Version bump only for package @marko/babel-utils

## [5.14.2](https://github.com/marko-js/marko/tree/master/packages/babel-utils/compare/v5.14.1...v5.14.2) (2021-07-28)

**Note:** Version bump only for package @marko/babel-utils

## [5.14.1](https://github.com/marko-js/marko/tree/master/packages/babel-utils/compare/v5.14.0...v5.14.1) (2021-07-26)

**Note:** Version bump only for package @marko/babel-utils

# [5.14.0](https://github.com/marko-js/marko/tree/master/packages/babel-utils/compare/v5.13.0...v5.14.0) (2021-07-24)

**Note:** Version bump only for package @marko/babel-utils

# [5.13.0](https://github.com/marko-js/marko/tree/master/packages/babel-utils/compare/v5.12.1...v5.13.0) (2021-07-23)

**Note:** Version bump only for package @marko/babel-utils

## [5.12.1](https://github.com/marko-js/marko/tree/master/packages/babel-utils/compare/v5.12.0...v5.12.1) (2021-07-21)

**Note:** Version bump only for package @marko/babel-utils

## [5.11.2](https://github.com/marko-js/marko/tree/master/packages/babel-utils/compare/v5.11.1...v5.11.2) (2021-07-07)

**Note:** Version bump only for package @marko/babel-utils

## [5.11.1](https://github.com/marko-js/marko/tree/master/packages/babel-utils/compare/v5.11.0...v5.11.1) (2021-07-07)

**Note:** Version bump only for package @marko/babel-utils

# [5.11.0](https://github.com/marko-js/marko/tree/master/packages/babel-utils/compare/v5.10.7...v5.11.0) (2021-07-07)

**Note:** Version bump only for package @marko/babel-utils

## [5.10.7](https://github.com/marko-js/marko/tree/master/packages/babel-utils/compare/v5.10.6...v5.10.7) (2021-06-23)

**Note:** Version bump only for package @marko/babel-utils

## [5.10.5](https://github.com/marko-js/marko/tree/master/packages/babel-utils/compare/v5.10.4...v5.10.5) (2021-06-08)

**Note:** Version bump only for package @marko/babel-utils

## [5.10.2](https://github.com/marko-js/marko/tree/master/packages/babel-utils/compare/v5.10.1...v5.10.2) (2021-05-04)

**Note:** Version bump only for package @marko/babel-utils

## [5.10.1](https://github.com/marko-js/marko/tree/master/packages/babel-utils/compare/v5.10.0...v5.10.1) (2021-05-04)

**Note:** Version bump only for package @marko/babel-utils

# [5.10.0](https://github.com/marko-js/marko/tree/master/packages/babel-utils/compare/v5.9.0...v5.10.0) (2021-04-30)

**Note:** Version bump only for package @marko/babel-utils

# [5.9.0](https://github.com/marko-js/marko/tree/master/packages/babel-utils/compare/v5.8.4...v5.9.0) (2021-04-21)

### Bug Fixes

- **babel-utils:** invalid type for importNamed api ([3da1044](https://github.com/marko-js/marko/tree/master/packages/babel-utils/commit/3da10447d3ca8ff2a3376aa17b04116bcdec66c2))

## [5.8.1](https://github.com/marko-js/marko/tree/master/packages/babel-utils/compare/v5.8.0...v5.8.1) (2021-04-16)

**Note:** Version bump only for package @marko/babel-utils

# [5.8.0](https://github.com/marko-js/marko/tree/master/packages/babel-utils/compare/v5.7.0...v5.8.0) (2021-04-16)

**Note:** Version bump only for package @marko/babel-utils

# [5.7.0](https://github.com/marko-js/marko/tree/master/packages/babel-utils/compare/v5.6.2...v5.7.0) (2021-04-07)

**Note:** Version bump only for package @marko/babel-utils

## [5.6.1](https://github.com/marko-js/marko/tree/master/packages/babel-utils/compare/v5.6.0...v5.6.1) (2021-03-27)

### Bug Fixes

- **babel-utils:** issue with child template analysis in node_modules ([f2133bc](https://github.com/marko-js/marko/tree/master/packages/babel-utils/commit/f2133bcd19917cb04b27382ffccd8d708ac98960))

# [5.6.0](https://github.com/marko-js/marko/tree/master/packages/babel-utils/compare/v5.5.4...v5.6.0) (2021-03-27)

### Bug Fixes

- withLoc type def ([bd77eb8](https://github.com/marko-js/marko/tree/master/packages/babel-utils/commit/bd77eb886849da44705de38766f5127373389937))

## [5.5.2](https://github.com/marko-js/marko/tree/master/packages/babel-utils/compare/v5.5.1...v5.5.2) (2021-03-19)

**Note:** Version bump only for package @marko/babel-utils

## [5.5.1](https://github.com/marko-js/marko/tree/master/packages/babel-utils/compare/v5.5.0...v5.5.1) (2021-03-18)

**Note:** Version bump only for package @marko/babel-utils

# [5.5.0](https://github.com/marko-js/marko/tree/master/packages/babel-utils/compare/v5.4.2...v5.5.0) (2021-03-18)

### Features

- add hydrate option ([#1673](https://github.com/marko-js/marko/tree/master/packages/babel-utils/issues/1673)) ([a4e7013](https://github.com/marko-js/marko/tree/master/packages/babel-utils/commit/a4e701355efcd93971eb46988f5e990f4517796f))

## [5.4.2](https://github.com/marko-js/marko/tree/master/packages/babel-utils/compare/v5.4.1...v5.4.2) (2021-03-10)

### Bug Fixes

- **babel-utils:** loadFileForImport not fully resolving file ([f0cd452](https://github.com/marko-js/marko/tree/master/packages/babel-utils/commit/f0cd4520cbf02507c765ce6aec026952c06af3b3))

## [5.4.1](https://github.com/marko-js/marko/tree/master/packages/babel-utils/compare/v5.4.0...v5.4.1) (2021-03-10)

### Bug Fixes

- **babel-utils:** add missing export ([5e8fa9f](https://github.com/marko-js/marko/tree/master/packages/babel-utils/commit/5e8fa9f474e0a0f9185b814245c0794cebecabee))

# [5.4.0](https://github.com/marko-js/marko/tree/master/packages/babel-utils/compare/v5.3.0...v5.4.0) (2021-03-10)

### Features

- **babel-utils:** add api for analyzing template by import path ([7efc2ab](https://github.com/marko-js/marko/tree/master/packages/babel-utils/commit/7efc2abb1b6243920e930646c3a5e7e058029967))

## [5.2.2](https://github.com/marko-js/marko/tree/master/packages/babel-utils/compare/v5.2.1...v5.2.2) (2021-03-01)

**Note:** Version bump only for package @marko/babel-utils

## [5.2.1](https://github.com/marko-js/marko/tree/master/packages/babel-utils/compare/v5.2.0...v5.2.1) (2021-03-01)

**Note:** Version bump only for package @marko/babel-utils

# [5.2.0](https://github.com/marko-js/marko/tree/master/packages/babel-utils/compare/v5.1.21...v5.2.0) (2021-03-01)

**Note:** Version bump only for package @marko/babel-utils

## [5.1.21](https://github.com/marko-js/marko/tree/master/packages/babel-utils/compare/v5.1.20...v5.1.21) (2021-03-01)

### Bug Fixes

- **babel-utils:** update type definitions ([b3446b7](https://github.com/marko-js/marko/tree/master/packages/babel-utils/commit/b3446b740b62af2f956be4030b656d16bf050f1b))

## [5.1.19](https://github.com/marko-js/marko/tree/master/packages/babel-utils/compare/v5.1.18...v5.1.19) (2021-02-26)

### Bug Fixes

- move @marko/babel-types into compiler ([5369a63](https://github.com/marko-js/marko/tree/master/packages/babel-utils/commit/5369a63e0ce66c422981893525ff6c9bcbd461dd))

## [5.1.10](https://github.com/marko-js/marko/tree/master/packages/babel-utils/compare/v5.1.9...v5.1.10) (2021-02-05)

### Bug Fixes

- add else-if to transparent tags ([#1657](https://github.com/marko-js/marko/tree/master/packages/babel-utils/issues/1657)) ([7c14bdf](https://github.com/marko-js/marko/tree/master/packages/babel-utils/commit/7c14bdf5536eb8df8831624a4996de8b6970d184))

## [5.1.1](https://github.com/marko-js/marko/tree/master/packages/babel-utils/compare/v5.1.0...v5.1.1) (2021-01-26)

**Note:** Version bump only for package @marko/babel-utils

# [5.1.0](https://github.com/marko-js/marko/tree/master/packages/babel-utils/compare/v5.0.0-next.82...v5.1.0) (2021-01-26)

### Bug Fixes

- **babel-utils:** improve website compatability ([c122c08](https://github.com/marko-js/marko/tree/master/packages/babel-utils/commit/c122c08d92ab4a9e98ef49e27292bb3610fb3ade))
- importing some Marko files properly includes meta ([d67bac5](https://github.com/marko-js/marko/tree/master/packages/babel-utils/commit/d67bac58183f46679212bbd2773adc36566cbc92))

### Features

- no longer publish as 'next' dist-tag ([8113e25](https://github.com/marko-js/marko/tree/master/packages/babel-utils/commit/8113e250d823000810d0fa13d76efc4cc69f4ad1))

# [5.0.0-next.80](https://github.com/marko-js/marko/tree/master/packages/babel-utils/compare/v5.0.0-next.79...v5.0.0-next.80) (2021-01-19)

### Bug Fixes

- src to dist translations in some cases ([60772b7](https://github.com/marko-js/marko/tree/master/packages/babel-utils/commit/60772b7098b3f832ad620d43d965664167b5a035))

# [5.0.0-next.79](https://github.com/marko-js/marko/tree/master/packages/babel-utils/compare/v5.0.0-next.78...v5.0.0-next.79) (2021-01-19)

### Bug Fixes

- resolve dist runtime when optimized ([261de89](https://github.com/marko-js/marko/tree/master/packages/babel-utils/commit/261de89672c3089212b5cef1722daf90281cee4d))

# [5.0.0-next.78](https://github.com/marko-js/marko/tree/master/packages/babel-utils/compare/v5.0.0-next.77...v5.0.0-next.78) (2021-01-19)

### Bug Fixes

- webpack's file system not converting buffer properly ([#1649](https://github.com/marko-js/marko/tree/master/packages/babel-utils/issues/1649)) ([1cd24b6](https://github.com/marko-js/marko/tree/master/packages/babel-utils/commit/1cd24b68c9dae62d53a681f48a0cf61e9b8e8aed))

# [5.0.0-next.72](https://github.com/marko-js/marko/tree/master/packages/babel-utils/compare/v5.0.0-next.71...v5.0.0-next.72) (2021-01-13)

### Bug Fixes

- **babel-utils:** resolve node_module templates to relative paths ([#1645](https://github.com/marko-js/marko/tree/master/packages/babel-utils/issues/1645)) ([db4232e](https://github.com/marko-js/marko/tree/master/packages/babel-utils/commit/db4232e1e2244b1b244fc9dfd62f928a7b482a1e))

# [5.0.0-next.71](https://github.com/marko-js/marko/tree/master/packages/babel-utils/compare/v5.0.0-next.70...v5.0.0-next.71) (2021-01-12)

### Features

- move tag param ast to MarkoTagBody ([02c1e29](https://github.com/marko-js/marko/tree/master/packages/babel-utils/commit/02c1e29426b7995d869ab8a9fd1f8dd6dccaeca5))

# [5.0.0-next.68](https://github.com/marko-js/marko/tree/master/packages/babel-utils/compare/v5.0.0-next.67...v5.0.0-next.68) (2020-12-11)

### Features

- **babel-utils:** expose import and id utils ([#1636](https://github.com/marko-js/marko/tree/master/packages/babel-utils/issues/1636)) ([644e4d8](https://github.com/marko-js/marko/tree/master/packages/babel-utils/commit/644e4d8756c2260a1e2d28374a31a67552414179))

# [5.0.0-next.67](https://github.com/marko-js/marko/tree/master/packages/babel-utils/compare/v5.0.0-next.66...v5.0.0-next.67) (2020-12-09)

**Note:** Version bump only for package @marko/babel-utils

# [5.0.0-next.64](https://github.com/marko-js/marko/tree/master/packages/babel-utils/compare/v5.0.0-next.63...v5.0.0-next.64) (2020-12-02)

**Note:** Version bump only for package @marko/babel-utils

# [5.0.0-next.62](https://github.com/marko-js/marko/tree/master/packages/babel-utils/compare/v5.0.0-next.61...v5.0.0-next.62) (2020-12-01)

**Note:** Version bump only for package @marko/babel-utils

# [5.0.0-next.61](https://github.com/marko-js/marko/tree/master/packages/babel-utils/compare/v5.0.0-next.60...v5.0.0-next.61) (2020-12-01)

### Bug Fixes

- **babel-utils:** typo in types ([3d40fc2](https://github.com/marko-js/marko/tree/master/packages/babel-utils/commit/3d40fc24fd19ffdd08a403186f0fba8dc7f4ea1f))

# [5.0.0-next.60](https://github.com/marko-js/marko/tree/master/packages/babel-utils/compare/v5.0.0-next.59...v5.0.0-next.60) (2020-11-22)

**Note:** Version bump only for package @marko/babel-utils

# [5.0.0-next.59](https://github.com/marko-js/marko/tree/master/packages/babel-utils/compare/v5.0.0-next.58...v5.0.0-next.59) (2020-11-21)

### Bug Fixes

- **babel-utils:** missing type ([2b7f619](https://github.com/marko-js/marko/tree/master/packages/babel-utils/commit/2b7f6199ec688f4ea37a07caa53a88ac1ba891c3))

# [5.0.0-next.57](https://github.com/marko-js/marko/tree/master/packages/babel-utils/compare/v5.0.0-next.56...v5.0.0-next.57) (2020-11-20)

### Features

- add parser support for tag variables ([#1630](https://github.com/marko-js/marko/tree/master/packages/babel-utils/issues/1630)) ([43c4433](https://github.com/marko-js/marko/tree/master/packages/babel-utils/commit/43c4433cb026f7eace199203e15d1050a53dc35d))

# [5.0.0-next.55](https://github.com/marko-js/marko/tree/master/packages/babel-utils/compare/v5.0.0-next.54...v5.0.0-next.55) (2020-11-19)

### Bug Fixes

- babel-utils doesnt depend on compiler ([c429ffb](https://github.com/marko-js/marko/tree/master/packages/babel-utils/commit/c429ffb0aa4e79210b881d089a3db19d272a750d))

# [5.0.0-next.54](https://github.com/marko-js/marko/tree/master/packages/babel-utils/compare/v5.0.0-next.53...v5.0.0-next.54) (2020-11-17)

**Note:** Version bump only for package @marko/babel-utils

# [5.0.0-next.53](https://github.com/marko-js/marko/tree/master/packages/babel-utils/compare/v5.0.0-next.52...v5.0.0-next.53) (2020-11-17)

### Features

- **babel-utils:** expose taglib types ([1d6ccb9](https://github.com/marko-js/marko/tree/master/packages/babel-utils/commit/1d6ccb983da6cbbde4c837a1fc594ab3e67fb072))

# [5.0.0-next.52](https://github.com/marko-js/marko/tree/master/packages/babel-utils/compare/v5.0.0-next.51...v5.0.0-next.52) (2020-11-12)

**Note:** Version bump only for package @marko/babel-utils

# [5.0.0-next.51](https://github.com/marko-js/marko/tree/master/packages/babel-utils/compare/v5.0.0-next.50...v5.0.0-next.51) (2020-11-11)

### Features

- **babel-utils:** add basic types ([61900a0](https://github.com/marko-js/marko/tree/master/packages/babel-utils/commit/61900a0d1150b9c4e520f5916086143bd84484fb))
- cached compilations, nested tag analysis ([74d5f10](https://github.com/marko-js/marko/tree/master/packages/babel-utils/commit/74d5f104b8f35178c399ab5c3514c33f8b63cdf0))

# [5.0.0-next.50](https://github.com/marko-js/marko/tree/master/packages/babel-utils/compare/v5.0.0-next.49...v5.0.0-next.50) (2020-10-12)

### Bug Fixes

- dynamic tag html attr normalize ([bae4a3d](https://github.com/marko-js/marko/tree/master/packages/babel-utils/commit/bae4a3d388412e387514ce11416f4e6cbddecd28))

# [5.0.0-next.49](https://github.com/marko-js/marko/tree/master/packages/babel-utils/compare/v5.0.0-next.48...v5.0.0-next.49) (2020-09-28)

**Note:** Version bump only for package @marko/babel-utils

# [5.0.0-next.39](https://github.com/marko-js/marko/tree/master/packages/babel-utils/compare/v5.0.0-next.38...v5.0.0-next.39) (2020-08-10)

**Note:** Version bump only for package @marko/babel-utils

# [5.0.0-next.36](https://github.com/marko-js/marko/tree/master/packages/babel-utils/compare/v5.0.0-next.35...v5.0.0-next.36) (2020-08-05)

### Features

- expose watch file meta data ([#1591](https://github.com/marko-js/marko/tree/master/packages/babel-utils/issues/1591)) ([f14e46a](https://github.com/marko-js/marko/tree/master/packages/babel-utils/commit/f14e46a1f3ddd01f659a0f86678773fb12a7f1a5))

# [5.0.0-next.31](https://github.com/marko-js/marko/tree/master/packages/babel-utils/compare/v5.0.0-next.30...v5.0.0-next.31) (2020-07-31)

### Features

- improve index position to line, column perf ([680dad6](https://github.com/marko-js/marko/tree/master/packages/babel-utils/commit/680dad65dafdb4300d3f86ea2be6bb322ecd7de9))

# [5.0.0-next.20](https://github.com/marko-js/marko/tree/master/packages/babel-utils/compare/v5.0.0-next.19...v5.0.0-next.20) (2020-07-07)

**Note:** Version bump only for package @marko/babel-utils

# [5.0.0-next.2](https://github.com/marko-js/marko/tree/master/packages/babel-utils/compare/v5.0.0-next.1...v5.0.0-next.2) (2020-02-25)

**Note:** Version bump only for package @marko/babel-utils

# [5.0.0-next.1](https://github.com/marko-js/marko/tree/master/packages/babel-utils/compare/v4.18.48...v5.0.0-next.1) (2020-02-25)

### Features

- import compiler from marko-js/x ([02670c8](https://github.com/marko-js/marko/tree/master/packages/babel-utils/commit/02670c86931396c52a5a03a7ae4fcef873297f60))

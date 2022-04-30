# Change Log

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

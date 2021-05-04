# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

## [5.10.2](https://github.com/marko-js/marko/compare/v5.10.1...v5.10.2) (2021-05-04)


### Bug Fixes

* **compiler:** var name typo ([8aaf910](https://github.com/marko-js/marko/commit/8aaf9105323587fae4f40dd69a2497f114a867c5))





## [5.10.1](https://github.com/marko-js/marko/compare/v5.10.0...v5.10.1) (2021-05-04)


### Bug Fixes

* **compiler:** issue with undefined added to watchFiles ([4704b62](https://github.com/marko-js/marko/commit/4704b62a81165856a803b2155946b4d143d58287))





# [5.10.0](https://github.com/marko-js/marko/compare/v5.9.0...v5.10.0) (2021-04-30)


### Features

* **marko:** leverage new runtime api for node-require hook ([67fb144](https://github.com/marko-js/marko/commit/67fb144c5c1c662b6fd89b1d52c420988f36365a))
* add new HMR runtime ([a873762](https://github.com/marko-js/marko/commit/a87376299952c8f9fc5c3d467c571acc0956bfb3))





# [5.9.0](https://github.com/marko-js/marko/compare/v5.8.4...v5.9.0) (2021-04-21)


### Bug Fixes

* **babel-utils:** invalid type for importNamed api ([3da1044](https://github.com/marko-js/marko/commit/3da10447d3ca8ff2a3376aa17b04116bcdec66c2))


### Features

* expose api to get runtime entry files for translator ([#1687](https://github.com/marko-js/marko/issues/1687)) ([fad9159](https://github.com/marko-js/marko/commit/fad91598b28f3ab6e8e3550e42c50d062ea41ad9))





## [5.8.4](https://github.com/marko-js/marko/compare/v5.8.3...v5.8.4) (2021-04-19)


### Bug Fixes

* **translator-default:** ignore browser.json with resolveVirtualDependency api ([b101623](https://github.com/marko-js/marko/commit/b101623d7a46a5c0fa497998530fd14b93497433))





## [5.8.3](https://github.com/marko-js/marko/compare/v5.8.2...v5.8.3) (2021-04-18)


### Bug Fixes

* **translator-default:** resolve correct production paths with hydrate output ([33302ef](https://github.com/marko-js/marko/commit/33302ef30c9f362ef5029384f3f54d881c517881))





## [5.8.2](https://github.com/marko-js/marko/compare/v5.8.1...v5.8.2) (2021-04-18)


### Bug Fixes

* **translator-default:** hydrate mode watchFiles missing stateless component, css source map content ([c0da831](https://github.com/marko-js/marko/commit/c0da831860dae704d2912833b94a4a9ad343fed0))





## [5.8.1](https://github.com/marko-js/marko/compare/v5.8.0...v5.8.1) (2021-04-16)


### Bug Fixes

* **compiler:** add missing config type definition ([7437e88](https://github.com/marko-js/marko/commit/7437e888b7cbd3c7f8ed5ae164d959d8c0d7eb04))





# [5.8.0](https://github.com/marko-js/marko/compare/v5.7.0...v5.8.0) (2021-04-16)


### Bug Fixes

* remove unecessary windows path normalization ([6d1a4f5](https://github.com/marko-js/marko/commit/6d1a4f556400adf8a1a9161212e4c516ac9ce8e5))


### Features

* add new hydrateIncludeImports option ([#1686](https://github.com/marko-js/marko/issues/1686)) ([db84f91](https://github.com/marko-js/marko/commit/db84f913b47e4372c84c09a34ca8529b646b7869))





# [5.7.0](https://github.com/marko-js/marko/compare/v5.6.2...v5.7.0) (2021-04-07)


### Bug Fixes

* typescript types ([#1684](https://github.com/marko-js/marko/issues/1684)) ([5f950c8](https://github.com/marko-js/marko/commit/5f950c80664431445301f64e206bda92daa939de))
* **translator-default:** issue with inline sourcmeaps and virtual files ([94ce0e1](https://github.com/marko-js/marko/commit/94ce0e136492294760d6a016c719e09c813f59f1))


### Features

* **compiler:** use default translator for buildLookup api ([#1682](https://github.com/marko-js/marko/issues/1682)) ([0899847](https://github.com/marko-js/marko/commit/0899847ea80dc65d6d8b80114f7caaf77cadccf5))





## [5.6.2](https://github.com/marko-js/marko/compare/v5.6.1...v5.6.2) (2021-03-30)


### Bug Fixes

* **translator-default:** some bundlers not supporting hoisted imports ([0233d04](https://github.com/marko-js/marko/commit/0233d042206233ebaaf2ee551b8a926589c7f02f))





## [5.6.1](https://github.com/marko-js/marko/compare/v5.6.0...v5.6.1) (2021-03-27)


### Bug Fixes

* **babel-utils:** issue with child template analysis in node_modules ([f2133bc](https://github.com/marko-js/marko/commit/f2133bcd19917cb04b27382ffccd8d708ac98960))





# [5.6.0](https://github.com/marko-js/marko/compare/v5.5.4...v5.6.0) (2021-03-27)


### Bug Fixes

* withLoc type def ([bd77eb8](https://github.com/marko-js/marko/commit/bd77eb886849da44705de38766f5127373389937))


### Features

* flush_here_and_after tag ([#1681](https://github.com/marko-js/marko/issues/1681)) ([9d01322](https://github.com/marko-js/marko/commit/9d0132281a89b804fe847e98f915aab951ba78a7))





## [5.5.4](https://github.com/marko-js/marko/compare/v5.5.3...v5.5.4) (2021-03-22)


### Bug Fixes

* resolveVirtualDependency typo ([be762ee](https://github.com/marko-js/marko/commit/be762ee84f3c10160bcf7bb253f6f9c9e68bd3ce))





## [5.5.3](https://github.com/marko-js/marko/compare/v5.5.2...v5.5.3) (2021-03-22)


### Bug Fixes

* **translator-default:** hydration mismatch with conditional dynamic tag ([91d3ee6](https://github.com/marko-js/marko/commit/91d3ee66b2df589e3e42afb9c534b5f94a6fa6bb))





## [5.5.2](https://github.com/marko-js/marko/compare/v5.5.1...v5.5.2) (2021-03-19)


### Bug Fixes

* cast result of readFile to string ([#1679](https://github.com/marko-js/marko/issues/1679)) ([501a7fb](https://github.com/marko-js/marko/commit/501a7fbfbe9e12869fd685f1e5c8ee4417da816d))





## [5.5.1](https://github.com/marko-js/marko/compare/v5.5.0...v5.5.1) (2021-03-18)


### Bug Fixes

* **compiler:** type definitions had incorrect path ([f7d4eb9](https://github.com/marko-js/marko/commit/f7d4eb981e80f87394ab64976e5f31156f80a408))





# [5.5.0](https://github.com/marko-js/marko/compare/v5.4.2...v5.5.0) (2021-03-18)


### Bug Fixes

* **compiler:** use provided FS for taglib building ([#1674](https://github.com/marko-js/marko/issues/1674)) ([edb570e](https://github.com/marko-js/marko/commit/edb570eda4b3d544795536bf81613f6c97c9859a))
* **marko:** issue with async hydrate after final flush ([#1677](https://github.com/marko-js/marko/issues/1677)) ([f2fbaa6](https://github.com/marko-js/marko/commit/f2fbaa6de25c9f6bc2f85a0df6deac057c25b3bd))
* babel-types type definiton build script ([76f1cd9](https://github.com/marko-js/marko/commit/76f1cd95a7942880e30fb44df0a451b43da64e54))
* correct Marko debug mode for ci tests ([031ca0d](https://github.com/marko-js/marko/commit/031ca0d93fa77a3405b95467e7a98f2c5a8120de))


### Features

* add hydrate option ([#1673](https://github.com/marko-js/marko/issues/1673)) ([a4e7013](https://github.com/marko-js/marko/commit/a4e701355efcd93971eb46988f5e990f4517796f))





## [5.4.2](https://github.com/marko-js/marko/compare/v5.4.1...v5.4.2) (2021-03-10)


### Bug Fixes

* **babel-utils:** loadFileForImport not fully resolving file ([f0cd452](https://github.com/marko-js/marko/commit/f0cd4520cbf02507c765ce6aec026952c06af3b3))





## [5.4.1](https://github.com/marko-js/marko/compare/v5.4.0...v5.4.1) (2021-03-10)


### Bug Fixes

* **babel-utils:** add missing export ([5e8fa9f](https://github.com/marko-js/marko/commit/5e8fa9f474e0a0f9185b814245c0794cebecabee))





# [5.4.0](https://github.com/marko-js/marko/compare/v5.3.0...v5.4.0) (2021-03-10)


### Features

* **babel-utils:** add api for analyzing template by import path ([7efc2ab](https://github.com/marko-js/marko/commit/7efc2abb1b6243920e930646c3a5e7e058029967))





# [5.3.0](https://github.com/marko-js/marko/compare/v5.2.4...v5.3.0) (2021-03-08)


### Features

* **marko:** support lazy loading hydrated components ([7e14181](https://github.com/marko-js/marko/commit/7e14181d0d01977745eb5fb551aa0068b462aae7))





## [5.2.4](https://github.com/marko-js/marko/compare/v5.2.3...v5.2.4) (2021-03-08)


### Bug Fixes

* **marko:** issue with delegating events from text nodes ([787578e](https://github.com/marko-js/marko/commit/787578ed60b15cf3b8abfc65b2f24c0418c7a442))





## [5.2.3](https://github.com/marko-js/marko/compare/v5.2.2...v5.2.3) (2021-03-05)


### Bug Fixes

* **marko:** issue with MARKO_DEBUG and a const ([c17f9fc](https://github.com/marko-js/marko/commit/c17f9fc5521412e24838d7ec78bee000c511064f))





## [5.2.2](https://github.com/marko-js/marko/compare/v5.2.1...v5.2.2) (2021-03-01)


### Bug Fixes

* add some additional missing deps from marko to @marko/compiler ([65ac580](https://github.com/marko-js/marko/commit/65ac580e57cb42ab94adc447c9b59744a69c8b64))





## [5.2.1](https://github.com/marko-js/marko/compare/v5.2.0...v5.2.1) (2021-03-01)


### Bug Fixes

* **compiler:** add missing dependency after moving taglib code ([ae843f1](https://github.com/marko-js/marko/commit/ae843f1b802fcbc1c7347247247a3c8551f6cfd2))





# [5.2.0](https://github.com/marko-js/marko/compare/v5.1.21...v5.2.0) (2021-03-01)


### Features

* move taglib apis into compiler source code ([f7cbb1b](https://github.com/marko-js/marko/commit/f7cbb1b5719ce767b7970ca7264a081010e8e65a))





## [5.1.21](https://github.com/marko-js/marko/compare/v5.1.20...v5.1.21) (2021-03-01)


### Bug Fixes

* **babel-utils:** update type definitions ([b3446b7](https://github.com/marko-js/marko/commit/b3446b740b62af2f956be4030b656d16bf050f1b))





## [5.1.20](https://github.com/marko-js/marko/compare/v5.1.19...v5.1.20) (2021-02-26)


### Bug Fixes

* **marko:** circular dep issue with browser-refresh ([a704210](https://github.com/marko-js/marko/commit/a704210c272500b9aa36f90ca5c2f63cff85a7a7))





## [5.1.19](https://github.com/marko-js/marko/compare/v5.1.18...v5.1.19) (2021-02-26)


### Bug Fixes

* **marko:** bring back hot-reload when node-require hook used ([8d856a0](https://github.com/marko-js/marko/commit/8d856a0250a1f2522f06a91a11c2d73c6a05e7b2))
* move @marko/babel-types into compiler ([5369a63](https://github.com/marko-js/marko/commit/5369a63e0ce66c422981893525ff6c9bcbd461dd))
* **compiler:** issue with path.state missing ([22ab5b2](https://github.com/marko-js/marko/commit/22ab5b282ad5b8eedf2705956a45d21cc1d55717))





## [5.1.18](https://github.com/marko-js/marko/compare/v5.1.17...v5.1.18) (2021-02-21)


### Bug Fixes

* **marko:** add back missing preserve-name & remove-dashes config ([4283178](https://github.com/marko-js/marko/commit/428317863d0a1d563019715194064a3cdd7c26d0))





## [5.1.17](https://github.com/marko-js/marko/compare/v5.1.16...v5.1.17) (2021-02-18)


### Bug Fixes

* improve windows support for taglib finder ([58f6568](https://github.com/marko-js/marko/commit/58f6568da8fca1cdf09034c7dd18e7cfb1fdb902))





## [5.1.16](https://github.com/marko-js/marko/compare/v5.1.15...v5.1.16) (2021-02-17)


### Bug Fixes

* **marko:** simplify client-reorder runtime loading login to inline code ([#1661](https://github.com/marko-js/marko/issues/1661)) ([5d0a74a](https://github.com/marko-js/marko/commit/5d0a74a616d6f5d6bdf97a9c041b0c56d9a0d862))





## [5.1.15](https://github.com/marko-js/marko/compare/v5.1.14...v5.1.15) (2021-02-13)

**Note:** Version bump only for package marko-project





## [5.1.14](https://github.com/marko-js/marko/compare/v5.1.13...v5.1.14) (2021-02-12)


### Bug Fixes

* **translator-default:** issue with style tag source positions ([415161b](https://github.com/marko-js/marko/commit/415161ba134d038da5ac3ab81718329a45e0f02f))





## [5.1.13](https://github.com/marko-js/marko/compare/v5.1.12...v5.1.13) (2021-02-12)

**Note:** Version bump only for package marko-project





## [5.1.12](https://github.com/marko-js/marko/compare/v5.1.11...v5.1.12) (2021-02-12)


### Bug Fixes

* **marko:** avoid prematurely resolving taglib paths ([29f3cbe](https://github.com/marko-js/marko/commit/29f3cbeccf07108d05e600a2a12dab2a3a0fa6a9))





## [5.1.11](https://github.com/marko-js/marko/compare/v5.1.10...v5.1.11) (2021-02-11)


### Bug Fixes

* prevent potential race condition while tag scanning ([cafa138](https://github.com/marko-js/marko/commit/cafa138f28a5e2fbe9fbc74cc05fb4152e36d911))





## [5.1.10](https://github.com/marko-js/marko/compare/v5.1.9...v5.1.10) (2021-02-05)


### Bug Fixes

* add else-if to transparent tags ([#1657](https://github.com/marko-js/marko/issues/1657)) ([7c14bdf](https://github.com/marko-js/marko/commit/7c14bdf5536eb8df8831624a4996de8b6970d184))





## [5.1.9](https://github.com/marko-js/marko/compare/v5.1.8...v5.1.9) (2021-02-03)


### Bug Fixes

* **marko:** default export in esm mode for marko/component ([9b144e1](https://github.com/marko-js/marko/commit/9b144e13ea3413884fdda698fa854caca111858d))
* **marko:** drop ie10 only runtime code ([2125bf6](https://github.com/marko-js/marko/commit/2125bf6ae991120cf27662b139b3080a93d05416))
* **marko:** include default export in esm marko/components ([ed5fbc2](https://github.com/marko-js/marko/commit/ed5fbc2299a500851f7b9e23a9737a23285e4840))





## [5.1.8](https://github.com/marko-js/marko/compare/v5.1.7...v5.1.8) (2021-02-02)

**Note:** Version bump only for package marko-project





## [5.1.7](https://github.com/marko-js/marko/compare/v5.1.6...v5.1.7) (2021-02-01)


### Bug Fixes

* allow passing 'dom' output instead of 'vdom' ([9c11a9b](https://github.com/marko-js/marko/commit/9c11a9be187c728b46caca9a37a9b383cc20ce1b))





## [5.1.6](https://github.com/marko-js/marko/compare/v5.1.5...v5.1.6) (2021-01-29)


### Bug Fixes

* **compiler:** improve type definitions ([291690e](https://github.com/marko-js/marko/commit/291690edb061afd0f98a8eb514db6b8f429fe5a0))





## [5.1.5](https://github.com/marko-js/marko/compare/v5.1.4...v5.1.5) (2021-01-28)


### Bug Fixes

* issue with bundled compiler not respecting NODE_ENV ([c7be2a7](https://github.com/marko-js/marko/commit/c7be2a7052366bff706eb2622a6b059866294b5b))





## [5.1.4](https://github.com/marko-js/marko/compare/v5.1.3...v5.1.4) (2021-01-27)


### Bug Fixes

* docs link ([69abe9a](https://github.com/marko-js/marko/commit/69abe9a299e106f5ea0ef3c7a14b0fc5d3542a6b))





## [5.1.3](https://github.com/marko-js/marko/compare/v5.1.2...v5.1.3) (2021-01-27)


### Bug Fixes

* enable inline sourcemaps by default with dev mode require hook ([6571a11](https://github.com/marko-js/marko/commit/6571a1124047e10ccf0b7a4b131fbe860ce008bb))





## [5.1.2](https://github.com/marko-js/marko/compare/v5.1.1...v5.1.2) (2021-01-26)

**Note:** Version bump only for package marko-project





## [5.1.1](https://github.com/marko-js/marko/compare/v5.1.0...v5.1.1) (2021-01-26)

**Note:** Version bump only for package marko-project





# [5.1.0](https://github.com/marko-js/marko/compare/v5.0.0-next.82...v5.1.0) (2021-01-26)


### Bug Fixes

* **babel-utils:** improve website compatability ([c122c08](https://github.com/marko-js/marko/commit/c122c08d92ab4a9e98ef49e27292bb3610fb3ade))
* importing some Marko files properly includes meta ([d67bac5](https://github.com/marko-js/marko/commit/d67bac58183f46679212bbd2773adc36566cbc92))


### Features

* no longer publish as 'next' dist-tag ([8113e25](https://github.com/marko-js/marko/commit/8113e250d823000810d0fa13d76efc4cc69f4ad1))





# [5.0.0-next.82](https://github.com/marko-js/marko/compare/v5.0.0-next.81...v5.0.0-next.82) (2021-01-21)


### Bug Fixes

* issue with path.hub being missing when traversing ([7aef97c](https://github.com/marko-js/marko/commit/7aef97ca48ec26be19a1e5527156cc1c9a13b674))





# [5.0.0-next.81](https://github.com/marko-js/marko/compare/v5.0.0-next.80...v5.0.0-next.81) (2021-01-20)


### Bug Fixes

* **translator-default:** browser.json auto discovery path ([965c407](https://github.com/marko-js/marko/commit/965c40735f03b0c29397f77503a3bf2253ee0f91))





# [5.0.0-next.80](https://github.com/marko-js/marko/compare/v5.0.0-next.79...v5.0.0-next.80) (2021-01-19)


### Bug Fixes

* src to dist translations in some cases ([60772b7](https://github.com/marko-js/marko/commit/60772b7098b3f832ad620d43d965664167b5a035))





# [5.0.0-next.79](https://github.com/marko-js/marko/compare/v5.0.0-next.78...v5.0.0-next.79) (2021-01-19)


### Bug Fixes

* resolve dist runtime when optimized ([261de89](https://github.com/marko-js/marko/commit/261de89672c3089212b5cef1722daf90281cee4d))
* targetProperty for dynamic attribute tags when multiple ([2d1238f](https://github.com/marko-js/marko/commit/2d1238f78294056ec2cf7a1b26cd0e01e5b9a108))





# [5.0.0-next.78](https://github.com/marko-js/marko/compare/v5.0.0-next.77...v5.0.0-next.78) (2021-01-19)


### Bug Fixes

* webpack's file system not converting buffer properly ([#1649](https://github.com/marko-js/marko/issues/1649)) ([1cd24b6](https://github.com/marko-js/marko/commit/1cd24b68c9dae62d53a681f48a0cf61e9b8e8aed))





# [5.0.0-next.77](https://github.com/marko-js/marko/compare/v5.0.0-next.76...v5.0.0-next.77) (2021-01-19)


### Bug Fixes

* force commonjs modules for load api ([bd84dad](https://github.com/marko-js/marko/commit/bd84dadca72c4d5e6ae7ed62211e543211a29a5f))





# [5.0.0-next.76](https://github.com/marko-js/marko/compare/v5.0.0-next.75...v5.0.0-next.76) (2021-01-15)


### Features

* improve analysis for stateful tag parameters ([#1648](https://github.com/marko-js/marko/issues/1648)) ([8c34cb4](https://github.com/marko-js/marko/commit/8c34cb4be6bd571f6013f50dc6808e3d9de10763))





# [5.0.0-next.75](https://github.com/marko-js/marko/compare/v5.0.0-next.74...v5.0.0-next.75) (2021-01-14)


### Bug Fixes

* issue with using flags before defined ([8628d01](https://github.com/marko-js/marko/commit/8628d01ef82816a482e57938fbecde3e3c64c357))





# [5.0.0-next.74](https://github.com/marko-js/marko/compare/v5.0.0-next.73...v5.0.0-next.74) (2021-01-14)


### Bug Fixes

* runtime mismatch check ([892f9d0](https://github.com/marko-js/marko/commit/892f9d0f10bb76d0c33ed11204c36f6edc40253c))





# [5.0.0-next.73](https://github.com/marko-js/marko/compare/v5.0.0-next.72...v5.0.0-next.73) (2021-01-14)


### Bug Fixes

* use same debug check for compiler and runtime ([#1647](https://github.com/marko-js/marko/issues/1647)) ([0c8632f](https://github.com/marko-js/marko/commit/0c8632fe92d06b27d0741fa2d5a2b599f0890693))





# [5.0.0-next.72](https://github.com/marko-js/marko/compare/v5.0.0-next.71...v5.0.0-next.72) (2021-01-13)


### Bug Fixes

* issue with only renderBody being serialized ([8c0e045](https://github.com/marko-js/marko/commit/8c0e045af9820ee26f606ee626b8a51579aded94))
* **babel-utils:** resolve node_module templates to relative paths ([#1645](https://github.com/marko-js/marko/issues/1645)) ([db4232e](https://github.com/marko-js/marko/commit/db4232e1e2244b1b244fc9dfd62f928a7b482a1e))


### Features

* **compiler:** support string as translator option ([0c6e968](https://github.com/marko-js/marko/commit/0c6e968b4eadd9c792c8495cd218791b04206ec5))





# [5.0.0-next.71](https://github.com/marko-js/marko/compare/v5.0.0-next.70...v5.0.0-next.71) (2021-01-12)


### Bug Fixes

* **babel-types:** allow toString on placeholder nodes ([0162f17](https://github.com/marko-js/marko/commit/0162f178938032a0e9967d992fe8e98b4ae5df75))


### Features

* move tag param ast to MarkoTagBody ([02c1e29](https://github.com/marko-js/marko/commit/02c1e29426b7995d869ab8a9fd1f8dd6dccaeca5))
* simplify ast defs ([0f00ec7](https://github.com/marko-js/marko/commit/0f00ec7693ebfe3a74a870d2033b6a44c1d1ec2c))





# [5.0.0-next.70](https://github.com/marko-js/marko/compare/v5.0.0-next.69...v5.0.0-next.70) (2020-12-16)


### Features

* add cached analyze stage ([bb6a050](https://github.com/marko-js/marko/commit/bb6a050bbb82d5a4fcfc5e1ca6835d36a67809fa))





# [5.0.0-next.69](https://github.com/marko-js/marko/compare/v5.0.0-next.68...v5.0.0-next.69) (2020-12-14)


### Features

* **compiler:** provide state object during compiler hooks ([24cefa4](https://github.com/marko-js/marko/commit/24cefa4c068a8b272aa998391a695d2efd5d9786))





# [5.0.0-next.68](https://github.com/marko-js/marko/compare/v5.0.0-next.67...v5.0.0-next.68) (2020-12-11)


### Features

* **babel-utils:** expose import and id utils ([#1636](https://github.com/marko-js/marko/issues/1636)) ([644e4d8](https://github.com/marko-js/marko/commit/644e4d8756c2260a1e2d28374a31a67552414179))





# [5.0.0-next.67](https://github.com/marko-js/marko/compare/v5.0.0-next.66...v5.0.0-next.67) (2020-12-09)


### Bug Fixes

* **babel-types:** scope traverse patch ([a82af6e](https://github.com/marko-js/marko/commit/a82af6ea0287a8d9816ecdd9cbd33538f36c6d52))





# [5.0.0-next.66](https://github.com/marko-js/marko/compare/v5.0.0-next.65...v5.0.0-next.66) (2020-12-08)


### Bug Fixes

* renderbody with dynamic attrs ([6c33c0f](https://github.com/marko-js/marko/commit/6c33c0fcf1f240e50ce7bccbb10ea1efb0daaed3))





# [5.0.0-next.65](https://github.com/marko-js/marko/compare/v5.0.0-next.64...v5.0.0-next.65) (2020-12-02)

**Note:** Version bump only for package marko-project





# [5.0.0-next.64](https://github.com/marko-js/marko/compare/v5.0.0-next.63...v5.0.0-next.64) (2020-12-02)


### Bug Fixes

* **babel-types:** support scope analysis for tag variables ([c527474](https://github.com/marko-js/marko/commit/c5274740b5fde01b85b8b46381fadf2fc75245f2))





# [5.0.0-next.63](https://github.com/marko-js/marko/compare/v5.0.0-next.62...v5.0.0-next.63) (2020-12-01)

**Note:** Version bump only for package marko-project





# [5.0.0-next.62](https://github.com/marko-js/marko/compare/v5.0.0-next.61...v5.0.0-next.62) (2020-12-01)


### Bug Fixes

* **babel-types:** remove invalid visitors ([5d4a964](https://github.com/marko-js/marko/commit/5d4a964f2eea73c98c22e12a90468532d62fab9c))





# [5.0.0-next.61](https://github.com/marko-js/marko/compare/v5.0.0-next.60...v5.0.0-next.61) (2020-12-01)


### Bug Fixes

* **babel-utils:** typo in types ([3d40fc2](https://github.com/marko-js/marko/commit/3d40fc24fd19ffdd08a403186f0fba8dc7f4ea1f))





# [5.0.0-next.60](https://github.com/marko-js/marko/compare/v5.0.0-next.59...v5.0.0-next.60) (2020-11-22)


### Bug Fixes

* typing for attr nodes ([b885ee2](https://github.com/marko-js/marko/commit/b885ee2032a2a5a81db859432520663e123444c9))





# [5.0.0-next.59](https://github.com/marko-js/marko/compare/v5.0.0-next.58...v5.0.0-next.59) (2020-11-21)


### Bug Fixes

* **babel-utils:** missing type ([2b7f619](https://github.com/marko-js/marko/commit/2b7f6199ec688f4ea37a07caa53a88ac1ba891c3))





# [5.0.0-next.58](https://github.com/marko-js/marko/compare/v5.0.0-next.57...v5.0.0-next.58) (2020-11-20)


### Bug Fixes

* **translator-default:** avoid vdom hoisting for directive attrs ([abf5b8c](https://github.com/marko-js/marko/commit/abf5b8ce1286072f728dacd78427cf6ca2c09bc4))





# [5.0.0-next.57](https://github.com/marko-js/marko/compare/v5.0.0-next.56...v5.0.0-next.57) (2020-11-20)


### Bug Fixes

* **translator-default:** ensure accruate component id metadata ([c4b0360](https://github.com/marko-js/marko/commit/c4b036058ea57f31e151e0dae965858839d1795c))


### Features

* add default attribute support ([#1631](https://github.com/marko-js/marko/issues/1631)) ([46ceab3](https://github.com/marko-js/marko/commit/46ceab34a5c1815933b8b2a9f3533716ae0fedcf))
* add parser support for tag variables ([#1630](https://github.com/marko-js/marko/issues/1630)) ([43c4433](https://github.com/marko-js/marko/commit/43c4433cb026f7eace199203e15d1050a53dc35d))





# [5.0.0-next.56](https://github.com/marko-js/marko/compare/v5.0.0-next.55...v5.0.0-next.56) (2020-11-20)


### Bug Fixes

* **compiler:** no longer error when compiling from root dir ([fe84fb3](https://github.com/marko-js/marko/commit/fe84fb345affb4a48e10d51df18bcf1114e12d3f))





# [5.0.0-next.55](https://github.com/marko-js/marko/compare/v5.0.0-next.54...v5.0.0-next.55) (2020-11-19)


### Bug Fixes

* babel-utils doesnt depend on compiler ([c429ffb](https://github.com/marko-js/marko/commit/c429ffb0aa4e79210b881d089a3db19d272a750d))





# [5.0.0-next.54](https://github.com/marko-js/marko/compare/v5.0.0-next.53...v5.0.0-next.54) (2020-11-17)

**Note:** Version bump only for package marko-project





# [5.0.0-next.53](https://github.com/marko-js/marko/compare/v5.0.0-next.52...v5.0.0-next.53) (2020-11-17)


### Features

* **babel-utils:** expose taglib types ([1d6ccb9](https://github.com/marko-js/marko/commit/1d6ccb983da6cbbde4c837a1fc594ab3e67fb072))





# [5.0.0-next.52](https://github.com/marko-js/marko/compare/v5.0.0-next.51...v5.0.0-next.52) (2020-11-12)

**Note:** Version bump only for package marko-project





# [5.0.0-next.51](https://github.com/marko-js/marko/compare/v5.0.0-next.50...v5.0.0-next.51) (2020-11-11)


### Bug Fixes

* refactor and optimize optimizers ([7e1d058](https://github.com/marko-js/marko/commit/7e1d0588c54f4143ecd04ec8e04426ac4d37a655))
* regression with no-update-body with no renderBody ([1e89057](https://github.com/marko-js/marko/commit/1e890574bd23035eb1d22ae78672c3a0e9dd4563))


### Features

* **babel-utils:** add basic types ([61900a0](https://github.com/marko-js/marko/commit/61900a0d1150b9c4e520f5916086143bd84484fb))
* add typescript types for babel-types ([#1623](https://github.com/marko-js/marko/issues/1623)) ([51bd454](https://github.com/marko-js/marko/commit/51bd454ea191444699bde9c8f6f4a15e459ffba3))
* cached compilations, nested tag analysis ([74d5f10](https://github.com/marko-js/marko/commit/74d5f104b8f35178c399ab5c3514c33f8b63cdf0))





# [5.0.0-next.50](https://github.com/marko-js/marko/compare/v5.0.0-next.49...v5.0.0-next.50) (2020-10-12)


### Bug Fixes

* dynamic tag html attr normalize ([bae4a3d](https://github.com/marko-js/marko/commit/bae4a3d388412e387514ce11416f4e6cbddecd28))
* no longer use fragments for preserved native els ([22e9322](https://github.com/marko-js/marko/commit/22e9322a7e72b50812ab223f70bf9e68aee2208d))
* regression serializing empty component data with custom runtimeid ([7ee0cd1](https://github.com/marko-js/marko/commit/7ee0cd1f0aacda8c9b04b583320951ce406a9143))
* **translator-default:** body only if being preserved incorrectly ([aa1ef05](https://github.com/marko-js/marko/commit/aa1ef05f965df21879f1a6bcca566a2b9851a720))
* **translator-default:** owner component missing for text nodes ([50b4e97](https://github.com/marko-js/marko/commit/50b4e9746b4fc5158d35ba78110199de4a4e7956))





# [5.0.0-next.49](https://github.com/marko-js/marko/compare/v5.0.0-next.48...v5.0.0-next.49) (2020-09-28)


### Bug Fixes

* **marko:** output esm for module-code ([db4793d](https://github.com/marko-js/marko/commit/db4793df11c08b7d8f8b3cf5591528f35fd643d9))


### Performance Improvements

* misc optimizations ([#1610](https://github.com/marko-js/marko/issues/1610)) ([bf393c8](https://github.com/marko-js/marko/commit/bf393c85ad8ed663db8daad64afdcd423e668c46))





# [5.0.0-next.48](https://github.com/marko-js/marko/compare/v5.0.0-next.47...v5.0.0-next.48) (2020-09-18)


### Bug Fixes

* **compiler:** improve hash template id performance and consistency ([d111748](https://github.com/marko-js/marko/commit/d11174853f02b4edf25cb4b1b3cf0b687ca2bf4e))





# [5.0.0-next.47](https://github.com/marko-js/marko/compare/v5.0.0-next.46...v5.0.0-next.47) (2020-09-18)


### Bug Fixes

* **compiler:** normalize windows paths when creating relative requires ([daf2b1a](https://github.com/marko-js/marko/commit/daf2b1af37d1c14175b69b52373d7d36ad115c59))





# [5.0.0-next.46](https://github.com/marko-js/marko/compare/v5.0.0-next.45...v5.0.0-next.46) (2020-09-17)


### Bug Fixes

* only include template path with meta option enabled ([e1b39e1](https://github.com/marko-js/marko/commit/e1b39e18c430b86e2406187958d5503d83a7d79a))


### Performance Improvements

* prevent bundlers from pulling in setImmediate shim ([585d6be](https://github.com/marko-js/marko/commit/585d6be9c288b2a0306d2ffcd36d15e8e17a03d9))
* remove unecessary function for template load api ([33ae635](https://github.com/marko-js/marko/commit/33ae635fec6ad4383347c7ce9e640251937a8d64))





# [5.0.0-next.45](https://github.com/marko-js/marko/compare/v5.0.0-next.44...v5.0.0-next.45) (2020-08-26)


### Bug Fixes

* regression with manual component init with custom runtimeid ([ec6e670](https://github.com/marko-js/marko/commit/ec6e670dbca30116947372198203b9c72c46a714))





# [5.0.0-next.44](https://github.com/marko-js/marko/compare/v5.0.0-next.43...v5.0.0-next.44) (2020-08-26)


### Bug Fixes

* typo with aria-describedby autocomplete ([f499634](https://github.com/marko-js/marko/commit/f499634679eb97003e45e1a9923590abc9190f06))





# [5.0.0-next.43](https://github.com/marko-js/marko/compare/v5.0.0-next.42...v5.0.0-next.43) (2020-08-20)


### Bug Fixes

* issue with hydrating body-only content ([c975b87](https://github.com/marko-js/marko/commit/c975b878ccce93ab64caa3c2feef0fb160194282))





# [5.0.0-next.42](https://github.com/marko-js/marko/compare/v5.0.0-next.41...v5.0.0-next.42) (2020-08-18)


### Bug Fixes

* escape filename regexps for multi file components ([eb0cfb7](https://github.com/marko-js/marko/commit/eb0cfb71346ce3bec329cc562122f67a0ab86dd8))
* pass through xlink:href ([2e7e3dd](https://github.com/marko-js/marko/commit/2e7e3dd98671869348403c8098bf5b2c016a0afa))





# [5.0.0-next.41](https://github.com/marko-js/marko/compare/v5.0.0-next.40...v5.0.0-next.41) (2020-08-18)

**Note:** Version bump only for package marko-project





# [5.0.0-next.40](https://github.com/marko-js/marko/compare/v5.0.0-next.39...v5.0.0-next.40) (2020-08-12)


### Bug Fixes

* component type use relative path in dev mode ([7b7a4f9](https://github.com/marko-js/marko/commit/7b7a4f9637648c7ded113fd132ce3ce5f2785e0a))
* **translator-default:** component meta not set on tag params ([da2eb18](https://github.com/marko-js/marko/commit/da2eb187072b1e766509da1d4a2eab2a92798111))





# [5.0.0-next.39](https://github.com/marko-js/marko/compare/v5.0.0-next.38...v5.0.0-next.39) (2020-08-10)


### Bug Fixes

* invalid missing closing svg tags ([47a9834](https://github.com/marko-js/marko/commit/47a98341a2bdb4ae136495c5e3976dfe7c24a77c))





# [5.0.0-next.38](https://github.com/marko-js/marko/compare/v5.0.0-next.37...v5.0.0-next.38) (2020-08-10)


### Bug Fixes

* add support for nested tag long hand properties ([#1592](https://github.com/marko-js/marko/issues/1592)) ([36c501c](https://github.com/marko-js/marko/commit/36c501ce440f90f6409394b38ed49e185e82d239))
* set default value for textarea when created ([#1593](https://github.com/marko-js/marko/issues/1593)) ([00a0a55](https://github.com/marko-js/marko/commit/00a0a5527d19e7e145b367a415677dc9d41474cd))





# [5.0.0-next.37](https://github.com/marko-js/marko/compare/v5.0.0-next.36...v5.0.0-next.37) (2020-08-05)


### Features

* only enable optimization stage for production mode ([ee16e96](https://github.com/marko-js/marko/commit/ee16e96580b67e0cacb87a78001be940dc0324df))





# [5.0.0-next.36](https://github.com/marko-js/marko/compare/v5.0.0-next.35...v5.0.0-next.36) (2020-08-05)


### Features

* expose watch file meta data ([#1591](https://github.com/marko-js/marko/issues/1591)) ([f14e46a](https://github.com/marko-js/marko/commit/f14e46a1f3ddd01f659a0f86678773fb12a7f1a5))





# [5.0.0-next.35](https://github.com/marko-js/marko/compare/v5.0.0-next.34...v5.0.0-next.35) (2020-08-04)


### Bug Fixes

* lint and format scripts ([57b66ef](https://github.com/marko-js/marko/commit/57b66ef39782ea249d3cf7913ec8242d0baf5535))
* lint script ([c11c0e0](https://github.com/marko-js/marko/commit/c11c0e080bdca99c469107f56280168162915a8e))


### Features

* add custom fileSystem config option ([#1590](https://github.com/marko-js/marko/issues/1590)) ([212dda9](https://github.com/marko-js/marko/commit/212dda9c004af1958feacf5c9be9ac381feb2708))





# [5.0.0-next.34](https://github.com/marko-js/marko/compare/v5.0.0-next.33...v5.0.0-next.34) (2020-08-04)


### Bug Fixes

* allow <await> in sync mode ([#1589](https://github.com/marko-js/marko/issues/1589)) ([f91bd37](https://github.com/marko-js/marko/commit/f91bd37ec22f45861d11931f696d1edc5e84165c))
* diffing dynamic attributes with mismatched keys ([#1587](https://github.com/marko-js/marko/issues/1587)) ([4b8cce4](https://github.com/marko-js/marko/commit/4b8cce41c7f3a020142e2d3e3d1e194ab64ffe65))
* issue with hydrating no-update-if content ([#1581](https://github.com/marko-js/marko/issues/1581)) ([457f3d4](https://github.com/marko-js/marko/commit/457f3d4acb480e5382fdfa30d0c1d4ea0062c4cc))





# [5.0.0-next.33](https://github.com/marko-js/marko/compare/v5.0.0-next.32...v5.0.0-next.33) (2020-08-03)

**Note:** Version bump only for package marko-project





# [5.0.0-next.32](https://github.com/marko-js/marko/compare/v5.0.0-next.31...v5.0.0-next.32) (2020-07-31)


### Bug Fixes

* **compiler:** regression with sourcemaps ([bb818c8](https://github.com/marko-js/marko/commit/bb818c8423e1d1cc4528c951b08ddab1579f25a9))





# [5.0.0-next.31](https://github.com/marko-js/marko/compare/v5.0.0-next.30...v5.0.0-next.31) (2020-07-31)


### Features

* improve index position to line, column perf ([680dad6](https://github.com/marko-js/marko/commit/680dad65dafdb4300d3f86ea2be6bb322ecd7de9))





# [5.0.0-next.30](https://github.com/marko-js/marko/compare/v5.0.0-next.29...v5.0.0-next.30) (2020-07-29)

**Note:** Version bump only for package marko-project





# [5.0.0-next.29](https://github.com/marko-js/marko/compare/v5.0.0-next.28...v5.0.0-next.29) (2020-07-29)

**Note:** Version bump only for package marko-project





# [5.0.0-next.28](https://github.com/marko-js/marko/compare/v5.0.0-next.27...v5.0.0-next.28) (2020-07-27)


### Bug Fixes

* **compiler:** false positive for concise mode dynamic tag error ([94c41ca](https://github.com/marko-js/marko/commit/94c41ca8f18dfcc50e1ecb23bdc25b3231e7b790))
* **translator-default:** improve source maps for non concise root tags ([571b4fa](https://github.com/marko-js/marko/commit/571b4faf0925db4290e15b8b9b4d284c0ee49f0b))
* better errors, track deps and cleanup for import shorthand ([00464f2](https://github.com/marko-js/marko/commit/00464f27b2fef2a454745b424e3cce18c76ae33f))


### Features

* add new syntax for dynamic component import ([e9b4cd6](https://github.com/marko-js/marko/commit/e9b4cd61acff70d7d0d0d49cab7034e000493346))





# [5.0.0-next.27](https://github.com/marko-js/marko/compare/v5.0.0-next.26...v5.0.0-next.27) (2020-07-24)


### Bug Fixes

* **compiler:** make taglib entry more bundler friendly ([1e89380](https://github.com/marko-js/marko/commit/1e8938085a815b5d9485c3a38b7b643770566282))





# [5.0.0-next.26](https://github.com/marko-js/marko/compare/v5.0.0-next.25...v5.0.0-next.26) (2020-07-24)


### Bug Fixes

* docs paths ([583197e](https://github.com/marko-js/marko/commit/583197e2555258e101bb7e5e14134117cbd072e2))
* load correct taglib utils based on env ([#1585](https://github.com/marko-js/marko/issues/1585)) ([af2bc2a](https://github.com/marko-js/marko/commit/af2bc2a11c45cab380e9698af2d1329b4d4eb8d6))





# [5.0.0-next.25](https://github.com/marko-js/marko/compare/v5.0.0-next.24...v5.0.0-next.25) (2020-07-23)


### Bug Fixes

* remove unecessary allExtensions api ([9a2c439](https://github.com/marko-js/marko/commit/9a2c439b740fd3431e2d07f3112a8dfe8c734d74))





# [5.0.0-next.24](https://github.com/marko-js/marko/compare/v5.0.0-next.23...v5.0.0-next.24) (2020-07-22)


### Features

* **compiler:** expose register taglib api ([#1583](https://github.com/marko-js/marko/issues/1583)) ([c45c082](https://github.com/marko-js/marko/commit/c45c082b8f4b4a3548271b4526231e22b6d24222))





# [5.0.0-next.23](https://github.com/marko-js/marko/compare/v5.0.0-next.22...v5.0.0-next.23) (2020-07-14)


### Features

* expose inline style block position for better sourcemaps ([83e6dca](https://github.com/marko-js/marko/commit/83e6dcaf5ca7d30e64493ddc95b22cb05a2ecc54))





# [5.0.0-next.22](https://github.com/marko-js/marko/compare/v5.0.0-next.21...v5.0.0-next.22) (2020-07-10)


### Bug Fixes

* **translator-default:** mixing repeated and non-repeated attributes ([f93534f](https://github.com/marko-js/marko/commit/f93534faf1da8254cf1a1cfe3284da35468be7d5))





# [5.0.0-next.21](https://github.com/marko-js/marko/compare/v5.0.0-next.20...v5.0.0-next.21) (2020-07-07)


### Features

* switch to storing marko meta on babels metadata ([ee6ad38](https://github.com/marko-js/marko/commit/ee6ad38d9f31fe1d1314350ddd011a39c6c2ab9a))





# [5.0.0-next.20](https://github.com/marko-js/marko/compare/v5.0.0-next.19...v5.0.0-next.20) (2020-07-07)

**Note:** Version bump only for package marko-project





# [5.0.0-next.19](https://github.com/marko-js/marko/compare/v5.0.0-next.18...v5.0.0-next.19) (2020-07-06)


### Bug Fixes

* support manually registered taglibs ([9dc4d07](https://github.com/marko-js/marko/commit/9dc4d07d1bfe4bb1c898e16a28289f021917c75f))





# [5.0.0-next.18](https://github.com/marko-js/marko/compare/v5.0.0-next.17...v5.0.0-next.18) (2020-05-27)


### Bug Fixes

* **compiler:** modules override warning when compiled with webpack ([af28bac](https://github.com/marko-js/marko/commit/af28bac6f60b268c88ebe28ab7d74807487cf3b1))





# [5.0.0-next.17](https://github.com/marko-js/marko/compare/v5.0.0-next.16...v5.0.0-next.17) (2020-05-27)


### Bug Fixes

* additional taglib cleanup for website support ([f462d8a](https://github.com/marko-js/marko/commit/f462d8ad95c1d438561f028a7d2a79accccbe739))





# [5.0.0-next.16](https://github.com/marko-js/marko/compare/v5.0.0-next.15...v5.0.0-next.16) (2020-05-27)


### Features

* website compatibility fixes ([4390fd1](https://github.com/marko-js/marko/commit/4390fd1654d7b2753d2af899917ced7b3a395bc2))





# [5.0.0-next.15](https://github.com/marko-js/marko/compare/v5.0.0-next.14...v5.0.0-next.15) (2020-05-26)


### Features

* **compiler:** require passing custom translator directly ([b9d4c46](https://github.com/marko-js/marko/commit/b9d4c46ff3b6d3685c01f7b82e591f3f90d4c02b))





# [5.0.0-next.14](https://github.com/marko-js/marko/compare/v5.0.0-next.13...v5.0.0-next.14) (2020-05-26)


### Bug Fixes

* improve browser support for website ([#1574](https://github.com/marko-js/marko/issues/1574)) ([9df798a](https://github.com/marko-js/marko/commit/9df798af5e71b71881995b6e06a9fb1b30b6fac2))





# [5.0.0-next.13](https://github.com/marko-js/marko/compare/v5.0.0-next.12...v5.0.0-next.13) (2020-05-20)


### Bug Fixes

* nextTick timing regression ([#1573](https://github.com/marko-js/marko/issues/1573)) ([7f35078](https://github.com/marko-js/marko/commit/7f35078dda057c6f83282d37edea6044f02657f3))
* **compiler:** ensure marko babel plugin not overwritten ([ac9a4c5](https://github.com/marko-js/marko/commit/ac9a4c58bdedd1cd3ce762e1b5ce744d77719e3c))
* **compiler:** regression causing marko plugin to not load ([a08b55a](https://github.com/marko-js/marko/commit/a08b55ac8d34f3031834dc76a7936ebb8964d01d))
* **marko:** prevent loading main entry by default ([61c954e](https://github.com/marko-js/marko/commit/61c954ef0ed1fc1d3b44b878ea1dbb0f79a9b718))
* **translator-default:** optional params on for tag ([b550417](https://github.com/marko-js/marko/commit/b55041728d9f4e45196c1d7e07abd770e4af68be))





# [5.0.0-next.12](https://github.com/marko-js/marko/compare/v5.0.0-next.11...v5.0.0-next.12) (2020-05-19)


### Bug Fixes

* components not always initializing inside client-reorder await ([#1566](https://github.com/marko-js/marko/issues/1566)) ([da31ead](https://github.com/marko-js/marko/commit/da31ead17959e0e4bbbd806690d368127636b094))
* data-marko attributes under 'no-update' with <await> ([#1564](https://github.com/marko-js/marko/issues/1564)) ([0a227d0](https://github.com/marko-js/marko/commit/0a227d0c7c27821df551c1367e160793dc9e234e))





# [5.0.0-next.11](https://github.com/marko-js/marko/compare/v5.0.0-next.10...v5.0.0-next.11) (2020-04-27)


### Bug Fixes

* regression with unquoted attribute with trailing slash ([#1561](https://github.com/marko-js/marko/issues/1561)) ([128b68a](https://github.com/marko-js/marko/commit/128b68aefcec8d99b7c508e4cea2336207f574da))
* split components under preserved root resetting ___isPreserved ([#1559](https://github.com/marko-js/marko/issues/1559)) ([dd9f7ac](https://github.com/marko-js/marko/commit/dd9f7aca848df88e46cf5087d932966eaaaa1681))





# [5.0.0-next.10](https://github.com/marko-js/marko/compare/v5.0.0-next.9...v5.0.0-next.10) (2020-04-23)


### Bug Fixes

* switch safe renderer to use nextTick for errors ([#1554](https://github.com/marko-js/marko/issues/1554)) ([900e7b1](https://github.com/marko-js/marko/commit/900e7b1f1d94380ae997ebd408272ecb24b77193))


### Performance Improvements

* minify runtime comments, remove unnecessary attr quotes ([#1557](https://github.com/marko-js/marko/issues/1557)) ([2882626](https://github.com/marko-js/marko/commit/28826265f88c9f038886945471584f1b4b3b9be6))





# [5.0.0-next.9](https://github.com/marko-js/marko/compare/v5.0.0-next.8...v5.0.0-next.9) (2020-04-16)


### Bug Fixes

* add devmode warning for removing fragment markers ([#1541](https://github.com/marko-js/marko/issues/1541)) ([de27b4a](https://github.com/marko-js/marko/commit/de27b4af4c99efb5a9494e42f305160cda81348d))
* implement missing methods for void-writer ([#1540](https://github.com/marko-js/marko/issues/1540)) ([b50f93c](https://github.com/marko-js/marko/commit/b50f93c0240bb1dd43dd4f0f12e2a5afff57f915))
* improve micro task helper ([2129451](https://github.com/marko-js/marko/commit/21294511e9fd7a9bd2db3683d9f123baedf886b7))
* issue with keys under ssr no-update root ([#1527](https://github.com/marko-js/marko/issues/1527)) ([480bc77](https://github.com/marko-js/marko/commit/480bc77433835f960a9a58fee4e6a52c0f188571))
* regression with nullish values in partial string attribute values ([#1537](https://github.com/marko-js/marko/issues/1537)) ([144c352](https://github.com/marko-js/marko/commit/144c352863b75b75d513c8f080b8b19881e5dbde))
* spread attrs for native tag preserves case ([#1530](https://github.com/marko-js/marko/issues/1530)) ([6b3156f](https://github.com/marko-js/marko/commit/6b3156f80832356baf0dc93e6753246ab852367f))


### Features

* improve serialization across multiple writes ([#1542](https://github.com/marko-js/marko/issues/1542)) ([45e42df](https://github.com/marko-js/marko/commit/45e42dfd84a86dd3377a4d2968191b7dde8388d2))


### Performance Improvements

* misc improvements ([#1535](https://github.com/marko-js/marko/issues/1535)) ([1fed43e](https://github.com/marko-js/marko/commit/1fed43e24133ea6a43448237296e491a17a4b497))
* optimize dynamic tag when types are statically known ([#1550](https://github.com/marko-js/marko/issues/1550)) ([4719405](https://github.com/marko-js/marko/commit/47194054de15eeb19247a8f50926ac81c6d03671))
* optimize merge html attrs ([#1538](https://github.com/marko-js/marko/issues/1538)) ([792aa6a](https://github.com/marko-js/marko/commit/792aa6a7b702baba0599524cb30f7ca52e277dae))
* optimize serializing renderBody & legacy widgets ([#1539](https://github.com/marko-js/marko/issues/1539)) ([eb9e156](https://github.com/marko-js/marko/commit/eb9e156116ab46b329ff9d32514fe298e38fad3d))
* skip serializing instance props & state for non split components ([#1546](https://github.com/marko-js/marko/issues/1546)) ([75fd1b0](https://github.com/marko-js/marko/commit/75fd1b018f3ecc408258ec2f4e97337e3c69a8c9))





# [5.0.0-next.8](https://github.com/marko-js/marko/compare/v5.0.0-next.7...v5.0.0-next.8) (2020-03-17)


### Bug Fixes

* **translator-default:** include full filename in meta.component ([bc0bc69](https://github.com/marko-js/marko/commit/bc0bc69b3179b7ffbbe44046cb84933af3db095c))





# [5.0.0-next.7](https://github.com/marko-js/marko/compare/v5.0.0-next.6...v5.0.0-next.7) (2020-03-17)


### Bug Fixes

* **translator-default:** set meta component for inline component ([bd21c79](https://github.com/marko-js/marko/commit/bd21c79449f4e082ad17d297ba3c4d1e87e3421b))





# [5.0.0-next.6](https://github.com/marko-js/marko/compare/v5.0.0-next.5...v5.0.0-next.6) (2020-03-16)


### Bug Fixes

* don't serialize component boundary keys if the owner isn't hydrated ([#1525](https://github.com/marko-js/marko/issues/1525)) ([ab3d2a7](https://github.com/marko-js/marko/commit/ab3d2a7b0b4bb5ab05e78d4bba17efe4d3f58afa))
* make Marko a peerDependency ([2eac257](https://github.com/marko-js/marko/commit/2eac2572bec0986b2ac3903b1d43bef11d0bd437))


### Features

* all vnodes have owner components ([#1517](https://github.com/marko-js/marko/issues/1517)) ([585b2f1](https://github.com/marko-js/marko/commit/585b2f1de7797f909f1204f7c52c4b6891f8e156))





# [5.0.0-next.5](https://github.com/marko-js/marko/compare/v5.0.0-next.4...v5.0.0-next.5) (2020-02-26)


### Bug Fixes

* always include nested contexts when serializing ([#1515](https://github.com/marko-js/marko/issues/1515)) ([84aa30e](https://github.com/marko-js/marko/commit/84aa30ee6d04732f4a9f3349f61b12a72a980016))
* set preserve false under new rerender roots ([#1513](https://github.com/marko-js/marko/issues/1513)) ([c00a02c](https://github.com/marko-js/marko/commit/c00a02c44633d10ea23284e6b1222476d7134361))





# [5.0.0-next.4](https://github.com/marko-js/marko/compare/v5.0.0-next.3...v5.0.0-next.4) (2020-02-25)


### Bug Fixes

* improve node locations in sourcemaps ([#1512](https://github.com/marko-js/marko/issues/1512)) ([f4a39e9](https://github.com/marko-js/marko/commit/f4a39e91ca90aa734882ba234119ade3b0436e73))





# [5.0.0-next.3](https://github.com/marko-js/marko/compare/v5.0.0-next.2...v5.0.0-next.3) (2020-02-25)


### Bug Fixes

* only use minprops on runtime code ([#1511](https://github.com/marko-js/marko/issues/1511)) ([eb7441f](https://github.com/marko-js/marko/commit/eb7441f78779272577d8a19433644c0440ac6b80))





# [5.0.0-next.2](https://github.com/marko-js/marko/compare/v5.0.0-next.1...v5.0.0-next.2) (2020-02-25)


### Bug Fixes

* publish hooks (again) ([5b394be](https://github.com/marko-js/marko/commit/5b394be9088521fb5613d41263e64bb75cabf984))





# [5.0.0-next.1](https://github.com/marko-js/marko/compare/v4.18.48...v5.0.0-next.1) (2020-02-25)


### Bug Fixes

* publish hooks (maybe) ([2dc0901](https://github.com/marko-js/marko/commit/2dc090165c0073e26fb7debad1b423e68e9ab33c))


### chore

* delete deprecated apis/tests ([c163054](https://github.com/marko-js/marko/commit/c1630543fba7ca136d5986b4c19ecaa7f7fccb82))


### Features

* import compiler from marko-js/x ([02670c8](https://github.com/marko-js/marko/commit/02670c86931396c52a5a03a7ae4fcef873297f60))
* update apis/tests for new compiler ([ea6736d](https://github.com/marko-js/marko/commit/ea6736d085839debf91979be4f901d79dca9d2bd))


### BREAKING CHANGES

* api for compile-time tags has changed.
This affects tranformer/node-factory/code-generator tags.

Co-authored-by: Michael Rawlings <mirawlings@ebay.com>
Co-authored-by: Dylan Piercey <dpiercey@ebay.com>
Co-authored-by: Andrew Gliga <agliga@ebay.com>
* The following deprecated apis have been removed:
- Deprecated top-level entrypoints of the `marko` package
- The marko@3/marko-widgets@6 legacy compatibility layer
- Auto-migratable syntax and api changes to the core tags

Co-authored-by: Michael Rawlings <mirawlings@ebay.com>
Co-authored-by: Dylan Piercey <dpiercey@ebay.com>

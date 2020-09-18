# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

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

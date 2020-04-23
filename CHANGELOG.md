# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

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

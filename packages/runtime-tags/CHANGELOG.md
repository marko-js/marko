# @marko/runtime-tags

## 0.2.0

### Minor Changes

- [#2374](https://github.com/marko-js/marko/pull/2374) [`d8a9ee5`](https://github.com/marko-js/marko/commit/d8a9ee58a0ce0428c858886a3493aca0b9e91084) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Support valueChange attribute on `<return>` tag.

## 0.1.25

### Patch Changes

- [#2370](https://github.com/marko-js/marko/pull/2370) [`263e548`](https://github.com/marko-js/marko/commit/263e548ed8d00d6743ac3cb102730e2190866a0f) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Fix race condition with debug mode scheduler.

## 0.1.24

### Patch Changes

- [#2364](https://github.com/marko-js/marko/pull/2364) [`cbcd7ec`](https://github.com/marko-js/marko/commit/cbcd7ecd3bb6a670c0cbd90f02b3a16332a71282) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Add `return` method to asyncIterator on render method to better support apis that expect it to be there.

## 0.1.23

### Patch Changes

- [#2360](https://github.com/marko-js/marko/pull/2360) [`c94a263`](https://github.com/marko-js/marko/commit/c94a2633899ac71f56b7c0dda2b0f7fb04253e27) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Fix issue with referencing $global in tags api SSR.

- [#2363](https://github.com/marko-js/marko/pull/2363) [`e4f385f`](https://github.com/marko-js/marko/commit/e4f385f7b0071b55675492ff9aa983fa1fc59ba1) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Use same event handler name normalization and check between translator and runtime.

## 0.1.22

### Patch Changes

- [#2358](https://github.com/marko-js/marko/pull/2358) [`76951d8`](https://github.com/marko-js/marko/commit/76951d887d02e6f0dd3f0fe1345721d4a94a0069) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Always use MarkoTagBody AST nodes for control flow (even with attribute tags). This fixes a regression with the @marko/tags-api-preview and is more accurate to what is actually happening, especially from a variable scoping perspective.

## 0.1.21

### Patch Changes

- [#2356](https://github.com/marko-js/marko/pull/2356) [`7492eb8`](https://github.com/marko-js/marko/commit/7492eb819faf164fcbde34648dcfe72c406665f2) Thanks [@mlrawlings](https://github.com/mlrawlings)! - compiled output cleanup

## 0.1.20

### Patch Changes

- [#2354](https://github.com/marko-js/marko/pull/2354) [`a4069c2`](https://github.com/marko-js/marko/commit/a4069c2054f3168dd8f88a2be92faa510388e80c) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Add "value" attribute support to textarea and support controllable textarea's.

## 0.1.19

### Patch Changes

- [#2352](https://github.com/marko-js/marko/pull/2352) [`b32b01f`](https://github.com/marko-js/marko/commit/b32b01f66170ad551a25ac43567237a5f40faafb) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Fix issue with controllable elements inside a shadowroot.

## 0.1.18

### Patch Changes

- [#2350](https://github.com/marko-js/marko/pull/2350) [`6501821`](https://github.com/marko-js/marko/commit/6501821981f2c01008403dac4bb6f02a76e6ff51) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Misc improvements and refactoring to controllable inputs.

## 0.1.17

### Patch Changes

- [#2344](https://github.com/marko-js/marko/pull/2344) [`bafeac1`](https://github.com/marko-js/marko/commit/bafeac1db6acc73e5c38ade2a078485df28670b8) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Refactor attribute tag analysis and attribute translation to improve dead code removal.

## 0.1.16

### Patch Changes

- [#2340](https://github.com/marko-js/marko/pull/2340) [`33a1ba6`](https://github.com/marko-js/marko/commit/33a1ba61cdc47e56441ba3c9e9173372c4b8b6fa) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Switch <for> tag output to use a shared runtime.

## 0.1.15

### Patch Changes

- [#2330](https://github.com/marko-js/marko/pull/2330) [`76b7a00`](https://github.com/marko-js/marko/commit/76b7a00163a8054bf659a473b85486ceed657b61) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Refactor and simplify template parsing to use the Range api.

- [#2330](https://github.com/marko-js/marko/pull/2330) [`def0e6c`](https://github.com/marko-js/marko/commit/def0e6c308dd44d2cdc9f7a4340e29f8e26272fb) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Preffer `||=` over `??=` in the runtime since it downtranspiles to less code.

- [#2330](https://github.com/marko-js/marko/pull/2330) [`b582929`](https://github.com/marko-js/marko/commit/b582929fbd5ab52c42208dd8e8d20663b8ab35b1) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Ensure change handler error message are behind a debug guard

- [#2331](https://github.com/marko-js/marko/pull/2331) [`e4a6d8b`](https://github.com/marko-js/marko/commit/e4a6d8b46cfd852b2b45437dc2094f5065b6f6f5) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Make Template instances renderers (no longer access template renderer from "\_" property). Improve dynamic tag value normalization.

- [#2331](https://github.com/marko-js/marko/pull/2331) [`bdbe303`](https://github.com/marko-js/marko/commit/bdbe3037246d22776b45cae282a9571b263a15c5) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Remove "bindFunction" internal api, add support for serializing element references.

- [#2330](https://github.com/marko-js/marko/pull/2330) [`7199f87`](https://github.com/marko-js/marko/commit/7199f879a6e5cad26ba33ee486690d8a5bdb902e) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Remove "Before" and "After" walk codes since they are not used by the compiler and are not necessary.

- [#2331](https://github.com/marko-js/marko/pull/2331) [`8fe4e50`](https://github.com/marko-js/marko/commit/8fe4e502259a53719963087547c2ca1511106425) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Share html parsing logic between dynamic html runtime and template parsing.

## 0.1.14

### Patch Changes

- [#2309](https://github.com/marko-js/marko/pull/2309) [`2a971ce`](https://github.com/marko-js/marko/commit/2a971ce6617bf98f79c0b0840467c15ce413b0c9) Thanks [@rturnq](https://github.com/rturnq)! - Fix scope cleanup, make signals order independant and various fixes

## 0.1.13

### Patch Changes

- [#2296](https://github.com/marko-js/marko/pull/2296) [`81c5c0e`](https://github.com/marko-js/marko/commit/81c5c0e0436dc694f09c722f2103bfdc9cb3844f) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Improve support for @marko/compat.

## 0.1.12

### Patch Changes

- [#2293](https://github.com/marko-js/marko/pull/2293) [`3464f38`](https://github.com/marko-js/marko/commit/3464f389036047a19845ab1a74e11d82ff9ca946) Thanks [@rturnq](https://github.com/rturnq)! - Fix walker incorrectly getting next node when using OVER with a single node

## 0.1.11

### Patch Changes

- [#2284](https://github.com/marko-js/marko/pull/2284) [`d0723d3`](https://github.com/marko-js/marko/commit/d0723d398338d86b48524e230fe24d93d62ee19a) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Fix off by one issue for static statement sourcemaps (eg import) and for concise mode tags.

## 0.1.10

### Patch Changes

- [#2282](https://github.com/marko-js/marko/pull/2282) [`32e2eff`](https://github.com/marko-js/marko/commit/32e2eff5c3ecdcb36f7b6ed98ea2a1e705538a29) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Improve handling of sourcemaps for inline style blocks and tags.

- [#2281](https://github.com/marko-js/marko/pull/2281) [`10f61e2`](https://github.com/marko-js/marko/commit/10f61e206b81977de71a4054cf10d7ee497e3df3) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Minor improvement to inlined hydration output for tags api runtime

## 0.1.9

### Patch Changes

- [#2277](https://github.com/marko-js/marko/pull/2277) [`ce88d81`](https://github.com/marko-js/marko/commit/ce88d8194f98b4010032634f5427021810f6acdb) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Fix "off by one" issue with source location information when the index was at the start of the line.

## 0.1.8

### Patch Changes

- [#2274](https://github.com/marko-js/marko/pull/2274) [`5cea7d6`](https://github.com/marko-js/marko/commit/5cea7d65ead9b58d7d7d244078d279d561fd3ea7) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Optimize javascript parsing helpers to pass in start line / column information to babel rather than faking it with whitespace.

  For large templates this can have a significant impact on parsing performance.

## 0.1.7

### Patch Changes

- [#2252](https://github.com/marko-js/marko/pull/2252) [`339c28d`](https://github.com/marko-js/marko/commit/339c28dd590dc15b6a1011f38411809060f1a4ba) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Allow diagnostic fixes in parse stage.

## 0.1.6

### Patch Changes

- [#2240](https://github.com/marko-js/marko/pull/2240) [`a6bac65`](https://github.com/marko-js/marko/commit/a6bac65c114a22ac705490f9fbf2a81463762cd1) Thanks [@mlrawlings](https://github.com/mlrawlings)! - Stale closure bug

## 0.1.5

### Patch Changes

- [#2171](https://github.com/marko-js/marko/pull/2171) [`a2ce696`](https://github.com/marko-js/marko/commit/a2ce6968c4ef227dcc0f1d45d74305eb85b688e6) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Use console.createTask to preserve stack trace when queing.

- [#2171](https://github.com/marko-js/marko/pull/2171) [`608b57a`](https://github.com/marko-js/marko/commit/608b57ae44a14a77cceace880e180d28a0c5f305) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Optimize empty marker code not being stripped if unused

## 0.1.4

### Patch Changes

- [#2161](https://github.com/marko-js/marko/pull/2161) [`8ff7488`](https://github.com/marko-js/marko/commit/8ff74884311982b3f8895f47f9cbf8b31c6557b9) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Avoid using mutable exported bindings for stream data access in tags api. (It did not work in Vite/Rollup)

- [#2159](https://github.com/marko-js/marko/pull/2159) [`f9cf946`](https://github.com/marko-js/marko/commit/f9cf9467cd7e0cb59dd3254f9695a56434e97743) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Fix issue with interop translator incorrectly caching feature detection in parse stage with incomplete program.

- [#2159](https://github.com/marko-js/marko/pull/2159) [`f9cf946`](https://github.com/marko-js/marko/commit/f9cf9467cd7e0cb59dd3254f9695a56434e97743) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Expose runtime entry file information for tags api.

## 0.1.3

### Patch Changes

- [#2156](https://github.com/marko-js/marko/pull/2156) [`cbb9f95`](https://github.com/marko-js/marko/commit/cbb9f95cb09d27e739d017cf7734d9f7b6149adf) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Avoid using internal mangled props from tags api in the interop runtime.

## 0.1.2

### Patch Changes

- [#2138](https://github.com/marko-js/marko/pull/2138) [`105c26b`](https://github.com/marko-js/marko/commit/105c26bd4f7f37bd6073e4795b01b83d31ecda06) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Fix issue with package json src/dist override script.

## 0.1.1

### Patch Changes

- [#2136](https://github.com/marko-js/marko/pull/2136) [`6546c68`](https://github.com/marko-js/marko/commit/6546c68346f6935c98419626662088571549852a) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Remove private field from package.json

## 0.1.0

### Minor Changes

- [#2004](https://github.com/marko-js/marko/pull/2004) [`2704819`](https://github.com/marko-js/marko/commit/27048199d6a0ee48ed8118e9f7017a94c7dc4f3d) Thanks [@mlrawlings](https://github.com/mlrawlings)! - Release alpha of tags api translator/runtime.

- [#2004](https://github.com/marko-js/marko/pull/2004) [`2704819`](https://github.com/marko-js/marko/commit/27048199d6a0ee48ed8118e9f7017a94c7dc4f3d) Thanks [@mlrawlings](https://github.com/mlrawlings)! - Add `mount` api for client rendered components and expose `Symbol.asyncIterator` for server rendered components.

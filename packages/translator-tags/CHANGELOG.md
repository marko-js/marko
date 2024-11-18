# @marko/translator-tags

## 0.2.23

### Patch Changes

- [#2367](https://github.com/marko-js/marko/pull/2367) [`c8e943d`](https://github.com/marko-js/marko/commit/c8e943d30ea621356b14ce5a2bf8c040f9d41f82) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Ignore errors from child template analysis (assume child will be compiled after imported anyway).

- [#2367](https://github.com/marko-js/marko/pull/2367) [`c8e943d`](https://github.com/marko-js/marko/commit/c8e943d30ea621356b14ce5a2bf8c040f9d41f82) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - When unable to perform child template analysis, custom tag will become a dynamic tag.

- Updated dependencies [[`cbcd7ec`](https://github.com/marko-js/marko/commit/cbcd7ecd3bb6a670c0cbd90f02b3a16332a71282), [`c8e943d`](https://github.com/marko-js/marko/commit/c8e943d30ea621356b14ce5a2bf8c040f9d41f82)]:
  - @marko/runtime-tags@0.1.24
  - @marko/babel-utils@6.5.13

## 0.2.22

### Patch Changes

- [#2360](https://github.com/marko-js/marko/pull/2360) [`c94a263`](https://github.com/marko-js/marko/commit/c94a2633899ac71f56b7c0dda2b0f7fb04253e27) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Fix issue with referencing $global in tags api SSR.

- [#2363](https://github.com/marko-js/marko/pull/2363) [`e4f385f`](https://github.com/marko-js/marko/commit/e4f385f7b0071b55675492ff9aa983fa1fc59ba1) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Use same event handler name normalization and check between translator and runtime.

- Updated dependencies [[`c94a263`](https://github.com/marko-js/marko/commit/c94a2633899ac71f56b7c0dda2b0f7fb04253e27), [`e4f385f`](https://github.com/marko-js/marko/commit/e4f385f7b0071b55675492ff9aa983fa1fc59ba1)]:
  - @marko/runtime-tags@0.1.23

## 0.2.21

### Patch Changes

- [#2358](https://github.com/marko-js/marko/pull/2358) [`76951d8`](https://github.com/marko-js/marko/commit/76951d887d02e6f0dd3f0fe1345721d4a94a0069) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Always use MarkoTagBody AST nodes for control flow (even with attribute tags). This fixes a regression with the @marko/tags-api-preview and is more accurate to what is actually happening, especially from a variable scoping perspective.

- Updated dependencies [[`76951d8`](https://github.com/marko-js/marko/commit/76951d887d02e6f0dd3f0fe1345721d4a94a0069)]:
  - @marko/babel-utils@6.5.12
  - @marko/runtime-tags@0.1.22

## 0.2.20

### Patch Changes

- [#2356](https://github.com/marko-js/marko/pull/2356) [`7492eb8`](https://github.com/marko-js/marko/commit/7492eb819faf164fcbde34648dcfe72c406665f2) Thanks [@mlrawlings](https://github.com/mlrawlings)! - compiled output cleanup

- Updated dependencies [[`7492eb8`](https://github.com/marko-js/marko/commit/7492eb819faf164fcbde34648dcfe72c406665f2)]:
  - @marko/babel-utils@6.5.11
  - @marko/runtime-tags@0.1.21

## 0.2.19

### Patch Changes

- [#2354](https://github.com/marko-js/marko/pull/2354) [`a4069c2`](https://github.com/marko-js/marko/commit/a4069c2054f3168dd8f88a2be92faa510388e80c) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Add "value" attribute support to textarea and support controllable textarea's.

- Updated dependencies [[`a4069c2`](https://github.com/marko-js/marko/commit/a4069c2054f3168dd8f88a2be92faa510388e80c)]:
  - @marko/runtime-tags@0.1.20

## 0.2.18

### Patch Changes

- [#2352](https://github.com/marko-js/marko/pull/2352) [`b32b01f`](https://github.com/marko-js/marko/commit/b32b01f66170ad551a25ac43567237a5f40faafb) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Fix issue with controllable elements inside a shadowroot.

- Updated dependencies [[`b32b01f`](https://github.com/marko-js/marko/commit/b32b01f66170ad551a25ac43567237a5f40faafb)]:
  - @marko/runtime-tags@0.1.19

## 0.2.17

### Patch Changes

- [#2350](https://github.com/marko-js/marko/pull/2350) [`6501821`](https://github.com/marko-js/marko/commit/6501821981f2c01008403dac4bb6f02a76e6ff51) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Misc improvements and refactoring to controllable inputs.

- Updated dependencies [[`6501821`](https://github.com/marko-js/marko/commit/6501821981f2c01008403dac4bb6f02a76e6ff51)]:
  - @marko/runtime-tags@0.1.18

## 0.2.16

### Patch Changes

- [#2344](https://github.com/marko-js/marko/pull/2344) [`bafeac1`](https://github.com/marko-js/marko/commit/bafeac1db6acc73e5c38ade2a078485df28670b8) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Refactor attribute tag analysis and attribute translation to improve dead code removal.

- Updated dependencies [[`8ec88ff`](https://github.com/marko-js/marko/commit/8ec88fff87ef40ce19aba8992e075a839a61683e), [`bafeac1`](https://github.com/marko-js/marko/commit/bafeac1db6acc73e5c38ade2a078485df28670b8), [`bafeac1`](https://github.com/marko-js/marko/commit/bafeac1db6acc73e5c38ade2a078485df28670b8)]:
  - @marko/babel-utils@6.5.10
  - @marko/runtime-tags@0.1.17

## 0.2.15

### Patch Changes

- [#2342](https://github.com/marko-js/marko/pull/2342) [`8e07673`](https://github.com/marko-js/marko/commit/8e07673ca07cc83d9910c68ff8359264015c28d1) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Make attribute tags a property on the MarkoTag AST and refactor how attribute tags are translated.

- [#2340](https://github.com/marko-js/marko/pull/2340) [`33a1ba6`](https://github.com/marko-js/marko/commit/33a1ba61cdc47e56441ba3c9e9173372c4b8b6fa) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Switch <for> tag output to use a shared runtime.

- Updated dependencies [[`8e07673`](https://github.com/marko-js/marko/commit/8e07673ca07cc83d9910c68ff8359264015c28d1), [`33a1ba6`](https://github.com/marko-js/marko/commit/33a1ba61cdc47e56441ba3c9e9173372c4b8b6fa)]:
  - @marko/babel-utils@6.5.9
  - @marko/runtime-tags@0.1.16

## 0.2.14

### Patch Changes

- [#2337](https://github.com/marko-js/marko/pull/2337) [`ea95de1`](https://github.com/marko-js/marko/commit/ea95de1deaaa03bf2bc57b2518954084dbc1442f) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Avoid babel `startColumn` api until https://github.com/babel/babel/pull/16936 is merged.

- [#2337](https://github.com/marko-js/marko/pull/2337) [`40b41da`](https://github.com/marko-js/marko/commit/40b41dadfa325af3ac1cf25f7a89e18a0e868153) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Fix issue where incorrect function registry name was being generated.

- Updated dependencies [[`ea95de1`](https://github.com/marko-js/marko/commit/ea95de1deaaa03bf2bc57b2518954084dbc1442f)]:
  - @marko/babel-utils@6.5.8

## 0.2.13

### Patch Changes

- [#2332](https://github.com/marko-js/marko/pull/2332) [`719d8a1`](https://github.com/marko-js/marko/commit/719d8a10fd4952fa94c66ff5c7d11e38c8d0690c) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - XML Declarations are now a compile error (like cdata).

## 0.2.12

### Patch Changes

- [#2330](https://github.com/marko-js/marko/pull/2330) [`76b7a00`](https://github.com/marko-js/marko/commit/76b7a00163a8054bf659a473b85486ceed657b61) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Refactor and simplify template parsing to use the Range api.

- [#2330](https://github.com/marko-js/marko/pull/2330) [`def0e6c`](https://github.com/marko-js/marko/commit/def0e6c308dd44d2cdc9f7a4340e29f8e26272fb) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Preffer `||=` over `??=` in the runtime since it downtranspiles to less code.

- [#2330](https://github.com/marko-js/marko/pull/2330) [`b582929`](https://github.com/marko-js/marko/commit/b582929fbd5ab52c42208dd8e8d20663b8ab35b1) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Ensure change handler error message are behind a debug guard

- [#2328](https://github.com/marko-js/marko/pull/2328) [`13d039f`](https://github.com/marko-js/marko/commit/13d039f3075582796df81808b0d76d030a40920f) Thanks [@LuLaValva](https://github.com/LuLaValva)! - Only allow PascalCase for local variables as tags

- [#2331](https://github.com/marko-js/marko/pull/2331) [`e4a6d8b`](https://github.com/marko-js/marko/commit/e4a6d8b46cfd852b2b45437dc2094f5065b6f6f5) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Make Template instances renderers (no longer access template renderer from "\_" property). Improve dynamic tag value normalization.

- [#2331](https://github.com/marko-js/marko/pull/2331) [`bdbe303`](https://github.com/marko-js/marko/commit/bdbe3037246d22776b45cae282a9571b263a15c5) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Remove "bindFunction" internal api, add support for serializing element references.

- [#2330](https://github.com/marko-js/marko/pull/2330) [`7199f87`](https://github.com/marko-js/marko/commit/7199f879a6e5cad26ba33ee486690d8a5bdb902e) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Remove "Before" and "After" walk codes since they are not used by the compiler and are not necessary.

- Updated dependencies [[`76b7a00`](https://github.com/marko-js/marko/commit/76b7a00163a8054bf659a473b85486ceed657b61), [`def0e6c`](https://github.com/marko-js/marko/commit/def0e6c308dd44d2cdc9f7a4340e29f8e26272fb), [`b582929`](https://github.com/marko-js/marko/commit/b582929fbd5ab52c42208dd8e8d20663b8ab35b1), [`e4a6d8b`](https://github.com/marko-js/marko/commit/e4a6d8b46cfd852b2b45437dc2094f5065b6f6f5), [`bdbe303`](https://github.com/marko-js/marko/commit/bdbe3037246d22776b45cae282a9571b263a15c5), [`7199f87`](https://github.com/marko-js/marko/commit/7199f879a6e5cad26ba33ee486690d8a5bdb902e), [`8fe4e50`](https://github.com/marko-js/marko/commit/8fe4e502259a53719963087547c2ca1511106425)]:
  - @marko/runtime-tags@0.1.15

## 0.2.11

### Patch Changes

- [#2322](https://github.com/marko-js/marko/pull/2322) [`420405d`](https://github.com/marko-js/marko/commit/420405db952fcedafed0cb48d86620ca53bb2f1d) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Remove the default cache auto clearing behavior.
  Previously the default compiler "cache" was cleared every setImmediate. This was to support server hot reloading in apps using `Lasso` (and `browser-refresh`). Since we brought back support for `browser-refresh` in the Marko package we now clear this cache when browser-refresh triggers a change making the default cache clearing redundant.

## 0.2.10

### Patch Changes

- [#2309](https://github.com/marko-js/marko/pull/2309) [`2a971ce`](https://github.com/marko-js/marko/commit/2a971ce6617bf98f79c0b0840467c15ce413b0c9) Thanks [@rturnq](https://github.com/rturnq)! - Fix scope cleanup, make signals order independant and various fixes

- Updated dependencies [[`2a971ce`](https://github.com/marko-js/marko/commit/2a971ce6617bf98f79c0b0840467c15ce413b0c9), [`f06d4b0`](https://github.com/marko-js/marko/commit/f06d4b0559c3fbb3af67773c70b3aab25278b0ca)]:
  - @marko/runtime-tags@0.1.14
  - @marko/babel-utils@6.5.7

## 0.2.9

### Patch Changes

- [#2296](https://github.com/marko-js/marko/pull/2296) [`81c5c0e`](https://github.com/marko-js/marko/commit/81c5c0e0436dc694f09c722f2103bfdc9cb3844f) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Improve support for @marko/compat.

- Updated dependencies [[`81c5c0e`](https://github.com/marko-js/marko/commit/81c5c0e0436dc694f09c722f2103bfdc9cb3844f), [`81c5c0e`](https://github.com/marko-js/marko/commit/81c5c0e0436dc694f09c722f2103bfdc9cb3844f)]:
  - @marko/babel-utils@6.5.6
  - @marko/runtime-tags@0.1.13

## 0.2.8

### Patch Changes

- [#2293](https://github.com/marko-js/marko/pull/2293) [`3464f38`](https://github.com/marko-js/marko/commit/3464f389036047a19845ab1a74e11d82ff9ca946) Thanks [@rturnq](https://github.com/rturnq)! - Fix walker incorrectly getting next node when using OVER with a single node

- [#2291](https://github.com/marko-js/marko/pull/2291) [`616e79e`](https://github.com/marko-js/marko/commit/616e79e9c2dcdf6857582203a02db26a6d930cf7) Thanks [@rturnq](https://github.com/rturnq)! - Better analysis for single child optimization and support recursive components

- Updated dependencies [[`3464f38`](https://github.com/marko-js/marko/commit/3464f389036047a19845ab1a74e11d82ff9ca946)]:
  - @marko/runtime-tags@0.1.12

## 0.2.7

### Patch Changes

- [#2284](https://github.com/marko-js/marko/pull/2284) [`d0723d3`](https://github.com/marko-js/marko/commit/d0723d398338d86b48524e230fe24d93d62ee19a) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Fix off by one issue for static statement sourcemaps (eg import) and for concise mode tags.

- Updated dependencies [[`d0723d3`](https://github.com/marko-js/marko/commit/d0723d398338d86b48524e230fe24d93d62ee19a)]:
  - @marko/babel-utils@6.5.5
  - @marko/runtime-tags@0.1.11

## 0.2.6

### Patch Changes

- [#2282](https://github.com/marko-js/marko/pull/2282) [`32e2eff`](https://github.com/marko-js/marko/commit/32e2eff5c3ecdcb36f7b6ed98ea2a1e705538a29) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Improve handling of sourcemaps for inline style blocks and tags.

- [#2281](https://github.com/marko-js/marko/pull/2281) [`10f61e2`](https://github.com/marko-js/marko/commit/10f61e206b81977de71a4054cf10d7ee497e3df3) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Minor improvement to inlined hydration output for tags api runtime

- Updated dependencies [[`32e2eff`](https://github.com/marko-js/marko/commit/32e2eff5c3ecdcb36f7b6ed98ea2a1e705538a29), [`10f61e2`](https://github.com/marko-js/marko/commit/10f61e206b81977de71a4054cf10d7ee497e3df3)]:
  - @marko/babel-utils@6.5.4
  - @marko/runtime-tags@0.1.10

## 0.2.5

### Patch Changes

- [#2279](https://github.com/marko-js/marko/pull/2279) [`9411c9d`](https://github.com/marko-js/marko/commit/9411c9dc2c72f39f3c37563bfbe21942effee251) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Fix issue where MARKO_DEBUG was not being processed when bundling @marko/translator-tags and @marko/translator-interop.

## 0.2.4

### Patch Changes

- [#2277](https://github.com/marko-js/marko/pull/2277) [`ce88d81`](https://github.com/marko-js/marko/commit/ce88d8194f98b4010032634f5427021810f6acdb) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Fix "off by one" issue with source location information when the index was at the start of the line.

- Updated dependencies [[`ce88d81`](https://github.com/marko-js/marko/commit/ce88d8194f98b4010032634f5427021810f6acdb)]:
  - @marko/babel-utils@6.5.3
  - @marko/runtime-tags@0.1.9

## 0.2.3

### Patch Changes

- [#2274](https://github.com/marko-js/marko/pull/2274) [`5cea7d6`](https://github.com/marko-js/marko/commit/5cea7d65ead9b58d7d7d244078d279d561fd3ea7) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Optimize javascript parsing helpers to pass in start line / column information to babel rather than faking it with whitespace.

  For large templates this can have a significant impact on parsing performance.

- Updated dependencies [[`5cea7d6`](https://github.com/marko-js/marko/commit/5cea7d65ead9b58d7d7d244078d279d561fd3ea7)]:
  - @marko/babel-utils@6.5.2
  - @marko/runtime-tags@0.1.8

## 0.2.2

### Patch Changes

- [#2252](https://github.com/marko-js/marko/pull/2252) [`339c28d`](https://github.com/marko-js/marko/commit/339c28dd590dc15b6a1011f38411809060f1a4ba) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Allow diagnostic fixes in parse stage.

- Updated dependencies [[`339c28d`](https://github.com/marko-js/marko/commit/339c28dd590dc15b6a1011f38411809060f1a4ba)]:
  - @marko/babel-utils@6.5.1
  - @marko/runtime-tags@0.1.7

## 0.2.1

### Patch Changes

- [#2240](https://github.com/marko-js/marko/pull/2240) [`a6bac65`](https://github.com/marko-js/marko/commit/a6bac65c114a22ac705490f9fbf2a81463762cd1) Thanks [@mlrawlings](https://github.com/mlrawlings)! - Stale closure bug

- Updated dependencies [[`a6bac65`](https://github.com/marko-js/marko/commit/a6bac65c114a22ac705490f9fbf2a81463762cd1)]:
  - @marko/runtime-tags@0.1.6

## 0.2.0

### Minor Changes

- [#2238](https://github.com/marko-js/marko/pull/2238) [`a741f36`](https://github.com/marko-js/marko/commit/a741f36e60583a2403a912627765c3ec2aa824e5) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Add new optimizedRegistryIds compiler option

### Patch Changes

- Updated dependencies [[`a741f36`](https://github.com/marko-js/marko/commit/a741f36e60583a2403a912627765c3ec2aa824e5)]:
  - @marko/babel-utils@6.5.0

## 0.1.14

### Patch Changes

- [#2196](https://github.com/marko-js/marko/pull/2196) [`e98d1b2`](https://github.com/marko-js/marko/commit/e98d1b256499b8346fca20b89f0943d515573c9d) Thanks [@LuLaValva](https://github.com/LuLaValva)! - Fix collision with tags-api-preview

## 0.1.13

### Patch Changes

- [#2194](https://github.com/marko-js/marko/pull/2194) [`db33782`](https://github.com/marko-js/marko/commit/db337828c3b28fc13f902b42b1c96707954ff07e) Thanks [@mlrawlings](https://github.com/mlrawlings)! - State based registration & serialization

## 0.1.12

### Patch Changes

- [#2190](https://github.com/marko-js/marko/pull/2190) [`638ca07`](https://github.com/marko-js/marko/commit/638ca07db382345c26f90247115eef13394e9905) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Improve reference analysis

- [#2190](https://github.com/marko-js/marko/pull/2190) [`638ca07`](https://github.com/marko-js/marko/commit/638ca07db382345c26f90247115eef13394e9905) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Update dependencies

- Updated dependencies [[`638ca07`](https://github.com/marko-js/marko/commit/638ca07db382345c26f90247115eef13394e9905)]:
  - @marko/babel-utils@6.4.3

## 0.1.11

### Patch Changes

- [#2187](https://github.com/marko-js/marko/pull/2187) [`fe344b0`](https://github.com/marko-js/marko/commit/fe344b00041677f40ce49d03c0fb283322a1c898) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Fix some tags/class interop issues.

## 0.1.10

### Patch Changes

- [#2184](https://github.com/marko-js/marko/pull/2184) [`5513027`](https://github.com/marko-js/marko/commit/551302723bd6e5f6ab89b9202eb538990003ea1f) Thanks [@LuLaValva](https://github.com/LuLaValva)! - Add types for tags

- [#2182](https://github.com/marko-js/marko/pull/2182) [`1fa3b05`](https://github.com/marko-js/marko/commit/1fa3b056006d5d0e3ac221b5b4a18b78de5add21) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Support tracking the "input" using babels scope analysis.

## 0.1.9

### Patch Changes

- [#2173](https://github.com/marko-js/marko/pull/2173) [`614f432`](https://github.com/marko-js/marko/commit/614f432bfeab93eb35c23d6e378e914b27540f7f) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Fix regression where hydrate dependencies had the incorrect resolved path if they were in node_modules.

## 0.1.8

### Patch Changes

- [`409ef4e`](https://github.com/marko-js/marko/commit/409ef4e76d680b6e4202658fdf9567c663898d8b) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Fix regression where hydrate entry files had incorrect relative paths.

## 0.1.7

### Patch Changes

- [#2164](https://github.com/marko-js/marko/pull/2164) [`08823b9`](https://github.com/marko-js/marko/commit/08823b916b0aca172edeaba86b632a4cf5462a8a) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Fix issue with interop translator not outputting correct hydrate entry code.

- Updated dependencies [[`08823b9`](https://github.com/marko-js/marko/commit/08823b916b0aca172edeaba86b632a4cf5462a8a)]:
  - @marko/babel-utils@6.4.2

## 0.1.6

### Patch Changes

- [#2162](https://github.com/marko-js/marko/pull/2162) [`88b45d4`](https://github.com/marko-js/marko/commit/88b45d4901647ae99e8cfab29c5aa13ee4599358) Thanks [@rturnq](https://github.com/rturnq)! - Avoid pre-bundling interop and including tags runtime

## 0.1.5

### Patch Changes

- [#2161](https://github.com/marko-js/marko/pull/2161) [`8ff7488`](https://github.com/marko-js/marko/commit/8ff74884311982b3f8895f47f9cbf8b31c6557b9) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Avoid using mutable exported bindings for stream data access in tags api. (It did not work in Vite/Rollup)

- [#2159](https://github.com/marko-js/marko/pull/2159) [`f9cf946`](https://github.com/marko-js/marko/commit/f9cf9467cd7e0cb59dd3254f9695a56434e97743) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Fix issue with interop translator incorrectly caching feature detection in parse stage with incomplete program.

- [#2159](https://github.com/marko-js/marko/pull/2159) [`f9cf946`](https://github.com/marko-js/marko/commit/f9cf9467cd7e0cb59dd3254f9695a56434e97743) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Expose runtime entry file information for tags api.

- Updated dependencies [[`8ff7488`](https://github.com/marko-js/marko/commit/8ff74884311982b3f8895f47f9cbf8b31c6557b9), [`f9cf946`](https://github.com/marko-js/marko/commit/f9cf9467cd7e0cb59dd3254f9695a56434e97743), [`f9cf946`](https://github.com/marko-js/marko/commit/f9cf9467cd7e0cb59dd3254f9695a56434e97743)]:
  - @marko/runtime-tags@0.1.4

## 0.1.4

### Patch Changes

- [#2153](https://github.com/marko-js/marko/pull/2153) [`f2a924b`](https://github.com/marko-js/marko/commit/f2a924b2afa3d8f8810b71d72f91695c23bff4a2) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Fix issues with importing both cjs and mjs @marko/runtime-tags when loaded via compat layer.

## 0.1.3

### Patch Changes

- [#2140](https://github.com/marko-js/marko/pull/2140) [`4a1db86`](https://github.com/marko-js/marko/commit/4a1db8683d6c67fcff1bdbdaa76ab907c8b09170) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Fix issue where runtime was not being inlined into the translator bundle.

## 0.1.2

### Patch Changes

- [#2138](https://github.com/marko-js/marko/pull/2138) [`105c26b`](https://github.com/marko-js/marko/commit/105c26bd4f7f37bd6073e4795b01b83d31ecda06) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Fix issue with package json src/dist override script.

- Updated dependencies [[`105c26b`](https://github.com/marko-js/marko/commit/105c26bd4f7f37bd6073e4795b01b83d31ecda06)]:
  - @marko/babel-utils@6.4.1
  - @marko/runtime-tags@0.1.2

## 0.1.1

### Patch Changes

- [#2136](https://github.com/marko-js/marko/pull/2136) [`6546c68`](https://github.com/marko-js/marko/commit/6546c68346f6935c98419626662088571549852a) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Remove private field from package.json

- Updated dependencies [[`6546c68`](https://github.com/marko-js/marko/commit/6546c68346f6935c98419626662088571549852a)]:
  - @marko/runtime-tags@0.1.1

## 0.1.0

### Minor Changes

- [#2004](https://github.com/marko-js/marko/pull/2004) [`2704819`](https://github.com/marko-js/marko/commit/27048199d6a0ee48ed8118e9f7017a94c7dc4f3d) Thanks [@mlrawlings](https://github.com/mlrawlings)! - Release alpha of tags api translator/runtime.

- [#2004](https://github.com/marko-js/marko/pull/2004) [`2704819`](https://github.com/marko-js/marko/commit/27048199d6a0ee48ed8118e9f7017a94c7dc4f3d) Thanks [@mlrawlings](https://github.com/mlrawlings)! - Add `mount` api for client rendered components and expose `Symbol.asyncIterator` for server rendered components.

### Patch Changes

- Updated dependencies [[`2704819`](https://github.com/marko-js/marko/commit/27048199d6a0ee48ed8118e9f7017a94c7dc4f3d), [`2704819`](https://github.com/marko-js/marko/commit/27048199d6a0ee48ed8118e9f7017a94c7dc4f3d)]:
  - @marko/runtime-tags@0.1.0
  - @marko/babel-utils@6.4.0

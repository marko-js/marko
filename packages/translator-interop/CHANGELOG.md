# @marko/translator-interop-class-tags

## 0.1.32

### Patch Changes

- Updated dependencies [[`d8a9ee5`](https://github.com/marko-js/marko/commit/d8a9ee58a0ce0428c858886a3493aca0b9e91084)]:
  - @marko/translator-tags@0.3.0

## 0.1.31

### Patch Changes

- [#2367](https://github.com/marko-js/marko/pull/2367) [`c8e943d`](https://github.com/marko-js/marko/commit/c8e943d30ea621356b14ce5a2bf8c040f9d41f82) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Ignore errors from child template analysis (assume child will be compiled after imported anyway).

- Updated dependencies [[`c8e943d`](https://github.com/marko-js/marko/commit/c8e943d30ea621356b14ce5a2bf8c040f9d41f82), [`c8e943d`](https://github.com/marko-js/marko/commit/c8e943d30ea621356b14ce5a2bf8c040f9d41f82)]:
  - @marko/translator-tags@0.2.23
  - @marko/babel-utils@6.5.13
  - @marko/translator-default@6.0.25

## 0.1.30

### Patch Changes

- [#2358](https://github.com/marko-js/marko/pull/2358) [`76951d8`](https://github.com/marko-js/marko/commit/76951d887d02e6f0dd3f0fe1345721d4a94a0069) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Always use MarkoTagBody AST nodes for control flow (even with attribute tags). This fixes a regression with the @marko/tags-api-preview and is more accurate to what is actually happening, especially from a variable scoping perspective.

- Updated dependencies [[`76951d8`](https://github.com/marko-js/marko/commit/76951d887d02e6f0dd3f0fe1345721d4a94a0069)]:
  - @marko/translator-default@6.0.24
  - @marko/translator-tags@0.2.21
  - @marko/babel-utils@6.5.12

## 0.1.29

### Patch Changes

- [#2356](https://github.com/marko-js/marko/pull/2356) [`7492eb8`](https://github.com/marko-js/marko/commit/7492eb819faf164fcbde34648dcfe72c406665f2) Thanks [@mlrawlings](https://github.com/mlrawlings)! - compiled output cleanup

- Updated dependencies [[`7492eb8`](https://github.com/marko-js/marko/commit/7492eb819faf164fcbde34648dcfe72c406665f2)]:
  - @marko/babel-utils@6.5.11
  - @marko/translator-tags@0.2.20

## 0.1.28

### Patch Changes

- [#2346](https://github.com/marko-js/marko/pull/2346) [`8ec88ff`](https://github.com/marko-js/marko/commit/8ec88fff87ef40ce19aba8992e075a839a61683e) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Switch back to using babels startIndex api since the regression has been fixed.

- [#2344](https://github.com/marko-js/marko/pull/2344) [`bafeac1`](https://github.com/marko-js/marko/commit/bafeac1db6acc73e5c38ade2a078485df28670b8) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Refactor attribute tag analysis and attribute translation to improve dead code removal.

- Updated dependencies [[`8ec88ff`](https://github.com/marko-js/marko/commit/8ec88fff87ef40ce19aba8992e075a839a61683e), [`bafeac1`](https://github.com/marko-js/marko/commit/bafeac1db6acc73e5c38ade2a078485df28670b8), [`bafeac1`](https://github.com/marko-js/marko/commit/bafeac1db6acc73e5c38ade2a078485df28670b8)]:
  - @marko/babel-utils@6.5.10
  - @marko/translator-tags@0.2.16
  - @marko/translator-default@6.0.23

## 0.1.27

### Patch Changes

- [#2337](https://github.com/marko-js/marko/pull/2337) [`ea95de1`](https://github.com/marko-js/marko/commit/ea95de1deaaa03bf2bc57b2518954084dbc1442f) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Avoid babel `startColumn` api until https://github.com/babel/babel/pull/16936 is merged.

- Updated dependencies [[`ea95de1`](https://github.com/marko-js/marko/commit/ea95de1deaaa03bf2bc57b2518954084dbc1442f), [`40b41da`](https://github.com/marko-js/marko/commit/40b41dadfa325af3ac1cf25f7a89e18a0e868153)]:
  - @marko/translator-default@6.0.21
  - @marko/translator-tags@0.2.14
  - @marko/babel-utils@6.5.8

## 0.1.26

### Patch Changes

- [#2331](https://github.com/marko-js/marko/pull/2331) [`bdbe303`](https://github.com/marko-js/marko/commit/bdbe3037246d22776b45cae282a9571b263a15c5) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Remove "bindFunction" internal api, add support for serializing element references.

- Updated dependencies [[`76b7a00`](https://github.com/marko-js/marko/commit/76b7a00163a8054bf659a473b85486ceed657b61), [`def0e6c`](https://github.com/marko-js/marko/commit/def0e6c308dd44d2cdc9f7a4340e29f8e26272fb), [`b582929`](https://github.com/marko-js/marko/commit/b582929fbd5ab52c42208dd8e8d20663b8ab35b1), [`13d039f`](https://github.com/marko-js/marko/commit/13d039f3075582796df81808b0d76d030a40920f), [`e4a6d8b`](https://github.com/marko-js/marko/commit/e4a6d8b46cfd852b2b45437dc2094f5065b6f6f5), [`bdbe303`](https://github.com/marko-js/marko/commit/bdbe3037246d22776b45cae282a9571b263a15c5), [`7199f87`](https://github.com/marko-js/marko/commit/7199f879a6e5cad26ba33ee486690d8a5bdb902e)]:
  - @marko/translator-tags@0.2.12

## 0.1.25

### Patch Changes

- [#2309](https://github.com/marko-js/marko/pull/2309) [`2a971ce`](https://github.com/marko-js/marko/commit/2a971ce6617bf98f79c0b0840467c15ce413b0c9) Thanks [@rturnq](https://github.com/rturnq)! - Fix scope cleanup, make signals order independant and various fixes

- [#2310](https://github.com/marko-js/marko/pull/2310) [`f06d4b0`](https://github.com/marko-js/marko/commit/f06d4b0559c3fbb3af67773c70b3aab25278b0ca) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Avoid babel compiler assert api to fix a regression.

- Updated dependencies [[`2a971ce`](https://github.com/marko-js/marko/commit/2a971ce6617bf98f79c0b0840467c15ce413b0c9), [`f06d4b0`](https://github.com/marko-js/marko/commit/f06d4b0559c3fbb3af67773c70b3aab25278b0ca)]:
  - @marko/translator-tags@0.2.10
  - @marko/translator-default@6.0.16
  - @marko/babel-utils@6.5.7

## 0.1.24

### Patch Changes

- [#2296](https://github.com/marko-js/marko/pull/2296) [`81c5c0e`](https://github.com/marko-js/marko/commit/81c5c0e0436dc694f09c722f2103bfdc9cb3844f) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Improve support for @marko/compat.

- Updated dependencies [[`81c5c0e`](https://github.com/marko-js/marko/commit/81c5c0e0436dc694f09c722f2103bfdc9cb3844f), [`81c5c0e`](https://github.com/marko-js/marko/commit/81c5c0e0436dc694f09c722f2103bfdc9cb3844f)]:
  - @marko/babel-utils@6.5.6
  - @marko/translator-default@6.0.13
  - @marko/translator-tags@0.2.9

## 0.1.23

### Patch Changes

- [#2284](https://github.com/marko-js/marko/pull/2284) [`d0723d3`](https://github.com/marko-js/marko/commit/d0723d398338d86b48524e230fe24d93d62ee19a) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Fix off by one issue for static statement sourcemaps (eg import) and for concise mode tags.

- Updated dependencies [[`d0723d3`](https://github.com/marko-js/marko/commit/d0723d398338d86b48524e230fe24d93d62ee19a)]:
  - @marko/babel-utils@6.5.5
  - @marko/translator-default@6.0.10
  - @marko/translator-tags@0.2.7

## 0.1.22

### Patch Changes

- [#2282](https://github.com/marko-js/marko/pull/2282) [`32e2eff`](https://github.com/marko-js/marko/commit/32e2eff5c3ecdcb36f7b6ed98ea2a1e705538a29) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Improve handling of sourcemaps for inline style blocks and tags.

- [#2281](https://github.com/marko-js/marko/pull/2281) [`10f61e2`](https://github.com/marko-js/marko/commit/10f61e206b81977de71a4054cf10d7ee497e3df3) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Minor improvement to inlined hydration output for tags api runtime

- Updated dependencies [[`32e2eff`](https://github.com/marko-js/marko/commit/32e2eff5c3ecdcb36f7b6ed98ea2a1e705538a29), [`10f61e2`](https://github.com/marko-js/marko/commit/10f61e206b81977de71a4054cf10d7ee497e3df3)]:
  - @marko/translator-default@6.0.9
  - @marko/translator-tags@0.2.6
  - @marko/babel-utils@6.5.4

## 0.1.21

### Patch Changes

- [#2279](https://github.com/marko-js/marko/pull/2279) [`9411c9d`](https://github.com/marko-js/marko/commit/9411c9dc2c72f39f3c37563bfbe21942effee251) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Fix issue where MARKO_DEBUG was not being processed when bundling @marko/translator-tags and @marko/translator-interop.

- Updated dependencies [[`9411c9d`](https://github.com/marko-js/marko/commit/9411c9dc2c72f39f3c37563bfbe21942effee251)]:
  - @marko/translator-tags@0.2.5

## 0.1.20

### Patch Changes

- [#2277](https://github.com/marko-js/marko/pull/2277) [`ce88d81`](https://github.com/marko-js/marko/commit/ce88d8194f98b4010032634f5427021810f6acdb) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Fix "off by one" issue with source location information when the index was at the start of the line.

- Updated dependencies [[`ce88d81`](https://github.com/marko-js/marko/commit/ce88d8194f98b4010032634f5427021810f6acdb)]:
  - @marko/babel-utils@6.5.3
  - @marko/translator-default@6.0.8
  - @marko/translator-tags@0.2.4

## 0.1.19

### Patch Changes

- [#2274](https://github.com/marko-js/marko/pull/2274) [`5cea7d6`](https://github.com/marko-js/marko/commit/5cea7d65ead9b58d7d7d244078d279d561fd3ea7) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Optimize javascript parsing helpers to pass in start line / column information to babel rather than faking it with whitespace.

  For large templates this can have a significant impact on parsing performance.

- Updated dependencies [[`5cea7d6`](https://github.com/marko-js/marko/commit/5cea7d65ead9b58d7d7d244078d279d561fd3ea7)]:
  - @marko/babel-utils@6.5.2
  - @marko/translator-default@6.0.7
  - @marko/translator-tags@0.2.3

## 0.1.18

### Patch Changes

- [#2252](https://github.com/marko-js/marko/pull/2252) [`339c28d`](https://github.com/marko-js/marko/commit/339c28dd590dc15b6a1011f38411809060f1a4ba) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Allow diagnostic fixes in parse stage.

- Updated dependencies [[`339c28d`](https://github.com/marko-js/marko/commit/339c28dd590dc15b6a1011f38411809060f1a4ba), [`339c28d`](https://github.com/marko-js/marko/commit/339c28dd590dc15b6a1011f38411809060f1a4ba), [`339c28d`](https://github.com/marko-js/marko/commit/339c28dd590dc15b6a1011f38411809060f1a4ba)]:
  - @marko/translator-default@6.0.5
  - @marko/babel-utils@6.5.1
  - @marko/translator-tags@0.2.2

## 0.1.17

### Patch Changes

- [#2248](https://github.com/marko-js/marko/pull/2248) [`0ced6e1`](https://github.com/marko-js/marko/commit/0ced6e17c24808586bd24f025d77cfb3c391ea2e) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Fix typo in upgrade docs and adding missing `browser-refresh` module.

- Updated dependencies [[`0ced6e1`](https://github.com/marko-js/marko/commit/0ced6e17c24808586bd24f025d77cfb3c391ea2e)]:
  - @marko/translator-default@6.0.4

## 0.1.16

### Patch Changes

- [#2246](https://github.com/marko-js/marko/pull/2246) [`a699cd9`](https://github.com/marko-js/marko/commit/a699cd9434996b8da0a14acba39fd1db03c0329a) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Misc backward compat improvements:

  - Expose `marko/browser-refresh` as a noop
  - Allow translators to specify "optional" taglibs to load if they're installed (used for automatically loading compat taglibs)
  - `marko/node-require` legacy require hook now disables user babel transforms by default
  - Allow `<macro>` tag instances to use tag arguments syntax

- Updated dependencies [[`a699cd9`](https://github.com/marko-js/marko/commit/a699cd9434996b8da0a14acba39fd1db03c0329a)]:
  - @marko/translator-default@6.0.3

## 0.1.15

### Patch Changes

- Updated dependencies [[`a741f36`](https://github.com/marko-js/marko/commit/a741f36e60583a2403a912627765c3ec2aa824e5)]:
  - @marko/translator-tags@0.2.0
  - @marko/babel-utils@6.5.0

## 0.1.14

### Patch Changes

- Updated dependencies [[`0ee141c`](https://github.com/marko-js/marko/commit/0ee141c525899dcccd0ffa69b8012c8c23ed5d4f)]:
  - @marko/translator-default@6.0.0

## 0.1.13

### Patch Changes

- [#2196](https://github.com/marko-js/marko/pull/2196) [`e98d1b2`](https://github.com/marko-js/marko/commit/e98d1b256499b8346fca20b89f0943d515573c9d) Thanks [@LuLaValva](https://github.com/LuLaValva)! - Fix collision with tags-api-preview

- Updated dependencies [[`e98d1b2`](https://github.com/marko-js/marko/commit/e98d1b256499b8346fca20b89f0943d515573c9d)]:
  - @marko/translator-default@5.32.13
  - @marko/translator-tags@0.1.14

## 0.1.12

### Patch Changes

- [#2194](https://github.com/marko-js/marko/pull/2194) [`db33782`](https://github.com/marko-js/marko/commit/db337828c3b28fc13f902b42b1c96707954ff07e) Thanks [@mlrawlings](https://github.com/mlrawlings)! - State based registration & serialization

- Updated dependencies [[`db33782`](https://github.com/marko-js/marko/commit/db337828c3b28fc13f902b42b1c96707954ff07e)]:
  - @marko/translator-tags@0.1.13

## 0.1.11

### Patch Changes

- [#2190](https://github.com/marko-js/marko/pull/2190) [`638ca07`](https://github.com/marko-js/marko/commit/638ca07db382345c26f90247115eef13394e9905) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Update dependencies

- Updated dependencies [[`638ca07`](https://github.com/marko-js/marko/commit/638ca07db382345c26f90247115eef13394e9905), [`638ca07`](https://github.com/marko-js/marko/commit/638ca07db382345c26f90247115eef13394e9905)]:
  - @marko/translator-tags@0.1.12
  - @marko/babel-utils@6.4.3
  - @marko/translator-default@5.32.12

## 0.1.10

### Patch Changes

- [#2187](https://github.com/marko-js/marko/pull/2187) [`fe344b0`](https://github.com/marko-js/marko/commit/fe344b00041677f40ce49d03c0fb283322a1c898) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Fix some tags/class interop issues.

- Updated dependencies [[`fe344b0`](https://github.com/marko-js/marko/commit/fe344b00041677f40ce49d03c0fb283322a1c898)]:
  - @marko/translator-tags@0.1.11
  - @marko/translator-default@5.32.11

## 0.1.9

### Patch Changes

- [#2182](https://github.com/marko-js/marko/pull/2182) [`1fa3b05`](https://github.com/marko-js/marko/commit/1fa3b056006d5d0e3ac221b5b4a18b78de5add21) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Support tracking the "input" using babels scope analysis.

- Updated dependencies [[`5513027`](https://github.com/marko-js/marko/commit/551302723bd6e5f6ab89b9202eb538990003ea1f), [`1fa3b05`](https://github.com/marko-js/marko/commit/1fa3b056006d5d0e3ac221b5b4a18b78de5add21)]:
  - @marko/translator-tags@0.1.10
  - @marko/translator-default@5.32.10

## 0.1.8

### Patch Changes

- [#2173](https://github.com/marko-js/marko/pull/2173) [`614f432`](https://github.com/marko-js/marko/commit/614f432bfeab93eb35c23d6e378e914b27540f7f) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Fix regression where hydrate dependencies had the incorrect resolved path if they were in node_modules.

- Updated dependencies [[`614f432`](https://github.com/marko-js/marko/commit/614f432bfeab93eb35c23d6e378e914b27540f7f)]:
  - @marko/translator-default@5.32.8
  - @marko/translator-tags@0.1.9

## 0.1.7

### Patch Changes

- [`409ef4e`](https://github.com/marko-js/marko/commit/409ef4e76d680b6e4202658fdf9567c663898d8b) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Fix regression where hydrate entry files had incorrect relative paths.

- Updated dependencies [[`409ef4e`](https://github.com/marko-js/marko/commit/409ef4e76d680b6e4202658fdf9567c663898d8b)]:
  - @marko/translator-default@5.32.7
  - @marko/translator-tags@0.1.8

## 0.1.6

### Patch Changes

- [#2164](https://github.com/marko-js/marko/pull/2164) [`08823b9`](https://github.com/marko-js/marko/commit/08823b916b0aca172edeaba86b632a4cf5462a8a) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Fix issue with interop translator not outputting correct hydrate entry code.

- Updated dependencies [[`08823b9`](https://github.com/marko-js/marko/commit/08823b916b0aca172edeaba86b632a4cf5462a8a)]:
  - @marko/translator-default@5.32.6
  - @marko/translator-tags@0.1.7
  - @marko/babel-utils@6.4.2

## 0.1.5

### Patch Changes

- [#2159](https://github.com/marko-js/marko/pull/2159) [`f9cf946`](https://github.com/marko-js/marko/commit/f9cf9467cd7e0cb59dd3254f9695a56434e97743) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Fix issue with interop translator incorrectly caching feature detection in parse stage with incomplete program.

- [#2159](https://github.com/marko-js/marko/pull/2159) [`f9cf946`](https://github.com/marko-js/marko/commit/f9cf9467cd7e0cb59dd3254f9695a56434e97743) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Expose runtime entry file information for tags api.

- Updated dependencies [[`8ff7488`](https://github.com/marko-js/marko/commit/8ff74884311982b3f8895f47f9cbf8b31c6557b9), [`f9cf946`](https://github.com/marko-js/marko/commit/f9cf9467cd7e0cb59dd3254f9695a56434e97743), [`f9cf946`](https://github.com/marko-js/marko/commit/f9cf9467cd7e0cb59dd3254f9695a56434e97743)]:
  - @marko/translator-tags@0.1.5
  - @marko/translator-default@5.32.4

## 0.1.4

### Patch Changes

- [#2153](https://github.com/marko-js/marko/pull/2153) [`f2a924b`](https://github.com/marko-js/marko/commit/f2a924b2afa3d8f8810b71d72f91695c23bff4a2) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Fix issues with importing both cjs and mjs @marko/runtime-tags when loaded via compat layer.

- Updated dependencies [[`f2a924b`](https://github.com/marko-js/marko/commit/f2a924b2afa3d8f8810b71d72f91695c23bff4a2)]:
  - @marko/translator-default@5.32.3
  - @marko/translator-tags@0.1.4

## 0.1.3

### Patch Changes

- [#2148](https://github.com/marko-js/marko/pull/2148) [`b095755`](https://github.com/marko-js/marko/commit/b09575529493039ade02d9c35bcf21d5d4e6ef1d) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Fix issue with interop translator loading init-components tag.

- Updated dependencies [[`b095755`](https://github.com/marko-js/marko/commit/b09575529493039ade02d9c35bcf21d5d4e6ef1d)]:
  - @marko/translator-default@5.32.2

## 0.1.2

### Patch Changes

- [#2138](https://github.com/marko-js/marko/pull/2138) [`105c26b`](https://github.com/marko-js/marko/commit/105c26bd4f7f37bd6073e4795b01b83d31ecda06) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Fix issue with package json src/dist override script.

- Updated dependencies [[`105c26b`](https://github.com/marko-js/marko/commit/105c26bd4f7f37bd6073e4795b01b83d31ecda06)]:
  - @marko/babel-utils@6.4.1
  - @marko/translator-default@5.32.1
  - @marko/translator-tags@0.1.2

## 0.1.1

### Patch Changes

- [#2136](https://github.com/marko-js/marko/pull/2136) [`6546c68`](https://github.com/marko-js/marko/commit/6546c68346f6935c98419626662088571549852a) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Remove private field from package.json

- Updated dependencies [[`6546c68`](https://github.com/marko-js/marko/commit/6546c68346f6935c98419626662088571549852a)]:
  - @marko/translator-tags@0.1.1

## 0.1.0

### Minor Changes

- [#2004](https://github.com/marko-js/marko/pull/2004) [`2704819`](https://github.com/marko-js/marko/commit/27048199d6a0ee48ed8118e9f7017a94c7dc4f3d) Thanks [@mlrawlings](https://github.com/mlrawlings)! - Release alpha of tags api translator/runtime.

- [#2004](https://github.com/marko-js/marko/pull/2004) [`2704819`](https://github.com/marko-js/marko/commit/27048199d6a0ee48ed8118e9f7017a94c7dc4f3d) Thanks [@mlrawlings](https://github.com/mlrawlings)! - Add `mount` api for client rendered components and expose `Symbol.asyncIterator` for server rendered components.

### Patch Changes

- Updated dependencies [[`2704819`](https://github.com/marko-js/marko/commit/27048199d6a0ee48ed8118e9f7017a94c7dc4f3d), [`2704819`](https://github.com/marko-js/marko/commit/27048199d6a0ee48ed8118e9f7017a94c7dc4f3d)]:
  - @marko/translator-default@5.32.0
  - @marko/translator-tags@0.1.0
  - @marko/babel-utils@6.4.0

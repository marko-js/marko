# @marko/translator-interop-class-tags

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

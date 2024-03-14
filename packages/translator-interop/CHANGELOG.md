# @marko/translator-interop-class-tags

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

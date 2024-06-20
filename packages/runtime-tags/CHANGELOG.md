# @marko/runtime-tags

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

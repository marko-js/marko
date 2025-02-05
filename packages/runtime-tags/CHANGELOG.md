# @marko/runtime-tags

## 0.3.33

### Patch Changes

- [#2496](https://github.com/marko-js/marko/pull/2496) [`536081d`](https://github.com/marko-js/marko/commit/536081d43069e78ecf198af93f66fa000218e13e) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Fix resuming tag vars.

## 0.3.32

### Patch Changes

- [#2494](https://github.com/marko-js/marko/pull/2494) [`7101f5b`](https://github.com/marko-js/marko/commit/7101f5ba83d2ca097187c3a381959f42a885cdf7) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Fix issue with owner scope for assignments to closures not being serialized.

## 0.3.31

### Patch Changes

- [#2492](https://github.com/marko-js/marko/pull/2492) [`64e53bb`](https://github.com/marko-js/marko/commit/64e53bb979c133a03999ceb18e6f277a0f6549d4) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Fix issue with generating code for static repeated attribute tags.

## 0.3.30

### Patch Changes

- [#2490](https://github.com/marko-js/marko/pull/2490) [`07f97f1`](https://github.com/marko-js/marko/commit/07f97f187a320d6476fb77eef520a2d2f6ca2a73) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Fix issue where details and dialog elements were incorrectly running change handlers when the value had not changed.

## 0.3.29

### Patch Changes

- [#2488](https://github.com/marko-js/marko/pull/2488) [`c6f9927`](https://github.com/marko-js/marko/commit/c6f99275327489709b4934326075586baee5ad39) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Support namespaced tags (svg/math).

## 0.3.28

### Patch Changes

- [#2485](https://github.com/marko-js/marko/pull/2485) [`09c0558`](https://github.com/marko-js/marko/commit/09c0558a1b26df2d828d56bd853f885a17683e38) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Fix issue where streams that had aborted but then finished were swallowing the abort error.

- [#2485](https://github.com/marko-js/marko/pull/2485) [`09c0558`](https://github.com/marko-js/marko/commit/09c0558a1b26df2d828d56bd853f885a17683e38) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Add errors with debug info when attempting to serialize a non serializable value.

- [#2485](https://github.com/marko-js/marko/pull/2485) [`09c0558`](https://github.com/marko-js/marko/commit/09c0558a1b26df2d828d56bd853f885a17683e38) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Ensure Marko 5 renderBodies are serialized properly across the compat layer.

- Updated dependencies [[`09c0558`](https://github.com/marko-js/marko/commit/09c0558a1b26df2d828d56bd853f885a17683e38)]:
  - @marko/compiler@5.39.12

## 0.3.27

### Patch Changes

- [#2483](https://github.com/marko-js/marko/pull/2483) [`0135f5b`](https://github.com/marko-js/marko/commit/0135f5b55495aef81f081db1a909d4be153bf3e4) Thanks [@rturnq](https://github.com/rturnq)! - Branch end nodes could end up being shared in resume, insert new branch after previous end node

- [#2480](https://github.com/marko-js/marko/pull/2480) [`622d328`](https://github.com/marko-js/marko/commit/622d328858bc857e8622d0b14105726641ab66d5) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Minor refactoring and cleanup.

- [#2482](https://github.com/marko-js/marko/pull/2482) [`99c7428`](https://github.com/marko-js/marko/commit/99c7428302af89fd7b440ab41856d67311fc045e) Thanks [@LuLaValva](https://github.com/LuLaValva)! - Ignore events during the render phase

## 0.3.26

### Patch Changes

- [#2479](https://github.com/marko-js/marko/pull/2479) [`87fdb82`](https://github.com/marko-js/marko/commit/87fdb82645ddefe9953c467d476fc6344ccd4d1d) Thanks [@LuLaValva](https://github.com/LuLaValva)! - Fix nested branch scope signals

- [#2476](https://github.com/marko-js/marko/pull/2476) [`36eab94`](https://github.com/marko-js/marko/commit/36eab947c870b98135a1e391acd56b6687def4f2) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Start tag/scope/reorder ids at 1.

- [#2476](https://github.com/marko-js/marko/pull/2476) [`f481b92`](https://github.com/marko-js/marko/commit/f481b92002f8faa44537a5e8ce45667f488e06e2) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Refactor render queue sorting.

- [#2478](https://github.com/marko-js/marko/pull/2478) [`033332e`](https://github.com/marko-js/marko/commit/033332ed5fd7afbe2709cc2be91367c06dc4e531) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Minor refactoring.

## 0.3.25

### Patch Changes

- [#2474](https://github.com/marko-js/marko/pull/2474) [`52d26c3`](https://github.com/marko-js/marko/commit/52d26c36c8cb8340c36a4ea42f816084ecb47a74) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Fix issue with incorrect render sorting for newly created scopes.

## 0.3.24

### Patch Changes

- [#2472](https://github.com/marko-js/marko/pull/2472) [`4608c46`](https://github.com/marko-js/marko/commit/4608c4689cad67a55719f5a5e57fd1845c69d68c) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Switch back to HTMLTemplateElement for parsing client side html content to avoid automatic tag insertions from the document range api.

## 0.3.23

### Patch Changes

- [#2470](https://github.com/marko-js/marko/pull/2470) [`218c436`](https://github.com/marko-js/marko/commit/218c43674e478062cdbc0fcbaef0dc13cd79107f) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Fix issue where code within a control flow could execute after the control flow was removed.

- [#2469](https://github.com/marko-js/marko/pull/2469) [`f99d363`](https://github.com/marko-js/marko/commit/f99d363cd0597be495d486f48395192842da7262) Thanks [@LuLaValva](https://github.com/LuLaValva)! - Edit TypeScript names for event handlers

- [#2468](https://github.com/marko-js/marko/pull/2468) [`2762924`](https://github.com/marko-js/marko/commit/276292455b16bbbd2869f465b7af5f891f88fa6d) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Fix issue concatinating effects in html writer.

- [#2470](https://github.com/marko-js/marko/pull/2470) [`218c436`](https://github.com/marko-js/marko/commit/218c43674e478062cdbc0fcbaef0dc13cd79107f) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Improve tags / class api interop layer for destroyed tags.

- Updated dependencies [[`218c436`](https://github.com/marko-js/marko/commit/218c43674e478062cdbc0fcbaef0dc13cd79107f)]:
  - @marko/compiler@5.39.11

## 0.3.22

### Patch Changes

- [#2466](https://github.com/marko-js/marko/pull/2466) [`34e85cc`](https://github.com/marko-js/marko/commit/34e85ccd4f1944372ac6ed0a0911fdd9be2eac6c) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Ensure external style files are imported for tags api component.

## 0.3.21

### Patch Changes

- [#2464](https://github.com/marko-js/marko/pull/2464) [`68b904f`](https://github.com/marko-js/marko/commit/68b904f6a1751b1648421447abb8b438af3c22b3) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Fix issue reading custom tag var closures.

## 0.3.20

### Patch Changes

- [#2460](https://github.com/marko-js/marko/pull/2460) [`d9cc4e7`](https://github.com/marko-js/marko/commit/d9cc4e723abb53a5d5a6c090935facd7745146c2) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Fix issue with attempting to hoist a member expression that was a computed identifier.

- [#2461](https://github.com/marko-js/marko/pull/2461) [`e6ffdbe`](https://github.com/marko-js/marko/commit/e6ffdbe6781385bd3ae7cfab9e16d349eda7cb0c) Thanks [@LuLaValva](https://github.com/LuLaValva)! - Fix adjacent bound values

- [#2459](https://github.com/marko-js/marko/pull/2459) [`1722472`](https://github.com/marko-js/marko/commit/172247289a195c1e3fd43ff1bbcb548ed53ff3cf) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Fix element references when used as the argument of a call expression.

## 0.3.19

### Patch Changes

- [#2458](https://github.com/marko-js/marko/pull/2458) [`76b3083`](https://github.com/marko-js/marko/commit/76b3083a06741f2a636cf3c21fb53fd7c22290eb) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Add basic ssr try tag.

- [#2456](https://github.com/marko-js/marko/pull/2456) [`5cc3648`](https://github.com/marko-js/marko/commit/5cc3648eb5cc20df621c3a89e31ae84014d0a078) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Fix async runtime placeholder duplication and race condition.

- [#2458](https://github.com/marko-js/marko/pull/2458) [`491413d`](https://github.com/marko-js/marko/commit/491413d2ec93ae136c6417dd19b339f7f1cd2afd) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Add await tag ssr.

## 0.3.18

### Patch Changes

- [#2451](https://github.com/marko-js/marko/pull/2451) [`602eaad`](https://github.com/marko-js/marko/commit/602eaad0a48047b2fb678b8e77d6b345a0930b8d) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Avoid swallowing errors when resolved paths in marko.json files could not be resolve (now leaves the value as is, previously would ignore the path).

- [#2449](https://github.com/marko-js/marko/pull/2449) [`6cf4978`](https://github.com/marko-js/marko/commit/6cf4978d765914e1d1c3ee62a3c691ce20c4903b) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Support aggregate errors when final error is a HTMLJS parser error.

- Updated dependencies [[`602eaad`](https://github.com/marko-js/marko/commit/602eaad0a48047b2fb678b8e77d6b345a0930b8d), [`6cf4978`](https://github.com/marko-js/marko/commit/6cf4978d765914e1d1c3ee62a3c691ce20c4903b)]:
  - @marko/compiler@5.39.9

## 0.3.17

### Patch Changes

- [#2445](https://github.com/marko-js/marko/pull/2445) [`b12d7a9`](https://github.com/marko-js/marko/commit/b12d7a9b76dd9fca89ed717b8491b08d5e927fe0) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Add engines field to package.json

- Updated dependencies [[`b12d7a9`](https://github.com/marko-js/marko/commit/b12d7a9b76dd9fca89ed717b8491b08d5e927fe0)]:
  - @marko/compiler@5.39.8

## 0.3.16

### Patch Changes

- [#2443](https://github.com/marko-js/marko/pull/2443) [`c0232bc`](https://github.com/marko-js/marko/commit/c0232bc85edd86fa7ad68dede34af3fbfe892052) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Add missing PURE comment to dom runtime.

## 0.3.15

### Patch Changes

- [#2441](https://github.com/marko-js/marko/pull/2441) [`cfd6906`](https://github.com/marko-js/marko/commit/cfd6906752eea9ea1b8f274668baf324ee186890) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Release Marko 6 beta with `next` prefix for easier semver targeting.

## 0.3.14

### Patch Changes

- [#2438](https://github.com/marko-js/marko/pull/2438) [`4b6c613`](https://github.com/marko-js/marko/commit/4b6c6135badad6db7e4a8f0f59fb005ed66b04fa) Thanks [@mlrawlings](https://github.com/mlrawlings)! - use tags/ instead of components/ for runtime-tags

- [#2439](https://github.com/marko-js/marko/pull/2439) [`8ebe566`](https://github.com/marko-js/marko/commit/8ebe566854179ad8cf8cfca7858d607ab208c01e) Thanks [@mlrawlings](https://github.com/mlrawlings)! - fix: remove duplicate imports of compat runtime

- [#2436](https://github.com/marko-js/marko/pull/2436) [`a364d1e`](https://github.com/marko-js/marko/commit/a364d1ebd85d0a71c49018c614ca9424fc7e5976) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Rename renderBody to content for tags api.

- Updated dependencies [[`4b6c613`](https://github.com/marko-js/marko/commit/4b6c6135badad6db7e4a8f0f59fb005ed66b04fa), [`8ebe566`](https://github.com/marko-js/marko/commit/8ebe566854179ad8cf8cfca7858d607ab208c01e)]:
  - @marko/compiler@5.39.7

## 0.3.13

### Patch Changes

- [#2434](https://github.com/marko-js/marko/pull/2434) [`6a235a8`](https://github.com/marko-js/marko/commit/6a235a88813cd45a8704060e4fac3ed82c2f3437) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Improve registry id normalization.

- Updated dependencies [[`6a235a8`](https://github.com/marko-js/marko/commit/6a235a88813cd45a8704060e4fac3ed82c2f3437)]:
  - @marko/compiler@5.39.6

## 0.3.12

### Patch Changes

- [#2432](https://github.com/marko-js/marko/pull/2432) [`6078d47`](https://github.com/marko-js/marko/commit/6078d474c2285df8a22705d0d4edeccb7a4bd204) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Fix exported types.

## 0.3.11

### Patch Changes

- [#2429](https://github.com/marko-js/marko/pull/2429) [`f3416e1`](https://github.com/marko-js/marko/commit/f3416e1d9352892e8a603d7196cc685c2f88fe26) Thanks [@mlrawlings](https://github.com/mlrawlings)! - fix controllable details toggle loop

## 0.3.10

### Patch Changes

- [#2428](https://github.com/marko-js/marko/pull/2428) [`22cc604`](https://github.com/marko-js/marko/commit/22cc604e38ffc957195349c710cae340dd1a7825) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Add tags api runtime types.

- [#2428](https://github.com/marko-js/marko/pull/2428) [`e72fa84`](https://github.com/marko-js/marko/commit/e72fa84a7293bd348a39e20b011228dfd937322f) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Upgrade dependencies.

## 0.3.9

### Patch Changes

- [#2426](https://github.com/marko-js/marko/pull/2426) [`2142dfd`](https://github.com/marko-js/marko/commit/2142dfd05d6b6ebc5f55883ca13a15847cdb07fa) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Use statement parsing for script tag to improve sourcemap accuracy.

- [#2426](https://github.com/marko-js/marko/pull/2426) [`2142dfd`](https://github.com/marko-js/marko/commit/2142dfd05d6b6ebc5f55883ca13a15847cdb07fa) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Fix issue where negative sourcemap offets leaning to the previous line were outputting incorrect values.

## 0.3.8

### Patch Changes

- [#2424](https://github.com/marko-js/marko/pull/2424) [`0c6fea2`](https://github.com/marko-js/marko/commit/0c6fea2f0f8ae8024a3dd8dff46d08805b779a08) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Fix tag-types not being exposed.

## 0.3.7

### Patch Changes

- [`e60bd4f`](https://github.com/marko-js/marko/commit/e60bd4fd25ccee475dad49195fca64024a6164bf) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Fix incorrect filepath for marko babel transform.

## 0.3.6

### Patch Changes

- [#2420](https://github.com/marko-js/marko/pull/2420) [`4a980fe`](https://github.com/marko-js/marko/commit/4a980fe444299f095f0f423767d5340e15c33682) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Fix publish alias issue.

## 0.3.5

### Patch Changes

- [#2418](https://github.com/marko-js/marko/pull/2418) [`00e7392`](https://github.com/marko-js/marko/commit/00e7392361a17f49345400d53644bcee13e9b375) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Fix issue when parsing embedded script code with negative offset locations.

## 0.3.4

### Patch Changes

- [#2416](https://github.com/marko-js/marko/pull/2416) [`619c87f`](https://github.com/marko-js/marko/commit/619c87faeebc31f6885bbb868fc89bab8a90ebea) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Fix package json repository config.

## 0.3.3

### Patch Changes

- [#2414](https://github.com/marko-js/marko/pull/2414) [`58c8886`](https://github.com/marko-js/marko/commit/58c8886cb99bfbaa763f4eecfe636b4d374f6a68) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Attempt 2 at release alias via github action.

## 0.3.2

### Patch Changes

- [#2412](https://github.com/marko-js/marko/pull/2412) [`3e660d8`](https://github.com/marko-js/marko/commit/3e660d8602b77d4c657558e913a19f4f7b43e65b) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Attempt 1 to alias tags api to marko@6

## 0.3.1

### Patch Changes

- [#2410](https://github.com/marko-js/marko/pull/2410) [`2f68463`](https://github.com/marko-js/marko/commit/2f6846382a7f6ad5de10a0978a69a16fa37c6dc0) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Create marko@6 publish alias scripts.

- [#2410](https://github.com/marko-js/marko/pull/2410) [`2f68463`](https://github.com/marko-js/marko/commit/2f6846382a7f6ad5de10a0978a69a16fa37c6dc0) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Use relative paths for tags translator to tags runtime.

## 0.3.0

### Minor Changes

- [#2408](https://github.com/marko-js/marko/pull/2408) [`2be37f7`](https://github.com/marko-js/marko/commit/2be37f72d3030621e2f85b6615731a5af24e0211) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Merge translator packages into their respective runtime packages.

## 0.2.5

### Patch Changes

- [#2404](https://github.com/marko-js/marko/pull/2404) [`fbc0cef`](https://github.com/marko-js/marko/commit/fbc0cefb860cd91142231df04c05b7e4c0d1b1ee) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Upgrade all dependencies. Fix support for latest babel version.

## 0.2.4

### Patch Changes

- [#2399](https://github.com/marko-js/marko/pull/2399) [`032afa1`](https://github.com/marko-js/marko/commit/032afa125b19969346639ac99ae9740521d0c3a2) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Refactor and improve logic around functon registration, binding renaming, and binding assignments.

- [#2401](https://github.com/marko-js/marko/pull/2401) [`46f8d7c`](https://github.com/marko-js/marko/commit/46f8d7cfba231d1ab724fec83f07d1192d5d4d7f) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Add support for tags API script tag.

## 0.2.3

### Patch Changes

- [#2382](https://github.com/marko-js/marko/pull/2382) [`fefe9ae`](https://github.com/marko-js/marko/commit/fefe9ae6681beaf15728afb48ce64e86030853b9) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Ensure native tag controlled elements and event handler scopes are serialized.

- [#2392](https://github.com/marko-js/marko/pull/2392) [`c7bcf4b`](https://github.com/marko-js/marko/commit/c7bcf4b363a5b7824fa8222b6a01dbf139a25528) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Fix issues with dynamic for by attribute.

## 0.2.2

### Patch Changes

- [#2378](https://github.com/marko-js/marko/pull/2378) [`ecfba07`](https://github.com/marko-js/marko/commit/ecfba07954ecfd80c1f2eecfe7791529278e801b) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Add trailing HTML api and ensure that closing `</body>` and `</html>` are always appended to the end of the stream if they are rendered.

## 0.2.1

### Patch Changes

- [#2376](https://github.com/marko-js/marko/pull/2376) [`07de4fc`](https://github.com/marko-js/marko/commit/07de4fc6fb3a17d2c059292bfade4ef0e22d9cec) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Expose psuedo internal `$global.__flush__` api to be used by bundler integrations.

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

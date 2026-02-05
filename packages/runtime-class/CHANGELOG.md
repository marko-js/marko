# Change Log

## 5.38.21

### Patch Changes

- [#3073](https://github.com/marko-js/marko/pull/3073) [`1aabdc3`](https://github.com/marko-js/marko/commit/1aabdc30bb7fa3b82e76a5b4724f469133f14c85) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Remove direct dependency on babel, refactor to use internal copy.

- Updated dependencies [[`1aabdc3`](https://github.com/marko-js/marko/commit/1aabdc30bb7fa3b82e76a5b4724f469133f14c85)]:
  - @marko/runtime-tags@6.0.143
  - @marko/compiler@5.39.51

## 5.38.20

### Patch Changes

- [#3071](https://github.com/marko-js/marko/pull/3071) [`c5d31de`](https://github.com/marko-js/marko/commit/c5d31de1b55b26ffb746b7a03b01f2ce26ba0981) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Fix babel ast patching logic to work with latest babel.

- Updated dependencies [[`c5d31de`](https://github.com/marko-js/marko/commit/c5d31de1b55b26ffb746b7a03b01f2ce26ba0981)]:
  - @marko/runtime-tags@6.0.142
  - @marko/compiler@5.39.50

## 5.38.19

### Patch Changes

- [#3067](https://github.com/marko-js/marko/pull/3067) [`772c84d`](https://github.com/marko-js/marko/commit/772c84dc7562933536bab80d0e285866ccf72444) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Fix issue with multiple native tag event handler aliases being passed to an element via a spread. Eg `<button ...input onClick() {...}>` where `input` contains `on-click` as a attribute.

- [#3068](https://github.com/marko-js/marko/pull/3068) [`51c2a72`](https://github.com/marko-js/marko/commit/51c2a72ba63c4795299a1d737a9f56b4ad7c9ebb) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Fix issue with known define tags with closures and no other interactivity in the define tag setup.

- Updated dependencies [[`f0b39d0`](https://github.com/marko-js/marko/commit/f0b39d008c48ef2fa2862076143b1154af2f95b7), [`772c84d`](https://github.com/marko-js/marko/commit/772c84dc7562933536bab80d0e285866ccf72444), [`51c2a72`](https://github.com/marko-js/marko/commit/51c2a72ba63c4795299a1d737a9f56b4ad7c9ebb), [`12b1b33`](https://github.com/marko-js/marko/commit/12b1b336ff512c22697133ae744ef92283bbb240), [`620e483`](https://github.com/marko-js/marko/commit/620e483cdddab0bd69f2fc55bdf8eba9459b29e4)]:
  - @marko/runtime-tags@6.0.141

## 5.38.18

### Patch Changes

- [#3061](https://github.com/marko-js/marko/pull/3061) [`0134076`](https://github.com/marko-js/marko/commit/0134076c0e11173a5e9c377aefb0d9709a3a6415) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Add ability for generated template ids to be overwritten via compiler config.

- [#3062](https://github.com/marko-js/marko/pull/3062) [`9c2a6d9`](https://github.com/marko-js/marko/commit/9c2a6d905eaf04e6d080766832b48ee8b68d3107) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Align class api native tag types with tags api.

- Updated dependencies [[`0134076`](https://github.com/marko-js/marko/commit/0134076c0e11173a5e9c377aefb0d9709a3a6415)]:
  - @marko/compiler@5.39.49

## 5.38.17

### Patch Changes

- [#3059](https://github.com/marko-js/marko/pull/3059) [`40d0b52`](https://github.com/marko-js/marko/commit/40d0b528a616fae251a99d70cb2df54aee08d94b) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Fix issue where serialize reason was not cleared across renders leading to over serialization.

- Updated dependencies [[`40d0b52`](https://github.com/marko-js/marko/commit/40d0b528a616fae251a99d70cb2df54aee08d94b), [`40d0b52`](https://github.com/marko-js/marko/commit/40d0b528a616fae251a99d70cb2df54aee08d94b)]:
  - @marko/runtime-tags@6.0.139

## 5.38.16

### Patch Changes

- [#3057](https://github.com/marko-js/marko/pull/3057) [`8d77da5`](https://github.com/marko-js/marko/commit/8d77da552454518a69aa2f5720fe179883571b99) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Dynamic native tag compat fixes.

- Updated dependencies [[`8d77da5`](https://github.com/marko-js/marko/commit/8d77da552454518a69aa2f5720fe179883571b99)]:
  - @marko/runtime-tags@6.0.138

## 5.38.15

### Patch Changes

- [#3055](https://github.com/marko-js/marko/pull/3055) [`f86e980`](https://github.com/marko-js/marko/commit/f86e980c6941a4e06136aa20d8bd2fe7a632611a) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Improve await tag types.

- Updated dependencies [[`f86e980`](https://github.com/marko-js/marko/commit/f86e980c6941a4e06136aa20d8bd2fe7a632611a)]:
  - @marko/runtime-tags@6.0.137

## 5.38.14

### Patch Changes

- [#3053](https://github.com/marko-js/marko/pull/3053) [`6df8ff8`](https://github.com/marko-js/marko/commit/6df8ff8d2f01f97cf5131a3c5a53d558ee325111) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Fix serializing nested destructures of a rest binding.

- [#3052](https://github.com/marko-js/marko/pull/3052) [`f47a62e`](https://github.com/marko-js/marko/commit/f47a62e824edc683c0788fb3f24fcda4d569a5f5) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Fix issue where assignments to tag variables which did not otherwise get a section were being incorrectly removed.

- Updated dependencies [[`6df8ff8`](https://github.com/marko-js/marko/commit/6df8ff8d2f01f97cf5131a3c5a53d558ee325111), [`f47a62e`](https://github.com/marko-js/marko/commit/f47a62e824edc683c0788fb3f24fcda4d569a5f5)]:
  - @marko/runtime-tags@6.0.136

## 5.38.13

### Patch Changes

- [#3051](https://github.com/marko-js/marko/pull/3051) [`e31adc0`](https://github.com/marko-js/marko/commit/e31adc0511d856bf9bf506acf0d489767be29cbe) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Fix aliases in another section incorrectly causing a binding to be seen as declared / non nullable.

- [#3049](https://github.com/marko-js/marko/pull/3049) [`255769d`](https://github.com/marko-js/marko/commit/255769d1023d3c468947228fc690fde82feb650e) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Fix issue assigning to unused binding.

- Updated dependencies [[`e31adc0`](https://github.com/marko-js/marko/commit/e31adc0511d856bf9bf506acf0d489767be29cbe), [`255769d`](https://github.com/marko-js/marko/commit/255769d1023d3c468947228fc690fde82feb650e)]:
  - @marko/runtime-tags@6.0.135

## 5.38.12

### Patch Changes

- [#3048](https://github.com/marko-js/marko/pull/3048) [`e0acbe3`](https://github.com/marko-js/marko/commit/e0acbe36ee4e0c885077a837e58a69b855cd3a5e) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Ensure canonical signal used for closure references.

- Updated dependencies [[`22724da`](https://github.com/marko-js/marko/commit/22724da052a7ab921ca1995c3347adc48184e23e), [`e0acbe3`](https://github.com/marko-js/marko/commit/e0acbe36ee4e0c885077a837e58a69b855cd3a5e)]:
  - @marko/runtime-tags@6.0.134

## 5.38.11

### Patch Changes

- [#3044](https://github.com/marko-js/marko/pull/3044) [`2a43f7e`](https://github.com/marko-js/marko/commit/2a43f7e4147553779133a94c88f8c965fc8dd19f) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Improve logic around building up analyzed watch files.

- Updated dependencies [[`d581cd9`](https://github.com/marko-js/marko/commit/d581cd9ebb2705c62a658dfcb677fca5fffd3d1b), [`2a43f7e`](https://github.com/marko-js/marko/commit/2a43f7e4147553779133a94c88f8c965fc8dd19f), [`22326da`](https://github.com/marko-js/marko/commit/22326da0a2ef04199143b828272d677036aea74c)]:
  - @marko/runtime-tags@6.0.133
  - @marko/compiler@5.39.48

## 5.38.10

### Patch Changes

- [#3030](https://github.com/marko-js/marko/pull/3030) [`4ec6b5c`](https://github.com/marko-js/marko/commit/4ec6b5c96a84e8b6fadfd6cd5381a229371509be) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Ensure that compiling the hydrate output with lasso-marko and a lasso-page tag always initializes components.

## 5.38.9

### Patch Changes

- [#3028](https://github.com/marko-js/marko/pull/3028) [`72a614d`](https://github.com/marko-js/marko/commit/72a614d9494f1b65060310b7abc0c54d1fd4767b) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Fix issue with var's inside scriptlets having incorrect scoping.

- Updated dependencies [[`72a614d`](https://github.com/marko-js/marko/commit/72a614d9494f1b65060310b7abc0c54d1fd4767b)]:
  - @marko/compiler@5.39.47

## 5.38.8

### Patch Changes

- [#3017](https://github.com/marko-js/marko/pull/3017) [`4344a0c`](https://github.com/marko-js/marko/commit/4344a0c67df1955c6b3778e36cefbf1621fa2913) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Improve legacy renderer dependency scanning.

## 5.38.7

### Patch Changes

- [#3015](https://github.com/marko-js/marko/pull/3015) [`c1f5de7`](https://github.com/marko-js/marko/commit/c1f5de7c0739b5d96a068e5ecc21a7f5140c2f35) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Support "renderer" templates in class/tags interop.

- Updated dependencies [[`c1f5de7`](https://github.com/marko-js/marko/commit/c1f5de7c0739b5d96a068e5ecc21a7f5140c2f35)]:
  - @marko/runtime-tags@6.0.126

## 5.38.6

### Patch Changes

- [#3014](https://github.com/marko-js/marko/pull/3014) [`560d6a0`](https://github.com/marko-js/marko/commit/560d6a0bc9c78b3d584cc7199f5ab45ff679ff56) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Fix tags api runtime import from interop translator.

- Updated dependencies [[`7ec9683`](https://github.com/marko-js/marko/commit/7ec9683b16a5206bfb8218e9512c5db1487bfb6f), [`19815e9`](https://github.com/marko-js/marko/commit/19815e95bc716cbf03e594f764efbe53221e3bdd), [`560d6a0`](https://github.com/marko-js/marko/commit/560d6a0bc9c78b3d584cc7199f5ab45ff679ff56)]:
  - @marko/runtime-tags@6.0.125

## 5.38.5

### Patch Changes

- [#3010](https://github.com/marko-js/marko/pull/3010) [`d293abe`](https://github.com/marko-js/marko/commit/d293abe8bff16440c624f955beb93f7398601be7) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Ensure tags api runtime loaded when going through tags api compat layer.

- Updated dependencies [[`d293abe`](https://github.com/marko-js/marko/commit/d293abe8bff16440c624f955beb93f7398601be7)]:
  - @marko/runtime-tags@6.0.124

## 5.38.4

### Patch Changes

- [#3007](https://github.com/marko-js/marko/pull/3007) [`3769e43`](https://github.com/marko-js/marko/commit/3769e43c4317c7a832f8f74a55f740b30f1005f1) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Avoid interop feature checking attributes for "rawOpenTag" tags (style, import, etc).

- [#3009](https://github.com/marko-js/marko/pull/3009) [`e7a0b33`](https://github.com/marko-js/marko/commit/e7a0b337adf505f8467ab302c0c9bf75e0f168f4) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Serialize input passed from tags api to class api component via the Marko 6 serializer.

- Updated dependencies [[`3769e43`](https://github.com/marko-js/marko/commit/3769e43c4317c7a832f8f74a55f740b30f1005f1), [`e7a0b33`](https://github.com/marko-js/marko/commit/e7a0b337adf505f8467ab302c0c9bf75e0f168f4)]:
  - @marko/runtime-tags@6.0.123

## 5.38.3

### Patch Changes

- [#3005](https://github.com/marko-js/marko/pull/3005) [`afaefb6`](https://github.com/marko-js/marko/commit/afaefb6791acd3e9768793e7615908b25382b7fb) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Fix script tag types for class/tags interop.

## 5.38.2

### Patch Changes

- [#3002](https://github.com/marko-js/marko/pull/3002) [`ced7b65`](https://github.com/marko-js/marko/commit/ced7b65aa95bbf77165e7b65389225d3ec4be8d8) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Fix issue where tags api walk was being output even when class api hydrated no components in interop mode.

## 5.38.1

### Patch Changes

- [#3001](https://github.com/marko-js/marko/pull/3001) [`792dd1d`](https://github.com/marko-js/marko/commit/792dd1d5d193554889f7ba6e734c1730b947cf2d) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Expose Marko target api on compiled meta data.

- [#2999](https://github.com/marko-js/marko/pull/2999) [`d2f437b`](https://github.com/marko-js/marko/commit/d2f437bf7118c3160a4f4c9cf977b8396d9fc8db) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Add style block as tag api interop heuristic.

- [#2999](https://github.com/marko-js/marko/pull/2999) [`d2f437b`](https://github.com/marko-js/marko/commit/d2f437bf7118c3160a4f4c9cf977b8396d9fc8db) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Add support for "use class" comment to opt into to class api when exclusive `tags` folders prefer tags api.

- [#2999](https://github.com/marko-js/marko/pull/2999) [`d2f437b`](https://github.com/marko-js/marko/commit/d2f437bf7118c3160a4f4c9cf977b8396d9fc8db) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Add exclusive `tags` folder discovery as a "prefer tags api" heuristic in interop mode.

- Updated dependencies [[`792dd1d`](https://github.com/marko-js/marko/commit/792dd1d5d193554889f7ba6e734c1730b947cf2d), [`d2f437b`](https://github.com/marko-js/marko/commit/d2f437bf7118c3160a4f4c9cf977b8396d9fc8db), [`d2f437b`](https://github.com/marko-js/marko/commit/d2f437bf7118c3160a4f4c9cf977b8396d9fc8db), [`d2f437b`](https://github.com/marko-js/marko/commit/d2f437bf7118c3160a4f4c9cf977b8396d9fc8db)]:
  - @marko/runtime-tags@6.0.122
  - @marko/compiler@5.39.45

## 5.38.0

### Minor Changes

- [#2994](https://github.com/marko-js/marko/pull/2994) [`1bf2788`](https://github.com/marko-js/marko/commit/1bf2788042fd3e6928303c5782909612a59c5206) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Add support for client and server statements in v5.

### Patch Changes

- [#2996](https://github.com/marko-js/marko/pull/2996) [`1a65ff3`](https://github.com/marko-js/marko/commit/1a65ff3f4ed31b1e3fab37328962950db28a68e6) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Move strip types logic to be after transform phase.

- [#2996](https://github.com/marko-js/marko/pull/2996) [`2a23dec`](https://github.com/marko-js/marko/commit/2a23decc64b3dbfea024241b1301dba7f6d69679) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Run parse hooks after the main parse phase is complete.

- Updated dependencies [[`1a65ff3`](https://github.com/marko-js/marko/commit/1a65ff3f4ed31b1e3fab37328962950db28a68e6), [`1bf2788`](https://github.com/marko-js/marko/commit/1bf2788042fd3e6928303c5782909612a59c5206), [`2a23dec`](https://github.com/marko-js/marko/commit/2a23decc64b3dbfea024241b1301dba7f6d69679)]:
  - @marko/compiler@5.39.44

## 5.37.63

### Patch Changes

- [#2983](https://github.com/marko-js/marko/pull/2983) [`fdc46fb`](https://github.com/marko-js/marko/commit/fdc46fb3e762595a43fd1fa2f714af7f8819d341) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Move body tag transform logic into translate.

- [#2980](https://github.com/marko-js/marko/pull/2980) [`f9cf89f`](https://github.com/marko-js/marko/commit/f9cf89f37d16b1182d609e52be2519cd452cae5f) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Fix types for html-\* tags.

- [#2978](https://github.com/marko-js/marko/pull/2978) [`55fd324`](https://github.com/marko-js/marko/commit/55fd324c3f4ea00535856c7719f8b4c46f55de40) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Update compiler to avoid mutating translator visitors.

- [#2983](https://github.com/marko-js/marko/pull/2983) [`fdc46fb`](https://github.com/marko-js/marko/commit/fdc46fb3e762595a43fd1fa2f714af7f8819d341) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Normalize taglib ids to be consistent with register ids and across Marko 5/6.

- [#2983](https://github.com/marko-js/marko/pull/2983) [`fdc46fb`](https://github.com/marko-js/marko/commit/fdc46fb3e762595a43fd1fa2f714af7f8819d341) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Merge migrate taglib into core taglib.

- Updated dependencies [[`fdc46fb`](https://github.com/marko-js/marko/commit/fdc46fb3e762595a43fd1fa2f714af7f8819d341), [`55fd324`](https://github.com/marko-js/marko/commit/55fd324c3f4ea00535856c7719f8b4c46f55de40), [`fdc46fb`](https://github.com/marko-js/marko/commit/fdc46fb3e762595a43fd1fa2f714af7f8819d341)]:
  - @marko/compiler@5.39.43

## 5.37.62

### Patch Changes

- [#2949](https://github.com/marko-js/marko/pull/2949) [`6648a22`](https://github.com/marko-js/marko/commit/6648a2229084e3ae431c175fb283e41b9bb1dab5) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Allow compiler import helper to be used outside of translate.

- Updated dependencies [[`6648a22`](https://github.com/marko-js/marko/commit/6648a2229084e3ae431c175fb283e41b9bb1dab5)]:
  - @marko/compiler@5.39.42

## 5.37.61

### Patch Changes

- [#2906](https://github.com/marko-js/marko/pull/2906) [`c6a9c12`](https://github.com/marko-js/marko/commit/c6a9c125e82d9a1fbb158677cc8c26a94d80e2ec) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Fix issue with incorrect babel scopes after stripping types.

- Updated dependencies [[`c6a9c12`](https://github.com/marko-js/marko/commit/c6a9c125e82d9a1fbb158677cc8c26a94d80e2ec)]:
  - @marko/compiler@5.39.41

## 5.37.60

### Patch Changes

- [#2859](https://github.com/marko-js/marko/pull/2859) [`22112e5`](https://github.com/marko-js/marko/commit/22112e524cf12baf0b119a5ad3417145459a159c) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Ensure markoOpts is always accurate when running child template analysis.

- Updated dependencies [[`22112e5`](https://github.com/marko-js/marko/commit/22112e524cf12baf0b119a5ad3417145459a159c)]:
  - @marko/compiler@5.39.40

## 5.37.59

### Patch Changes

- [#2855](https://github.com/marko-js/marko/pull/2855) [`29173ce`](https://github.com/marko-js/marko/commit/29173ced3806d932eb05dc14002fc4969ef4ac6b) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Ensure scopes are crawled before stripping types.

- Updated dependencies [[`29173ce`](https://github.com/marko-js/marko/commit/29173ced3806d932eb05dc14002fc4969ef4ac6b)]:
  - @marko/compiler@5.39.39

## 5.37.58

### Patch Changes

- [#2853](https://github.com/marko-js/marko/pull/2853) [`b52a62f`](https://github.com/marko-js/marko/commit/b52a62f3ae5d07bee23685289aec169476820f69) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Ensure stripTypes compiler option is applied when targeting source output.

- Updated dependencies [[`b52a62f`](https://github.com/marko-js/marko/commit/b52a62f3ae5d07bee23685289aec169476820f69)]:
  - @marko/compiler@5.39.38

## 5.37.57

### Patch Changes

- [#2834](https://github.com/marko-js/marko/pull/2834) [`5c9a37f`](https://github.com/marko-js/marko/commit/5c9a37fa17c6a2f5f771c919b8415e4dfb25fca4) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Fix issue striping type specifiers in imports.

- Updated dependencies [[`5c9a37f`](https://github.com/marko-js/marko/commit/5c9a37fa17c6a2f5f771c919b8415e4dfb25fca4)]:
  - @marko/compiler@5.39.37

## 5.37.56

### Patch Changes

- [#2830](https://github.com/marko-js/marko/pull/2830) [`9a688af`](https://github.com/marko-js/marko/commit/9a688af3c92a73ae7492cdaa4b9ff1e0b2f9127e) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Fix issue with static/server/client statements with type imports not properly being stripped.

- Updated dependencies [[`9a688af`](https://github.com/marko-js/marko/commit/9a688af3c92a73ae7492cdaa4b9ff1e0b2f9127e)]:
  - @marko/compiler@5.39.36

## 5.37.55

### Patch Changes

- [#2823](https://github.com/marko-js/marko/pull/2823) [`58c2165`](https://github.com/marko-js/marko/commit/58c21653aa0a1d6e1db208c36a1a584b44ba2ff0) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Ensure type stripping runs before transform phase in compiler.

- Updated dependencies [[`58c2165`](https://github.com/marko-js/marko/commit/58c21653aa0a1d6e1db208c36a1a584b44ba2ff0)]:
  - @marko/compiler@5.39.35

## 5.37.54

### Patch Changes

- [#2820](https://github.com/marko-js/marko/pull/2820) [`f39c6da`](https://github.com/marko-js/marko/commit/f39c6da21ff8476130890e5482242acd2096e54a) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Improve tags/class interop across async.

## 5.37.53

### Patch Changes

- [#2815](https://github.com/marko-js/marko/pull/2815) [`ed8d064`](https://github.com/marko-js/marko/commit/ed8d064d154532cfa7c12be524d6b47556da0c7f) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Ensure `@marko/compiler/modules` always uses packagem name imports for easier aliasing in website tooling.

- Updated dependencies [[`ed8d064`](https://github.com/marko-js/marko/commit/ed8d064d154532cfa7c12be524d6b47556da0c7f)]:
  - @marko/compiler@5.39.34

## 5.37.52

### Patch Changes

- [#2813](https://github.com/marko-js/marko/pull/2813) [`65b6dde`](https://github.com/marko-js/marko/commit/65b6dde559f50afac6e285bd598ed49b015485f4) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Improve class/tags api interop.

## 5.37.51

### Patch Changes

- [#2786](https://github.com/marko-js/marko/pull/2786) [`df07bb6`](https://github.com/marko-js/marko/commit/df07bb6ec8928bec35de4711cd57ed4cfd038581) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Ensure tags api runtime compat always walks after running class api init code.

## 5.37.50

### Patch Changes

- [#2784](https://github.com/marko-js/marko/pull/2784) [`bbde0e8`](https://github.com/marko-js/marko/commit/bbde0e8415931c3fbb5432007dda196dfd5a9e3d) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Allow split components to rerender if the template has been loaded.

- [#2784](https://github.com/marko-js/marko/pull/2784) [`bbde0e8`](https://github.com/marko-js/marko/commit/bbde0e8415931c3fbb5432007dda196dfd5a9e3d) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Ensure interop class/tags init happens after all modules load.

## 5.37.49

### Patch Changes

- [#2783](https://github.com/marko-js/marko/pull/2783) [`506539c`](https://github.com/marko-js/marko/commit/506539cbb17ca1cc01fb52f387a5f572c6daf0da) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Improve class/tags interop serialization orchestration and flushing.

## 5.37.48

### Patch Changes

- [#2779](https://github.com/marko-js/marko/pull/2779) [`f388228`](https://github.com/marko-js/marko/commit/f388228adea301e8d115d862a889de2492fba4ea) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Misc tags api compat improvements.

## 5.37.47

### Patch Changes

- [#2769](https://github.com/marko-js/marko/pull/2769) [`7680160`](https://github.com/marko-js/marko/commit/76801609170a92baca0fe800ba273238abd3893e) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Runtime types improvements. Add CI validation to runtime types files.

## 5.37.46

### Patch Changes

- [#2766](https://github.com/marko-js/marko/pull/2766) [`6027c1e`](https://github.com/marko-js/marko/commit/6027c1e9817879b7d08931f7cefa45d10719df39) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Tags api compat runtime fixes.

## 5.37.45

### Patch Changes

- [`a96a328`](https://github.com/marko-js/marko/commit/a96a3289e3b5e4ebc174a3448c935201f761c1d5) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Fix types for renderable.

## 5.37.44

### Patch Changes

- [#2756](https://github.com/marko-js/marko/pull/2756) [`46f1f90`](https://github.com/marko-js/marko/commit/46f1f9075043754aadec1175db5885f72c84e016) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Add support for `renderId` which replaces `componentIdPrefix` (and the older `widgetIdPrefix`).

- [#2756](https://github.com/marko-js/marko/pull/2756) [`46f1f90`](https://github.com/marko-js/marko/commit/46f1f9075043754aadec1175db5885f72c84e016) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Improve tags api compat.

- Updated dependencies [[`46f1f90`](https://github.com/marko-js/marko/commit/46f1f9075043754aadec1175db5885f72c84e016)]:
  - @marko/compiler@5.39.33

## 5.37.43

### Patch Changes

- [#2753](https://github.com/marko-js/marko/pull/2753) [`9ba0cab`](https://github.com/marko-js/marko/commit/9ba0cab6474e7cd483b93992be5b8b5e7c8df0aa) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Update package dependencies.

- [#2753](https://github.com/marko-js/marko/pull/2753) [`9ba0cab`](https://github.com/marko-js/marko/commit/9ba0cab6474e7cd483b93992be5b8b5e7c8df0aa) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Improve source location information for static statements.

- Updated dependencies [[`9ba0cab`](https://github.com/marko-js/marko/commit/9ba0cab6474e7cd483b93992be5b8b5e7c8df0aa)]:
  - @marko/compiler@5.39.32

## 5.37.42

### Patch Changes

- [#2746](https://github.com/marko-js/marko/pull/2746) [`064f068`](https://github.com/marko-js/marko/commit/064f068fdb0e16f5dc2534dce5f5edb706a71df5) Thanks [@LuLaValva](https://github.com/LuLaValva)! - Allow `content` attribute in native tags

## 5.37.41

### Patch Changes

- [#2734](https://github.com/marko-js/marko/pull/2734) [`b6ba333`](https://github.com/marko-js/marko/commit/b6ba333ee289ff27a549d1a2ea60b06338cb7ef5) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Upgrade all deps. Fix support for [discard binding proposal](https://github.com/tc39/proposal-discard-binding).

- Updated dependencies [[`b6ba333`](https://github.com/marko-js/marko/commit/b6ba333ee289ff27a549d1a2ea60b06338cb7ef5)]:
  - @marko/compiler@5.39.29

## 5.37.40

### Patch Changes

- [#2715](https://github.com/marko-js/marko/pull/2715) [`dc178ce`](https://github.com/marko-js/marko/commit/dc178ced9f75aac923f3c5b043aa40d62e8d0f4d) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Move translator loading logic back into shared utility. Moving this out caused a regression for tools that call `getRuntimeEntryFiles` or `taglib.buildLookup` directly.

- Updated dependencies [[`e60a20f`](https://github.com/marko-js/marko/commit/e60a20f7e2dcbdb2dcfa45bc15f2901ffd0443c7), [`dc178ce`](https://github.com/marko-js/marko/commit/dc178ced9f75aac923f3c5b043aa40d62e8d0f4d)]:
  - @marko/compiler@5.39.28

## 5.37.39

### Patch Changes

- [#2713](https://github.com/marko-js/marko/pull/2713) [`2d11230`](https://github.com/marko-js/marko/commit/2d11230f012397681f63071ea9b33b246b45f9ad) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Avoid using "util" module to improve browser compat of compiler.

- Updated dependencies [[`2d11230`](https://github.com/marko-js/marko/commit/2d11230f012397681f63071ea9b33b246b45f9ad)]:
  - @marko/compiler@5.39.27

## 5.37.38

### Patch Changes

- [#2709](https://github.com/marko-js/marko/pull/2709) [`99eccd8`](https://github.com/marko-js/marko/commit/99eccd8faa061a54d8ffcbb25b5990572598f242) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Move body translate logic into a transformer to improve tags/class interop support.

## 5.37.37

### Patch Changes

- [#2707](https://github.com/marko-js/marko/pull/2707) [`89d0196`](https://github.com/marko-js/marko/commit/89d019678ecfb004af9b5892482d6af9d6178c4d) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Fix false positive interop checks.

- Updated dependencies [[`89d0196`](https://github.com/marko-js/marko/commit/89d019678ecfb004af9b5892482d6af9d6178c4d)]:
  - @marko/compiler@5.39.26

## 5.37.36

### Patch Changes

- [#2705](https://github.com/marko-js/marko/pull/2705) [`75eaa9d`](https://github.com/marko-js/marko/commit/75eaa9d833f6711b5b60757ef02ca987fc310b01) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Avoid using process api in compiler to make it easier to load in environments without it.

- Updated dependencies [[`75eaa9d`](https://github.com/marko-js/marko/commit/75eaa9d833f6711b5b60757ef02ca987fc310b01)]:
  - @marko/compiler@5.39.25

## 5.37.35

### Patch Changes

- [#2703](https://github.com/marko-js/marko/pull/2703) [`f67361b`](https://github.com/marko-js/marko/commit/f67361bc52191c9092833438868f09bb583252e1) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Load interop translator by default if installed.

- Updated dependencies [[`f67361b`](https://github.com/marko-js/marko/commit/f67361bc52191c9092833438868f09bb583252e1)]:
  - @marko/compiler@5.39.24

## 5.37.34

### Patch Changes

- [#2701](https://github.com/marko-js/marko/pull/2701) [`8f68b6e`](https://github.com/marko-js/marko/commit/8f68b6efc960a3e59f59cbb49c549a248a03a79f) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Fix regression where explicitly passing in `undefined` for translator was not loading the default translator.

- Updated dependencies [[`8f68b6e`](https://github.com/marko-js/marko/commit/8f68b6efc960a3e59f59cbb49c549a248a03a79f)]:
  - @marko/compiler@5.39.23

## 5.37.33

### Patch Changes

- [#2699](https://github.com/marko-js/marko/pull/2699) [`dc3ee34`](https://github.com/marko-js/marko/commit/dc3ee348e9b95c12bf74d4212a82756d7ad90a18) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Avoid node:crypto - use custom hash algo for component ids.

- Updated dependencies [[`dc3ee34`](https://github.com/marko-js/marko/commit/dc3ee348e9b95c12bf74d4212a82756d7ad90a18)]:
  - @marko/compiler@5.39.22

## 5.37.32

### Patch Changes

- [#2696](https://github.com/marko-js/marko/pull/2696) [`eefa829`](https://github.com/marko-js/marko/commit/eefa829038b5bdd6edbbf95cef61e152e91ca9ec) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Improve internal module loading api. Ensure all taglib requires happen relative to project dir.

- Updated dependencies [[`eefa829`](https://github.com/marko-js/marko/commit/eefa829038b5bdd6edbbf95cef61e152e91ca9ec)]:
  - @marko/compiler@5.39.21

## 5.37.31

### Patch Changes

- [#2691](https://github.com/marko-js/marko/pull/2691) [`0758ae7`](https://github.com/marko-js/marko/commit/0758ae72e3a3da9fdf1dca37001aa6e8479655f9) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Fix issue where scriptlets with comments were being printed without brackets when printing the marko ast.

- Updated dependencies [[`0758ae7`](https://github.com/marko-js/marko/commit/0758ae72e3a3da9fdf1dca37001aa6e8479655f9)]:
  - @marko/compiler@5.39.20

## 5.37.30

### Patch Changes

- [#2684](https://github.com/marko-js/marko/pull/2684) [`ef5960b`](https://github.com/marko-js/marko/commit/ef5960bbcca467627eaaaa501e0ce0b23211e590) Thanks [@LuLaValva](https://github.com/LuLaValva)! - Add types for SVG tags

## 5.37.29

### Patch Changes

- [#2648](https://github.com/marko-js/marko/pull/2648) [`3b883d4`](https://github.com/marko-js/marko/commit/3b883d4d9729e5b13bb0e8d19850c087d0e8245f) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Fix issue where tags added from the translator were given lower priority than tags added by the core compiler.

- Updated dependencies [[`3b883d4`](https://github.com/marko-js/marko/commit/3b883d4d9729e5b13bb0e8d19850c087d0e8245f)]:
  - @marko/compiler@5.39.19

## 5.37.28

### Patch Changes

- [#2634](https://github.com/marko-js/marko/pull/2634) [`fa702ed`](https://github.com/marko-js/marko/commit/fa702ed89878bcb96add7011f98e972130fa9292) Thanks [@rturnq](https://github.com/rturnq)! - Prevents error when readable stream is cancelled externally

## 5.37.27

### Patch Changes

- [#2615](https://github.com/marko-js/marko/pull/2615) [`c5c78ff`](https://github.com/marko-js/marko/commit/c5c78ff54e214fb53551c3afc2f936af8d426121) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Fixes issue with https://github.com/marko-js/marko/pull/2604 where an incorrect `this` was referenced.

## 5.37.26

### Patch Changes

- [#2604](https://github.com/marko-js/marko/pull/2604) [`70cb96e`](https://github.com/marko-js/marko/commit/70cb96eb8790434014eef368cea62a060522f231) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Expose `toReadable` api for whatwg streams in any environment.

- [#2604](https://github.com/marko-js/marko/pull/2604) [`70cb96e`](https://github.com/marko-js/marko/commit/70cb96eb8790434014eef368cea62a060522f231) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Expose better types for working with ssr and csr rendered template results.

## 5.37.25

### Patch Changes

- [#2598](https://github.com/marko-js/marko/pull/2598) [`12600c7`](https://github.com/marko-js/marko/commit/12600c7c7e1238a46bac686e390b0b1ac05e2ef6) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Use non enumerable property for implicit split component toJSON.

## 5.37.24

### Patch Changes

- [#2589](https://github.com/marko-js/marko/pull/2589) [`765915a`](https://github.com/marko-js/marko/commit/765915ad423827bcdec6281413c59ecda173a80d) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Fix issue when using with latest version of babel.

- Updated dependencies [[`765915a`](https://github.com/marko-js/marko/commit/765915ad423827bcdec6281413c59ecda173a80d)]:
  - @marko/compiler@5.39.14

## 5.37.23

### Patch Changes

- [#2585](https://github.com/marko-js/marko/pull/2585) [`e84ff79`](https://github.com/marko-js/marko/commit/e84ff79a5f942b5b6f636d1c527e229f3c5fd244) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Fix missing expression statement wrapper.

## 5.37.22

### Patch Changes

- [#2577](https://github.com/marko-js/marko/pull/2577) [`33c3979`](https://github.com/marko-js/marko/commit/33c3979dcbdde3b849a4e8af186f52aaaac55e69) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Improve debug and production Accessor Chars output.

## 5.37.21

### Patch Changes

- [#2574](https://github.com/marko-js/marko/pull/2574) [`23eedc2`](https://github.com/marko-js/marko/commit/23eedc20a0a3e2e9d99514c49c615d74825fe4cb) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Avoid serializing input for implicit split components (those with only string event handlers and no class/component).

## 5.37.20

### Patch Changes

- [#2544](https://github.com/marko-js/marko/pull/2544) [`08e0d24`](https://github.com/marko-js/marko/commit/08e0d245a604380120de16db9e7806a1ccaf459d) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Update tags api interop layer.

- [#2540](https://github.com/marko-js/marko/pull/2540) [`b05c1f7`](https://github.com/marko-js/marko/commit/b05c1f7f3a1e97f964c7ebff051b7b06e12d02c3) Thanks [@mlrawlings](https://github.com/mlrawlings)! - refactor signals to no longer mark but rely soley on queueing for proper execution order

- Updated dependencies [[`cfca41a`](https://github.com/marko-js/marko/commit/cfca41ac8c571d1fecb3b889df5eead1dfe06130)]:
  - @marko/compiler@5.39.13

## 5.37.19

### Patch Changes

- [#2541](https://github.com/marko-js/marko/pull/2541) [`6c24a30`](https://github.com/marko-js/marko/commit/6c24a30ee22155d0bd7e63564fc8d67e75e10980) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Fix issue with no-update-body on native elements without a key not always being preserved during hydrate.

## 5.37.18

### Patch Changes

- [#2537](https://github.com/marko-js/marko/pull/2537) [`ae24290`](https://github.com/marko-js/marko/commit/ae24290c4c9f9807d70d398e661bb510fb905e09) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Consolidate create branch logic, optimizing code size and creating branches with only side effects and no template code.

## 5.37.17

### Patch Changes

- [#2531](https://github.com/marko-js/marko/pull/2531) [`6065ff2`](https://github.com/marko-js/marko/commit/6065ff2563335f622376bca1dafc94ed6e0b2aa6) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Ensure & is escaped for server side attributes to improve consistency with csr.

- [#2532](https://github.com/marko-js/marko/pull/2532) [`5c8c549`](https://github.com/marko-js/marko/commit/5c8c549a324eedfed800a70b44de35bde3de7899) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Update tags api interop.

## 5.37.16

### Patch Changes

- [#2528](https://github.com/marko-js/marko/pull/2528) [`136bb14`](https://github.com/marko-js/marko/commit/136bb14afa1d77c41092ced77ded66702370de8a) Thanks [@LuLaValva](https://github.com/LuLaValva)! - Fix special attrs

- [#2530](https://github.com/marko-js/marko/pull/2530) [`d08be40`](https://github.com/marko-js/marko/commit/d08be4078fcfc276bab2ee5aded53c19e5b745e3) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Fix issue with nesting out of order awaits inside of in order awaits.

## 5.37.15

### Patch Changes

- [#2525](https://github.com/marko-js/marko/pull/2525) [`4c20455`](https://github.com/marko-js/marko/commit/4c204556a3055cd6439ecdd183f6dbfccc606934) Thanks [@rturnq](https://github.com/rturnq)! - Fix initial sync content not scheduled for flush

## 5.37.14

### Patch Changes

- [#2488](https://github.com/marko-js/marko/pull/2488) [`c6f9927`](https://github.com/marko-js/marko/commit/c6f99275327489709b4934326075586baee5ad39) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Update tags api compat layer.

## 5.37.13

### Patch Changes

- [#2485](https://github.com/marko-js/marko/pull/2485) [`09c0558`](https://github.com/marko-js/marko/commit/09c0558a1b26df2d828d56bd853f885a17683e38) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Ensure Marko 5 renderBodies are serialized properly across the compat layer.

- Updated dependencies [[`09c0558`](https://github.com/marko-js/marko/commit/09c0558a1b26df2d828d56bd853f885a17683e38)]:
  - @marko/compiler@5.39.12

## 5.37.12

### Patch Changes

- [#2469](https://github.com/marko-js/marko/pull/2469) [`f99d363`](https://github.com/marko-js/marko/commit/f99d363cd0597be495d486f48395192842da7262) Thanks [@LuLaValva](https://github.com/LuLaValva)! - Edit TypeScript names for event handlers

- [#2470](https://github.com/marko-js/marko/pull/2470) [`218c436`](https://github.com/marko-js/marko/commit/218c43674e478062cdbc0fcbaef0dc13cd79107f) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Improve tags / class api interop layer for destroyed tags.

- Updated dependencies [[`218c436`](https://github.com/marko-js/marko/commit/218c43674e478062cdbc0fcbaef0dc13cd79107f)]:
  - @marko/compiler@5.39.11

## 5.37.11

### Patch Changes

- [#2462](https://github.com/marko-js/marko/pull/2462) [`631ad47`](https://github.com/marko-js/marko/commit/631ad47da4f6accbe802b374334b7b0c03e752da) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Fix issue where implicit split components (those with no class/component that have event handlers) were not getting the client side render apis.

## 5.37.10

### Patch Changes

- [#2451](https://github.com/marko-js/marko/pull/2451) [`602eaad`](https://github.com/marko-js/marko/commit/602eaad0a48047b2fb678b8e77d6b345a0930b8d) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Avoid swallowing errors when resolved paths in marko.json files could not be resolve (now leaves the value as is, previously would ignore the path).

- [#2449](https://github.com/marko-js/marko/pull/2449) [`6cf4978`](https://github.com/marko-js/marko/commit/6cf4978d765914e1d1c3ee62a3c691ce20c4903b) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Support aggregate errors when final error is a HTMLJS parser error.

- [#2449](https://github.com/marko-js/marko/pull/2449) [`6cf4978`](https://github.com/marko-js/marko/commit/6cf4978d765914e1d1c3ee62a3c691ce20c4903b) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Fix invalid sourcemapping of parse errors in a class block.

- [#2452](https://github.com/marko-js/marko/pull/2452) [`4349f95`](https://github.com/marko-js/marko/commit/4349f959f833ea51469855a8e87653a1ced159bd) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Add stubs for some client side component apis on the server.

- Updated dependencies [[`602eaad`](https://github.com/marko-js/marko/commit/602eaad0a48047b2fb678b8e77d6b345a0930b8d), [`6cf4978`](https://github.com/marko-js/marko/commit/6cf4978d765914e1d1c3ee62a3c691ce20c4903b)]:
  - @marko/compiler@5.39.9

## 5.37.9

### Patch Changes

- [#2445](https://github.com/marko-js/marko/pull/2445) [`b12d7a9`](https://github.com/marko-js/marko/commit/b12d7a9b76dd9fca89ed717b8491b08d5e927fe0) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Add engines field to package.json

- [#2448](https://github.com/marko-js/marko/pull/2448) [`cb3b4b5`](https://github.com/marko-js/marko/commit/cb3b4b51c20e2d29182266f34c04a9d87ffdfea6) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Fix issue where scoped directive was being applied twice when tag had no-update directive.

- Updated dependencies [[`b12d7a9`](https://github.com/marko-js/marko/commit/b12d7a9b76dd9fca89ed717b8491b08d5e927fe0)]:
  - @marko/compiler@5.39.8

## 5.37.8

### Patch Changes

- [#2438](https://github.com/marko-js/marko/pull/2438) [`4b6c613`](https://github.com/marko-js/marko/commit/4b6c6135badad6db7e4a8f0f59fb005ed66b04fa) Thanks [@mlrawlings](https://github.com/mlrawlings)! - use tags/ instead of components/ for runtime-tags

- [#2436](https://github.com/marko-js/marko/pull/2436) [`a364d1e`](https://github.com/marko-js/marko/commit/a364d1ebd85d0a71c49018c614ca9424fc7e5976) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Rename renderBody to content for tags api.

- Updated dependencies [[`4b6c613`](https://github.com/marko-js/marko/commit/4b6c6135badad6db7e4a8f0f59fb005ed66b04fa), [`8ebe566`](https://github.com/marko-js/marko/commit/8ebe566854179ad8cf8cfca7858d607ab208c01e)]:
  - @marko/compiler@5.39.7

## 5.37.7

### Patch Changes

- [#2434](https://github.com/marko-js/marko/pull/2434) [`6a235a8`](https://github.com/marko-js/marko/commit/6a235a88813cd45a8704060e4fac3ed82c2f3437) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Improve registry id normalization.

- Updated dependencies [[`6a235a8`](https://github.com/marko-js/marko/commit/6a235a88813cd45a8704060e4fac3ed82c2f3437)]:
  - @marko/compiler@5.39.6

## 5.37.6

### Patch Changes

- [#2428](https://github.com/marko-js/marko/pull/2428) [`e72fa84`](https://github.com/marko-js/marko/commit/e72fa84a7293bd348a39e20b011228dfd937322f) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Upgrade dependencies.

## 5.37.5

### Patch Changes

- [#2426](https://github.com/marko-js/marko/pull/2426) [`2142dfd`](https://github.com/marko-js/marko/commit/2142dfd05d6b6ebc5f55883ca13a15847cdb07fa) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Use statement parsing for script tag to improve sourcemap accuracy.

- [#2426](https://github.com/marko-js/marko/pull/2426) [`2142dfd`](https://github.com/marko-js/marko/commit/2142dfd05d6b6ebc5f55883ca13a15847cdb07fa) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Fix issue where negative sourcemap offets leaning to the previous line were outputting incorrect values.

- Updated dependencies [[`2142dfd`](https://github.com/marko-js/marko/commit/2142dfd05d6b6ebc5f55883ca13a15847cdb07fa), [`2142dfd`](https://github.com/marko-js/marko/commit/2142dfd05d6b6ebc5f55883ca13a15847cdb07fa)]:
  - @marko/compiler@5.39.5

## 5.37.4

### Patch Changes

- [`e60bd4f`](https://github.com/marko-js/marko/commit/e60bd4fd25ccee475dad49195fca64024a6164bf) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Fix incorrect filepath for marko babel transform.

- Updated dependencies [[`e60bd4f`](https://github.com/marko-js/marko/commit/e60bd4fd25ccee475dad49195fca64024a6164bf)]:
  - @marko/compiler@5.39.4

## 5.37.3

### Patch Changes

- [#2420](https://github.com/marko-js/marko/pull/2420) [`4a980fe`](https://github.com/marko-js/marko/commit/4a980fe444299f095f0f423767d5340e15c33682) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Fix publish alias issue.

- Updated dependencies [[`4a980fe`](https://github.com/marko-js/marko/commit/4a980fe444299f095f0f423767d5340e15c33682)]:
  - @marko/compiler@5.39.3

## 5.37.2

### Patch Changes

- [#2418](https://github.com/marko-js/marko/pull/2418) [`00e7392`](https://github.com/marko-js/marko/commit/00e7392361a17f49345400d53644bcee13e9b375) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Fix issue when parsing embedded script code with negative offset locations.

- Updated dependencies [[`00e7392`](https://github.com/marko-js/marko/commit/00e7392361a17f49345400d53644bcee13e9b375)]:
  - @marko/compiler@5.39.2

## 5.37.1

### Patch Changes

- [#2416](https://github.com/marko-js/marko/pull/2416) [`619c87f`](https://github.com/marko-js/marko/commit/619c87faeebc31f6885bbb868fc89bab8a90ebea) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Fix package json repository config.

- Updated dependencies [[`619c87f`](https://github.com/marko-js/marko/commit/619c87faeebc31f6885bbb868fc89bab8a90ebea)]:
  - @marko/compiler@5.39.1

## 5.37.0

### Minor Changes

- [#2408](https://github.com/marko-js/marko/pull/2408) [`2be37f7`](https://github.com/marko-js/marko/commit/2be37f72d3030621e2f85b6615731a5af24e0211) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Merge translator packages into their respective runtime packages.

### Patch Changes

- Updated dependencies [[`2be37f7`](https://github.com/marko-js/marko/commit/2be37f72d3030621e2f85b6615731a5af24e0211)]:
  - @marko/compiler@5.39.0

## 5.36.5

### Patch Changes

- [#2404](https://github.com/marko-js/marko/pull/2404) [`fbc0cef`](https://github.com/marko-js/marko/commit/fbc0cefb860cd91142231df04c05b7e4c0d1b1ee) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Upgrade all dependencies. Fix support for latest babel version.

- Updated dependencies [[`fbc0cef`](https://github.com/marko-js/marko/commit/fbc0cefb860cd91142231df04c05b7e4c0d1b1ee)]:
  - @marko/translator-default@6.1.3
  - @marko/compiler@5.38.5

## 5.36.4

### Patch Changes

- [#2402](https://github.com/marko-js/marko/pull/2402) [`0a38845`](https://github.com/marko-js/marko/commit/0a3884573b9abaff7b315d9b6ed0ceed5c344dc7) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Fixes race conditions with new async iterator api.

## 5.36.3

### Patch Changes

- [#2395](https://github.com/marko-js/marko/pull/2395) [`00cc3fb`](https://github.com/marko-js/marko/commit/00cc3fbe934d96a644175cc86cd72221131a884d) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Fix issue where lasso manifest file paths were not being provided correctly for lasso-marko.

- Updated dependencies [[`00cc3fb`](https://github.com/marko-js/marko/commit/00cc3fbe934d96a644175cc86cd72221131a884d)]:
  - @marko/translator-default@6.1.2
  - @marko/compiler@5.38.3

## 5.36.2

### Patch Changes

- [#2387](https://github.com/marko-js/marko/pull/2387) [`8e67da0`](https://github.com/marko-js/marko/commit/8e67da0f725ad5074a1bf933cb75ca569d21f2d7) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Fix issue with an attribute tag containing only a spread.

- Updated dependencies [[`8e67da0`](https://github.com/marko-js/marko/commit/8e67da0f725ad5074a1bf933cb75ca569d21f2d7)]:
  - @marko/translator-default@6.1.1
  - @marko/compiler@5.38.2

## 5.36.1

### Patch Changes

- [#2383](https://github.com/marko-js/marko/pull/2383) [`133b562`](https://github.com/marko-js/marko/commit/133b562c19081402330e4054eabc49a4ce635274) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Partially revert #2380 which was causing non idempotent builds.

- Updated dependencies [[`133b562`](https://github.com/marko-js/marko/commit/133b562c19081402330e4054eabc49a4ce635274)]:
  - @marko/compiler@5.38.1

## 5.36.0

### Minor Changes

- [#2380](https://github.com/marko-js/marko/pull/2380) [`c5d2b48`](https://github.com/marko-js/marko/commit/c5d2b4871e9dab7037a624681d0161b72fdc799d) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Replace `optimizeKnownTemplates` with a better an simpler `optimizeRegistryId` api.

### Patch Changes

- Updated dependencies [[`c5d2b48`](https://github.com/marko-js/marko/commit/c5d2b4871e9dab7037a624681d0161b72fdc799d)]:
  - @marko/translator-default@6.1.0
  - @marko/compiler@5.38.0

## 5.35.35

### Patch Changes

- [#2368](https://github.com/marko-js/marko/pull/2368) [`bb44af0`](https://github.com/marko-js/marko/commit/bb44af04b1ad29d14200ff5cff26b27a39ce446e) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Fix issue with "package: " deps (used for lasso) not being hoisted when building the hydrate output.

- Updated dependencies [[`bb44af0`](https://github.com/marko-js/marko/commit/bb44af04b1ad29d14200ff5cff26b27a39ce446e)]:
  - @marko/translator-default@6.0.26
  - @marko/compiler@5.37.26

## 5.35.34

### Patch Changes

- [#2364](https://github.com/marko-js/marko/pull/2364) [`cbcd7ec`](https://github.com/marko-js/marko/commit/cbcd7ecd3bb6a670c0cbd90f02b3a16332a71282) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Add `return` method to asyncIterator on render method to better support apis that expect it to be there.

- [#2367](https://github.com/marko-js/marko/pull/2367) [`c8e943d`](https://github.com/marko-js/marko/commit/c8e943d30ea621356b14ce5a2bf8c040f9d41f82) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Ignore errors from child template analysis (assume child will be compiled after imported anyway).

- [#2365](https://github.com/marko-js/marko/pull/2365) [`894d0d0`](https://github.com/marko-js/marko/commit/894d0d05daddee107640f83bcd8a11f46b4e359b) Thanks [@rturnq](https://github.com/rturnq)! - Expose globalConfig and fix config default export

- Updated dependencies [[`c8e943d`](https://github.com/marko-js/marko/commit/c8e943d30ea621356b14ce5a2bf8c040f9d41f82), [`894d0d0`](https://github.com/marko-js/marko/commit/894d0d05daddee107640f83bcd8a11f46b4e359b)]:
  - @marko/compiler@5.37.25
  - @marko/translator-default@6.0.25

## 5.35.33

### Patch Changes

- [#2358](https://github.com/marko-js/marko/pull/2358) [`76951d8`](https://github.com/marko-js/marko/commit/76951d887d02e6f0dd3f0fe1345721d4a94a0069) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Always use MarkoTagBody AST nodes for control flow (even with attribute tags). This fixes a regression with the @marko/tags-api-preview and is more accurate to what is actually happening, especially from a variable scoping perspective.

- Updated dependencies [[`76951d8`](https://github.com/marko-js/marko/commit/76951d887d02e6f0dd3f0fe1345721d4a94a0069)]:
  - @marko/translator-default@6.0.24
  - @marko/compiler@5.37.24

## 5.35.32

### Patch Changes

- [#2346](https://github.com/marko-js/marko/pull/2346) [`8ec88ff`](https://github.com/marko-js/marko/commit/8ec88fff87ef40ce19aba8992e075a839a61683e) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Switch back to using babels startIndex api since the regression has been fixed.

- [#2344](https://github.com/marko-js/marko/pull/2344) [`bafeac1`](https://github.com/marko-js/marko/commit/bafeac1db6acc73e5c38ade2a078485df28670b8) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Optimize circular reference child template analysis.

- Updated dependencies [[`8ec88ff`](https://github.com/marko-js/marko/commit/8ec88fff87ef40ce19aba8992e075a839a61683e), [`bafeac1`](https://github.com/marko-js/marko/commit/bafeac1db6acc73e5c38ade2a078485df28670b8)]:
  - @marko/compiler@5.37.23
  - @marko/translator-default@6.0.23

## 5.35.31

### Patch Changes

- [#2342](https://github.com/marko-js/marko/pull/2342) [`8e07673`](https://github.com/marko-js/marko/commit/8e07673ca07cc83d9910c68ff8359264015c28d1) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Make attribute tags a property on the MarkoTag AST and refactor how attribute tags are translated.

- Updated dependencies [[`8e07673`](https://github.com/marko-js/marko/commit/8e07673ca07cc83d9910c68ff8359264015c28d1)]:
  - @marko/translator-default@6.0.22
  - @marko/compiler@5.37.22

## 5.35.30

### Patch Changes

- [#2338](https://github.com/marko-js/marko/pull/2338) [`033adb9`](https://github.com/marko-js/marko/commit/033adb92de3e40f24614e0de9d438f6390843a84) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Ensure that errors discovered while loading optional module level taglibs are forwarded through the onError api.

- Updated dependencies [[`033adb9`](https://github.com/marko-js/marko/commit/033adb92de3e40f24614e0de9d438f6390843a84)]:
  - @marko/compiler@5.37.21

## 5.35.29

### Patch Changes

- [#2334](https://github.com/marko-js/marko/pull/2334) [`212fbd0`](https://github.com/marko-js/marko/commit/212fbd063d046d865bb3e8f996db91060b6651b2) Thanks [@LuLaValva](https://github.com/LuLaValva)! - TypeScript dependency fix

- [#2337](https://github.com/marko-js/marko/pull/2337) [`ea95de1`](https://github.com/marko-js/marko/commit/ea95de1deaaa03bf2bc57b2518954084dbc1442f) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Avoid babel `startColumn` api until https://github.com/babel/babel/pull/16936 is merged.

- Updated dependencies [[`212fbd0`](https://github.com/marko-js/marko/commit/212fbd063d046d865bb3e8f996db91060b6651b2), [`ea95de1`](https://github.com/marko-js/marko/commit/ea95de1deaaa03bf2bc57b2518954084dbc1442f)]:
  - @marko/compiler@5.37.20
  - @marko/translator-default@6.0.21

## 5.35.28

### Patch Changes

- [#2332](https://github.com/marko-js/marko/pull/2332) [`b920f86`](https://github.com/marko-js/marko/commit/b920f8632894bfbd97bb642829390daee0e949fd) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Fix incorrect AttrTag tag type definition.

- [#2332](https://github.com/marko-js/marko/pull/2332) [`6e87653`](https://github.com/marko-js/marko/commit/6e8765300dabc1d370058dca76f17d87b80aea3a) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Remove extraneous runtime helper.

- Updated dependencies [[`6e87653`](https://github.com/marko-js/marko/commit/6e8765300dabc1d370058dca76f17d87b80aea3a)]:
  - @marko/translator-default@6.0.20

## 5.35.27

### Patch Changes

- [#2326](https://github.com/marko-js/marko/pull/2326) [`807b725`](https://github.com/marko-js/marko/commit/807b7255eb0855701abc54fb6748f2f0b84c6082) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Deprecated the Marko.RepeatableAttrTag type (which is now an alias of Marko.AttrTag). This type was overcomplicating things and leading people to incorrectly handle the single item case. Update docs to avoid recommending relying on the array case since this behavior changes in Marko 6 to always be a single (iterable) item.

  Updates the `Marko.Input` type to handle changes to the `Marko.Body` type from `@marko/language-tools`.

## 5.35.26

### Patch Changes

- [#2324](https://github.com/marko-js/marko/pull/2324) [`4776e33`](https://github.com/marko-js/marko/commit/4776e334ed8f4f70559042d28007dfa447942693) Thanks [@rturnq](https://github.com/rturnq)! - Allow child template analysis on manually imported tags in translator-default and optimize direct reference of imported tag

- Updated dependencies [[`4776e33`](https://github.com/marko-js/marko/commit/4776e334ed8f4f70559042d28007dfa447942693)]:
  - @marko/translator-default@6.0.19
  - @marko/compiler@5.37.19

## 5.35.25

### Patch Changes

- [#2322](https://github.com/marko-js/marko/pull/2322) [`420405d`](https://github.com/marko-js/marko/commit/420405db952fcedafed0cb48d86620ca53bb2f1d) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Remove the default cache auto clearing behavior.
  Previously the default compiler "cache" was cleared every setImmediate. This was to support server hot reloading in apps using `Lasso` (and `browser-refresh`). Since we brought back support for `browser-refresh` in the Marko package we now clear this cache when browser-refresh triggers a change making the default cache clearing redundant.
- Updated dependencies [[`420405d`](https://github.com/marko-js/marko/commit/420405db952fcedafed0cb48d86620ca53bb2f1d)]:
  - @marko/compiler@5.37.18

## 5.35.24

### Patch Changes

- [#2320](https://github.com/marko-js/marko/pull/2320) [`13b3270`](https://github.com/marko-js/marko/commit/13b32707ed673dd3dabe6dfdb90fcf5a19448776) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Optimize how style and script tags are diffed (similar to textarea) where the text nodes are concatenated and diffed as a whole.

- [#2320](https://github.com/marko-js/marko/pull/2320) [`a9da4d6`](https://github.com/marko-js/marko/commit/a9da4d64cf8116867ea80150f10c4dc8a45a0c98) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Fix regression from #2138 which caused nullable native dynamic tags with body contents to not output the end tag. 😱

- Updated dependencies [[`13b3270`](https://github.com/marko-js/marko/commit/13b32707ed673dd3dabe6dfdb90fcf5a19448776), [`a9da4d6`](https://github.com/marko-js/marko/commit/a9da4d64cf8116867ea80150f10c4dc8a45a0c98)]:
  - @marko/translator-default@6.0.18
  - @marko/compiler@5.37.17

## 5.35.23

### Patch Changes

- [#2318](https://github.com/marko-js/marko/pull/2318) [`1dbb189`](https://github.com/marko-js/marko/commit/1dbb189976ef56a28252fbf7da95ac18a3eadaf6) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Fix issue where a null able native tag with no body content (eg `<${show && "div}/>`) was incorrectly outputting a fragment for the body content (which did not exist).

- Updated dependencies [[`1dbb189`](https://github.com/marko-js/marko/commit/1dbb189976ef56a28252fbf7da95ac18a3eadaf6)]:
  - @marko/translator-default@6.0.17
  - @marko/compiler@5.37.16

## 5.35.22

### Patch Changes

- [#2316](https://github.com/marko-js/marko/pull/2316) [`e57e706`](https://github.com/marko-js/marko/commit/e57e706a901002763968e840b321f8c3eb7c55fb) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Expose the v3 legacy helpers properly in the marko package.json

- [#2316](https://github.com/marko-js/marko/pull/2316) [`1e2c903`](https://github.com/marko-js/marko/commit/1e2c903cb1da7e919d683d65f1bda4661abe931e) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Fix regression where an out of order await resolves before the "<await-reorderer>" (automatically injected at the end of the body) would be flushed. In practice this means an in order await after all out of order awaits (that resolves after any of the out of order awaits) was causing some out of order awaits not to be reordered.

## 5.35.21

### Patch Changes

- [#2314](https://github.com/marko-js/marko/pull/2314) [`75d0ab8`](https://github.com/marko-js/marko/commit/75d0ab8301d068ac370f4ef8b0b1f18d1b559eef) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Downgrade minimatch module since latest version requires node 20.

- [#2315](https://github.com/marko-js/marko/pull/2315) [`5b4ffa8`](https://github.com/marko-js/marko/commit/5b4ffa85d434e591fd56cdbfd5b5cc1b2f4927dd) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Add back the "legacy helpers" from Marko 3 to simplify the process of upgrading some older applications.

- [#2308](https://github.com/marko-js/marko/pull/2308) [`a279d09`](https://github.com/marko-js/marko/commit/a279d0934968f34661d37bb29eb99ae7415fa5b6) Thanks [@LuLaValva](https://github.com/LuLaValva)! - Update documentation

## 5.35.20

### Patch Changes

- [#2306](https://github.com/marko-js/marko/pull/2306) [`4d8eb53`](https://github.com/marko-js/marko/commit/4d8eb53c7354837233d99077f3d68980b13da911) Thanks [@mlrawlings](https://github.com/mlrawlings)! - fix: upgrade babel/it-fails, fix VComment

- [#2310](https://github.com/marko-js/marko/pull/2310) [`f06d4b0`](https://github.com/marko-js/marko/commit/f06d4b0559c3fbb3af67773c70b3aab25278b0ca) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Avoid babel compiler assert api to fix a regression.

- Updated dependencies [[`f06d4b0`](https://github.com/marko-js/marko/commit/f06d4b0559c3fbb3af67773c70b3aab25278b0ca)]:
  - @marko/translator-default@6.0.16
  - @marko/compiler@5.37.15

## 5.35.19

### Patch Changes

- [#2303](https://github.com/marko-js/marko/pull/2303) [`e6d117b`](https://github.com/marko-js/marko/commit/e6d117b67a3099ab0a29248d189de7b37b9d3d8a) Thanks [@rturnq](https://github.com/rturnq)! - Add frame property to compile errors

- Updated dependencies [[`e6d117b`](https://github.com/marko-js/marko/commit/e6d117b67a3099ab0a29248d189de7b37b9d3d8a)]:
  - @marko/compiler@5.37.14

## 5.35.18

### Patch Changes

- [#2300](https://github.com/marko-js/marko/pull/2300) [`d45f91a`](https://github.com/marko-js/marko/commit/d45f91a5e0fff686cac7b7daf29deb60a6a1ffd7) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Fix issue where legacy compat `w-bind` directives were being incorrectly optimized as static vdom.

- Updated dependencies [[`d45f91a`](https://github.com/marko-js/marko/commit/d45f91a5e0fff686cac7b7daf29deb60a6a1ffd7)]:
  - @marko/translator-default@6.0.15
  - @marko/compiler@5.37.13

## 5.35.17

### Patch Changes

- [#2298](https://github.com/marko-js/marko/pull/2298) [`c01d83f`](https://github.com/marko-js/marko/commit/c01d83fb2617443a7dc03eb3b43a2f7752754a45) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Fix issue with the "ignoreUnrecognizedTags" compiler option being used with dynamic tags that have attribute tags.

- [#2298](https://github.com/marko-js/marko/pull/2298) [`cfff311`](https://github.com/marko-js/marko/commit/cfff3111148a43f58c7d2b78f679c09c04d429b5) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Removes the debug mode dom manipulation warning since chrome dropped the api's that allowed us to get useful stack traces.

- Updated dependencies [[`c01d83f`](https://github.com/marko-js/marko/commit/c01d83fb2617443a7dc03eb3b43a2f7752754a45), [`cfff311`](https://github.com/marko-js/marko/commit/cfff3111148a43f58c7d2b78f679c09c04d429b5)]:
  - @marko/translator-default@6.0.14
  - @marko/compiler@5.37.12

## 5.35.16

### Patch Changes

- [#2296](https://github.com/marko-js/marko/pull/2296) [`81c5c0e`](https://github.com/marko-js/marko/commit/81c5c0e0436dc694f09c722f2103bfdc9cb3844f) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Fix issues related to recent babel changes.

- [#2296](https://github.com/marko-js/marko/pull/2296) [`81c5c0e`](https://github.com/marko-js/marko/commit/81c5c0e0436dc694f09c722f2103bfdc9cb3844f) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Improve support for @marko/compat.

- Updated dependencies [[`81c5c0e`](https://github.com/marko-js/marko/commit/81c5c0e0436dc694f09c722f2103bfdc9cb3844f), [`81c5c0e`](https://github.com/marko-js/marko/commit/81c5c0e0436dc694f09c722f2103bfdc9cb3844f)]:
  - @marko/compiler@5.37.11
  - @marko/translator-default@6.0.13

## 5.35.15

### Patch Changes

- [#2294](https://github.com/marko-js/marko/pull/2294) [`c600610`](https://github.com/marko-js/marko/commit/c6006102479d8d10ffd1f18d13b8c607fbabd177) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Fix issue with comment nodes in unescaped html by bringing back virtual comment nodes.

- Updated dependencies [[`c600610`](https://github.com/marko-js/marko/commit/c6006102479d8d10ffd1f18d13b8c607fbabd177)]:
  - @marko/translator-default@6.0.12
  - @marko/compiler@5.37.10

## 5.35.14

### Patch Changes

- [#2289](https://github.com/marko-js/marko/pull/2289) [`e20e9af`](https://github.com/marko-js/marko/commit/e20e9af702415fd65b435908d973a2242b346e2a) Thanks [@LuLaValva](https://github.com/LuLaValva)! - Add Marko to window when required

## 5.35.13

### Patch Changes

- [#2286](https://github.com/marko-js/marko/pull/2286) [`55338b5`](https://github.com/marko-js/marko/commit/55338b52969817b63c90ea84f30246ad0b94b6f9) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Optimize template literal printing in html output.

- Updated dependencies [[`55338b5`](https://github.com/marko-js/marko/commit/55338b52969817b63c90ea84f30246ad0b94b6f9)]:
  - @marko/translator-default@6.0.11
  - @marko/compiler@5.37.9

## 5.35.12

### Patch Changes

- [#2284](https://github.com/marko-js/marko/pull/2284) [`d0723d3`](https://github.com/marko-js/marko/commit/d0723d398338d86b48524e230fe24d93d62ee19a) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Fix off by one issue for static statement sourcemaps (eg import) and for concise mode tags.

- Updated dependencies [[`d0723d3`](https://github.com/marko-js/marko/commit/d0723d398338d86b48524e230fe24d93d62ee19a)]:
  - @marko/compiler@5.37.8
  - @marko/translator-default@6.0.10

## 5.35.11

### Patch Changes

- [#2282](https://github.com/marko-js/marko/pull/2282) [`32e2eff`](https://github.com/marko-js/marko/commit/32e2eff5c3ecdcb36f7b6ed98ea2a1e705538a29) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Improve handling of sourcemaps for inline style blocks and tags.

- Updated dependencies [[`32e2eff`](https://github.com/marko-js/marko/commit/32e2eff5c3ecdcb36f7b6ed98ea2a1e705538a29)]:
  - @marko/translator-default@6.0.9
  - @marko/compiler@5.37.7

## 5.35.10

### Patch Changes

- [#2277](https://github.com/marko-js/marko/pull/2277) [`ce88d81`](https://github.com/marko-js/marko/commit/ce88d8194f98b4010032634f5427021810f6acdb) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Fix "off by one" issue with source location information when the index was at the start of the line.

- Updated dependencies [[`ce88d81`](https://github.com/marko-js/marko/commit/ce88d8194f98b4010032634f5427021810f6acdb)]:
  - @marko/compiler@5.37.6
  - @marko/translator-default@6.0.8

## 5.35.9

### Patch Changes

- [#2274](https://github.com/marko-js/marko/pull/2274) [`5cea7d6`](https://github.com/marko-js/marko/commit/5cea7d65ead9b58d7d7d244078d279d561fd3ea7) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Optimize javascript parsing helpers to pass in start line / column information to babel rather than faking it with whitespace.

  For large templates this can have a significant impact on parsing performance.

- Updated dependencies [[`5cea7d6`](https://github.com/marko-js/marko/commit/5cea7d65ead9b58d7d7d244078d279d561fd3ea7)]:
  - @marko/compiler@5.37.5
  - @marko/translator-default@6.0.7

## 5.35.8

### Patch Changes

- [#2267](https://github.com/marko-js/marko/pull/2267) [`b533216`](https://github.com/marko-js/marko/commit/b5332168b7134cb3b5c8518f789357c0d77b2ae6) Thanks [@mlrawlings](https://github.com/mlrawlings)! - Add open graph attributes to type defs

## 5.35.7

### Patch Changes

- [#2264](https://github.com/marko-js/marko/pull/2264) [`992753e`](https://github.com/marko-js/marko/commit/992753e695e054d2789cdc1b439da5065468cb3a) Thanks [@LuLaValva](https://github.com/LuLaValva)! - For-of loop code coverage improvement

- Updated dependencies [[`992753e`](https://github.com/marko-js/marko/commit/992753e695e054d2789cdc1b439da5065468cb3a)]:
  - @marko/translator-default@6.0.6

## 5.35.6

### Patch Changes

- [#2261](https://github.com/marko-js/marko/pull/2261) [`daa22a8`](https://github.com/marko-js/marko/commit/daa22a88d96cf4a943cf9fd81126aca4ae5a91bc) Thanks [@vwong](https://github.com/vwong)! - Add popover attribute to typings

## 5.35.5

### Patch Changes

- [#2252](https://github.com/marko-js/marko/pull/2252) [`339c28d`](https://github.com/marko-js/marko/commit/339c28dd590dc15b6a1011f38411809060f1a4ba) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Allow diagnostic fixes in parse stage.

- Updated dependencies [[`bfe85d1`](https://github.com/marko-js/marko/commit/bfe85d18772f244abfced05d7cde5698b7e077ec), [`339c28d`](https://github.com/marko-js/marko/commit/339c28dd590dc15b6a1011f38411809060f1a4ba), [`339c28d`](https://github.com/marko-js/marko/commit/339c28dd590dc15b6a1011f38411809060f1a4ba), [`339c28d`](https://github.com/marko-js/marko/commit/339c28dd590dc15b6a1011f38411809060f1a4ba)]:
  - @marko/compiler@5.37.4
  - @marko/translator-default@6.0.5

## 5.35.4

### Patch Changes

- [#2250](https://github.com/marko-js/marko/pull/2250) [`2cf464f`](https://github.com/marko-js/marko/commit/2cf464f46b1fc6186fb033024063418270c32e1a) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Allow registering/loading top level hydrated components _after_ the "load" event. Previously after the load event it was assumed all assets would have been loaded but this is not always accurate for assets loaded through interactions.

## 5.35.3

### Patch Changes

- [#2248](https://github.com/marko-js/marko/pull/2248) [`0ced6e1`](https://github.com/marko-js/marko/commit/0ced6e17c24808586bd24f025d77cfb3c391ea2e) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Fix typo in upgrade docs and adding missing `browser-refresh` module.

- Updated dependencies [[`0ced6e1`](https://github.com/marko-js/marko/commit/0ced6e17c24808586bd24f025d77cfb3c391ea2e)]:
  - @marko/compiler@5.37.3
  - @marko/translator-default@6.0.4

## 5.35.2

### Patch Changes

- [#2246](https://github.com/marko-js/marko/pull/2246) [`a699cd9`](https://github.com/marko-js/marko/commit/a699cd9434996b8da0a14acba39fd1db03c0329a) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Misc backward compat improvements:
  - Expose `marko/browser-refresh` as a noop
  - Allow translators to specify "optional" taglibs to load if they're installed (used for automatically loading compat taglibs)
  - `marko/node-require` legacy require hook now disables user babel transforms by default
  - Allow `<macro>` tag instances to use tag arguments syntax

- Updated dependencies [[`a699cd9`](https://github.com/marko-js/marko/commit/a699cd9434996b8da0a14acba39fd1db03c0329a)]:
  - @marko/translator-default@6.0.3
  - @marko/compiler@5.37.2

## 5.35.1

### Patch Changes

- [#2244](https://github.com/marko-js/marko/pull/2244) [`934dc13`](https://github.com/marko-js/marko/commit/934dc13972b14b6cc9511ae19db70f5b74a366b5) Thanks [@LuLaValva](https://github.com/LuLaValva)! - Allow mixing comments with attr tags

- Updated dependencies [[`934dc13`](https://github.com/marko-js/marko/commit/934dc13972b14b6cc9511ae19db70f5b74a366b5)]:
  - @marko/translator-default@6.0.2
  - @marko/compiler@5.37.1

## 5.35.0

### Minor Changes

- [#2238](https://github.com/marko-js/marko/pull/2238) [`a741f36`](https://github.com/marko-js/marko/commit/a741f36e60583a2403a912627765c3ec2aa824e5) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Add new optimizedRegistryIds compiler option

### Patch Changes

- Updated dependencies [[`a741f36`](https://github.com/marko-js/marko/commit/a741f36e60583a2403a912627765c3ec2aa824e5)]:
  - @marko/compiler@5.37.0

## 5.34.5

### Patch Changes

- [#2232](https://github.com/marko-js/marko/pull/2232) [`a67e1c4`](https://github.com/marko-js/marko/commit/a67e1c42b04ede5d9b9ef3cb2f8e21bedd2f004f) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Fix issue where the `ignoreUnrecognizedTags` compiler option was incorrectly escaping attribute tags for recognized tags that did not explicitly define their attribute tags in a marko.json

- Updated dependencies [[`a67e1c4`](https://github.com/marko-js/marko/commit/a67e1c42b04ede5d9b9ef3cb2f8e21bedd2f004f)]:
  - @marko/translator-default@6.0.1
  - @marko/compiler@5.36.2

## 5.34.4

### Patch Changes

- [#2226](https://github.com/marko-js/marko/pull/2226) [`7691418`](https://github.com/marko-js/marko/commit/7691418bc5fc8cc0fb50510111e3d92aadaca3cb) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Fix issue where an out of order await contained an in order await and then another out of order await. This previously caused a race condition where if the final out of order await resolved first, it'd try to send it's content without it's placeholder location being available.

## 5.34.3

### Patch Changes

- [#2223](https://github.com/marko-js/marko/pull/2223) [`1453eb8`](https://github.com/marko-js/marko/commit/1453eb8c88912aaf58c6fee34d9550af8d06e1fb) Thanks [@LuLaValva](https://github.com/LuLaValva)! - fix native tag return types

## 5.34.2

### Patch Changes

- Updated dependencies [[`0ee141c`](https://github.com/marko-js/marko/commit/0ee141c525899dcccd0ffa69b8012c8c23ed5d4f)]:
  - @marko/translator-default@6.0.0

## 5.34.1

### Patch Changes

- [#2217](https://github.com/marko-js/marko/pull/2217) [`4fc4614`](https://github.com/marko-js/marko/commit/4fc46149ae046dd0fac0e7cc7e904b188f616f7f) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Fix issue where element keys could be different because of hoisted const elements not always being keyed. This could cause a hydration issue since the server and client compilations would not agree on the keys.

- Updated dependencies [[`4fc4614`](https://github.com/marko-js/marko/commit/4fc46149ae046dd0fac0e7cc7e904b188f616f7f)]:
  - @marko/translator-default@5.33.1
  - @marko/compiler@5.36.1

## 5.34.0

### Minor Changes

- [#2214](https://github.com/marko-js/marko/pull/2214) [`2d0a566`](https://github.com/marko-js/marko/commit/2d0a566a569e0d8caab2fd9abc960e6810e29b56) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Using event handlers now causes a template to become an implicit component or split component (depending on if a string event handler is used).

### Patch Changes

- Updated dependencies [[`2d0a566`](https://github.com/marko-js/marko/commit/2d0a566a569e0d8caab2fd9abc960e6810e29b56)]:
  - @marko/translator-default@5.33.0
  - @marko/compiler@5.36.0

## 5.33.19

### Patch Changes

- [#2212](https://github.com/marko-js/marko/pull/2212) [`a1a91a4`](https://github.com/marko-js/marko/commit/a1a91a474853a4b6dc31217d374ee0e7e1179cec) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Fix issues related to hydrating sections under a native tag with the `no-update` directive.

- Updated dependencies [[`a1a91a4`](https://github.com/marko-js/marko/commit/a1a91a474853a4b6dc31217d374ee0e7e1179cec)]:
  - @marko/compiler@5.35.14
  - @marko/translator-default@5.32.16

## 5.33.18

### Patch Changes

- [#2210](https://github.com/marko-js/marko/pull/2210) [`7d1bbdb`](https://github.com/marko-js/marko/commit/7d1bbdb9af63164448697ceb20490ee0776bc70f) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - I completely messed up the release of https://github.com/marko-js/marko/pull/2205, this fixes that.

- [#2210](https://github.com/marko-js/marko/pull/2210) [`7d1bbdb`](https://github.com/marko-js/marko/commit/7d1bbdb9af63164448697ceb20490ee0776bc70f) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Fix issue where native tags with `no-update` were not having their key serialized from the server causing a hydration diffing issue in some cases.

- Updated dependencies [[`7d1bbdb`](https://github.com/marko-js/marko/commit/7d1bbdb9af63164448697ceb20490ee0776bc70f)]:
  - @marko/translator-default@5.32.15
  - @marko/compiler@5.35.13

## 5.33.17

### Patch Changes

- [`c8fe951`](https://github.com/marko-js/marko/commit/c8fe951813bf6c7d11e581faf9e43522ae76ae98) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Bump compiler and translator to pull in Marko runtime changes.

- Updated dependencies [[`c8fe951`](https://github.com/marko-js/marko/commit/c8fe951813bf6c7d11e581faf9e43522ae76ae98)]:
  - @marko/compiler@5.35.12
  - @marko/translator-default@5.32.14

## 5.33.16

### Patch Changes

- [#2205](https://github.com/marko-js/marko/pull/2205) [`af4adcd`](https://github.com/marko-js/marko/commit/af4adcd1eecbb82930cef94dfb4b1917a2dc04f0) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Fix issue where native tags with `no-update` were not having their key serialized from the server causing a hydration diffing issue in some cases.

- [#2204](https://github.com/marko-js/marko/pull/2204) [`11acdf6`](https://github.com/marko-js/marko/commit/11acdf6f8766bc9b18373243a59e78e091f0b9db) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Fix regression where interpolating null/undefined in a script/style tag was being replaced with an empty string instead of toString'd and added.

  Eg `<script>${undefined}</>` was changed to render nothing, when previously it output `undefined` as a string inside the script.

  Note this behavior should not be relied on and will change in the next major of Marko to normalize the interpolated value to an empty string for nullish values.

## 5.33.15

### Patch Changes

- [#2201](https://github.com/marko-js/marko/pull/2201) [`e0602bb`](https://github.com/marko-js/marko/commit/e0602bb245fbdd95dbdccba91762ea9375cabd12) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Improve the html content escape helpers. The existing implementations no longer maintain an edge in newer versions of node and the regexp based versions are faster.

## 5.33.14

### Patch Changes

- [#2192](https://github.com/marko-js/marko/pull/2192) [`e2d5f18`](https://github.com/marko-js/marko/commit/e2d5f18d3cdc522251fdb8c314648d36e6dcf793) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Fix regression where text was bring split too eagerly while hydrating including text which was not rendered by the current component. This lead to a diffing issue where elements could display in the wrong order.

## 5.33.13

### Patch Changes

- [#2190](https://github.com/marko-js/marko/pull/2190) [`638ca07`](https://github.com/marko-js/marko/commit/638ca07db382345c26f90247115eef13394e9905) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Update dependencies

- Updated dependencies [[`638ca07`](https://github.com/marko-js/marko/commit/638ca07db382345c26f90247115eef13394e9905)]:
  - @marko/compiler@5.35.11
  - @marko/translator-default@5.32.12

## 5.33.12

### Patch Changes

- [#2187](https://github.com/marko-js/marko/pull/2187) [`fe344b0`](https://github.com/marko-js/marko/commit/fe344b00041677f40ce49d03c0fb283322a1c898) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Fix some tags/class interop issues.

- Updated dependencies [[`fe344b0`](https://github.com/marko-js/marko/commit/fe344b00041677f40ce49d03c0fb283322a1c898)]:
  - @marko/compiler@5.35.10
  - @marko/translator-default@5.32.11

## 5.33.11

### Patch Changes

- [#2182](https://github.com/marko-js/marko/pull/2182) [`1fa3b05`](https://github.com/marko-js/marko/commit/1fa3b056006d5d0e3ac221b5b4a18b78de5add21) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Support tracking the "input" using babels scope analysis.

- Updated dependencies [[`1fa3b05`](https://github.com/marko-js/marko/commit/1fa3b056006d5d0e3ac221b5b4a18b78de5add21)]:
  - @marko/compiler@5.35.9
  - @marko/translator-default@5.32.10

## 5.33.10

### Patch Changes

- [#2180](https://github.com/marko-js/marko/pull/2180) [`a8bfb50`](https://github.com/marko-js/marko/commit/a8bfb50d7617d338c8e6b11c3f18cbb4829a5cba) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Fix issue where vdom optimizer was including elements with user key attributes.

- [#2177](https://github.com/marko-js/marko/pull/2177) [`ba110fb`](https://github.com/marko-js/marko/commit/ba110fb99092ffa1a254ab369626cba4a6e83430) Thanks [@rturnq](https://github.com/rturnq)! - Remove dependency on setTimeout which is not implemented in some isolates

- Updated dependencies [[`a8bfb50`](https://github.com/marko-js/marko/commit/a8bfb50d7617d338c8e6b11c3f18cbb4829a5cba)]:
  - @marko/translator-default@5.32.9
  - @marko/compiler@5.35.8

## 5.33.9

### Patch Changes

- [#2178](https://github.com/marko-js/marko/pull/2178) [`f8c66c6`](https://github.com/marko-js/marko/commit/f8c66c6c5bef4b124bb26242459fb1d9174258e6) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Fixes an issue where elements with "simple attributes" (those with a combination of class, style and id attributes) were not correctly removing the attribute value when a new value was false, null or undefined.

## 5.33.8

### Patch Changes

- [#2170](https://github.com/marko-js/marko/pull/2170) [`7ab2d67`](https://github.com/marko-js/marko/commit/7ab2d67c6c5271c441efeb5d58f406eae54379d0) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Avoid writing unnecessary comments for server only components when in interop mode.

- [#2173](https://github.com/marko-js/marko/pull/2173) [`614f432`](https://github.com/marko-js/marko/commit/614f432bfeab93eb35c23d6e378e914b27540f7f) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Fix regression where hydrate dependencies had the incorrect resolved path if they were in node_modules.

- Updated dependencies [[`614f432`](https://github.com/marko-js/marko/commit/614f432bfeab93eb35c23d6e378e914b27540f7f)]:
  - @marko/translator-default@5.32.8
  - @marko/compiler@5.35.7

## 5.33.7

### Patch Changes

- [`409ef4e`](https://github.com/marko-js/marko/commit/409ef4e76d680b6e4202658fdf9567c663898d8b) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Fix regression where hydrate entry files had incorrect relative paths.

- Updated dependencies [[`409ef4e`](https://github.com/marko-js/marko/commit/409ef4e76d680b6e4202658fdf9567c663898d8b)]:
  - @marko/translator-default@5.32.7
  - @marko/compiler@5.35.6

## 5.33.6

### Patch Changes

- [#2161](https://github.com/marko-js/marko/pull/2161) [`8ff7488`](https://github.com/marko-js/marko/commit/8ff74884311982b3f8895f47f9cbf8b31c6557b9) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Avoid using mutable exported bindings for stream data access in tags api. (It did not work in Vite/Rollup)

- Updated dependencies [[`f9cf946`](https://github.com/marko-js/marko/commit/f9cf9467cd7e0cb59dd3254f9695a56434e97743), [`f9cf946`](https://github.com/marko-js/marko/commit/f9cf9467cd7e0cb59dd3254f9695a56434e97743)]:
  - @marko/translator-default@5.32.4

## 5.33.5

### Patch Changes

- [#2156](https://github.com/marko-js/marko/pull/2156) [`cbb9f95`](https://github.com/marko-js/marko/commit/cbb9f95cb09d27e739d017cf7734d9f7b6149adf) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Avoid using internal mangled props from tags api in the interop runtime.

## 5.33.4

### Patch Changes

- [#2153](https://github.com/marko-js/marko/pull/2153) [`f2a924b`](https://github.com/marko-js/marko/commit/f2a924b2afa3d8f8810b71d72f91695c23bff4a2) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Fix issues with importing both cjs and mjs @marko/runtime-tags when loaded via compat layer.

- Updated dependencies [[`f2a924b`](https://github.com/marko-js/marko/commit/f2a924b2afa3d8f8810b71d72f91695c23bff4a2)]:
  - @marko/translator-default@5.32.3

## 5.33.3

### Patch Changes

- [#2146](https://github.com/marko-js/marko/pull/2146) [`e2b48ef`](https://github.com/marko-js/marko/commit/e2b48ef89dd8b7416da723ea9ac2f9fe5dded315) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Fix MARKO_DEBUG output for compat runtime.

## 5.33.2

### Patch Changes

- [#2145](https://github.com/marko-js/marko/pull/2145) [`ccc19e2`](https://github.com/marko-js/marko/commit/ccc19e2657f992acdf6822c5bebc6bc7cf6e3460) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Fix regression where a textarea created with no value in the browser was setting `null` as the value.

- [#2143](https://github.com/marko-js/marko/pull/2143) [`bb250c9`](https://github.com/marko-js/marko/commit/bb250c9bd530e37b11e41bf938312f0b4fe1c348) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Fix issue where interop helpers were mixed commonjs and esm

## 5.33.1

### Patch Changes

- [#2138](https://github.com/marko-js/marko/pull/2138) [`105c26b`](https://github.com/marko-js/marko/commit/105c26bd4f7f37bd6073e4795b01b83d31ecda06) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Fix issue with package json src/dist override script.

- Updated dependencies [[`105c26b`](https://github.com/marko-js/marko/commit/105c26bd4f7f37bd6073e4795b01b83d31ecda06)]:
  - @marko/compiler@5.35.1
  - @marko/translator-default@5.32.1

## 5.33.0

### Minor Changes

- [#2004](https://github.com/marko-js/marko/pull/2004) [`2704819`](https://github.com/marko-js/marko/commit/27048199d6a0ee48ed8118e9f7017a94c7dc4f3d) Thanks [@mlrawlings](https://github.com/mlrawlings)! - Release alpha of tags api translator/runtime.

- [#2004](https://github.com/marko-js/marko/pull/2004) [`2704819`](https://github.com/marko-js/marko/commit/27048199d6a0ee48ed8118e9f7017a94c7dc4f3d) Thanks [@mlrawlings](https://github.com/mlrawlings)! - Add `mount` api for client rendered components and expose `Symbol.asyncIterator` for server rendered components.

### Patch Changes

- Updated dependencies [[`2704819`](https://github.com/marko-js/marko/commit/27048199d6a0ee48ed8118e9f7017a94c7dc4f3d), [`2704819`](https://github.com/marko-js/marko/commit/27048199d6a0ee48ed8118e9f7017a94c7dc4f3d)]:
  - @marko/translator-default@5.32.0
  - @marko/compiler@5.35.0

## 5.32.15

### Patch Changes

- [#2132](https://github.com/marko-js/marko/pull/2132) [`f3004d7`](https://github.com/marko-js/marko/commit/f3004d7baddd22a022217bb5e50ef8e6b6a80354) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Fix incorrect check for if a component has custom events

## 5.32.14

### Patch Changes

- [#2123](https://github.com/marko-js/marko/pull/2123) [`5bcc111`](https://github.com/marko-js/marko/commit/5bcc111a1c7607948413a5cf798d66afc3077a91) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Fix regression where attribute tags used without renderBody content was clearing existing renderBody content in the input, eg via a spread.

## 5.32.13

### Patch Changes

- [#2121](https://github.com/marko-js/marko/pull/2121) [`ddf3b5e`](https://github.com/marko-js/marko/commit/ddf3b5ef3279e3b0a93271d3022074393559aafd) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Fix issue where splitText was incorrectly called during hydrate when the text node content did not match up.

## 5.32.12

### Patch Changes

- [#2119](https://github.com/marko-js/marko/pull/2119) [`ee2d9f9`](https://github.com/marko-js/marko/commit/ee2d9f9880273382812690bf2609c6b8d698c0b1) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Fix regression with merging input and attribute tags if input defined the same property as the attribute tag name.

- Updated dependencies [[`ee2d9f9`](https://github.com/marko-js/marko/commit/ee2d9f9880273382812690bf2609c6b8d698c0b1)]:
  - @marko/translator-default@5.31.17

## 5.32.11

### Patch Changes

- [#2117](https://github.com/marko-js/marko/pull/2117) [`462992e`](https://github.com/marko-js/marko/commit/462992ee51fea27e56894b367870e608ea1009a0) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Fix issue where `:no-update` modifier was not working on special element handlers.

- [#2117](https://github.com/marko-js/marko/pull/2117) [`462992e`](https://github.com/marko-js/marko/commit/462992ee51fea27e56894b367870e608ea1009a0) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Use vdom to vdom comparison for special attributes (input.value, input.checked and option.selected) to improve consistency with how other attributes are handled.

- [#2117](https://github.com/marko-js/marko/pull/2117) [`462992e`](https://github.com/marko-js/marko/commit/462992ee51fea27e56894b367870e608ea1009a0) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Avoid setting attribute value for special properties (like input.value, input.checked and option.selected)

- [#2117](https://github.com/marko-js/marko/pull/2117) [`462992e`](https://github.com/marko-js/marko/commit/462992ee51fea27e56894b367870e608ea1009a0) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Normalize attribute values before setting value to avoid unnecessary work.

- Updated dependencies [[`462992e`](https://github.com/marko-js/marko/commit/462992ee51fea27e56894b367870e608ea1009a0), [`462992e`](https://github.com/marko-js/marko/commit/462992ee51fea27e56894b367870e608ea1009a0), [`462992e`](https://github.com/marko-js/marko/commit/462992ee51fea27e56894b367870e608ea1009a0), [`462992e`](https://github.com/marko-js/marko/commit/462992ee51fea27e56894b367870e608ea1009a0)]:
  - @marko/translator-default@5.31.16

## 5.32.10

### Patch Changes

- [#2115](https://github.com/marko-js/marko/pull/2115) [`a55fb06`](https://github.com/marko-js/marko/commit/a55fb06ec638eb830eb72c71cb766fc05b6ea8cb) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Improve nested attribute tag handling with scriptlets.

- Updated dependencies [[`a55fb06`](https://github.com/marko-js/marko/commit/a55fb06ec638eb830eb72c71cb766fc05b6ea8cb)]:
  - @marko/translator-default@5.31.15
  - @marko/compiler@5.34.7

## 5.32.9

### Patch Changes

- [#2111](https://github.com/marko-js/marko/pull/2111) [`022879d`](https://github.com/marko-js/marko/commit/022879da1a7589f6207d7bbf47b97d1a2d596781) Thanks [@LuLaValva](https://github.com/LuLaValva)! - add componentIdPrefix to id of await client-reorder

## 5.32.8

### Patch Changes

- [#2108](https://github.com/marko-js/marko/pull/2108) [`9a18ced`](https://github.com/marko-js/marko/commit/9a18ced27b04b6fbd391d84c61d97269bcf7f851) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Fix and optimize the output for vdom hoisting.

- [#2108](https://github.com/marko-js/marko/pull/2108) [`a87b692`](https://github.com/marko-js/marko/commit/a87b69212f8b204dbe3d5a1396d95ddafd1adb85) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Fix diffing issues when swapping keyed elements between native tags, custom tags and fragments.

- Updated dependencies [[`9a18ced`](https://github.com/marko-js/marko/commit/9a18ced27b04b6fbd391d84c61d97269bcf7f851), [`a87b692`](https://github.com/marko-js/marko/commit/a87b69212f8b204dbe3d5a1396d95ddafd1adb85)]:
  - @marko/translator-default@5.31.14

## 5.32.7

### Patch Changes

- [#2085](https://github.com/marko-js/marko/pull/2085) [`d82b21e`](https://github.com/marko-js/marko/commit/d82b21e8f505c5006d3781cf9056743dd9972fe1) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Improve compile error output.

- Updated dependencies [[`d82b21e`](https://github.com/marko-js/marko/commit/d82b21e8f505c5006d3781cf9056743dd9972fe1)]:
  - @marko/translator-default@5.31.13
  - @marko/compiler@5.34.6

## 5.32.6

### Patch Changes

- [#2079](https://github.com/marko-js/marko/pull/2079) [`2976dfa`](https://github.com/marko-js/marko/commit/2976dfac56c592dfd80ea79c6ea0e1389346f44c) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Fix issue where additional exports were being removed when stripping typescript types.

- Updated dependencies [[`2976dfa`](https://github.com/marko-js/marko/commit/2976dfac56c592dfd80ea79c6ea0e1389346f44c)]:
  - @marko/compiler@5.34.5
  - @marko/translator-default@5.31.12

## 5.32.5

### Patch Changes

- [#2076](https://github.com/marko-js/marko/pull/2076) [`69b3ff5`](https://github.com/marko-js/marko/commit/69b3ff57c829418946e05c13b644a5560f589086) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Upgrade all package deps to latest

- Updated dependencies [[`69b3ff5`](https://github.com/marko-js/marko/commit/69b3ff57c829418946e05c13b644a5560f589086)]:
  - @marko/translator-default@5.31.11
  - @marko/compiler@5.34.4

## 5.32.4

### Patch Changes

- [#2074](https://github.com/marko-js/marko/pull/2074) [`bf23c566fac02f4e2991be357a95483663493b3f`](https://github.com/marko-js/marko/commit/bf23c566fac02f4e2991be357a95483663493b3f) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Upgrade package lock and built types.

- Updated dependencies [[`bf23c566fac02f4e2991be357a95483663493b3f`](https://github.com/marko-js/marko/commit/bf23c566fac02f4e2991be357a95483663493b3f)]:
  - @marko/translator-default@5.31.10
  - @marko/compiler@5.34.3

## 5.32.3

### Patch Changes

- [#2071](https://github.com/marko-js/marko/pull/2071) [`652b7aa16`](https://github.com/marko-js/marko/commit/652b7aa1608ace877e713ce43486fca1b0a0400b) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Fix types for onsecuritypolicyviolation native attribute.

- [#2071](https://github.com/marko-js/marko/pull/2071) [`652b7aa16`](https://github.com/marko-js/marko/commit/652b7aa1608ace877e713ce43486fca1b0a0400b) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Fix types for <await> tag attribute tags.

## 5.32.2

### Patch Changes

- [#2069](https://github.com/marko-js/marko/pull/2069) [`977d69078`](https://github.com/marko-js/marko/commit/977d690784f1d97acb3494bb822fa852c1380685) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Fix issue with printing variable declarations with multiple variables.

- Updated dependencies [[`977d69078`](https://github.com/marko-js/marko/commit/977d690784f1d97acb3494bb822fa852c1380685)]:
  - @marko/translator-default@5.31.9
  - @marko/compiler@5.34.2

## 5.32.1

### Patch Changes

- [#2067](https://github.com/marko-js/marko/pull/2067) [`ea859a547`](https://github.com/marko-js/marko/commit/ea859a547972be7a2fde6688890023c5bc85bc16) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Simplify the typings of Marko.NativeTags to work better across typescript versions.

## 5.32.0

### Minor Changes

- [#2062](https://github.com/marko-js/marko/pull/2062) [`436ace040`](https://github.com/marko-js/marko/commit/436ace040b73d11908911d60c10845b6e99e8eca) Thanks [@LuLaValva](https://github.com/LuLaValva)! - Add "exports" to marko.json

### Patch Changes

- Updated dependencies [[`436ace040`](https://github.com/marko-js/marko/commit/436ace040b73d11908911d60c10845b6e99e8eca)]:
  - @marko/compiler@5.34.0

## 5.31.18

### Patch Changes

- [#2060](https://github.com/marko-js/marko/pull/2060) [`648a94928`](https://github.com/marko-js/marko/commit/648a94928f662b04634a61395d5d48a956a8ff36) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Expose meta data about which child Marko templates were analyzed for a given compilation.

- Updated dependencies [[`648a94928`](https://github.com/marko-js/marko/commit/648a94928f662b04634a61395d5d48a956a8ff36), [`aed88284b`](https://github.com/marko-js/marko/commit/aed88284b8b3c68965f70b6bdf9412c7100c5df5)]:
  - @marko/compiler@5.33.8
  - @marko/translator-default@5.31.8

## 5.31.17

### Patch Changes

- [#2056](https://github.com/marko-js/marko/pull/2056) [`84f443d60`](https://github.com/marko-js/marko/commit/84f443d60539cc1b3382c6b16da4061070f97aca) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Fix issue when the Marko hot-reload runtime is loaded in native esm

- Updated dependencies [[`84f443d60`](https://github.com/marko-js/marko/commit/84f443d60539cc1b3382c6b16da4061070f97aca)]:
  - @marko/translator-default@5.31.7
  - @marko/compiler@5.33.7

## 5.31.16

### Patch Changes

- [#2054](https://github.com/marko-js/marko/pull/2054) [`1c5eccadf`](https://github.com/marko-js/marko/commit/1c5eccadf8d968552dbe8756905009107d783718) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Fix regression with @marko/babel-utils not exposing new parse helpers.

- Updated dependencies [[`1c5eccadf`](https://github.com/marko-js/marko/commit/1c5eccadf8d968552dbe8756905009107d783718)]:
  - @marko/compiler@5.33.6
  - @marko/translator-default@5.31.6

## 5.31.15

### Patch Changes

- [#2053](https://github.com/marko-js/marko/pull/2053) [`37b347eb5`](https://github.com/marko-js/marko/commit/37b347eb5e9e2d16badb170a880e2eed5d2892a9) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Improve compatibility of legacy Marko widgets loading a template compiled as esm.

- Updated dependencies [[`5354d4411`](https://github.com/marko-js/marko/commit/5354d44112c56fcbbd7f44dd3bf91be1e5a7747c)]:
  - @marko/translator-default@5.31.5
  - @marko/compiler@5.33.5

## 5.31.14

### Patch Changes

- [#2049](https://github.com/marko-js/marko/pull/2049) [`1554b1e1e`](https://github.com/marko-js/marko/commit/1554b1e1e53a75980af0b238cc27bed5ddfa215a) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Allow `template.marko` to act as `index.marko` for backword compat with v4/v3.

- Updated dependencies [[`1554b1e1e`](https://github.com/marko-js/marko/commit/1554b1e1e53a75980af0b238cc27bed5ddfa215a)]:
  - @marko/translator-default@5.31.4
  - @marko/compiler@5.33.4

## 5.31.13

### Patch Changes

- [#2046](https://github.com/marko-js/marko/pull/2046) [`b7cefe4c6`](https://github.com/marko-js/marko/commit/b7cefe4c6f000fc01008ac5d75d2054a34f4f574) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Lazily check for global jQuery when patching legacy components.

## 5.31.12

### Patch Changes

- [#2042](https://github.com/marko-js/marko/pull/2042) [`447104632`](https://github.com/marko-js/marko/commit/44710463258999ad037febef10264e32f3291157) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - When compiling async, prefer using the async babel api for loading babel config files.

- [#2044](https://github.com/marko-js/marko/pull/2044) [`358fb2d22`](https://github.com/marko-js/marko/commit/358fb2d22e3e7bd7cba5e97f34547ff53c309f62) Thanks [@LuLaValva](https://github.com/LuLaValva)! - fix event handler types

- [#2043](https://github.com/marko-js/marko/pull/2043) [`f94486b10`](https://github.com/marko-js/marko/commit/f94486b10fb8c7be63551d0aa4cbebdb8d03614b) Thanks [@LuLaValva](https://github.com/LuLaValva)! - Add CSS camelCase properties

- Updated dependencies [[`447104632`](https://github.com/marko-js/marko/commit/44710463258999ad037febef10264e32f3291157)]:
  - @marko/compiler@5.33.3

## 5.31.11

### Patch Changes

- [#2040](https://github.com/marko-js/marko/pull/2040) [`a5e3f0461`](https://github.com/marko-js/marko/commit/a5e3f046135bcdd054426974282d4ba870bdb97c) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Fix compat issue where markoWidgets.defineRenderer was not resolving the default export of a Marko 5 template.

## 5.31.10

### Patch Changes

- [#2038](https://github.com/marko-js/marko/pull/2038) [`71a227a5f`](https://github.com/marko-js/marko/commit/71a227a5ff8b16c0bb983e082f28280518f712ce) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Fix issue where using the longhand nested attribute tag syntax in a marko.json with a `target-property` defined was not registering the alias as a known attribute, leading to compile errors.

- Updated dependencies [[`71a227a5f`](https://github.com/marko-js/marko/commit/71a227a5ff8b16c0bb983e082f28280518f712ce)]:
  - @marko/translator-default@5.31.3
  - @marko/compiler@5.33.2

## 5.31.9

### Patch Changes

- [#2036](https://github.com/marko-js/marko/pull/2036) [`ea08cc2a9`](https://github.com/marko-js/marko/commit/ea08cc2a9bb494d5735dc0fe69b6aa85cb5ed179) Thanks [@rturnq](https://github.com/rturnq)! - Simplify batching, prevent treeshaking bug

## 5.31.8

### Patch Changes

- [#2034](https://github.com/marko-js/marko/pull/2034) [`a340023b7`](https://github.com/marko-js/marko/commit/a340023b7ef59f1af9ad80f42ac69138ddd3d216) Thanks [@LuLaValva](https://github.com/LuLaValva)! - docs(concise-mode): add multiline attributes

## 5.31.7

### Patch Changes

- [#2032](https://github.com/marko-js/marko/pull/2032) [`034f96741`](https://github.com/marko-js/marko/commit/034f967419d840ae7b8a8cead6c657d5cc64b0a6) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Add js file extension to compiled import of the registry runtime. This improves prebundling in Vite.

- Updated dependencies [[`034f96741`](https://github.com/marko-js/marko/commit/034f967419d840ae7b8a8cead6c657d5cc64b0a6)]:
  - @marko/translator-default@5.31.2

## 5.31.6

### Patch Changes

- [#2027](https://github.com/marko-js/marko/pull/2027) [`db819d388`](https://github.com/marko-js/marko/commit/db819d388e9419d7354a9639c59faa0cd3518305) Thanks [@mlrawlings](https://github.com/mlrawlings)! - Update Marko 5 Upgrade instructions

## 5.31.5

### Patch Changes

- [#2024](https://github.com/marko-js/marko/pull/2024) [`085c87387`](https://github.com/marko-js/marko/commit/085c8738701146877958d81f88248cdf67678174) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Avoid using the bare webpack include api to check if a module has already been loaded.

## 5.31.4

### Patch Changes

- [#2020](https://github.com/marko-js/marko/pull/2020) [`6a4e947b5`](https://github.com/marko-js/marko/commit/6a4e947b5ac9944e61d7871d314a6325a0522d1d) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Ensure .marko files are resolved for legacy renderer taglib configs.

- Updated dependencies [[`6a4e947b5`](https://github.com/marko-js/marko/commit/6a4e947b5ac9944e61d7871d314a6325a0522d1d)]:
  - @marko/compiler@5.33.1
  - @marko/translator-default@5.31.1

## 5.31.3

### Patch Changes

- [#2018](https://github.com/marko-js/marko/pull/2018) [`7a22dc3d1`](https://github.com/marko-js/marko/commit/7a22dc3d16b0d9da9abc7b62c9aa917e54738a16) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Fix loading of legacy components in some test environments.

## 5.31.2

### Patch Changes

- [#2016](https://github.com/marko-js/marko/pull/2016) [`fb46f0a91`](https://github.com/marko-js/marko/commit/fb46f0a9186a0b437e011b40fecf975eae0b9093) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Optimize preserve-tag implementation to use browser remap again.

- [#2016](https://github.com/marko-js/marko/pull/2016) [`1b1df3f56`](https://github.com/marko-js/marko/commit/1b1df3f5674e09914bca448f045ff720002c3ae6) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Fix issue where marko-widger renderers were not bound to the correct "this".

## 5.31.1

### Patch Changes

- [#2014](https://github.com/marko-js/marko/pull/2014) [`636ae526d`](https://github.com/marko-js/marko/commit/636ae526d7f58fa9fe21b0d9e30beb711258002c) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Avoid bundling load api when using legacy runtime.

- [#2014](https://github.com/marko-js/marko/pull/2014) [`636ae526d`](https://github.com/marko-js/marko/commit/636ae526d7f58fa9fe21b0d9e30beb711258002c) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Avoid loading legacy Marko compiler api if possible when using load api.

## 5.31.0

### Minor Changes

- [#2012](https://github.com/marko-js/marko/pull/2012) [`9aede281f`](https://github.com/marko-js/marko/commit/9aede281f95a788df03d607b7d6ca10d9025d39f) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Add compiler option to disable initializing components when outputting hydrate code.

### Patch Changes

- [#2012](https://github.com/marko-js/marko/pull/2012) [`17099cd8f`](https://github.com/marko-js/marko/commit/17099cd8ff4ef5868b79f32bdb682fd7393e7139) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Allow skipping output of virtual dependencies by returning a falsey value from the `resolveVirtualDependency` option.

- [#2012](https://github.com/marko-js/marko/pull/2012) [`ec21e799f`](https://github.com/marko-js/marko/commit/ec21e799f39e74c3d5b0fcfb5839a3954fbc7ad0) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Fix issue where data (legacy alias of input) was overwritten by assignment but still being migrated.

- Updated dependencies [[`9aede281f`](https://github.com/marko-js/marko/commit/9aede281f95a788df03d607b7d6ca10d9025d39f), [`17099cd8f`](https://github.com/marko-js/marko/commit/17099cd8ff4ef5868b79f32bdb682fd7393e7139), [`ec21e799f`](https://github.com/marko-js/marko/commit/ec21e799f39e74c3d5b0fcfb5839a3954fbc7ad0), [`6ba268c84`](https://github.com/marko-js/marko/commit/6ba268c841631b3ed36964c8f532e543885ad4f5)]:
  - @marko/translator-default@5.31.0
  - @marko/compiler@5.33.0

## 5.30.2

### Patch Changes

- [#2010](https://github.com/marko-js/marko/pull/2010) [`c08f940c8`](https://github.com/marko-js/marko/commit/c08f940c8ea73806ed79d35d435b3844fbfb6759) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Improve upgrade guide to reference the new `marko-widgets` and `@marko/compat-v4` modules.

## 5.30.1

### Patch Changes

- [#2008](https://github.com/marko-js/marko/pull/2008) [`1235cf700`](https://github.com/marko-js/marko/commit/1235cf7005447bdad7a84bacf20d40c7c457c03a) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Fix regression with static template literal expressions.

- Updated dependencies [[`1235cf700`](https://github.com/marko-js/marko/commit/1235cf7005447bdad7a84bacf20d40c7c457c03a)]:
  - @marko/translator-default@5.30.1

## 5.30.0

### Minor Changes

- [#2006](https://github.com/marko-js/marko/pull/2006) [`b2e70bc45`](https://github.com/marko-js/marko/commit/b2e70bc45006a8cccfa61ac99bbca40a71d05fd1) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Add compute node helper to replace babels `evaluate` helper. This helper is less aggressive and doesn't suffer from the false positives that popped up with babels version.

### Patch Changes

- [#2005](https://github.com/marko-js/marko/pull/2005) [`4286236b0`](https://github.com/marko-js/marko/commit/4286236b0eaa3cfdbdde02f531d76fcaed3203ee) Thanks [@rturnq](https://github.com/rturnq)! - Handle errors thrown in await catch attribute

- [#2006](https://github.com/marko-js/marko/pull/2006) [`b2e70bc45`](https://github.com/marko-js/marko/commit/b2e70bc45006a8cccfa61ac99bbca40a71d05fd1) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Avoid adding trailing semicolon to style attribute output.

- Updated dependencies [[`b2e70bc45`](https://github.com/marko-js/marko/commit/b2e70bc45006a8cccfa61ac99bbca40a71d05fd1), [`b2e70bc45`](https://github.com/marko-js/marko/commit/b2e70bc45006a8cccfa61ac99bbca40a71d05fd1), [`d45962db1`](https://github.com/marko-js/marko/commit/d45962db1def9b025a1d75d98b4c655c0565e3ef)]:
  - @marko/translator-default@5.30.0
  - @marko/compiler@5.32.0

## 5.29.2

### Patch Changes

- [#1999](https://github.com/marko-js/marko/pull/1999) [`7957fb564`](https://github.com/marko-js/marko/commit/7957fb56485a8607ab5b928531001085aba2d104) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Switch to .d.marko file for <await> tag types to avoid issues when loaded in a pure typescript project. By default TypeScript doesn't play well with `node_modules` which are seen as `.js` files which is what the jsdoc version of a Marko file appears as. By switching to a `.d.marko` it is instead always seen as `.ts` which is always analyzed by typescript.

- Updated dependencies [[`7957fb564`](https://github.com/marko-js/marko/commit/7957fb56485a8607ab5b928531001085aba2d104)]:
  - @marko/translator-default@5.29.2

## 5.29.1

### Patch Changes

- [#1997](https://github.com/marko-js/marko/pull/1997) [`2afa3f6e6`](https://github.com/marko-js/marko/commit/2afa3f6e61ca262debde88bc11400a6ba97a2f19) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Ensure source maps are loaded in dev mode when using the @marko/register hook.

- Updated dependencies [[`2afa3f6e6`](https://github.com/marko-js/marko/commit/2afa3f6e61ca262debde88bc11400a6ba97a2f19)]:
  - @marko/compiler@5.31.1
  - @marko/translator-default@5.29.1

## 5.29.0

### Minor Changes

- [#1996](https://github.com/marko-js/marko/pull/1996) [`d93037843`](https://github.com/marko-js/marko/commit/d930378434279451b0113ae6a268304063b037f4) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Move <macro> tag validation to the translate phase and expose new utilities for working with macros in @marko/babel-utils. This allows for migration/transformer/etc compiler hooks to better work with <macro>'s.

### Patch Changes

- Updated dependencies [[`d93037843`](https://github.com/marko-js/marko/commit/d930378434279451b0113ae6a268304063b037f4), [`57b280b2f`](https://github.com/marko-js/marko/commit/57b280b2ff0af217c8381a1b0a9ef61a31ba211c)]:
  - @marko/translator-default@5.29.0
  - @marko/compiler@5.31.0

## 5.28.3

### Patch Changes

- [#1992](https://github.com/marko-js/marko/pull/1992) [`1bc993012`](https://github.com/marko-js/marko/commit/1bc993012375315a6cbda3eed75291abf821de6b) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Fix regression which would happen if tools tried to "delete" the `loc` property on error instances returned from Marko. This property is now configurable and can be deleted again.

- Updated dependencies [[`1bc993012`](https://github.com/marko-js/marko/commit/1bc993012375315a6cbda3eed75291abf821de6b)]:
  - @marko/compiler@5.30.3
  - @marko/translator-default@5.28.3

## 5.28.2

### Patch Changes

- [#1990](https://github.com/marko-js/marko/pull/1990) [`a54a23794`](https://github.com/marko-js/marko/commit/a54a2379487fd20e6598d5fdfc7c7dbe0f644e8b) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Change the stack frame for error messages generated by the compiler to work better with how node prints error messages.

- Updated dependencies [[`a54a23794`](https://github.com/marko-js/marko/commit/a54a2379487fd20e6598d5fdfc7c7dbe0f644e8b)]:
  - @marko/translator-default@5.28.2
  - @marko/compiler@5.30.2

## 5.28.1

### Patch Changes

- [#1987](https://github.com/marko-js/marko/pull/1987) [`8bf5cb1f0`](https://github.com/marko-js/marko/commit/8bf5cb1f097769c835a452ff4bbea67a6c741810) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - When duplicate taglib entries are found and merged, nullish values are now ignored. This means if you specify a property in a taglib it will not be unset by another (merged) taglib.

- [#1986](https://github.com/marko-js/marko/pull/1986) [`1b29b859f`](https://github.com/marko-js/marko/commit/1b29b859fb0876d9a8d0d7bba44d08f77f1706bb) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Fix issue where `module-code` entries were not properly checking the expected module output (causing them to always output esm). This was previously fine due to the cjs conversion plugin running for these, however a recent change caused that plugin to no longer run for these files since (which should have been unnecessary, except for that they had the incorrect check).

- Updated dependencies [[`8bf5cb1f0`](https://github.com/marko-js/marko/commit/8bf5cb1f097769c835a452ff4bbea67a6c741810), [`1b29b859f`](https://github.com/marko-js/marko/commit/1b29b859fb0876d9a8d0d7bba44d08f77f1706bb)]:
  - @marko/compiler@5.30.1
  - @marko/translator-default@5.28.1

## 5.28.0

### Minor Changes

- [#1984](https://github.com/marko-js/marko/pull/1984) [`c6e2d0655`](https://github.com/marko-js/marko/commit/c6e2d06554166daa8eefe34121323413cf2d9cb1) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Allow migrator as a tag entry file.

### Patch Changes

- Updated dependencies [[`c6e2d0655`](https://github.com/marko-js/marko/commit/c6e2d06554166daa8eefe34121323413cf2d9cb1)]:
  - @marko/compiler@5.30.0
  - @marko/translator-default@5.28.0

## 5.27.1

### Patch Changes

- [#1982](https://github.com/marko-js/marko/pull/1982) [`d75ce5243`](https://github.com/marko-js/marko/commit/d75ce52432470544611b758f1d97fe255b9747b4) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Fix issue where the `finish` event was not being invoked when rendering a Marko template with a mock writable that was not an event emitter

## 5.27.0

### Minor Changes

- [#1980](https://github.com/marko-js/marko/pull/1980) [`9d3b34eef`](https://github.com/marko-js/marko/commit/9d3b34eefa2d0d9f9b27b9635950360b62be2f1f) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Allow parse errors to be recovered from by migrations. This adds a new ast node type of MarkoParseError.
  MarkoParseError nodes can be removed during the migration stage to handle legacy syntaxes. Any MarkoParseError
  left in the AST at the end of the migration phase will throw an error similar to what it would have previously
  thrown synchronously.

  This also means that all parse errors can be surfaced as an aggregate error instead of bailing on the first
  parse error. When the compiler is ran with `errorRecovery: true` these errors become diagnostics instead of
  being thrown.

### Patch Changes

- [#1980](https://github.com/marko-js/marko/pull/1980) [`20deb5699`](https://github.com/marko-js/marko/commit/20deb5699c7b7393dd7ba4b95cdbb60945a9319f) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Fix issue that could happen if DOMContentLoaded was manually invoked multiple times.

- Updated dependencies [[`9d3b34eef`](https://github.com/marko-js/marko/commit/9d3b34eefa2d0d9f9b27b9635950360b62be2f1f)]:
  - @marko/translator-default@5.27.0
  - @marko/compiler@5.29.0

## 5.26.5

### Patch Changes

- [#1978](https://github.com/marko-js/marko/pull/1978) [`931a5d24b`](https://github.com/marko-js/marko/commit/931a5d24bbf77d7b29922f34d66d8ca7c42cea07) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Avoids loading babel config when compiler output is set to source or migrate.

- Updated dependencies [[`931a5d24b`](https://github.com/marko-js/marko/commit/931a5d24bbf77d7b29922f34d66d8ca7c42cea07)]:
  - @marko/compiler@5.28.5
  - @marko/translator-default@5.26.5

## 5.26.4

### Patch Changes

- [#1976](https://github.com/marko-js/marko/pull/1976) [`7555a46a1`](https://github.com/marko-js/marko/commit/7555a46a19cee973b279fd582ffd51671490dc40) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Fix issue where aggregate errors from the compiler were not exposing error objects (was exposing the raw diagnostics).

- [#1976](https://github.com/marko-js/marko/pull/1976) [`7555a46a1`](https://github.com/marko-js/marko/commit/7555a46a19cee973b279fd582ffd51671490dc40) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Include locations and original message for errors thrown from the compiler.

- Updated dependencies [[`7555a46a1`](https://github.com/marko-js/marko/commit/7555a46a19cee973b279fd582ffd51671490dc40), [`7555a46a1`](https://github.com/marko-js/marko/commit/7555a46a19cee973b279fd582ffd51671490dc40)]:
  - @marko/compiler@5.28.4
  - @marko/translator-default@5.26.4

## 5.26.3

### Patch Changes

- [#1974](https://github.com/marko-js/marko/pull/1974) [`42f7b46e2`](https://github.com/marko-js/marko/commit/42f7b46e25168ef4998e9c3f6014f9b6e1234486) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Run migration fixes synchronously.

- Updated dependencies [[`42f7b46e2`](https://github.com/marko-js/marko/commit/42f7b46e25168ef4998e9c3f6014f9b6e1234486)]:
  - @marko/compiler@5.28.3
  - @marko/translator-default@5.26.3

## 5.26.2

### Patch Changes

- [#1972](https://github.com/marko-js/marko/pull/1972) [`897b8beba`](https://github.com/marko-js/marko/commit/897b8bebadbb08e0457fb959bd573cb2a5a4d593) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Fix issue where error messages without a source location were losing their message

- Updated dependencies [[`897b8beba`](https://github.com/marko-js/marko/commit/897b8bebadbb08e0457fb959bd573cb2a5a4d593)]:
  - @marko/compiler@5.28.2
  - @marko/translator-default@5.26.2

## 5.26.1

### Patch Changes

- [#1970](https://github.com/marko-js/marko/pull/1970) [`ce5c40c95`](https://github.com/marko-js/marko/commit/ce5c40c9570c3410f62a2c9feb635ee7c7e54799) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Fix issue when outputting hydrate code with commonjs modules enabled.

- Updated dependencies [[`ce5c40c95`](https://github.com/marko-js/marko/commit/ce5c40c9570c3410f62a2c9feb635ee7c7e54799)]:
  - @marko/translator-default@5.26.1
  - @marko/compiler@5.28.1

## 5.26.0

### Minor Changes

- [#1968](https://github.com/marko-js/marko/pull/1968) [`70922e68e`](https://github.com/marko-js/marko/commit/70922e68e07578a867fff846e9bb623d64298e14) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Add support for additional diagnostics emitted from the compiler.

### Patch Changes

- Updated dependencies [[`70922e68e`](https://github.com/marko-js/marko/commit/70922e68e07578a867fff846e9bb623d64298e14)]:
  - @marko/translator-default@5.26.0
  - @marko/compiler@5.28.0

## 5.25.18

### Patch Changes

- [`ddc6b6ca0`](https://github.com/marko-js/marko/commit/ddc6b6ca00e3e9e0125d9f2da0953d9cb7883e07) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Fix typescript syntax error in docs.

## 5.25.17

### Patch Changes

- [#1965](https://github.com/marko-js/marko/pull/1965) [`08ea9febc`](https://github.com/marko-js/marko/commit/08ea9febcf1d8652409a23b82f3d2c2d912bbd52) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Fixes support for usage with [arc](https://github.com/eBay/arc) and adaptive `.marko` files.

- Updated dependencies [[`08ea9febc`](https://github.com/marko-js/marko/commit/08ea9febcf1d8652409a23b82f3d2c2d912bbd52)]:
  - @marko/translator-default@5.25.9

## 5.25.16

### Patch Changes

- [#1963](https://github.com/marko-js/marko/pull/1963) [`a00c63f5f`](https://github.com/marko-js/marko/commit/a00c63f5f0995647450ba0fe1eeca25050dfbf03) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Ensure all component lifecycle methods invoked when HMR'ing a class component with lifecycle changes.

- [#1963](https://github.com/marko-js/marko/pull/1963) [`a00c63f5f`](https://github.com/marko-js/marko/commit/a00c63f5f0995647450ba0fe1eeca25050dfbf03) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Avoid removing SSR transcluded content while doing updating via HMR.

## 5.25.15

### Patch Changes

- [#1960](https://github.com/marko-js/marko/pull/1960) [`9cf477857`](https://github.com/marko-js/marko/commit/9cf477857dee2ab58ada5daef7eb117ccf92726e) Thanks [@LuLaValva](https://github.com/LuLaValva)! - Native event handler strings

## 5.25.14

### Patch Changes

- [#1953](https://github.com/marko-js/marko/pull/1953) [`2b88703d5`](https://github.com/marko-js/marko/commit/2b88703d5f92528d97ec7285739267242a8f2815) Thanks [@LuLaValva](https://github.com/LuLaValva)! - Accuracy of types for Marko.Input<"input"> has been improved

## 5.25.13

### Patch Changes

- [`946f596c2`](https://github.com/marko-js/marko/commit/946f596c2de04b1742ba83c32d0e72575b276632) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Reduce restrictions on Marko.Component type. Add Marko.Template overload type for callback function passed to render.

## 5.25.12

### Patch Changes

- [#1949](https://github.com/marko-js/marko/pull/1949) [`7f6b65a4b`](https://github.com/marko-js/marko/commit/7f6b65a4b6d34dad6b4f6961be3b8766b7146e63) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Use @internal module to host browser/worker remapped files. Improves support for some tools that don't work well with nested package.json files.

- Updated dependencies [[`7f6b65a4b`](https://github.com/marko-js/marko/commit/7f6b65a4b6d34dad6b4f6961be3b8766b7146e63)]:
  - @marko/translator-default@5.25.8
  - @marko/compiler@5.27.8

## 5.25.11

### Patch Changes

- [#1947](https://github.com/marko-js/marko/pull/1947) [`7264e6ce6`](https://github.com/marko-js/marko/commit/7264e6ce6361c55ca73a25b9c2d2a36d4e48ee38) Thanks [@LuLaValva](https://github.com/LuLaValva)! - Improve TS native tag event handler types
  - add onToggle
  - add onFormData
  - move onSubmit into form

## 5.25.10

### Patch Changes

- [#1945](https://github.com/marko-js/marko/pull/1945) [`ce2ab4763`](https://github.com/marko-js/marko/commit/ce2ab47637a63cccc7adde2ea0adb2b59e38f258) Thanks [@LuLaValva](https://github.com/LuLaValva)! - fix(typescript): add no-update-body and no-update-body-if

## 5.25.9

### Patch Changes

- [#1940](https://github.com/marko-js/marko/pull/1940) [`b31487946`](https://github.com/marko-js/marko/commit/b314879466046d0f06e22c30f93a306de189c72a) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Add back NativeTagInput and NativeTagReturn types as deprecated.

## 5.25.8

### Patch Changes

- [#1938](https://github.com/marko-js/marko/pull/1938) [`d8a922085`](https://github.com/marko-js/marko/commit/d8a922085ec068b0791211b05e749f3a9695d478) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Improve typing for some <input> fields.

## 5.25.7

### Patch Changes

- [#1936](https://github.com/marko-js/marko/pull/1936) [`f99e6deff`](https://github.com/marko-js/marko/commit/f99e6deff2e68b0aea8ab7918e6a6c3a509f311a) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Fix regression with the HTML <input> tag types.

- [#1936](https://github.com/marko-js/marko/pull/1936) [`f216ca254`](https://github.com/marko-js/marko/commit/f216ca25401e10c9878d37c38d371c6f706f3a25) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Add the ability to extend the list of valid css property names when setting a style attrbitue with an object (useful for custom properties).

## 5.25.6

### Patch Changes

- [#1934](https://github.com/marko-js/marko/pull/1934) [`722467a6c`](https://github.com/marko-js/marko/commit/722467a6cf72cf024fbc5a1fa802060de9f2dec3) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Make the Input type less strict to avoid issues with extending it in a custom tag.

- [#1934](https://github.com/marko-js/marko/pull/1934) [`04d6fad6d`](https://github.com/marko-js/marko/commit/04d6fad6d599adc98d6f0ef00a5c44b4a4fc7485) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Fix issue where types were not being stripped from the inline Marko component class.

- [#1934](https://github.com/marko-js/marko/pull/1934) [`c492349a8`](https://github.com/marko-js/marko/commit/c492349a840c4d9cb9693258eac8d96663b29989) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Fix style attribute types.

- [#1934](https://github.com/marko-js/marko/pull/1934) [`4523d7ce1`](https://github.com/marko-js/marko/commit/4523d7ce1baedc259b0d1c0de338b280509c8bd4) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Allow Marko.HTMLAttributes interface to be used without specifying a generic.

- [#1934](https://github.com/marko-js/marko/pull/1934) [`a5fbf6cb3`](https://github.com/marko-js/marko/commit/a5fbf6cb3bde86cb37c66d19625fbe7a994b9ab4) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Expose types for the Marko attribute directives.

- Updated dependencies [[`04d6fad6d`](https://github.com/marko-js/marko/commit/04d6fad6d599adc98d6f0ef00a5c44b4a4fc7485)]:
  - @marko/compiler@5.27.7
  - @marko/translator-default@5.25.7

## 5.25.5

### Patch Changes

- [#1929](https://github.com/marko-js/marko/pull/1929) [`c7a197a5c`](https://github.com/marko-js/marko/commit/c7a197a5c2e49e4b365d185d6e24ab431a61abc9) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Adds strict typescript types for the native HTML tags.

- Updated dependencies [[`c7a197a5c`](https://github.com/marko-js/marko/commit/c7a197a5c2e49e4b365d185d6e24ab431a61abc9)]:
  - @marko/compiler@5.27.6
  - @marko/translator-default@5.25.6

## 5.25.4

### Patch Changes

- [#1923](https://github.com/marko-js/marko/pull/1923) [`62afb3256`](https://github.com/marko-js/marko/commit/62afb3256a0c402e75b90f06af4e8cdc5c8112f3) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Remove class lifecycle types to avoid the need to `override` them.

- Updated dependencies [[`62afb3256`](https://github.com/marko-js/marko/commit/62afb3256a0c402e75b90f06af4e8cdc5c8112f3)]:
  - @marko/compiler@5.27.4
  - @marko/translator-default@5.25.4

## 5.25.3

### Patch Changes

- [#1921](https://github.com/marko-js/marko/pull/1921) [`1fe71a502`](https://github.com/marko-js/marko/commit/1fe71a5020c5930c63e9c7ff226a3befca0e58a4) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Avoid using `typeof window` and prefer `typeof document` checks for browser environment (improves future deno support).

- [#1921](https://github.com/marko-js/marko/pull/1921) [`f0c697d7b`](https://github.com/marko-js/marko/commit/f0c697d7b5b0afcbe524f390db2b3c5fa54d5607) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Avoids using a package.json remap for the browser implementation of the \_preserve internal tag (used to implement `no-update` directives). This fixes an issue where in vite the module could not be loaded properly.

- Updated dependencies [[`1fe71a502`](https://github.com/marko-js/marko/commit/1fe71a5020c5930c63e9c7ff226a3befca0e58a4), [`f0c697d7b`](https://github.com/marko-js/marko/commit/f0c697d7b5b0afcbe524f390db2b3c5fa54d5607)]:
  - @marko/compiler@5.27.3
  - @marko/translator-default@5.25.3

## 5.25.2

### Patch Changes

- [#1920](https://github.com/marko-js/marko/pull/1920) [`7d5dab41c`](https://github.com/marko-js/marko/commit/7d5dab41c33cacbdff376570df09f65eb228a6a9) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Avoid adding `export {}` (from "@babel/plugin-transform-typescript") when outputing a template with the types stripped.

- [#1918](https://github.com/marko-js/marko/pull/1918) [`cceab7d20`](https://github.com/marko-js/marko/commit/cceab7d2061c627d5f3ea296f0acba80f97ad494) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Reduce script parsing restrictions added by Babel.
  This was causing Babel to error when parsing partial scripts.

  ```marko
  static const x = 1;
  export { x };
  ```

  Before this change in the above code Babel would error when parsing `export { x }` saying `x` was not previously defined. This is because Marko parses these statements in isolation.

- [#1920](https://github.com/marko-js/marko/pull/1920) [`7d5dab41c`](https://github.com/marko-js/marko/commit/7d5dab41c33cacbdff376570df09f65eb228a6a9) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Avoid outputing a `declare`'d type on a `class`.

- Updated dependencies [[`7d5dab41c`](https://github.com/marko-js/marko/commit/7d5dab41c33cacbdff376570df09f65eb228a6a9), [`cceab7d20`](https://github.com/marko-js/marko/commit/cceab7d2061c627d5f3ea296f0acba80f97ad494), [`7d5dab41c`](https://github.com/marko-js/marko/commit/7d5dab41c33cacbdff376570df09f65eb228a6a9)]:
  - @marko/compiler@5.27.2
  - @marko/translator-default@5.25.2

## 5.25.1

### Patch Changes

- [#1916](https://github.com/marko-js/marko/pull/1916) [`ac1d5062a`](https://github.com/marko-js/marko/commit/ac1d5062a7be8bb359ba8d378d3c7b2ec6dc14f6) Thanks [@mlrawlings](https://github.com/mlrawlings)! - fix: modify/remove some inefficient regexes

- Updated dependencies [[`ac1d5062a`](https://github.com/marko-js/marko/commit/ac1d5062a7be8bb359ba8d378d3c7b2ec6dc14f6)]:
  - @marko/compiler@5.27.1
  - @marko/translator-default@5.25.1

## 5.25.0

### Minor Changes

- [#1909](https://github.com/marko-js/marko/pull/1909) [`e8f1370cf`](https://github.com/marko-js/marko/commit/e8f1370cf668bb579e48fd05a60c086bed6bb466) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Allow repeated attribute tags without using a `marko.json` file. Attribute tag objects now also contain `Symbol.iterator` implementation to make the single case more easily forwarded to the `<for>` tag.

### Patch Changes

- [#1914](https://github.com/marko-js/marko/pull/1914) [`22228e804`](https://github.com/marko-js/marko/commit/22228e804c76d630c0fc333fa4750bb6e42c0814) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Upgrades the included version of HTMLJS-Parser

- [#1910](https://github.com/marko-js/marko/pull/1910) [`8512cf397`](https://github.com/marko-js/marko/commit/8512cf3976ebf67dcd19ba4485b5e38979061520) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Removes circular dependencies from the Marko runtime.

- [#1913](https://github.com/marko-js/marko/pull/1913) [`2d3155e7b`](https://github.com/marko-js/marko/commit/2d3155e7b71b3d6291384666fccaa31bcf09ad06) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Avoid using eval (in dev mode) for providing a better class name on component constructors.

- Updated dependencies [[`22228e804`](https://github.com/marko-js/marko/commit/22228e804c76d630c0fc333fa4750bb6e42c0814), [`8512cf397`](https://github.com/marko-js/marko/commit/8512cf3976ebf67dcd19ba4485b5e38979061520), [`e8f1370cf`](https://github.com/marko-js/marko/commit/e8f1370cf668bb579e48fd05a60c086bed6bb466)]:
  - @marko/compiler@5.27.0
  - @marko/translator-default@5.25.0

## 5.24.0

### Minor Changes

- [#1907](https://github.com/marko-js/marko/pull/1907) [`7211a6937`](https://github.com/marko-js/marko/commit/7211a6937b2044a14f2c2194269a697c76066b54) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Expose `$global` as a shorthand for `out.global` within the template scope.

### Patch Changes

- Updated dependencies [[`7211a6937`](https://github.com/marko-js/marko/commit/7211a6937b2044a14f2c2194269a697c76066b54)]:
  - @marko/translator-default@5.24.0
  - @marko/compiler@5.26.0

## 5.23.0

### Minor Changes

- [#1899](https://github.com/marko-js/marko/pull/1899) [`4fc38e800`](https://github.com/marko-js/marko/commit/4fc38e80010241da76d24a46c2cd838aa5cf309f) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Expose the ability to intercept errors from the taglib builder.

### Patch Changes

- Updated dependencies [[`4fc38e800`](https://github.com/marko-js/marko/commit/4fc38e80010241da76d24a46c2cd838aa5cf309f)]:
  - @marko/compiler@5.25.0
  - @marko/translator-default@5.23.0

## 5.22.9

### Patch Changes

- [#1895](https://github.com/marko-js/marko/pull/1895) [`230523adf`](https://github.com/marko-js/marko/commit/230523adf139591846c8c29737e89bb8b4a818b1) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Fix issue where Marko.Component global was potentially not registered before the component file was loaded.

## 5.22.8

### Patch Changes

- [`268d0c32e`](https://github.com/marko-js/marko/commit/268d0c32eb3e9f8a0f3a5a49730d1afdf0b7ab91) Thanks [@mlrawlings](https://github.com/mlrawlings)! - Add docs for using TypeScript with Marko

## 5.22.7

### Patch Changes

- [#1892](https://github.com/marko-js/marko/pull/1892) [`c55ae937c`](https://github.com/marko-js/marko/commit/c55ae937c4d756482d49a6b8797669cd39ca6288) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Improve types for the await tag and Marko.Template.

- Updated dependencies [[`c55ae937c`](https://github.com/marko-js/marko/commit/c55ae937c4d756482d49a6b8797669cd39ca6288)]:
  - @marko/translator-default@5.22.6
  - @marko/compiler@5.23.6

## 5.22.6

### Patch Changes

- [#1890](https://github.com/marko-js/marko/pull/1890) [`768fa17cb`](https://github.com/marko-js/marko/commit/768fa17cb67e4643bafbf5a91679af1f17f5f4fd) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - No longer require state to be present when writing types for component files.

## 5.22.5

### Patch Changes

- [#1888](https://github.com/marko-js/marko/pull/1888) [`d110b0b5f`](https://github.com/marko-js/marko/commit/d110b0b5f6607a911d15b2045d46b9aa6ecba2d2) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Improve type definitions.

- Updated dependencies [[`d110b0b5f`](https://github.com/marko-js/marko/commit/d110b0b5f6607a911d15b2045d46b9aa6ecba2d2)]:
  - @marko/compiler@5.23.5
  - @marko/translator-default@5.22.5

## 5.22.4

### Patch Changes

- [`23e36a04b`](https://github.com/marko-js/marko/commit/23e36a04b0c6f7d6b53307d7838f61a1e0f2ce29) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Add missing type definition file to exposed types in package.json.

- [`d920e833d`](https://github.com/marko-js/marko/commit/d920e833df0b58456f28f7cb45ebd38b56c05ba7) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Add missing type definition for taglib.

- Updated dependencies [[`23e36a04b`](https://github.com/marko-js/marko/commit/23e36a04b0c6f7d6b53307d7838f61a1e0f2ce29), [`d920e833d`](https://github.com/marko-js/marko/commit/d920e833df0b58456f28f7cb45ebd38b56c05ba7)]:
  - @marko/compiler@5.23.4
  - @marko/translator-default@5.22.4

## 5.22.3

### Patch Changes

- [#1885](https://github.com/marko-js/marko/pull/1885) [`f1efd707a`](https://github.com/marko-js/marko/commit/f1efd707aa1c2aeac092ef7fff4ef5cb959f45b6) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Add taglib extensions and type definitions for typescript support.

- Updated dependencies [[`f1efd707a`](https://github.com/marko-js/marko/commit/f1efd707aa1c2aeac092ef7fff4ef5cb959f45b6)]:
  - @marko/translator-default@5.22.3
  - @marko/compiler@5.23.3

## 5.22.2

### Patch Changes

- [#1880](https://github.com/marko-js/marko/pull/1880) [`c4cce33e8`](https://github.com/marko-js/marko/commit/c4cce33e8c917af7c45ffc64d748e88364a0b91a) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Fix an issue where merging scripts (via the out.script api) was not properly inserting delimeters when scripts are added in different async writers.

- Updated dependencies [[`c4cce33e8`](https://github.com/marko-js/marko/commit/c4cce33e8c917af7c45ffc64d748e88364a0b91a)]:
  - @marko/compiler@5.23.2
  - @marko/translator-default@5.22.2

## 5.22.1

### Patch Changes

- [#1875](https://github.com/marko-js/marko/pull/1875) [`b744720db`](https://github.com/marko-js/marko/commit/b744720db5483633643c5a75bd2eedc37aa9ff25) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Upgrades "magic-string" module (used for css sourcemaps) to avoid deprecation warning.

- Updated dependencies [[`b744720db`](https://github.com/marko-js/marko/commit/b744720db5483633643c5a75bd2eedc37aa9ff25)]:
  - @marko/translator-default@5.22.1
  - @marko/compiler@5.23.1

## 5.22.0

### Minor Changes

- [#1865](https://github.com/marko-js/marko/pull/1865) [`797e90489`](https://github.com/marko-js/marko/commit/797e90489359e1e87a9756da5082c1e085555546) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Changes the "default" attributes name to be "value". This is technically a breaking change, but it primarily only impacts the tags-api-preview which will also be getting a release to support this change.

### Patch Changes

- Updated dependencies [[`797e90489`](https://github.com/marko-js/marko/commit/797e90489359e1e87a9756da5082c1e085555546)]:
  - @marko/compiler@5.23.0
  - @marko/translator-default@5.22.0

## 5.21.11

### Patch Changes

- [#1862](https://github.com/marko-js/marko/pull/1862) [`30e0ea43d`](https://github.com/marko-js/marko/commit/30e0ea43d56e0a3c59748eae32a0ab85921c1aeb) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Avoid mutating component instance in HMR mode. (Improves support in tags api preview)

- Updated dependencies [[`30e0ea43d`](https://github.com/marko-js/marko/commit/30e0ea43d56e0a3c59748eae32a0ab85921c1aeb)]:
  - @marko/compiler@5.22.10
  - @marko/translator-default@5.21.8

## 5.21.10

### Patch Changes

- [#1860](https://github.com/marko-js/marko/pull/1860) [`e64809458`](https://github.com/marko-js/marko/commit/e648094582c6a5c10d567bb7c844b50b6541e355) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Improve tag scanning performance.

* [#1860](https://github.com/marko-js/marko/pull/1860) [`e64809458`](https://github.com/marko-js/marko/commit/e648094582c6a5c10d567bb7c844b50b6541e355) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Update htmljs-parser version.

* Updated dependencies [[`e64809458`](https://github.com/marko-js/marko/commit/e648094582c6a5c10d567bb7c844b50b6541e355), [`e64809458`](https://github.com/marko-js/marko/commit/e648094582c6a5c10d567bb7c844b50b6541e355)]:
  - @marko/compiler@5.22.9
  - @marko/translator-default@5.21.7

## 5.21.9

### Patch Changes

- [#1845](https://github.com/marko-js/marko/pull/1845) [`65bab8e6d`](https://github.com/marko-js/marko/commit/65bab8e6df02e6fd485a45d9a9c2200545f21479) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Fix issue where Marko runtime was being incorrectly matched when swapping from dev to prod runtimes.

- Updated dependencies [[`65bab8e6d`](https://github.com/marko-js/marko/commit/65bab8e6df02e6fd485a45d9a9c2200545f21479)]:
  - @marko/compiler@5.22.6
  - @marko/translator-default@5.21.5

## 5.21.8

### Patch Changes

- [#1843](https://github.com/marko-js/marko/pull/1843) [`963f08ce9`](https://github.com/marko-js/marko/commit/963f08ce92e56f1d210068bedd5fc033b6db71c0) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Upgrade htmljs-parser.

- Updated dependencies [[`963f08ce9`](https://github.com/marko-js/marko/commit/963f08ce92e56f1d210068bedd5fc033b6db71c0)]:
  - @marko/compiler@5.22.5

## 5.21.7

### Patch Changes

- [#1841](https://github.com/marko-js/marko/pull/1841) [`26cd305ea`](https://github.com/marko-js/marko/commit/26cd305ea4391fb4846c07d5ba4984cc152584e7) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Upgrade htmljs-parser.

- Updated dependencies [[`26cd305ea`](https://github.com/marko-js/marko/commit/26cd305ea4391fb4846c07d5ba4984cc152584e7)]:
  - @marko/compiler@5.22.4

## 5.21.6

### Patch Changes

- [#1839](https://github.com/marko-js/marko/pull/1839) [`1df553e45`](https://github.com/marko-js/marko/commit/1df553e45829c7e0d754c5fec2c7d65e74c89457) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Upgrade HTMLJS-Parser.

- Updated dependencies [[`1df553e45`](https://github.com/marko-js/marko/commit/1df553e45829c7e0d754c5fec2c7d65e74c89457)]:
  - @marko/compiler@5.22.3

## 5.21.5

### Patch Changes

- [#1836](https://github.com/marko-js/marko/pull/1836) [`ec57ebde5`](https://github.com/marko-js/marko/commit/ec57ebde52f5da16524f5275f923eedc8c0ab19a) Thanks [@vwong](https://github.com/vwong)! - Avoid inline styles when using tight Content Security Policy

* [#1837](https://github.com/marko-js/marko/pull/1837) [`63161abed`](https://github.com/marko-js/marko/commit/63161abed5fa071e88d06646bf0f55f0c6852b54) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Fix issue with source map position for shorthand attribute methods.

* Updated dependencies [[`63161abed`](https://github.com/marko-js/marko/commit/63161abed5fa071e88d06646bf0f55f0c6852b54)]:
  - @marko/compiler@5.22.2

## 5.21.4

### Patch Changes

- [#1832](https://github.com/marko-js/marko/pull/1832) [`20dd7b088`](https://github.com/marko-js/marko/commit/20dd7b08800d49fe99badd4faa540bcfefa7b681) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Update markoc cli to allow striping types.

## 5.21.3

### Patch Changes

- [#1824](https://github.com/marko-js/marko/pull/1824) [`2f6459d2c`](https://github.com/marko-js/marko/commit/2f6459d2c421ac82c4627c90f1c50cb229a99d33) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Fix issue where shorthand attribute methods could not have a "return" statement.

- Updated dependencies [[`2f6459d2c`](https://github.com/marko-js/marko/commit/2f6459d2c421ac82c4627c90f1c50cb229a99d33)]:
  - @marko/compiler@5.21.7
  - @marko/translator-default@5.21.3

## 5.21.2

### Patch Changes

- [#1804](https://github.com/marko-js/marko/pull/1804) [`af8c944a3`](https://github.com/marko-js/marko/commit/af8c944a38d19529e71fb0ecd312ca7ef358e554) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Fix issue when internal <**flush_here_and_after**> tag (used by bundler plugins) is used in sync mode.

## 5.21.1

### Patch Changes

- [#1792](https://github.com/marko-js/marko/pull/1792) [`c9107ea7f`](https://github.com/marko-js/marko/commit/c9107ea7f6fc69df10700114fe35b7b494414194) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Fix broken previous release where the "main" field for package.json files was not correctly updated when published

- Updated dependencies [[`c9107ea7f`](https://github.com/marko-js/marko/commit/c9107ea7f6fc69df10700114fe35b7b494414194)]:
  - @marko/compiler@5.21.1
  - @marko/translator-default@5.21.1

## 5.21.0

### Minor Changes

- [#1787](https://github.com/marko-js/marko/pull/1787) [`dd9009d66`](https://github.com/marko-js/marko/commit/dd9009d665f4f660d106aa0c3364e34ca3561abc) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Upgrades the compiler to use the latest major release of `htmljs-parser` bringing in the improvements listed here:
  https://github.com/marko-js/htmljs-parser/pull/93

### Patch Changes

- Updated dependencies [[`dd9009d66`](https://github.com/marko-js/marko/commit/dd9009d665f4f660d106aa0c3364e34ca3561abc)]:
  - @marko/compiler@5.21.0
  - @marko/translator-default@5.21.0

## [5.20.9](https://github.com/marko-js/marko/compare/v5.20.8...v5.20.9) (2022-04-27)

### Bug Fixes

- some environments (deno) provide a window but not a document ([e523252](https://github.com/marko-js/marko/commit/e52325234b9f3e7d430b4191f87486df7b13c497))

## [5.20.8](https://github.com/marko-js/marko/compare/v5.20.7...v5.20.8) (2022-04-26)

**Note:** Version bump only for package marko

## [5.20.7](https://github.com/marko-js/marko/compare/v5.20.6...v5.20.7) (2022-04-26)

**Note:** Version bump only for package marko

## [5.20.6](https://github.com/marko-js/marko/compare/v5.20.5...v5.20.6) (2022-04-25)

**Note:** Version bump only for package marko

## [5.20.5](https://github.com/marko-js/marko/compare/v5.20.4...v5.20.5) (2022-04-15)

**Note:** Version bump only for package marko

## [5.20.4](https://github.com/marko-js/marko/compare/v5.20.3...v5.20.4) (2022-04-11)

**Note:** Version bump only for package marko

## [5.20.3](https://github.com/marko-js/marko/compare/v5.20.2...v5.20.3) (2022-03-24)

**Note:** Version bump only for package marko

## [5.20.1](https://github.com/marko-js/marko/compare/v5.20.0...v5.20.1) (2022-03-22)

### Bug Fixes

- prevent bubbling non bubbling events ([#1781](https://github.com/marko-js/marko/issues/1781)) ([7c4de65](https://github.com/marko-js/marko/commit/7c4de6549532f39b8cd4ad70691dfa4e9efe9cd7))

## [5.19.3](https://github.com/marko-js/marko/compare/v5.19.2...v5.19.3) (2022-03-08)

### Bug Fixes

- performance hit in development mode because continually parsing stack trace ([#1777](https://github.com/marko-js/marko/issues/1777)) ([cb99f92](https://github.com/marko-js/marko/commit/cb99f921660f206ef6e14f7c9ab5757be6375ab0))

## [5.19.2](https://github.com/marko-js/marko/compare/v5.19.1...v5.19.2) (2022-03-08)

### Bug Fixes

- avoid deprecation warning for markoc cli ([800861b](https://github.com/marko-js/marko/commit/800861b88ec097a8e7b89fcedb3c4d3a59542ec0))

# [5.19.0](https://github.com/marko-js/marko/compare/v5.18.2...v5.19.0) (2022-01-28)

### Features

- support analyze field in marko.json ([#1769](https://github.com/marko-js/marko/issues/1769)) ([981f7f3](https://github.com/marko-js/marko/commit/981f7f39f932533178c538f8fc2788ea6f93d909))

## [5.18.2](https://github.com/marko-js/marko/compare/v5.18.1...v5.18.2) (2022-01-25)

### Bug Fixes

- update invalid docs link ([3e67bfe](https://github.com/marko-js/marko/commit/3e67bfe1e52da5ae077613a804ea5ef6b4c3d8f4))

## [5.18.1](https://github.com/marko-js/marko/compare/v5.18.0...v5.18.1) (2022-01-25)

**Note:** Version bump only for package marko

# [5.18.0](https://github.com/marko-js/marko/compare/v5.17.10...v5.18.0) (2022-01-24)

### Features

- add shorthand for dynamic tag names from identifier ([#1766](https://github.com/marko-js/marko/issues/1766)) ([94e4fd8](https://github.com/marko-js/marko/commit/94e4fd818bffaf798298317e6813d369a3c7f413))

## [5.17.10](https://github.com/marko-js/marko/compare/v5.17.9...v5.17.10) (2022-01-14)

**Note:** Version bump only for package marko

## [5.17.9](https://github.com/marko-js/marko/compare/v5.17.8...v5.17.9) (2022-01-07)

### Bug Fixes

- improve error handling in web workers ([8611e42](https://github.com/marko-js/marko/commit/8611e42fc90c5f9ec3f39e9da5e040a531f72052))

## [5.17.8](https://github.com/marko-js/marko/compare/v5.17.7...v5.17.8) (2022-01-06)

### Bug Fixes

- setTimeout issue in webworkers ([d838e4d](https://github.com/marko-js/marko/commit/d838e4d3974ec2ad7df7fddf0fc0d8096853b3e8))

## [5.17.7](https://github.com/marko-js/marko/compare/v5.17.6...v5.17.7) (2022-01-06)

### Bug Fixes

- improve cloudflare (workers) support ([185d71b](https://github.com/marko-js/marko/commit/185d71b08282ded4d178e0f6ada6f6d21e9b4b31))

## [5.17.6](https://github.com/marko-js/marko/compare/v5.17.5...v5.17.6) (2022-01-02)

### Bug Fixes

- use full file extension for compiler imports ([#1762](https://github.com/marko-js/marko/issues/1762)) ([041011a](https://github.com/marko-js/marko/commit/041011afceb581a64169c4ee370b31448a81c0e7))

## [5.17.5](https://github.com/marko-js/marko/compare/v5.17.4...v5.17.5) (2021-11-24)

**Note:** Version bump only for package marko

## [5.17.4](https://github.com/marko-js/marko/compare/v5.17.3...v5.17.4) (2021-11-17)

**Note:** Version bump only for package marko

## [5.17.3](https://github.com/marko-js/marko/compare/v5.17.2...v5.17.3) (2021-10-30)

**Note:** Version bump only for package marko

## [5.17.2](https://github.com/marko-js/marko/compare/v5.17.1...v5.17.2) (2021-10-26)

### Bug Fixes

- ensure host element always a document or shadow root ([#1751](https://github.com/marko-js/marko/issues/1751)) ([d719724](https://github.com/marko-js/marko/commit/d719724c9b3ee4ea904ad0d583925ac8205007fb))

## [5.17.1](https://github.com/marko-js/marko/compare/v5.17.0...v5.17.1) (2021-10-25)

### Bug Fixes

- prefer delegating events from document.body ([f51ac21](https://github.com/marko-js/marko/commit/f51ac21a1116aacc97bd9a8b3009da368ce81f61))

# [5.17.0](https://github.com/marko-js/marko/compare/v5.16.1...v5.17.0) (2021-10-25)

### Features

- improve shadow root support ([#1749](https://github.com/marko-js/marko/issues/1749)) ([955ea00](https://github.com/marko-js/marko/commit/955ea006b89ee303d25f415d88962cd3b6f020f8))

## [5.16.1](https://github.com/marko-js/marko/compare/v5.16.0...v5.16.1) (2021-10-22)

### Bug Fixes

- regression with identical tag name & taglib deduping ([a8d85d7](https://github.com/marko-js/marko/commit/a8d85d7771378d0e995c988cabe4b511ab95dc3d))

# [5.16.0](https://github.com/marko-js/marko/compare/v5.15.12...v5.16.0) (2021-10-11)

**Note:** Version bump only for package marko

## [5.15.12](https://github.com/marko-js/marko/compare/v5.15.11...v5.15.12) (2021-10-04)

### Bug Fixes

- issue with hydrating adjacent text nodes ([#1746](https://github.com/marko-js/marko/issues/1746)) ([4b8057a](https://github.com/marko-js/marko/commit/4b8057a027de16e3f6c040ef446e69f07d86bdc3))

## [5.15.11](https://github.com/marko-js/marko/compare/v5.15.10...v5.15.11) (2021-09-29)

### Bug Fixes

- normalize file opts similar to babel ([86310e6](https://github.com/marko-js/marko/commit/86310e603985ed96cba523fb07e25a0852cff8e6))

## [5.15.10](https://github.com/marko-js/marko/compare/v5.15.9...v5.15.10) (2021-09-07)

**Note:** Version bump only for package marko

## [5.15.9](https://github.com/marko-js/marko/compare/v5.15.8...v5.15.9) (2021-09-05)

**Note:** Version bump only for package marko

## [5.15.8](https://github.com/marko-js/marko/compare/v5.15.7...v5.15.8) (2021-09-05)

**Note:** Version bump only for package marko

## [5.15.7](https://github.com/marko-js/marko/compare/v5.15.6...v5.15.7) (2021-09-03)

**Note:** Version bump only for package marko

## [5.15.6](https://github.com/marko-js/marko/compare/v5.15.5...v5.15.6) (2021-09-03)

**Note:** Version bump only for package marko

## [5.15.5](https://github.com/marko-js/marko/compare/v5.15.4...v5.15.5) (2021-08-26)

**Note:** Version bump only for package marko

## [5.15.4](https://github.com/marko-js/marko/compare/v5.15.3...v5.15.4) (2021-08-07)

**Note:** Version bump only for package marko

## [5.15.2](https://github.com/marko-js/marko/compare/v5.15.1...v5.15.2) (2021-08-06)

**Note:** Version bump only for package marko

## [5.15.1](https://github.com/marko-js/marko/compare/v5.15.0...v5.15.1) (2021-07-30)

### Bug Fixes

- **marko:** issue with HMR enabled using split components ([ab8706c](https://github.com/marko-js/marko/commit/ab8706c56cb1e1eef180207dcb510e9c85076501))

# [5.15.0](https://github.com/marko-js/marko/compare/v5.14.2...v5.15.0) (2021-07-28)

### Features

- expose @marko/compiler/register api ([5726899](https://github.com/marko-js/marko/commit/572689909618939585e93c1a0d1ab101ff73aefd))

## [5.14.2](https://github.com/marko-js/marko/compare/v5.14.1...v5.14.2) (2021-07-28)

**Note:** Version bump only for package marko

## [5.14.1](https://github.com/marko-js/marko/compare/v5.14.0...v5.14.1) (2021-07-26)

**Note:** Version bump only for package marko

# [5.14.0](https://github.com/marko-js/marko/compare/v5.13.0...v5.14.0) (2021-07-24)

**Note:** Version bump only for package marko

# [5.13.0](https://github.com/marko-js/marko/compare/v5.12.1...v5.13.0) (2021-07-23)

**Note:** Version bump only for package marko

## [5.12.1](https://github.com/marko-js/marko/compare/v5.12.0...v5.12.1) (2021-07-21)

**Note:** Version bump only for package marko

# [5.12.0](https://github.com/marko-js/marko/compare/v5.11.3...v5.12.0) (2021-07-12)

**Note:** Version bump only for package marko

## [5.11.3](https://github.com/marko-js/marko/compare/v5.11.2...v5.11.3) (2021-07-08)

### Bug Fixes

- allow key attribute to pass through for attribute tags ([ab52ae4](https://github.com/marko-js/marko/commit/ab52ae4c41fd94f27b397507423b3da4343bd9a5))

## [5.11.2](https://github.com/marko-js/marko/compare/v5.11.1...v5.11.2) (2021-07-07)

**Note:** Version bump only for package marko

## [5.11.1](https://github.com/marko-js/marko/compare/v5.11.0...v5.11.1) (2021-07-07)

**Note:** Version bump only for package marko

# [5.11.0](https://github.com/marko-js/marko/compare/v5.10.7...v5.11.0) (2021-07-07)

**Note:** Version bump only for package marko

## [5.10.7](https://github.com/marko-js/marko/compare/v5.10.6...v5.10.7) (2021-06-23)

**Note:** Version bump only for package marko

## [5.10.6](https://github.com/marko-js/marko/compare/v5.10.5...v5.10.6) (2021-06-10)

### Bug Fixes

- **translator-default:** issue with user defined component var ([a36cfd1](https://github.com/marko-js/marko/commit/a36cfd1bbbc213ea7889b5f59aec61e94cc5598c))

## [5.10.5](https://github.com/marko-js/marko/compare/v5.10.4...v5.10.5) (2021-06-08)

### Bug Fixes

- **marko:** issue with dynamic tag name string and no renderbody ([69e8514](https://github.com/marko-js/marko/commit/69e8514e33d68705ccf76de8ec82efebfd31b1bc))

## [5.10.4](https://github.com/marko-js/marko/compare/v5.10.3...v5.10.4) (2021-05-19)

### Bug Fixes

- **marko:** issue when last mode stream ends too early ([318044f](https://github.com/marko-js/marko/commit/318044fce27cdaffe344fb0ea075a9451cb7abd9))

## [5.10.3](https://github.com/marko-js/marko/compare/v5.10.2...v5.10.3) (2021-05-14)

### Bug Fixes

- false values are removed from style string. closes [#1692](https://github.com/marko-js/marko/issues/1692) ([#1693](https://github.com/marko-js/marko/issues/1693)) ([ac140d4](https://github.com/marko-js/marko/commit/ac140d4628836f6371982e3a7f4099fa31d89ec4))

## [5.10.2](https://github.com/marko-js/marko/compare/v5.10.1...v5.10.2) (2021-05-04)

**Note:** Version bump only for package marko

## [5.10.1](https://github.com/marko-js/marko/compare/v5.10.0...v5.10.1) (2021-05-04)

**Note:** Version bump only for package marko

# [5.10.0](https://github.com/marko-js/marko/compare/v5.9.0...v5.10.0) (2021-04-30)

### Features

- **marko:** leverage new runtime api for node-require hook ([67fb144](https://github.com/marko-js/marko/commit/67fb144c5c1c662b6fd89b1d52c420988f36365a))
- add new HMR runtime ([a873762](https://github.com/marko-js/marko/commit/a87376299952c8f9fc5c3d467c571acc0956bfb3))

# [5.9.0](https://github.com/marko-js/marko/compare/v5.8.4...v5.9.0) (2021-04-21)

**Note:** Version bump only for package marko

## [5.8.4](https://github.com/marko-js/marko/compare/v5.8.3...v5.8.4) (2021-04-19)

**Note:** Version bump only for package marko

## [5.8.3](https://github.com/marko-js/marko/compare/v5.8.2...v5.8.3) (2021-04-18)

**Note:** Version bump only for package marko

## [5.8.2](https://github.com/marko-js/marko/compare/v5.8.1...v5.8.2) (2021-04-18)

**Note:** Version bump only for package marko

## [5.8.1](https://github.com/marko-js/marko/compare/v5.8.0...v5.8.1) (2021-04-16)

**Note:** Version bump only for package marko

# [5.8.0](https://github.com/marko-js/marko/compare/v5.7.0...v5.8.0) (2021-04-16)

### Features

- add new hydrateIncludeImports option ([#1686](https://github.com/marko-js/marko/issues/1686)) ([db84f91](https://github.com/marko-js/marko/commit/db84f913b47e4372c84c09a34ca8529b646b7869))

# [5.7.0](https://github.com/marko-js/marko/compare/v5.6.2...v5.7.0) (2021-04-07)

**Note:** Version bump only for package marko

## [5.6.2](https://github.com/marko-js/marko/compare/v5.6.1...v5.6.2) (2021-03-30)

### Bug Fixes

- **translator-default:** some bundlers not supporting hoisted imports ([0233d04](https://github.com/marko-js/marko/commit/0233d042206233ebaaf2ee551b8a926589c7f02f))

# [5.6.0](https://github.com/marko-js/marko/compare/v5.5.4...v5.6.0) (2021-03-27)

### Features

- flush_here_and_after tag ([#1681](https://github.com/marko-js/marko/issues/1681)) ([9d01322](https://github.com/marko-js/marko/commit/9d0132281a89b804fe847e98f915aab951ba78a7))

## [5.5.4](https://github.com/marko-js/marko/compare/v5.5.3...v5.5.4) (2021-03-22)

**Note:** Version bump only for package marko

## [5.5.3](https://github.com/marko-js/marko/compare/v5.5.2...v5.5.3) (2021-03-22)

**Note:** Version bump only for package marko

## [5.5.2](https://github.com/marko-js/marko/compare/v5.5.1...v5.5.2) (2021-03-19)

**Note:** Version bump only for package marko

## [5.5.1](https://github.com/marko-js/marko/compare/v5.5.0...v5.5.1) (2021-03-18)

**Note:** Version bump only for package marko

# [5.5.0](https://github.com/marko-js/marko/compare/v5.4.2...v5.5.0) (2021-03-18)

### Bug Fixes

- **compiler:** use provided FS for taglib building ([#1674](https://github.com/marko-js/marko/issues/1674)) ([edb570e](https://github.com/marko-js/marko/commit/edb570eda4b3d544795536bf81613f6c97c9859a))
- **marko:** issue with async hydrate after final flush ([#1677](https://github.com/marko-js/marko/issues/1677)) ([f2fbaa6](https://github.com/marko-js/marko/commit/f2fbaa6de25c9f6bc2f85a0df6deac057c25b3bd))
- correct Marko debug mode for ci tests ([031ca0d](https://github.com/marko-js/marko/commit/031ca0d93fa77a3405b95467e7a98f2c5a8120de))

### Features

- add hydrate option ([#1673](https://github.com/marko-js/marko/issues/1673)) ([a4e7013](https://github.com/marko-js/marko/commit/a4e701355efcd93971eb46988f5e990f4517796f))

# [5.3.0](https://github.com/marko-js/marko/compare/v5.2.4...v5.3.0) (2021-03-08)

### Features

- **marko:** support lazy loading hydrated components ([7e14181](https://github.com/marko-js/marko/commit/7e14181d0d01977745eb5fb551aa0068b462aae7))

## [5.2.4](https://github.com/marko-js/marko/compare/v5.2.3...v5.2.4) (2021-03-08)

### Bug Fixes

- **marko:** issue with delegating events from text nodes ([787578e](https://github.com/marko-js/marko/commit/787578ed60b15cf3b8abfc65b2f24c0418c7a442))

## [5.2.3](https://github.com/marko-js/marko/compare/v5.2.2...v5.2.3) (2021-03-05)

### Bug Fixes

- **marko:** issue with MARKO_DEBUG and a const ([c17f9fc](https://github.com/marko-js/marko/commit/c17f9fc5521412e24838d7ec78bee000c511064f))

## [5.2.2](https://github.com/marko-js/marko/compare/v5.2.1...v5.2.2) (2021-03-01)

### Bug Fixes

- add some additional missing deps from marko to @marko/compiler ([65ac580](https://github.com/marko-js/marko/commit/65ac580e57cb42ab94adc447c9b59744a69c8b64))

## [5.2.1](https://github.com/marko-js/marko/compare/v5.2.0...v5.2.1) (2021-03-01)

### Bug Fixes

- **compiler:** add missing dependency after moving taglib code ([ae843f1](https://github.com/marko-js/marko/commit/ae843f1b802fcbc1c7347247247a3c8551f6cfd2))

# [5.2.0](https://github.com/marko-js/marko/compare/v5.1.21...v5.2.0) (2021-03-01)

### Features

- move taglib apis into compiler source code ([f7cbb1b](https://github.com/marko-js/marko/commit/f7cbb1b5719ce767b7970ca7264a081010e8e65a))

## [5.1.20](https://github.com/marko-js/marko/compare/v5.1.19...v5.1.20) (2021-02-26)

### Bug Fixes

- **marko:** circular dep issue with browser-refresh ([a704210](https://github.com/marko-js/marko/commit/a704210c272500b9aa36f90ca5c2f63cff85a7a7))

## [5.1.19](https://github.com/marko-js/marko/compare/v5.1.18...v5.1.19) (2021-02-26)

### Bug Fixes

- **marko:** bring back hot-reload when node-require hook used ([8d856a0](https://github.com/marko-js/marko/commit/8d856a0250a1f2522f06a91a11c2d73c6a05e7b2))
- move @marko/babel-types into compiler ([5369a63](https://github.com/marko-js/marko/commit/5369a63e0ce66c422981893525ff6c9bcbd461dd))

## [5.1.18](https://github.com/marko-js/marko/compare/v5.1.17...v5.1.18) (2021-02-21)

### Bug Fixes

- **marko:** add back missing preserve-name & remove-dashes config ([4283178](https://github.com/marko-js/marko/commit/428317863d0a1d563019715194064a3cdd7c26d0))

## [5.1.17](https://github.com/marko-js/marko/compare/v5.1.16...v5.1.17) (2021-02-18)

### Bug Fixes

- improve windows support for taglib finder ([58f6568](https://github.com/marko-js/marko/commit/58f6568da8fca1cdf09034c7dd18e7cfb1fdb902))

## [5.1.16](https://github.com/marko-js/marko/compare/v5.1.15...v5.1.16) (2021-02-17)

### Bug Fixes

- **marko:** simplify client-reorder runtime loading login to inline code ([#1661](https://github.com/marko-js/marko/issues/1661)) ([5d0a74a](https://github.com/marko-js/marko/commit/5d0a74a616d6f5d6bdf97a9c041b0c56d9a0d862))

## [5.1.15](https://github.com/marko-js/marko/compare/v5.1.14...v5.1.15) (2021-02-13)

**Note:** Version bump only for package marko

## [5.1.14](https://github.com/marko-js/marko/compare/v5.1.13...v5.1.14) (2021-02-12)

**Note:** Version bump only for package marko

## [5.1.13](https://github.com/marko-js/marko/compare/v5.1.12...v5.1.13) (2021-02-12)

**Note:** Version bump only for package marko

## [5.1.12](https://github.com/marko-js/marko/compare/v5.1.11...v5.1.12) (2021-02-12)

### Bug Fixes

- **marko:** avoid prematurely resolving taglib paths ([29f3cbe](https://github.com/marko-js/marko/commit/29f3cbeccf07108d05e600a2a12dab2a3a0fa6a9))

## [5.1.11](https://github.com/marko-js/marko/compare/v5.1.10...v5.1.11) (2021-02-11)

### Bug Fixes

- prevent potential race condition while tag scanning ([cafa138](https://github.com/marko-js/marko/commit/cafa138f28a5e2fbe9fbc74cc05fb4152e36d911))

## [5.1.10](https://github.com/marko-js/marko/compare/v5.1.9...v5.1.10) (2021-02-05)

**Note:** Version bump only for package marko

## [5.1.9](https://github.com/marko-js/marko/compare/v5.1.8...v5.1.9) (2021-02-03)

### Bug Fixes

- **marko:** default export in esm mode for marko/component ([9b144e1](https://github.com/marko-js/marko/commit/9b144e13ea3413884fdda698fa854caca111858d))
- **marko:** drop ie10 only runtime code ([2125bf6](https://github.com/marko-js/marko/commit/2125bf6ae991120cf27662b139b3080a93d05416))
- **marko:** include default export in esm marko/components ([ed5fbc2](https://github.com/marko-js/marko/commit/ed5fbc2299a500851f7b9e23a9737a23285e4840))

## [5.1.8](https://github.com/marko-js/marko/compare/v5.1.7...v5.1.8) (2021-02-02)

**Note:** Version bump only for package marko

## [5.1.7](https://github.com/marko-js/marko/compare/v5.1.6...v5.1.7) (2021-02-01)

### Bug Fixes

- allow passing 'dom' output instead of 'vdom' ([9c11a9b](https://github.com/marko-js/marko/commit/9c11a9be187c728b46caca9a37a9b383cc20ce1b))

## [5.1.6](https://github.com/marko-js/marko/compare/v5.1.5...v5.1.6) (2021-01-29)

**Note:** Version bump only for package marko

## [5.1.5](https://github.com/marko-js/marko/compare/v5.1.4...v5.1.5) (2021-01-28)

**Note:** Version bump only for package marko

## [5.1.4](https://github.com/marko-js/marko/compare/v5.1.3...v5.1.4) (2021-01-27)

### Bug Fixes

- docs link ([69abe9a](https://github.com/marko-js/marko/commit/69abe9a299e106f5ea0ef3c7a14b0fc5d3542a6b))

## [5.1.3](https://github.com/marko-js/marko/compare/v5.1.2...v5.1.3) (2021-01-27)

### Bug Fixes

- enable inline sourcemaps by default with dev mode require hook ([6571a11](https://github.com/marko-js/marko/commit/6571a1124047e10ccf0b7a4b131fbe860ce008bb))

## [5.1.2](https://github.com/marko-js/marko/compare/v5.1.1...v5.1.2) (2021-01-26)

**Note:** Version bump only for package marko

## [5.1.1](https://github.com/marko-js/marko/compare/v5.1.0...v5.1.1) (2021-01-26)

**Note:** Version bump only for package marko

# [5.1.0](https://github.com/marko-js/marko/compare/v5.0.0-next.82...v5.1.0) (2021-01-26)

### Features

- no longer publish as 'next' dist-tag ([8113e25](https://github.com/marko-js/marko/commit/8113e250d823000810d0fa13d76efc4cc69f4ad1))

# [5.0.0-next.82](https://github.com/marko-js/marko/compare/v5.0.0-next.81...v5.0.0-next.82) (2021-01-21)

**Note:** Version bump only for package marko

# [5.0.0-next.81](https://github.com/marko-js/marko/compare/v5.0.0-next.80...v5.0.0-next.81) (2021-01-20)

**Note:** Version bump only for package marko

# [5.0.0-next.80](https://github.com/marko-js/marko/compare/v5.0.0-next.79...v5.0.0-next.80) (2021-01-19)

**Note:** Version bump only for package marko

# [5.0.0-next.79](https://github.com/marko-js/marko/compare/v5.0.0-next.78...v5.0.0-next.79) (2021-01-19)

**Note:** Version bump only for package marko

# [5.0.0-next.78](https://github.com/marko-js/marko/compare/v5.0.0-next.77...v5.0.0-next.78) (2021-01-19)

**Note:** Version bump only for package marko

# [5.0.0-next.77](https://github.com/marko-js/marko/compare/v5.0.0-next.76...v5.0.0-next.77) (2021-01-19)

### Bug Fixes

- force commonjs modules for load api ([bd84dad](https://github.com/marko-js/marko/commit/bd84dadca72c4d5e6ae7ed62211e543211a29a5f))

# [5.0.0-next.76](https://github.com/marko-js/marko/compare/v5.0.0-next.75...v5.0.0-next.76) (2021-01-15)

### Features

- improve analysis for stateful tag parameters ([#1648](https://github.com/marko-js/marko/issues/1648)) ([8c34cb4](https://github.com/marko-js/marko/commit/8c34cb4be6bd571f6013f50dc6808e3d9de10763))

# [5.0.0-next.75](https://github.com/marko-js/marko/compare/v5.0.0-next.74...v5.0.0-next.75) (2021-01-14)

### Bug Fixes

- issue with using flags before defined ([8628d01](https://github.com/marko-js/marko/commit/8628d01ef82816a482e57938fbecde3e3c64c357))

# [5.0.0-next.74](https://github.com/marko-js/marko/compare/v5.0.0-next.73...v5.0.0-next.74) (2021-01-14)

### Bug Fixes

- runtime mismatch check ([892f9d0](https://github.com/marko-js/marko/commit/892f9d0f10bb76d0c33ed11204c36f6edc40253c))

# [5.0.0-next.73](https://github.com/marko-js/marko/compare/v5.0.0-next.72...v5.0.0-next.73) (2021-01-14)

### Bug Fixes

- use same debug check for compiler and runtime ([#1647](https://github.com/marko-js/marko/issues/1647)) ([0c8632f](https://github.com/marko-js/marko/commit/0c8632fe92d06b27d0741fa2d5a2b599f0890693))

# [5.0.0-next.72](https://github.com/marko-js/marko/compare/v5.0.0-next.71...v5.0.0-next.72) (2021-01-13)

### Bug Fixes

- issue with only renderBody being serialized ([8c0e045](https://github.com/marko-js/marko/commit/8c0e045af9820ee26f606ee626b8a51579aded94))

# [5.0.0-next.71](https://github.com/marko-js/marko/compare/v5.0.0-next.70...v5.0.0-next.71) (2021-01-12)

**Note:** Version bump only for package marko

# [5.0.0-next.70](https://github.com/marko-js/marko/compare/v5.0.0-next.69...v5.0.0-next.70) (2020-12-16)

**Note:** Version bump only for package marko

# [5.0.0-next.69](https://github.com/marko-js/marko/compare/v5.0.0-next.68...v5.0.0-next.69) (2020-12-14)

**Note:** Version bump only for package marko

# [5.0.0-next.68](https://github.com/marko-js/marko/compare/v5.0.0-next.67...v5.0.0-next.68) (2020-12-11)

**Note:** Version bump only for package marko

# [5.0.0-next.67](https://github.com/marko-js/marko/compare/v5.0.0-next.66...v5.0.0-next.67) (2020-12-09)

**Note:** Version bump only for package marko

# [5.0.0-next.66](https://github.com/marko-js/marko/compare/v5.0.0-next.65...v5.0.0-next.66) (2020-12-08)

### Bug Fixes

- renderbody with dynamic attrs ([6c33c0f](https://github.com/marko-js/marko/commit/6c33c0fcf1f240e50ce7bccbb10ea1efb0daaed3))

# [5.0.0-next.65](https://github.com/marko-js/marko/compare/v5.0.0-next.64...v5.0.0-next.65) (2020-12-02)

**Note:** Version bump only for package marko

# [5.0.0-next.64](https://github.com/marko-js/marko/compare/v5.0.0-next.63...v5.0.0-next.64) (2020-12-02)

### Bug Fixes

- **babel-types:** support scope analysis for tag variables ([c527474](https://github.com/marko-js/marko/commit/c5274740b5fde01b85b8b46381fadf2fc75245f2))

# [5.0.0-next.63](https://github.com/marko-js/marko/compare/v5.0.0-next.62...v5.0.0-next.63) (2020-12-01)

**Note:** Version bump only for package marko

# [5.0.0-next.62](https://github.com/marko-js/marko/compare/v5.0.0-next.61...v5.0.0-next.62) (2020-12-01)

**Note:** Version bump only for package marko

# [5.0.0-next.61](https://github.com/marko-js/marko/compare/v5.0.0-next.60...v5.0.0-next.61) (2020-12-01)

**Note:** Version bump only for package marko

# [5.0.0-next.60](https://github.com/marko-js/marko/compare/v5.0.0-next.59...v5.0.0-next.60) (2020-11-22)

**Note:** Version bump only for package marko

# [5.0.0-next.59](https://github.com/marko-js/marko/compare/v5.0.0-next.58...v5.0.0-next.59) (2020-11-21)

**Note:** Version bump only for package marko

# [5.0.0-next.58](https://github.com/marko-js/marko/compare/v5.0.0-next.57...v5.0.0-next.58) (2020-11-20)

**Note:** Version bump only for package marko

# [5.0.0-next.57](https://github.com/marko-js/marko/compare/v5.0.0-next.56...v5.0.0-next.57) (2020-11-20)

### Features

- add parser support for tag variables ([#1630](https://github.com/marko-js/marko/issues/1630)) ([43c4433](https://github.com/marko-js/marko/commit/43c4433cb026f7eace199203e15d1050a53dc35d))

# [5.0.0-next.56](https://github.com/marko-js/marko/compare/v5.0.0-next.55...v5.0.0-next.56) (2020-11-20)

**Note:** Version bump only for package marko

# [5.0.0-next.55](https://github.com/marko-js/marko/compare/v5.0.0-next.54...v5.0.0-next.55) (2020-11-19)

**Note:** Version bump only for package marko

# [5.0.0-next.54](https://github.com/marko-js/marko/compare/v5.0.0-next.53...v5.0.0-next.54) (2020-11-17)

**Note:** Version bump only for package marko

# [5.0.0-next.52](https://github.com/marko-js/marko/compare/v5.0.0-next.51...v5.0.0-next.52) (2020-11-12)

**Note:** Version bump only for package marko

# [5.0.0-next.51](https://github.com/marko-js/marko/compare/v5.0.0-next.50...v5.0.0-next.51) (2020-11-11)

### Bug Fixes

- regression with no-update-body with no renderBody ([1e89057](https://github.com/marko-js/marko/commit/1e890574bd23035eb1d22ae78672c3a0e9dd4563))

### Features

- cached compilations, nested tag analysis ([74d5f10](https://github.com/marko-js/marko/commit/74d5f104b8f35178c399ab5c3514c33f8b63cdf0))

# [5.0.0-next.50](https://github.com/marko-js/marko/compare/v5.0.0-next.49...v5.0.0-next.50) (2020-10-12)

### Bug Fixes

- no longer use fragments for preserved native els ([22e9322](https://github.com/marko-js/marko/commit/22e9322a7e72b50812ab223f70bf9e68aee2208d))
- regression serializing empty component data with custom runtimeid ([7ee0cd1](https://github.com/marko-js/marko/commit/7ee0cd1f0aacda8c9b04b583320951ce406a9143))
- **translator-default:** owner component missing for text nodes ([50b4e97](https://github.com/marko-js/marko/commit/50b4e9746b4fc5158d35ba78110199de4a4e7956))

# [5.0.0-next.49](https://github.com/marko-js/marko/compare/v5.0.0-next.48...v5.0.0-next.49) (2020-09-28)

### Bug Fixes

- **marko:** output esm for module-code ([db4793d](https://github.com/marko-js/marko/commit/db4793df11c08b7d8f8b3cf5591528f35fd643d9))

### Performance Improvements

- misc optimizations ([#1610](https://github.com/marko-js/marko/issues/1610)) ([bf393c8](https://github.com/marko-js/marko/commit/bf393c85ad8ed663db8daad64afdcd423e668c46))

# [5.0.0-next.48](https://github.com/marko-js/marko/compare/v5.0.0-next.47...v5.0.0-next.48) (2020-09-18)

**Note:** Version bump only for package marko

# [5.0.0-next.47](https://github.com/marko-js/marko/compare/v5.0.0-next.46...v5.0.0-next.47) (2020-09-18)

**Note:** Version bump only for package marko

# [5.0.0-next.46](https://github.com/marko-js/marko/compare/v5.0.0-next.45...v5.0.0-next.46) (2020-09-17)

### Bug Fixes

- only include template path with meta option enabled ([e1b39e1](https://github.com/marko-js/marko/commit/e1b39e18c430b86e2406187958d5503d83a7d79a))

### Performance Improvements

- prevent bundlers from pulling in setImmediate shim ([585d6be](https://github.com/marko-js/marko/commit/585d6be9c288b2a0306d2ffcd36d15e8e17a03d9))
- remove unecessary function for template load api ([33ae635](https://github.com/marko-js/marko/commit/33ae635fec6ad4383347c7ce9e640251937a8d64))

# [5.0.0-next.45](https://github.com/marko-js/marko/compare/v5.0.0-next.44...v5.0.0-next.45) (2020-08-26)

### Bug Fixes

- regression with manual component init with custom runtimeid ([ec6e670](https://github.com/marko-js/marko/commit/ec6e670dbca30116947372198203b9c72c46a714))

# [5.0.0-next.44](https://github.com/marko-js/marko/compare/v5.0.0-next.43...v5.0.0-next.44) (2020-08-26)

**Note:** Version bump only for package marko

# [5.0.0-next.43](https://github.com/marko-js/marko/compare/v5.0.0-next.42...v5.0.0-next.43) (2020-08-20)

### Bug Fixes

- issue with hydrating body-only content ([c975b87](https://github.com/marko-js/marko/commit/c975b878ccce93ab64caa3c2feef0fb160194282))

# [5.0.0-next.42](https://github.com/marko-js/marko/compare/v5.0.0-next.41...v5.0.0-next.42) (2020-08-18)

**Note:** Version bump only for package marko

# [5.0.0-next.41](https://github.com/marko-js/marko/compare/v5.0.0-next.40...v5.0.0-next.41) (2020-08-18)

**Note:** Version bump only for package marko

# [5.0.0-next.40](https://github.com/marko-js/marko/compare/v5.0.0-next.39...v5.0.0-next.40) (2020-08-12)

### Bug Fixes

- component type use relative path in dev mode ([7b7a4f9](https://github.com/marko-js/marko/commit/7b7a4f9637648c7ded113fd132ce3ce5f2785e0a))

# [5.0.0-next.39](https://github.com/marko-js/marko/compare/v5.0.0-next.38...v5.0.0-next.39) (2020-08-10)

### Bug Fixes

- invalid missing closing svg tags ([47a9834](https://github.com/marko-js/marko/commit/47a98341a2bdb4ae136495c5e3976dfe7c24a77c))

# [5.0.0-next.38](https://github.com/marko-js/marko/compare/v5.0.0-next.37...v5.0.0-next.38) (2020-08-10)

### Bug Fixes

- add support for nested tag long hand properties ([#1592](https://github.com/marko-js/marko/issues/1592)) ([36c501c](https://github.com/marko-js/marko/commit/36c501ce440f90f6409394b38ed49e185e82d239))
- set default value for textarea when created ([#1593](https://github.com/marko-js/marko/issues/1593)) ([00a0a55](https://github.com/marko-js/marko/commit/00a0a5527d19e7e145b367a415677dc9d41474cd))

# [5.0.0-next.37](https://github.com/marko-js/marko/compare/v5.0.0-next.36...v5.0.0-next.37) (2020-08-05)

**Note:** Version bump only for package marko

# [5.0.0-next.36](https://github.com/marko-js/marko/compare/v5.0.0-next.35...v5.0.0-next.36) (2020-08-05)

### Features

- expose watch file meta data ([#1591](https://github.com/marko-js/marko/issues/1591)) ([f14e46a](https://github.com/marko-js/marko/commit/f14e46a1f3ddd01f659a0f86678773fb12a7f1a5))

# [5.0.0-next.35](https://github.com/marko-js/marko/compare/v5.0.0-next.34...v5.0.0-next.35) (2020-08-04)

### Bug Fixes

- lint and format scripts ([57b66ef](https://github.com/marko-js/marko/commit/57b66ef39782ea249d3cf7913ec8242d0baf5535))

# [5.0.0-next.34](https://github.com/marko-js/marko/compare/v5.0.0-next.33...v5.0.0-next.34) (2020-08-04)

### Bug Fixes

- allow <await> in sync mode ([#1589](https://github.com/marko-js/marko/issues/1589)) ([f91bd37](https://github.com/marko-js/marko/commit/f91bd37ec22f45861d11931f696d1edc5e84165c))
- diffing dynamic attributes with mismatched keys ([#1587](https://github.com/marko-js/marko/issues/1587)) ([4b8cce4](https://github.com/marko-js/marko/commit/4b8cce41c7f3a020142e2d3e3d1e194ab64ffe65))
- issue with hydrating no-update-if content ([#1581](https://github.com/marko-js/marko/issues/1581)) ([457f3d4](https://github.com/marko-js/marko/commit/457f3d4acb480e5382fdfa30d0c1d4ea0062c4cc))

# [5.0.0-next.33](https://github.com/marko-js/marko/compare/v5.0.0-next.32...v5.0.0-next.33) (2020-08-03)

**Note:** Version bump only for package marko

# [5.0.0-next.32](https://github.com/marko-js/marko/compare/v5.0.0-next.31...v5.0.0-next.32) (2020-07-31)

**Note:** Version bump only for package marko

# [5.0.0-next.31](https://github.com/marko-js/marko/compare/v5.0.0-next.30...v5.0.0-next.31) (2020-07-31)

**Note:** Version bump only for package marko

# [5.0.0-next.30](https://github.com/marko-js/marko/compare/v5.0.0-next.29...v5.0.0-next.30) (2020-07-29)

**Note:** Version bump only for package marko

# [5.0.0-next.29](https://github.com/marko-js/marko/compare/v5.0.0-next.28...v5.0.0-next.29) (2020-07-29)

**Note:** Version bump only for package marko

# [5.0.0-next.28](https://github.com/marko-js/marko/compare/v5.0.0-next.27...v5.0.0-next.28) (2020-07-27)

### Bug Fixes

- better errors, track deps and cleanup for import shorthand ([00464f2](https://github.com/marko-js/marko/commit/00464f27b2fef2a454745b424e3cce18c76ae33f))

### Features

- add new syntax for dynamic component import ([e9b4cd6](https://github.com/marko-js/marko/commit/e9b4cd61acff70d7d0d0d49cab7034e000493346))

# [5.0.0-next.27](https://github.com/marko-js/marko/compare/v5.0.0-next.26...v5.0.0-next.27) (2020-07-24)

**Note:** Version bump only for package marko

# [5.0.0-next.26](https://github.com/marko-js/marko/compare/v5.0.0-next.25...v5.0.0-next.26) (2020-07-24)

### Bug Fixes

- docs paths ([583197e](https://github.com/marko-js/marko/commit/583197e2555258e101bb7e5e14134117cbd072e2))

# [5.0.0-next.25](https://github.com/marko-js/marko/compare/v5.0.0-next.24...v5.0.0-next.25) (2020-07-23)

**Note:** Version bump only for package marko

# [5.0.0-next.24](https://github.com/marko-js/marko/compare/v5.0.0-next.23...v5.0.0-next.24) (2020-07-22)

**Note:** Version bump only for package marko

# [5.0.0-next.23](https://github.com/marko-js/marko/compare/v5.0.0-next.22...v5.0.0-next.23) (2020-07-14)

**Note:** Version bump only for package marko

# [5.0.0-next.22](https://github.com/marko-js/marko/compare/v5.0.0-next.21...v5.0.0-next.22) (2020-07-10)

**Note:** Version bump only for package marko

# [5.0.0-next.21](https://github.com/marko-js/marko/compare/v5.0.0-next.20...v5.0.0-next.21) (2020-07-07)

**Note:** Version bump only for package marko

# [5.0.0-next.20](https://github.com/marko-js/marko/compare/v5.0.0-next.19...v5.0.0-next.20) (2020-07-07)

**Note:** Version bump only for package marko

# [5.0.0-next.19](https://github.com/marko-js/marko/compare/v5.0.0-next.18...v5.0.0-next.19) (2020-07-06)

**Note:** Version bump only for package marko

# [5.0.0-next.18](https://github.com/marko-js/marko/compare/v5.0.0-next.17...v5.0.0-next.18) (2020-05-27)

**Note:** Version bump only for package marko

# [5.0.0-next.17](https://github.com/marko-js/marko/compare/v5.0.0-next.16...v5.0.0-next.17) (2020-05-27)

### Bug Fixes

- additional taglib cleanup for website support ([f462d8a](https://github.com/marko-js/marko/commit/f462d8ad95c1d438561f028a7d2a79accccbe739))

# [5.0.0-next.16](https://github.com/marko-js/marko/compare/v5.0.0-next.15...v5.0.0-next.16) (2020-05-27)

### Features

- website compatibility fixes ([4390fd1](https://github.com/marko-js/marko/commit/4390fd1654d7b2753d2af899917ced7b3a395bc2))

# [5.0.0-next.15](https://github.com/marko-js/marko/compare/v5.0.0-next.14...v5.0.0-next.15) (2020-05-26)

**Note:** Version bump only for package marko

# [5.0.0-next.14](https://github.com/marko-js/marko/compare/v5.0.0-next.13...v5.0.0-next.14) (2020-05-26)

### Bug Fixes

- improve browser support for website ([#1574](https://github.com/marko-js/marko/issues/1574)) ([9df798a](https://github.com/marko-js/marko/commit/9df798af5e71b71881995b6e06a9fb1b30b6fac2))

# [5.0.0-next.13](https://github.com/marko-js/marko/compare/v5.0.0-next.12...v5.0.0-next.13) (2020-05-20)

### Bug Fixes

- nextTick timing regression ([#1573](https://github.com/marko-js/marko/issues/1573)) ([7f35078](https://github.com/marko-js/marko/commit/7f35078dda057c6f83282d37edea6044f02657f3))
- **marko:** prevent loading main entry by default ([61c954e](https://github.com/marko-js/marko/commit/61c954ef0ed1fc1d3b44b878ea1dbb0f79a9b718))

# [5.0.0-next.12](https://github.com/marko-js/marko/compare/v5.0.0-next.11...v5.0.0-next.12) (2020-05-19)

### Bug Fixes

- components not always initializing inside client-reorder await ([#1566](https://github.com/marko-js/marko/issues/1566)) ([da31ead](https://github.com/marko-js/marko/commit/da31ead17959e0e4bbbd806690d368127636b094))
- data-marko attributes under 'no-update' with <await> ([#1564](https://github.com/marko-js/marko/issues/1564)) ([0a227d0](https://github.com/marko-js/marko/commit/0a227d0c7c27821df551c1367e160793dc9e234e))

# [5.0.0-next.11](https://github.com/marko-js/marko/compare/v5.0.0-next.10...v5.0.0-next.11) (2020-04-27)

### Bug Fixes

- regression with unquoted attribute with trailing slash ([#1561](https://github.com/marko-js/marko/issues/1561)) ([128b68a](https://github.com/marko-js/marko/commit/128b68aefcec8d99b7c508e4cea2336207f574da))
- split components under preserved root resetting \_\_\_isPreserved ([#1559](https://github.com/marko-js/marko/issues/1559)) ([dd9f7ac](https://github.com/marko-js/marko/commit/dd9f7aca848df88e46cf5087d932966eaaaa1681))

# [5.0.0-next.10](https://github.com/marko-js/marko/compare/v5.0.0-next.9...v5.0.0-next.10) (2020-04-23)

### Bug Fixes

- switch safe renderer to use nextTick for errors ([#1554](https://github.com/marko-js/marko/issues/1554)) ([900e7b1](https://github.com/marko-js/marko/commit/900e7b1f1d94380ae997ebd408272ecb24b77193))

### Performance Improvements

- minify runtime comments, remove unnecessary attr quotes ([#1557](https://github.com/marko-js/marko/issues/1557)) ([2882626](https://github.com/marko-js/marko/commit/28826265f88c9f038886945471584f1b4b3b9be6))

# [5.0.0-next.9](https://github.com/marko-js/marko/compare/v5.0.0-next.8...v5.0.0-next.9) (2020-04-16)

### Bug Fixes

- add devmode warning for removing fragment markers ([#1541](https://github.com/marko-js/marko/issues/1541)) ([de27b4a](https://github.com/marko-js/marko/commit/de27b4af4c99efb5a9494e42f305160cda81348d))
- implement missing methods for void-writer ([#1540](https://github.com/marko-js/marko/issues/1540)) ([b50f93c](https://github.com/marko-js/marko/commit/b50f93c0240bb1dd43dd4f0f12e2a5afff57f915))
- improve micro task helper ([2129451](https://github.com/marko-js/marko/commit/21294511e9fd7a9bd2db3683d9f123baedf886b7))
- issue with keys under ssr no-update root ([#1527](https://github.com/marko-js/marko/issues/1527)) ([480bc77](https://github.com/marko-js/marko/commit/480bc77433835f960a9a58fee4e6a52c0f188571))
- regression with nullish values in partial string attribute values ([#1537](https://github.com/marko-js/marko/issues/1537)) ([144c352](https://github.com/marko-js/marko/commit/144c352863b75b75d513c8f080b8b19881e5dbde))
- spread attrs for native tag preserves case ([#1530](https://github.com/marko-js/marko/issues/1530)) ([6b3156f](https://github.com/marko-js/marko/commit/6b3156f80832356baf0dc93e6753246ab852367f))

### Features

- improve serialization across multiple writes ([#1542](https://github.com/marko-js/marko/issues/1542)) ([45e42df](https://github.com/marko-js/marko/commit/45e42dfd84a86dd3377a4d2968191b7dde8388d2))

### Performance Improvements

- misc improvements ([#1535](https://github.com/marko-js/marko/issues/1535)) ([1fed43e](https://github.com/marko-js/marko/commit/1fed43e24133ea6a43448237296e491a17a4b497))
- optimize dynamic tag when types are statically known ([#1550](https://github.com/marko-js/marko/issues/1550)) ([4719405](https://github.com/marko-js/marko/commit/47194054de15eeb19247a8f50926ac81c6d03671))
- optimize merge html attrs ([#1538](https://github.com/marko-js/marko/issues/1538)) ([792aa6a](https://github.com/marko-js/marko/commit/792aa6a7b702baba0599524cb30f7ca52e277dae))
- optimize serializing renderBody & legacy widgets ([#1539](https://github.com/marko-js/marko/issues/1539)) ([eb9e156](https://github.com/marko-js/marko/commit/eb9e156116ab46b329ff9d32514fe298e38fad3d))
- skip serializing instance props & state for non split components ([#1546](https://github.com/marko-js/marko/issues/1546)) ([75fd1b0](https://github.com/marko-js/marko/commit/75fd1b018f3ecc408258ec2f4e97337e3c69a8c9))

# [5.0.0-next.8](https://github.com/marko-js/marko/compare/v5.0.0-next.7...v5.0.0-next.8) (2020-03-17)

**Note:** Version bump only for package marko

# [5.0.0-next.7](https://github.com/marko-js/marko/compare/v5.0.0-next.6...v5.0.0-next.7) (2020-03-17)

**Note:** Version bump only for package marko

# [5.0.0-next.6](https://github.com/marko-js/marko/compare/v5.0.0-next.5...v5.0.0-next.6) (2020-03-16)

### Bug Fixes

- don't serialize component boundary keys if the owner isn't hydrated ([#1525](https://github.com/marko-js/marko/issues/1525)) ([ab3d2a7](https://github.com/marko-js/marko/commit/ab3d2a7b0b4bb5ab05e78d4bba17efe4d3f58afa))

### Features

- all vnodes have owner components ([#1517](https://github.com/marko-js/marko/issues/1517)) ([585b2f1](https://github.com/marko-js/marko/commit/585b2f1de7797f909f1204f7c52c4b6891f8e156))

# [5.0.0-next.5](https://github.com/marko-js/marko/compare/v5.0.0-next.4...v5.0.0-next.5) (2020-02-26)

### Bug Fixes

- always include nested contexts when serializing ([#1515](https://github.com/marko-js/marko/issues/1515)) ([84aa30e](https://github.com/marko-js/marko/commit/84aa30ee6d04732f4a9f3349f61b12a72a980016))
- set preserve false under new rerender roots ([#1513](https://github.com/marko-js/marko/issues/1513)) ([c00a02c](https://github.com/marko-js/marko/commit/c00a02c44633d10ea23284e6b1222476d7134361))

# [5.0.0-next.4](https://github.com/marko-js/marko/compare/v5.0.0-next.3...v5.0.0-next.4) (2020-02-25)

### Bug Fixes

- improve node locations in sourcemaps ([#1512](https://github.com/marko-js/marko/issues/1512)) ([f4a39e9](https://github.com/marko-js/marko/commit/f4a39e91ca90aa734882ba234119ade3b0436e73))

# [5.0.0-next.3](https://github.com/marko-js/marko/compare/v5.0.0-next.2...v5.0.0-next.3) (2020-02-25)

### Bug Fixes

- only use minprops on runtime code ([#1511](https://github.com/marko-js/marko/issues/1511)) ([eb7441f](https://github.com/marko-js/marko/commit/eb7441f78779272577d8a19433644c0440ac6b80))

# [5.0.0-next.2](https://github.com/marko-js/marko/compare/v5.0.0-next.1...v5.0.0-next.2) (2020-02-25)

**Note:** Version bump only for package marko

# [5.0.0-next.1](https://github.com/marko-js/marko/compare/v4.18.48...v5.0.0-next.1) (2020-02-25)

### chore

- delete deprecated apis/tests ([c163054](https://github.com/marko-js/marko/commit/c1630543fba7ca136d5986b4c19ecaa7f7fccb82))

### Features

- update apis/tests for new compiler ([ea6736d](https://github.com/marko-js/marko/commit/ea6736d085839debf91979be4f901d79dca9d2bd))

### BREAKING CHANGES

- api for compile-time tags has changed.
  This affects tranformer/node-factory/code-generator tags.

Co-authored-by: Michael Rawlings <mirawlings@ebay.com>
Co-authored-by: Dylan Piercey <dpiercey@ebay.com>
Co-authored-by: Andrew Gliga <agliga@ebay.com>

- The following deprecated apis have been removed:

* Deprecated top-level entrypoints of the `marko` package
* The marko@3/marko-widgets@6 legacy compatibility layer
* Auto-migratable syntax and api changes to the core tags

Co-authored-by: Michael Rawlings <mirawlings@ebay.com>
Co-authored-by: Dylan Piercey <dpiercey@ebay.com>

# Changelog

# 4.x

## 4.18.x

### 4.18.48

- Fixes a regression from [#1499](https://github.com/marko-js/marko/pull/1499) which caused `<${dynamic}>` tags with body content to not have their events registered. [#1507](https://github.com/marko-js/marko/pull/1507)
- Fixes issue with `getEl` being used on a keyed `<${dynamic}>` tag. [#1507](https://github.com/marko-js/marko/pull/1507)
- Fixes registering event handlers added to a `<${dynamic}>` tag that renders a native element under a split component. [#1507](https://github.com/marko-js/marko/pull/1507)

### 4.18.47

- Deprecate implicit JSON.stringify for attributes, attr toString fix. [#1505](https://github.com/marko-js/marko/pull/1505)
- Remove data-widget, add warning for non-split, non-stateful widgets. [#1503](https://github.com/marko-js/marko/pull/1503)
- Flushing improvements. [#1502](https://github.com/marko-js/marko/pull/1502)

### 4.18.46

- Fixed issue with `<init-components>` being rendered under nested async outs. [#1500](https://github.com/marko-js/marko/pull/1500)

### 4.18.45

- Fixed dynamic tags to add data-marko-key for split components [#1499](https://github.com/marko-js/marko/pull/1499)
- Fixed dynamic tags properly render self-closing tags on the server [#1499](https://github.com/marko-js/marko/pull/1499)

### 4.18.44

- Fix issue with diffing SSR'd `no-update` section. [#1498](https://github.com/marko-js/marko/pull/1498)

### 4.18.43

- No longer serialize input for split legacy widgets. [#1497](https://github.com/marko-js/marko/pull/1497)

### 4.18.42

- Fix regression for unkeyed elements with toggled spread attributes [#1496](https://github.com/marko-js/marko/pull/1496)
- Fix regression with body-only-if migration for legacy renderers [#1495](https://github.com/marko-js/marko/pull/1495)

### 4.18.41

- Improve support for conditional `w-bind`. [#1494](https://github.com/marko-js/marko/pull/1494)
- No longer delete `onBeforeDestroy` and `onBeforeUpdate` from legacy widget prototypes. [#1494](https://github.com/marko-js/marko/pull/1494)
- Fix regression with registering event handlers for SSR content under a `no-update`. [#1493](https://github.com/marko-js/marko/pull/1493)

### 4.18.40

- Fix issue with the `ignoreUnrecognizedTags` compiler option with `<@attribute>` tags inside of a `<${dynamic}>` tag. [#1491](https://github.com/marko-js/marko/pull/1491)
- Improve support for legacy widgets by allowing for custom `init` method on prototype. [#1490](https://github.com/marko-js/marko/pull/1490)
- Removes some unused properties that were serialized with legacy widgets [#1489](https://github.com/marko-js/marko/pull/1489)
- Improves consistency with `...spread` attributes onto native tags. [#1488](https://github.com/marko-js/marko/pull/1488)
  - Now turns `camelCase` properties into `dash-cash`
  - Now omits `renderBody` properties.
- Improves `this.el` warning for legacy widgets. [#1487](https://github.com/marko-js/marko/pull/1487)
- Fixes an issue with nested `no-update`'s around components not initializing properly. [#1486](https://github.com/marko-js/marko/pull/1486)

### 4.18.39

- Support overriding the 'ready' method in legacy widgets. [#1484](https://github.com/marko-js/marko/pull/1484)

### 4.18.38

- Fix regression with ssr'd components under 'no-update' not initializing. [#1483](https://github.com/marko-js/marko/pull/1483)

### 4.18.37

- Fix regression with no-update-body on textarea tags. [#1482](https://github.com/marko-js/marko/pull/1482)

### 4.18.36

- Fix issue for legacy widget rerenders not preserving props. [#1481](https://github.com/marko-js/marko/pull/1481)
- `no-update` will now preserve elements rendered from the server side. [#1480](https://github.com/marko-js/marko/pull/1480)

### 4.18.35

- Improve support for legacy split widgets. [#1477](https://github.com/marko-js/marko/pull/1477)

### 4.18.34

- Improve legacy widgets assigning into state causing a replace instead of merge. [#1476](https://github.com/marko-js/marko/pull/1476)

### 4.18.33

- Fix event name case normalization for legacy components with `w-on`. [#1475](https://github.com/marko-js/marko/pull/1475)

### 4.18.32

- Return the component id if no key is passed to getElId/elId. [#1474](https://github.com/marko-js/marko/pull/1474)
- Support having nullish keys in the legacy (v3) renderer. [#1473](https://github.com/marko-js/marko/pull/1473)

### 4.18.31

- Fix legacy render lifecycle order to match marko-widgets@6. [#1472](https://github.com/marko-js/marko/pull/1472)

### 4.18.30

- Fix regression with browser remap for legacy widgets. [#1471](https://github.com/marko-js/marko/pull/1471)

### 4.18.29

- Fixed regression which was causing getTemplateData to be serialized.
- Refactor helpers, fix circular deps, improve code splitting [#1468](https://github.com/marko-js/marko/pull/1468)
- Remove unused deps, update package-lock [#1469](https://github.com/marko-js/marko/pull/1469)
- Fixed typo in example output [#1463](https://github.com/marko-js/marko/pull/1463)

### 4.18.28

- Allow support for `<state>` tag and calling `setState` on null state [#1460](https://github.com/marko-js/marko/pull/1460)

### 4.18.27

- Allow empty `<@catch>` in `<await>` [#1456](https://github.com/marko-js/marko/pull/1456)

### 4.18.26

- Improve errors emitted from AsyncWriter

### 4.18.25

- Better async stack traces in dev [#1453](https://github.com/marko-js/marko/pull/1453)

### 4.18.24

- Remove circular dep for dom weakmaps. [#1449](https://github.com/marko-js/marko/pull/1449)
- Fix invalid deprecation message for core-tags on windows. [#1448](https://github.com/marko-js/marko/pull/1448)

### 4.18.23

- Allow `<macro>` nested under `<if>`. [#1445](https://github.com/marko-js/marko/pull/1445)

### 4.18.22

- Improve legacy compatibilty layer by exposing `widgetProps` on the `data` object. [#1443](https://github.com/marko-js/marko/pull/1443)
- Improve getComponentByEl lookup to prefer owner components. [#1444](https://github.com/marko-js/marko/pull/1444)

### 4.18.21

- Fix issue where duplicated attributes were not being included properly in compiled templates. [#1442](https://github.com/marko-js/marko/pull/1442)

### 4.18.20

- Fix initialization edge-case for top-level async components. [#1441](https://github.com/marko-js/marko/pull/1441)

### 4.18.19

- Deprecate `$global.widgetIdPrefix` (should use `$global.componentIdPrefix` instead). [#1439](https://github.com/marko-js/marko/pull/1439)
- Improve support for rollup by removing usage of `require.resolve`. [#1440](https://github.com/marko-js/marko/pull/1440)
- Update minimum version of htmljs-parser to bring in patch release for parsing css calc values.

### 4.18.18

- Adds a missing method used by part of the legacy compatibility layer.

### 4.18.17

- Fix issue with async out of order components initializing in the wrong order [#1436](https://github.com/marko-js/marko/pull/1436)
- Improvements to the legacy compatibility layer [#1437](https://github.com/marko-js/marko/pull/1437)

### 4.18.16

- Fix top-level components throwing error on hydrate [#1428](https://github.com/marko-js/marko/pull/1428)
- Ensure scripts only have one text node as a child [#1429](https://github.com/marko-js/marko/pull/1429)

### 4.18.15

- Improve support for conditional comments spanning multiple comments. [#1427](https://github.com/marko-js/marko/pull/1427)
- Add a check for loading precompiled templates. [#1426](https://github.com/marko-js/marko/pull/1426)

### 4.18.14

- Improve support for running multiple versions of Marko on the page. [#1418](https://github.com/marko-js/marko/pull/1418)
- Add migration for `component.elId` when used in a place where `:scoped` is recommended. [#1413](https://github.com/marko-js/marko/pull/1413)
- Fix issue where static regexps in the template would output differently than dynamic ones. [#1412](https://github.com/marko-js/marko/pull/1412)
- Improve `marko.json` definitions for core/html tags [#1411](https://github.com/marko-js/marko/pull/1411)

### 4.18.13

- Improve support for consuming v3 components via webpack. [#1410](https://github.com/marko-js/marko/pull/1410)

### 4.18.12

- Improve autocompletion for core tags. [#1405](https://github.com/marko-js/marko/pull/1405)
- Fix issue when using `getComponentForEl` with split components. [#1400](https://github.com/marko-js/marko/pull/1400)

### 4.18.11

- Fix server-rendered conditional widgets in the compatibility layer. [#1395](https://github.com/marko-js/marko/pull/1395)
- Deprecate the partial dynamic tag. [#1397](https://github.com/marko-js/marko/pull/1397)

### 4.18.10

- Improve migration for `getInitialState` with legacy widgets. [#1385](https://github.com/marko-js/marko/pull/1385)

### 4.18.9

- Legacy compat fixes [#1383](https://github.com/marko-js/marko/pull/1383)
  - Temporary fix to ensure `getComponents` doesn't return `null` entries - these should really be removed from the `lookup` instead
  - Use a `for...in` loop to extend the `BaseComponent` (doesn't support getters properly) to maintain the same behavior as `marko-widgets`
  - Ensure that the original `input` for a widget is what gets serialized, not the result of `getTemplateData` (which is called again when hydrating)

### 4.18.8

- Fixes an issue where `require("marko/components").getComponentForEl` could return undefined when a component exists, or the wrong component, when nested fragments are present. [#1382](https://github.com/marko-js/marko/pull/1382)

### 4.18.7

- Fixes a regression from 4.18.6 that could cause some body content to be omitted from the output [#1380](https://github.com/marko-js/marko/pull/1380)
- Adds deprecated string dynamic attributes to the vdom runtime for improved legacy compatibility [#1378](https://github.com/marko-js/marko/pull/1378)

### 4.18.6

- Migration does not add `id:scoped` when migrating a repeated `w-id` [#1377](https://github.com/marko-js/marko/pull/1377)
- Fixes an issue diffing the selected option within an optgroup [#1376](https://github.com/marko-js/marko/pull/1376)
- Fixes component tracking for client-reorder [#1375](https://github.com/marko-js/marko/pull/1375)
- Improve the migration for legacy `<for>` syntax [#1374](https://github.com/marko-js/marko/pull/1374)
- Add migration for named classes in the template [#1372](https://github.com/marko-js/marko/pull/1372)

### 4.18.5

- Fix issue with invoke tag migration when a inline control flow is used [#1366](https://github.com/marko-js/marko/pull/1366)

### 4.18.4

- Lazily evaluate attributes for dynamic tags [#1365](https://github.com/marko-js/marko/pull/1365)

### 4.18.3

- Fix `registerTaglib`: use correct function call [#1363](https://github.com/marko-js/marko/pull/1363)
- Fix tryonline: correct paths and no `taglibImports` [#1360](https://github.com/marko-js/marko/pull/1360)
- Migration fix: [#1364](https://github.com/marko-js/marko/pull/1364)
- Migration improvement: deprecation warnings that are automatically migratable now have a `MIGRATION` heading [#1364](https://github.com/marko-js/marko/pull/1364) (also included test improvements)
- Migration improvement: remove empty `<layout-put>` tags [#1355](https://github.com/marko-js/marko/pull/1355)

### 4.18.2

- Fixes an issue where fragments could remove nodes from their siblings [#1359](https://github.com/marko-js/marko/pull/1359)

### 4.18.1

- Fixes a regression with `body-only-if` and a legacy control flow attribute [#1356](https://github.com/marko-js/marko/pull/1356)

### 4.18.0

- Added dynamic tags to act like body-only-if. If dynamic tags are null then the outer tag will not be rendered. However, the body will be rendered. Deprecated body-only-if [#1332](https://github.com/marko-js/marko/pull/1332)

## 4.17.x

### 4.17.5

- Fix issue where setting the `value` attribute of a textarea to `false` caused the string `"false"` to be used in the vdom. [#1348](https://github.com/marko-js/marko/issues/1348)

### 4.17.4

- Updates htmljs-parser to fix an issue with comments inside inline scriptlets.
- Fix some issues with for loop auto keying. [#1346](https://github.com/marko-js/marko/issues/1346)
- Fix error when using a non string as a key (now logs a deprecation). [#1344](https://github.com/marko-js/marko/issues/1344)

### 4.17.3

- Fix issue were `getEls` would not work with repeated keys for split components. [#1343](https://github.com/marko-js/marko/issues/1343)

### 4.17.2

- Fix regression with namespaces in nested fragments. [#1340](https://github.com/marko-js/marko/issues/1340)

### 4.17.1

- Allow emitting events while the parent is mounting. [#1336](https://github.com/marko-js/marko/issues/1336)
- Fix issue where `component.el` and `component.getEl` could return a marker node. [#1339](https://github.com/marko-js/marko/issues/1339)

### 4.17.0

- Element namespaces are now calculated at runtime, fixes some edge cases with the dynamic tag. [#1333](https://github.com/marko-js/marko/issues/1333)

## 4.16.x

### 4.16.15

- Fix an issue where nodes may be preserved if another node with the same key was rendered as preserved. [#1334](https://github.com/marko-js/marko/issues/1334)
- Improve the `ignoreUnrecognizedTags` compiler option to ignored nested `@tags` on unrecognized tags (removes the need for the `escapeAtTags` option). [#1335](https://github.com/marko-js/marko/issues/1335)

### 4.16.14

- Prevent treating macro usage with parameters as a component. [#1326](https://github.com/marko-js/marko/issues/1326)

### 4.16.13

- Fixes a regression with printing nested unary expressions (eg typeof). [#1323](https://github.com/marko-js/marko/issues/1323)

### 4.16.12

- fix destorying a component that has already removed some top-level nodes [#1321](https://github.com/marko-js/marko/issues/1321)
- fix components runtime path after refactor released in 4.16.11 [#1322](https://github.com/marko-js/marko/issues/1322)

### 4.16.11

- Fixes a regression (syntax) in IE 11 introduced in 4.16.10

### 4.16.10

- Hydrating components now consistently render from the top down. [#1317](https://github.com/marko-js/marko/issues/1317)

### 4.16.9

- Fixes an issue where legacy widgets could loose a reference to their parent components. [#1311](https://github.com/marko-js/marko/issues/1311)

### 4.16.8

- Fixes an issue with hot-reload. [#1282](https://github.com/marko-js/marko/issues/1282)
- If the require hook is enabled, all templates loaded by marko will now use the require hook, including hot-reloaded templates and tags loaded from compiled templates. [#1310](https://github.com/marko-js/marko/pull/1310)

### 4.16.7

- Improve parsing of tag arguments (allows for `<${input.renderBody}(...spread)/>`). [#1308](https://github.com/marko-js/marko/pull/1308)

### 4.16.6

- Fix issue with hydrating legacy Marko 3 widgets from the server. [#1306](https://github.com/marko-js/marko/pull/1306)

### 4.16.5

- Fix regression with legacy dynamic attributes when a string without whitespace is used. [#1304](https://github.com/marko-js/marko/pull/1304)
- The `disabled` property on buttons is now properly synced with the template. [#1303](https://github.com/marko-js/marko/pull/1303)

### 4.16.4

- Fix regression with migrating legacy `<macro>` syntax with a magic `renderBody` variable. [#1300](https://github.com/marko-js/marko/pull/1300)

### 4.16.3

- Fix issue with migrating `<var>` and `<assign>` with `widget` properties. [#1298](https://github.com/marko-js/marko/pull/1298)

### 4.16.2

- Fix issue with nested fragments (often as dynamic tags) that were adjacent in the DOM not hydrating properly. [#1294](https://github.com/marko-js/marko/pull/1294)
- Remove redundant portion of keys for `<macro>` tags within `<for>` loops. [#1295](https://github.com/marko-js/marko/pull/1295)

### 4.16.1

- Fix regression for `:no-update` on dynamic tag html attributes. [#1292](https://github.com/marko-js/marko/pull/1292)

### 4.16.0

- Add `<marko deprecated-no-create-or-input-for-top-level-hydrate />` option to revert to pre `4.9.0` hydrate behavior. [#1289](https://github.com/marko-js/marko/pull/1289)

## 4.15.x

### 4.15.6

- Fix regression in older browsers caused by using `string.startsWith` in the runtime code.

### 4.15.5

- Allow syntax that Marko does not understand (but esprima does) to pass through in the arguments syntax. [#1286](https://github.com/marko-js/marko/pull/1286)
- Fix issue with `<title>` inside of an `<svg>` using the wrong namespace. [#1284](https://github.com/marko-js/marko/pull/1284)

### 4.15.4

- Forward errors from `<await client-reorder>` to the parent out to prevent potential unhandled rejections. [#1275](https://github.com/marko-js/marko/pull/1275)

### 4.15.3

- Fix false positive deprecation message for legacy nested tag syntax. [#1271](https://github.com/marko-js/marko/pull/1271)

### 4.15.2

- Improve the webpack server-bundling experience by guarding a legacy (lasso-specific) api that uses a dynamic require and causes a warning to be emitted. [#1267](https://github.com/marko-js/marko/pull/1267)

### 4.15.1

- Improve support for using raw functions as event handlers by not outputing `data-marko` content for components that will rerender in the browser. [#1262](https://github.com/marko-js/marko/pull/1262)

### 4.15.0

The most notable change here is to the `<for>`, `<macro>` and `<await>` core tags. These tags previously each relied on custom syntax to implement an API that was not possible to do in userland when they were introduced. Generic solutions for these problems has arrived in the form of [attribute tags](https://markojs.com/docs/syntax#attribute-tag) and [tag parameters](https://markojs.com/docs/syntax#parameters).

With these new features in place and currently available in userland we set out to normalize these existing tags, hopefully making the learning process for Marko a little easier, and also promoting the use of these new features. We've also spent time formalizing some best practices, and highlighting this new syntax in the documentation on the [markojs.com](https://markojs.com) website.

The existing syntax will continue to be supported until Marko 5 and will currently log a deprecation warning. For these deprecations and most others you can automatically migrate existing code using the [marko migrate](https://github.com/marko-js/cli/blob/master/packages/migrate/README.md) cli tool.

- Updated documentation with guides and changes to syntax/core tags. [#1260](https://github.com/marko-js/marko/pull/1260)
- Modernize the [`<for>` tag](https://markojs.com/docs/core-tags#for). [#1238](https://github.com/marko-js/marko/pull/1238)
- Modernize the [`<await>` tag](https://markojs.com/docs/core-tags#await). [#1244](https://github.com/marko-js/marko/pull/1244)
- Modernize the [`<macro>` tag](https://markojs.com/docs/core-tags#macro). [#1227](https://github.com/marko-js/marko/pull/1227)
- Deprecated legacy top level imports (jquery/ready) and compiler option tags (recommended to use marko.json instead). [#1258](https://github.com/marko-js/marko/pull/1258)
- Modern arguments support for the dynamic tag. [#1259](https://github.com/marko-js/marko/pull/1259)
- Improves parsing inside of the `<html-comment>` tag to support the same style of content as actual html comments. [#1261](https://github.com/marko-js/marko/pull/1261)
- Ignore only whitespace content inside of concise mode tags (including `class` and `style`) which would previously error. [#1256](https://github.com/marko-js/marko/pull/1256)
- Fixes a regression with passing a string literal as a `${dynamic}` attribute and add a deprecation warning. [#1257](https://github.com/marko-js/marko/pull/1257)

## 4.14.x

### 4.14.25

- Fix regression with non standard template literals (`"stuff ${placeholder}"`) that have escaped content such as newlines [#1254](https://github.com/marko-js/marko/pull/1254)

### 4.14.24

- Fix regression in `<await>` that caused flushing to not occur in all cases [#1252](https://github.com/marko-js/marko/pull/1252)

### 4.14.23

- Fix warning that `"marko"` was using deprecated features. [#1250](https://github.com/marko-js/marko/pull/1250)
- Improve code optimization for conditional `@nested` tags. [#1249](https://github.com/marko-js/marko/pull/1249)

### 4.14.22

- Fix issue with `no-update` not moving preserved items [#1247](https://github.com/marko-js/marko/pull/1247).
- Fix regression with include tag migration where `<include(data())>` has side effects. [#1246](https://github.com/marko-js/marko/pull/1246)
- Treat importing tags the same as using them in the template (uses `load` api instead of `require` when configured). [#1245](https://github.com/marko-js/marko/pull/1245)
- Gracefully handle async client-reorder when nodes are missing during hydrate. [#1243](https://github.com/marko-js/marko/pull/1243)

### 4.14.21

- Update `htmljs-parser` to improve parsing regexes [htmljs-parser #61](https://github.com/marko-js/htmljs-parser/pull/61)

### 4.14.20

- Add new `<tag|params|>` support and migrator for old syntax/flag [#1236](https://github.com/marko-js/marko/pull/1236)
- Remove unneeded deprecation warning when using `component` within a template [#1235](https://github.com/marko-js/marko/pull/1235)

### 4.14.19

- Fixes walking into some AST nodes which was causing some migrations to not be as effective [#1233](https://github.com/marko-js/marko/pull/1233)

### 4.14.18

- Fixes [#1230](https://github.com/marko-js/marko/issues/1230) - regression with include tag migration outputing invalid identifiers [#1231](https://github.com/marko-js/marko/pull/1231)
- Add migration for legacy nested tag syntax [#1129](https://github.com/marko-js/marko/pull/1129)

### 4.14.17

- Fixes [#1219](https://github.com/marko-js/marko/issues/1219) - transitive widget getEl and events [#1225](https://github.com/marko-js/marko/pull/1225)
- Importing a marko template adds it to tags meta (fixes regression with `<include>` tag) [#1226](https://github.com/marko-js/marko/pull/1226)

### 4.14.16

- Add migration for non-standard template literals. [#1224](https://github.com/marko-js/marko/pull/1224)
- Fix regression with dynamic attribute migration. [#1223](https://github.com/marko-js/marko/pull/1223)

### 4.14.15

- Improve migrating `widget` references to `component` in attributes. [#1220](https://github.com/marko-js/marko/pull/1220)

### 4.14.14

- Fix regression with `eval`ing class names in debug mode. [#1218](https://github.com/marko-js/marko/pull/1218)

### 4.14.13

- Support file name migrations with Marko migrate. [#1216](https://github.com/marko-js/marko/pull/1216)
- Skip `id:scoped` when migrating w-id for custom tags. [#1217](https://github.com/marko-js/marko/pull/1217)

### 4.14.12

- Add migrator for `w-config` attribute. [#1214](https://github.com/marko-js/marko/pull/1214)
- Add migrator for and deprecate `unless` tag/directive. [#1210](https://github.com/marko-js/marko/pull/1210)

### 4.14.11

- Fix regression with `w-body` tag. [#1213](https://github.com/marko-js/marko/pull/1213)

### 4.14.10

- Add migrator for `ref` attribute. [#1207](https://github.com/marko-js/marko/pull/1207)
- Fix regression with `var` tag and `w-body/include` tags. [#1212](https://github.com/marko-js/marko/pull/1212)

### 4.14.9

- Add migrator for layout tags and include tag/directive. [#1206](https://github.com/marko-js/marko/pull/1206) & [#1204](https://github.com/marko-js/marko/pull/1204)
- Add migrator for `<script template-helpers>` and `<script marko-init>`. [#1209](https://github.com/marko-js/marko/pull/1209)

### 4.14.8

- Add migrator from w-body to dynamic tag. [#1199](https://github.com/marko-js/marko/pull/1199)
- Add migrator from dynamic attributes to spread attributes. [#1202](https://github.com/marko-js/marko/pull/1202)

### 4.14.7

- Fix regression for `widget.elId` migration. [#1198](https://github.com/marko-js/marko/pull/1198)

### 4.14.6

- Add a whitelist of files to publish to NPM. [#1197](https://github.com/marko-js/marko/pull/1197)

### 4.14.5

- Add `getTemplateData` migrator. [#1195](https://github.com/marko-js/marko/pull/1195)
- Add migrators for most of the `w-*` attributes. [#1190](https://github.com/marko-js/marko/pull/1190)
- Add basic legacy widget migration. [#1192](https://github.com/marko-js/marko/pull/1192)

### 4.14.4

- Fix regression with `setProps` on legacy compatibility layer. [#1193](https://github.com/marko-js/marko/pull/1193)

### 4.14.3

- Move `w-on` compatibility to the migrate stage. [#1186](https://github.com/marko-js/marko/pull/1186)
- Legacy compatibility (v3) improvements. [#1189](https://github.com/marko-js/marko/pull/1189)
- Specially handle template literals in templates. [#1188](https://github.com/marko-js/marko/pull/1188)

### 4.14.2

- Convert the `<async-fragment>` transformer into a migrator. [#1185](https://github.com/marko-js/marko/pull/1185)

### 4.14.1

- Fix regression causing some parsed javascript nodes to be omitted from output. [#1184](https://github.com/marko-js/marko/pull/1184)

### 4.14.0

- Add migration stage, deprecate rendering with `out`, deprecate control-flow directive as attributes. [#1180](https://github.com/marko-js/marko/pull/1180)
- parse = parseRaw + normalize [#1179](https://github.com/marko-js/marko/pull/1179)
- parse nonstandard string with placeholder to TemplateLiteral node, transpile template literals. [#1179](https://github.com/marko-js/marko/pull/1179)
- add new parse api

## 4.13.x

### 4.13.13

- Fix regression: parsing of `if` statements without braces (in scriptlets & otherwise). [#1175](https://github.com/marko-js/marko/pull/1175)
- Fix regression: `<var>` and `<assign>` tags with non-standard placeholders in normal string attributes. [#1176](https://github.com/marko-js/marko/pull/1176)

### 4.13.12

- `<invoke>` tag translates to modern Marko scriptlet (or dynamic tag). [#1165](https://github.com/marko-js/marko/pull/1165)
- `<assign>` tag translates to modern Marko scriptlet. [#1158](https://github.com/marko-js/marko/pull/1158)
- Imperative rendering in scriptlets translates to modern Marko dynamic tag. [#1174](https://github.com/marko-js/marko/pull/1174)

### 4.13.11

- Add spread attribute optimization, fix issue with spreading non objects. [#1171](https://github.com/marko-js/marko/pull/1171)
- Move `#` to the start of `:scoped` attributes (allows for `href:scoped="#name"`). [#1172](https://github.com/marko-js/marko/pull/1172)

### 4.13.10

- Adds a hidden api used to make [@marko-tags/context](https://github.com/marko-js/tags/tree/master/tags/context) possible. [#1168](https://github.com/marko-js/marko/pull/1168)

### 4.13.9

- Improve support for [arc]() by normalizing file system names with square brackets. [#1166](https://github.com/marko-js/marko/pull/1166)

### 4.13.8

- Quick patch for `4.13.7` that removes a `let` assignment. [#1153](https://github.com/marko-js/marko/pull/1153)

### 4.13.7

- Prevent treating components with tag params being treated as implicit components. [#1149](https://github.com/marko-js/marko/pull/1149)

### 4.13.6

- Prevent mutating component input when using a single spread attribute with repeated @tags. [#1142](https://github.com/marko-js/marko/pull/1142)
- Fix for include tag hydration when transcluded. [#1143](https://github.com/marko-js/marko/pull/1143)

### 4.13.5

- Add additional reference to fragment nodes which resolves an issue with IE. [#1130](https://github.com/marko-js/marko/pull/1130)

### 4.13.4

- Remove Object.assign calls in the browser. [#1120](https://github.com/marko-js/marko/pull/1120)

### 4.13.3

- Propagate errors to express automatically with the `res.marko` api. [#1119](https://github.com/marko-js/marko/pull/1119)
- Support multi line import statments. [#1118](https://github.com/marko-js/marko/pull/1118)

### 4.13.2

- Allow discovering tags where the template name matches the directory name [#1117](https://github.com/marko-js/marko/pull/1117):

```
components/
  tag-name/
    tag-name.marko
    tag-name.style.css
```

### 4.13.1

- Remove es2015 features from runtime. [#1115](https://github.com/marko-js/marko/pull/1115)

### 4.13.0

#### PR #1094

**Introducing HTMLFragment**

- Updates the diffing algorithm to use an HTMLFragment node as an abstraction rather than keeping track of startNode and endNode all throughout the diffing algorithm.
- Uses the HTMLFragment for the `<${dynamic}>` tag and `<include>` tags to preserve server-rendered content for which the `renderBody` is not available in the browser.

**Changes to keys**

- Component ids are based on the resulting parent tree (not the owner tree). This means we cannot rely on the ids in the global lookup, so component key/refs are now also stored on the component instance.
- Autokeyed elements are now stored on the parent rather than the owner. User assigned key/refs are still stored on the owner component. Because of this, user assigned keys are now prefixed to differentiate them from autokeys. This also has the benefit that assigning numeric keys can no longer conflict with the autokeys.
- Static node trees are now only auto assigned a key for the top-level node (instead of all nodes). This is because:
  - When updating, only the top-level node is considered.
  - When static nodes are hoisted out of the render method, they are not associated with the owner component

**Changes to Hydration**

- Server comment starting markers now have the component's key serialized so the component can be attached to its owner
- Server comment markers no longer have the id on the closing marker, it is stack based.
- Normalize differences between hydration and client-rendering, so post mount the DOM looks the same regardless of whether a component was server or client rendered.

## 4.12.x

### 4.12.4

- Don't render invalid attribute names on the server [#1103](https://github.com/marko-js/marko/pull/1103)

### 4.12.3

- Removes extra parentheses in output javascript for expressions that Marko does not understand.

### 4.12.2

- Fixes automatic keying of elements/components in `for()` attribute loops

### 4.12.1

- Fix #1022 - transcluded keys don't match, stateful component not preserved [#1086](https://github.com/marko-js/marko/pull/1086)

### 4.12.0

- Tag params [#1076](https://github.com/marko-js/marko/pull/1076)
- Style arrays [#1082](https://github.com/marko-js/marko/pull/1082)
- Fix #1075 - cannot compile dynamic tag at root with user key [#1081](https://github.com/marko-js/marko/pull/1081)
- Fix #1078 - mutating spread attributes [#1080](https://github.com/marko-js/marko/pull/1080)

## 4.11.x

### 4.11.5

- Add fallback location for compile-time deprecation warnings

### 4.11.4

- Fixes an issue with scoped attributes automatically setting keys in a problematic way [#1069](https://github.com/marko-js/marko/pull/1069)
- Fixes #1059 and #1052 - `Cannot read property 'nextSibling' of null`

### 4.11.3

- Fixes #952
- Fixes automatic keying of elements/components in `<for>` loops

### 4.11.2

- Fixes another regression in the `<${dynamic}>` tag where `dashed-case` attributes were being converted to `camelCase` when rendering html elements.

### 4.11.1

- Fixes a regression in `<${dynamic}>` tags for object/array class/style attributes:
  ```marko
  $ const style = { color:'blue' };
  <${tagName} style=style/>
  ```
- Allows dynamic attributes defined using `...spread` to include object/array class/style [#933](https://github.com/marko-js/marko/pull/933):
  ```marko
  $ const attrs = { style:{ color:'blue' } };
  <tag ...attrs/>
  ```
- Fixes issue where object/array class/style attributes could not be used with `...spread` [#1007](https://github.com/marko-js/marko/pull/1007):
  ```marko
  $ const attrs = {};
  <tag class=["oops"] ...attrs/>
  ```

### 4.11.0

- Implement #880: `<${dynamic}>` tag
- `<include>` should be considered deprecated. Formal deprecation warning to come.

## 4.10.x

### 4.10.1

- Fix issue with calling `require('marko/components').init(components)` multiple times.

### 4.10.0

- Fix #1049 Fix documentation urls on the website.

## 4.9.x

### 4.9.7

- Fix #1038 Legacy compatibility dirty check returning false positives.

### 4.9.6

- Fix #1008 Spread attribute now supports functions (`..attrs()`) [#1029](https://github.com/marko-js/marko/pull/1029)

### 4.9.5

- Fix `onBeforeUpdate` timing for legacy component layer [#1027](https://github.com/marko-js/marko/pull/1027)

### 4.9.4

- Fix breaking older browsers with es6 object shorthand notation [bc0e91d5](https://github.com/marko-js/marko/commit/bc0e91d517d7b8de484c745a5734f15347ed0d26)

### 4.9.3

- Fix import-var compilation when there are no explicit attributes [#1002](https://github.com/marko-js/marko/pull/1002)

### 4.9.2

- Fixes collisions with multiple Marko runtimes on the same page. [#1019](https://github.com/marko-js/marko/pull/1019)
- Switch to using prettier and eslint. [#1016](https://github.com/marko-js/marko/pull/1016)

### 4.9.1

- Fixes an issue with keyed elements not getting properly removed. [#1013](https://github.com/marko-js/marko/pull/1013)

### 4.9.0

- Fixes related to hydration, split components, and the legacy compatibility layer [#1010](https://github.com/marko-js/marko/pull/1010)

- Fix paths for vdom dependencies [#1011](https://github.com/marko-js/marko/pull/1011)

## 4.8.x

### 4.8.0

- Add `once-[event]` directive [#990](https://github.com/marko-js/marko/pull/990)

- Improve testing setup [#989](https://github.com/marko-js/marko/pull/989)

## 4.7.x

### 4.7.5

- Update docs for advanced attribute definition [#968](https://github.com/marko-js/marko/pull/968)

- Improve error message for async rendering [#958](https://github.com/marko-js/marko/pull/958)

### 4.7.4

- Make jQuery optional for legacy components [#951](https://github.com/marko-js/marko/pull/951)

### 4.7.3

- Prevent onRender running on the server for legacy widgets

### 4.7.2

- Fixes [#946](https://github.com/marko-js/marko/issues/946) - don't put legacy init code in a separate lasso bundle

- Fixes allowing conditionally binding to different roots in a legacy widget [#944](https://github.com/marko-js/marko/pull/944)

### 4.7.1

- Fix issue with multiple top level elements being removed twice. [#940](https://github.com/marko-js/marko/pull/940)

### 4.7.0

- Add jQuery legacy compatibility layer support [#937](https://github.com/marko-js/marko/pull/937)

- Reorganize Marko tests [#934](https://github.com/marko-js/marko/pull/934)

- Switch to using jsdom in test suite [#935](https://github.com/marko-js/marko/pull/935)

- Decouple component hydration from Lasso [#929](https://github.com/marko-js/marko/pull/929)

## 4.6.x

### 4.6.0

- Fixes [#914](https://github.com/marko-js/marko/issues/914) and [#920](https://github.com/marko-js/marko/issues/920) -
  Resolves top-level component bugs

- Setup `marko.load()` to prefer precompiled templates from [marko-cli](https://github.com/marko-js/marko-cli)

- Various compiler changes to improve [marko-migrate](https://github.com/marko-js/marko-migrate)

- Fixes [#916](https://github.com/marko-js/marko/pull/916) - Add Marko debug mode.
  Adds babel plugin to remove and statically evaluate 'MARKO_DEBUG' literals for
  adding deprecation warnings and hints for the runtime without a performance
  penalty for production builds.

## 4.5.x

### 4.5.6

- Fixes [#909](https://github.com/marko-js/marko/issues/909) - Fix condition preventing bubbling DOM events from properly being attached to a component.

### 4.5.5

- Add 10 Awesome Marko Features article to documentation

### 4.5.4

- Fixes [#904](https://github.com/marko-js/marko/issues/904) - The loop status variable is not compiling when the equal sign is padded in spacing

### 4.5.3

- Fixes [#903](https://github.com/marko-js/marko/issues/903) - Special unicode chars (\u2028 and \u2029) need to be escaped if within script tag

### 4.5.2

- Fixes [#899](https://github.com/marko-js/marko/issues/899) - Keyed element could be incorrectly removed after DOM diffing/patching in case of HTML element mismatch for elements with the same key. [PR #900](https://github.com/marko-js/marko/pull/900)

### 4.5.1

- Fixes [#893](https://github.com/marko-js/marko/issues/893) - Keyed element could be incorrectly removed after DOM diffing/patching in case of HTML element mismatch for elements with the same key. [PR #894](https://github.com/marko-js/marko/pull/894) by [@westtrade](https://github.com/westtrade)

### 4.5.0

Summary of changes across all beta releases for the `4.5.0` release:

- Fixes [#886](https://github.com/marko-js/marko/issues/886) - Write component initialization code when async out and all of its nested async outs finish
- Fixes [#854](https://github.com/marko-js/marko/issues/854) - Make every .marko file a UI component ([PR #855](https://github.com/marko-js/marko/pull/855))
- Added support for the `:scoped` modifier on attributes and deprecated `:key`:

```marko
<label for:scoped="name">Name</label>
<input id:scoped="name" value="Frank"/>
```

- Fixes [#817](https://github.com/marko-js/marko/issues/817) - Support dynamic root elements
- Marko no longer attaches `id` attributes to elements for purposes of keyed matching
  - Keyed elements are maintained in an internal, per-component lookup
- Keys are now assigned to all custom tags and HTML elements at compile-time to improve reliability and performance of DOM diffing
- Optimized internal bookkeeping required during rendering a UI component tree (no more UI component stack)
- DOM diffing/patching changes:
  - Significant performance improvements
  - morphdom is now UI component-aware

### 4.5.0-beta.3

- Fixes [#854](https://github.com/marko-js/marko/issues/854) - Make every .marko file a UI component ([PR #855](https://github.com/marko-js/marko/pull/855))

### 4.5.0-beta.2

- Add ids for any key when component.elId/getElId is used as an attribute value
- Use indexOf instead of includes to support Node 4
- [docs] Fixes [#841](https://github.com/marko-js/marko/issues/841) - `docs/components.md` refers to deprecated "data" variable [#842](https://github.com/marko-js/marko/pull/842)

### 4.5.0-beta.1

- Add back (legacy) support for component.elId + key in template
- Fixes [#837](https://github.com/marko-js/marko/issues/837) - Update esprima to the latest to support async/await and ES2017 inside of components. ([PR #839](https://github.com/marko-js/marko/pull/839))
- Fixes key/scope for attributes that have dashes in the name

### 4.5.0-beta.0

- Fixes [#817](https://github.com/marko-js/marko/issues/817) - Support dynamic root elements
- Marko no longer attaches `id` attributes to elements for purposes of keyed matching
  - Keyed elements are maintained in an internal, per-component lookup
- Keys are now assigned to all custom tags and HTML elements at compile-time to improve reliability and performance of DOM diffing
- Optimized internal bookkeeping required during rendering a UI component tree (no more UI component stack)
- DOM diffing/patching changes:
  - Significant performance improvements
  - morphdom is now UI component-aware

## 4.4.x

### 4.4.28

- fix undefined reference error in Component.js
- Increase mocha timeout to avoid CI build's failing [#821](https://github.com/marko-js/marko/pull/821)

### 4.4.27

- Add ability to update globals by setting new input.
- [docs] Remove unneeded command from installation docs
- [docs] Update installing.md

### 4.4.26

- Add better interop for importing modules with default exports [#803](https://github.com/marko-js/marko/pull/803)

### 4.4.25

- Fixes #778 - Fix Marko compiler generating incorrect path for requires on Windows.

### 4.4.24

- [docs] Update installing.md

### 4.4.23

- Fixes #796 - Fix events for event targets that are SVGElementInstance types in IE11.
- Used shortcut for escapeAtTags;
- Added `escapeAtTags` options in order to render `<@tags>` as they are;
- simplify a condition judgement in components-jquery
- Fixes #790 - Class tag should not allow nested body content.
- Update `compile/index.js` test description
- Update handleRootNodes.js [#747](https://github.com/marko-js/marko/pull/747)
- [docs] Fix reference to lifecycle section in docs.

### 4.4.22

- Fixes #784 - Fix compiled preserve-attrs path.
- [testing] Fix express tests [#779](https://github.com/marko-js/marko/pull/779)
- [docs] Update webpack.md

### 4.4.21

- Updated description in `package.json`

### 4.4.20

- update bindComponentVar to use dynamic location
- updating location of bindComponent helper

### 4.4.19

- [testing] Fix key suffix test assertions.
- Address key suffix feedback. Additional tests.
- [morphdom] Removed bad and unhelpful optimization to avoid infinite loops
- [morphdom] Ensure `onBeforeNodeDiscarded` is only called once by looking to see if the node is still attached.
- [morphdom] Infinite loop fix in morphdom
- Fixes #761 - component.elId() does not work on the server
- Fixes #755 - Allow diffing of HTML, head, and body. [#756](https://github.com/marko-js/marko/pull/756)
- [docs] Updated component docs
- [docs] Use relative link for image
- [testing] User default npm version for each Node.js version

### 4.4.18

- Fixes #749 #690 - Do not rely on root node having an ID on rerender and properly handle style root nodes.

### 4.4.17

- Put package (`browser.json`) deps before others and parent deps before child deps [#750](https://github.com/marko-js/marko/pull/750)
- [docs] Fix typo in redux.md
- [docs] Add redux document to structure.json
- [docs] Add doc describing how to use Redux with Marko.

### 4.4.16

- Fix duplicate body variable

### 4.4.15

- Fixes #739 - Should not attempt to check instanceof of type Map if it does not exist in the browser.
- Added build scripts

### 4.4.14

- Fixes issue with renderToString not rendering text nodes

### 4.4.13

- Fixes #721 - Add a Code of Conduct
- Fixes #655 - Implement renderToString in the browser.

### 4.4.12

- Fixes #695 - Always ignore unrecognized tags for XML files when using the compiler.
- Fixes #705 - Throw error when the root HTML element is a component and has a dynamic id attribute.
- [testing] Additional test for root node with dynamic id of a component with a component.js file.

### 4.4.11

- Fixes #728 - Do not use module keyword because webpack compiles it to a custom object.
- Fixes #719 - Support Express 4 and Express 5.
- fixes #658 by removing empty style blocks [#715](https://github.com/marko-js/marko/pull/715)
- fixes #688 - add reference to browser.json in meta dependencies
- [docs] Fix broken link
- [docs] Fix Marko syntax in docs causing compilation errors on the website.
- [docs] Change pixels to percent in doc images.
- [testing] Purge express cache so that express tests both use correct module versions.

### 4.4.9

- Revert "Fixes #705 - Throw error when the root HTML element has a dynamic id …"
- [testing] Only run Node 4, 6, & 8 in travis

### 4.4.8

- [docs] Clean up why-is-marko-fast.md
- [docs] Clean up marko-vs-react.md

### 4.4.7

- Add silent option to browser-refresh and hot-reload
- Check id attribute for Literal. Update error message to include error page.
- Fixes #705 - Throw error when the root HTML element has a dynamic id attribute.
- [docs] Clean up components.md
- [docs] Fix typo in webpack.md
- [testing] give extra time for test timing out in travis
- [testing] run tests on node 8
- [testing] ignore test-dist from coverage

### 4.4.6

- Fixes #693 - [SSR] Improved handling of top-level UI components with renderBody func
- Switching to using `prepublish` with npm@5

### 4.4.3

- Use parent module to require express patch [#701](https://github.com/marko-js/marko/pull/701)
- [docs] Reference app should point to "marko-lasso" because "ui-components-playground" does not contain lasso
- [docs] Add articles section to docs.

### 4.4.2

- Build fixes related to compiler

### 4.4.0

- Improve no-update-if condition check
- Compatibility improvements for Try Online
- Code size reduction
- Introduced src/ and dist/ folders for optimized production builds
- Fixes #695 - Default to ignoring unrecognized tags for XML files.

## 4.3.x

### 4.3.1

- Add basic test for ensuring that res.marko returns a promise.
- enable res.marko can catch a error safe

### 4.3.0

- [compiler] Added more control over how attributes are targeted to props
- Don't add root markers to tags that don't produce output
- [docs] Added docs for Marko + Huncwot integration
- [AST] Added `node.removeChildren()`
- Extend marko globals with defaults

### 4.3.0-beta.4

- Fixes #673 - Circular dependency is causing problems with Webpack

### 4.3.0-beta.3

- Changes related to #670 - Globals must be serialized earlier to allow early mount of UI components in
- [docs] Improved docs for SSR

### 4.3.0-beta.2

- Fixes for #670 - Add support for serialized globals and retain globals on re-render

## 4.2.x

### 4.2.8

- Bug: Fixes [#661](https://github.com/marko-js/marko/issues/661) - Component initialization code may end up in the wrong place
- Bug: Fixes [#668](https://github.com/marko-js/marko/issues/668) - Declarative event listeners are now allowed on the `<include>` tag

### 4.2.7

- Bug: Fixes [#650](https://github.com/marko-js/marko/issues/650) - The tag "await" does not support attribute "unless"
- Improvements to legacy state

### 4.2.6

- Bug: Fixes [#654](https://github.com/marko-js/marko/issues/654) - Bug: components implementing a `key` attribute break in Marko v4
- Improvements to legacy compatibility layer

### 4.2.5

- Improved support for UI components implemented using native JavaScript class in a separate file
- Improved how legacy layout tags are handled by Marko v4

### 4.2.4

- Bug: Fixes [#653](https://github.com/marko-js/marko/issues/653) - Event handlers are no longer bound in edge case

### 4.2.3

- Bug: Fixes [#649](https://github.com/marko-js/marko/issues/649) - New line always added to `textarea` and other elements for single line/delimited HTML blocks

### 4.2.2

- Bug: Fixes [#648](https://github.com/marko-js/marko/issues/648) - Style attribute object and lengths not handled properly

### 4.2.1

- Bug: Fixed [#644](https://github.com/marko-js/marko/issues/644) - Attribute not rendered by Marko is not preserved if component first rendered on the server
- [Performance] Escaping is not needed for the `data-marko` attribute

### 4.2.0

- Bug: Fixed [#629](https://github.com/marko-js/marko/issues/629) - VDOM: Rendering unescaped HTML produces non-functioning HTML input controls
- Bug: Fixed [#634](https://github.com/marko-js/marko/issues/634) - writeInitComponentsCode is not a function
- Enhancement: Added support to allow improved precompiling of templates
- Enhancement: Fixed [#636](https://github.com/marko-js/marko/issues/636) - Add error when macro with duplicate name is found
- Performance: Optimized diffing/patching to avoid indexing entire tree to find keyed elements
- Performance: Optimized how event handlers are attached to VDOM nodes (separated from attributes)

## 4.1.x

### 4.1.3

- Bug: Fixed losing cursor position in Edge (see [morphdom PR #100](https://github.com/patrick-steele-idem/morphdom/pull/100) by [@zastavnitskiy](https://github.com/zastavnitskiy))
- Bug: Ignore `xmlns` attributes when virtualizing real DOM nodes (needed when inserting an HTML string when rendering to a VDOM)

### 4.1.2

- Bug: Fixed [#623](https://github.com/marko-js/marko/issues/623) - Uncaught TypeError: `toEl.$__hasAttribute` is not a function
- Bug: Fixed [#619](https://github.com/marko-js/marko/issues/619) - Deprecated `constructor()` for UI component classes

### 4.1.1

- Added `"use strict";` to restore Node.js compatibility for Node.js v4 and v5

### 4.1.0

- Bug: Fixes [#611](https://github.com/marko-js/marko/issues/611) - Component IDs are not being assigned correctly when intermediate non-component is rendered
- Performance: SVG namespaced elements are now resolved determined at compile-time
- Performance: Merged in `morphdom` and optimized for Marko
- Performance: Optimized diffing/patching of elements with only simple attributes in the following set: `class`, `id` and `style`

## 4.0.x

### 4.0.1

- Bug: Fixes [#612](https://github.com/marko-js/marko/issues/612) - Compile error when class method has empty `return`
- Bug: Fixes [#604](https://github.com/marko-js/marko/issues/604) - `no-update` attributes error when first rendered on the server
- Bug: Fixes [#608](https://github.com/marko-js/marko/issues/608) - Component losing `renderBody` input on a particular redraw
- Enhancement: Fixes [#606](https://github.com/marko-js/marko/issues/606) - named single-file component doesn't work

### 4.0.0

- Marko v4! [Release Announcement](https://medium.com/@mlrawlings/marko-4-0-is-here-837884c5f60d)

# 3.x

## 3.13.x

### 3.13.2

- Fixed [#478](TagLookup fails when merging taglibs) - TagLookup fails when merging taglibs

### 3.13.1

- Fixes [#465](https://github.com/marko-js/marko/issues/465)

### 3.13.0

## 3.12.x

### 3.12.0

- Added warnings for using render methods when you want string output ([Pull Request #450](https://github.com/marko-js/marko/pull/450) by [@mlrawlings](https://github.com/mlrawlings))

## 3.11.x

### 3.11.8

- Fixes [#382](https://github.com/marko-js/marko/issues/382) - Local variable for tag should have prefix or suffix to avoid conflict

### 3.11.7

- Fixes [#381](https://github.com/marko-js/marko/issues/381) - `$global` broken when using `template.stream()`

### 3.11.6

- Internal change: `AsyncWriter` → `AsyncStream`

### 3.11.5

- (no changes)

### 3.11.4

- Update to `async-writer@2`

### 3.11.3

- Silently ignore errors when parsing tag definition code inlined in JavaScript

### 3.11.2

- Fixed [#318](https://github.com/marko-js/marko/issues/318) - Use compiler options passed to require hook to configure marko globally

```javascript
require("marko/node-require").install({
  compilerOptions: {
    writeToDisk: false,
  },
});
```

### 3.11.1

- Fixed [#370](https://github.com/marko-js/marko/issues/370) - HTML characters in loop separator string should not be escaped

### 3.11.0

- Introduced the `<include-html(path)>` tag for including static HTML:

```xml
<include-html('./foo.html')>
```

## 3.10.x

### 3.10.1

- Fixed [#44](https://github.com/marko-js/marko/issues/44) - Webpack compatibility fixes. Also see [marko-loader](https://github.com/marko-js/marko-loader) (A marko loader for webpack)

### 3.10.0

- Fixed [#357](https://github.com/marko-js/marko/issues/357) - Deprecate `empty`/`notEmpty` in Marko v3

## 3.9.x

### 3.9.4

- Fixed [#355](https://github.com/marko-js/marko/issues/355) - `status-var`/`separator` options not handled when looping over properties
- Fixed [#354](https://github.com/marko-js/marko/issues/354) - regular expressions used in attribute values are not being handled correctly
- Fixed [#353](https://github.com/marko-js/marko/issues/353) - `body-only-if` attribute does not work with custom tags (only HTML tags)

### 3.9.3

- Upgraded to `raptor-util@^2`

### 3.9.2

- Fixed [#327](https://github.com/marko-js/marko/issues/327) - alt attribute with empty string should be allowed ([Pull Request #350](https://github.com/marko-js/marko/pull/350) by [@mlrawlings](https://github.com/mlrawlings))

### 3.9.1

- Fixed [#348](https://github.com/marko-js/marko/issues/348) - exclude all `*.orig` and other files from published npm package

### 3.9.0

- Fixed [#231](https://github.com/marko-js/marko/issues/231) - Allow <assign count++>
- Fixed [#345](https://github.com/marko-js/marko/issues/345) - Whitespace preservation now applies to all deeply nested text nodes
- Fixed [#344](https://github.com/marko-js/marko/issues/344) - Introduced [defineRenderer](./docs/javascript-api.md#requiremarkodefinerenderer) for Marko
- Docs: Added docs for excluding directories from taglib discovery ([@mlrawlings](https://github.com/mlrawlings))
- Docs: Added docs for component autodiscovery ([@mlrawlings](https://github.com/mlrawlings))
- Docs: Added docs for passing a data object to a custom tag

## 3.8.x

### 3.8.1

- Fixed [#342](https://github.com/marko-js/marko/issues/342) - `await:finish` event not emitted for async fragments with client reorder and that complete synchronously

### 3.8.0

- Fixed [#329](https://github.com/marko-js/marko/issues/329) - Add autodiscover of components/ directory ([Pull Request #338](https://github.com/marko-js/marko/pull/338) by [@mlrawlings](https://github.com/mlrawlings))

## 3.7.x

### 3.7.4

- Fixed [#339](https://github.com/marko-js/marko/issues/339) - Tag transformers are not being applied to tags with a dynamic tag name (fixes [#146](https://github.com/marko-js/marko-components/issues/146) for Marko Components)

### 3.7.3

- Fixed [#332](https://github.com/marko-js/marko/issues/332) and [#333](https://github.com/marko-js/marko/issues/333) - Correct values for `literalUndefined` and `literalFalse` in the Builder API [@bkuri](https://github.com/bkuri)
- Fixed [#336](https://github.com/marko-js/marko/issues/336) - Upgraded to latest version of `minimatch`

### 3.7.2

- Fixed [#328](https://github.com/marko-js/marko/issues/328) - Improve error reporting when taglib/tag definition fails to load
- Additional change to disable escaping for dynamic `Text` nodes added to body of `<script>` tag to fix [issue #326](https://github.com/marko-js/marko/issues/326)

### 3.7.1

- Improved escaping within the `<script>` tag to fix [issue #322](https://github.com/marko-js/marko/issues/322). Special HTML characters will no longer be escaped within the context of the `<script>` tag since browsers do not decode HTML entities within the `<script>` tag. Instead, only the ending `</script>` tag sequence is escaped using JavaScript string escaping sequences.

### 3.7.0

- Made change to make configuration a true singleton shared across all instances of `marko` loaded at runtime ([commit](https://github.com/marko-js/marko/commit/cd797322adf80f2890015de7b8f62301c2921a0a))

## 3.6.x

### 3.6.2

- Improved support for hot reloading by automatically disabling `assumeUpToDate` if hot reload is enabled. ([Pull Request #320](https://github.com/marko-js/marko/pull/320) by [@ianvonholt](https://github.com/ianvonholt))

### 3.6.1

- Fixed a bug that was causing transforms to be run on detached nodes. This was manifesting itself in the `<async-fragment>` to `<await>` transform if an `if()` attribute was present (or other core attributes that end up wrapping the tag it is defined on).

### 3.6.0

- Introduced a new and simpler `<await>` tag that should be used instead of the now deprecated `<async-fragment>` tag (see deprecation details below) ([Pull Request #312](https://github.com/marko-js/marko/pull/312) by [@mlrawlings](https://github.com/mlrawlings))

#### Deprecations

- Deprecated the `<async-fragment var="<var>" data-provider=<data-provider>>` tag in favor of the `<await(<var> from <data-provider>)>` tag:

OLD:

```xml
<async-fragment var="userInfo" data-provider=data.userInfoPromise>
    Hello ${userInfo.name}!
</async-fragment>
```

NEW:

```xml
<await(userInfo from data.userInfoPromise)>
    Hello ${userInfo.name}!
</await>
```

The `<await>` tag supports all of the attributes of the previous `<async-fragment>` tag except for `var` and `data-provider`:

```xml
<await(userInfo from data.userInfoPromise) name="userInfo" timeout=10000 client-reorder>
    Hello ${userInfo.name}!
</await>
```

Finally, the nested tags for providing content for the placeholder, error and timeout messages have been renamed accordingly:

```xml
<await(userInfo from data.userInfoPromise) client-reorder>
    <await-placeholder>
        This is alternate content while the async fragment is loading.
    </await-placeholder>
    <await-timeout>
        A timeout has occurred!
    </await-timeout>
    <await-error>
        A error has occurred!
    </await-error>

    Hello ${userInfo.name}!
</await>
```

## 3.5.x

### 3.5.1

- Fixes #316 - Autocomplete for tags is not updated when tag files updated despite clearing cache. This improves the [autocomplete-marko](https://github.com/marko-js/atom-autocomplete-marko) plugin for Atom.
- Fixes #314 - Remove hyphens from include props
- Deprecated:
  - Properties passed in using the `<include>` tag should not be access using hyphens.

For example, given the following template:

```xml
<include("./include-target.marko") first-name='Jane'/>
```

The `first-name` data should be accessed using the `firstName` property:

```javascript
var firstName = input.firstName;
// NOT: var firstName = input['first-name'];
```

### 3.5.0

- Added functionality to exclude specific directory or package from taglib finder ([Pull Request #309](https://github.com/marko-js/marko/pull/309) by [@oxala](https://github.com/oxala))

## 3.4.x

### 3.4.9

- Fixed [https://github.com/marko-js/marko/issues/307] - Marko concise syntax, with multiple class names ([Pull Request #308](https://github.com/marko-js/marko/pull/308) by [@mlrawlings](https://github.com/mlrawlings))

### 3.4.8

- Added support for an "enum" attribute value

### 3.4.7

- Async fragment improvements ([Pull Request #305](https://github.com/marko-js/marko/pull/305) by [@mlrawlings](https://github.com/mlrawlings))
  - Adds additional event info (finished/timedout) to the data emitted from <async-fragment> tags.
  - Ensures that renderBody() is not called again if the fragment has already finished (timed out).
  - Fixes `npm run test-async`
  - Removes a redundant `async-fragment` timeout related test

### 3.4.6

- Updated autocomplete information

### 3.4.5

- Fixes #304 - async-fragment-tag-transformer.js being loaded by PhantomJS
- Updated taglibs with additional information to support tooling
- Added [Michael Rawlings](https://github.com/mlrawlings) as a maintainer

### 3.4.4

- Fixes #303 - `addStaticVar` is not generating unique variable names correctly

### 3.4.3

- Improved validation for macros ([@mlrawlings](https://github.com/mlrawlings), [PR #300](https://github.com/marko-js/marko/pull/300))
- Added code coverage reporting ([@mlrawlings](https://github.com/mlrawlings), [PR #301](https://github.com/marko-js/marko/pull/301))

### 3.4.2

- Improved error reporting in cases when code generation fails ([@mlrawlings](https://github.com/mlrawlings))

### 3.4.1

- Additional tweaks for #298 - Always emit correct events for async fragments

### 3.4.0

- Fixes #298 - Always emit correct events for async fragments
- Updated docs

## 3.3.x

### 3.3.0

- Include async fragment name in the `asyncFragmentFinish` events ([@kprakasam](https://github.com/kprakasam))

## 3.2.x

### 3.2.0

- Fixes #286 - Add res.marko(templateData) for use with Express ([@mlrawlings](https://github.com/mlrawlings))

## 3.1.x

### 3.1.9

- Fixes #288 - Provide API for discovering custom tags and attributes for autocomplete/tooling purposes
- Documentation improvements

### 3.1.8

- Fixes #280 - Switch from jsonminify to strip-json-comments
- Updated docs for Koa and Hapi
- Additional tests for Node.js v6

### 3.1.7

- Fixes #274 - marko-compiler-options tag is not properly ended when using raw parsing (for prettyprint)

### 3.1.6

- Fixes #268 - this.write is not a function for empty ArrayExpression

### 3.1.5

- Fixes #262 - node-require module removes `.marko` extension from filenames in compiled code

### 3.1.4

- Fixes #267 - Shorthand CSS class name cannot be combined with object/array class names

### 3.1.3

- Fixed #266 - Hot reloading fails if original template is deleted

### 3.1.2

- Fixed error reporting when using `compiler.parseRaw()`
- Added test for #262

### 3.1.1

- Improved whitespace removal for text nodes directly below the root

### 3.1.0

- Fixes #254 - Allow preserve whitespace to be enabled at the global level

## 3.0.x

### 3.0.7

- Fixes #240 - Always trim start and end of template (even if preserveWhitespace is true)
- Fixes #260 - Circular custom tags causes infinite recursion when writeToDisk is set to false
- Minor internal cleanup

### 3.0.6

- Don't wrap exception in `parseJavaScript` if error object was not created by Esprima

### 3.0.5

- Fixes #257 - Placeholders don't render for out-of-order async fragments

### 3.0.4

- Fixes #256 - Convert attributes to title case if no attributes are declared for a custom tag
- Use `<noscript>` for out-of-order async fragment placeholders

### 3.0.3

- Make renderSync behave if no context was supplied ([PR #250](https://github.com/marko-js/marko/pull/250) by [@jsumners](https://github.com/jsumners))

### 3.0.2

- Store `tagDef` with `HtmlElement` node (needed for pretty printing)

### 3.0.1

- Docs: Fixed minor issues in docs
- Reintroduced support for the `MARKO_CLEAN` environment variable: `MARK_CLEAN=true node server.js`

### 3.0.0

- See: [What's New in Marko v3](http://markojs.com/docs/marko/what-is-new-marko-v3/)

# 2.x

## 2.8.x

### 2.8.4

- Fixes circular dependency issue between runtime/index.js and hot-reload/index.js

### 2.8.3

- Fixes circular dependency issue between runtime/index.js and hot-reload/index.js

### 2.8.2

- Fixes #203 - Incorrect behavior when attrs is used on a standard HTML tag with a tag def

### 2.8.1

- Fixes #202 - Pass along options to compiler when loading a template

### 2.8.0

- Added support for automatically discovering taglibs from installed packages that are scoped. ([PR #183](https://github.com/marko-js/marko/pull/183) by [@tropperstyle](https://github.com/tropperstyle))

### 2.8.3

- Fixes circular dependency issue between `hot-reload/index.js` and `runtime/index.js`

## 2.7.x

### 2.7.31

- Fixes #167 - Nested tags only work one level deep

### 2.7.30

- docs: don't exclude docs in .npmignore

### 2.7.29

- Fixes #161 - Nested tags with no body content are not handled correctly

### 2.7.28

- Fixes #140 - Also de-dupe cached taglibs in finder

### 2.7.27

- Make loading template from String template source easier:

```javascript
var template = marko.load(templatePath, "Hello $!{data.name}!");
```

_NOTE: Loading directly from source only works on the server_

See [Pull Request #153](https://github.com/marko-js/marko/pull/153)

### 2.7.26

- Use shorter relative paths in error messages

### 2.7.25

- Fixes #150 - Provide option to prevent writing compiled templates to disk. Example usage:

```javascript
require("marko/compiler").defaultOptions.writeToDisk = false;
```

NOTE: If you disable writing compiled templates to disk then it will be a little harder to debug errors in templates on the server since the stack trace will refer to a file that has not been written to disk.

For a more complete list of compiler options please see: http://markojs.com/docs/marko/javascript-api/#defaultoptions

### 2.7.24

- Fixes #140 - De-dupe taglibs by module name
- Documentation: Miscellaneous changes

### 2.7.23

- Fixed a typo for `rendererFunc` `in helpers.js` (commit: 0205a47f04911f34ca4d458970d710f81a143987)

### 2.7.22

- New language feature: [`unless` support added](http://markojs.com/docs/marko/language-guide/#unlesselse-ifelse)

### 2.7.21

- Automatically enable hot-reload and browser-refresh if launched using [browser-refresh](https://github.com/patrick-steele-idem/browser-refresh)

### 2.7.20

- Documentation: Miscellaneous changes

### 2.7.19

- Fixes #137 - adds support for dynamic HTML tag names

### 2.7.18

- Improvement: Better resolving of tag renderer
- Compiler: Fix to make compiler work in the browser

### 2.7.17

- Fixes #135 Allow "attrs" attribute on custom tags

### 2.7.16

- Improved handling of imports
- Better handling of loading taglibs with circular dependencies

### 2.7.15

- Handle circular taglib imports

### 2.7.14

- Fixes #131 - Recursively handle taglib imports

### 2.7.13

- Added a `.npmignore` file
- Fixed licensing header in source
- Documentation: improved docs for input.renderBody()
- Documentation: Miscellaneous changes

### 2.7.12

- Fixes #122 Don't allow invalid attributes when using shorthand
- Fixes #122 Typo in hasAttributes
- Fixes #127 - Make sure all possible input files are accounted for when checking if a compiled template is up-to-date
- Use `browser.json` files instead of `optimizer.json` files
- Documentation: Improved docs for async taglib
- Documentation: Added empty() and notEmpty() helpers to the readme
- Added Martin Aberer as a maintainer
- Documentation: Miscellaneous changes

### 2.7.11

- New logo!

### 2.7.10

- Fixes #118 Better error when parsing JSON file for tag
- Testing: More test cases related to empty attributes
- Documentation: Clarification for the Node.js require extension
- Documentation: doc reference for `getLength()` of loop `status-var`
- Documentation: Added reference to [sublime-marko](https://github.com/merwan7/sublime-marko) under the tools section.

### 2.7.9

- Fixes #109 - Allow `compiler.createNode('div')`
- Fixes #108 - Improve how the `MARKO_CLEAN` env variable is handled

### 2.7.8

- Minor documentation changes

### 2.7.7

- Allow `.html` extension for layouts (Fix for https://github.com/raptorjs/marko-layout/issues/2)

### 2.7.6

- Make require('marko/node-require').install() a noop in the browser

### 2.7.5

- Improvement: Allow `template-data` to be combined with other attributes on the `<include>` tag
- Documentation: Fixes #98 - docs for `<include template-data="...">`

### 2.7.4

- Fixes #96 - Allow relative, dynamic include paths

### 2.7.3

- Internal change: Additional test cases added for using promises with async fragments

### 2.7.2

- Fixes #73 - Prevent same taglib from being loaded multiple times

### 2.7.1

- Fixes #88 - Assign global data to the correct out

### 2.7.0

- Fixes [#27](https://github.com/raptorjs/marko/issues/27) - IE conditional comments (e.g., `<!--[if lt IE 9]><div><![endif]-->`) are automatically preserved. Previously, all HTML comments were stripped out when loading a template. For example:
- Added support for `<compiler-options comments="preserve"/>` to enable comments to preserved in a template. For example:

```xml
<compiler-options comments="preserve"/>
Hello
<!--This comment should be preserved-->
World
```

Output:

```xml
Hello
<!--This comment should be preserved-->
World
```

## 2.6.x

### 2.6.0

- Performance improvements
  - `'use strict';`
  - Optimized render code paths
- Code cleanup
- Compatibility fixes for Node.js 0.12
  - Bad: `fs.readFile(path, 'utf8')`
  - Good: `fs.readFile(path, {encoding: 'utf8'})`

## 2.5.x

### 2.5.0

- Fixes #78 - Custom Node.js require extension for Marko template files. Example usage:

```javascript
// Install the Node.js require extension in your application's main script (server-side only)
require("marko/node-require").install();

// Now you can require `*.marko` files just like any other JavaScript module
var template = require("./hello.marko");
var html = template.renderSync({ name: "Frank" });
```

- Compiled templates now export a loaded Template instance. In the previous version of marko, compiled templates exported a function that could be used to create a loaded Template instance.

## 2.4.x

### 2.4.3

- Fixes edge case: More precise regular expression for decoding HTML entities

### 2.4.2

- Internal: Fixes #75 Always assign the tag property to custom tag nodes

### 2.4.1

- Improvement to allow taglibs to be imported from other taglibs ([commit](https://github.com/raptorjs/marko/commit/73e9a3420a1bac3e2c201d4dcadf21c0701b5222))

### 2.4.0

- Added support for short-hand tags and attributes

Old `marko-taglib.json`:

```json
{
  "tags": {
    "my-hello": {
      "renderer": "./hello-renderer",
      "attributes": {
        "name": "string"
      }
    }
  }
}
```

Short-hand `marko-taglib.json`:

```json
{
  "<my-hello>": {
    "renderer": "./hello-renderer",
    "@name": "string"
  }
}
```

- Fixes #61 Simplify parent/child relationships

Marko now supports custom tags in the following format: `<parent_tag.nested_tag>`

Example usage:

```html
<ui-tabs orientation="horizontal">
  <ui-tabs.tab title="Home"> Content for Home </ui-tabs.tab>
  <ui-tabs.tab title="Profile"> Content for Profile </ui-tabs.tab>
  <ui-tabs.tab title="Messages"> Content for Messages </ui-tabs.tab>
</ui-tabs>
```

**_ui-tabs/marko-tag.json_**

```json
{
  "@orientation": "string",
  "@tabs <tab>[]": {
    "@title": "string"
  }
}
```

**_ui-tabs/renderer.js_**

```javascript
var template = require("marko").load(require.resolve("./template.marko"));

exports.renderer = function (input, out) {
  var tabs = input.tabs;

  // Tabs will be in the following form:
  // [
  //     {
  //         title: 'Home',
  //         renderBody: function(out) { ... }
  //     },
  //     {
  //         title: 'Profile',
  //         renderBody: function(out) { ... }
  //     },
  //     {
  //         title: 'Messages',
  //         renderBody: function(out) { ... }
  //     }
  // ]
  console.log(tabs.length); // Output: 3

  template.render(
    {
      tabs: tabs,
    },
    out,
  );
};
```

**_ui-tabs/template.marko_**

```html
<div class="tabs">
  <ul class="nav nav-tabs">
    <li class="tab" for="tab in data.tabs">
      <a href="#${tab.title}"> ${tab.title} </a>
    </li>
  </ul>
  <div class="tab-content">
    <div class="tab-pane" for="tab in data.tabs">
      <invoke function="tab.renderBody(out)" />
    </div>
  </div>
</div>
```

## 2.3.x

### 2.3.2

Fixes #66 - Allow circular dependencies when loading templates

### 2.3.1

- Testing framework changes
- Fixes #65 - Generated variable name is an empty string in some cases

### 2.3.0

- Fixes #53 Merge c-input with attr props

## 2.2.x

### 2.2.2

Fixes #60 Don't replace special operators for body functions

### 2.2.1

- Fixes #58 Added support for MARKO_CLEAN env variable (force recompile of all loaded templates). Example usage:

```bash
MARKO_CLEAN=true node run.js
```

- Code formatting: add spaces in var code

### 2.2.0

- Fixes #51 Allow body content to be mapped to a String input property
- Fixes #52 Remove JavaScript comments from JSON taglib files before parsing

## 2.1.x

### 2.1.6

- Fixes #50 Initialize the loader after the runtime is fully initialized

### 2.1.5

- Fixes #50 Ensure that all instances of marko have hot-reload and browser-refresh enabled

### 2.1.4

- Allowing complex var names (i.e. LHS) for the `<assign>` tag.

### 2.1.3

- Minor change: Slight improvement to code to resolve tag handler

### 2.1.2

- Minor change: Improve how renderer is resolved

### 2.1.1

- Fixes #48 name in marko-tag.json should override default name given during discovery

### 2.1.0

- Fixes #47 - Added support for "taglib-imports"

## 2.0.x

### 2.0.12

- Fixes #31 - Add support for providing prefix when scanning for tags
- Allow "code" to be a function that lazily evaluates to a code string during code generation

### 2.0.11

- Added method for custom node compilers to get access to the `escapeXml` function at runtime

### 2.0.10

- Fixes #39 - Added missing return when using hot-reload

### 2.0.9

- Fixed bad publish

### 2.0.8

- Better merging of tags when loading and merging taglibs

### 2.0.7

- Changes to avoid problems associated with the same taglib being found multiple times in the search path

### 2.0.6

- `renderBody` function is only added if tag has children

### 2.0.5

- Fixed #36 - Don't use `invokeBody()` in the cache taglib

### 2.0.4

- :exclamation: Fixed #36 - Deprecated - When using `<include>` with body content, nested body content is now passed in as `String` property named `body`. Old behavior: nested content would be passed in as a `Function` property named `invokeBody` that would return the `String` value of the nested content. `invokeBody()` has been deprecated.

### 2.0.3

- Fixed #36 - Don't use `invokeBody()` in test code and the HTML comments tag

### 2.0.2

- :exclamation: Fixed #36 - Deprecated `input.invokeBody()` in favor of `input.renderBody(out)`
- Fixed #37 - Duplicate input property for custom tag renderers

### 2.0.1

- Fixed #35 - Added support for `<compiler-options>`. Example:

```html
<compiler-options whitespace="preserve" /> A B C
```

### 2.0.0

- Dynamic attributes for scanned tags without a tag will have dashes removed by default.
  - :exclamation: When using `tags-dir` to discover tags that do not have a `marko-tag.json`, the previous behavior was to allow all attributes and to use the actual attribute name as the input property name. For example, when using `<hello first-name="John">`, first name would need to be read in as `input['first-name']`. This was changed such that the first name property should now be read in as `input.firstName` (dashes removed and converted to camel case)
- Changes to allow UI component to be put into a single JS file:
  - Updated taglib directory scanner to use `index.js` if found. New search order:
    1.  `renderer.js` (use `renderer.js` if it exists)
    2.  `index.js` (use `index.js` if it exists and assume it exports a `renderer` or `render` property)
    3.  `template.marko` (use the template as the renderer if no `renderer.js` or `index.js`)
  - :exclamation: Changes to the taglib directory scanner could break existing code. Specifically, if a UI component directory had an `index.js` file and a `template.marko` file then in in `marko@<2` the `template.marko` file would have been selected as the renderer. In `marko@2.x`, the `index.js` will be selected as the tag renderer.
- :exclamation: Removed support for mapping a tag renderer to a module with a `process` method
- Removed sub-module `marko/renderer` that exports [raptor-renderer](https://github.com/raptorjs/raptor-renderer)

# 1.x

## 1.6.x

### 1.6.1

- Added back code to allow the new marko runtime to load templates compiled by an earlier compiler that used `module.exports`

### 1.6.0

- Fixed #32. Switched from `module.exports = function create(__helpers) { ... }` to `exports.create = function(__helpers) { ... }` to avoid circular dependency problems

## 1.5.x

### 1.5.8

- Added support for adding "static" code to the top of a compiled template (helpful for initializing variables or running code once).

### 1.5.7

- Added sub-module `marko/renderer` that exports [raptor-renderer](https://github.com/raptorjs/raptor-renderer)

### 1.5.6

- Changes to avoid unoptimized code in V8

### 1.5.5

- Handle case where template was loaded before hot-reload was enabled

## 1.5.4

- Added support for `$global` in `renderSync`

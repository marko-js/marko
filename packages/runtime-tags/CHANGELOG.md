# @marko/runtime-tags

## 6.0.143

### Patch Changes

- [#3073](https://github.com/marko-js/marko/pull/3073) [`1aabdc3`](https://github.com/marko-js/marko/commit/1aabdc30bb7fa3b82e76a5b4724f469133f14c85) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Remove direct dependency on babel, refactor to use internal copy.

- Updated dependencies [[`1aabdc3`](https://github.com/marko-js/marko/commit/1aabdc30bb7fa3b82e76a5b4724f469133f14c85)]:
  - @marko/compiler@5.39.51

## 6.0.142

### Patch Changes

- [#3071](https://github.com/marko-js/marko/pull/3071) [`c5d31de`](https://github.com/marko-js/marko/commit/c5d31de1b55b26ffb746b7a03b01f2ce26ba0981) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Fix babel ast patching logic to work with latest babel.

- Updated dependencies [[`c5d31de`](https://github.com/marko-js/marko/commit/c5d31de1b55b26ffb746b7a03b01f2ce26ba0981)]:
  - @marko/compiler@5.39.50

## 6.0.141

### Patch Changes

- [#3070](https://github.com/marko-js/marko/pull/3070) [`f0b39d0`](https://github.com/marko-js/marko/commit/f0b39d008c48ef2fa2862076143b1154af2f95b7) Thanks [@rturnq](https://github.com/rturnq)! - Add debug runtime error when closure value is not yet defined

- [#3067](https://github.com/marko-js/marko/pull/3067) [`772c84d`](https://github.com/marko-js/marko/commit/772c84dc7562933536bab80d0e285866ccf72444) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Fix issue with multiple native tag event handler aliases being passed to an element via a spread. Eg `<button ...input onClick() {...}>` where `input` contains `on-click` as a attribute.

- [#3068](https://github.com/marko-js/marko/pull/3068) [`51c2a72`](https://github.com/marko-js/marko/commit/51c2a72ba63c4795299a1d737a9f56b4ad7c9ebb) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Fix issue with known define tags with closures and no other interactivity in the define tag setup.

- [#3070](https://github.com/marko-js/marko/pull/3070) [`12b1b33`](https://github.com/marko-js/marko/commit/12b1b336ff512c22697133ae744ef92283bbb240) Thanks [@rturnq](https://github.com/rturnq)! - Avoid referencing unwritten child section setup functions

- [#3070](https://github.com/marko-js/marko/pull/3070) [`620e483`](https://github.com/marko-js/marko/commit/620e483cdddab0bd69f2fc55bdf8eba9459b29e4) Thanks [@rturnq](https://github.com/rturnq)! - Prevent treating serialized value signals as pure

## 6.0.140

### Patch Changes

- [#3064](https://github.com/marko-js/marko/pull/3064) [`f55f571`](https://github.com/marko-js/marko/commit/f55f571a30bf70c358efcb7fad5e9c9bdc5ed686) Thanks [@rturnq](https://github.com/rturnq)! - Unify hoisted custom tag vars with native tag refs

- [#3064](https://github.com/marko-js/marko/pull/3064) [`15efc9e`](https://github.com/marko-js/marko/commit/15efc9eab869b6e5140bd951324004c781843d38) Thanks [@rturnq](https://github.com/rturnq)! - Fix loop key serializing when used in a function

- [#3064](https://github.com/marko-js/marko/pull/3064) [`aeec614`](https://github.com/marko-js/marko/commit/aeec614c5b3c3fc3ab34ccbdc7f1fcc3a47b7198) Thanks [@rturnq](https://github.com/rturnq)! - Exclude change handlers from rest bindings

## 6.0.139

### Patch Changes

- [#3059](https://github.com/marko-js/marko/pull/3059) [`40d0b52`](https://github.com/marko-js/marko/commit/40d0b528a616fae251a99d70cb2df54aee08d94b) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Fix issue where serialize reason was not cleared across renders leading to over serialization.

- [#3059](https://github.com/marko-js/marko/pull/3059) [`40d0b52`](https://github.com/marko-js/marko/commit/40d0b528a616fae251a99d70cb2df54aee08d94b) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Avoid giving dynamic native tag content a params serialize reason.

## 6.0.138

### Patch Changes

- [#3057](https://github.com/marko-js/marko/pull/3057) [`8d77da5`](https://github.com/marko-js/marko/commit/8d77da552454518a69aa2f5720fe179883571b99) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Dynamic native tag compat fixes.

## 6.0.137

### Patch Changes

- [#3055](https://github.com/marko-js/marko/pull/3055) [`f86e980`](https://github.com/marko-js/marko/commit/f86e980c6941a4e06136aa20d8bd2fe7a632611a) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Improve await tag types.

## 6.0.136

### Patch Changes

- [#3053](https://github.com/marko-js/marko/pull/3053) [`6df8ff8`](https://github.com/marko-js/marko/commit/6df8ff8d2f01f97cf5131a3c5a53d558ee325111) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Fix serializing nested destructures of a rest binding.

- [#3052](https://github.com/marko-js/marko/pull/3052) [`f47a62e`](https://github.com/marko-js/marko/commit/f47a62e824edc683c0788fb3f24fcda4d569a5f5) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Fix issue where assignments to tag variables which did not otherwise get a section were being incorrectly removed.

## 6.0.135

### Patch Changes

- [#3051](https://github.com/marko-js/marko/pull/3051) [`e31adc0`](https://github.com/marko-js/marko/commit/e31adc0511d856bf9bf506acf0d489767be29cbe) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Fix aliases in another section incorrectly causing a binding to be seen as declared / non nullable.

- [#3049](https://github.com/marko-js/marko/pull/3049) [`255769d`](https://github.com/marko-js/marko/commit/255769d1023d3c468947228fc690fde82feb650e) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Fix issue assigning to unused binding.

## 6.0.134

### Patch Changes

- [#3046](https://github.com/marko-js/marko/pull/3046) [`22724da`](https://github.com/marko-js/marko/commit/22724da052a7ab921ca1995c3347adc48184e23e) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Optimize input references for known define tag usage.

- [#3048](https://github.com/marko-js/marko/pull/3048) [`e0acbe3`](https://github.com/marko-js/marko/commit/e0acbe36ee4e0c885077a837e58a69b855cd3a5e) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Ensure canonical signal used for closure references.

## 6.0.133

### Patch Changes

- [#3044](https://github.com/marko-js/marko/pull/3044) [`d581cd9`](https://github.com/marko-js/marko/commit/d581cd9ebb2705c62a658dfcb677fca5fffd3d1b) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Fix issue with local attribute tag params overwriting parent section params binding.

- [#3044](https://github.com/marko-js/marko/pull/3044) [`2a43f7e`](https://github.com/marko-js/marko/commit/2a43f7e4147553779133a94c88f8c965fc8dd19f) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Improve logic around building up analyzed watch files.

- [#3042](https://github.com/marko-js/marko/pull/3042) [`22326da`](https://github.com/marko-js/marko/commit/22326da0a2ef04199143b828272d677036aea74c) Thanks [@rturnq](https://github.com/rturnq)! - Fix controllable text inputs when spreading value and valueChange

- Updated dependencies [[`2a43f7e`](https://github.com/marko-js/marko/commit/2a43f7e4147553779133a94c88f8c965fc8dd19f)]:
  - @marko/compiler@5.39.48

## 6.0.132

### Patch Changes

- [#3040](https://github.com/marko-js/marko/pull/3040) [`8b1ca06`](https://github.com/marko-js/marko/commit/8b1ca06c60e56e0b8cb8c5695b0bde1058880694) Thanks [@rturnq](https://github.com/rturnq)! - Fix for index when using by

- [#3040](https://github.com/marko-js/marko/pull/3040) [`21e5182`](https://github.com/marko-js/marko/commit/21e51825cb5a92ac4d30dfc6495145f9774c5f2f) Thanks [@rturnq](https://github.com/rturnq)! - Fix know property spreads and rest

## 6.0.131

### Patch Changes

- [#3036](https://github.com/marko-js/marko/pull/3036) [`68738ea`](https://github.com/marko-js/marko/commit/68738ea8959f09eebeaa856165ffc5beeccb452b) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Fix issue with registering default event handlers before a spread on a native tag.

## 6.0.130

### Patch Changes

- [#3035](https://github.com/marko-js/marko/pull/3035) [`35e25b0`](https://github.com/marko-js/marko/commit/35e25b04faab0c6782b12f037450eec95270e189) Thanks [@rturnq](https://github.com/rturnq)! - Fix known rest attribute tag duplication

- [#3032](https://github.com/marko-js/marko/pull/3032) [`f424e4e`](https://github.com/marko-js/marko/commit/f424e4e8a86b57eb83f03160f2bc39cd2aed6a5b) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Fix cases where compiler was not storing section information with scope reads.

- [#3035](https://github.com/marko-js/marko/pull/3035) [`291dea8`](https://github.com/marko-js/marko/commit/291dea8d085c3c04127d42df3d786be878c7e29e) Thanks [@rturnq](https://github.com/rturnq)! - Fix known spreads with rest dropping source reference

- [#3034](https://github.com/marko-js/marko/pull/3034) [`1ed1b4b`](https://github.com/marko-js/marko/commit/1ed1b4bc7c3da6774f901dd55149d1f30cc333f7) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Fix circular downstream reference issue when spreading to a dynamic tag.

- [#3034](https://github.com/marko-js/marko/pull/3034) [`ec12e53`](https://github.com/marko-js/marko/commit/ec12e53bd583cbf468eb6ed9bae1d83375ddd8c6) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Fix issue when rendering a define tag with no body content.

## 6.0.129

### Patch Changes

- [#3024](https://github.com/marko-js/marko/pull/3024) [`f634f38`](https://github.com/marko-js/marko/commit/f634f38d6dfffd72c23b4ec7e7bf5596ebd0b5de) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Use compiler modules api to read CWD in interop code.

- Updated dependencies [[`f634f38`](https://github.com/marko-js/marko/commit/f634f38d6dfffd72c23b4ec7e7bf5596ebd0b5de)]:
  - @marko/compiler@5.39.46

## 6.0.128

### Patch Changes

- [#3022](https://github.com/marko-js/marko/pull/3022) [`907c87c`](https://github.com/marko-js/marko/commit/907c87ca06c8657007c12cfc8ed752142a216443) Thanks [@rturnq](https://github.com/rturnq)! - Fix multiple dynamic closures losing scope in server render

## 6.0.127

### Patch Changes

- [#3021](https://github.com/marko-js/marko/pull/3021) [`b2eb4e9`](https://github.com/marko-js/marko/commit/b2eb4e9925d890c721b5065659babd54dec02dbe) Thanks [@rturnq](https://github.com/rturnq)! - Optimize pure const signals which cache downstream as plain functions

- [#2993](https://github.com/marko-js/marko/pull/2993) [`897a00d`](https://github.com/marko-js/marko/commit/897a00dcfe1fe1532a84aab0eff6ebd41e293ec0) Thanks [@rturnq](https://github.com/rturnq)! - Optimize spreads through a wrapper tag to a known tag into direct calls

- [#3019](https://github.com/marko-js/marko/pull/3019) [`d694b03`](https://github.com/marko-js/marko/commit/d694b03c936f6d8b102e469b5bf9f56e54ad23fd) Thanks [@rturnq](https://github.com/rturnq)! - Optimize serialization to only send non-empty or referenced scopes

- [#3019](https://github.com/marko-js/marko/pull/3019) [`e153684`](https://github.com/marko-js/marko/commit/e1536842785d989f69007c20c0e73474d6a8b9f5) Thanks [@rturnq](https://github.com/rturnq)! - Fix branch scope serialization for only child if and for tags

- [#3019](https://github.com/marko-js/marko/pull/3019) [`299a0e1`](https://github.com/marko-js/marko/commit/299a0e120d1f1363173e19a48e448157fe77172e) Thanks [@rturnq](https://github.com/rturnq)! - Optimize loop key references as constants

## 6.0.126

### Patch Changes

- [#3015](https://github.com/marko-js/marko/pull/3015) [`c1f5de7`](https://github.com/marko-js/marko/commit/c1f5de7c0739b5d96a068e5ecc21a7f5140c2f35) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Support "renderer" templates in class/tags interop.

## 6.0.125

### Patch Changes

- [#3012](https://github.com/marko-js/marko/pull/3012) [`7ec9683`](https://github.com/marko-js/marko/commit/7ec9683b16a5206bfb8218e9512c5db1487bfb6f) Thanks [@LuLaValva](https://github.com/LuLaValva)! - Ignore comments for only child conditional optimization

- [#3004](https://github.com/marko-js/marko/pull/3004) [`19815e9`](https://github.com/marko-js/marko/commit/19815e95bc716cbf03e594f764efbe53221e3bdd) Thanks [@LuLaValva](https://github.com/LuLaValva)! - Fix object destructures with spreads and change handlers

- [#3014](https://github.com/marko-js/marko/pull/3014) [`560d6a0`](https://github.com/marko-js/marko/commit/560d6a0bc9c78b3d584cc7199f5ab45ff679ff56) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Fix tags api runtime import from interop translator.

## 6.0.124

### Patch Changes

- [#3010](https://github.com/marko-js/marko/pull/3010) [`d293abe`](https://github.com/marko-js/marko/commit/d293abe8bff16440c624f955beb93f7398601be7) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Ensure tags api runtime loaded when going through tags api compat layer.

## 6.0.123

### Patch Changes

- [#3007](https://github.com/marko-js/marko/pull/3007) [`3769e43`](https://github.com/marko-js/marko/commit/3769e43c4317c7a832f8f74a55f740b30f1005f1) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Avoid interop feature checking attributes for "rawOpenTag" tags (style, import, etc).

- [#3009](https://github.com/marko-js/marko/pull/3009) [`e7a0b33`](https://github.com/marko-js/marko/commit/e7a0b337adf505f8467ab302c0c9bf75e0f168f4) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Serialize input passed from tags api to class api component via the Marko 6 serializer.

## 6.0.122

### Patch Changes

- [#3001](https://github.com/marko-js/marko/pull/3001) [`792dd1d`](https://github.com/marko-js/marko/commit/792dd1d5d193554889f7ba6e734c1730b947cf2d) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Expose Marko target api on compiled meta data.

- [#2999](https://github.com/marko-js/marko/pull/2999) [`d2f437b`](https://github.com/marko-js/marko/commit/d2f437bf7118c3160a4f4c9cf977b8396d9fc8db) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Add style block as tag api interop heuristic.

- [#2999](https://github.com/marko-js/marko/pull/2999) [`d2f437b`](https://github.com/marko-js/marko/commit/d2f437bf7118c3160a4f4c9cf977b8396d9fc8db) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Add support for "use class" comment to opt into to class api when exclusive `tags` folders prefer tags api.

- [#2999](https://github.com/marko-js/marko/pull/2999) [`d2f437b`](https://github.com/marko-js/marko/commit/d2f437bf7118c3160a4f4c9cf977b8396d9fc8db) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Add exclusive `tags` folder discovery as a "prefer tags api" heuristic in interop mode.

- Updated dependencies [[`792dd1d`](https://github.com/marko-js/marko/commit/792dd1d5d193554889f7ba6e734c1730b947cf2d), [`d2f437b`](https://github.com/marko-js/marko/commit/d2f437bf7118c3160a4f4c9cf977b8396d9fc8db), [`d2f437b`](https://github.com/marko-js/marko/commit/d2f437bf7118c3160a4f4c9cf977b8396d9fc8db)]:
  - @marko/compiler@5.39.45

## 6.0.121

### Patch Changes

- [#2996](https://github.com/marko-js/marko/pull/2996) [`1a65ff3`](https://github.com/marko-js/marko/commit/1a65ff3f4ed31b1e3fab37328962950db28a68e6) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Move strip types logic to be after transform phase.

- [#2994](https://github.com/marko-js/marko/pull/2994) [`1bf2788`](https://github.com/marko-js/marko/commit/1bf2788042fd3e6928303c5782909612a59c5206) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Fix issue where variables from pruned server/client statements were becoming implicit globals (now injects local undefined variables).

- [#2996](https://github.com/marko-js/marko/pull/2996) [`2a23dec`](https://github.com/marko-js/marko/commit/2a23decc64b3dbfea024241b1301dba7f6d69679) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Run parse hooks after the main parse phase is complete.

- Updated dependencies [[`1a65ff3`](https://github.com/marko-js/marko/commit/1a65ff3f4ed31b1e3fab37328962950db28a68e6), [`1bf2788`](https://github.com/marko-js/marko/commit/1bf2788042fd3e6928303c5782909612a59c5206), [`2a23dec`](https://github.com/marko-js/marko/commit/2a23decc64b3dbfea024241b1301dba7f6d69679)]:
  - @marko/compiler@5.39.44

## 6.0.120

### Patch Changes

- [#2982](https://github.com/marko-js/marko/pull/2982) [`40413b7`](https://github.com/marko-js/marko/commit/40413b7da9d7920abda8e51f8b73fd2417b8e123) Thanks [@rturnq](https://github.com/rturnq)! - Handle updating closures in a pending await and delay running renders in pending scopes

- [#2991](https://github.com/marko-js/marko/pull/2991) [`1085a19`](https://github.com/marko-js/marko/commit/1085a19fd26eeb7aac8ee209d852c8d536a2387d) Thanks [@rturnq](https://github.com/rturnq)! - Ensure parent branch is set on async branches

## 6.0.119

### Patch Changes

- [#2987](https://github.com/marko-js/marko/pull/2987) [`8cdeb6b`](https://github.com/marko-js/marko/commit/8cdeb6bb1d948ba2fb52299d9c543a59f29dc482) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Fix regression with text only tags (textarea/title) with a spread and no body content.

## 6.0.118

### Patch Changes

- [#2980](https://github.com/marko-js/marko/pull/2980) [`f9cf89f`](https://github.com/marko-js/marko/commit/f9cf89f37d16b1182d609e52be2519cd452cae5f) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Fix types for html-\* tags.

- [#2983](https://github.com/marko-js/marko/pull/2983) [`66ccfd8`](https://github.com/marko-js/marko/commit/66ccfd8e8f4ea277fb504464afca79b7ee6245d4) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Rename \_to_text helper to \_escape_text on the server.

- [#2983](https://github.com/marko-js/marko/pull/2983) [`3de60b9`](https://github.com/marko-js/marko/commit/3de60b9c82f4c31109ab6e1e9c6cfad23ca22e7e) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Remove unused nullable tag name optimization.

- [#2983](https://github.com/marko-js/marko/pull/2983) [`fdc46fb`](https://github.com/marko-js/marko/commit/fdc46fb3e762595a43fd1fa2f714af7f8819d341) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Move title tag logic into native tag translator.

- [#2978](https://github.com/marko-js/marko/pull/2978) [`55fd324`](https://github.com/marko-js/marko/commit/55fd324c3f4ea00535856c7719f8b4c46f55de40) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Update compiler to avoid mutating translator visitors.

- [#2985](https://github.com/marko-js/marko/pull/2985) [`762377b`](https://github.com/marko-js/marko/commit/762377bacd5a237807d23f69f88ab51f5234a93e) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Refactor html-script and html-style to share logic with native tag translation.

- [#2983](https://github.com/marko-js/marko/pull/2983) [`fdc46fb`](https://github.com/marko-js/marko/commit/fdc46fb3e762595a43fd1fa2f714af7f8819d341) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Normalize taglib ids to be consistent with register ids and across Marko 5/6.

- [#2984](https://github.com/marko-js/marko/pull/2984) [`17c4ba7`](https://github.com/marko-js/marko/commit/17c4ba7edfa3f38b9fc653aafc4b244258299519) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Support default nonce attribute on html-script and html-style when rendered client side if cspNonce is available/serialized to the client $global.

- [#2981](https://github.com/marko-js/marko/pull/2981) [`6709f4c`](https://github.com/marko-js/marko/commit/6709f4cdbe9c49cf1d9dfa77813c5949f8400bba) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Move textarea normalization to be pre-analyze.

- Updated dependencies [[`fdc46fb`](https://github.com/marko-js/marko/commit/fdc46fb3e762595a43fd1fa2f714af7f8819d341), [`55fd324`](https://github.com/marko-js/marko/commit/55fd324c3f4ea00535856c7719f8b4c46f55de40), [`fdc46fb`](https://github.com/marko-js/marko/commit/fdc46fb3e762595a43fd1fa2f714af7f8819d341)]:
  - @marko/compiler@5.39.43

## 6.0.117

### Patch Changes

- [#2976](https://github.com/marko-js/marko/pull/2976) [`36aa6fb`](https://github.com/marko-js/marko/commit/36aa6fbf9d7b052fc8acffa841cbae27f81783c0) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Fix issue where the ...rest alias optimization was applied incorrectly when there exists unrelated property aliases.

## 6.0.116

### Patch Changes

- [#2973](https://github.com/marko-js/marko/pull/2973) [`abcd809`](https://github.com/marko-js/marko/commit/abcd80909115c19303513607740101380ccd1b7f) Thanks [@LuLaValva](https://github.com/LuLaValva)! - Fix dynamic interpolations in `<title>` tag

- [#2969](https://github.com/marko-js/marko/pull/2969) [`41753e6`](https://github.com/marko-js/marko/commit/41753e60393f77bc6ac4392319297c4670ae9da6) Thanks [@LuLaValva](https://github.com/LuLaValva)! - Add `xmlns=` attribute to `<svg>` types

- [#2974](https://github.com/marko-js/marko/pull/2974) [`bf3dc6b`](https://github.com/marko-js/marko/commit/bf3dc6b1aa8ee8f5543d33b60fd64d1d6f5521d9) Thanks [@rturnq](https://github.com/rturnq)! - Improve excluded property aliases

## 6.0.115

### Patch Changes

- [#2967](https://github.com/marko-js/marko/pull/2967) [`d3d25c8`](https://github.com/marko-js/marko/commit/d3d25c8ba3e5ac8d1aa35c8e6d3b87784c50cd92) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Fix issue with duplicate attributes on native tags.

## 6.0.114

### Patch Changes

- [#2964](https://github.com/marko-js/marko/pull/2964) [`412e371`](https://github.com/marko-js/marko/commit/412e371cf24e23f992c19aee8c9706e2085f4f47) Thanks [@rturnq](https://github.com/rturnq)! - Unify inline placeholder and await placeholders

- [#2966](https://github.com/marko-js/marko/pull/2966) [`8e1a65e`](https://github.com/marko-js/marko/commit/8e1a65efcc586226424ad05973516f88f2501c98) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Allow await tag params to be bundled separately from the await tag content.

- [#2963](https://github.com/marko-js/marko/pull/2963) [`0c4154c`](https://github.com/marko-js/marko/commit/0c4154c93bd75f71b059a75f353052f79a7b6055) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Encode resume effects as a string to reduce HTML bytes and fix browser compatibility issue with large effect lists.

## 6.0.113

### Patch Changes

- [#2961](https://github.com/marko-js/marko/pull/2961) [`a6ff06d`](https://github.com/marko-js/marko/commit/a6ff06da037b839758e445ebbc9294cd839c9c3f) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Avoid walking for comment markers when runtime is loaded, it should always be done by the inline script and was causing a race condition where a scope could be incorrectly duplicated.

## 6.0.112

### Patch Changes

- [#2955](https://github.com/marko-js/marko/pull/2955) [`2cb7418`](https://github.com/marko-js/marko/commit/2cb7418850b5eb792b115710564d2cd4272f6856) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Add cspNonce by default to html-script and html-style.

## 6.0.111

### Patch Changes

- [#2953](https://github.com/marko-js/marko/pull/2953) [`f79163d`](https://github.com/marko-js/marko/commit/f79163dc0e54e3295c0f7e7efddca2eda226328f) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Optimize resume visitor code for bundle size.

- [#2953](https://github.com/marko-js/marko/pull/2953) [`3fbead1`](https://github.com/marko-js/marko/commit/3fbead1b58933f968a3aa6e821cf054095fd94eb) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Refactor resume runtime to avoid executing other render and effect code in the queue when resuming.

## 6.0.110

### Patch Changes

- [#2951](https://github.com/marko-js/marko/pull/2951) [`1a2208e`](https://github.com/marko-js/marko/commit/1a2208e86aa8d67fd8d18b7ad3af9df95e833d87) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Add compile error for hoisted define tag references.

- [#2951](https://github.com/marko-js/marko/pull/2951) [`64d77e7`](https://github.com/marko-js/marko/commit/64d77e7668a25595286a8164eb1083edbdd17227) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Avoid enabling the catch runtime multiple times.

- [#2951](https://github.com/marko-js/marko/pull/2951) [`1a2208e`](https://github.com/marko-js/marko/commit/1a2208e86aa8d67fd8d18b7ad3af9df95e833d87) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Fix issue with circular define tag references.

## 6.0.109

### Patch Changes

- [#2948](https://github.com/marko-js/marko/pull/2948) [`4a9d9dd`](https://github.com/marko-js/marko/commit/4a9d9dd563293c0856482f8465a92bf9b5645d87) Thanks [@rturnq](https://github.com/rturnq)! - perf: inline content branch calls

- [#2949](https://github.com/marko-js/marko/pull/2949) [`6648a22`](https://github.com/marko-js/marko/commit/6648a2229084e3ae431c175fb283e41b9bb1dab5) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Allow compiler import helper to be used outside of translate.

- Updated dependencies [[`6648a22`](https://github.com/marko-js/marko/commit/6648a2229084e3ae431c175fb283e41b9bb1dab5)]:
  - @marko/compiler@5.39.42

## 6.0.108

### Patch Changes

- [#2946](https://github.com/marko-js/marko/pull/2946) [`956b82d`](https://github.com/marko-js/marko/commit/956b82d4bd053c8b0f7c8ee51e35bd467d97fe96) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Fix regression when a for loop closure removes all items.

## 6.0.107

### Patch Changes

- [#2943](https://github.com/marko-js/marko/pull/2943) [`f832f91`](https://github.com/marko-js/marko/commit/f832f91d7cc3afec2b054882b472d1b5eb11f1e6) Thanks [@rturnq](https://github.com/rturnq)! - Fix incorrect loop scope accessor in production builds

## 6.0.106

### Patch Changes

- [#2941](https://github.com/marko-js/marko/pull/2941) [`31a199e`](https://github.com/marko-js/marko/commit/31a199e974a9a7986f1534c8b37b0d2bdae791ff) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Fix referencing $global in production client side renders.

## 6.0.105

### Patch Changes

- [#2937](https://github.com/marko-js/marko/pull/2937) [`498dd11`](https://github.com/marko-js/marko/commit/498dd11f4cf46ee3848a1915307888c2cad4811d) Thanks [@rturnq](https://github.com/rturnq)! - Unify loop/conditonal scopes and prevent serializing them if the associated markers are written

- [#2940](https://github.com/marko-js/marko/pull/2940) [`cfbf7ed`](https://github.com/marko-js/marko/commit/cfbf7ed008ad4a195971faa5a016388fe6048d55) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Fix state execution order regression in dev mode.

## 6.0.104

### Patch Changes

- [#2935](https://github.com/marko-js/marko/pull/2935) [`28df752`](https://github.com/marko-js/marko/commit/28df752dd94494225d0b172e49d5b7bb0f1ace80) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Fix issue where content could be flushed after the serializer caused the stream to abort with an error.

## 6.0.103

### Patch Changes

- [#2932](https://github.com/marko-js/marko/pull/2932) [`c285cd1`](https://github.com/marko-js/marko/commit/c285cd123d98766fb11a225f845f73a82807d9f6) Thanks [@rturnq](https://github.com/rturnq)! - Use identifiers for scope accessors and encode them as integers in client templates

- [#2933](https://github.com/marko-js/marko/pull/2933) [`0247892`](https://github.com/marko-js/marko/commit/0247892da85d73c671850e58d00ee3f8fc45b344) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Improve error messaging when exclusive change handlers are specified on native elements.

- [#2933](https://github.com/marko-js/marko/pull/2933) [`d25a5a5`](https://github.com/marko-js/marko/commit/d25a5a57c53149b6dd17d8ebffed2461d7c282bf) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Add dev mode validation for dynamic tag names.

- [#2933](https://github.com/marko-js/marko/pull/2933) [`ac1c8dc`](https://github.com/marko-js/marko/commit/ac1c8dc67d152eb93d3e968731437381572a267e) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Improve errors for duplicate declarations for tag variables.

## 6.0.102

### Patch Changes

- [#2931](https://github.com/marko-js/marko/pull/2931) [`258306f`](https://github.com/marko-js/marko/commit/258306f6fd5b3cf1e3d0c06f99c61a3c473dc632) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Fix issue assigning to aliased tag variables.

- [#2926](https://github.com/marko-js/marko/pull/2926) [`ca2d1dc`](https://github.com/marko-js/marko/commit/ca2d1dc1ca0c0d3320f73ad1ccf910483b72841b) Thanks [@LuLaValva](https://github.com/LuLaValva)! - Update error cases for if tag

- [#2930](https://github.com/marko-js/marko/pull/2930) [`f5f34c6`](https://github.com/marko-js/marko/commit/f5f34c63e7c14a182fb79be0e370fca7b8c36825) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Add support for resuming dynamic tag native events.

## 6.0.101

### Patch Changes

- [#2927](https://github.com/marko-js/marko/pull/2927) [`7598ad3`](https://github.com/marko-js/marko/commit/7598ad320a4c24256c46ae399040eb836ad4af01) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Fix analysis of exported functions.

## 6.0.100

### Patch Changes

- [#2923](https://github.com/marko-js/marko/pull/2923) [`5ce5231`](https://github.com/marko-js/marko/commit/5ce523177bf9c4ff01f47fd726a163f19ba2dec7) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Fix issue with source tracking being broken with destructured aliases.

- [#2923](https://github.com/marko-js/marko/pull/2923) [`852974b`](https://github.com/marko-js/marko/commit/852974ba7b3db7da93e06db79e452a8282c92b7c) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Ensure let tag with change handler properly tracks reactive sources.

## 6.0.99

### Patch Changes

- [#2921](https://github.com/marko-js/marko/pull/2921) [`279eaad`](https://github.com/marko-js/marko/commit/279eaad827775332b150ccd6d5aa40e987f2c3e8) Thanks [@rturnq](https://github.com/rturnq)! - Loosen assignment check to allow any function parent

- [#2920](https://github.com/marko-js/marko/pull/2920) [`2bed9ef`](https://github.com/marko-js/marko/commit/2bed9ef7d7ba59ac65773be2424cef33ea4623f9) Thanks [@rturnq](https://github.com/rturnq)! - Consistently read latest value from let tags

## 6.0.98

### Patch Changes

- [#2918](https://github.com/marko-js/marko/pull/2918) [`baf830b`](https://github.com/marko-js/marko/commit/baf830b6b76cc5dc5f104280185952830b881f71) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Fix issue removing if statements which rendered no content.

## 6.0.97

### Patch Changes

- [#2917](https://github.com/marko-js/marko/pull/2917) [`8f82e28`](https://github.com/marko-js/marko/commit/8f82e2855fe322fcfa206cbea4dcae3230d5b6ef) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Fix circular issue when serializing functions.

- [#2912](https://github.com/marko-js/marko/pull/2912) [`917c88e`](https://github.com/marko-js/marko/commit/917c88ed23955bbf68cf9e19382315345974e79d) Thanks [@rturnq](https://github.com/rturnq)! - Avoid calling script functions with scope argument unnecessarily

- [#2913](https://github.com/marko-js/marko/pull/2913) [`280f4d3`](https://github.com/marko-js/marko/commit/280f4d3141a3fcbd1ec2c6e95c8db6613f9eff1b) Thanks [@rturnq](https://github.com/rturnq)! - Ensure increment and decrement assignments don't prune change handler bindings

- [#2916](https://github.com/marko-js/marko/pull/2916) [`5963a78`](https://github.com/marko-js/marko/commit/5963a7894425d4993de2104e5bcbf6d3ffda6651) Thanks [@rturnq](https://github.com/rturnq)! - Fix duplicate setup identifier when hoisting

## 6.0.96

### Patch Changes

- [#2909](https://github.com/marko-js/marko/pull/2909) [`43a88eb`](https://github.com/marko-js/marko/commit/43a88ebab65f8e1d781e15f7cfb9a215e52ed75f) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Fix issues printing optional member expressions.

- [#2908](https://github.com/marko-js/marko/pull/2908) [`e77008a`](https://github.com/marko-js/marko/commit/e77008a63431539e04cc1abc28fe2920728e68b5) Thanks [@rturnq](https://github.com/rturnq)! - Add compile error when referencing tag variable in providing tag's attributes

## 6.0.95

### Patch Changes

- [#2906](https://github.com/marko-js/marko/pull/2906) [`af067b7`](https://github.com/marko-js/marko/commit/af067b737c4b8684b8d56b14d3d96266b7e61d9d) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Add compile error when assigning to tag var/param outside a function.

- [#2906](https://github.com/marko-js/marko/pull/2906) [`c6a9c12`](https://github.com/marko-js/marko/commit/c6a9c125e82d9a1fbb158677cc8c26a94d80e2ec) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Fix issue with incorrect babel scopes after stripping types.

- [#2906](https://github.com/marko-js/marko/pull/2906) [`355d5fd`](https://github.com/marko-js/marko/commit/355d5fd3c2284b8c149047002b95f16157573334) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Ensure function references are a subset of the expression references.

- Updated dependencies [[`c6a9c12`](https://github.com/marko-js/marko/commit/c6a9c125e82d9a1fbb158677cc8c26a94d80e2ec)]:
  - @marko/compiler@5.39.41

## 6.0.94

### Patch Changes

- [#2904](https://github.com/marko-js/marko/pull/2904) [`006d1a5`](https://github.com/marko-js/marko/commit/006d1a55cf42179fdc48974e409d1dc7c4564fcb) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Fix issue where value serialized because of function closure was not serializing owner scopes.

## 6.0.93

### Patch Changes

- [#2900](https://github.com/marko-js/marko/pull/2900) [`d81c1ed`](https://github.com/marko-js/marko/commit/d81c1edb2ba2423c33e9a28d1e5f16e6ea973e8c) Thanks [@rturnq](https://github.com/rturnq)! - Fix native tag var when used before defined in same scope
  Fix custom tag hoists
  Error when reading hoisted values during render phase
  Assert hoisted values are functions in dev mode

- [#2902](https://github.com/marko-js/marko/pull/2902) [`4aa8120`](https://github.com/marko-js/marko/commit/4aa8120f1ed33fbf44639bf6b84239ba576db8ac) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Avoid storing client scope id counter on $global.

- [#2902](https://github.com/marko-js/marko/pull/2902) [`0807d31`](https://github.com/marko-js/marko/commit/0807d31b1b01bed64c96d2ad465bd612f1dfe9cc) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Fix issue where a let tag that depends on other values was incorrectly re-running when resumed from the server even without a change handler.

## 6.0.92

### Patch Changes

- [#2898](https://github.com/marko-js/marko/pull/2898) [`08c0604`](https://github.com/marko-js/marko/commit/08c060470f56d261ae5f7cee5dc0effc1194c31a) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Fix issue with text normalization helper that was breaking textareas (and similar text content tags) with leading dynamic placeholder content.

## 6.0.91

### Patch Changes

- [#2897](https://github.com/marko-js/marko/pull/2897) [`5161e7a`](https://github.com/marko-js/marko/commit/5161e7a9c919b9f3ee74239fb64280c4d1dd9f74) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Show debug warnings when duplicate for loop keys are used.

- [#2892](https://github.com/marko-js/marko/pull/2892) [`06c1707`](https://github.com/marko-js/marko/commit/06c1707469cac8da51e2f22f300efeda83878fbd) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Error message when using Event.currentTarget api in a delegated event.

## 6.0.90

### Patch Changes

- [#2889](https://github.com/marko-js/marko/pull/2889) [`f0e0eb5`](https://github.com/marko-js/marko/commit/f0e0eb5885e3adda1765cc7ed1cfa2b3581591f2) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Fix issue where multiple serialize mutation assignments were not correctly being wrapped with parens.

- [#2889](https://github.com/marko-js/marko/pull/2889) [`f0e0eb5`](https://github.com/marko-js/marko/commit/f0e0eb5885e3adda1765cc7ed1cfa2b3581591f2) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Ensure that await tag client runtime enables branch walking.

## 6.0.89

### Patch Changes

- [#2887](https://github.com/marko-js/marko/pull/2887) [`38aa757`](https://github.com/marko-js/marko/commit/38aa75777f08005e53cfcae0b7ac3cbfac16c4c0) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Fix issue where the resume walker was incorrectly stopping when an incomplete placeholder was ended.

## 6.0.88

### Patch Changes

- [#2886](https://github.com/marko-js/marko/pull/2886) [`d6e7a1d`](https://github.com/marko-js/marko/commit/d6e7a1d10ea2ec70e7cb81cb55fd5f241bd1051d) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Fix attribute tags not being included in pre analyze transforms.

- [#2884](https://github.com/marko-js/marko/pull/2884) [`c1d752c`](https://github.com/marko-js/marko/commit/c1d752cf9c14f066a390eb7d6b7e50c6eeedbd65) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Fix issue where client side placeholders were not clearing batched effects, causing extra execution.

- [#2884](https://github.com/marko-js/marko/pull/2884) [`c1d752c`](https://github.com/marko-js/marko/commit/c1d752cf9c14f066a390eb7d6b7e50c6eeedbd65) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Fix issue moving @placeholder/@catch content when the replacement range was not yet flushed.

## 6.0.87

### Patch Changes

- [#2882](https://github.com/marko-js/marko/pull/2882) [`90f9738`](https://github.com/marko-js/marko/commit/90f9738c7b557fb797afeb40a597bb0b3e0760df) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Fix support for assignment patterns.

- [`eb77489`](https://github.com/marko-js/marko/commit/eb77489b58eb880ce8ca43cc4e7a858a5515a438) Thanks [@rturnq](https://github.com/rturnq)! - Fix regression with bundle load before inline runtime

## 6.0.86

### Patch Changes

- [#2876](https://github.com/marko-js/marko/pull/2876) [`a774ed6`](https://github.com/marko-js/marko/commit/a774ed6a8d5fdc0b54ff31f373803ea7dc0cdd0b) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Fix issue with invalid serialize guard references.

## 6.0.85

### Patch Changes

- [#2875](https://github.com/marko-js/marko/pull/2875) [`8f66850`](https://github.com/marko-js/marko/commit/8f66850f57767a77815a9da6141a385f6aa89829) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Avoid writing unnecessary param signals.

- [#2873](https://github.com/marko-js/marko/pull/2873) [`0b9d0a8`](https://github.com/marko-js/marko/commit/0b9d0a8f0c676f07e8fd5a564f879850dd6cab52) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Avoid writing signals with no statements.

## 6.0.84

### Patch Changes

- [#2871](https://github.com/marko-js/marko/pull/2871) [`826a1a9`](https://github.com/marko-js/marko/commit/826a1a95ea44159156720fc125eb9e270c7d1245) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Fix invalid renderer id check in prod builds.

## 6.0.83

### Patch Changes

- [#2867](https://github.com/marko-js/marko/pull/2867) [`3cb6721`](https://github.com/marko-js/marko/commit/3cb6721830831cdfda891bb38e636da70c17b5c4) Thanks [@rturnq](https://github.com/rturnq)! - Escape grave (`) characters in template literals

- [#2864](https://github.com/marko-js/marko/pull/2864) [`1e75400`](https://github.com/marko-js/marko/commit/1e7540087720e748d0f7889f10ace4ddf93a4f80) Thanks [@rturnq](https://github.com/rturnq)! - Ensure serialize reason is set before child call in server compilation

- [#2870](https://github.com/marko-js/marko/pull/2870) [`c7fe62e`](https://github.com/marko-js/marko/commit/c7fe62e66b1d06f2163004a929380d3e7b0aedd9) Thanks [@LuLaValva](https://github.com/LuLaValva)! - Improve types for CSS properties

- [#2869](https://github.com/marko-js/marko/pull/2869) [`cc266e8`](https://github.com/marko-js/marko/commit/cc266e8dee398095d456fbaff8b9c493a91c6c28) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Fix some edge cases around serialize reason generation.

- [#2868](https://github.com/marko-js/marko/pull/2868) [`3e55ba6`](https://github.com/marko-js/marko/commit/3e55ba6aa16977fe5244fb5561391769084365e2) Thanks [@LuLaValva](https://github.com/LuLaValva)! - Increase specificity of dynamic tag normalization

- [#2869](https://github.com/marko-js/marko/pull/2869) [`df93413`](https://github.com/marko-js/marko/commit/df93413c5785d4f12fe4c0899de69a167b77bc44) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - A "let" tag without assignments should not be seen as a stateful source.

## 6.0.82

### Patch Changes

- [#2863](https://github.com/marko-js/marko/pull/2863) [`1d898d0`](https://github.com/marko-js/marko/commit/1d898d08b19ceeb7f078a23c1924db641eba161f) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Fix issue with multiple renders into the same runtime.

- [#2861](https://github.com/marko-js/marko/pull/2861) [`97e9ae8`](https://github.com/marko-js/marko/commit/97e9ae894abd8ce420d4c8eff04bbec75b60a8ae) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Fix issue with invalid html compilation output when having param only serialize reasons.

## 6.0.81

### Patch Changes

- [#2859](https://github.com/marko-js/marko/pull/2859) [`22112e5`](https://github.com/marko-js/marko/commit/22112e524cf12baf0b119a5ad3417145459a159c) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Ensure markoOpts is always accurate when running child template analysis.

- [#2857](https://github.com/marko-js/marko/pull/2857) [`13e5007`](https://github.com/marko-js/marko/commit/13e50070594b75a0fc03233b4b93ea0a6af390ca) Thanks [@LuLaValva](https://github.com/LuLaValva)! - Update type definitions for `<log>` and `<debug>` tags

- [#2859](https://github.com/marko-js/marko/pull/2859) [`e12aa2e`](https://github.com/marko-js/marko/commit/e12aa2e79dfa2e38d721d64857c0496b0bfcc84f) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Track reasons for function closure serialization and add appropriate guards.

- [#2859](https://github.com/marko-js/marko/pull/2859) [`e12aa2e`](https://github.com/marko-js/marko/commit/e12aa2e79dfa2e38d721d64857c0496b0bfcc84f) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Track downstream serialize reasons for attribute tags.

- Updated dependencies [[`22112e5`](https://github.com/marko-js/marko/commit/22112e524cf12baf0b119a5ad3417145459a159c)]:
  - @marko/compiler@5.39.40

## 6.0.80

### Patch Changes

- [#2850](https://github.com/marko-js/marko/pull/2850) [`d5224b0`](https://github.com/marko-js/marko/commit/d5224b01512827784949a7816d5b6cf3d2a81826) Thanks [@rturnq](https://github.com/rturnq)! - Guard param serialize reasons and avoid registering body content for stateless attribute tags

## 6.0.79

### Patch Changes

- [#2855](https://github.com/marko-js/marko/pull/2855) [`29173ce`](https://github.com/marko-js/marko/commit/29173ced3806d932eb05dc14002fc4969ef4ac6b) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Ensure scopes are crawled before stripping types.

- Updated dependencies [[`29173ce`](https://github.com/marko-js/marko/commit/29173ced3806d932eb05dc14002fc4969ef4ac6b)]:
  - @marko/compiler@5.39.39

## 6.0.78

### Patch Changes

- [#2853](https://github.com/marko-js/marko/pull/2853) [`b52a62f`](https://github.com/marko-js/marko/commit/b52a62f3ae5d07bee23685289aec169476820f69) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Ensure stripTypes compiler option is applied when targeting source output.

- Updated dependencies [[`b52a62f`](https://github.com/marko-js/marko/commit/b52a62f3ae5d07bee23685289aec169476820f69)]:
  - @marko/compiler@5.39.38

## 6.0.77

### Patch Changes

- [#2851](https://github.com/marko-js/marko/pull/2851) [`44fbf8d`](https://github.com/marko-js/marko/commit/44fbf8dd2672d3a39e511ee4f647b9e591943616) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Fix hoisted element reference variable name in production builds.

## 6.0.76

### Patch Changes

- [#2848](https://github.com/marko-js/marko/pull/2848) [`cab5759`](https://github.com/marko-js/marko/commit/cab575925dcc08ca079999cceed3a3dac23a0173) Thanks [@LuLaValva](https://github.com/LuLaValva)! - Prevent compile-time infinite loop

## 6.0.75

### Patch Changes

- [#2847](https://github.com/marko-js/marko/pull/2847) [`a19530c`](https://github.com/marko-js/marko/commit/a19530c833a992b19cea27afb2a3c27395276c60) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Fix uncontrolled textarea and select values.

- [#2845](https://github.com/marko-js/marko/pull/2845) [`75fd29f`](https://github.com/marko-js/marko/commit/75fd29f469d015f1402a6c5a5e038d7c2db8bfca) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Fix deleting unserializable references in serializer.

## 6.0.74

### Patch Changes

- [#2843](https://github.com/marko-js/marko/pull/2843) [`4319ad0`](https://github.com/marko-js/marko/commit/4319ad08b2b2ebc36eb2e491e96da99e9b2d79de) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Serialize branch index for inert if tags to ensure closures update properly.

## 6.0.73

### Patch Changes

- [#2836](https://github.com/marko-js/marko/pull/2836) [`c4081bd`](https://github.com/marko-js/marko/commit/c4081bd96c627a09ca00b2b89dc4c9f3d77187a6) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Avoid unhandled promise rejections when serializing promises.

- [#2839](https://github.com/marko-js/marko/pull/2839) [`f8b5c2a`](https://github.com/marko-js/marko/commit/f8b5c2af29a72592c98dbeb3e409efaab2b6e319) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Fix issue with closures within a try being over serialized.

## 6.0.72

### Patch Changes

- [#2837](https://github.com/marko-js/marko/pull/2837) [`ddac960`](https://github.com/marko-js/marko/commit/ddac960439f6e5f0d3f6c780b00bcbce11eb55d7) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Fix issue updating closures to a stateless if.

## 6.0.71

### Patch Changes

- [#2834](https://github.com/marko-js/marko/pull/2834) [`5c9a37f`](https://github.com/marko-js/marko/commit/5c9a37fa17c6a2f5f771c919b8415e4dfb25fca4) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Fix issue striping type specifiers in imports.

- Updated dependencies [[`5c9a37f`](https://github.com/marko-js/marko/commit/5c9a37fa17c6a2f5f771c919b8415e4dfb25fca4)]:
  - @marko/compiler@5.39.37

## 6.0.70

### Patch Changes

- [#2830](https://github.com/marko-js/marko/pull/2830) [`9a688af`](https://github.com/marko-js/marko/commit/9a688af3c92a73ae7492cdaa4b9ff1e0b2f9127e) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Fix issue with static/server/client statements with type imports not properly being stripped.

- [#2832](https://github.com/marko-js/marko/pull/2832) [`80bf906`](https://github.com/marko-js/marko/commit/80bf906e9903f8bf6c94935acad7c2a29df7844e) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Fix issue with having multiple binds.

- Updated dependencies [[`9a688af`](https://github.com/marko-js/marko/commit/9a688af3c92a73ae7492cdaa4b9ff1e0b2f9127e)]:
  - @marko/compiler@5.39.36

## 6.0.69

### Patch Changes

- [#2827](https://github.com/marko-js/marko/pull/2827) [`f3daa1d`](https://github.com/marko-js/marko/commit/f3daa1da10036c1e76456a5498266be65328444b) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Fix style tag var hoisting in ssr

## 6.0.68

### Patch Changes

- [#2825](https://github.com/marko-js/marko/pull/2825) [`553acf0`](https://github.com/marko-js/marko/commit/553acf08ed85ae01625d04b6d52efd2a7eea0bf7) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Fix issue with single inert control flow nested under an element that needs to be visited.

- [#2825](https://github.com/marko-js/marko/pull/2825) [`b828f48`](https://github.com/marko-js/marko/commit/b828f4889b3b30f864c452789e06741392ddc535) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Fix issue with tag variable assignments in expression statements sometimes outputting invalid code.

## 6.0.67

### Patch Changes

- [#2822](https://github.com/marko-js/marko/pull/2822) [`8449deb`](https://github.com/marko-js/marko/commit/8449debbef1c32fd1ffbb2dfe15929f0a1868652) Thanks [@LuLaValva](https://github.com/LuLaValva)! - Add for until tag

- [#2823](https://github.com/marko-js/marko/pull/2823) [`58c2165`](https://github.com/marko-js/marko/commit/58c21653aa0a1d6e1db208c36a1a584b44ba2ff0) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Ensure type stripping runs before transform phase in compiler.

- Updated dependencies [[`58c2165`](https://github.com/marko-js/marko/commit/58c21653aa0a1d6e1db208c36a1a584b44ba2ff0)]:
  - @marko/compiler@5.39.35

## 6.0.66

### Patch Changes

- [#2820](https://github.com/marko-js/marko/pull/2820) [`f39c6da`](https://github.com/marko-js/marko/commit/f39c6da21ff8476130890e5482242acd2096e54a) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Improve tags/class interop across async.

## 6.0.65

### Patch Changes

- [#2818](https://github.com/marko-js/marko/pull/2818) [`41c58d2`](https://github.com/marko-js/marko/commit/41c58d24bbbde24d0392ad315c6008193e8fd9d3) Thanks [@LuLaValva](https://github.com/LuLaValva)! - Update <id> and <let> tag types

- [#2817](https://github.com/marko-js/marko/pull/2817) [`e70f0c6`](https://github.com/marko-js/marko/commit/e70f0c69e5e42e5b29a61cbce2134ee27ca16b35) Thanks [@LuLaValva](https://github.com/LuLaValva)! - Update error messages to markojs.com

## 6.0.64

### Patch Changes

- [#2813](https://github.com/marko-js/marko/pull/2813) [`65b6dde`](https://github.com/marko-js/marko/commit/65b6dde559f50afac6e285bd598ed49b015485f4) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Improve class/tags api interop.

## 6.0.63

### Patch Changes

- [#2810](https://github.com/marko-js/marko/pull/2810) [`2e24f2d`](https://github.com/marko-js/marko/commit/2e24f2d938e27c6bf11856b90a4016ac68ef89b0) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Avoid compile error with empty script tag.

## 6.0.62

### Patch Changes

- [#2808](https://github.com/marko-js/marko/pull/2808) [`a12d927`](https://github.com/marko-js/marko/commit/a12d927058067aab3bc7917010956293e2862e44) Thanks [@rturnq](https://github.com/rturnq)! - Improve resume walks to be easier to follow and more correct

## 6.0.61

### Patch Changes

- [#2807](https://github.com/marko-js/marko/pull/2807) [`7ddccab`](https://github.com/marko-js/marko/commit/7ddccabf97951c68d5d836414384a9571374f6ef) Thanks [@LuLaValva](https://github.com/LuLaValva)! - Fix text placeholders

- [#2803](https://github.com/marko-js/marko/pull/2803) [`81ec94e`](https://github.com/marko-js/marko/commit/81ec94eea973abc93584534f253b9fbd43df14f6) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Ensure binding resolution does not leak across files.

- [#2806](https://github.com/marko-js/marko/pull/2806) [`61ffaf5`](https://github.com/marko-js/marko/commit/61ffaf55d7ac056e9c263a14ceb62f3530d87ce7) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Rename all exposed runtime apis to be snake case for easier reading.

## 6.0.60

### Patch Changes

- [#2801](https://github.com/marko-js/marko/pull/2801) [`eef940f`](https://github.com/marko-js/marko/commit/eef940f805548b3f1f96d544e0905638ac02af31) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Fix issue with closure signals not being written due to incorrect binding sort order.

## 6.0.59

### Patch Changes

- [#2795](https://github.com/marko-js/marko/pull/2795) [`22028ab`](https://github.com/marko-js/marko/commit/22028ab95f4aa24a668a3021e4647c8524e2a97a) Thanks [@LuLaValva](https://github.com/LuLaValva)! - Allow override value for <id> tag

## 6.0.58

### Patch Changes

- [#2797](https://github.com/marko-js/marko/pull/2797) [`803b187`](https://github.com/marko-js/marko/commit/803b187049fdb3e001f6ab0f2ffac26fb56c5428) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Fix issue with injected change handlers from object patterns.

- [#2797](https://github.com/marko-js/marko/pull/2797) [`803b187`](https://github.com/marko-js/marko/commit/803b187049fdb3e001f6ab0f2ffac26fb56c5428) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Fix issue with implicit change handlers on input being treated as a derived instead of input.

- [#2796](https://github.com/marko-js/marko/pull/2796) [`9e5a532`](https://github.com/marko-js/marko/commit/9e5a53259eec7bfd5139a0ac4fb8587be08c4470) Thanks [@LuLaValva](https://github.com/LuLaValva)! - Add links to the docs in error messages

## 6.0.57

### Patch Changes

- [#2793](https://github.com/marko-js/marko/pull/2793) [`663c3b1`](https://github.com/marko-js/marko/commit/663c3b14c7f8be6d8805adf3cd90fdd6511fab20) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Fix issue with mutating tag variables within an intersection.

- [#2793](https://github.com/marko-js/marko/pull/2793) [`d7271e7`](https://github.com/marko-js/marko/commit/d7271e7198008f3181c971e5f99c927e1296ef8d) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Refactor function registration, ensure functions passed as return value are registered.

## 6.0.56

### Patch Changes

- [#2789](https://github.com/marko-js/marko/pull/2789) [`5446f78`](https://github.com/marko-js/marko/commit/5446f784c6f40dc128427933ee011aea2778dace) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Reduce function registrations.

## 6.0.55

### Patch Changes

- [#2786](https://github.com/marko-js/marko/pull/2786) [`df07bb6`](https://github.com/marko-js/marko/commit/df07bb6ec8928bec35de4711cd57ed4cfd038581) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Ensure tags api runtime compat always walks after running class api init code.

## 6.0.54

### Patch Changes

- [#2784](https://github.com/marko-js/marko/pull/2784) [`bbde0e8`](https://github.com/marko-js/marko/commit/bbde0e8415931c3fbb5432007dda196dfd5a9e3d) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Fix issue with compat layer scope serialized async.

- [#2784](https://github.com/marko-js/marko/pull/2784) [`bbde0e8`](https://github.com/marko-js/marko/commit/bbde0e8415931c3fbb5432007dda196dfd5a9e3d) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Ensure interop class/tags init happens after all modules load.

## 6.0.53

### Patch Changes

- [#2781](https://github.com/marko-js/marko/pull/2781) [`0265d6b`](https://github.com/marko-js/marko/commit/0265d6b67e7020447dc236f8aa682a39ae450914) Thanks [@LuLaValva](https://github.com/LuLaValva)! - Fix walk strings when interopolating child walks, and optimized for simple dynamic tags

- [#2783](https://github.com/marko-js/marko/pull/2783) [`506539c`](https://github.com/marko-js/marko/commit/506539cbb17ca1cc01fb52f387a5f572c6daf0da) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Improve class/tags interop serialization orchestration and flushing.

## 6.0.52

### Patch Changes

- [#2779](https://github.com/marko-js/marko/pull/2779) [`157fbf5`](https://github.com/marko-js/marko/commit/157fbf58a1587dbd6ae02913a1212647dae3c78b) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Avoid serializing closures when it is known the section will not serialize.

- [#2779](https://github.com/marko-js/marko/pull/2779) [`f388228`](https://github.com/marko-js/marko/commit/f388228adea301e8d115d862a889de2492fba4ea) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Misc tags api compat improvements.

## 6.0.51

### Patch Changes

- [#2777](https://github.com/marko-js/marko/pull/2777) [`e8856c8`](https://github.com/marko-js/marko/commit/e8856c820990c0d441279503fdf4b709e3894f1a) Thanks [@LuLaValva](https://github.com/LuLaValva)! - Improve dynamic tag content

## 6.0.50

### Patch Changes

- [#2771](https://github.com/marko-js/marko/pull/2771) [`ff7a879`](https://github.com/marko-js/marko/commit/ff7a87935eef0f7f2bc52c8c483c049a2f38f144) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Ensure deserialized functions always called after normal assignments in the serializer.

## 6.0.49

### Patch Changes

- [#2769](https://github.com/marko-js/marko/pull/2769) [`7680160`](https://github.com/marko-js/marko/commit/76801609170a92baca0fe800ba273238abd3893e) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Runtime types improvements. Add CI validation to runtime types files.

- [#2769](https://github.com/marko-js/marko/pull/2769) [`f139907`](https://github.com/marko-js/marko/commit/f1399079f977742ecf438ecef1a3227f6900d6bb) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Special case meta tags content attribute to not be processed as body content.

## 6.0.48

### Patch Changes

- [#2766](https://github.com/marko-js/marko/pull/2766) [`9c66e30`](https://github.com/marko-js/marko/commit/9c66e30094c2628503c302b4e5e54c98f04818df) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Fix invalid compat import for prod builds.

- [#2766](https://github.com/marko-js/marko/pull/2766) [`6027c1e`](https://github.com/marko-js/marko/commit/6027c1e9817879b7d08931f7cefa45d10719df39) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Tags api compat runtime fixes.

- [#2766](https://github.com/marko-js/marko/pull/2766) [`0dd9c7c`](https://github.com/marko-js/marko/commit/0dd9c7c50ae7f1a2a6b6b1802abdd46297264a89) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Add error messages when providing an invalid renderId or runtimeId.

## 6.0.47

### Patch Changes

- [#2763](https://github.com/marko-js/marko/pull/2763) [`b7776cf`](https://github.com/marko-js/marko/commit/b7776cf76231a5cb1110ae779f91a75b0b9a9be7) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Ensure runtime id is provided through init.

## 6.0.46

### Patch Changes

- [#2760](https://github.com/marko-js/marko/pull/2760) [`6777f59`](https://github.com/marko-js/marko/commit/6777f59b3babe84bea5b3f157f6ccd04853b511f) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Fix tags api types.

## 6.0.45

### Patch Changes

- [#2758](https://github.com/marko-js/marko/pull/2758) [`5abf496`](https://github.com/marko-js/marko/commit/5abf496c6ce9cc5d2d0ade3e92015a14c51ba9b9) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Fix tags api types folder regression.

## 6.0.44

### Patch Changes

- [#2756](https://github.com/marko-js/marko/pull/2756) [`46f1f90`](https://github.com/marko-js/marko/commit/46f1f9075043754aadec1175db5885f72c84e016) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Improve tags api compat.

- Updated dependencies [[`46f1f90`](https://github.com/marko-js/marko/commit/46f1f9075043754aadec1175db5885f72c84e016)]:
  - @marko/compiler@5.39.33

## 6.0.43

### Patch Changes

- [#2753](https://github.com/marko-js/marko/pull/2753) [`9ba0cab`](https://github.com/marko-js/marko/commit/9ba0cab6474e7cd483b93992be5b8b5e7c8df0aa) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Update package dependencies.

- [#2753](https://github.com/marko-js/marko/pull/2753) [`9ba0cab`](https://github.com/marko-js/marko/commit/9ba0cab6474e7cd483b93992be5b8b5e7c8df0aa) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Improve source location information for static statements.

- Updated dependencies [[`9ba0cab`](https://github.com/marko-js/marko/commit/9ba0cab6474e7cd483b93992be5b8b5e7c8df0aa)]:
  - @marko/compiler@5.39.32

## 6.0.42

### Patch Changes

- [#2752](https://github.com/marko-js/marko/pull/2752) [`6a75d80`](https://github.com/marko-js/marko/commit/6a75d80655601e5dadfa4972455bea7d3b4aa28b) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Treat optional call expressions as call expressions during analysis.

- [#2752](https://github.com/marko-js/marko/pull/2752) [`cc069bc`](https://github.com/marko-js/marko/commit/cc069bcbd169b8d0a7dc9a81f559db1c2536cbf5) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Fix issue with "0" being stripped from function calls by normalizer in cases with a literal 0.

- Updated dependencies [[`9e0684f`](https://github.com/marko-js/marko/commit/9e0684f1171d7ab8364be719c4cf5b62df78126c)]:
  - @marko/compiler@5.39.31

## 6.0.41

### Patch Changes

- [#2745](https://github.com/marko-js/marko/pull/2745) [`742fca5`](https://github.com/marko-js/marko/commit/742fca55e359d3635d87d7b7d61aab4c83673f12) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Allow reading proposed tag variable value after writing.

- [#2746](https://github.com/marko-js/marko/pull/2746) [`064f068`](https://github.com/marko-js/marko/commit/064f068fdb0e16f5dc2534dce5f5edb706a71df5) Thanks [@LuLaValva](https://github.com/LuLaValva)! - Allow `content` attribute in native tags

## 6.0.40

### Patch Changes

- [#2741](https://github.com/marko-js/marko/pull/2741) [`023768a`](https://github.com/marko-js/marko/commit/023768a87452b9983de92d29576a7372febb8585) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Fix incorrect walks string generated when static placeholder text used with adjacent text node.

## 6.0.39

### Patch Changes

- [#2739](https://github.com/marko-js/marko/pull/2739) [`ecfafff`](https://github.com/marko-js/marko/commit/ecfafff13b73062afb056798ba61605ef52d410c) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Loosen return tag types.

## 6.0.38

### Patch Changes

- [#2737](https://github.com/marko-js/marko/pull/2737) [`234d6f4`](https://github.com/marko-js/marko/commit/234d6f41be611f11a03a4e6361f7878408168868) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Fix types for return of mounted templates.

## 6.0.37

### Patch Changes

- [#2734](https://github.com/marko-js/marko/pull/2734) [`b6ba333`](https://github.com/marko-js/marko/commit/b6ba333ee289ff27a549d1a2ea60b06338cb7ef5) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Upgrade all deps. Fix support for [discard binding proposal](https://github.com/tc39/proposal-discard-binding).

- Updated dependencies [[`b6ba333`](https://github.com/marko-js/marko/commit/b6ba333ee289ff27a549d1a2ea60b06338cb7ef5)]:
  - @marko/compiler@5.39.29

## 6.0.36

### Patch Changes

- [#2732](https://github.com/marko-js/marko/pull/2732) [`74332ef`](https://github.com/marko-js/marko/commit/74332ef7fedb1f49a39ef884f7421c45749330c9) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Fix issue reading trying to get the root function from a exported function.

## 6.0.35

### Patch Changes

- [#2730](https://github.com/marko-js/marko/pull/2730) [`7c00601`](https://github.com/marko-js/marko/commit/7c00601356d3b41d0aa083688f90484c7e692a4d) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Fix issue with multi level rest destructuring tag vars.

## 6.0.34

### Patch Changes

- [#2728](https://github.com/marko-js/marko/pull/2728) [`7dd3fda`](https://github.com/marko-js/marko/commit/7dd3fda1349d2e557997f060b85738f8670d760f) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Fix support for rest patterns in tag variables not creating a new object.

## 6.0.33

### Patch Changes

- [#2726](https://github.com/marko-js/marko/pull/2726) [`79cfb0f`](https://github.com/marko-js/marko/commit/79cfb0fbd1e093434cc1d74493a8cb755f5eef83) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Fix support for assigning to tag variables from a destructure.

## 6.0.32

### Patch Changes

- [#2724](https://github.com/marko-js/marko/pull/2724) [`54c8d2b`](https://github.com/marko-js/marko/commit/54c8d2bb5613e6496372e8be1842f8ffad0b9acf) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Fix issue where intersections were being added to an alias rather than the source binding.

- [#2723](https://github.com/marko-js/marko/pull/2723) [`67562dc`](https://github.com/marko-js/marko/commit/67562dc3e63491d90f9168550f33a441e8ddafd0) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Expose programatic api for reading and writing to a manually mounted template (eg for use in testing).

## 6.0.31

### Patch Changes

- [#2719](https://github.com/marko-js/marko/pull/2719) [`0c65dc4`](https://github.com/marko-js/marko/commit/0c65dc40f85757c40de0a68977c64c6cfc339b2e) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Fix issue where custom tags were incorrectly outputting tag variables as a const in ssr.

## 6.0.30

### Patch Changes

- [#2717](https://github.com/marko-js/marko/pull/2717) [`3519383`](https://github.com/marko-js/marko/commit/3519383a66d2459154e36b9f9abca4d7333d2145) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Fix issue where lifecycle tag binding was pruned due to having no tracked references.

## 6.0.29

### Patch Changes

- [#2715](https://github.com/marko-js/marko/pull/2715) [`e60a20f`](https://github.com/marko-js/marko/commit/e60a20f7e2dcbdb2dcfa45bc15f2901ffd0443c7) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Remove script tag definition that caused a conflict when in interop mode.

- [#2715](https://github.com/marko-js/marko/pull/2715) [`dc178ce`](https://github.com/marko-js/marko/commit/dc178ced9f75aac923f3c5b043aa40d62e8d0f4d) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Move translator loading logic back into shared utility. Moving this out caused a regression for tools that call `getRuntimeEntryFiles` or `taglib.buildLookup` directly.

- Updated dependencies [[`e60a20f`](https://github.com/marko-js/marko/commit/e60a20f7e2dcbdb2dcfa45bc15f2901ffd0443c7), [`dc178ce`](https://github.com/marko-js/marko/commit/dc178ced9f75aac923f3c5b043aa40d62e8d0f4d)]:
  - @marko/compiler@5.39.28

## 6.0.28

### Patch Changes

- [#2713](https://github.com/marko-js/marko/pull/2713) [`2d11230`](https://github.com/marko-js/marko/commit/2d11230f012397681f63071ea9b33b246b45f9ad) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Avoid using "util" module to improve browser compat of compiler.

- Updated dependencies [[`2d11230`](https://github.com/marko-js/marko/commit/2d11230f012397681f63071ea9b33b246b45f9ad)]:
  - @marko/compiler@5.39.27

## 6.0.27

### Patch Changes

- [#2711](https://github.com/marko-js/marko/pull/2711) [`791cbb8`](https://github.com/marko-js/marko/commit/791cbb80dfc329610fc42b26bdf3649087f445b2) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Fix rendering the body tag in the interop translator with the tags api.

## 6.0.26

### Patch Changes

- [#2707](https://github.com/marko-js/marko/pull/2707) [`89d0196`](https://github.com/marko-js/marko/commit/89d019678ecfb004af9b5892482d6af9d6178c4d) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Fix false positive interop checks.

- Updated dependencies [[`89d0196`](https://github.com/marko-js/marko/commit/89d019678ecfb004af9b5892482d6af9d6178c4d)]:
  - @marko/compiler@5.39.26

## 6.0.25

### Patch Changes

- [#2705](https://github.com/marko-js/marko/pull/2705) [`75eaa9d`](https://github.com/marko-js/marko/commit/75eaa9d833f6711b5b60757ef02ca987fc310b01) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Avoid using process api in compiler to make it easier to load in environments without it.

- Updated dependencies [[`75eaa9d`](https://github.com/marko-js/marko/commit/75eaa9d833f6711b5b60757ef02ca987fc310b01)]:
  - @marko/compiler@5.39.25

## 6.0.24

### Patch Changes

- [#2703](https://github.com/marko-js/marko/pull/2703) [`f67361b`](https://github.com/marko-js/marko/commit/f67361bc52191c9092833438868f09bb583252e1) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Load interop translator by default if installed.

- Updated dependencies [[`f67361b`](https://github.com/marko-js/marko/commit/f67361bc52191c9092833438868f09bb583252e1)]:
  - @marko/compiler@5.39.24

## 6.0.23

### Patch Changes

- [#2701](https://github.com/marko-js/marko/pull/2701) [`8f68b6e`](https://github.com/marko-js/marko/commit/8f68b6efc960a3e59f59cbb49c549a248a03a79f) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Fix regression where explicitly passing in `undefined` for translator was not loading the default translator.

- Updated dependencies [[`8f68b6e`](https://github.com/marko-js/marko/commit/8f68b6efc960a3e59f59cbb49c549a248a03a79f)]:
  - @marko/compiler@5.39.23

## 6.0.22

### Patch Changes

- [#2699](https://github.com/marko-js/marko/pull/2699) [`dc3ee34`](https://github.com/marko-js/marko/commit/dc3ee348e9b95c12bf74d4212a82756d7ad90a18) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Avoid node:crypto - use custom hash algo for component ids.

- Updated dependencies [[`dc3ee34`](https://github.com/marko-js/marko/commit/dc3ee348e9b95c12bf74d4212a82756d7ad90a18)]:
  - @marko/compiler@5.39.22

## 6.0.21

### Patch Changes

- [#2693](https://github.com/marko-js/marko/pull/2693) [`9f99426`](https://github.com/marko-js/marko/commit/9f99426bf6389d7eebe28a70dcc81405772fda5a) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Prefer namespace imports for inline css modules.

- [#2696](https://github.com/marko-js/marko/pull/2696) [`eefa829`](https://github.com/marko-js/marko/commit/eefa829038b5bdd6edbbf95cef61e152e91ca9ec) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Improve internal module loading api. Ensure all taglib requires happen relative to project dir.

- [#2692](https://github.com/marko-js/marko/pull/2692) [`c97be4e`](https://github.com/marko-js/marko/commit/c97be4e1476266ee4f4b43533e2a39f47b8ed710) Thanks [@paperclover](https://github.com/paperclover)! - Ensure errors are rethrown when rendering sync in SSR via `.toString`

- Updated dependencies [[`eefa829`](https://github.com/marko-js/marko/commit/eefa829038b5bdd6edbbf95cef61e152e91ca9ec)]:
  - @marko/compiler@5.39.21

## 6.0.20

### Patch Changes

- [#2691](https://github.com/marko-js/marko/pull/2691) [`0758ae7`](https://github.com/marko-js/marko/commit/0758ae72e3a3da9fdf1dca37001aa6e8479655f9) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Fix issue where scriptlets with comments were being printed without brackets when printing the marko ast.

- [#2689](https://github.com/marko-js/marko/pull/2689) [`7185a53`](https://github.com/marko-js/marko/commit/7185a537b45c848706f091c3301f831e9da16589) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Lazily create scopes for effects that run without referencing anything from scope (scope not serialized).

- Updated dependencies [[`0758ae7`](https://github.com/marko-js/marko/commit/0758ae72e3a3da9fdf1dca37001aa6e8479655f9)]:
  - @marko/compiler@5.39.20

## 6.0.19

### Patch Changes

- [#2687](https://github.com/marko-js/marko/pull/2687) [`219eae8`](https://github.com/marko-js/marko/commit/219eae83665709ae756304adedeed31d2d241c89) Thanks [@LuLaValva](https://github.com/LuLaValva)! - Correct SVG types

## 6.0.18

### Patch Changes

- [#2684](https://github.com/marko-js/marko/pull/2684) [`ef5960b`](https://github.com/marko-js/marko/commit/ef5960bbcca467627eaaaa501e0ce0b23211e590) Thanks [@LuLaValva](https://github.com/LuLaValva)! - Add types for SVG tags

- [#2685](https://github.com/marko-js/marko/pull/2685) [`00828b0`](https://github.com/marko-js/marko/commit/00828b092e2279f0bc48183b4b6eb8c8bda81890) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Fix issue with html-style and html-script not being resumed when they only contain stateful placeholder content.

## 6.0.17

### Patch Changes

- [#2681](https://github.com/marko-js/marko/pull/2681) [`dffd5ee`](https://github.com/marko-js/marko/commit/dffd5ee981e67a564568852305e41769b8c5e57b) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Fix issue with local binding reference in same scope

## 6.0.16

### Patch Changes

- [#2680](https://github.com/marko-js/marko/pull/2680) [`692c9a2`](https://github.com/marko-js/marko/commit/692c9a25ac73011c7d2b440f2688bb2d24b7d566) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Fix issue with closures over a for tag param inside attribute tags.

- [#2678](https://github.com/marko-js/marko/pull/2678) [`ddf2b54`](https://github.com/marko-js/marko/commit/ddf2b54ed093eb47f2135cd780a57397f5f477e8) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Merge closure setup calls into setup functions.

## 6.0.15

### Patch Changes

- [#2676](https://github.com/marko-js/marko/pull/2676) [`e906fa0`](https://github.com/marko-js/marko/commit/e906fa0945c125519cf4cd1e3d0c27a6c775f27c) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Fix issue where section was missing in translate for a node that was already removed.

## 6.0.14

### Patch Changes

- [#2674](https://github.com/marko-js/marko/pull/2674) [`8c0f463`](https://github.com/marko-js/marko/commit/8c0f46353f8555283e966ce683fe1f07df0d7ef8) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Fix issue with hydrating a closure within a non stateful for loop.

- [#2672](https://github.com/marko-js/marko/pull/2672) [`2da2ca0`](https://github.com/marko-js/marko/commit/2da2ca00770125725e257c667ed4c2a5f379f8d0) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Inline closures functions when single closure for section.

## 6.0.13

### Patch Changes

- [#2670](https://github.com/marko-js/marko/pull/2670) [`42fff26`](https://github.com/marko-js/marko/commit/42fff26f85d311339835a05233ebf4767f2cd262) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Sort signals by their downstream values and intersections.

## 6.0.12

### Patch Changes

- [#2668](https://github.com/marko-js/marko/pull/2668) [`2bd16d4`](https://github.com/marko-js/marko/commit/2bd16d4fd15092af9ae3e2742444166ca19a2842) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Fix misc issues with aliases and especially aliases which are within a closure.

## 6.0.11

### Patch Changes

- [#2666](https://github.com/marko-js/marko/pull/2666) [`c5369b2`](https://github.com/marko-js/marko/commit/c5369b24dc2850fe6e4f4bdc7c5dcdccd169c886) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Refactor resume branch logic to be better treeshaken with esbuild.

## 6.0.10

### Patch Changes

- [#2664](https://github.com/marko-js/marko/pull/2664) [`5f6d9b4`](https://github.com/marko-js/marko/commit/5f6d9b481d80218bdc143e2b2905b0391ec7da9f) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Prefer node markers for stateless control flow.

## 6.0.9

### Patch Changes

- [#2663](https://github.com/marko-js/marko/pull/2663) [`b56bb18`](https://github.com/marko-js/marko/commit/b56bb18c3aaee1951f83658773354c584593d72a) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Allow branch resume logic to be better treeshaken.

- [#2661](https://github.com/marko-js/marko/pull/2661) [`d4969a2`](https://github.com/marko-js/marko/commit/d4969a29b9fffcd73b2e1a159ac8b9a7a1557558) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Refactor serialize reasons to keep track of all source states.

- [#2663](https://github.com/marko-js/marko/pull/2663) [`3e74c2f`](https://github.com/marko-js/marko/commit/3e74c2fec0a6a3ac6a2225ce54f40f288bbb96af) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Add debug comments to serialize reasons.

## 6.0.8

### Patch Changes

- [#2660](https://github.com/marko-js/marko/pull/2660) [`033ca6c`](https://github.com/marko-js/marko/commit/033ca6cb05b3c8d692dc507626d9ca54fabce64b) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Fix issue with class/style attributes that have a mix of dynamic and static properties/items.

- [#2660](https://github.com/marko-js/marko/pull/2660) [`bf6a0a2`](https://github.com/marko-js/marko/commit/bf6a0a2dc8fcbd2befe067f47a57c8a9978d6d7d) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Remove automatic appending of `px` to (some) style properties when an number was passed as the value.

- [#2658](https://github.com/marko-js/marko/pull/2658) [`21049fa`](https://github.com/marko-js/marko/commit/21049fa6107de68a636e4d6567167e7c22cc0247) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Fix issue with static html-script and html-style.

## 6.0.7

### Patch Changes

- [#2656](https://github.com/marko-js/marko/pull/2656) [`9fd1eb4`](https://github.com/marko-js/marko/commit/9fd1eb4840d757e883b761d478f743499368fa7b) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Fix issue where lastEffect was not being cleared.

- [#2656](https://github.com/marko-js/marko/pull/2656) [`cc140c2`](https://github.com/marko-js/marko/commit/cc140c21611b7fa006cc2ffa8b6d01d6aacfd3e1) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Avoid serialize markers for await tags when static.

## 6.0.6

### Patch Changes

- [#2654](https://github.com/marko-js/marko/pull/2654) [`42b380f`](https://github.com/marko-js/marko/commit/42b380f6bdcf6eab8deb22f254772ee43e3c91ea) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Avoid using "this" in inline resume code to reduce inline code and bundle size.

## 6.0.5

### Patch Changes

- [#2653](https://github.com/marko-js/marko/pull/2653) [`ad4998b`](https://github.com/marko-js/marko/commit/ad4998b1e62c5ae328ddb0d65f835ff02bee3864) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Optimize bundled size of resume runtime.

- [#2652](https://github.com/marko-js/marko/pull/2652) [`83c44e4`](https://github.com/marko-js/marko/commit/83c44e4220c3490ef4b8a62e2feb84fdb4d0ba01) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Micro optimize scheduler bundle size.

- [#2650](https://github.com/marko-js/marko/pull/2650) [`b8ddadb`](https://github.com/marko-js/marko/commit/b8ddadbe411209e972cc4ef61dd45391f309bb17) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Optimize statically known values for delimited attr helpers (class/style) for client side rendering.

## 6.0.4

### Patch Changes

- [#2648](https://github.com/marko-js/marko/pull/2648) [`73399fe`](https://github.com/marko-js/marko/commit/73399fefe3478140b7a4feec437ed739ae306201) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Optimize to avoid for/if branch markers in some cases.

- [#2648](https://github.com/marko-js/marko/pull/2648) [`cdf24a3`](https://github.com/marko-js/marko/commit/cdf24a3d0eee7718be0b176dea1c1434f3bd49ac) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Isolate branch serialization reasons from the branch itself.

- [#2648](https://github.com/marko-js/marko/pull/2648) [`4cfdcb5`](https://github.com/marko-js/marko/commit/4cfdcb5ccaab5a15117cfff4c4d1ba09aecd7cc0) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Fix marker serialization for if and dynamic tag in some optimized cases.

- [#2648](https://github.com/marko-js/marko/pull/2648) [`3b883d4`](https://github.com/marko-js/marko/commit/3b883d4d9729e5b13bb0e8d19850c087d0e8245f) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Fix issue where tags added from the translator were given lower priority than tags added by the core compiler.

- Updated dependencies [[`3b883d4`](https://github.com/marko-js/marko/commit/3b883d4d9729e5b13bb0e8d19850c087d0e8245f)]:
  - @marko/compiler@5.39.19

## 6.0.3

### Patch Changes

- [#2647](https://github.com/marko-js/marko/pull/2647) [`b355d52`](https://github.com/marko-js/marko/commit/b355d52f26869b13faec1fa266240234ce5cd101) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Fix for loop marker serialization when marker has more serialize reasons than the branch.

- [#2645](https://github.com/marko-js/marko/pull/2645) [`eec34f2`](https://github.com/marko-js/marko/commit/eec34f2d889ff540718660c1daa7e93dbf321659) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Optimize duplicate adjacent effect calls to reuse the effect id.

## 6.0.2

### Patch Changes

- [#2643](https://github.com/marko-js/marko/pull/2643) [`2872b44`](https://github.com/marko-js/marko/commit/2872b44bf5fdd39ec70dc65c9e29abddbaefd63b) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Move owner and closure serialization tracking to analyze phase.

## 6.0.1

### Patch Changes

- [#2641](https://github.com/marko-js/marko/pull/2641) [`55f0e5b`](https://github.com/marko-js/marko/commit/55f0e5b3f1cc414626dbf4947956b14b8aae34ae) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Avoid serializing markers for stateless define tag instances.

- [#2641](https://github.com/marko-js/marko/pull/2641) [`6a09e6e`](https://github.com/marko-js/marko/commit/6a09e6ee4a32b56131843fad7a28442e7fc25aff) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Fix race condition when runtime loads before initial flush.
  Refactor inline runtime to be slightly smaller.

## 6.0.0

### Major Changes

- [#2640](https://github.com/marko-js/marko/pull/2640) [`5346eb9`](https://github.com/marko-js/marko/commit/5346eb92884e91a410de8e77f557c33861da89b0) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Release Tags API as 6.0.0.

### Patch Changes

- [#2638](https://github.com/marko-js/marko/pull/2638) [`8386d6e`](https://github.com/marko-js/marko/commit/8386d6edfb63c0b33ab1a44e00049a7b0ae57f15) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Avoid id tag variable seen as stateful.

## 0.3.86

### Patch Changes

- [#2636](https://github.com/marko-js/marko/pull/2636) [`ff1776f`](https://github.com/marko-js/marko/commit/ff1776f4ac97771da6a254620a0f95d6b2c8d3e9) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Add better nullable check to node evaluation.

- [#2636](https://github.com/marko-js/marko/pull/2636) [`04a9267`](https://github.com/marko-js/marko/commit/04a9267a6fc865da0f083e19116198e4a675b2b9) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Reduce serialized data and markers by providing input based serialize reasons from parent to child and guarding in the child.

- [#2636](https://github.com/marko-js/marko/pull/2636) [`04a9267`](https://github.com/marko-js/marko/commit/04a9267a6fc865da0f083e19116198e4a675b2b9) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Analyze return tag values from child templates to determine if they are stateful.

- Updated dependencies [[`dc748b4`](https://github.com/marko-js/marko/commit/dc748b4932c1db3f556d4fc898ab47911828b6b6)]:
  - @marko/compiler@5.39.18

## 0.3.85

### Patch Changes

- [#2634](https://github.com/marko-js/marko/pull/2634) [`fa702ed`](https://github.com/marko-js/marko/commit/fa702ed89878bcb96add7011f98e972130fa9292) Thanks [@rturnq](https://github.com/rturnq)! - Prevents error when readable stream is cancelled externally

## 0.3.84

### Patch Changes

- [#2632](https://github.com/marko-js/marko/pull/2632) [`e722c2b`](https://github.com/marko-js/marko/commit/e722c2bde4c6ab5c75cb25cf0240b2420832af12) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Improve capturing of serialize reasons.

## 0.3.83

### Patch Changes

- [#2631](https://github.com/marko-js/marko/pull/2631) [`588a8a6`](https://github.com/marko-js/marko/commit/588a8a6e0a9ebcf9f20791e54cf386974e30c78d) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Switch generated UIDs to start with `# @marko/runtime-tags to avoid conflicts with babels generated UIDs.

- [#2629](https://github.com/marko-js/marko/pull/2629) [`a0ff17e`](https://github.com/marko-js/marko/commit/a0ff17e3776a0da5fb6b325c7a0e56b89db7f04b) Thanks [@rturnq](https://github.com/rturnq)! - Fix dynamic tag end marker writen to wrong chunk

## 0.3.82

### Patch Changes

- [#2627](https://github.com/marko-js/marko/pull/2627) [`9cba851`](https://github.com/marko-js/marko/commit/9cba851a4b58704a10fdfcad749d79e85be833db) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Ensure when tag arguments are used for a dynamic tag with a single argument that it does not become treated the same as normal input. The normal input runtime will add the `content` as well as default to an empty object which was breaking some usages of tag arguments.

- [#2627](https://github.com/marko-js/marko/pull/2627) [`540bbf6`](https://github.com/marko-js/marko/commit/540bbf648415bedbcf046467964dbe95cbb6a5c5) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Fix issue where a single dynamic child was being marked as a single node.

## 0.3.81

### Patch Changes

- [#2625](https://github.com/marko-js/marko/pull/2625) [`88a05bc`](https://github.com/marko-js/marko/commit/88a05bc093f5491a77b9d08950ed5ff2f0390df3) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Fix race condition with client side await tag.

- [#2625](https://github.com/marko-js/marko/pull/2625) [`88a05bc`](https://github.com/marko-js/marko/commit/88a05bc093f5491a77b9d08950ed5ff2f0390df3) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Fix issue where branches created in a detached await tag would be given the incorrect namespace.

## 0.3.80

### Patch Changes

- [#2623](https://github.com/marko-js/marko/pull/2623) [`525345f`](https://github.com/marko-js/marko/commit/525345f4f71c53c00d7779a4c5d95fceaec3d33b) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Refactor getFile and getProgram handling to avoid circular references between babel-utils and babel-plugin code.

- Updated dependencies [[`525345f`](https://github.com/marko-js/marko/commit/525345f4f71c53c00d7779a4c5d95fceaec3d33b)]:
  - @marko/compiler@5.39.17

## 0.3.79

### Patch Changes

- [#2621](https://github.com/marko-js/marko/pull/2621) [`aad5a8d`](https://github.com/marko-js/marko/commit/aad5a8d9473d0add9093f84bd570af8d47e0a4db) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Expose getProgram and getFile apis from @marko/compiler/babel-utils. Exposing it directly from the compiler was causing an issue with the website.

- Updated dependencies [[`aad5a8d`](https://github.com/marko-js/marko/commit/aad5a8d9473d0add9093f84bd570af8d47e0a4db)]:
  - @marko/compiler@5.39.16

## 0.3.78

### Patch Changes

- [#2619](https://github.com/marko-js/marko/pull/2619) [`4524bc4`](https://github.com/marko-js/marko/commit/4524bc459817d7d57530f2e900be80c460c98c2c) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Fix issue with controlled input selection ranges.

## 0.3.77

### Patch Changes

- [#2617](https://github.com/marko-js/marko/pull/2617) [`0d3bfeb`](https://github.com/marko-js/marko/commit/0d3bfeb3e3ac9a787fef639d41ed2100833e1791) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Inline callees directly into signal functions when possible.

- [#2617](https://github.com/marko-js/marko/pull/2617) [`e6e6331`](https://github.com/marko-js/marko/commit/e6e633123af679775cc2463cdc936b7524f1a2fc) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Switch to custom UID helper.

## 0.3.76

### Patch Changes

- [#2613](https://github.com/marko-js/marko/pull/2613) [`ac64e18`](https://github.com/marko-js/marko/commit/ac64e18ef6093a57ecd4ae26492c4ac28b2a80b7) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Fix issue with parentNode reference when placeholder is displayed.

## 0.3.75

### Patch Changes

- [#2611](https://github.com/marko-js/marko/pull/2611) [`a8e1392`](https://github.com/marko-js/marko/commit/a8e13925f55d29bdfdf1be7c4802dec3dc829613) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Fix issue with some visitors not being called for html-\* tags.

## 0.3.74

### Patch Changes

- [#2609](https://github.com/marko-js/marko/pull/2609) [`edbbadd`](https://github.com/marko-js/marko/commit/edbbadde15bd4764a0ada7a80f3446c7fa2e5b1f) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Fix issue with ssr apis being incorrectly marked as pure.

- [#2609](https://github.com/marko-js/marko/pull/2609) [`96b33d9`](https://github.com/marko-js/marko/commit/96b33d97dd2299b61a782bdbd543287f543feabd) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Fix support for `for await` statements within script tag.

- [#2609](https://github.com/marko-js/marko/pull/2609) [`9fd96ac`](https://github.com/marko-js/marko/commit/9fd96acc81f06c3b4d14daa39406b2ae335b7ff5) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Ensure walk/deserialized always called when serializer was flushed.

- [#2609](https://github.com/marko-js/marko/pull/2609) [`9fd96ac`](https://github.com/marko-js/marko/commit/9fd96acc81f06c3b4d14daa39406b2ae335b7ff5) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Avoid serializing already consumed iterators.

## 0.3.73

### Patch Changes

- [#2607](https://github.com/marko-js/marko/pull/2607) [`7110193`](https://github.com/marko-js/marko/commit/7110193bffa170a662549265c33996691f17453e) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Refactor to use getProgram/getFile api from compiler.

- Updated dependencies [[`7110193`](https://github.com/marko-js/marko/commit/7110193bffa170a662549265c33996691f17453e)]:
  - @marko/compiler@5.39.15

## 0.3.72

### Patch Changes

- [#2604](https://github.com/marko-js/marko/pull/2604) [`3e2ea77`](https://github.com/marko-js/marko/commit/3e2ea77799dc6a7ab37dc0dc503960f48ae2f689) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Avoid using push/unshift container which causes unecessary revisits.

- [#2604](https://github.com/marko-js/marko/pull/2604) [`e3d4485`](https://github.com/marko-js/marko/commit/e3d4485ab6eacf1ceb1234a4a2c81aa115ccc3a1) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Avoid priting identifiers for value and closure parameters when the value is not referenced.

- [#2606](https://github.com/marko-js/marko/pull/2606) [`bfa2bc1`](https://github.com/marko-js/marko/commit/bfa2bc1dbabd7a3e0e40557d1de64c202b47745e) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Fix issue where placeholder was being re-created across await tag runs.

- [#2604](https://github.com/marko-js/marko/pull/2604) [`70cb96e`](https://github.com/marko-js/marko/commit/70cb96eb8790434014eef368cea62a060522f231) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Expose better types for working with ssr and csr rendered template results.

- [#2604](https://github.com/marko-js/marko/pull/2604) [`70cb96e`](https://github.com/marko-js/marko/commit/70cb96eb8790434014eef368cea62a060522f231) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Ensure `toReadable` api on rendered ssr templates are text encoded.

## 0.3.71

### Patch Changes

- [#2602](https://github.com/marko-js/marko/pull/2602) [`6a2560a`](https://github.com/marko-js/marko/commit/6a2560a3d921b379f27745f0e1feb0ebb5b3c981) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Fix issue with render queue not consumed when replacing placeholder/catch.

## 0.3.70

### Patch Changes

- [#2599](https://github.com/marko-js/marko/pull/2599) [`34006df`](https://github.com/marko-js/marko/commit/34006dfc502c30848c2de0aaa3b1276d153612c5) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Refactor serializer flushing to be decoupled from writing the rest of the script code.

## 0.3.69

### Patch Changes

- [#2596](https://github.com/marko-js/marko/pull/2596) [`ff59411`](https://github.com/marko-js/marko/commit/ff59411349f03a4a0b7838848eafa2631c8058f2) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Refactor to move more logic (especially around serialization) into the html runtime.

## 0.3.68

### Patch Changes

- [#2594](https://github.com/marko-js/marko/pull/2594) [`f55c857`](https://github.com/marko-js/marko/commit/f55c857ca8a077e99bee9f659a518b8f82df89ff) Thanks [@mlrawlings](https://github.com/mlrawlings)! - fix batched resolved async/try for ssr and resuming placeholders where the comment markers have different parents (due to implicit nodes added by the parser)

## 0.3.67

### Patch Changes

- [#2591](https://github.com/marko-js/marko/pull/2591) [`67103c0`](https://github.com/marko-js/marko/commit/67103c084b98a6ba91de07f24fbe4b765a80e546) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Serialize scopes as arrays and use delta offsets for scope ids.

## 0.3.66

### Patch Changes

- [#2589](https://github.com/marko-js/marko/pull/2589) [`5aad665`](https://github.com/marko-js/marko/commit/5aad6653a3f14d8d15a9ff103e9a38b25a3bd1ee) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Avoid outputting some unnecessary scope destructures.

- [#2589](https://github.com/marko-js/marko/pull/2589) [`765915a`](https://github.com/marko-js/marko/commit/765915ad423827bcdec6281413c59ecda173a80d) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Fix issue when using with latest version of babel.

- Updated dependencies [[`765915a`](https://github.com/marko-js/marko/commit/765915ad423827bcdec6281413c59ecda173a80d)]:
  - @marko/compiler@5.39.14

## 0.3.65

### Patch Changes

- [#2587](https://github.com/marko-js/marko/pull/2587) [`c217dd2`](https://github.com/marko-js/marko/commit/c217dd2d28a731f2243a4f5715ef1eef16067da9) Thanks [@mlrawlings](https://github.com/mlrawlings)! - resume fixes & perf

## 0.3.64

### Patch Changes

- [#2583](https://github.com/marko-js/marko/pull/2583) [`4c9919f`](https://github.com/marko-js/marko/commit/4c9919f978e7fdd9c2d0d830c5ad3be4ae1e7cb5) Thanks [@mlrawlings](https://github.com/mlrawlings)! - Try effect batching

## 0.3.63

### Patch Changes

- [#2581](https://github.com/marko-js/marko/pull/2581) [`4ea18b8`](https://github.com/marko-js/marko/commit/4ea18b8d4c831cf84cd2c1a458305fbf81085e9b) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Optimize serializing FormData objects.

- [#2581](https://github.com/marko-js/marko/pull/2581) [`ec3e55c`](https://github.com/marko-js/marko/commit/ec3e55ca89fb152af0bad6e02943a7eac582f2c8) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Avoid serializing sparse arrays.

- [#2581](https://github.com/marko-js/marko/pull/2581) [`0101b39`](https://github.com/marko-js/marko/commit/0101b39a6839b36e8cfc919baa9d139054634831) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Optimize serializing large maps.

## 0.3.62

### Patch Changes

- [#2579](https://github.com/marko-js/marko/pull/2579) [`544ec95`](https://github.com/marko-js/marko/commit/544ec95dac5fa8ccddb8e2e81bfc28ac3756d949) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Optimize AccessorProp ids.

## 0.3.61

### Patch Changes

- [#2577](https://github.com/marko-js/marko/pull/2577) [`33c3979`](https://github.com/marko-js/marko/commit/33c3979dcbdde3b849a4e8af186f52aaaac55e69) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Improve debug and production Accessor Chars output.

## 0.3.60

### Patch Changes

- [#2573](https://github.com/marko-js/marko/pull/2573) [`1995c96`](https://github.com/marko-js/marko/commit/1995c96c9431339832b0980bfa091abf31b7f650) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Implement client side await tag.
  (NOTE: there are still issues around effect ordering and cleanup)

## 0.3.59

### Patch Changes

- [#2571](https://github.com/marko-js/marko/pull/2571) [`03339a3`](https://github.com/marko-js/marko/commit/03339a350e10428ea311d24310336d6436a86bc8) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Refactor resume api to avoid class.

## 0.3.58

### Patch Changes

- [#2569](https://github.com/marko-js/marko/pull/2569) [`dcff748`](https://github.com/marko-js/marko/commit/dcff7484e99791b921a5f4b5ee7064f5404a027a) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Refactor and optimize owner serialization in the compiler.

- [#2569](https://github.com/marko-js/marko/pull/2569) [`0e93548`](https://github.com/marko-js/marko/commit/0e93548f67c29007f80a4b946c8a1cbbdfe3893b) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Use invoked function helper in more places to avoid unnecessary deopts.

## 0.3.57

### Patch Changes

- [#2566](https://github.com/marko-js/marko/pull/2566) [`4a2e2e3`](https://github.com/marko-js/marko/commit/4a2e2e3e997b4b35b813969924ffc65f6e6399b4) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Fix issue where selection range was being applied to incompatible input nodes.

- [#2568](https://github.com/marko-js/marko/pull/2568) [`7ebd673`](https://github.com/marko-js/marko/commit/7ebd673c969b83f24f378dca182b218e8230cfb8) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Fix issue with html-script, html-style and html-comment causing extra placeholder bindings to be registered.

## 0.3.56

### Patch Changes

- [#2564](https://github.com/marko-js/marko/pull/2564) [`cdb925b`](https://github.com/marko-js/marko/commit/cdb925b4dfe637391c219ae26a5ef5e64261ba3c) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Fix issue where ssr compiled let tags were becoming consts and causing syntax errors.

- [#2564](https://github.com/marko-js/marko/pull/2564) [`da0da1a`](https://github.com/marko-js/marko/commit/da0da1a4aa651aeb31f40a038ab4462c2c85f85e) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Optimize html-script and html-style to avoid creating body sections.

## 0.3.55

### Patch Changes

- [#2562](https://github.com/marko-js/marko/pull/2562) [`d747ef7`](https://github.com/marko-js/marko/commit/d747ef7397d25b9f55e24e3b0f989460a4a7fb8b) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Fix issue referencing unbound walker code.

## 0.3.54

### Patch Changes

- [#2560](https://github.com/marko-js/marko/pull/2560) [`d0fda30`](https://github.com/marko-js/marko/commit/d0fda30c6b1819e360b92c3c852dea7ce52a6a1d) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Fix issue where serialized render data was not being properly synchronized with runtime render data.

## 0.3.53

### Patch Changes

- [#2557](https://github.com/marko-js/marko/pull/2557) [`7d6ea47`](https://github.com/marko-js/marko/commit/7d6ea472de8ff14cd88be3c632b55e49d3b65dfb) Thanks [@LuLaValva](https://github.com/LuLaValva)! - Dynamic attrs on trailing tags

## 0.3.52

### Patch Changes

- [#2554](https://github.com/marko-js/marko/pull/2554) [`89e310e`](https://github.com/marko-js/marko/commit/89e310e9a2355e38fc9779ec2006dadbb553c672) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Avoid getters for renderer args and rename to params.

- [#2554](https://github.com/marko-js/marko/pull/2554) [`f352b09`](https://github.com/marko-js/marko/commit/f352b0994629cf67918bb18929202edbe0b708f6) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Refactor dynamic closures to avoid registration.

- [#2554](https://github.com/marko-js/marko/pull/2554) [`e19cfdd`](https://github.com/marko-js/marko/commit/e19cfddd48178fc601d67f718072d2dcb1d8c736) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Ensure closures always called after setup.

## 0.3.51

### Patch Changes

- [#2551](https://github.com/marko-js/marko/pull/2551) [`2b1ff5e`](https://github.com/marko-js/marko/commit/2b1ff5ea338a3a76dac821a30aa8f5bcfd291e92) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Fix issue with args not being queued with setup.

## 0.3.50

### Patch Changes

- [#2549](https://github.com/marko-js/marko/pull/2549) [`7629cba`](https://github.com/marko-js/marko/commit/7629cbae66145873960082ff1e4dcab39ac9163d) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Fix type for script tag.

- [#2549](https://github.com/marko-js/marko/pull/2549) [`7629cba`](https://github.com/marko-js/marko/commit/7629cbae66145873960082ff1e4dcab39ac9163d) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Reduce bundle size by inlining (shorter) walks string trimming logic.

- [#2549](https://github.com/marko-js/marko/pull/2549) [`7629cba`](https://github.com/marko-js/marko/commit/7629cbae66145873960082ff1e4dcab39ac9163d) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Remove unecessary tracking of branch depth.

## 0.3.49

### Patch Changes

- [#2547](https://github.com/marko-js/marko/pull/2547) [`1fb32b8`](https://github.com/marko-js/marko/commit/1fb32b89d1b06a97c2b247a0f186f700942c47c3) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Fix issue with for/if telling the parent to avoid serializing a marker when it was necessary.

- [#2547](https://github.com/marko-js/marko/pull/2547) [`ce86dec`](https://github.com/marko-js/marko/commit/ce86dec45c2f3ee2ab8701eec7df6fcd58f559d3) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Fix issue where branches with no render content were not having child scopes initialized properly.

## 0.3.48

### Patch Changes

- [#2545](https://github.com/marko-js/marko/pull/2545) [`be54ab2`](https://github.com/marko-js/marko/commit/be54ab200f664efd7e9351f845d477c6b77e90f5) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Deoptimize serializer assignments after 100 assignments to the same reference. This avoids an issue where 1192 assignments in a chain caused a Maximum callstack error in chrome.

## 0.3.47

### Patch Changes

- [#2544](https://github.com/marko-js/marko/pull/2544) [`ff2f413`](https://github.com/marko-js/marko/commit/ff2f413422f297fa4bdbfe32984e28883958db0e) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Use unique scope id counter per $global instance.

- [#2540](https://github.com/marko-js/marko/pull/2540) [`b05c1f7`](https://github.com/marko-js/marko/commit/b05c1f7f3a1e97f964c7ebff051b7b06e12d02c3) Thanks [@mlrawlings](https://github.com/mlrawlings)! - refactor signals to no longer mark but rely soley on queueing for proper execution order

- [#2544](https://github.com/marko-js/marko/pull/2544) [`08e0d24`](https://github.com/marko-js/marko/commit/08e0d245a604380120de16db9e7806a1ccaf459d) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Avoid registering body content when known downstream usage is not serialized.

- [#2534](https://github.com/marko-js/marko/pull/2534) [`cfca41a`](https://github.com/marko-js/marko/commit/cfca41ac8c571d1fecb3b889df5eead1dfe06130) Thanks [@rturnq](https://github.com/rturnq)! - Add support for tag varaible hoisting

- [#2544](https://github.com/marko-js/marko/pull/2544) [`4c87458`](https://github.com/marko-js/marko/commit/4c87458d88bcf80b194234eaed593375f97cd5bf) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Minor queue perf improvements.

- [#2544](https://github.com/marko-js/marko/pull/2544) [`53de7a0`](https://github.com/marko-js/marko/commit/53de7a0b1e80a804e4a4348e8bc5fc0bb0c0c02a) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Avoid "params" on templates, go straight to providing "input".

- Updated dependencies [[`cfca41a`](https://github.com/marko-js/marko/commit/cfca41ac8c571d1fecb3b889df5eead1dfe06130)]:
  - @marko/compiler@5.39.13

## 0.3.46

### Patch Changes

- [#2537](https://github.com/marko-js/marko/pull/2537) [`c4fd6e7`](https://github.com/marko-js/marko/commit/c4fd6e767036bad962f0471a6460d31bcff44a37) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Rename renderer apis to content and create shorthand api for creating registered contents.

- [#2537](https://github.com/marko-js/marko/pull/2537) [`ae24290`](https://github.com/marko-js/marko/commit/ae24290c4c9f9807d70d398e661bb510fb905e09) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Consolidate create branch logic, optimizing code size and creating branches with only side effects and no template code.

## 0.3.45

### Patch Changes

- [#2535](https://github.com/marko-js/marko/pull/2535) [`43522b7`](https://github.com/marko-js/marko/commit/43522b78c3a84090f5f039a7ef2d0935541f81ee) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Avoid creating intersections for closures which are now handled via the queue.

## 0.3.44

### Patch Changes

- [#2532](https://github.com/marko-js/marko/pull/2532) [`5c8c549`](https://github.com/marko-js/marko/commit/5c8c549a324eedfed800a70b44de35bde3de7899) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Unify CSR dynamic tag runtime to avoid separate calls for attrs vs tagName.

- [#2531](https://github.com/marko-js/marko/pull/2531) [`6065ff2`](https://github.com/marko-js/marko/commit/6065ff2563335f622376bca1dafc94ed6e0b2aa6) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Ensure & is escaped for server side attributes to improve consistency with csr.

## 0.3.43

### Patch Changes

- [#2523](https://github.com/marko-js/marko/pull/2523) [`69581ba`](https://github.com/marko-js/marko/commit/69581baff368d6a17a980a1b746d8a96a6a9afbc) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Improve serialization errors.

- [#2523](https://github.com/marko-js/marko/pull/2523) [`69581ba`](https://github.com/marko-js/marko/commit/69581baff368d6a17a980a1b746d8a96a6a9afbc) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Refactor scope serialization compiler apis.

## 0.3.42

### Patch Changes

- [#2520](https://github.com/marko-js/marko/pull/2520) [`bc3189e`](https://github.com/marko-js/marko/commit/bc3189e97ecf9a3fc9d4933428d21edae68a86e6) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Restore original native tag internal state before calling change handlers.

- [#2522](https://github.com/marko-js/marko/pull/2522) [`2687edc`](https://github.com/marko-js/marko/commit/2687edc5a285bc32f1c2e55d290fa888c3c2b906) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Fix issue serializing attribute tag iterables.

- [#2522](https://github.com/marko-js/marko/pull/2522) [`2687edc`](https://github.com/marko-js/marko/commit/2687edc5a285bc32f1c2e55d290fa888c3c2b906) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Improve non dimensional css property regexp (minor improvement to bundle size).

## 0.3.41

### Patch Changes

- [#2518](https://github.com/marko-js/marko/pull/2518) [`ad31acf`](https://github.com/marko-js/marko/commit/ad31acf7ec4743d09248c31fbeaf1134da006d26) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Fix issues related to controlled checkedValue input radios.

## 0.3.40

### Patch Changes

- [#2515](https://github.com/marko-js/marko/pull/2515) [`baedba4`](https://github.com/marko-js/marko/commit/baedba443938085da5945ae88882715dd986f13d) Thanks [@rturnq](https://github.com/rturnq)! - De-opt to dynamic tag for all tag names which are not string literals or custom tag identifiers to fix DOM compilation of complex expressions.

## 0.3.39

### Patch Changes

- [#2511](https://github.com/marko-js/marko/pull/2511) [`993e6e0`](https://github.com/marko-js/marko/commit/993e6e08eeb13ff455bca98aabb61c5fec161b04) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Ensure upstream aliases included in stateful ref checks.

## 0.3.38

### Patch Changes

- [#2508](https://github.com/marko-js/marko/pull/2508) [`bd59c96`](https://github.com/marko-js/marko/commit/bd59c96a0d8d96d4e98d55ba33a0def98f7bc507) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Refactor if client side runtime to avoid registraion and employ the same optimizations as `for`.

## 0.3.37

### Patch Changes

- [#2504](https://github.com/marko-js/marko/pull/2504) [`edcb4e9`](https://github.com/marko-js/marko/commit/edcb4e9d0ecbf9d25ab214d1732c5dcf26be21d0) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Fix issue with a for loop with a single text node inside, and before.

- [#2507](https://github.com/marko-js/marko/pull/2507) [`9d1ea70`](https://github.com/marko-js/marko/commit/9d1ea70068b502a88db31f39c531cef285aa3b59) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Fix issue with for/if html scope information being output to the wrong block.

- [#2506](https://github.com/marko-js/marko/pull/2506) [`e69c13e`](https://github.com/marko-js/marko/commit/e69c13eabffded618787df93e678d7724ff56bc8) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - When using the bound attribute syntax, prefer to create a simple shared function that assigns to the bound variable.

- [#2507](https://github.com/marko-js/marko/pull/2507) [`9d1ea70`](https://github.com/marko-js/marko/commit/9d1ea70068b502a88db31f39c531cef285aa3b59) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Handle mutations to select options when in controlled mode.

- [#2506](https://github.com/marko-js/marko/pull/2506) [`14ffe18`](https://github.com/marko-js/marko/commit/14ffe18ddf76e4d6108e4eb8218b26f552ee3866) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Fix issue where function registry ids were not unique.

## 0.3.36

### Patch Changes

- [#2502](https://github.com/marko-js/marko/pull/2502) [`a072aba`](https://github.com/marko-js/marko/commit/a072abac6d21d70f6dde0e23fd00681736fb9134) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Update list of pure functions.

## 0.3.35

### Patch Changes

- [#2500](https://github.com/marko-js/marko/pull/2500) [`e8f7931`](https://github.com/marko-js/marko/commit/e8f793150a922ef78b39aa5a087e6d3f34670965) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Avoid serializing child scope references unless using a tag var or providing stateful attrs.

- [#2500](https://github.com/marko-js/marko/pull/2500) [`e8f7931`](https://github.com/marko-js/marko/commit/e8f793150a922ef78b39aa5a087e6d3f34670965) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Fix compilation error when passing input to a template which doesn't use input at all.

## 0.3.34

### Patch Changes

- [#2498](https://github.com/marko-js/marko/pull/2498) [`48a9cfb`](https://github.com/marko-js/marko/commit/48a9cfba5021e72ee54270731359e1bc9c9b1121) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Ensure function analysis is applied to the root function only and not closures.

- [#2498](https://github.com/marko-js/marko/pull/2498) [`48a9cfb`](https://github.com/marko-js/marko/commit/48a9cfba5021e72ee54270731359e1bc9c9b1121) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Avoid hoisting functions under a call/new expression.

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

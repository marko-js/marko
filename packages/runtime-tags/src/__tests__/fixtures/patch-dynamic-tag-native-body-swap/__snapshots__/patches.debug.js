// PATCH
[`packages/runtime-tags/src/__tests__/fixtures/patch-dynamic-tag-native-body-swap/template.marko_1*content;b%;body <!>`, (_.a = {
  "PatchDynamicTag:#text/0": [">div", 0, "packages/runtime-tags/src/__tests__/fixtures/patch-dynamic-tag-native-body-swap/template.marko_1*content"],
  "PatchChild:BranchScopes:#text/0": {
    "PatchChild:BranchScopes:#div/0": {
      "PatchText:#text/0": "b"
    }
  }
}, _.a)]
"AwI"

// PATCH holding AwI
[(_.a = {
  "PatchDynamicTag:#text/0": [">div", 0, "packages/runtime-tags/src/__tests__/fixtures/patch-dynamic-tag-native-body-swap/template.marko_1*content"],
  "PatchChild:BranchScopes:#text/0": {
    "PatchChild:BranchScopes:#div/0": {
      "PatchText:#text/0": "c"
    }
  }
}, _.a)]

// PATCH holding AwI
[`packages/runtime-tags/src/__tests__/fixtures/patch-dynamic-tag-native-body-swap/outer.marko;D%;<section><!></section>`, (_.a = {
  "PatchDynamicTag:#text/0": ["packages/runtime-tags/src/__tests__/fixtures/patch-dynamic-tag-native-body-swap/outer.marko", 0, "packages/runtime-tags/src/__tests__/fixtures/patch-dynamic-tag-native-body-swap/template.marko_1*content"],
  "PatchChild:BranchScopes:#text/0": {
    "PatchDynamicTag:#text/0": "^packages/runtime-tags/src/__tests__/fixtures/patch-dynamic-tag-native-body-swap/template.marko_1*content",
    "PatchChild:BranchScopes:#text/0": {
      "PatchText:#text/0": "d"
    }
  }
}, _.a)]
"AwAB"

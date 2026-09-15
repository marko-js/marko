// PATCH
[`packages/runtime-tags/src/__tests__/fixtures/patch-dynamic-tag-native-body-swap/template.marko_1*content;b%;body <!>`, {
  "PatchDynamicTag:#text/0": [">div", 0, "packages/runtime-tags/src/__tests__/fixtures/patch-dynamic-tag-native-body-swap/template.marko_1*content"],
  "PatchChild:BranchScopes:#text/0": {
    "PatchChild:BranchScopes:#div/0": {
      "PatchText:#text/0": "b"
    }
  }
}]
"AwI"

// PATCH holding AwI
{
  "PatchDynamicTag:#text/0": [">div", 0, "packages/runtime-tags/src/__tests__/fixtures/patch-dynamic-tag-native-body-swap/template.marko_1*content"],
  "PatchChild:BranchScopes:#text/0": {
    "PatchChild:BranchScopes:#div/0": {
      "PatchText:#text/0": "c"
    }
  }
}

// PATCH holding AwI
[`packages/runtime-tags/src/__tests__/fixtures/patch-dynamic-tag-native-body-swap/outer.marko;D%;<section><!></section>`, {
  "PatchDynamicTag:#text/0": ["packages/runtime-tags/src/__tests__/fixtures/patch-dynamic-tag-native-body-swap/outer.marko", 0, "packages/runtime-tags/src/__tests__/fixtures/patch-dynamic-tag-native-body-swap/template.marko_1*content"],
  "PatchChild:BranchScopes:#text/0": {
    "PatchDynamicTag:#text/0": "^packages/runtime-tags/src/__tests__/fixtures/patch-dynamic-tag-native-body-swap/template.marko_1*content",
    "PatchChild:BranchScopes:#text/0": {
      "PatchText:#text/0": "d"
    }
  }
}]
"AwAB"

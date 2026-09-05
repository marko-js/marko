// PATCH
[`packages/runtime-tags/src/__tests__/fixtures/persisted-dynamic-tag-native-body-swap/template.marko_1*content;b%;body <!>`, {
  "PatchDynamicTag:#text/0": [">div", 0, "packages/runtime-tags/src/__tests__/fixtures/persisted-dynamic-tag-native-body-swap/template.marko_1*content"],
  "PatchChild:BranchScopes:#text/0": {
    "PatchChild:BranchScopes:#div/0": {
      "PatchText:#text/0": "b"
    }
  }
}]

// PATCH
[`packages/runtime-tags/src/__tests__/fixtures/persisted-dynamic-tag-native-body-swap/template.marko_1*content;b%;body <!>`, {
  "PatchDynamicTag:#text/0": [">div", 0, "packages/runtime-tags/src/__tests__/fixtures/persisted-dynamic-tag-native-body-swap/template.marko_1*content"],
  "PatchChild:BranchScopes:#text/0": {
    "PatchChild:BranchScopes:#div/0": {
      "PatchText:#text/0": "c"
    }
  }
}]

// PATCH
[`packages/runtime-tags/src/__tests__/fixtures/persisted-dynamic-tag-native-body-swap/outer.marko;D%;<section><!></section>`, `packages/runtime-tags/src/__tests__/fixtures/persisted-dynamic-tag-native-body-swap/template.marko_1*content;b%;body <!>`, {
  "PatchDynamicTag:#text/0": ["packages/runtime-tags/src/__tests__/fixtures/persisted-dynamic-tag-native-body-swap/outer.marko", 0, _.a = "packages/runtime-tags/src/__tests__/fixtures/persisted-dynamic-tag-native-body-swap/template.marko_1*content"],
  "PatchChild:BranchScopes:#text/0": {
    "PatchDynamicTag:#text/0": _.a,
    "PatchChild:BranchScopes:#text/0": {
      "PatchText:#text/0": "d"
    }
  }
}]

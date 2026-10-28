// PATCH
[`packages/runtime-tags/src/__tests__/fixtures/patch-native-dynamic-tag-scriptless/template.marko_1*content; ; `, {
  "PatchDynamicTag:#text/0": [">section", "packages/runtime-tags/src/__tests__/fixtures/patch-native-dynamic-tag-scriptless/template.marko_1*content", {
    class: "two"
  }],
  "PatchChild:BranchScopes:#text/0": {
    "PatchChild:BranchScopes:#section/0": {
      "PatchText:#text/0": "two"
    }
  }
}]
;BgE

// PATCH holding BgE
{
  "PatchDynamicTag:#text/0": [">article", "packages/runtime-tags/src/__tests__/fixtures/patch-native-dynamic-tag-scriptless/template.marko_1*content", {
    class: "three"
  }],
  "PatchChild:BranchScopes:#text/0": {
    "PatchChild:BranchScopes:#article/0": {
      "PatchText:#text/0": "three"
    }
  }
}

// PATCH holding BgE
{
  "PatchDynamicTag:#text/0": [">section", "packages/runtime-tags/src/__tests__/fixtures/patch-native-dynamic-tag-scriptless/template.marko_1*content", {
    class: "four"
  }],
  "PatchChild:BranchScopes:#text/0": {
    "PatchChild:BranchScopes:#section/0": {
      "PatchText:#text/0": "four"
    }
  }
}

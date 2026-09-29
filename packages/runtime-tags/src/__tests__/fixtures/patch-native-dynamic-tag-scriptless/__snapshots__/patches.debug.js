// PATCH
[`packages/runtime-tags/src/__tests__/fixtures/patch-native-dynamic-tag-scriptless/template.marko_1*content; ; `, {
  "PatchDynamicTag:#text/0": [">section", {
    class: "two"
  }, "packages/runtime-tags/src/__tests__/fixtures/patch-native-dynamic-tag-scriptless/template.marko_1*content"],
  "PatchChild:BranchScopes:#text/0": {
    "PatchChild:BranchScopes:#section/0": {
      "PatchText:#text/0": "two"
    }
  }
}]
"AgE"

// PATCH holding AgE
{
  "PatchDynamicTag:#text/0": [">article", {
    class: "three"
  }, "packages/runtime-tags/src/__tests__/fixtures/patch-native-dynamic-tag-scriptless/template.marko_1*content"],
  "PatchChild:BranchScopes:#text/0": {
    "PatchChild:BranchScopes:#article/0": {
      "PatchText:#text/0": "three"
    }
  }
}

// PATCH holding AgE
{
  "PatchDynamicTag:#text/0": [">section", {
    class: "four"
  }, "packages/runtime-tags/src/__tests__/fixtures/patch-native-dynamic-tag-scriptless/template.marko_1*content"],
  "PatchChild:BranchScopes:#text/0": {
    "PatchChild:BranchScopes:#section/0": {
      "PatchText:#text/0": "four"
    }
  }
}

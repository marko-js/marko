// PATCH
`packages/runtime-tags/src/__tests__/fixtures/patch-native-dynamic-tag-server-owned/template.marko_1*content; ; `
{
  "PatchDynamicTag:#text/0": [">section", "packages/runtime-tags/src/__tests__/fixtures/patch-native-dynamic-tag-server-owned/template.marko_1*content", {
    class: "two"
  }],
  "PatchChild:BranchScopes:#text/0": {
    "PatchChild:BranchScopes:#section/0": {
      "PatchText:#text/0": "two"
    }
  },
  "PatchSubscribers:packages/runtime-tags/src/__tests__/fixtures/patch-native-dynamic-tag-server-owned/template.marko_0_input_label#6/subscribers": "input_label"
}
;BAE

// PATCH holding BAE
{
  "PatchDynamicTag:#text/0": [">article", "packages/runtime-tags/src/__tests__/fixtures/patch-native-dynamic-tag-server-owned/template.marko_1*content", {
    class: "three"
  }],
  "PatchChild:BranchScopes:#text/0": {
    "PatchChild:BranchScopes:#article/0": {
      "PatchText:#text/0": "three"
    }
  },
  "PatchSubscribers:packages/runtime-tags/src/__tests__/fixtures/patch-native-dynamic-tag-server-owned/template.marko_0_input_label#6/subscribers": "input_label"
}

// PATCH holding BAE
{
  "PatchDynamicTag:#text/0": [">section", "packages/runtime-tags/src/__tests__/fixtures/patch-native-dynamic-tag-server-owned/template.marko_1*content", {
    class: "four"
  }],
  "PatchChild:BranchScopes:#text/0": {
    "PatchChild:BranchScopes:#section/0": {
      "PatchText:#text/0": "four"
    }
  },
  "PatchSubscribers:packages/runtime-tags/src/__tests__/fixtures/patch-native-dynamic-tag-server-owned/template.marko_0_input_label#6/subscribers": "input_label"
}

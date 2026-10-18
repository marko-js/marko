// PATCH
[`packages/runtime-tags/src/__tests__/fixtures/patch-dynamic-tag-native-content-input/template.marko_2*shell;b%;<!><!><!>`, {
  "PatchValue:packages/runtime-tags/src/__tests__/fixtures/patch-dynamic-tag-native-content-input/template.marko_fill0": "b",
  "PatchLoop:#text/2": [{
    "PatchDynamicTag:#text/0": [">span", {
      label: "x",
      content: _.a = {
        content: _([], "packages/runtime-tags/src/__tests__/fixtures/patch-dynamic-tag-native-content-input/template.marko_1*content", 1)
      }
    }],
    "PatchChild:BranchScopes:#text/0": {
      "PatchChild:BranchScopes:#span/0": {
        "PatchText:#text/0": "b"
      }
    }
  }, {
    "PatchDynamicTag:#text/0": [">span", {
      label: "y",
      content: _.a
    }],
    "PatchChild:BranchScopes:#text/0": {
      "PatchChild:BranchScopes:#span/0": {
        "PatchText:#text/0": "b"
      }
    }
  }, "packages/runtime-tags/src/__tests__/fixtures/patch-dynamic-tag-native-content-input/template.marko_2*shell"]
}]
;CgI

// PATCH holding CgI
{
  "PatchValue:packages/runtime-tags/src/__tests__/fixtures/patch-dynamic-tag-native-content-input/template.marko_fill0": "c",
  "PatchLoop:#text/2": [{
    "PatchDynamicTag:#text/0": [">span", {
      label: "y",
      content: {
        content: _([], "packages/runtime-tags/src/__tests__/fixtures/patch-dynamic-tag-native-content-input/template.marko_1*content", 1)
      }
    }],
    "PatchChild:BranchScopes:#text/0": {
      "PatchChild:BranchScopes:#span/0": {
        "PatchText:#text/0": "c"
      }
    }
  }, "packages/runtime-tags/src/__tests__/fixtures/patch-dynamic-tag-native-content-input/template.marko_2*shell"]
}

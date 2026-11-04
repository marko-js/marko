// PATCH
`packages/runtime-tags/src/__tests__/fixtures/patch-dynamic-tag-native-content-input/template.marko_2*shell;b%;<!><!><!>`
{
  "PatchLoop:#text/2": [{
    "PatchDynamicTag:#text/0": [">span", 0, {
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
    "PatchDynamicTag:#text/0": [">span", 0, {
      label: "y",
      content: _.a
    }],
    "PatchChild:BranchScopes:#text/0": {
      "PatchChild:BranchScopes:#span/0": {
        "PatchText:#text/0": "b"
      }
    }
  }, "packages/runtime-tags/src/__tests__/fixtures/patch-dynamic-tag-native-content-input/template.marko_2*shell"],
  "PatchSubscribers:packages/runtime-tags/src/__tests__/fixtures/patch-dynamic-tag-native-content-input/template.marko_0_input_label#5/subscribers": "input_label",
  "PatchMarkedWrite:input_label": "b"
}
;CgI

// PATCH holding CgI
{
  "PatchLoop:#text/2": [{
    "PatchDynamicTag:#text/0": [">span", 0, {
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
  }, "packages/runtime-tags/src/__tests__/fixtures/patch-dynamic-tag-native-content-input/template.marko_2*shell"],
  "PatchSubscribers:packages/runtime-tags/src/__tests__/fixtures/patch-dynamic-tag-native-content-input/template.marko_0_input_label#5/subscribers": "input_label",
  "PatchMarkedWrite:input_label": "c"
}

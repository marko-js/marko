// PATCH
(_.a = {
  "PatchChild:#childScope/0": {
    "PatchEffect:packages/runtime-tags/src/__tests__/fixtures/patch-async-shared-value/child.marko_0_input_name#3_input_item#4": _.b = "input_name input_item",
    "PatchWrite:input_item": _.c = {
      label: "b"
    }
  },
  "PatchChild:#childScope/1": {
    "PatchEffect:packages/runtime-tags/src/__tests__/fixtures/patch-async-shared-value/child.marko_0_input_name#3_input_item#4": _.b,
    "PatchWrite:input_item": _.c
  },
  "PatchChild:BranchScopes:#text/2": {
    "PatchPending:#text/0": 1
  }
}, _.a)
(_.d = {
  "PatchChild:BranchScopes:#text/2": {
    "PatchChild:BranchScopes:#text/0": {
      "PatchText:#text/0": "y",
      "PatchChild:#childScope/1": {
        "PatchAttr:#div/0 class": "c",
        "PatchSetup:": {
          "PatchInit:": "!packages/runtime-tags/src/__tests__/fixtures/patch-async-shared-value/child.marko_0_input_name#3_input_item#4"
        },
        "PatchEffect:packages/runtime-tags/src/__tests__/fixtures/patch-async-shared-value/child.marko_0_input_name#3_input_item#4": _.b,
        "PatchWrite:input_name": "c",
        "PatchWrite:input_item": _.c
      }
    }
  }
}, _.d)

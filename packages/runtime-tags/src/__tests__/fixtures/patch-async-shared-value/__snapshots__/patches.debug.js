// PATCH
[`packages/runtime-tags/src/__tests__/fixtures/patch-async-shared-value/template.marko_3*content`, {
  "PatchChild:#childScope/0": {
    "PatchEffect:packages/runtime-tags/src/__tests__/fixtures/patch-async-shared-value/child.marko_0_input_name#3_input_item#4": ">input_label",
    "PatchMarkedWrite:input_item": _.a = {
      label: "b"
    }
  },
  "PatchChild:#childScope/1": {
    "PatchEffect:packages/runtime-tags/src/__tests__/fixtures/patch-async-shared-value/child.marko_0_input_name#3_input_item#4": ">input_label",
    "PatchMarkedWrite:input_item": _.a
  },
  "PatchChild:BranchScopes:#text/2": {
    "PatchPending:#text/0": 1
  },
  "PatchMarkedWrite:input_label": "b"
}]
{
  "PatchChild:BranchScopes:#text/2": {
    "PatchChild:BranchScopes:#text/0": {
      "PatchText:#text/0": "y",
      "PatchChild:#childScope/1": {
        "PatchEffect:packages/runtime-tags/src/__tests__/fixtures/patch-async-shared-value/child.marko_0_input_name#3_input_item#4": ">>>input_label",
        "PatchMarkedWrite:input_item": _.a
      }
    }
  }
}
;DAU

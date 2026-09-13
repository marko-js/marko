// PATCH
{
  "PatchChild:#childScope/0": {
    "PatchEffect:packages/runtime-tags/src/__tests__/fixtures/persisted-async-shared-value/child.marko_0_input_name#3_input_item#4": _.a = "input_name input_item",
    "PatchWrite:input_item": _.b = {
      label: "b"
    }
  },
  "PatchChild:#childScope/1": {
    "PatchEffect:packages/runtime-tags/src/__tests__/fixtures/persisted-async-shared-value/child.marko_0_input_name#3_input_item#4": _.a,
    "PatchWrite:input_item": _.b
  },
  "PatchChild:BranchScopes:#text/2": {
    "PatchPending:#text/0": 1
  }
}
{
  "PatchChild:BranchScopes:#text/2": {
    "PatchChild:BranchScopes:#text/0": {
      "PatchText:#text/0": "y",
      "PatchChild:#childScope/1": {
        "PatchAttr:#div/0 class": "c",
        "PatchSetup:": {
          "PatchInit:": "!packages/runtime-tags/src/__tests__/fixtures/persisted-async-shared-value/child.marko_0_input_name#3_input_item#4"
        },
        "PatchEffect:packages/runtime-tags/src/__tests__/fixtures/persisted-async-shared-value/child.marko_0_input_name#3_input_item#4": _.a,
        "PatchWrite:input_name": "c",
        "PatchWrite:input_item": _.b
      }
    }
  }
}

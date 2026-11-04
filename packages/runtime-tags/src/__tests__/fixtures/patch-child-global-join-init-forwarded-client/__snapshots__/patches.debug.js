// PATCH
{
  "$global:": {
    x: "y"
  },
  "PatchChild:#childScope/0": {
    "PatchChild:#childScope/0": {
      "PatchRender:packages/runtime-tags/src/__tests__/fixtures/patch-child-global-join-init-forwarded-client/tags/child.marko_1_input_a#0:5/setup": "input_a",
      "PatchRender:packages/runtime-tags/src/__tests__/fixtures/patch-child-global-join-init-forwarded-client/tags/child.marko_0_input_a#5_input_b#6/setup": "input_a",
      "PatchMarkedWrite:input_a": "y"
    }
  }
}

// PATCH
{
  "$global:": {
    x: "z"
  },
  "PatchChild:#childScope/0": {
    "PatchChild:#childScope/0": {
      "PatchRender:packages/runtime-tags/src/__tests__/fixtures/patch-child-global-join-init-forwarded-client/tags/child.marko_1_input_a#0:5/setup": "input_a",
      "PatchRender:packages/runtime-tags/src/__tests__/fixtures/patch-child-global-join-init-forwarded-client/tags/child.marko_0_input_a#5_input_b#6/setup": "input_a",
      "PatchMarkedWrite:input_a": "z"
    }
  }
}

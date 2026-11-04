// PATCH
{
  "$global:": {
    x: "b"
  },
  "PatchChild:#childScope/0": {
    "PatchChild:#childScope/0": {
      "PatchRender:packages/runtime-tags/src/__tests__/fixtures/patch-child-global-fill-forwarded-client/tags/child.marko_1_input_a#0:4/setup": "input_a",
      "PatchMarkedWrite:input_a": "b"
    }
  }
}

// PATCH
{
  "$global:": {
    x: "c"
  },
  "PatchChild:#childScope/0": {
    "PatchChild:#childScope/0": {
      "PatchRender:packages/runtime-tags/src/__tests__/fixtures/patch-child-global-fill-forwarded-client/tags/child.marko_1_input_a#0:4/setup": "input_a",
      "PatchMarkedWrite:input_a": "c"
    }
  }
}

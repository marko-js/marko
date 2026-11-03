// PATCH
{
  "PatchChild:#childScope/0": {
    "PatchText:#text/0": "c",
    "PatchRender:packages/runtime-tags/src/__tests__/fixtures/patch-child-join-alias-read-order/tags/child.marko_1_input_a#0:6/setup": "input_a",
    "PatchRender:packages/runtime-tags/src/__tests__/fixtures/patch-child-join-alias-read-order/tags/child.marko_0_input_b#7_a#6/setup": "input_a",
    "PatchMarkedWrite:input_a": "c"
  },
  "PatchChild:#childScope/1": {
    "PatchRender:packages/runtime-tags/src/__tests__/fixtures/patch-child-join-alias-read-order/tags/child.marko_0_input_b#7_a#6/setup": "input_b",
    "PatchMarkedWrite:input_b": "d"
  }
}

// PATCH
{
  "PatchChild:#childScope/0": {
    "PatchText:#text/0": "e",
    "PatchRender:packages/runtime-tags/src/__tests__/fixtures/patch-child-join-alias-read-order/tags/child.marko_1_input_a#0:6/setup": "input_a",
    "PatchRender:packages/runtime-tags/src/__tests__/fixtures/patch-child-join-alias-read-order/tags/child.marko_0_input_b#7_a#6/setup": "input_a",
    "PatchMarkedWrite:input_a": "e"
  },
  "PatchChild:#childScope/1": {
    "PatchRender:packages/runtime-tags/src/__tests__/fixtures/patch-child-join-alias-read-order/tags/child.marko_0_input_b#7_a#6/setup": "input_b",
    "PatchMarkedWrite:input_b": "f"
  }
}

// PATCH
{
  "PatchText:#text/0": "c",
  "PatchChild:#childScope/1": {
    "PatchEffect:packages/runtime-tags/src/__tests__/fixtures/patch-child-effect-reads-built-object-order/tags/child.marko_0_input_value#2": ">input_y >input_x",
    "PatchMarkedWrite:input_value": {
      a: _.a = {
        y: "b"
      },
      b: _.b = {
        x: "c"
      }
    }
  },
  "PatchMarkedWrite:a": _.a,
  "PatchMarkedWrite:b": _.b,
  "PatchMarkedWrite:input_x": "c",
  "PatchMarkedWrite:input_y": "b"
}

// PATCH
{
  "PatchText:#text/0": "c",
  "PatchChild:#childScope/1": {
    "PatchEffect:packages/runtime-tags/src/__tests__/fixtures/patch-child-effect-reads-built-object-order/tags/child.marko_0_input_value#2": ">input_y >input_x",
    "PatchMarkedWrite:input_value": {
      a: _.a = {
        y: "d"
      },
      b: _.b = {
        x: "c"
      }
    }
  },
  "PatchMarkedWrite:a": _.a,
  "PatchMarkedWrite:b": _.b,
  "PatchMarkedWrite:input_x": "c",
  "PatchMarkedWrite:input_y": "d"
}

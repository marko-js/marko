// PATCH
{
  "PatchText:#text/0": "c",
  "PatchEffect:packages/runtime-tags/src/__tests__/fixtures/patch-effect-reads-built-object-order/template.marko_0_c#8": "input_y input_x",
  "PatchMarkedWrite:a": _.a = {
    y: "b"
  },
  "PatchMarkedWrite:b": _.b = {
    x: "c"
  },
  "PatchMarkedWrite:input_x": "c",
  "PatchMarkedWrite:input_y": "b",
  "PatchWrite:c": {
    a: _.a,
    b: _.b
  }
}

// PATCH
{
  "PatchText:#text/0": "c",
  "PatchEffect:packages/runtime-tags/src/__tests__/fixtures/patch-effect-reads-built-object-order/template.marko_0_c#8": "input_y input_x",
  "PatchMarkedWrite:a": _.a = {
    y: "d"
  },
  "PatchMarkedWrite:b": _.b = {
    x: "c"
  },
  "PatchMarkedWrite:input_x": "c",
  "PatchMarkedWrite:input_y": "d",
  "PatchWrite:c": {
    a: _.a,
    b: _.b
  }
}

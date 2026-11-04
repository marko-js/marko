// PATCH
`packages/runtime-tags/src/__tests__/fixtures/patch-child-join-member-opens-branch/tags/child.marko_1*shell;D ;<p> </p>`
{
  "PatchChild:#childScope/0": {
    "PatchRender:packages/runtime-tags/src/__tests__/fixtures/patch-child-join-member-opens-branch/tags/child.marko_1_input_a#0:4/setup": "input_a",
    "PatchMarkedWrite:input_a": "b"
  },
  "PatchChild:#childScope/1": {
    "PatchBranch:#text/0": [{
      "PatchRender:packages/runtime-tags/src/__tests__/fixtures/patch-child-join-member-opens-branch/tags/child.marko_1_input_b#0:3_input_a#0:4/setup": ">input_b"
    }, "packages/runtime-tags/src/__tests__/fixtures/patch-child-join-member-opens-branch/tags/child.marko_1*shell"],
    "PatchMarkedWrite:input_b": "q"
  }
}
;BgE

// PATCH holding BgE
{
  "PatchChild:#childScope/0": {
    "PatchRender:packages/runtime-tags/src/__tests__/fixtures/patch-child-join-member-opens-branch/tags/child.marko_1_input_a#0:4/setup": "input_a",
    "PatchMarkedWrite:input_a": "c"
  },
  "PatchChild:#childScope/1": {
    "PatchBranch:#text/0": 0,
    "PatchMarkedWrite:input_b": ""
  }
}

// PATCH holding BgE
{
  "PatchChild:#childScope/0": {
    "PatchRender:packages/runtime-tags/src/__tests__/fixtures/patch-child-join-member-opens-branch/tags/child.marko_1_input_a#0:4/setup": "input_a",
    "PatchMarkedWrite:input_a": "d"
  },
  "PatchChild:#childScope/1": {
    "PatchBranch:#text/0": [{
      "PatchRender:packages/runtime-tags/src/__tests__/fixtures/patch-child-join-member-opens-branch/tags/child.marko_1_input_b#0:3_input_a#0:4/setup": ">input_b"
    }, "packages/runtime-tags/src/__tests__/fixtures/patch-child-join-member-opens-branch/tags/child.marko_1*shell"],
    "PatchMarkedWrite:input_b": "r"
  }
}

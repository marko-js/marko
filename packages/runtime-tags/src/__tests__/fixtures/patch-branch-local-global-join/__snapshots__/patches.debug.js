// PATCH
`packages/runtime-tags/src/__tests__/fixtures/patch-branch-local-global-join/tags/child.marko_1*shell;D ;<p> </p>`
{
  "$global:": {
    g: "H"
  },
  "PatchChild:#childScope/0": {
    "PatchBranch:#text/0": [{
      "PatchMarkedWrite:c": "H!",
      "PatchRender:packages/runtime-tags/src/__tests__/fixtures/patch-branch-local-global-join/tags/child.marko_1_input_a#0:4_input_b#0:5_c#1/setup": "c >input_b"
    }, _.a = "packages/runtime-tags/src/__tests__/fixtures/patch-branch-local-global-join/tags/child.marko_1*shell"],
    "PatchMarkedWrite:input_b": "r"
  },
  "PatchChild:#childScope/1": {
    "PatchBranch:#text/0": [{
      "PatchText:#text/0": "srH!"
    }, _.a]
  }
}
;BgE

// PATCH holding BgE
{
  "$global:": {
    g: "I"
  },
  "PatchChild:#childScope/0": {
    "PatchBranch:#text/0": [{
      "PatchMarkedWrite:c": "I!",
      "PatchRender:packages/runtime-tags/src/__tests__/fixtures/patch-branch-local-global-join/tags/child.marko_1_input_a#0:4_input_b#0:5_c#1/setup": "c >input_b"
    }, _.a = "packages/runtime-tags/src/__tests__/fixtures/patch-branch-local-global-join/tags/child.marko_1*shell"],
    "PatchMarkedWrite:input_b": "t"
  },
  "PatchChild:#childScope/1": {
    "PatchBranch:#text/0": [{
      "PatchText:#text/0": "utI!"
    }, _.a]
  }
}

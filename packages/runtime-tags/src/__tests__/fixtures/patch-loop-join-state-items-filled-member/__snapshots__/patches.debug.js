// PATCH
`packages/runtime-tags/src/__tests__/fixtures/patch-loop-join-state-items-filled-member/tags/child.marko_1*shell;D ;<p> </p>`
{
  "PatchChild:#childScope/0": {
    "PatchLoopItem:#text/0": [0, {
      "PatchRender:packages/runtime-tags/src/__tests__/fixtures/patch-loop-join-state-items-filled-member/tags/child.marko_1_input_a#0:6_item#2/setup": ">input_a"
    }, 1, {
      "PatchRender:packages/runtime-tags/src/__tests__/fixtures/patch-loop-join-state-items-filled-member/tags/child.marko_1_input_a#0:6_item#2/setup": ">input_a"
    }],
    "PatchRender:packages/runtime-tags/src/__tests__/fixtures/patch-loop-join-state-items-filled-member/tags/child.marko_1_input_a#0:6/setup": "input_a",
    "PatchRender:packages/runtime-tags/src/__tests__/fixtures/patch-loop-join-state-items-filled-member/tags/child.marko_2_input_a#0:6/setup": "input_a",
    "PatchMarkedWrite:input_a": "y"
  },
  "PatchChild:#childScope/1": {
    "PatchLoop:#text/0": [{
      "PatchText:#text/0": "yu"
    }, "packages/runtime-tags/src/__tests__/fixtures/patch-loop-join-state-items-filled-member/tags/child.marko_1*shell"],
    "PatchRender:packages/runtime-tags/src/__tests__/fixtures/patch-loop-join-state-items-filled-member/tags/child.marko_2_input_a#0:6/setup": "input_a",
    "PatchMarkedWrite:input_a": "y"
  }
}
;BgE

// PATCH holding BgE
{
  "PatchChild:#childScope/0": {
    "PatchLoopItem:#text/0": [0, {
      "PatchRender:packages/runtime-tags/src/__tests__/fixtures/patch-loop-join-state-items-filled-member/tags/child.marko_1_input_a#0:6_item#2/setup": ">input_a"
    }, 1, {
      "PatchRender:packages/runtime-tags/src/__tests__/fixtures/patch-loop-join-state-items-filled-member/tags/child.marko_1_input_a#0:6_item#2/setup": ">input_a"
    }],
    "PatchRender:packages/runtime-tags/src/__tests__/fixtures/patch-loop-join-state-items-filled-member/tags/child.marko_1_input_a#0:6/setup": "input_a",
    "PatchRender:packages/runtime-tags/src/__tests__/fixtures/patch-loop-join-state-items-filled-member/tags/child.marko_2_input_a#0:6/setup": "input_a",
    "PatchMarkedWrite:input_a": "z"
  },
  "PatchChild:#childScope/1": {
    "PatchLoop:#text/0": [{
      "PatchText:#text/0": "zu"
    }, {
      "PatchText:#text/0": "zv"
    }, "packages/runtime-tags/src/__tests__/fixtures/patch-loop-join-state-items-filled-member/tags/child.marko_1*shell"],
    "PatchRender:packages/runtime-tags/src/__tests__/fixtures/patch-loop-join-state-items-filled-member/tags/child.marko_2_input_a#0:6/setup": "input_a",
    "PatchMarkedWrite:input_a": "z"
  }
}

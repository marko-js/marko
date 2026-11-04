// PATCH
`packages/runtime-tags/src/__tests__/fixtures/patch-child-loop-client-rows/tags/rows.marko_2*content;D%c%;<em><!>:<!></em>`
{
  "PatchChild:#childScope/1": {
    "PatchLoopItem:#text/0": [
      [0, 1], {
        "PatchPending:#text/0": _.a = "packages/runtime-tags/src/__tests__/fixtures/patch-child-loop-client-rows/tags/rows.marko_2*content"
      },
      [1, 2], {
        "PatchPending:#text/0": _.a
      }
    ],
    "PatchRender:packages/runtime-tags/src/__tests__/fixtures/patch-child-loop-client-rows/tags/rows.marko_1_input_promise#0:4/setup": "input_promise",
    "PatchMarkedWrite:input_promise": (p => p = new Promise((f, r) => _.b = {
      f,
      r(e) {
        p.catch(_ => 0);
        r(e)
      }
    }))()
  }
}
[{
  "PatchChild:#childScope/1": {
    "PatchLoopItem:#text/0": [
      [0, 1], {
        "PatchChild:BranchScopes:#text/0": {
          "PatchText:#text/1": "b"
        }
      },
      [1, 2], {
        "PatchChild:BranchScopes:#text/0": {
          "PatchText:#text/1": "b"
        }
      }
    ]
  }
}, _.b.f("b")][0]
;CgM

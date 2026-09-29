// PATCH
[`packages/runtime-tags/src/__tests__/fixtures/patch-async-await-in-loop-removed-try/tags/rows.marko_2*content;D%c%;<em><!>:<!></em>`, `packages/runtime-tags/src/__tests__/fixtures/patch-async-await-in-loop-removed-try/tags/rows.marko_1*shell;D%;<div><!></div>`, {
  "PatchChild:BranchScopes:#text/1": {
    "PatchChild:#childScope/0": {
      "PatchLoop:#text/0": [1, {
        "PatchPending:#text/0": _.a = "packages/runtime-tags/src/__tests__/fixtures/patch-async-await-in-loop-removed-try/tags/rows.marko_2*content"
      }, 2, {
        "PatchPending:#text/0": _.a
      }, "packages/runtime-tags/src/__tests__/fixtures/patch-async-await-in-loop-removed-try/tags/rows.marko_1*shell"],
      "PatchValue:packages/runtime-tags/src/__tests__/fixtures/patch-async-await-in-loop-removed-try/tags/rows.marko_fill0": (p => p = new Promise((f, r) => _.b = {
        f,
        r(e) {
          p.catch(_ => 0);
          r(e)
        }
      }))()
    }
  }
}]
[{
  "PatchChild:BranchScopes:#text/1": {
    "PatchChild:#childScope/0": {
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
  }
}, _.b.f("b")][0]
"BgEB"

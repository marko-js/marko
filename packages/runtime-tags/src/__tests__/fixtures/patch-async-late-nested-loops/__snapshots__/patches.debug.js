// PATCH
[`packages/runtime-tags/src/__tests__/fixtures/patch-async-late-nested-loops/template.marko_4*content;D%c%;<em><!>.<!></em>`, `packages/runtime-tags/src/__tests__/fixtures/patch-async-late-nested-loops/template.marko_3*content;b%;<!><!><!>`, `packages/runtime-tags/src/__tests__/fixtures/patch-async-late-nested-loops/template.marko_2*shell;b%;<!><!><!>`, `packages/runtime-tags/src/__tests__/fixtures/patch-async-late-nested-loops/template.marko_1*shell; ;<section></section>`, {
  "PatchLoop:#text/0": ["b", {
    "PatchLoop:#section/0": [{
      "PatchChild:BranchScopes:#text/0": [{
        "PatchPending:#text/0": _.a = "packages/runtime-tags/src/__tests__/fixtures/patch-async-late-nested-loops/template.marko_4*content"
      }, _.b = "packages/runtime-tags/src/__tests__/fixtures/patch-async-late-nested-loops/template.marko_3*content", _.c = "packages/runtime-tags/src/__tests__/fixtures/patch-async-late-nested-loops/template.marko_5*content"]
    }, _.d = "packages/runtime-tags/src/__tests__/fixtures/patch-async-late-nested-loops/template.marko_2*shell"]
  }, "a", {
    "PatchLoop:#section/0": [{
      "PatchChild:BranchScopes:#text/0": [{
        "PatchPending:#text/0": _.a
      }, _.b, _.c]
    }, {
      "PatchChild:BranchScopes:#text/0": [{
        "PatchPending:#text/0": _.a
      }, _.b, _.c]
    }, _.d]
  }, "packages/runtime-tags/src/__tests__/fixtures/patch-async-late-nested-loops/template.marko_1*shell"]
}]
{
  "PatchLoopItem:#text/0": [
    [0, "b"], {
      "PatchLoopItem:#section/0": [0, {
        "PatchChild:BranchScopes:#text/0": [{
          "PatchChild:BranchScopes:#text/0": {
            "PatchText:#text/0": "b",
            "PatchText:#text/1": "x"
          }
        }, _.b, _.c]
      }]
    }
  ]
}
{
  "PatchLoopItem:#text/0": [
    [1, "a"], {
      "PatchLoopItem:#section/0": [0, {
        "PatchChild:BranchScopes:#text/0": [{
          "PatchChild:BranchScopes:#text/0": {
            "PatchText:#text/0": "a",
            "PatchText:#text/1": "2"
          }
        }, _.b, _.c]
      }]
    }
  ]
}
{
  "PatchLoopItem:#text/0": [_(2)["PatchLoopItem:#text/0"][0], {
    "PatchLoopItem:#section/0": [1, {
      "PatchCatch:#text/0": [new Error("nope"), _.b]
    }]
  }]
}
"BgEAAAE"

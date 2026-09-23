// PATCH
[`packages/runtime-tags/src/__tests__/fixtures/patch-content-loop-locals/template.marko_1*content packages/runtime-tags/src/__tests__/fixtures/patch-content-loop-locals/template.marko_1_n#7/init;D l%;<em> </em><!><!>`, `packages/runtime-tags/src/__tests__/fixtures/patch-content-loop-locals/template.marko_2*shell;D%;<b><!>!</b>`, `packages/runtime-tags/src/__tests__/fixtures/patch-content-loop-locals/tags/list.marko_1*shell;b%;<!><!><!>`, {
  "PatchChild:#childScope/0": {
    "PatchLoop:#text/0": [{
      "PatchDynamicTag:#text/0": _.a = "^^^packages/runtime-tags/src/__tests__/fixtures/patch-content-loop-locals/template.marko_1*content",
      "PatchChild:BranchScopes:#text/0": {
        "PatchValue:packages/runtime-tags/src/__tests__/fixtures/patch-content-loop-locals/template.marko0": "a",
        "PatchBranch:#text/1": [{
          "PatchText:#text/0": "a"
        }, _.b = "packages/runtime-tags/src/__tests__/fixtures/patch-content-loop-locals/template.marko_2*shell"]
      }
    }, {
      "PatchDynamicTag:#text/0": _.a,
      "PatchChild:BranchScopes:#text/0": {
        "PatchValue:packages/runtime-tags/src/__tests__/fixtures/patch-content-loop-locals/template.marko0": "b",
        "PatchBranch:#text/1": [{
          "PatchText:#text/0": "b"
        }, _.b]
      }
    }, {
      "PatchDynamicTag:#text/0": _.a,
      "PatchChild:BranchScopes:#text/0": {
        "PatchValue:packages/runtime-tags/src/__tests__/fixtures/patch-content-loop-locals/template.marko0": "c",
        "PatchBranch:#text/1": [{
          "PatchText:#text/0": "c"
        }, _.b]
      }
    }, "packages/runtime-tags/src/__tests__/fixtures/patch-content-loop-locals/tags/list.marko_1*shell"]
  }
}]
"BQEBAA"

// PATCH holding BQEBAA
{
  "PatchChild:#childScope/0": {
    "PatchLoop:#text/0": [{
      "PatchDynamicTag:#text/0": "^^^packages/runtime-tags/src/__tests__/fixtures/patch-content-loop-locals/template.marko_1*content",
      "PatchChild:BranchScopes:#text/0": {
        "PatchValue:packages/runtime-tags/src/__tests__/fixtures/patch-content-loop-locals/template.marko0": "c",
        "PatchBranch:#text/1": 0
      }
    }, "packages/runtime-tags/src/__tests__/fixtures/patch-content-loop-locals/tags/list.marko_1*shell"]
  }
}

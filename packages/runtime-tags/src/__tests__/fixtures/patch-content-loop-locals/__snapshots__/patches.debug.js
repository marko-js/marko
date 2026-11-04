// PATCH
[`packages/runtime-tags/src/__tests__/fixtures/patch-content-loop-locals/template.marko_1*content packages/runtime-tags/src/__tests__/fixtures/patch-content-loop-locals/template.marko_1_n#0:7/subscribe;D l%;<em> </em><!><!>`, `packages/runtime-tags/src/__tests__/fixtures/patch-content-loop-locals/template.marko_2*shell;D%;<b><!>!</b>`, `packages/runtime-tags/src/__tests__/fixtures/patch-content-loop-locals/tags/list.marko_1*shell;b%;<!><!><!>`]
{
  "PatchChild:#childScope/0": {
    "PatchLoop:#text/0": [{
      "PatchDynamicTag:#text/0": _.a = "^^^packages/runtime-tags/src/__tests__/fixtures/patch-content-loop-locals/template.marko_1*content",
      "PatchChild:BranchScopes:#text/0": {
        "PatchMarkedWrite:label": "a",
        "PatchBranch:#text/1": [{
          "PatchText:#text/0": "a"
        }, _.b = "packages/runtime-tags/src/__tests__/fixtures/patch-content-loop-locals/template.marko_2*shell"],
        "PatchRender:packages/runtime-tags/src/__tests__/fixtures/patch-content-loop-locals/template.marko_1_n#0:7_label#2/setup": "label"
      }
    }, {
      "PatchDynamicTag:#text/0": _.a,
      "PatchChild:BranchScopes:#text/0": {
        "PatchMarkedWrite:label": "b",
        "PatchBranch:#text/1": [{
          "PatchText:#text/0": "b"
        }, _.b],
        "PatchRender:packages/runtime-tags/src/__tests__/fixtures/patch-content-loop-locals/template.marko_1_n#0:7_label#2/setup": "label"
      }
    }, {
      "PatchDynamicTag:#text/0": _.a,
      "PatchChild:BranchScopes:#text/0": {
        "PatchMarkedWrite:label": "c",
        "PatchBranch:#text/1": [{
          "PatchText:#text/0": "c"
        }, _.b],
        "PatchRender:packages/runtime-tags/src/__tests__/fixtures/patch-content-loop-locals/template.marko_1_n#0:7_label#2/setup": "label"
      }
    }, "packages/runtime-tags/src/__tests__/fixtures/patch-content-loop-locals/tags/list.marko_1*shell"]
  }
}
;Cxo

// PATCH holding Cxo
{
  "PatchChild:#childScope/0": {
    "PatchLoop:#text/0": [{
      "PatchDynamicTag:#text/0": "^^^packages/runtime-tags/src/__tests__/fixtures/patch-content-loop-locals/template.marko_1*content",
      "PatchChild:BranchScopes:#text/0": {
        "PatchMarkedWrite:label": "c",
        "PatchBranch:#text/1": 0,
        "PatchRender:packages/runtime-tags/src/__tests__/fixtures/patch-content-loop-locals/template.marko_1_n#0:7_label#2/setup": "label"
      }
    }, "packages/runtime-tags/src/__tests__/fixtures/patch-content-loop-locals/tags/list.marko_1*shell"]
  }
}

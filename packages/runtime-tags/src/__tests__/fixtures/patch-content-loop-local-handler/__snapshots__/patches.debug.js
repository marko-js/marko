// PATCH
[`packages/runtime-tags/src/__tests__/fixtures/patch-content-loop-local-handler/template.marko_1*content !packages/runtime-tags/src/__tests__/fixtures/patch-content-loop-local-handler/template.marko_1_x_name#4 packages/runtime-tags/src/__tests__/fixtures/patch-content-loop-local-handler/template.marko_1; D l ;<button> </button><span></span>`, `packages/runtime-tags/src/__tests__/fixtures/patch-content-loop-local-handler/tags/menu.marko_1*shell;b%;<!><!><!>`, {
  "PatchChild:#childScope/0": {
    "PatchLoop:#text/0": [{
      "PatchDynamicTag:#text/0": "^^^packages/runtime-tags/src/__tests__/fixtures/patch-content-loop-local-handler/template.marko_1*content",
      "PatchChild:BranchScopes:#text/0": {
        "PatchWrite:x_name": "B",
        "PatchAttr:#button/0 class": "b1",
        "PatchText:#text/1": "B",
        "PatchEffect:packages/runtime-tags/src/__tests__/fixtures/patch-content-loop-local-handler/template.marko_1_x_name#4": "x_name"
      }
    }, "packages/runtime-tags/src/__tests__/fixtures/patch-content-loop-local-handler/tags/menu.marko_1*shell"]
  }
}]
;CQo

// PATCH holding CQo
{
  "PatchChild:#childScope/0": {
    "PatchLoop:#text/0": [{
      "PatchDynamicTag:#text/0": _.a = "^^^packages/runtime-tags/src/__tests__/fixtures/patch-content-loop-local-handler/template.marko_1*content",
      "PatchChild:BranchScopes:#text/0": {
        "PatchWrite:x_name": "C",
        "PatchAttr:#button/0 class": "b1",
        "PatchText:#text/1": "C",
        "PatchEffect:packages/runtime-tags/src/__tests__/fixtures/patch-content-loop-local-handler/template.marko_1_x_name#4": "x_name"
      }
    }, {
      "PatchDynamicTag:#text/0": _.a,
      "PatchChild:BranchScopes:#text/0": {
        "PatchWrite:x_name": "D",
        "PatchAttr:#button/0 class": "b2",
        "PatchText:#text/1": "D",
        "PatchEffect:packages/runtime-tags/src/__tests__/fixtures/patch-content-loop-local-handler/template.marko_1_x_name#4": "x_name"
      }
    }, "packages/runtime-tags/src/__tests__/fixtures/patch-content-loop-local-handler/tags/menu.marko_1*shell"]
  }
}

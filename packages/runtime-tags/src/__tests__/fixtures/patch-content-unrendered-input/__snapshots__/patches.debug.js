// PATCH
[`packages/runtime-tags/src/__tests__/fixtures/patch-content-unrendered-input/tags/panel.marko_1*shell;D ;<li> </li>`, `packages/runtime-tags/src/__tests__/fixtures/patch-content-unrendered-input/tags/gate.marko_1*shell;b%;<!><!><!>`, `packages/runtime-tags/src/__tests__/fixtures/patch-content-unrendered-input/tags/wrapper.marko_1*shell;b%;<!><!><!>`, {
  "PatchChild:#childScope/2": {
    "PatchBranch:#text/0": [{
      "PatchDynamicTag:#text/0": "^^^packages/runtime-tags/src/__tests__/fixtures/patch-content-unrendered-input/template.marko_1*content",
      "PatchChild:BranchScopes:#text/0": {
        "PatchChild:#childScope/0": {
          "PatchLoop:#ul/0": [{
            "PatchText:#text/0": "SHOWN_r2"
          }, "packages/runtime-tags/src/__tests__/fixtures/patch-content-unrendered-input/tags/panel.marko_1*shell"]
        }
      }
    }, "packages/runtime-tags/src/__tests__/fixtures/patch-content-unrendered-input/tags/gate.marko_1*shell"]
  },
  "PatchChild:#childScope/3": {
    "PatchBranch:#div/0": [{
      "PatchDynamicTag:#text/0": "^^^packages/runtime-tags/src/__tests__/fixtures/patch-content-unrendered-input/template.marko_3*content",
      "PatchChild:BranchScopes:#text/0": {
        "PatchText:#text/0": "SHOWN_body2"
      }
    }, "packages/runtime-tags/src/__tests__/fixtures/patch-content-unrendered-input/tags/wrapper.marko_1*shell"]
  }
}]
;E1I

// PATCH holding E1I
[`packages/runtime-tags/src/__tests__/fixtures/patch-content-unrendered-input/tags/gate.marko_2*shell;b%;<!><!><!>`, {
  "PatchChild:#childScope/2": {
    "PatchBranch:#text/0": [1, {
      "PatchDynamicTag:#text/0": "^^^packages/runtime-tags/src/__tests__/fixtures/patch-content-unrendered-input/template.marko_2*content",
      "PatchChild:BranchScopes:#text/0": {
        "PatchText:#text/0": "SHOWN_g3"
      }
    }, "packages/runtime-tags/src/__tests__/fixtures/patch-content-unrendered-input/tags/gate.marko_2*shell"]
  },
  "PatchChild:#childScope/3": {
    "PatchBranch:#div/0": 0
  }
}]
;E1Y

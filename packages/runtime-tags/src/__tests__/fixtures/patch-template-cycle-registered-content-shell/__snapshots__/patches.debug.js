// PATCH
[`packages/runtime-tags/src/__tests__/fixtures/patch-template-cycle-registered-content-shell/tags/tree-b.marko_1*content`, `packages/runtime-tags/src/__tests__/fixtures/patch-template-cycle-registered-content-shell/tags/wrap.marko_1*shell;b%;<!><!><!>`, `packages/runtime-tags/src/__tests__/fixtures/patch-template-cycle-registered-content-shell/tags/tree-a.marko !packages/runtime-tags/src/__tests__/fixtures/patch-template-cycle-registered-content-shell/tags/tree-a.marko_0; D l/b/b%c&%c&b;<button> </button><!><!><!><!><!><!><!>`]
{
  "PatchChild:#childScope/0": {
    "PatchChild:#childScope/2": {
      "PatchChild:#childScope/0": {
        "PatchBranch:#text/0": [{
          "PatchDynamicTag:#text/0": _.a = "^^^packages/runtime-tags/src/__tests__/fixtures/patch-template-cycle-registered-content-shell/tags/tree-b.marko_1*content",
          "PatchChild:BranchScopes:#text/0": {
            "PatchSetup:": {
              "PatchText:#text/0": 1
            }
          }
        }, _.b = "packages/runtime-tags/src/__tests__/fixtures/patch-template-cycle-registered-content-shell/tags/wrap.marko_1*shell"]
      },
      "PatchBranch:#text/1": [{
        "PatchDynamicTag:#text/0": "packages/runtime-tags/src/__tests__/fixtures/patch-template-cycle-registered-content-shell/tags/tree-a.marko",
        "PatchChild:BranchScopes:#text/0": {
          "PatchChild:#childScope/2": {
            "PatchChild:#childScope/0": {
              "PatchBranch:#text/0": [{
                "PatchDynamicTag:#text/0": _.a,
                "PatchChild:BranchScopes:#text/0": {
                  "PatchText:#text/0": 0
                }
              }, _.b]
            },
            "PatchBranch:#text/1": 0
          },
          "PatchSetupValues:": {
            "PatchFill:packages/runtime-tags/src/__tests__/fixtures/patch-template-cycle-registered-content-shell/tags/tree-a.marko_0_count#7/fill": 0
          }
        }
      }]
    }
  }
}
;DyU

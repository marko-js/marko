// PATCH
[`packages/runtime-tags/src/__tests__/fixtures/patch-loop-dynamic-tag-body-await/template.marko_2*content !;b%;<!><!><!>`, `packages/runtime-tags/src/__tests__/fixtures/patch-loop-dynamic-tag-body-await/template.marko_1*shell !;b%;<!><!><!>`, {
  "PatchLoop:#text/0": [1, {
    "PatchPending:#text/0": _.a = "packages/runtime-tags/src/__tests__/fixtures/patch-loop-dynamic-tag-body-await/template.marko_2*content"
  }, 2, {
    "PatchPending:#text/0": _.a
  }, 3, {
    "PatchPending:#text/0": _.a
  }, "packages/runtime-tags/src/__tests__/fixtures/patch-loop-dynamic-tag-body-await/template.marko_1*shell"]
}]
[`packages/runtime-tags/src/__tests__/fixtures/patch-loop-dynamic-tag-body-await/tags/card.marko !packages/runtime-tags/src/__tests__/fixtures/patch-loop-dynamic-tag-body-await/tags/card.marko_0; b%;<button class=toggle>toggle</button><!><!>`, `packages/runtime-tags/src/__tests__/fixtures/patch-loop-dynamic-tag-body-await/template.marko_3*content`, {
  "PatchLoopItem:#text/0": [
    [0, 1], {
      "PatchChild:BranchScopes:#text/0": {
        "PatchDynamicTag:#text/0": ["packages/runtime-tags/src/__tests__/fixtures/patch-loop-dynamic-tag-body-await/tags/card.marko", "packages/runtime-tags/src/__tests__/fixtures/patch-loop-dynamic-tag-body-await/template.marko_3*content"],
        "PatchChild:BranchScopes:#text/0": {
          "PatchSetupValues:": {
            "PatchFill:packages/runtime-tags/src/__tests__/fixtures/patch-loop-dynamic-tag-body-await/tags/card.marko_fill1": !0
          },
          "PatchBindFill:packages/runtime-tags/src/__tests__/fixtures/patch-loop-dynamic-tag-body-await/tags/card.marko_fill0": "^packages/runtime-tags/src/__tests__/fixtures/patch-loop-dynamic-tag-body-await/template.marko_3*content"
        },
        "PatchFill:packages/runtime-tags/src/__tests__/fixtures/patch-loop-dynamic-tag-body-await/template.marko_fill1": "y"
      },
      "PatchFill:packages/runtime-tags/src/__tests__/fixtures/patch-loop-dynamic-tag-body-await/template.marko_fill0": "c"
    }
  ]
}]
{
  "PatchLoopItem:#text/0": [
    [1, 2], {
      "PatchChild:BranchScopes:#text/0": {
        "PatchDynamicTag:#text/0": [">div", _(1)["PatchLoopItem:#text/0"][1]["PatchChild:BranchScopes:#text/0"]["PatchDynamicTag:#text/0"][1]],
        "PatchChild:BranchScopes:#text/0": {
          "PatchChild:BranchScopes:#div/0": {
            "PatchText:#text/0": "d",
            "PatchText:#text/1": "y"
          }
        }
      }
    }
  ]
}
{
  "PatchLoopItem:#text/0": [
    [2, 3], {
      "PatchChild:BranchScopes:#text/0": {
        "PatchDynamicTag:#text/0": [_(1)["PatchLoopItem:#text/0"][1]["PatchChild:BranchScopes:#text/0"]["PatchDynamicTag:#text/0"][0], _.b = _(1)["PatchLoopItem:#text/0"][1]["PatchChild:BranchScopes:#text/0"]["PatchDynamicTag:#text/0"][1]],
        "PatchChild:BranchScopes:#text/0": {
          "PatchSetupValues:": {
            "PatchFill:packages/runtime-tags/src/__tests__/fixtures/patch-loop-dynamic-tag-body-await/tags/card.marko_fill1": !0
          },
          "PatchBindFill:packages/runtime-tags/src/__tests__/fixtures/patch-loop-dynamic-tag-body-await/tags/card.marko_fill0": _(1)["PatchLoopItem:#text/0"][1]["PatchChild:BranchScopes:#text/0"]["PatchChild:BranchScopes:#text/0"]["PatchBindFill:packages/runtime-tags/src/__tests__/fixtures/patch-loop-dynamic-tag-body-await/tags/card.marko_fill0"]
        },
        "PatchFill:packages/runtime-tags/src/__tests__/fixtures/patch-loop-dynamic-tag-body-await/template.marko_fill1": "y"
      },
      "PatchFill:packages/runtime-tags/src/__tests__/fixtures/patch-loop-dynamic-tag-body-await/template.marko_fill0": "e"
    }
  ]
}
;DTU

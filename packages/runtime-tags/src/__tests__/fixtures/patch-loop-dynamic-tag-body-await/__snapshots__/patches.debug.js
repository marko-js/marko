// PATCH
[`packages/runtime-tags/src/__tests__/fixtures/patch-loop-dynamic-tag-body-await/template.marko_2*content;b%;<!><!><!>`, `packages/runtime-tags/src/__tests__/fixtures/patch-loop-dynamic-tag-body-await/template.marko_1*shell;b%;<!><!><!>`]
{
  "PatchLoop:#text/0": [1, {
    "PatchPending:#text/0": _.a = "packages/runtime-tags/src/__tests__/fixtures/patch-loop-dynamic-tag-body-await/template.marko_2*content",
    "PatchSubscribers:packages/runtime-tags/src/__tests__/fixtures/patch-loop-dynamic-tag-body-await/template.marko_1_row_label#5/subscribers": "row_label",
    "PatchMarkedWrite:row_label": "c"
  }, 2, {
    "PatchPending:#text/0": _.a,
    "PatchSubscribers:packages/runtime-tags/src/__tests__/fixtures/patch-loop-dynamic-tag-body-await/template.marko_1_row_label#5/subscribers": "row_label",
    "PatchMarkedWrite:row_label": "d"
  }, 3, {
    "PatchPending:#text/0": _.a,
    "PatchSubscribers:packages/runtime-tags/src/__tests__/fixtures/patch-loop-dynamic-tag-body-await/template.marko_1_row_label#5/subscribers": "row_label",
    "PatchMarkedWrite:row_label": "e"
  }, "packages/runtime-tags/src/__tests__/fixtures/patch-loop-dynamic-tag-body-await/template.marko_1*shell"]
}
[`packages/runtime-tags/src/__tests__/fixtures/patch-loop-dynamic-tag-body-await/tags/card.marko !packages/runtime-tags/src/__tests__/fixtures/patch-loop-dynamic-tag-body-await/tags/card.marko_0; b%;<button class=toggle>toggle</button><!><!>`, `packages/runtime-tags/src/__tests__/fixtures/patch-loop-dynamic-tag-body-await/template.marko_3*content`]
{
  "PatchLoopItem:#text/0": [
    [0, 1], {
      "PatchChild:BranchScopes:#text/0": {
        "PatchDynamicTag:#text/0": [_.c = "packages/runtime-tags/src/__tests__/fixtures/patch-loop-dynamic-tag-body-await/tags/card.marko", _.b = "packages/runtime-tags/src/__tests__/fixtures/patch-loop-dynamic-tag-body-await/template.marko_3*content"],
        "PatchChild:BranchScopes:#text/0": {
          "PatchRender:packages/runtime-tags/src/__tests__/fixtures/patch-loop-dynamic-tag-body-await/tags/card.marko_1_input_content#0:4/setup": _.d = "input_content",
          "PatchSetupValues:": {
            "PatchFill:packages/runtime-tags/src/__tests__/fixtures/patch-loop-dynamic-tag-body-await/tags/card.marko_fill0": !0
          },
          "PatchBind:input_content": _.e = "^packages/runtime-tags/src/__tests__/fixtures/patch-loop-dynamic-tag-body-await/template.marko_3*content"
        },
        "PatchSubscribers:packages/runtime-tags/src/__tests__/fixtures/patch-loop-dynamic-tag-body-await/template.marko_2_v#2/subscribers": "v",
        "PatchMarkedWrite:v": "y"
      }
    },
    [1, 2], {
      "PatchChild:BranchScopes:#text/0": {
        "PatchDynamicTag:#text/0": [">div", _.b],
        "PatchChild:BranchScopes:#text/0": {
          "PatchChild:BranchScopes:#div/0": {
            "PatchText:#text/0": "d",
            "PatchText:#text/1": "y"
          }
        },
        "PatchSubscribers:packages/runtime-tags/src/__tests__/fixtures/patch-loop-dynamic-tag-body-await/template.marko_2_v#2/subscribers": "v"
      }
    },
    [2, 3], {
      "PatchChild:BranchScopes:#text/0": {
        "PatchDynamicTag:#text/0": [_.c, _.b],
        "PatchChild:BranchScopes:#text/0": {
          "PatchRender:packages/runtime-tags/src/__tests__/fixtures/patch-loop-dynamic-tag-body-await/tags/card.marko_1_input_content#0:4/setup": _.d,
          "PatchSetupValues:": {
            "PatchFill:packages/runtime-tags/src/__tests__/fixtures/patch-loop-dynamic-tag-body-await/tags/card.marko_fill0": !0
          },
          "PatchBind:input_content": _.e
        },
        "PatchSubscribers:packages/runtime-tags/src/__tests__/fixtures/patch-loop-dynamic-tag-body-await/template.marko_2_v#2/subscribers": "v",
        "PatchMarkedWrite:v": "y"
      }
    }
  ]
}
;DTU

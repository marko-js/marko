// PATCH
[`packages/runtime-tags/src/__tests__/fixtures/patch-dynamic-tag-body-local-await-effect/template.marko_2*content !;b%;<!><!><!>`, `packages/runtime-tags/src/__tests__/fixtures/patch-dynamic-tag-body-local-await-effect/template.marko_1*shell !; b%;<div></div><!><!>`, {
  "PatchBranch:#main/0": [{
    "PatchPending:#text/1": "packages/runtime-tags/src/__tests__/fixtures/patch-dynamic-tag-body-local-await-effect/template.marko_2*content",
    "PatchEffect:packages/runtime-tags/src/__tests__/fixtures/patch-dynamic-tag-body-local-await-effect/template.marko_1_x#2": "x",
    "PatchMarkedWrite:x": "b!"
  }, "packages/runtime-tags/src/__tests__/fixtures/patch-dynamic-tag-body-local-await-effect/template.marko_1*shell"]
}]
[`packages/runtime-tags/src/__tests__/fixtures/patch-dynamic-tag-body-local-await-effect/template.marko_3*content`, {
  "PatchChild:BranchScopes:#main/0": {
    "PatchChild:BranchScopes:#text/1": {
      "PatchDynamicTag:#text/0": [">div", "packages/runtime-tags/src/__tests__/fixtures/patch-dynamic-tag-body-local-await-effect/template.marko_3*content"],
      "PatchChild:BranchScopes:#text/0": {
        "PatchChild:BranchScopes:#div/0": {
          "PatchText:#text/0": "b!",
          "PatchText:#text/1": "y"
        }
      }
    }
  }
}]
;DTQ

// PATCH holding DTQ
{
  "PatchBranch:#main/0": [{
    "PatchPending:#text/1": "packages/runtime-tags/src/__tests__/fixtures/patch-dynamic-tag-body-local-await-effect/template.marko_2*content",
    "PatchEffect:packages/runtime-tags/src/__tests__/fixtures/patch-dynamic-tag-body-local-await-effect/template.marko_1_x#2": "x",
    "PatchMarkedWrite:x": "c!"
  }, "packages/runtime-tags/src/__tests__/fixtures/patch-dynamic-tag-body-local-await-effect/template.marko_1*shell"]
}
[`packages/runtime-tags/src/__tests__/fixtures/patch-dynamic-tag-body-local-await-effect/tags/card.marko !packages/runtime-tags/src/__tests__/fixtures/patch-dynamic-tag-body-local-await-effect/tags/card.marko_0; b%;<button class=toggle>toggle</button><!><!>`, {
  "PatchChild:BranchScopes:#main/0": {
    "PatchChild:BranchScopes:#text/1": {
      "PatchDynamicTag:#text/0": ["packages/runtime-tags/src/__tests__/fixtures/patch-dynamic-tag-body-local-await-effect/tags/card.marko", "packages/runtime-tags/src/__tests__/fixtures/patch-dynamic-tag-body-local-await-effect/template.marko_3*content"],
      "PatchChild:BranchScopes:#text/0": {
        "PatchSetupValues:": {
          "PatchFill:packages/runtime-tags/src/__tests__/fixtures/patch-dynamic-tag-body-local-await-effect/tags/card.marko_fill1": !0
        },
        "PatchBindFill:packages/runtime-tags/src/__tests__/fixtures/patch-dynamic-tag-body-local-await-effect/tags/card.marko_fill0": "^packages/runtime-tags/src/__tests__/fixtures/patch-dynamic-tag-body-local-await-effect/template.marko_3*content"
      },
      "PatchFill:packages/runtime-tags/src/__tests__/fixtures/patch-dynamic-tag-body-local-await-effect/template.marko_fill4": "z"
    },
    "PatchFill:packages/runtime-tags/src/__tests__/fixtures/patch-dynamic-tag-body-local-await-effect/template.marko_fill3": "c!"
  }
}]
;DTU

// PATCH holding DTU
{
  "PatchBranch:#main/0": [{
    "PatchPending:#text/1": "packages/runtime-tags/src/__tests__/fixtures/patch-dynamic-tag-body-local-await-effect/template.marko_2*content",
    "PatchEffect:packages/runtime-tags/src/__tests__/fixtures/patch-dynamic-tag-body-local-await-effect/template.marko_1_x#2": "x",
    "PatchMarkedWrite:x": "d!"
  }, "packages/runtime-tags/src/__tests__/fixtures/patch-dynamic-tag-body-local-await-effect/template.marko_1*shell"]
}
{
  "PatchChild:BranchScopes:#main/0": {
    "PatchChild:BranchScopes:#text/1": {
      "PatchDynamicTag:#text/0": [">div", "packages/runtime-tags/src/__tests__/fixtures/patch-dynamic-tag-body-local-await-effect/template.marko_3*content"],
      "PatchChild:BranchScopes:#text/0": {
        "PatchChild:BranchScopes:#div/0": {
          "PatchText:#text/0": "d!",
          "PatchText:#text/1": "w"
        }
      }
    }
  }
}

// PATCH
[`packages/runtime-tags/src/__tests__/fixtures/patch-child-effect-reads-loop-item-content/template.marko_1*content`, {
  "PatchChild:#childScope/0": {
    "PatchChild:#childScope/0": {
      "PatchDynamicTag:#text/1": "^^^packages/runtime-tags/src/__tests__/fixtures/patch-child-effect-reads-loop-item-content/template.marko_1*content",
      "PatchChild:BranchScopes:#text/1": {
        "PatchText:#text/0": "c"
      },
      "PatchEffect:packages/runtime-tags/src/__tests__/fixtures/patch-child-effect-reads-loop-item-content/tags/shows.marko_0_input_content#5": "input_content",
      "PatchBind:input_content": ["^^packages/runtime-tags/src/__tests__/fixtures/patch-child-effect-reads-loop-item-content/template.marko_1*content", {
        x: "c"
      }]
    }
  }
}]
;CAM

// PATCH holding CAM
{
  "PatchChild:#childScope/0": {
    "PatchChild:#childScope/0": {
      "PatchDynamicTag:#text/1": "^^^packages/runtime-tags/src/__tests__/fixtures/patch-child-effect-reads-loop-item-content/template.marko_1*content",
      "PatchChild:BranchScopes:#text/1": {
        "PatchText:#text/0": "e"
      },
      "PatchEffect:packages/runtime-tags/src/__tests__/fixtures/patch-child-effect-reads-loop-item-content/tags/shows.marko_0_input_content#5": "input_content",
      "PatchBind:input_content": ["^^packages/runtime-tags/src/__tests__/fixtures/patch-child-effect-reads-loop-item-content/template.marko_1*content", {
        x: "e"
      }]
    }
  }
}

// PATCH
`packages/runtime-tags/src/__tests__/fixtures/patch-content-param-intersection-per-owner/tags/owner.marko_1*content`
{
  "PatchChild:#childScope/0": {
    "PatchChild:#childScope/0": {
      "PatchDynamicTag:#text/0": "^^packages/runtime-tags/src/__tests__/fixtures/patch-content-param-intersection-per-owner/tags/owner.marko_1*content",
      "PatchChild:BranchScopes:#text/0": {
        "PatchMarkedWrite:x": "x2",
        "PatchSetup:": {
          "PatchSubscribers:packages/runtime-tags/src/__tests__/fixtures/patch-content-param-intersection-per-owner/tags/owner.marko_1_input_a#0:4/subscribe": 0
        },
        "PatchRender:packages/runtime-tags/src/__tests__/fixtures/patch-content-param-intersection-per-owner/tags/owner.marko_1_input_a#0:4_x#2/setup": "x"
      }
    }
  },
  "PatchChild:#childScope/1": {
    "PatchChild:#childScope/0": {
      "PatchChild:BranchScopes:#text/0": {
        "PatchText:#text/0": "a2x2"
      }
    },
    "PatchSubscribers:packages/runtime-tags/src/__tests__/fixtures/patch-content-param-intersection-per-owner/tags/owner.marko_0_input_a#4/subscribers": "input_a"
  }
}
;CAE

// PATCH holding CAE
{
  "PatchChild:#childScope/0": {
    "PatchChild:#childScope/0": {
      "PatchDynamicTag:#text/0": "^^packages/runtime-tags/src/__tests__/fixtures/patch-content-param-intersection-per-owner/tags/owner.marko_1*content",
      "PatchChild:BranchScopes:#text/0": {
        "PatchMarkedWrite:x": "x3",
        "PatchSetup:": {
          "PatchSubscribers:packages/runtime-tags/src/__tests__/fixtures/patch-content-param-intersection-per-owner/tags/owner.marko_1_input_a#0:4/subscribe": 0
        },
        "PatchRender:packages/runtime-tags/src/__tests__/fixtures/patch-content-param-intersection-per-owner/tags/owner.marko_1_input_a#0:4_x#2/setup": "x"
      }
    }
  },
  "PatchChild:#childScope/1": {
    "PatchChild:#childScope/0": {
      "PatchChild:BranchScopes:#text/0": {
        "PatchText:#text/0": "a3x3"
      }
    },
    "PatchSubscribers:packages/runtime-tags/src/__tests__/fixtures/patch-content-param-intersection-per-owner/tags/owner.marko_0_input_a#4/subscribers": "input_a"
  }
}

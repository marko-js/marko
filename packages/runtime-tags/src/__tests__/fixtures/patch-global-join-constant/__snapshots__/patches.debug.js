// PATCH
`packages/runtime-tags/src/__tests__/fixtures/patch-global-join-constant/template.marko_1*content #childScope/0>!packages/runtime-tags/src/__tests__/fixtures/patch-global-join-constant/template.marko_1`
{
  "$global:": {
    suffix: "b"
  },
  "PatchDynamicTag:#text/0": "^packages/runtime-tags/src/__tests__/fixtures/patch-global-join-constant/template.marko_1*content",
  "PatchChild:BranchScopes:#text/0": {
    "PatchChild:#childScope/0": {
      "PatchText:#text/0": "2b",
      "PatchSetup:": {
        "PatchWrite:y": 1
      }
    },
    "PatchSetupValues:": {
      "PatchFill:packages/runtime-tags/src/__tests__/fixtures/patch-global-join-constant/template.marko_1_count#6/fill": 0
    }
  }
}
;BgE

// PATCH holding BgE
{
  "$global:": {
    suffix: "c"
  },
  "PatchDynamicTag:#text/0": "^packages/runtime-tags/src/__tests__/fixtures/patch-global-join-constant/template.marko_1*content",
  "PatchChild:BranchScopes:#text/0": {
    "PatchChild:#childScope/0": {
      "PatchText:#text/0": "3c",
      "PatchSetup:": {
        "PatchWrite:y": 1
      }
    },
    "PatchSetupValues:": {
      "PatchFill:packages/runtime-tags/src/__tests__/fixtures/patch-global-join-constant/template.marko_1_count#6/fill": 0
    }
  }
}

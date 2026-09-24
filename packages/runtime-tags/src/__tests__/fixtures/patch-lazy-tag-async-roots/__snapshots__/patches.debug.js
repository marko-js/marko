// PATCH
{
  "PatchPending:#text/0": 1,
  "PatchPending:#text/1": 1
}
{
  "PatchReady:ready:packages/runtime-tags/src/__tests__/fixtures/patch-lazy-tag-async-roots/child.marko": {
    "PatchChild:BranchScopes:#text/0": {
      "PatchChild:#childScope/1": {
        "PatchText:#text/1": "a2",
        "PatchSetup:": {
          "PatchInit:": "!packages/runtime-tags/src/__tests__/fixtures/patch-lazy-tag-async-roots/child.marko_0",
          "PatchValue:packages/runtime-tags/src/__tests__/fixtures/patch-lazy-tag-async-roots/child.marko0": 0
        }
      }
    }
  }
}
{
  "PatchReady:": {
    "PatchChild:BranchScopes:#text/1": {
      "PatchChild:#childScope/1": {
        "PatchText:#text/1": "b2",
        "PatchSetup:": {
          "PatchInit:": _(1)["PatchReady:ready:packages/runtime-tags/src/__tests__/fixtures/patch-lazy-tag-async-roots/child.marko"]["PatchChild:BranchScopes:#text/0"]["PatchChild:#childScope/1"]["PatchSetup:"]["PatchInit:"],
          "PatchValue:packages/runtime-tags/src/__tests__/fixtures/patch-lazy-tag-async-roots/child.marko0": 0
        }
      }
    }
  }
}

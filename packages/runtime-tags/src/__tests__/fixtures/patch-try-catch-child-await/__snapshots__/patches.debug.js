// PATCH
{
  "PatchChild:BranchScopes:#text/0": [{
    "PatchChild:#childScope/0": {
      "PatchPending:#text/0": 1
    }
  }, 0, _.a = "packages/runtime-tags/src/__tests__/fixtures/patch-try-catch-child-await/template.marko_2*content"],
  "PatchCatch:#text/0": [{
    "PatchText:#text/0": "boom"
  }, _.a]
}

// PATCH
{
  "PatchChild:BranchScopes:#text/0": [{
    "PatchChild:#childScope/0": {
      "PatchPending:#text/0": 1,
      "PatchChild:BranchScopes:#text/0": {
        "PatchText:#text/0": "three"
      }
    }
  }, 0, "packages/runtime-tags/src/__tests__/fixtures/patch-try-catch-child-await/template.marko_2*content"]
}

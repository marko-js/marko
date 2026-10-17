// PATCH
{
  "PatchCatch:#text/0": [{
    "PatchText:#text/0": "boom"
  }, "packages/runtime-tags/src/__tests__/fixtures/patch-try-catch-nested-try/template.marko_3*content"]
}

// PATCH
{
  "PatchChild:BranchScopes:#text/0": [{
    "PatchText:#text/0": "ok",
    "PatchChild:BranchScopes:#text/1": [{
      "PatchPending:#text/0": 1,
      "PatchChild:BranchScopes:#text/0": {
        "PatchText:#text/0": "v3"
      }
    }, 0, "packages/runtime-tags/src/__tests__/fixtures/patch-try-catch-nested-try/template.marko_4*content"]
  }, 0, "packages/runtime-tags/src/__tests__/fixtures/patch-try-catch-nested-try/template.marko_3*content"]
}

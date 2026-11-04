// PATCH
`packages/runtime-tags/src/__tests__/fixtures/patch-try-catch-nested-try/template.marko_3*content`
{
  "PatchCatch:#text/0": [{
    "PatchText:#text/0": "boom"
  }, "packages/runtime-tags/src/__tests__/fixtures/patch-try-catch-nested-try/template.marko_3*content"]
}
;DAQ

// PATCH holding DAQ
{
  "PatchChild:BranchScopes:#text/0": [{
    "PatchText:#text/0": "ok",
    "PatchChild:BranchScopes:#text/1": [{
      "PatchPending:#text/0": 1,
      "PatchChild:BranchScopes:#text/0": {
        "PatchText:#text/0": "v3"
      }
    }, "packages/runtime-tags/src/__tests__/fixtures/patch-try-catch-nested-try/template.marko_4*content"]
  }, "packages/runtime-tags/src/__tests__/fixtures/patch-try-catch-nested-try/template.marko_3*content"]
}

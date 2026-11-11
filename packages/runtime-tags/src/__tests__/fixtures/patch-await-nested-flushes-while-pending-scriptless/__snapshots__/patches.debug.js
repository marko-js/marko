// PATCH
`packages/runtime-tags/src/__tests__/fixtures/patch-await-nested-flushes-while-pending-scriptless/template.marko_5*content,<em>outer loading</em>`
{
  "PatchChild:BranchScopes:#text/0": {
    "PatchPending:#text/0": 1
  }
}
`packages/runtime-tags/src/__tests__/fixtures/patch-await-nested-flushes-while-pending-scriptless/template.marko_6*content,<em>inner loading</em>`
{
  "PatchChild:BranchScopes:#text/0": {
    "PatchChild:BranchScopes:#text/0": {
      "PatchText:#text/0": "b",
      "PatchText:#text/1": "o",
      "PatchChild:BranchScopes:#text/2": {
        "PatchPending:#text/0": 1
      }
    }
  }
}
{
  "PatchChild:BranchScopes:#text/0": {
    "PatchChild:BranchScopes:#text/0": {
      "PatchChild:BranchScopes:#text/2": {
        "PatchChild:BranchScopes:#text/0": {
          "PatchText:#text/0": "b",
          "PatchText:#text/1": "i"
        }
      }
    }
  }
}
;EgcA

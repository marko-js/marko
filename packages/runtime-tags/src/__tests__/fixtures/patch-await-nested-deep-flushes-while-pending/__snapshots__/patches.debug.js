// PATCH
`packages/runtime-tags/src/__tests__/fixtures/patch-await-nested-deep-flushes-while-pending/template.marko_7*content`
{
  "PatchChild:BranchScopes:#text/2": {
    "PatchPending:#text/0": 1
  }
}
`packages/runtime-tags/src/__tests__/fixtures/patch-await-nested-deep-flushes-while-pending/template.marko_8*content`
{
  "PatchChild:BranchScopes:#text/2": {
    "PatchChild:BranchScopes:#text/0": {
      "PatchText:#text/0": "b",
      "PatchText:#text/1": "o",
      "PatchChild:BranchScopes:#text/2": {
        "PatchPending:#text/0": 1
      }
    }
  }
}
`packages/runtime-tags/src/__tests__/fixtures/patch-await-nested-deep-flushes-while-pending/template.marko_9*content`
{
  "PatchChild:BranchScopes:#text/2": {
    "PatchChild:BranchScopes:#text/0": {
      "PatchChild:BranchScopes:#text/2": {
        "PatchChild:BranchScopes:#text/0": {
          "PatchText:#text/0": "b",
          "PatchText:#text/1": "m",
          "PatchChild:BranchScopes:#text/2": {
            "PatchPending:#text/0": 1
          }
        }
      }
    }
  }
}
{
  "PatchChild:BranchScopes:#text/2": {
    "PatchChild:BranchScopes:#text/0": {
      "PatchChild:BranchScopes:#text/2": {
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
  }
}
;GwAc

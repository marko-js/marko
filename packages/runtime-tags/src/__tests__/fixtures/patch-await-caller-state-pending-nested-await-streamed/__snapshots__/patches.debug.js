// PATCH
{
  "PatchChild:#childScope/2": {
    "PatchChild:BranchScopes:#text/0": {
      "PatchText:#text/0": "b",
      "PatchChild:BranchScopes:#text/2": {
        "PatchPending:#text/0": 1,
        "PatchChild:BranchScopes:#text/0": {
          "PatchText:#text/0": "b"
        }
      }
    }
  }
}

// PATCH
[`packages/runtime-tags/src/__tests__/fixtures/patch-await-caller-state-pending-nested-await-streamed/tags/show-await.marko_3*content,<i>inner loading</i>`, {
  "PatchChild:#childScope/2": {
    "PatchChild:BranchScopes:#text/0": {
      "PatchText:#text/0": "c",
      "PatchChild:BranchScopes:#text/2": {
        "PatchPending:#text/0": 1
      }
    }
  }
}]
{
  "PatchChild:#childScope/2": {
    "PatchChild:BranchScopes:#text/0": {
      "PatchChild:BranchScopes:#text/2": {
        "PatchChild:BranchScopes:#text/0": {
          "PatchText:#text/0": "c"
        }
      }
    }
  }
}
;EAU

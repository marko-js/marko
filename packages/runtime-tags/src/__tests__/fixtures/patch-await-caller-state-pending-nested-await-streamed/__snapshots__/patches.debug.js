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
{
  "PatchChild:#childScope/2": {
    "PatchChild:BranchScopes:#text/0": {
      "PatchText:#text/0": "c",
      "PatchChild:BranchScopes:#text/2": {
        "PatchPending:#text/0": 1
      }
    }
  }
}
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

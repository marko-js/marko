// PATCH
(_.a = {
  "PatchChild:#childScope/0": {
    "PatchText:#text/0": "b",
    "PatchChild:BranchScopes:#text/1": {
      "PatchText:#text/1": "y"
    }
  }
}, _.a)

// PATCH
(_.a = {
  "PatchChild:#childScope/0": {
    "PatchText:#text/0": "c",
    "PatchChild:BranchScopes:#text/1": {
      "PatchText:#text/1": "z"
    }
  }
}, _.a)

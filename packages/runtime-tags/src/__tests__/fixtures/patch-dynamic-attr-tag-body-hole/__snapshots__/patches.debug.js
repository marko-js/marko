// PATCH
(_.a = {
  "PatchChild:#childScope/0": {
    "PatchChild:BranchScopes:#text/1": {
      "PatchText:#text/0": "two"
    },
    "PatchChild:BranchScopes:#text/2": {
      "PatchText:#text/0": "two"
    }
  }
}, _.a)

// PATCH
(_.a = {
  "PatchChild:#childScope/0": {
    "PatchChild:BranchScopes:#text/1": {
      "PatchText:#text/0": "three"
    },
    "PatchChild:BranchScopes:#text/2": {
      "PatchText:#text/0": "three"
    }
  }
}, _.a)

// PATCH
(_.a = {
  "PatchChild:#childScope/0": {
    "PatchChild:BranchScopes:#text/1": {
      "PatchText:#text/0": "four"
    },
    "PatchChild:BranchScopes:#text/2": {
      "PatchText:#text/0": "four"
    }
  }
}, _.a)

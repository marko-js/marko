// PATCH
[(_.a = {
  "PatchText:#text/0": "Store!",
  "PatchPending:#text/1": 1
}, _.a)]
[(_.b = {
  "PatchChild:BranchScopes:#text/1": {
    "PatchText:#text/0": "slow"
  }
}, _.b)]

// PATCH
[(_.a = {
  "PatchText:#text/0": "Store!!",
  "PatchPending:#text/1": 1
}, _.a)]
[(_.b = {
  "PatchChild:BranchScopes:#text/1": {
    "PatchText:#text/0": "slower"
  }
}, _.b)]

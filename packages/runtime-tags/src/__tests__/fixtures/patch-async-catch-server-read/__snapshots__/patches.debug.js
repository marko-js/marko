// PATCH
(_.a = {
  "PatchChild:BranchScopes:#text/0": {
    "PatchPending:#text/0": 1,
    "PatchCatch:#text/0": [new Error("boom"), "\x3Cem>second\x3C/em>"]
  }
}, _.a)

// PATCH
(_.a = {
  "PatchChild:BranchScopes:#text/0": {
    "PatchPending:#text/0": 1,
    "PatchCatch:#text/0": [new Error("bang"), "\x3Cem>third\x3C/em>"]
  }
}, _.a)

// PATCH
[`packages/runtime-tags/src/__tests__/fixtures/patch-action-ends-with-patch/template.marko_2*content`, {
  "PatchChild:BranchScopes:#text/2": {
    "PatchPending:#text/0": 1
  },
  "PatchText:#text/3": "two"
}]
{
  "PatchChild:BranchScopes:#text/2": {
    "PatchChild:BranchScopes:#text/0": {
      "PatchText:#text/0": "a2"
    }
  }
}
;CgM

// PATCH holding CgM
{
  "PatchChild:BranchScopes:#text/2": {
    "PatchPending:#text/0": 1
  },
  "PatchText:#text/3": "three"
}

// PATCH holding CgM
{
  "PatchChild:BranchScopes:#text/2": {
    "PatchPending:#text/0": 1
  },
  "PatchText:#text/3": "four"
}

// PATCH holding CgM
{
  "PatchChild:BranchScopes:#text/2": {
    "PatchPending:#text/0": 1
  },
  "PatchText:#text/3": "five"
}
{
  "PatchChild:BranchScopes:#text/2": {
    "PatchChild:BranchScopes:#text/0": {
      "PatchText:#text/0": "a5"
    }
  }
}

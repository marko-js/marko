// PATCH
{
  "$global:": {
    brand: "bmce"
  },
  "PatchValue:packages/runtime-tags/src/__tests__/fixtures/patch-child-off-branch-path/template.marko_fill0": "b",
  "PatchValue:packages/runtime-tags/src/__tests__/fixtures/patch-child-off-branch-path/template.marko_fill1": "bmce!",
  "PatchChild:BranchScopes:#text/2": {
    "PatchPending:#text/0": 1,
    "PatchChild:BranchScopes:#text/0": {
      "PatchText:#text/0": "s2"
    }
  },
  "PatchChild:#childScope/3": {
    "PatchValue:packages/runtime-tags/src/__tests__/fixtures/patch-child-off-branch-path/tags/card.marko_fill1": (p => p = new Promise((f, r) => _.a = {
      f,
      r(e) {
        p.catch(_ => 0);
        r(e)
      }
    }))(),
    "PatchChild:BranchScopes:#text/0": {
      "PatchPending:#text/0": 1,
      "PatchChild:BranchScopes:#text/0": {
        "PatchText:#text/0": "s2"
      }
    },
    "PatchChild:BranchScopes:#text/1": 0,
    "PatchCatch:#text/1": []
  }
}
(_.a.f("o2"), 0)

// PATCH
{
  "$global:": {
    brand: "cmce"
  },
  "PatchValue:packages/runtime-tags/src/__tests__/fixtures/patch-child-off-branch-path/template.marko_fill0": "c",
  "PatchValue:packages/runtime-tags/src/__tests__/fixtures/patch-child-off-branch-path/template.marko_fill1": "cmce!",
  "PatchChild:BranchScopes:#text/2": {
    "PatchPending:#text/0": 1,
    "PatchChild:BranchScopes:#text/0": {
      "PatchText:#text/0": "s3"
    }
  },
  "PatchChild:#childScope/3": {
    "PatchValue:packages/runtime-tags/src/__tests__/fixtures/patch-child-off-branch-path/tags/card.marko_fill1": (p => p = new Promise((f, r) => _.a = {
      f,
      r(e) {
        p.catch(_ => 0);
        r(e)
      }
    }))(),
    "PatchChild:BranchScopes:#text/0": {
      "PatchPending:#text/0": 1,
      "PatchChild:BranchScopes:#text/0": {
        "PatchText:#text/0": "s3"
      }
    },
    "PatchChild:BranchScopes:#text/1": 0,
    "PatchCatch:#text/1": []
  }
}
(_.a.f("o3"), 0)

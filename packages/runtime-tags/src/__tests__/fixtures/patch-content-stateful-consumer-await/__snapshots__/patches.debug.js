// PATCH
{
  "PatchChild:#childScope/0": {
    "PatchChild:BranchScopes:#text/1": {
      "PatchPending:#text/0": 1
    }
  },
  "PatchValue:packages/runtime-tags/src/__tests__/fixtures/patch-content-stateful-consumer-await/template.marko0": (p => p = new Promise((f, r) => _.a = {
    f,
    r(e) {
      p.catch(_ => 0);
      r(e)
    }
  }))()
}
[{
  "PatchChild:#childScope/0": {
    "PatchChild:BranchScopes:#text/1": {
      "PatchChild:BranchScopes:#text/0": {}
    }
  }
}, _.a.f("two")][0]

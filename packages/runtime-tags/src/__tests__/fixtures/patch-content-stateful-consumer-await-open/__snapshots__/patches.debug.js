// PATCH
[`packages/runtime-tags/src/__tests__/fixtures/patch-content-stateful-consumer-await-open/template.marko_2*content;D ;<em> </em>`, {
  "PatchChild:#childScope/0": {
    "PatchChild:BranchScopes:#text/1": {
      "PatchPending:#text/0": "packages/runtime-tags/src/__tests__/fixtures/patch-content-stateful-consumer-await-open/template.marko_2*content"
    }
  },
  "PatchFill:packages/runtime-tags/src/__tests__/fixtures/patch-content-stateful-consumer-await-open/template.marko_fill0": (p => p = new Promise((f, r) => _.a = {
    f,
    r(e) {
      p.catch(_ => 0);
      r(e)
    }
  }))()
}]
{
  "PatchChild:#childScope/0": {
    "PatchChild:BranchScopes:#text/1": {
      "PatchChild:BranchScopes:#text/0": {
        "PatchText:#text/0": "two"
      }
    }
  }
}
(_.a.f("two"), 0)
;BgI

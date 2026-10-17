// PATCH
"ready:packages/runtime-tags/src/__tests__/fixtures/patch-lazy-tag-promise-settle/probe.marko", {
  "PatchChild:#childScope/1": {
    "PatchEffect:packages/runtime-tags/src/__tests__/fixtures/patch-lazy-tag-promise-settle/probe.marko_0_input_promise#3": "input_promise",
    "PatchWrite:input_promise": (p => p = new Promise((f, r) => _.a = {
      f,
      r(e) {
        p.catch(_ => 0);
        r(e)
      }
    }))()
  },
  "PatchChild:BranchScopes:#text/2": {
    "PatchPending:#text/0": 1,
    "PatchChild:BranchScopes:#text/0": {
      "PatchText:#text/0": "v"
    }
  }
}
(_.a.f(_.a = {
  name: "v"
}), 0)

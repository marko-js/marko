// PATCH
[`packages/runtime-tags/src/__tests__/fixtures/patch-async-late-dynamic-tag/template.marko_1*content`, `packages/runtime-tags/src/__tests__/fixtures/patch-async-late-dynamic-tag/template.marko_3*content;D ;<em> </em>`]
{
  "PatchDynamicTag:#text/0": [">div", "packages/runtime-tags/src/__tests__/fixtures/patch-async-late-dynamic-tag/template.marko_1*content", {
    class: "box"
  }],
  "PatchChild:BranchScopes:#text/0": {
    "PatchChild:BranchScopes:#div/0": {
      "PatchPending:#text/0": "packages/runtime-tags/src/__tests__/fixtures/patch-async-late-dynamic-tag/template.marko_3*content"
    }
  },
  "PatchSubscribers:packages/runtime-tags/src/__tests__/fixtures/patch-async-late-dynamic-tag/template.marko_0_input_q#7/subscribers": "input_q",
  "PatchMarkedWrite:input_q": (p => p = new Promise((f, r) => _.a = {
    f,
    r(e) {
      p.catch(_ => 0);
      r(e)
    }
  }))()
}
{
  "PatchChild:BranchScopes:#text/0": {
    "PatchChild:BranchScopes:#div/0": {
      "PatchChild:BranchScopes:#text/0": {
        "PatchText:#text/0": "2"
      }
    }
  }
}
(_.a.f("b"), 0)
;DRQ

// PATCH holding DRQ
{
  "PatchDynamicTag:#text/0": [">section", "packages/runtime-tags/src/__tests__/fixtures/patch-async-late-dynamic-tag/template.marko_1*content", {
    class: "box"
  }],
  "PatchChild:BranchScopes:#text/0": {
    "PatchChild:BranchScopes:#section/0": {
      "PatchPending:#text/0": "packages/runtime-tags/src/__tests__/fixtures/patch-async-late-dynamic-tag/template.marko_3*content"
    }
  },
  "PatchSubscribers:packages/runtime-tags/src/__tests__/fixtures/patch-async-late-dynamic-tag/template.marko_0_input_q#7/subscribers": "input_q",
  "PatchMarkedWrite:input_q": (p => p = new Promise((f, r) => _.a = {
    f,
    r(e) {
      p.catch(_ => 0);
      r(e)
    }
  }))()
}
{
  "PatchChild:BranchScopes:#text/0": {
    "PatchChild:BranchScopes:#section/0": {
      "PatchChild:BranchScopes:#text/0": {
        "PatchText:#text/0": "3"
      }
    }
  }
}
(_.a.f("c"), 0)

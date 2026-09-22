// PATCH
[`packages/runtime-tags/src/__tests__/fixtures/patch-page-created-try-placeholder/b.marko !packages/runtime-tags/src/__tests__/fixtures/patch-page-created-try-placeholder/b.marko_0; b%;<button>go</button><!><!>`, `packages/runtime-tags/src/__tests__/fixtures/patch-page-created-try-placeholder/b.marko_1_#text#0/await;D ;<p> </p>`, `packages/runtime-tags/src/__tests__/fixtures/patch-page-created-try-placeholder/b.marko_1*content;b%;<!><!><!>`, `packages/runtime-tags/src/__tests__/fixtures/patch-page-created-try-placeholder/b.marko_2*content,Loading`, {
  "PatchDynamicTag:#text/0": ["packages/runtime-tags/src/__tests__/fixtures/patch-page-created-try-placeholder/b.marko", {
    promise: (p => p = new Promise((f, r) => _.a = {
      f,
      r(e) {
        p.catch(_ => 0);
        r(e)
      }
    }))()
  }],
  "PatchChild:BranchScopes:#text/0": {
    "PatchChild:BranchScopes:#text/1": [{
      "PatchPending:#text/0": "packages/runtime-tags/src/__tests__/fixtures/patch-page-created-try-placeholder/b.marko_1_#text#0/await"
    }, "packages/runtime-tags/src/__tests__/fixtures/patch-page-created-try-placeholder/b.marko_1*content", $, "packages/runtime-tags/src/__tests__/fixtures/patch-page-created-try-placeholder/b.marko_2*content"]
  }
}]
[{
  "PatchChild:BranchScopes:#text/0": {
    "PatchChild:BranchScopes:#text/1": [{
      "PatchChild:BranchScopes:#text/0": {
        "PatchText:#text/0": "slow"
      }
    }, _(0)["PatchChild:BranchScopes:#text/0"]["PatchChild:BranchScopes:#text/1"][1], $, _(0)["PatchChild:BranchScopes:#text/0"]["PatchChild:BranchScopes:#text/1"][3]]
  }
}, _.a.f("slow")][0]
"BwEAAAA"

// PATCH holding BwEAAAA
[`packages/runtime-tags/src/__tests__/fixtures/patch-page-created-try-placeholder/a.marko,<h1>A</h1>`, {
  "PatchDynamicTag:#text/0": ["packages/runtime-tags/src/__tests__/fixtures/patch-page-created-try-placeholder/a.marko", {
    promise: (p => p = new Promise((f, r) => _.a = {
      f,
      r(e) {
        p.catch(_ => 0);
        r(e)
      }
    }))()
  }]
}]
(_.a.f("y"), 0)
"BwAAAAAA"

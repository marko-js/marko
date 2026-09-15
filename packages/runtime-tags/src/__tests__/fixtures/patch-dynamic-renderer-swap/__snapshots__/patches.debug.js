// PATCH
[`packages/runtime-tags/src/__tests__/fixtures/patch-dynamic-renderer-swap/card-a.marko;D ;<section class=a> </section>`, (_.a = {
  "PatchDynamicTag:#text/0": ["packages/runtime-tags/src/__tests__/fixtures/patch-dynamic-renderer-swap/card-a.marko", {
    label: "two"
  }],
  "PatchChild:BranchScopes:#text/0": {
    "PatchText:#text/0": "two"
  }
}, _.a)]
"AwA"

// PATCH holding AwA
[`packages/runtime-tags/src/__tests__/fixtures/patch-dynamic-renderer-swap/card-b.marko;D%;<article class=b><!>!</article>`, (_.a = {
  "PatchDynamicTag:#text/0": ["packages/runtime-tags/src/__tests__/fixtures/patch-dynamic-renderer-swap/card-b.marko", {
    label: "three"
  }],
  "PatchChild:BranchScopes:#text/0": {
    "PatchText:#text/0": "three"
  }
}, _.a)]
"AwAA"

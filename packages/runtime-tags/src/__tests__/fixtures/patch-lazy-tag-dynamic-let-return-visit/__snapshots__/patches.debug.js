// PATCH
[(_.a = {
  "PatchDynamicTag:#text/2": [0, {
    label: "a"
  }]
}, _.a)]

// PATCH
[`packages/runtime-tags/src/__tests__/fixtures/patch-lazy-tag-dynamic-let-return-visit/child.marko !packages/runtime-tags/src/__tests__/fixtures/patch-lazy-tag-dynamic-let-return-visit/child.marko_0; D%c%;<button class=count><!>:<!></button>`, (_.a = {
  "PatchDynamicTag:#text/2": ["packages/runtime-tags/src/__tests__/fixtures/patch-lazy-tag-dynamic-let-return-visit/child.marko", {
    label: "b"
  }],
  "PatchReady:ready:packages/runtime-tags/src/__tests__/fixtures/patch-lazy-tag-dynamic-let-return-visit/child.marko": {
    "PatchChild:BranchScopes:#text/2": {
      "PatchText:#text/1": "b",
      "PatchSetup:": {
        "PatchValue:packages/runtime-tags/src/__tests__/fixtures/patch-lazy-tag-dynamic-let-return-visit/child.marko0": 0
      }
    }
  }
}, _.a)]
"AgA"

// PATCH holding AgA
[(_.a = {
  "PatchDynamicTag:#text/2": ["packages/runtime-tags/src/__tests__/fixtures/patch-lazy-tag-dynamic-let-return-visit/child.marko", {
    label: "c"
  }],
  "PatchReady:ready:packages/runtime-tags/src/__tests__/fixtures/patch-lazy-tag-dynamic-let-return-visit/child.marko": {
    "PatchChild:BranchScopes:#text/2": {
      "PatchText:#text/1": "c",
      "PatchSetup:": {
        "PatchValue:packages/runtime-tags/src/__tests__/fixtures/patch-lazy-tag-dynamic-let-return-visit/child.marko0": 0
      }
    }
  }
}, _.a)]

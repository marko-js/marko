// PATCH
(_.a = {
  "PatchDynamicTag:#text/2": [0, {
    label: "a"
  }]
}, _.a)

// PATCH
[`packages/runtime-tags/src/__tests__/fixtures/patch-lazy-tag-dynamic-return-visit/child.marko;D ;<button> </button>`, (_.a = {
  "PatchDynamicTag:#text/2": ["packages/runtime-tags/src/__tests__/fixtures/patch-lazy-tag-dynamic-return-visit/child.marko", {
    label: "b"
  }],
  "PatchReady:ready:packages/runtime-tags/src/__tests__/fixtures/patch-lazy-tag-dynamic-return-visit/child.marko": {
    "PatchChild:BranchScopes:#text/2": {
      "PatchText:#text/0": "b"
    }
  }
}, _.a)]
"AgA"

// PATCH holding AgA
(_.a = {
  "PatchDynamicTag:#text/2": ["packages/runtime-tags/src/__tests__/fixtures/patch-lazy-tag-dynamic-return-visit/child.marko", {
    label: "c"
  }],
  "PatchReady:ready:packages/runtime-tags/src/__tests__/fixtures/patch-lazy-tag-dynamic-return-visit/child.marko": {
    "PatchChild:BranchScopes:#text/2": {
      "PatchText:#text/0": "c"
    }
  }
}, _.a)

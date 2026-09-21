// PATCH
{
  "PatchDynamicTag:#text/2": [0, {
    label: "a"
  }]
}

// PATCH
[`packages/runtime-tags/src/__tests__/fixtures/patch-lazy-tag-dynamic-return-visit/child.marko;D ;<button> </button>`, {
  "PatchReady:ready:packages/runtime-tags/src/__tests__/fixtures/patch-lazy-tag-dynamic-return-visit/child.marko": {
    "PatchDynamicTag:#text/2": ["packages/runtime-tags/src/__tests__/fixtures/patch-lazy-tag-dynamic-return-visit/child.marko", {
      label: "b"
    }],
    "PatchChild:BranchScopes:#text/2": {
      "PatchText:#text/0": "b"
    }
  }
}]
"AgA"

// PATCH holding AgA
{
  "PatchReady:ready:packages/runtime-tags/src/__tests__/fixtures/patch-lazy-tag-dynamic-return-visit/child.marko": {
    "PatchDynamicTag:#text/2": ["packages/runtime-tags/src/__tests__/fixtures/patch-lazy-tag-dynamic-return-visit/child.marko", {
      label: "c"
    }],
    "PatchChild:BranchScopes:#text/2": {
      "PatchText:#text/0": "c"
    }
  }
}

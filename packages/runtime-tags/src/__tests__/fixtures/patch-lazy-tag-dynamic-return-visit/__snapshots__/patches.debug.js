// PATCH
{
  "PatchDynamicTag:#text/2": [0, {
    label: "a"
  }]
}

// PATCH
"ready:packages/runtime-tags/src/__tests__/fixtures/patch-lazy-tag-dynamic-return-visit/child.marko", [`packages/runtime-tags/src/__tests__/fixtures/patch-lazy-tag-dynamic-return-visit/child.marko;D ;<button> </button>`, {
  "PatchDynamicTag:#text/2": "packages/runtime-tags/src/__tests__/fixtures/patch-lazy-tag-dynamic-return-visit/child.marko",
  "PatchChild:BranchScopes:#text/2": {
    "PatchText:#text/0": "b"
  }
}]
"AgA"

// PATCH holding AgA
"ready:packages/runtime-tags/src/__tests__/fixtures/patch-lazy-tag-dynamic-return-visit/child.marko", {
  "PatchDynamicTag:#text/2": "packages/runtime-tags/src/__tests__/fixtures/patch-lazy-tag-dynamic-return-visit/child.marko",
  "PatchChild:BranchScopes:#text/2": {
    "PatchText:#text/0": "c"
  }
}

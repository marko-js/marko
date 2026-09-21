// PATCH
[`packages/runtime-tags/src/__tests__/fixtures/patch-lazy-tag-dynamic-scriptless/child.marko;D ;<p class=child> </p>`, {
  "PatchReady:ready:packages/runtime-tags/src/__tests__/fixtures/patch-lazy-tag-dynamic-scriptless/child.marko": {
    "PatchDynamicTag:#text/0": ["packages/runtime-tags/src/__tests__/fixtures/patch-lazy-tag-dynamic-scriptless/child.marko", {
      label: "b"
    }],
    "PatchChild:BranchScopes:#text/0": {
      "PatchText:#text/0": "b"
    }
  }
}]
"AgA"

// PATCH holding AgA
{
  "PatchDynamicTag:#text/0": [0, {
    label: "b"
  }]
}

// PATCH holding AgA
{
  "PatchReady:ready:packages/runtime-tags/src/__tests__/fixtures/patch-lazy-tag-dynamic-scriptless/child.marko": {
    "PatchDynamicTag:#text/0": ["packages/runtime-tags/src/__tests__/fixtures/patch-lazy-tag-dynamic-scriptless/child.marko", {
      label: "c"
    }],
    "PatchChild:BranchScopes:#text/0": {
      "PatchText:#text/0": "c"
    }
  }
}

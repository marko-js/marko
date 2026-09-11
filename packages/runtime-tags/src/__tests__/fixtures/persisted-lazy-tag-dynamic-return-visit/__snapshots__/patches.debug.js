// PATCH
{
  "PatchDynamicTag:#text/2": [0, {
    label: "a"
  }]
}

// PATCH
[`packages/runtime-tags/src/__tests__/fixtures/persisted-lazy-tag-dynamic-return-visit/child.marko;D ;<button> </button>`, {
  "PatchDynamicTag:#text/2": ["packages/runtime-tags/src/__tests__/fixtures/persisted-lazy-tag-dynamic-return-visit/child.marko", {
    label: "b"
  }],
  "PatchReady:ready:packages/runtime-tags/src/__tests__/fixtures/persisted-lazy-tag-dynamic-return-visit/child.marko": {
    "PatchChild:BranchScopes:#text/2": {
      "PatchText:#text/0": "b"
    }
  }
}]

// PATCH
[`packages/runtime-tags/src/__tests__/fixtures/persisted-lazy-tag-dynamic-return-visit/child.marko;D ;<button> </button>`, {
  "PatchDynamicTag:#text/2": ["packages/runtime-tags/src/__tests__/fixtures/persisted-lazy-tag-dynamic-return-visit/child.marko", {
    label: "c"
  }],
  "PatchReady:ready:packages/runtime-tags/src/__tests__/fixtures/persisted-lazy-tag-dynamic-return-visit/child.marko": {
    "PatchChild:BranchScopes:#text/2": {
      "PatchText:#text/0": "c"
    }
  }
}]

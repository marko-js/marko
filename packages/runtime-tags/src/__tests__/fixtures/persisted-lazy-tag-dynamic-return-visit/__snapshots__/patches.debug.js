// PATCH
{
  "PatchDynamicTag:#text/2": [0, {
    label: "a"
  }]
}

// PATCH
(ready({
  "ready:packages/runtime-tags/src/__tests__/fixtures/persisted-lazy-tag-dynamic-return-visit/child.marko": [_ => ({
    "PatchChild:BranchScopes:#text/2": {
      "PatchText:#text/0": "b"
    }
  })]
}), [`packages/runtime-tags/src/__tests__/fixtures/persisted-lazy-tag-dynamic-return-visit/child.marko;D ;<button> </button>`, {
  "PatchDynamicTag:#text/2": ["packages/runtime-tags/src/__tests__/fixtures/persisted-lazy-tag-dynamic-return-visit/child.marko", {
    label: "b"
  }]
}])

// PATCH
(ready({
  "ready:packages/runtime-tags/src/__tests__/fixtures/persisted-lazy-tag-dynamic-return-visit/child.marko": [_ => ({
    "PatchChild:BranchScopes:#text/2": {
      "PatchText:#text/0": "c"
    }
  })]
}), [`packages/runtime-tags/src/__tests__/fixtures/persisted-lazy-tag-dynamic-return-visit/child.marko;D ;<button> </button>`, {
  "PatchDynamicTag:#text/2": ["packages/runtime-tags/src/__tests__/fixtures/persisted-lazy-tag-dynamic-return-visit/child.marko", {
    label: "c"
  }]
}])

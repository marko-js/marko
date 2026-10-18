// PATCH
[`packages/runtime-tags/src/__tests__/fixtures/patch-content-spread/template.marko_1*content,`, {
  "PatchAttrs:#div/0": {
    class: "c2",
    "data-x": 1
  },
  "PatchDynamicTag:#section/1": "^packages/runtime-tags/src/__tests__/fixtures/patch-content-spread/template.marko_1*content",
  "PatchAttrs:#section/1": {
    class: "c2",
    "data-x": 1
  },
  "PatchValue:packages/runtime-tags/src/__tests__/fixtures/patch-content-spread/template.marko_fill0": "b",
  "PatchChild:BranchScopes:#div/0": {
    "PatchText:#text/0": "b"
  },
  "PatchChild:BranchScopes:#section/1": {
    "PatchText:#text/0": "b"
  }
}]
;BAE

// PATCH holding BAE
{
  "PatchAttrs:#div/0": {
    class: "c3"
  },
  "PatchDynamicTag:#section/1": "^packages/runtime-tags/src/__tests__/fixtures/patch-content-spread/template.marko_1*content",
  "PatchAttrs:#section/1": {
    class: "c3"
  },
  "PatchValue:packages/runtime-tags/src/__tests__/fixtures/patch-content-spread/template.marko_fill0": "c",
  "PatchChild:BranchScopes:#div/0": {
    "PatchText:#text/0": "c"
  },
  "PatchChild:BranchScopes:#section/1": {
    "PatchText:#text/0": "c"
  }
}

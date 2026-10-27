// PATCH
[`packages/runtime-tags/src/__tests__/fixtures/patch-dynamic-tag-body/template.marko_2*content,hi`, `packages/runtime-tags/src/__tests__/fixtures/patch-dynamic-tag-body/tags/wrap.marko;D%;<section><!></section>`, `packages/runtime-tags/src/__tests__/fixtures/patch-dynamic-tag-body/template.marko_1*content; ; `, {
  "PatchDynamicTag:#text/0": [">div", "packages/runtime-tags/src/__tests__/fixtures/patch-dynamic-tag-body/template.marko_2*content", {
    class: "b"
  }],
  "PatchDynamicTag:#text/1": ["packages/runtime-tags/src/__tests__/fixtures/patch-dynamic-tag-body/tags/wrap.marko", "packages/runtime-tags/src/__tests__/fixtures/patch-dynamic-tag-body/template.marko_1*content"],
  "PatchChild:BranchScopes:#text/1": {
    "PatchDynamicTag:#text/0": "^^packages/runtime-tags/src/__tests__/fixtures/patch-dynamic-tag-body/template.marko_1*content",
    "PatchChild:BranchScopes:#text/0": {
      "PatchText:#text/0": "y"
    }
  }
}]
;CQ0

// PATCH holding CQ0
{
  "PatchDynamicTag:#text/0": [">section", "packages/runtime-tags/src/__tests__/fixtures/patch-dynamic-tag-body/template.marko_2*content", {
    class: "b"
  }],
  "PatchDynamicTag:#text/1": [0, "packages/runtime-tags/src/__tests__/fixtures/patch-dynamic-tag-body/template.marko_1*content"],
  "PatchChild:BranchScopes:#text/1": {
    "PatchText:#text/0": "z"
  }
}

// PATCH holding CQ0
{
  "PatchDynamicTag:#text/0": [">section", "packages/runtime-tags/src/__tests__/fixtures/patch-dynamic-tag-body/template.marko_2*content", {
    class: "c"
  }],
  "PatchDynamicTag:#text/1": ["packages/runtime-tags/src/__tests__/fixtures/patch-dynamic-tag-body/tags/wrap.marko", "packages/runtime-tags/src/__tests__/fixtures/patch-dynamic-tag-body/template.marko_1*content"],
  "PatchChild:BranchScopes:#text/1": {
    "PatchDynamicTag:#text/0": "^^packages/runtime-tags/src/__tests__/fixtures/patch-dynamic-tag-body/template.marko_1*content",
    "PatchChild:BranchScopes:#text/0": {
      "PatchText:#text/0": "w"
    }
  }
}

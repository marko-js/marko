// PATCH
[`packages/runtime-tags/src/__tests__/fixtures/patch-dynamic-tag-body/tags/wrap.marko;D%;<section><!></section>`, `packages/runtime-tags/src/__tests__/fixtures/patch-dynamic-tag-body/template.marko_1*content; ; `, {
  "PatchDynamicTag:#text/0": [">div", {
    class: "b"
  }, "packages/runtime-tags/src/__tests__/fixtures/patch-dynamic-tag-body/template.marko_2*content"],
  "PatchDynamicTag:#text/1": "packages/runtime-tags/src/__tests__/fixtures/patch-dynamic-tag-body/tags/wrap.marko",
  "PatchChild:BranchScopes:#text/1": {
    "PatchDynamicTag:#text/0": "^^packages/runtime-tags/src/__tests__/fixtures/patch-dynamic-tag-body/template.marko_1*content",
    "PatchChild:BranchScopes:#text/0": {
      "PatchText:#text/0": "y"
    }
  }
}]
;CQU

// PATCH holding CQU
{
  "PatchDynamicTag:#text/0": [">section", {
    class: "b"
  }, "packages/runtime-tags/src/__tests__/fixtures/patch-dynamic-tag-body/template.marko_2*content"],
  "PatchDynamicTag:#text/1": [0, 0, "packages/runtime-tags/src/__tests__/fixtures/patch-dynamic-tag-body/template.marko_1*content"],
  "PatchChild:BranchScopes:#text/1": {
    "PatchText:#text/0": "z"
  }
}

// PATCH holding CQU
{
  "PatchDynamicTag:#text/0": [">section", {
    class: "c"
  }, "packages/runtime-tags/src/__tests__/fixtures/patch-dynamic-tag-body/template.marko_2*content"],
  "PatchDynamicTag:#text/1": "packages/runtime-tags/src/__tests__/fixtures/patch-dynamic-tag-body/tags/wrap.marko",
  "PatchChild:BranchScopes:#text/1": {
    "PatchDynamicTag:#text/0": "^^packages/runtime-tags/src/__tests__/fixtures/patch-dynamic-tag-body/template.marko_1*content",
    "PatchChild:BranchScopes:#text/0": {
      "PatchText:#text/0": "w"
    }
  }
}

// PATCH
[`packages/runtime-tags/src/__tests__/fixtures/patch-dynamic-tag-define-kept-row-owner/template.marko_3*content`, `packages/runtime-tags/src/__tests__/fixtures/patch-dynamic-tag-define-kept-row-owner/template.marko_1*content packages/runtime-tags/src/__tests__/fixtures/patch-dynamic-tag-define-kept-row-owner/template.marko_1_n#0:9/init`, `packages/runtime-tags/src/__tests__/fixtures/patch-dynamic-tag-define-kept-row-owner/template.marko_4*shell;b%;<!><!><!>`, `packages/runtime-tags/src/__tests__/fixtures/patch-dynamic-tag-define-kept-row-owner/template.marko_2*shell;b%;<!><!><!>`, {
  "PatchLoop:#text/2": [{
    "PatchDynamicTag:#text/0": _.a = "^^packages/runtime-tags/src/__tests__/fixtures/patch-dynamic-tag-define-kept-row-owner/template.marko_3*content",
    "PatchChild:BranchScopes:#text/0": {
      "PatchText:#text/0": "y",
      "PatchBranch:#text/1": [{
        "PatchDynamicTag:#text/0": _.b = "^^^packages/runtime-tags/src/__tests__/fixtures/patch-dynamic-tag-define-kept-row-owner/template.marko_1*content",
        "PatchChild:BranchScopes:#text/0": {
          "PatchText:#text/0": "c"
        }
      }, _.c = "packages/runtime-tags/src/__tests__/fixtures/patch-dynamic-tag-define-kept-row-owner/template.marko_4*shell"]
    }
  }, {
    "PatchDynamicTag:#text/0": _.a,
    "PatchChild:BranchScopes:#text/0": {
      "PatchText:#text/0": "z",
      "PatchBranch:#text/1": [{
        "PatchDynamicTag:#text/0": _.b,
        "PatchChild:BranchScopes:#text/0": {
          "PatchText:#text/0": "c"
        }
      }, _.c]
    }
  }, "packages/runtime-tags/src/__tests__/fixtures/patch-dynamic-tag-define-kept-row-owner/template.marko_2*shell"]
}]
;Cx4

// PATCH holding Cx4
{
  "PatchLoop:#text/2": [{
    "PatchDynamicTag:#text/0": [">span", 0, {
      label: "z",
      content: {
        content: _([], "packages/runtime-tags/src/__tests__/fixtures/patch-dynamic-tag-define-kept-row-owner/template.marko_1*content", 1)
      }
    }],
    "PatchChild:BranchScopes:#text/0": {
      "PatchChild:BranchScopes:#span/0": {
        "PatchText:#text/0": "d"
      }
    }
  }, "packages/runtime-tags/src/__tests__/fixtures/patch-dynamic-tag-define-kept-row-owner/template.marko_2*shell"],
  "PatchFill:packages/runtime-tags/src/__tests__/fixtures/patch-dynamic-tag-define-kept-row-owner/template.marko_fill0": "d"
}

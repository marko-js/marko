// PATCH
{
  "PatchChild:#childScope/1": {
    "PatchBranch:#text/0": 0
  },
  "PatchFill:packages/runtime-tags/src/__tests__/fixtures/patch-content-define-two-callers/template.marko_fill0/content": "b"
}

// PATCH
[`packages/runtime-tags/src/__tests__/fixtures/patch-content-define-two-callers/template.marko_2*content`, `packages/runtime-tags/src/__tests__/fixtures/patch-content-define-two-callers/template.marko_4*shell;b%;<!><!><!>`, {
  "PatchChild:#childScope/1": {
    "PatchBranch:#text/0": [{
      "PatchDynamicTag:#text/0": "^^^packages/runtime-tags/src/__tests__/fixtures/patch-content-define-two-callers/template.marko_2*content",
      "PatchChild:BranchScopes:#text/0": {
        "PatchText:#text/0": "c"
      }
    }, "packages/runtime-tags/src/__tests__/fixtures/patch-content-define-two-callers/template.marko_4*shell"]
  },
  "PatchFill:packages/runtime-tags/src/__tests__/fixtures/patch-content-define-two-callers/template.marko_fill0/content": "c"
}]
;CQw

// PATCH holding CQw
{
  "PatchChild:#childScope/1": {
    "PatchBranch:#text/0": [{
      "PatchDynamicTag:#text/0": "^^^packages/runtime-tags/src/__tests__/fixtures/patch-content-define-two-callers/template.marko_2*content",
      "PatchChild:BranchScopes:#text/0": {
        "PatchText:#text/0": "d"
      }
    }, "packages/runtime-tags/src/__tests__/fixtures/patch-content-define-two-callers/template.marko_4*shell"]
  },
  "PatchFill:packages/runtime-tags/src/__tests__/fixtures/patch-content-define-two-callers/template.marko_fill0/content": "d"
}

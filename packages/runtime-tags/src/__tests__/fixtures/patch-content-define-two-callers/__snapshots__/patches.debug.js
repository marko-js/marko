// PATCH
{
  "PatchValue:packages/runtime-tags/src/__tests__/fixtures/patch-content-define-two-callers/template.marko_fill0": "b",
  "PatchChild:#childScope/1": {
    "PatchBranch:#text/0": 0
  }
}

// PATCH
[`packages/runtime-tags/src/__tests__/fixtures/patch-content-define-two-callers/template.marko_2*content,`, `packages/runtime-tags/src/__tests__/fixtures/patch-content-define-two-callers/template.marko_4*shell;b%;<!><!><!>`, {
  "PatchValue:packages/runtime-tags/src/__tests__/fixtures/patch-content-define-two-callers/template.marko_fill0": "c",
  "PatchChild:#childScope/1": {
    "PatchBranch:#text/0": [{
      "PatchDynamicTag:#text/0": "^^^packages/runtime-tags/src/__tests__/fixtures/patch-content-define-two-callers/template.marko_2*content",
      "PatchChild:BranchScopes:#text/0": {
        "PatchText:#text/0": "c"
      }
    }, "packages/runtime-tags/src/__tests__/fixtures/patch-content-define-two-callers/template.marko_4*shell"]
  }
}]
;CQw

// PATCH holding CQw
{
  "PatchValue:packages/runtime-tags/src/__tests__/fixtures/patch-content-define-two-callers/template.marko_fill0": "d",
  "PatchChild:#childScope/1": {
    "PatchBranch:#text/0": [{
      "PatchDynamicTag:#text/0": "^^^packages/runtime-tags/src/__tests__/fixtures/patch-content-define-two-callers/template.marko_2*content",
      "PatchChild:BranchScopes:#text/0": {
        "PatchText:#text/0": "d"
      }
    }, "packages/runtime-tags/src/__tests__/fixtures/patch-content-define-two-callers/template.marko_4*shell"]
  }
}

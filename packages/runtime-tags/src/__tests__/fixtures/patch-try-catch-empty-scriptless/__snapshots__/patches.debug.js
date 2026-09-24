// PATCH
[`packages/runtime-tags/src/__tests__/fixtures/patch-try-catch-empty-scriptless/template.marko_2*content;D ;<em> </em>`, `packages/runtime-tags/src/__tests__/fixtures/patch-try-catch-empty-scriptless/template.marko_1*content;b%;<!><!><!>`, {
  "PatchChild:BranchScopes:#text/0": [{
    "PatchPending:#text/0": "packages/runtime-tags/src/__tests__/fixtures/patch-try-catch-empty-scriptless/template.marko_2*content"
  }, "packages/runtime-tags/src/__tests__/fixtures/patch-try-catch-empty-scriptless/template.marko_1*content", 0]
}]
{
  "PatchCatch:#text/0": [new Error("boom"), _(0)["PatchChild:BranchScopes:#text/0"][1], ""]
}
"BAEB"

// PATCH holding BAEB
{
  "PatchChild:BranchScopes:#text/0": [{
    "PatchPending:#text/0": "packages/runtime-tags/src/__tests__/fixtures/patch-try-catch-empty-scriptless/template.marko_2*content",
    "PatchChild:BranchScopes:#text/0": {
      "PatchText:#text/0": "back"
    }
  }, "packages/runtime-tags/src/__tests__/fixtures/patch-try-catch-empty-scriptless/template.marko_1*content", 0]
}

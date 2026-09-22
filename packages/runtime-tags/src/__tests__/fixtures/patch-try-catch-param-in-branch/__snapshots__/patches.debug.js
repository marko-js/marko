// PATCH
[`packages/runtime-tags/src/__tests__/fixtures/patch-try-catch-param-in-branch/template.marko_4*content,done`, `packages/runtime-tags/src/__tests__/fixtures/patch-try-catch-param-in-branch/template.marko_3*content;b%;<!><!><!>`, `packages/runtime-tags/src/__tests__/fixtures/patch-try-catch-param-in-branch/template.marko_1*shell;b%;<!><!><!>`, {
  "PatchBranch:#text/2": [{
    "PatchChild:BranchScopes:#text/0": [{
      "PatchPending:#text/0": "packages/runtime-tags/src/__tests__/fixtures/patch-try-catch-param-in-branch/template.marko_4*content",
      "PatchChild:BranchScopes:#text/0": {}
    }, "packages/runtime-tags/src/__tests__/fixtures/patch-try-catch-param-in-branch/template.marko_3*content", "packages/runtime-tags/src/__tests__/fixtures/patch-try-catch-param-in-branch/template.marko_2*content"]
  }, "packages/runtime-tags/src/__tests__/fixtures/patch-try-catch-param-in-branch/template.marko_1*shell"],
  "PatchValue:packages/runtime-tags/src/__tests__/fixtures/patch-try-catch-param-in-branch/template.marko0": "b"
}]
"BQEAAQ"

// PATCH holding BQEAAQ
{
  "PatchBranch:#text/2": [{
    "PatchChild:BranchScopes:#text/0": [{
      "PatchPending:#text/0": "packages/runtime-tags/src/__tests__/fixtures/patch-try-catch-param-in-branch/template.marko_4*content"
    }, _.a = "packages/runtime-tags/src/__tests__/fixtures/patch-try-catch-param-in-branch/template.marko_3*content", "packages/runtime-tags/src/__tests__/fixtures/patch-try-catch-param-in-branch/template.marko_2*content"],
    "PatchCatch:#text/0": [new Error("boom"), _.a]
  }, "packages/runtime-tags/src/__tests__/fixtures/patch-try-catch-param-in-branch/template.marko_1*shell"],
  "PatchValue:packages/runtime-tags/src/__tests__/fixtures/patch-try-catch-param-in-branch/template.marko0": "c"
}

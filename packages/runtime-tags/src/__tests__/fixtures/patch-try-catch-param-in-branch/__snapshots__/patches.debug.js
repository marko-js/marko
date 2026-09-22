// PATCH
[`packages/runtime-tags/src/__tests__/fixtures/patch-try-catch-param-in-branch/template.marko_3_#text#0/await,done`, `packages/runtime-tags/src/__tests__/fixtures/patch-try-catch-param-in-branch/template.marko_3*content;b%;<!><!><!>`, `packages/runtime-tags/src/__tests__/fixtures/patch-try-catch-param-in-branch/template.marko_1*shell;b%;<!><!><!>`, {
  "PatchBranch:#text/2": [{
    "PatchChild:BranchScopes:#text/0": [{
      "PatchPending:#text/0": "packages/runtime-tags/src/__tests__/fixtures/patch-try-catch-param-in-branch/template.marko_3_#text#0/await",
      "PatchChild:BranchScopes:#text/0": {}
    }, "packages/runtime-tags/src/__tests__/fixtures/patch-try-catch-param-in-branch/template.marko_3*content", "packages/runtime-tags/src/__tests__/fixtures/patch-try-catch-param-in-branch/template.marko_2*content"]
  }, "packages/runtime-tags/src/__tests__/fixtures/patch-try-catch-param-in-branch/template.marko_1*shell"],
  "PatchValue:packages/runtime-tags/src/__tests__/fixtures/patch-try-catch-param-in-branch/template.marko0": "b"
}]
"BQEAAA"

// PATCH holding BQEAAA
{
  "PatchBranch:#text/2": [{
    "PatchChild:BranchScopes:#text/0": [{
      "PatchPending:#text/0": "packages/runtime-tags/src/__tests__/fixtures/patch-try-catch-param-in-branch/template.marko_3_#text#0/await"
    }, _.a = "packages/runtime-tags/src/__tests__/fixtures/patch-try-catch-param-in-branch/template.marko_3*content", "packages/runtime-tags/src/__tests__/fixtures/patch-try-catch-param-in-branch/template.marko_2*content"],
    "PatchCatch:#text/0": [new Error("boom"), _.a]
  }, "packages/runtime-tags/src/__tests__/fixtures/patch-try-catch-param-in-branch/template.marko_1*shell"],
  "PatchValue:packages/runtime-tags/src/__tests__/fixtures/patch-try-catch-param-in-branch/template.marko0": "c"
}

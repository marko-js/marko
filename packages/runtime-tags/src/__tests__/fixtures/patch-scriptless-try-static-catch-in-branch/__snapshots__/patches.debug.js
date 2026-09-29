// PATCH
[`packages/runtime-tags/src/__tests__/fixtures/patch-scriptless-try-static-catch-in-branch/template.marko_4*content;D ;<em> </em>`, `packages/runtime-tags/src/__tests__/fixtures/patch-scriptless-try-static-catch-in-branch/template.marko_2*content;b%;<!><!><!>`, `packages/runtime-tags/src/__tests__/fixtures/patch-scriptless-try-static-catch-in-branch/template.marko_3*content,<p>oops</p>`, `packages/runtime-tags/src/__tests__/fixtures/patch-scriptless-try-static-catch-in-branch/template.marko_1*shell;b%;<!><!><!>`, {
  "PatchBranch:#main/0": [{
    "PatchChild:BranchScopes:#text/0": [{
      "PatchPending:#text/0": "packages/runtime-tags/src/__tests__/fixtures/patch-scriptless-try-static-catch-in-branch/template.marko_4*content",
      "PatchChild:BranchScopes:#text/0": {
        "PatchText:#text/0": "hi"
      }
    }, "packages/runtime-tags/src/__tests__/fixtures/patch-scriptless-try-static-catch-in-branch/template.marko_2*content", "packages/runtime-tags/src/__tests__/fixtures/patch-scriptless-try-static-catch-in-branch/template.marko_3*content"]
  }, "packages/runtime-tags/src/__tests__/fixtures/patch-scriptless-try-static-catch-in-branch/template.marko_1*shell"]
}]
"BgEAAQA"

// PATCH holding BgEAAQA
{
  "PatchBranch:#main/0": [{
    "PatchChild:BranchScopes:#text/0": [{
      "PatchPending:#text/0": "packages/runtime-tags/src/__tests__/fixtures/patch-scriptless-try-static-catch-in-branch/template.marko_4*content"
    }, _.a = "packages/runtime-tags/src/__tests__/fixtures/patch-scriptless-try-static-catch-in-branch/template.marko_2*content", "packages/runtime-tags/src/__tests__/fixtures/patch-scriptless-try-static-catch-in-branch/template.marko_3*content"],
    "PatchCatch:#text/0": [new Error("boom"), _.a]
  }, "packages/runtime-tags/src/__tests__/fixtures/patch-scriptless-try-static-catch-in-branch/template.marko_1*shell"]
}

// PATCH
[`packages/runtime-tags/src/__tests__/fixtures/patch-try-catch-in-branch/template.marko_2*content;D%b%;<em><!><!></em>`, `packages/runtime-tags/src/__tests__/fixtures/patch-try-catch-in-branch/template.marko_1*shell;b%;<!><!><!>`, {
  "PatchBranch:#main/0": [{
    "PatchChild:BranchScopes:#text/0": [{
      "PatchText:#text/0": "ok",
      "PatchText:#text/1": ""
    }, "packages/runtime-tags/src/__tests__/fixtures/patch-try-catch-in-branch/template.marko_2*content", "packages/runtime-tags/src/__tests__/fixtures/patch-try-catch-in-branch/template.marko_3*content"]
  }, "packages/runtime-tags/src/__tests__/fixtures/patch-try-catch-in-branch/template.marko_1*shell"]
}]
"AwEA"

// PATCH holding AwEA
{
  "PatchBranch:#main/0": [{
    "PatchChild:BranchScopes:#text/0": [{
      "PatchText:#text/0": "x"
    }, _.a = "packages/runtime-tags/src/__tests__/fixtures/patch-try-catch-in-branch/template.marko_2*content", "packages/runtime-tags/src/__tests__/fixtures/patch-try-catch-in-branch/template.marko_3*content"],
    "PatchCatch:#text/0": [new Error("boom"), _.a]
  }, "packages/runtime-tags/src/__tests__/fixtures/patch-try-catch-in-branch/template.marko_1*shell"]
}

// PATCH holding AwEA
{
  "PatchBranch:#main/0": [{
    "PatchChild:BranchScopes:#text/0": [{
      "PatchText:#text/0": "back",
      "PatchText:#text/1": ""
    }, "packages/runtime-tags/src/__tests__/fixtures/patch-try-catch-in-branch/template.marko_2*content", "packages/runtime-tags/src/__tests__/fixtures/patch-try-catch-in-branch/template.marko_3*content"]
  }, "packages/runtime-tags/src/__tests__/fixtures/patch-try-catch-in-branch/template.marko_1*shell"]
}

// PATCH holding AwEA
{
  "PatchBranch:#main/0": 0
}

// PATCH holding AwEA
{
  "PatchBranch:#main/0": [{
    "PatchChild:BranchScopes:#text/0": [{
      "PatchText:#text/0": "again",
      "PatchText:#text/1": ""
    }, "packages/runtime-tags/src/__tests__/fixtures/patch-try-catch-in-branch/template.marko_2*content", "packages/runtime-tags/src/__tests__/fixtures/patch-try-catch-in-branch/template.marko_3*content"]
  }, "packages/runtime-tags/src/__tests__/fixtures/patch-try-catch-in-branch/template.marko_1*shell"]
}

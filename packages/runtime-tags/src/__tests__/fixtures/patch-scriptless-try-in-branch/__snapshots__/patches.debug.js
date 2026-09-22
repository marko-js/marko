// PATCH
[`packages/runtime-tags/src/__tests__/fixtures/patch-scriptless-try-in-branch/template.marko_2_#text#0/await;D ;<em> </em>`, `packages/runtime-tags/src/__tests__/fixtures/patch-scriptless-try-in-branch/template.marko_2*content;b%;<!><!><!>`, `packages/runtime-tags/src/__tests__/fixtures/patch-scriptless-try-in-branch/template.marko_1*shell;b%;<!><!><!>`, {
  "PatchBranch:#main/0": [{
    "PatchChild:BranchScopes:#text/0": [{
      "PatchPending:#text/0": "packages/runtime-tags/src/__tests__/fixtures/patch-scriptless-try-in-branch/template.marko_2_#text#0/await",
      "PatchChild:BranchScopes:#text/0": {
        "PatchText:#text/0": "hi"
      }
    }, "packages/runtime-tags/src/__tests__/fixtures/patch-scriptless-try-in-branch/template.marko_2*content", 0]
  }, "packages/runtime-tags/src/__tests__/fixtures/patch-scriptless-try-in-branch/template.marko_1*shell"]
}]
"BQEAAA"

// PATCH holding BQEAAA
{
  "PatchBranch:#main/0": [{
    "PatchChild:BranchScopes:#text/0": [{
      "PatchPending:#text/0": "packages/runtime-tags/src/__tests__/fixtures/patch-scriptless-try-in-branch/template.marko_2_#text#0/await"
    }, _.a = "packages/runtime-tags/src/__tests__/fixtures/patch-scriptless-try-in-branch/template.marko_2*content", 0],
    "PatchCatch:#text/0": [new Error("boom"), _.a, "\x3Cp>boom\x3C/p>"]
  }, "packages/runtime-tags/src/__tests__/fixtures/patch-scriptless-try-in-branch/template.marko_1*shell"]
}

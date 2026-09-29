// PATCH
[`packages/runtime-tags/src/__tests__/fixtures/patch-try-catch-empty/template.marko_1*content;b%;<!><!><!>`, `packages/runtime-tags/src/__tests__/fixtures/patch-try-catch-empty/template.marko_2*content;D ;<em> </em>`, {
  "PatchChild:BranchScopes:#text/0": [{
    "PatchPending:#text/0": "packages/runtime-tags/src/__tests__/fixtures/patch-try-catch-empty/template.marko_2*content"
  }, "packages/runtime-tags/src/__tests__/fixtures/patch-try-catch-empty/template.marko_1*content", "packages/runtime-tags/src/__tests__/fixtures/patch-try-catch-empty/template.marko_0_#text#0/catch"]
}]
{
  "PatchCatch:#text/0": [new Error("boom")]
}
"BAEB"

// PATCH holding BAEB
{
  "PatchChild:BranchScopes:#text/0": [{
    "PatchPending:#text/0": "packages/runtime-tags/src/__tests__/fixtures/patch-try-catch-empty/template.marko_2*content",
    "PatchChild:BranchScopes:#text/0": {
      "PatchText:#text/0": "back"
    }
  }, "packages/runtime-tags/src/__tests__/fixtures/patch-try-catch-empty/template.marko_1*content", "packages/runtime-tags/src/__tests__/fixtures/patch-try-catch-empty/template.marko_0_#text#0/catch"]
}

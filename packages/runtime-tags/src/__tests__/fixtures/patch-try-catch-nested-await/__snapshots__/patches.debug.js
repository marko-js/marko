// PATCH
[`packages/runtime-tags/src/__tests__/fixtures/patch-try-catch-nested-await/template.marko_1*content;b%;<!><!><!>`, `packages/runtime-tags/src/__tests__/fixtures/patch-try-catch-nested-await/template.marko_2*content;D l%;<em> </em><!><!>`, {
  "PatchChild:BranchScopes:#text/0": [{
    "PatchPending:#text/0": "packages/runtime-tags/src/__tests__/fixtures/patch-try-catch-nested-await/template.marko_2*content"
  }, "packages/runtime-tags/src/__tests__/fixtures/patch-try-catch-nested-await/template.marko_1*content", "packages/runtime-tags/src/__tests__/fixtures/patch-try-catch-nested-await/template.marko_3*content"],
  "PatchCatch:#text/0": [new Error("boom")]
}]
"BgEB"

// PATCH holding BgEB
[`packages/runtime-tags/src/__tests__/fixtures/patch-try-catch-nested-await/template.marko_4*content;D ;<strong> </strong>`, {
  "PatchChild:BranchScopes:#text/0": [{
    "PatchPending:#text/0": "packages/runtime-tags/src/__tests__/fixtures/patch-try-catch-nested-await/template.marko_2*content",
    "PatchChild:BranchScopes:#text/0": {
      "PatchText:#text/0": "a3",
      "PatchPending:#text/1": "packages/runtime-tags/src/__tests__/fixtures/patch-try-catch-nested-await/template.marko_4*content",
      "PatchChild:BranchScopes:#text/1": {
        "PatchText:#text/0": "b3"
      }
    }
  }, "packages/runtime-tags/src/__tests__/fixtures/patch-try-catch-nested-await/template.marko_1*content", "packages/runtime-tags/src/__tests__/fixtures/patch-try-catch-nested-await/template.marko_3*content"]
}]
"BgEBAQ"

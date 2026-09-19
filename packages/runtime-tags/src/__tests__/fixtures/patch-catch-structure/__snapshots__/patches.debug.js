// PATCH
[`packages/runtime-tags/src/__tests__/fixtures/patch-catch-structure/template.marko_3_#text#0/await,<span>ok</span>`, {
  "PatchChild:BranchScopes:#text/0": {
    "PatchPending:#text/0": "packages/runtime-tags/src/__tests__/fixtures/patch-catch-structure/template.marko_3_#text#0/await",
    "PatchChild:BranchScopes:#text/0": {}
  },
  "PatchValue:packages/runtime-tags/src/__tests__/fixtures/patch-catch-structure/template.marko0": "b"
}]
"BAI"

// PATCH holding BAI
[`packages/runtime-tags/src/__tests__/fixtures/patch-catch-structure/template.marko_3*content;b%;<!><!><!>`, {
  "PatchChild:BranchScopes:#text/0": {
    "PatchPending:#text/0": "packages/runtime-tags/src/__tests__/fixtures/patch-catch-structure/template.marko_3_#text#0/await"
  },
  "PatchValue:packages/runtime-tags/src/__tests__/fixtures/patch-catch-structure/template.marko0": "c",
  "PatchCatch:#text/0": [new Error("x"), "packages/runtime-tags/src/__tests__/fixtures/patch-catch-structure/template.marko_3*content"]
}]
"BAEA"

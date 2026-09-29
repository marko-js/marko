// PATCH
[`packages/runtime-tags/src/__tests__/fixtures/patch-catch-structure/template.marko_4*content,<span>ok</span>`, `packages/runtime-tags/src/__tests__/fixtures/patch-catch-structure/template.marko_3*content;b%;<!><!><!>`, {
  "PatchChild:BranchScopes:#text/0": [{
    "PatchPending:#text/0": "packages/runtime-tags/src/__tests__/fixtures/patch-catch-structure/template.marko_4*content",
    "PatchChild:BranchScopes:#text/0": {}
  }, "packages/runtime-tags/src/__tests__/fixtures/patch-catch-structure/template.marko_3*content", "packages/runtime-tags/src/__tests__/fixtures/patch-catch-structure/template.marko_1*content"],
  "PatchValue:packages/runtime-tags/src/__tests__/fixtures/patch-catch-structure/template.marko0": "b"
}]
"BAEB"

// PATCH holding BAEB
{
  "PatchChild:BranchScopes:#text/0": [{
    "PatchPending:#text/0": "packages/runtime-tags/src/__tests__/fixtures/patch-catch-structure/template.marko_4*content"
  }, _.a = "packages/runtime-tags/src/__tests__/fixtures/patch-catch-structure/template.marko_3*content", "packages/runtime-tags/src/__tests__/fixtures/patch-catch-structure/template.marko_1*content"],
  "PatchValue:packages/runtime-tags/src/__tests__/fixtures/patch-catch-structure/template.marko0": "c",
  "PatchCatch:#text/0": [new Error("x"), _.a]
}

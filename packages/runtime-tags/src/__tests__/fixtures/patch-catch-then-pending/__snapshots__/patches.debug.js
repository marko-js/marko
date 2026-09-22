// PATCH
[`packages/runtime-tags/src/__tests__/fixtures/patch-catch-then-pending/template.marko_4*content,<span>ok</span>`, `packages/runtime-tags/src/__tests__/fixtures/patch-catch-then-pending/template.marko_3*content;b%;<!><!><!>`, {
  "PatchChild:BranchScopes:#text/0": [{
    "PatchPending:#text/0": "packages/runtime-tags/src/__tests__/fixtures/patch-catch-then-pending/template.marko_4*content"
  }, _.a = "packages/runtime-tags/src/__tests__/fixtures/patch-catch-then-pending/template.marko_3*content", "packages/runtime-tags/src/__tests__/fixtures/patch-catch-then-pending/template.marko_1*content"],
  "PatchValue:packages/runtime-tags/src/__tests__/fixtures/patch-catch-then-pending/template.marko0": "b",
  "PatchCatch:#text/0": [new Error("x"), _.a]
}]
"BAEB"

// PATCH holding BAEB
{
  "PatchChild:BranchScopes:#text/0": [{
    "PatchPending:#text/0": "packages/runtime-tags/src/__tests__/fixtures/patch-catch-then-pending/template.marko_4*content"
  }, "packages/runtime-tags/src/__tests__/fixtures/patch-catch-then-pending/template.marko_3*content", "packages/runtime-tags/src/__tests__/fixtures/patch-catch-then-pending/template.marko_1*content"],
  "PatchValue:packages/runtime-tags/src/__tests__/fixtures/patch-catch-then-pending/template.marko0": "c"
}
{
  "PatchChild:BranchScopes:#text/0": [{
    "PatchChild:BranchScopes:#text/0": {}
  }, _(0)["PatchChild:BranchScopes:#text/0"][1], _(0)["PatchChild:BranchScopes:#text/0"][2]]
}

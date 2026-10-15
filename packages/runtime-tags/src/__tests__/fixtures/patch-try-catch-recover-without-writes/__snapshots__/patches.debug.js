// PATCH
[`packages/runtime-tags/src/__tests__/fixtures/patch-try-catch-recover-without-writes/template.marko_1*content,<em>ok</em>`, {
  "PatchChild:BranchScopes:#text/0": [{}, "packages/runtime-tags/src/__tests__/fixtures/patch-try-catch-recover-without-writes/template.marko_1*content", _.a = "packages/runtime-tags/src/__tests__/fixtures/patch-try-catch-recover-without-writes/template.marko_2*content"],
  "PatchCatch:#text/0": [{
    "PatchText:#text/0": "boom"
  }, _.a]
}]
;BAE

// PATCH holding BAE
{
  "PatchChild:BranchScopes:#text/0": [{}, "packages/runtime-tags/src/__tests__/fixtures/patch-try-catch-recover-without-writes/template.marko_1*content", "packages/runtime-tags/src/__tests__/fixtures/patch-try-catch-recover-without-writes/template.marko_2*content"]
}

// PATCH
[`packages/runtime-tags/src/__tests__/fixtures/patch-try-catch-nested-await/template.marko_1_#text#0/await;D l%;<em> </em><!><!>`, `packages/runtime-tags/src/__tests__/fixtures/patch-try-catch-nested-await/template.marko_1*content;b%;<!><!><!>`, {
  "PatchChild:BranchScopes:#text/0": [{
    "PatchPending:#text/0": "packages/runtime-tags/src/__tests__/fixtures/patch-try-catch-nested-await/template.marko_1_#text#0/await"
  }, _.a = "packages/runtime-tags/src/__tests__/fixtures/patch-try-catch-nested-await/template.marko_1*content", 0],
  "PatchCatch:#text/0": [new Error("boom"), _.a, "\x3Cspan>boom\x3C/span>"]
}]
"BgEA"

// PATCH holding BgEA
[`packages/runtime-tags/src/__tests__/fixtures/patch-try-catch-nested-await/template.marko_2_#text#1/await;D ;<strong> </strong>`, {
  "PatchChild:BranchScopes:#text/0": [{
    "PatchPending:#text/0": "packages/runtime-tags/src/__tests__/fixtures/patch-try-catch-nested-await/template.marko_1_#text#0/await",
    "PatchChild:BranchScopes:#text/0": {
      "PatchText:#text/0": "a3",
      "PatchPending:#text/1": "packages/runtime-tags/src/__tests__/fixtures/patch-try-catch-nested-await/template.marko_2_#text#1/await",
      "PatchChild:BranchScopes:#text/1": {
        "PatchText:#text/0": "b3"
      }
    }
  }, "packages/runtime-tags/src/__tests__/fixtures/patch-try-catch-nested-await/template.marko_1*content", 0]
}]
"BgEAAQ"

// PATCH
{
  "PatchChild:#childScope/0": {
    "PatchDynamicTag:#text/0": ["^packages/runtime-tags/src/__tests__/fixtures/patch-dynamic-swap-branch-hidden-in-child/tags/w.marko_1*content", {
      x: "a1"
    }],
    "PatchChild:BranchScopes:#text/0": {
      "PatchBranch:#text/0": 0
    }
  }
}

// PATCH
[`packages/runtime-tags/src/__tests__/fixtures/patch-dynamic-swap-branch-hidden-in-child/tags/w.marko_3*shell !packages/runtime-tags/src/__tests__/fixtures/patch-dynamic-swap-branch-hidden-in-child/tags/w.marko_3; ;<button>a</button>`, {
  "PatchChild:#childScope/0": {
    "PatchDynamicTag:#text/0": ["^packages/runtime-tags/src/__tests__/fixtures/patch-dynamic-swap-branch-hidden-in-child/tags/w.marko_1*content", {
      x: "a2"
    }],
    "PatchChild:BranchScopes:#text/0": {
      "PatchBranch:#text/0": "packages/runtime-tags/src/__tests__/fixtures/patch-dynamic-swap-branch-hidden-in-child/tags/w.marko_3*shell"
    }
  }
}]
;CAE

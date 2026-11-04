// PATCH
[`packages/runtime-tags/src/__tests__/fixtures/patch-dynamic-swap-branch-in-child/tags/w.marko_1*content`, `packages/runtime-tags/src/__tests__/fixtures/patch-dynamic-swap-branch-in-child/tags/w.marko_3*shell !packages/runtime-tags/src/__tests__/fixtures/patch-dynamic-swap-branch-in-child/tags/w.marko_3; ;<button>a</button>`]
{
  "PatchChild:#childScope/0": {
    "PatchDynamicTag:#text/0": "^packages/runtime-tags/src/__tests__/fixtures/patch-dynamic-swap-branch-in-child/tags/w.marko_1*content",
    "PatchChild:BranchScopes:#text/0": {
      "PatchMarkedWrite:x": "a1",
      "PatchBranch:#text/0": "packages/runtime-tags/src/__tests__/fixtures/patch-dynamic-swap-branch-in-child/tags/w.marko_3*shell"
    }
  }
}
;EQo

// PATCH holding EQo
[`packages/runtime-tags/src/__tests__/fixtures/patch-dynamic-swap-branch-in-child/tags/w.marko_2*content`, `packages/runtime-tags/src/__tests__/fixtures/patch-dynamic-swap-branch-in-child/tags/w.marko_5*shell !packages/runtime-tags/src/__tests__/fixtures/patch-dynamic-swap-branch-in-child/tags/w.marko_5; ;<button>b</button>`]
{
  "PatchChild:#childScope/0": {
    "PatchDynamicTag:#text/0": "^packages/runtime-tags/src/__tests__/fixtures/patch-dynamic-swap-branch-in-child/tags/w.marko_2*content",
    "PatchChild:BranchScopes:#text/0": {
      "PatchMarkedWrite:x": "a2",
      "PatchBranch:#text/0": "packages/runtime-tags/src/__tests__/fixtures/patch-dynamic-swap-branch-in-child/tags/w.marko_5*shell"
    }
  }
}
;ES4

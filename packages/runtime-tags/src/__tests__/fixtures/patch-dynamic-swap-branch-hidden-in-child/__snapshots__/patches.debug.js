// PATCH
`packages/runtime-tags/src/__tests__/fixtures/patch-dynamic-swap-branch-hidden-in-child/tags/w.marko_1*content`
{
  "PatchChild:#childScope/0": {
    "PatchDynamicTag:#text/0": "^packages/runtime-tags/src/__tests__/fixtures/patch-dynamic-swap-branch-hidden-in-child/tags/w.marko_1*content",
    "PatchChild:BranchScopes:#text/0": {
      "PatchMarkedWrite:x": "a1",
      "PatchBranch:#text/0": 0
    }
  }
}
;DAE

// PATCH holding DAE
`packages/runtime-tags/src/__tests__/fixtures/patch-dynamic-swap-branch-hidden-in-child/tags/w.marko_3*shell !packages/runtime-tags/src/__tests__/fixtures/patch-dynamic-swap-branch-hidden-in-child/tags/w.marko_3; ;<button>a</button>`
{
  "PatchChild:#childScope/0": {
    "PatchDynamicTag:#text/0": "^packages/runtime-tags/src/__tests__/fixtures/patch-dynamic-swap-branch-hidden-in-child/tags/w.marko_1*content",
    "PatchChild:BranchScopes:#text/0": {
      "PatchMarkedWrite:x": "a2",
      "PatchBranch:#text/0": "packages/runtime-tags/src/__tests__/fixtures/patch-dynamic-swap-branch-hidden-in-child/tags/w.marko_3*shell"
    }
  }
}
;DQo

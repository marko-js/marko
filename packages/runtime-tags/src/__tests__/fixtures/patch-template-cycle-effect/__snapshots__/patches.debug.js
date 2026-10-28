// PATCH
[`packages/runtime-tags/src/__tests__/fixtures/patch-template-cycle-effect/tags/a-tag.marko !packages/runtime-tags/src/__tests__/fixtures/patch-template-cycle-effect/tags/a-tag.marko_0;Db%l/b%c&b;<span>a<!></span><!><!><!><!>`, `packages/runtime-tags/src/__tests__/fixtures/patch-template-cycle-effect/tags/b-tag.marko_1*shell;b%;<!><!><!>`, {
  "PatchChild:#childScope/0": {
    "PatchText:#text/0": 2,
    "PatchChild:#childScope/1": {
      "PatchBranch:#text/0": [{
        "PatchDynamicTag:#text/0": _.a = "packages/runtime-tags/src/__tests__/fixtures/patch-template-cycle-effect/tags/a-tag.marko",
        "PatchChild:BranchScopes:#text/0": {
          "PatchText:#text/0": 1,
          "PatchChild:#childScope/1": {
            "PatchBranch:#text/0": [{
              "PatchDynamicTag:#text/0": _.a,
              "PatchChild:BranchScopes:#text/0": {
                "PatchText:#text/0": 0,
                "PatchChild:#childScope/1": {
                  "PatchBranch:#text/0": 0
                }
              }
            }, _.b = "packages/runtime-tags/src/__tests__/fixtures/patch-template-cycle-effect/tags/b-tag.marko_1*shell"]
          }
        }
      }, _.b]
    }
  }
}]
;CQU

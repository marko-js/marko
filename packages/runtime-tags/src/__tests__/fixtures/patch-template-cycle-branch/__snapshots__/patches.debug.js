// PATCH
[`packages/runtime-tags/src/__tests__/fixtures/patch-template-cycle-branch/tags/tree-a.marko;D%b%;<li><!><!></li>`, `packages/runtime-tags/src/__tests__/fixtures/patch-template-cycle-branch/tags/tree-b.marko_1*shell;D%;<ul><!></ul>`, `packages/runtime-tags/src/__tests__/fixtures/patch-template-cycle-branch/tags/tree-a.marko_1*shell;D/D%b%l&l;<ul><div><!><!></div></ul>`, `packages/runtime-tags/src/__tests__/fixtures/patch-template-cycle-branch/template.marko_1*shell;/D%b%l&;<li><!><!></li>`, {
  "PatchBranch:#ul/0": [{
    "PatchChild:#childScope/0": {
      "PatchText:#text/0": "a2",
      "PatchBranch:#text/1": [{
        "PatchChild:#childScope/0": {
          "PatchText:#text/0": "b2",
          "PatchBranch:#text/1": [{
            "PatchDynamicTag:#text/0": "packages/runtime-tags/src/__tests__/fixtures/patch-template-cycle-branch/tags/tree-a.marko",
            "PatchChild:BranchScopes:#text/0": {
              "PatchText:#text/0": "c2",
              "PatchBranch:#text/1": 0
            }
          }, "packages/runtime-tags/src/__tests__/fixtures/patch-template-cycle-branch/tags/tree-b.marko_1*shell"]
        }
      }, "packages/runtime-tags/src/__tests__/fixtures/patch-template-cycle-branch/tags/tree-a.marko_1*shell"]
    }
  }, "packages/runtime-tags/src/__tests__/fixtures/patch-template-cycle-branch/template.marko_1*shell"]
}]
;DSs

// PATCH holding DSs
{
  "PatchBranch:#ul/0": [{
    "PatchChild:#childScope/0": {
      "PatchText:#text/0": "a3",
      "PatchBranch:#text/1": [{
        "PatchChild:#childScope/0": {
          "PatchText:#text/0": "b3",
          "PatchBranch:#text/1": [{
            "PatchDynamicTag:#text/0": "packages/runtime-tags/src/__tests__/fixtures/patch-template-cycle-branch/tags/tree-a.marko",
            "PatchChild:BranchScopes:#text/0": {
              "PatchText:#text/0": "c3",
              "PatchBranch:#text/1": 0
            }
          }, "packages/runtime-tags/src/__tests__/fixtures/patch-template-cycle-branch/tags/tree-b.marko_1*shell"]
        }
      }, "packages/runtime-tags/src/__tests__/fixtures/patch-template-cycle-branch/tags/tree-a.marko_1*shell"]
    }
  }, "packages/runtime-tags/src/__tests__/fixtures/patch-template-cycle-branch/template.marko_1*shell"]
}

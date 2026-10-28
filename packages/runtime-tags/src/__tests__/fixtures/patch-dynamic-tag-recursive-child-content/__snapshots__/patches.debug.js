// PATCH
[`packages/runtime-tags/src/__tests__/fixtures/patch-dynamic-tag-recursive-child-content/tags/tree.marko;D%b/b%c&l;<li><!><!><!><!></li>`, `packages/runtime-tags/src/__tests__/fixtures/patch-dynamic-tag-recursive-child-content/tags/tree.marko_1*content;/D%b/b%c&l&;<li><!><!><!><!></li>`, `packages/runtime-tags/src/__tests__/fixtures/patch-dynamic-tag-recursive-child-content/tags/wrap.marko_1*shell;D%;<ul><!></ul>`, {
  "PatchDynamicTag:#text/0": "packages/runtime-tags/src/__tests__/fixtures/patch-dynamic-tag-recursive-child-content/tags/tree.marko",
  "PatchChild:BranchScopes:#text/0": {
    "PatchText:#text/0": "SHOWN_2",
    "PatchChild:#childScope/1": {
      "PatchBranch:#text/0": [{
        "PatchDynamicTag:#text/0": "^^^packages/runtime-tags/src/__tests__/fixtures/patch-dynamic-tag-recursive-child-content/tags/tree.marko_1*content",
        "PatchChild:BranchScopes:#text/0": {
          "PatchChild:#childScope/0": {
            "PatchText:#text/0": "SHOWN_kid2",
            "PatchChild:#childScope/1": {
              "PatchBranch:#text/0": 0
            }
          }
        }
      }, "packages/runtime-tags/src/__tests__/fixtures/patch-dynamic-tag-recursive-child-content/tags/wrap.marko_1*shell"]
    }
  }
}]
;DQs

// PATCH holding DQs
{
  "PatchDynamicTag:#text/0": "packages/runtime-tags/src/__tests__/fixtures/patch-dynamic-tag-recursive-child-content/tags/tree.marko",
  "PatchChild:BranchScopes:#text/0": {
    "PatchText:#text/0": "SHOWN_3",
    "PatchChild:#childScope/1": {
      "PatchBranch:#text/0": 0
    }
  }
}

// PATCH holding DQs
{
  "PatchDynamicTag:#text/0": "packages/runtime-tags/src/__tests__/fixtures/patch-dynamic-tag-recursive-child-content/tags/tree.marko",
  "PatchChild:BranchScopes:#text/0": {
    "PatchText:#text/0": "SHOWN_4",
    "PatchChild:#childScope/1": {
      "PatchBranch:#text/0": [{
        "PatchDynamicTag:#text/0": "^^^packages/runtime-tags/src/__tests__/fixtures/patch-dynamic-tag-recursive-child-content/tags/tree.marko_1*content",
        "PatchChild:BranchScopes:#text/0": {
          "PatchChild:#childScope/0": {
            "PatchText:#text/0": "SHOWN_kid4",
            "PatchChild:#childScope/1": {
              "PatchBranch:#text/0": 0
            }
          }
        }
      }, "packages/runtime-tags/src/__tests__/fixtures/patch-dynamic-tag-recursive-child-content/tags/wrap.marko_1*shell"]
    }
  }
}

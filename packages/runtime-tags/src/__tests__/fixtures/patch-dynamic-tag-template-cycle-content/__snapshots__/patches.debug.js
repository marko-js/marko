// PATCH
[`packages/runtime-tags/src/__tests__/fixtures/patch-dynamic-tag-template-cycle-content/tags/tree-a.marko;D%b/b%c&l;<li><!><!><!><!></li>`, `packages/runtime-tags/src/__tests__/fixtures/patch-dynamic-tag-template-cycle-content/tags/tree-a.marko_1*content;/D%b/b%c&l&;<div><!><!><!><!></div>`, `packages/runtime-tags/src/__tests__/fixtures/patch-dynamic-tag-template-cycle-content/tags/tree-b.marko_1*content;b%;<!><!><!>`, `packages/runtime-tags/src/__tests__/fixtures/patch-dynamic-tag-template-cycle-content/tags/wrap.marko_1*shell;D%;<ul><!></ul>`, {
  "PatchDynamicTag:#text/0": _.a = "packages/runtime-tags/src/__tests__/fixtures/patch-dynamic-tag-template-cycle-content/tags/tree-a.marko",
  "PatchChild:BranchScopes:#text/0": {
    "PatchText:#text/0": "a2",
    "PatchChild:#childScope/1": {
      "PatchBranch:#text/0": [{
        "PatchDynamicTag:#text/0": "^^^packages/runtime-tags/src/__tests__/fixtures/patch-dynamic-tag-template-cycle-content/tags/tree-a.marko_1*content",
        "PatchChild:BranchScopes:#text/0": {
          "PatchChild:#childScope/0": {
            "PatchText:#text/0": "b2",
            "PatchChild:#childScope/1": {
              "PatchBranch:#text/0": [{
                "PatchDynamicTag:#text/0": "^^^packages/runtime-tags/src/__tests__/fixtures/patch-dynamic-tag-template-cycle-content/tags/tree-b.marko_1*content",
                "PatchChild:BranchScopes:#text/0": {
                  "PatchDynamicTag:#text/0": _.a,
                  "PatchChild:BranchScopes:#text/0": {
                    "PatchText:#text/0": "c2",
                    "PatchChild:#childScope/1": {
                      "PatchBranch:#text/0": 0
                    }
                  }
                }
              }, _.b = "packages/runtime-tags/src/__tests__/fixtures/patch-dynamic-tag-template-cycle-content/tags/wrap.marko_1*shell"]
            }
          }
        }
      }, _.b]
    }
  }
}]
;ESs

// PATCH holding ESs
{
  "PatchDynamicTag:#text/0": _.a = "packages/runtime-tags/src/__tests__/fixtures/patch-dynamic-tag-template-cycle-content/tags/tree-a.marko",
  "PatchChild:BranchScopes:#text/0": {
    "PatchText:#text/0": "a3",
    "PatchChild:#childScope/1": {
      "PatchBranch:#text/0": [{
        "PatchDynamicTag:#text/0": "^^^packages/runtime-tags/src/__tests__/fixtures/patch-dynamic-tag-template-cycle-content/tags/tree-a.marko_1*content",
        "PatchChild:BranchScopes:#text/0": {
          "PatchChild:#childScope/0": {
            "PatchText:#text/0": "b3",
            "PatchChild:#childScope/1": {
              "PatchBranch:#text/0": [{
                "PatchDynamicTag:#text/0": "^^^packages/runtime-tags/src/__tests__/fixtures/patch-dynamic-tag-template-cycle-content/tags/tree-b.marko_1*content",
                "PatchChild:BranchScopes:#text/0": {
                  "PatchDynamicTag:#text/0": _.a,
                  "PatchChild:BranchScopes:#text/0": {
                    "PatchText:#text/0": "c3",
                    "PatchChild:#childScope/1": {
                      "PatchBranch:#text/0": 0
                    }
                  }
                }
              }, _.b = "packages/runtime-tags/src/__tests__/fixtures/patch-dynamic-tag-template-cycle-content/tags/wrap.marko_1*shell"]
            }
          }
        }
      }, _.b]
    }
  }
}

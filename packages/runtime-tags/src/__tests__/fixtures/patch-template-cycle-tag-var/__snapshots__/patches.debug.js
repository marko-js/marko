// PATCH
[`^packages/runtime-tags/src/__tests__/fixtures/patch-template-cycle-tag-var/tags/a-tag.marko;Db%l/b%c&b;<span>a<!></span><!><!><!><!>`, `packages/runtime-tags/src/__tests__/fixtures/patch-template-cycle-tag-var/tags/b-tag.marko_1*shell;b1bD ;<!><!><em> </em>`, `packages/runtime-tags/src/__tests__/fixtures/patch-template-cycle-tag-var/template.marko_1*shell;/Db%l/b%c&b&b;<span>a<!></span><!><!><!><!><!>`, {
  "PatchBranch:#text/0": [{
    "PatchChild:#childScope/0": {
      "PatchText:#text/0": 2,
      "PatchChild:#childScope/1": {
        "PatchBranch:#text/0": [{
          "PatchDynamicTag:#text/0": [_.a = "packages/runtime-tags/src/__tests__/fixtures/patch-template-cycle-tag-var/tags/a-tag.marko", 0, 0, _.b = "packages/runtime-tags/src/__tests__/fixtures/patch-template-cycle-tag-var/tags/b-tag.marko_1_x#3/var"],
          "PatchChild:BranchScopes:#text/0": {
            "PatchText:#text/0": 1,
            "PatchChild:#childScope/1": {
              "PatchBranch:#text/0": [{
                "PatchDynamicTag:#text/0": [_.a, 0, 0, _.b],
                "PatchChild:BranchScopes:#text/0": {
                  "PatchText:#text/0": 0,
                  "PatchChild:#childScope/1": {
                    "PatchBranch:#text/0": 0
                  }
                },
                "PatchFill:packages/runtime-tags/src/__tests__/fixtures/patch-template-cycle-tag-var/tags/b-tag.marko_1_x#3/var": 0
              }, _.c = "packages/runtime-tags/src/__tests__/fixtures/patch-template-cycle-tag-var/tags/b-tag.marko_1*shell"]
            }
          },
          "PatchFill:packages/runtime-tags/src/__tests__/fixtures/patch-template-cycle-tag-var/tags/b-tag.marko_1_x#3/var": 10
        }, _.c]
      }
    }
  }, "packages/runtime-tags/src/__tests__/fixtures/patch-template-cycle-tag-var/template.marko_1*shell"]
}]
;CxU

// PATCH holding CxU
{
  "PatchBranch:#text/0": [{
    "PatchChild:#childScope/0": {
      "PatchText:#text/0": 3,
      "PatchChild:#childScope/1": {
        "PatchBranch:#text/0": [{
          "PatchDynamicTag:#text/0": [_.a = "packages/runtime-tags/src/__tests__/fixtures/patch-template-cycle-tag-var/tags/a-tag.marko", 0, 0, _.b = "packages/runtime-tags/src/__tests__/fixtures/patch-template-cycle-tag-var/tags/b-tag.marko_1_x#3/var"],
          "PatchChild:BranchScopes:#text/0": {
            "PatchText:#text/0": 2,
            "PatchChild:#childScope/1": {
              "PatchBranch:#text/0": [{
                "PatchDynamicTag:#text/0": [_.a, 0, 0, _.b],
                "PatchChild:BranchScopes:#text/0": {
                  "PatchText:#text/0": 1,
                  "PatchChild:#childScope/1": {
                    "PatchBranch:#text/0": [{
                      "PatchDynamicTag:#text/0": [_.a, 0, 0, _.b],
                      "PatchChild:BranchScopes:#text/0": {
                        "PatchText:#text/0": 0,
                        "PatchChild:#childScope/1": {
                          "PatchBranch:#text/0": 0
                        }
                      },
                      "PatchFill:packages/runtime-tags/src/__tests__/fixtures/patch-template-cycle-tag-var/tags/b-tag.marko_1_x#3/var": 0
                    }, _.c = "packages/runtime-tags/src/__tests__/fixtures/patch-template-cycle-tag-var/tags/b-tag.marko_1*shell"]
                  }
                },
                "PatchFill:packages/runtime-tags/src/__tests__/fixtures/patch-template-cycle-tag-var/tags/b-tag.marko_1_x#3/var": 10
              }, _.c]
            }
          },
          "PatchFill:packages/runtime-tags/src/__tests__/fixtures/patch-template-cycle-tag-var/tags/b-tag.marko_1_x#3/var": 20
        }, _.c]
      }
    }
  }, "packages/runtime-tags/src/__tests__/fixtures/patch-template-cycle-tag-var/template.marko_1*shell"]
}

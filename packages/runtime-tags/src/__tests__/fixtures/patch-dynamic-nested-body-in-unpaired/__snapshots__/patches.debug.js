// PATCH
[`packages/runtime-tags/src/__tests__/fixtures/patch-dynamic-nested-body-in-unpaired/template.marko_2*content;%c%;<!>!<!>`, (_.a = {
  "PatchChild:#childScope/0": {
    "PatchChild:BranchScopes:#text/1": {
      "PatchChild:#childScope/0": {
        "PatchText:#text/0": "two",
        "PatchDynamicTag:#text/1": "^packages/runtime-tags/src/__tests__/fixtures/patch-dynamic-nested-body-in-unpaired/template.marko_2*content",
        "PatchChild:BranchScopes:#text/1": {
          "PatchText:#text/0": "two"
        }
      }
    }
  }
}, _.a)]
"BQQ"

// PATCH holding BQQ
(_.a = {
  "PatchChild:#childScope/0": {
    "PatchChild:BranchScopes:#text/1": {
      "PatchChild:#childScope/0": {
        "PatchText:#text/0": "three",
        "PatchDynamicTag:#text/1": "^packages/runtime-tags/src/__tests__/fixtures/patch-dynamic-nested-body-in-unpaired/template.marko_2*content",
        "PatchChild:BranchScopes:#text/1": {
          "PatchText:#text/0": "three"
        }
      }
    }
  }
}, _.a)

// PATCH holding BQQ
(_.a = {
  "PatchChild:#childScope/0": {
    "PatchChild:BranchScopes:#text/1": {
      "PatchChild:#childScope/0": {
        "PatchText:#text/0": "four",
        "PatchDynamicTag:#text/1": "^packages/runtime-tags/src/__tests__/fixtures/patch-dynamic-nested-body-in-unpaired/template.marko_2*content",
        "PatchChild:BranchScopes:#text/1": {
          "PatchText:#text/0": "four"
        }
      }
    }
  }
}, _.a)

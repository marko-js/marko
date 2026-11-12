// PATCH
[`packages/runtime-tags/src/__tests__/fixtures/patch-client-branch-bound-child/template.marko_2*content|2 !#childScope/0>packages/runtime-tags/src/__tests__/fixtures/patch-client-branch-bound-child/tags/btn.marko_0;/ D%b%l&/b%c&b;<i><!><!></i><!><!><!><!>`, `packages/runtime-tags/src/__tests__/fixtures/patch-client-branch-bound-child/template.marko_1*shell !#childScope/0>packages/runtime-tags/src/__tests__/fixtures/patch-client-branch-bound-child/tags/card.marko_0;/D b%l&;<section><button>clear</button><!></section>`]
{
  "PatchBranch:#text/0": [{
    "PatchChild:#childScope/0": {
      "PatchSetup:": {
        "PatchDynamicTag:#text/1": "^^packages/runtime-tags/src/__tests__/fixtures/patch-client-branch-bound-child/template.marko_2*content"
      },
      "PatchClientBranch:#text/1": [{
        "PatchChild:#childScope/0": {
          "PatchText:#text/1": "b"
        },
        "PatchChild:#childScope/1": {
          "PatchDynamicTag:#text/0": [">span", 0, {
            content: {
              content: _(["BranchScopes:#text/0", "#childScope/0", "BranchScopes:#text/1", "#childScope/1"], "packages/runtime-tags/src/__tests__/fixtures/patch-client-branch-bound-child/tags/defn.marko_1*content", 1)
            }
          }],
          "PatchChild:BranchScopes:#text/0": {
            "PatchChild:BranchScopes:#span/0": {
              "PatchText:#text/1": "b"
            }
          },
          "PatchMarkedWrite:input_label": "b",
          "PatchSubscribers:packages/runtime-tags/src/__tests__/fixtures/patch-client-branch-bound-child/tags/defn.marko_0_input_label#3/subscribers": "input_label"
        }
      }, "packages/runtime-tags/src/__tests__/fixtures/patch-client-branch-bound-child/template.marko_2*content", {
        "PatchChild:#childScope/0": {
          "PatchSetupValues:": {
            "PatchFill:packages/runtime-tags/src/__tests__/fixtures/patch-client-branch-bound-child/tags/btn.marko_0_n#6/fill": 0
          }
        }
      }]
    }
  }, "packages/runtime-tags/src/__tests__/fixtures/patch-client-branch-bound-child/template.marko_1*shell"],
  "PatchMarkedWrite:input_label": "b",
  "PatchMarkedWrite:input_tag": "span"
}
;D2A

// PATCH holding D2A
{
  "PatchBranch:#text/0": [{
    "PatchChild:#childScope/0": {
      "PatchSetup:": {
        "PatchDynamicTag:#text/1": "^^packages/runtime-tags/src/__tests__/fixtures/patch-client-branch-bound-child/template.marko_2*content"
      },
      "PatchClientBranch:#text/1": [{
        "PatchChild:#childScope/0": {
          "PatchText:#text/1": "c"
        },
        "PatchChild:#childScope/1": {
          "PatchDynamicTag:#text/0": [">i", 0, {
            content: {
              content: _(["BranchScopes:#text/0", "#childScope/0", "BranchScopes:#text/1", "#childScope/1"], "packages/runtime-tags/src/__tests__/fixtures/patch-client-branch-bound-child/tags/defn.marko_1*content", 1)
            }
          }],
          "PatchChild:BranchScopes:#text/0": {
            "PatchChild:BranchScopes:#i/0": {
              "PatchText:#text/1": "c"
            }
          },
          "PatchMarkedWrite:input_label": "c",
          "PatchSubscribers:packages/runtime-tags/src/__tests__/fixtures/patch-client-branch-bound-child/tags/defn.marko_0_input_label#3/subscribers": "input_label"
        }
      }, "packages/runtime-tags/src/__tests__/fixtures/patch-client-branch-bound-child/template.marko_2*content", {
        "PatchChild:#childScope/0": {
          "PatchSetupValues:": {
            "PatchFill:packages/runtime-tags/src/__tests__/fixtures/patch-client-branch-bound-child/tags/btn.marko_0_n#6/fill": 0
          }
        }
      }]
    }
  }, "packages/runtime-tags/src/__tests__/fixtures/patch-client-branch-bound-child/template.marko_1*shell"],
  "PatchMarkedWrite:input_label": "c",
  "PatchMarkedWrite:input_tag": "i"
}

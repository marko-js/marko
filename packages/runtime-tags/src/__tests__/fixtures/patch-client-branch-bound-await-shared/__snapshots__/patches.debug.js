// PATCH
[`packages/runtime-tags/src/__tests__/fixtures/patch-client-branch-bound-await-shared/template.marko_2*content|2;b%b%;<!><!><!><!>`, `packages/runtime-tags/src/__tests__/fixtures/patch-client-branch-bound-await-shared/template.marko_4*content;b%b%;<!><!><!>`, `packages/runtime-tags/src/__tests__/fixtures/patch-client-branch-bound-await-shared/template.marko_1*shell !#childScope/0>packages/runtime-tags/src/__tests__/fixtures/patch-client-branch-bound-await-shared/tags/card.marko_0;/D b%l&;<section><button>clear</button><!></section>`]
{
  "PatchBranch:#text/0": [{
    "PatchChild:#childScope/0": {
      "PatchSetup:": {
        "PatchDynamicTag:#text/1": "^^packages/runtime-tags/src/__tests__/fixtures/patch-client-branch-bound-await-shared/template.marko_2*content"
      },
      "PatchClientBranch:#text/1": [{
        "PatchDynamicTag:#text/0": [">span", 0, {
          content: {
            content: _(["BranchScopes:#text/0", "#childScope/0", "BranchScopes:#text/1"], "packages/runtime-tags/src/__tests__/fixtures/patch-client-branch-bound-await-shared/template.marko_3*content", 1)
          }
        }],
        "PatchChild:BranchScopes:#text/0": {
          "PatchChild:BranchScopes:#span/0": {
            "PatchText:#text/1": "b"
          }
        },
        "PatchPending:#text/1": "packages/runtime-tags/src/__tests__/fixtures/patch-client-branch-bound-await-shared/template.marko_4*content"
      }, "packages/runtime-tags/src/__tests__/fixtures/patch-client-branch-bound-await-shared/template.marko_2*content"]
    }
  }, "packages/runtime-tags/src/__tests__/fixtures/patch-client-branch-bound-await-shared/template.marko_1*shell"],
  "PatchMarkedWrite:input_label": "b",
  "PatchSubscribers:packages/runtime-tags/src/__tests__/fixtures/patch-client-branch-bound-await-shared/template.marko_0_input_label#4/subscribers": "input_label",
  "PatchMarkedWrite:input_tag": "span",
  "PatchMarkedWrite:input_p": (p => p = new Promise((f, r) => _.a = {
    f,
    r(e) {
      p.catch(_ => 0);
      r(e)
    }
  }))()
}
[{
  "PatchChild:BranchScopes:#text/0": {
    "PatchChild:#childScope/0": {
      "PatchClientBranch:#text/1": [{
        "PatchChild:BranchScopes:#text/1": {
          "PatchDynamicTag:#text/0": [">span", 0, {
            content: _(0)["PatchBranch:#text/0"][0]["PatchChild:#childScope/0"]["PatchClientBranch:#text/1"][0]["PatchDynamicTag:#text/0"][2].content
          }],
          "PatchChild:BranchScopes:#text/0": {
            "PatchChild:BranchScopes:#span/0": {
              "PatchText:#text/1": "b"
            }
          },
          "PatchText:#text/1": "y"
        }
      }, _(0)["PatchBranch:#text/0"][0]["PatchChild:#childScope/0"]["PatchClientBranch:#text/1"][1]]
    }
  }
}, _.a.f("y")][0]
;D0w

// PATCH holding D0w
{
  "PatchBranch:#text/0": [{
    "PatchChild:#childScope/0": {
      "PatchSetup:": {
        "PatchDynamicTag:#text/1": "^^packages/runtime-tags/src/__tests__/fixtures/patch-client-branch-bound-await-shared/template.marko_2*content"
      },
      "PatchClientBranch:#text/1": [{
        "PatchDynamicTag:#text/0": [">i", 0, {
          content: {
            content: _(["BranchScopes:#text/0", "#childScope/0", "BranchScopes:#text/1"], "packages/runtime-tags/src/__tests__/fixtures/patch-client-branch-bound-await-shared/template.marko_3*content", 1)
          }
        }],
        "PatchChild:BranchScopes:#text/0": {
          "PatchChild:BranchScopes:#i/0": {
            "PatchText:#text/1": "c"
          }
        },
        "PatchPending:#text/1": "packages/runtime-tags/src/__tests__/fixtures/patch-client-branch-bound-await-shared/template.marko_4*content"
      }, "packages/runtime-tags/src/__tests__/fixtures/patch-client-branch-bound-await-shared/template.marko_2*content"]
    }
  }, "packages/runtime-tags/src/__tests__/fixtures/patch-client-branch-bound-await-shared/template.marko_1*shell"],
  "PatchMarkedWrite:input_label": "c",
  "PatchSubscribers:packages/runtime-tags/src/__tests__/fixtures/patch-client-branch-bound-await-shared/template.marko_0_input_label#4/subscribers": "input_label",
  "PatchMarkedWrite:input_tag": "i",
  "PatchMarkedWrite:input_p": (p => p = new Promise((f, r) => _.a = {
    f,
    r(e) {
      p.catch(_ => 0);
      r(e)
    }
  }))()
}
[{
  "PatchChild:BranchScopes:#text/0": {
    "PatchChild:#childScope/0": {
      "PatchClientBranch:#text/1": [{
        "PatchChild:BranchScopes:#text/1": {
          "PatchDynamicTag:#text/0": [">i", 0, {
            content: _(0)["PatchBranch:#text/0"][0]["PatchChild:#childScope/0"]["PatchClientBranch:#text/1"][0]["PatchDynamicTag:#text/0"][2].content
          }],
          "PatchChild:BranchScopes:#text/0": {
            "PatchChild:BranchScopes:#i/0": {
              "PatchText:#text/1": "c"
            }
          },
          "PatchText:#text/1": "z"
        }
      }, _(0)["PatchBranch:#text/0"][0]["PatchChild:#childScope/0"]["PatchClientBranch:#text/1"][1]]
    }
  }
}, _.a.f("z")][0]

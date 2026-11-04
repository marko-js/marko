// PATCH
[`packages/runtime-tags/src/__tests__/fixtures/patch-client-branch-bound-await/template.marko_2*content|2;b%;<!><!><!>`, `packages/runtime-tags/src/__tests__/fixtures/patch-client-branch-bound-await/template.marko_3*content;b%;<!><!><!>`, `packages/runtime-tags/src/__tests__/fixtures/patch-client-branch-bound-await/template.marko_1*shell !#childScope/0>packages/runtime-tags/src/__tests__/fixtures/patch-client-branch-bound-await/tags/card.marko_0;/D b%l&;<section><button>clear</button><!></section>`]
{
  "PatchBranch:#text/0": [{
    "PatchChild:#childScope/0": {
      "PatchSetup:": {
        "PatchDynamicTag:#text/1": "^^packages/runtime-tags/src/__tests__/fixtures/patch-client-branch-bound-await/template.marko_2*content"
      },
      "PatchClientBranch:#text/1": [{
        "PatchPending:#text/0": "packages/runtime-tags/src/__tests__/fixtures/patch-client-branch-bound-await/template.marko_3*content"
      }, "packages/runtime-tags/src/__tests__/fixtures/patch-client-branch-bound-await/template.marko_2*content"]
    }
  }, "packages/runtime-tags/src/__tests__/fixtures/patch-client-branch-bound-await/template.marko_1*shell"],
  "PatchMarkedWrite:input_p": (p => p = new Promise((f, r) => _.a = {
    f,
    r(e) {
      p.catch(_ => 0);
      r(e)
    }
  }))(),
  "PatchMarkedWrite:input_label": "b",
  "PatchSubscribers:packages/runtime-tags/src/__tests__/fixtures/patch-client-branch-bound-await/template.marko_0_input_label#5/subscribers": "input_label",
  "PatchMarkedWrite:input_tag": "span"
}
[{
  "PatchChild:BranchScopes:#text/0": {
    "PatchChild:#childScope/0": {
      "PatchClientBranch:#text/1": [{
        "PatchChild:BranchScopes:#text/0": {
          "PatchMarkedWrite:v": "y",
          "PatchSubscribers:packages/runtime-tags/src/__tests__/fixtures/patch-client-branch-bound-await/template.marko_3_v#2/subscribers": "v",
          "PatchDynamicTag:#text/0": [">span", 0, {
            content: {
              content: _(["BranchScopes:#text/0", "#childScope/0", "BranchScopes:#text/1", "BranchScopes:#text/0"], "packages/runtime-tags/src/__tests__/fixtures/patch-client-branch-bound-await/template.marko_4*content", 1)
            }
          }],
          "PatchChild:BranchScopes:#text/0": {
            "PatchChild:BranchScopes:#span/0": {
              "PatchText:#text/1": "y",
              "PatchText:#text/2": "b"
            }
          }
        }
      }, _(0)["PatchBranch:#text/0"][0]["PatchChild:#childScope/0"]["PatchClientBranch:#text/1"][1]]
    }
  }
}, _.a.f("y")][0]
;Dyw

// PATCH holding Dyw
{
  "PatchBranch:#text/0": [{
    "PatchChild:#childScope/0": {
      "PatchSetup:": {
        "PatchDynamicTag:#text/1": "^^packages/runtime-tags/src/__tests__/fixtures/patch-client-branch-bound-await/template.marko_2*content"
      },
      "PatchClientBranch:#text/1": [{
        "PatchPending:#text/0": "packages/runtime-tags/src/__tests__/fixtures/patch-client-branch-bound-await/template.marko_3*content"
      }, "packages/runtime-tags/src/__tests__/fixtures/patch-client-branch-bound-await/template.marko_2*content"]
    }
  }, "packages/runtime-tags/src/__tests__/fixtures/patch-client-branch-bound-await/template.marko_1*shell"],
  "PatchMarkedWrite:input_p": (p => p = new Promise((f, r) => _.a = {
    f,
    r(e) {
      p.catch(_ => 0);
      r(e)
    }
  }))(),
  "PatchMarkedWrite:input_label": "c",
  "PatchSubscribers:packages/runtime-tags/src/__tests__/fixtures/patch-client-branch-bound-await/template.marko_0_input_label#5/subscribers": "input_label",
  "PatchMarkedWrite:input_tag": "i"
}
[{
  "PatchChild:BranchScopes:#text/0": {
    "PatchChild:#childScope/0": {
      "PatchClientBranch:#text/1": [{
        "PatchChild:BranchScopes:#text/0": {
          "PatchMarkedWrite:v": "z",
          "PatchSubscribers:packages/runtime-tags/src/__tests__/fixtures/patch-client-branch-bound-await/template.marko_3_v#2/subscribers": "v",
          "PatchDynamicTag:#text/0": [">i", 0, {
            content: {
              content: _(["BranchScopes:#text/0", "#childScope/0", "BranchScopes:#text/1", "BranchScopes:#text/0"], "packages/runtime-tags/src/__tests__/fixtures/patch-client-branch-bound-await/template.marko_4*content", 1)
            }
          }],
          "PatchChild:BranchScopes:#text/0": {
            "PatchChild:BranchScopes:#i/0": {
              "PatchText:#text/1": "z",
              "PatchText:#text/2": "c"
            }
          }
        }
      }, _(0)["PatchBranch:#text/0"][0]["PatchChild:#childScope/0"]["PatchClientBranch:#text/1"][1]]
    }
  }
}, _.a.f("z")][0]

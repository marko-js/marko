// PATCH
[`packages/runtime-tags/src/__tests__/fixtures/patch-created-content-await/template.marko_1*content`, `packages/runtime-tags/src/__tests__/fixtures/patch-created-content-await/template.marko_2*content;D%b%;<b><!><!></b>`, `packages/runtime-tags/src/__tests__/fixtures/patch-created-content-await/template.marko_3*shell !#childScope/0>packages/runtime-tags/src/__tests__/fixtures/patch-created-content-await/tags/card.marko_0;/D b%l&;<section><button>clear</button><!></section>`]
{
  "PatchBranch:#text/0": [{
    "PatchChild:#childScope/0": {
      "PatchSetup:": {
        "PatchDynamicTag:#text/1": "^^^packages/runtime-tags/src/__tests__/fixtures/patch-created-content-await/template.marko_1*content",
        "PatchChild:BranchScopes:#text/1": {
          "PatchSetup:": {
            "PatchPending:#text/0": "packages/runtime-tags/src/__tests__/fixtures/patch-created-content-await/template.marko_2*content",
            "PatchRender:": "packages/runtime-tags/src/__tests__/fixtures/patch-created-content-await/template.marko_1_input_p#0:3/subscribe"
          }
        }
      }
    }
  }, "packages/runtime-tags/src/__tests__/fixtures/patch-created-content-await/template.marko_3*shell"],
  "PatchMarkedWrite:input_p": (p => p = new Promise((f, r) => _.a = {
    f,
    r(e) {
      p.catch(_ => 0);
      r(e)
    }
  }))(),
  "PatchSubscribers:packages/runtime-tags/src/__tests__/fixtures/patch-created-content-await/template.marko_0_input_p#3/subscribers": "input_p",
  "PatchMarkedWrite:input_label": "b",
  "PatchSubscribers:packages/runtime-tags/src/__tests__/fixtures/patch-created-content-await/template.marko_0_input_label#4/subscribers": "input_label"
}
[{
  "PatchChild:BranchScopes:#text/0": {
    "PatchChild:#childScope/0": {
      "PatchChild:BranchScopes:#text/1": {
        "PatchChild:BranchScopes:#text/0": {
          "PatchText:#text/0": "y",
          "PatchText:#text/1": "b",
          "PatchSetup:": {
            "PatchSubscribers:packages/runtime-tags/src/__tests__/fixtures/patch-created-content-await/template.marko_2_input_label#0:4/subscribe": 0
          }
        }
      }
    }
  }
}, _.a.f("y")][0]
;DTQ

// PATCH holding DTQ
{
  "PatchBranch:#text/0": [{
    "PatchChild:#childScope/0": {
      "PatchSetup:": {
        "PatchDynamicTag:#text/1": "^^^packages/runtime-tags/src/__tests__/fixtures/patch-created-content-await/template.marko_1*content",
        "PatchChild:BranchScopes:#text/1": {
          "PatchSetup:": {
            "PatchPending:#text/0": "packages/runtime-tags/src/__tests__/fixtures/patch-created-content-await/template.marko_2*content",
            "PatchRender:": "packages/runtime-tags/src/__tests__/fixtures/patch-created-content-await/template.marko_1_input_p#0:3/subscribe"
          }
        }
      }
    }
  }, "packages/runtime-tags/src/__tests__/fixtures/patch-created-content-await/template.marko_3*shell"],
  "PatchMarkedWrite:input_p": (p => p = new Promise((f, r) => _.a = {
    f,
    r(e) {
      p.catch(_ => 0);
      r(e)
    }
  }))(),
  "PatchSubscribers:packages/runtime-tags/src/__tests__/fixtures/patch-created-content-await/template.marko_0_input_p#3/subscribers": "input_p",
  "PatchMarkedWrite:input_label": "c",
  "PatchSubscribers:packages/runtime-tags/src/__tests__/fixtures/patch-created-content-await/template.marko_0_input_label#4/subscribers": "input_label"
}
[{
  "PatchChild:BranchScopes:#text/0": {
    "PatchChild:#childScope/0": {
      "PatchChild:BranchScopes:#text/1": {
        "PatchChild:BranchScopes:#text/0": {
          "PatchText:#text/0": "z",
          "PatchText:#text/1": "c",
          "PatchSetup:": {
            "PatchSubscribers:packages/runtime-tags/src/__tests__/fixtures/patch-created-content-await/template.marko_2_input_label#0:4/subscribe": 0
          }
        }
      }
    }
  }
}, _.a.f("z")][0]

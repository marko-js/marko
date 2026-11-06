// PATCH
[`packages/runtime-tags/src/__tests__/fixtures/patch-zz-kcoh-nest2-x2/template.marko_2*content|2 !#childScope/0>packages/runtime-tags/src/__tests__/fixtures/patch-zz-kcoh-nest2-x2/tags/card.marko_0;/D b%l&;<section><button>clear</button><!></section>`, `packages/runtime-tags/src/__tests__/fixtures/patch-zz-kcoh-nest2-x2/template.marko_3*content|3 !#childScope/1>packages/runtime-tags/src/__tests__/fixtures/patch-zz-kcoh-nest2-x2/tags/card.marko_0;b%b/D b%l&;<!><!><section><button>clear</button><!></section>`, `packages/runtime-tags/src/__tests__/fixtures/patch-zz-kcoh-nest2-x2/template.marko_5*content|5;b%b%;<!><!><!><!>`, `packages/runtime-tags/src/__tests__/fixtures/patch-zz-kcoh-nest2-x2/template.marko_1*shell !#childScope/0>packages/runtime-tags/src/__tests__/fixtures/patch-zz-kcoh-nest2-x2/tags/card.marko_0;/D b%l&;<section><button>clear</button><!></section>`]
{
  "PatchBranch:#text/0": [{
    "PatchChild:#childScope/0": {
      "PatchSetup:": {
        "PatchDynamicTag:#text/1": "^^packages/runtime-tags/src/__tests__/fixtures/patch-zz-kcoh-nest2-x2/template.marko_2*content"
      }
    },
    "PatchClientBranch:2": [{
      "PatchMarkedWrite:outer": "b!",
      "PatchChild:#childScope/0": {
        "PatchSetup:": {
          "PatchDynamicTag:#text/1": "^^packages/runtime-tags/src/__tests__/fixtures/patch-zz-kcoh-nest2-x2/template.marko_3*content"
        }
      },
      "PatchClientBranch:3": {
        "PatchMarkedWrite:inner": "b!?",
        "PatchDynamicTag:#text/0": [">span", 0, {
          content: _.a = {
            content: _.c = [
              [], "packages/runtime-tags/src/__tests__/fixtures/patch-zz-kcoh-nest2-x2/template.marko_6*content", 1
            ]
          }
        }],
        "PatchChild:BranchScopes:#text/0": {
          "PatchChild:BranchScopes:#span/0": {
            "PatchText:#text/1": "b!"
          }
        },
        "PatchChild:#childScope/1": {
          "PatchSetup:": {
            "PatchDynamicTag:#text/1": "^^packages/runtime-tags/src/__tests__/fixtures/patch-zz-kcoh-nest2-x2/template.marko_5*content"
          }
        },
        "PatchClientBranch:5": [{
          "PatchDynamicTag:#text/0": [">span", 0, {
            content: {
              content: _.b = [
                [], "packages/runtime-tags/src/__tests__/fixtures/patch-zz-kcoh-nest2-x2/template.marko_7*content", 1
              ]
            }
          }],
          "PatchChild:BranchScopes:#text/0": {
            "PatchChild:BranchScopes:#span/0": {
              "PatchText:#text/1": "b!?",
              "PatchText:#text/2": "b!"
            }
          },
          "PatchDynamicTag:#text/1": [">span", 0, {
            content: _.a
          }],
          "PatchChild:BranchScopes:#text/1": {
            "PatchChild:BranchScopes:#span/0": {
              "PatchText:#text/1": "b!"
            }
          }
        }, _.b],
        "PatchSubscribers:packages/runtime-tags/src/__tests__/fixtures/patch-zz-kcoh-nest2-x2/template.marko_3_inner#3/subscribers": "inner"
      },
      "PatchSubscribers:packages/runtime-tags/src/__tests__/fixtures/patch-zz-kcoh-nest2-x2/template.marko_2_outer#1/subscribers": "outer"
    }, _.c]
  }, "packages/runtime-tags/src/__tests__/fixtures/patch-zz-kcoh-nest2-x2/template.marko_1*shell"],
  "PatchMarkedWrite:input_label": "b",
  "PatchMarkedWrite:input_tag": "span"
}
;ETw

// PATCH holding ETw
{
  "PatchBranch:#text/0": [{
    "PatchChild:#childScope/0": {
      "PatchSetup:": {
        "PatchDynamicTag:#text/1": "^^packages/runtime-tags/src/__tests__/fixtures/patch-zz-kcoh-nest2-x2/template.marko_2*content"
      }
    },
    "PatchClientBranch:2": [{
      "PatchMarkedWrite:outer": "c!",
      "PatchChild:#childScope/0": {
        "PatchSetup:": {
          "PatchDynamicTag:#text/1": "^^packages/runtime-tags/src/__tests__/fixtures/patch-zz-kcoh-nest2-x2/template.marko_3*content"
        }
      },
      "PatchClientBranch:3": {
        "PatchMarkedWrite:inner": "c!?",
        "PatchDynamicTag:#text/0": [">i", 0, {
          content: _.a = {
            content: _.c = [
              [], "packages/runtime-tags/src/__tests__/fixtures/patch-zz-kcoh-nest2-x2/template.marko_6*content", 1
            ]
          }
        }],
        "PatchChild:BranchScopes:#text/0": {
          "PatchChild:BranchScopes:#i/0": {
            "PatchText:#text/1": "c!"
          }
        },
        "PatchChild:#childScope/1": {
          "PatchSetup:": {
            "PatchDynamicTag:#text/1": "^^packages/runtime-tags/src/__tests__/fixtures/patch-zz-kcoh-nest2-x2/template.marko_5*content"
          }
        },
        "PatchClientBranch:5": [{
          "PatchDynamicTag:#text/0": [">i", 0, {
            content: {
              content: _.b = [
                [], "packages/runtime-tags/src/__tests__/fixtures/patch-zz-kcoh-nest2-x2/template.marko_7*content", 1
              ]
            }
          }],
          "PatchChild:BranchScopes:#text/0": {
            "PatchChild:BranchScopes:#i/0": {
              "PatchText:#text/1": "c!?",
              "PatchText:#text/2": "c!"
            }
          },
          "PatchDynamicTag:#text/1": [">i", 0, {
            content: _.a
          }],
          "PatchChild:BranchScopes:#text/1": {
            "PatchChild:BranchScopes:#i/0": {
              "PatchText:#text/1": "c!"
            }
          }
        }, _.b],
        "PatchSubscribers:packages/runtime-tags/src/__tests__/fixtures/patch-zz-kcoh-nest2-x2/template.marko_3_inner#3/subscribers": "inner"
      },
      "PatchSubscribers:packages/runtime-tags/src/__tests__/fixtures/patch-zz-kcoh-nest2-x2/template.marko_2_outer#1/subscribers": "outer"
    }, _.c]
  }, "packages/runtime-tags/src/__tests__/fixtures/patch-zz-kcoh-nest2-x2/template.marko_1*shell"],
  "PatchMarkedWrite:input_label": "c",
  "PatchMarkedWrite:input_tag": "i"
}

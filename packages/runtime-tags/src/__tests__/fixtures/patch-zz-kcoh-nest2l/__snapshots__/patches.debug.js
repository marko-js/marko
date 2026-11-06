// PATCH
[`packages/runtime-tags/src/__tests__/fixtures/patch-zz-kcoh-nest2l/template.marko_2*content|2 !#childScope/0>packages/runtime-tags/src/__tests__/fixtures/patch-zz-kcoh-nest2l/tags/card.marko_0;/D b%l&;<section><button>clear</button><!></section>`, `packages/runtime-tags/src/__tests__/fixtures/patch-zz-kcoh-nest2l/template.marko_4*content|4 !#childScope/1>packages/runtime-tags/src/__tests__/fixtures/patch-zz-kcoh-nest2l/tags/card.marko_0;b%b/D b%l&;<!><!><section><button>clear</button><!></section>`, `packages/runtime-tags/src/__tests__/fixtures/patch-zz-kcoh-nest2l/template.marko_5*content|5;b%;<!><!><!>`, `packages/runtime-tags/src/__tests__/fixtures/patch-zz-kcoh-nest2l/template.marko_1*shell !#childScope/0>packages/runtime-tags/src/__tests__/fixtures/patch-zz-kcoh-nest2l/tags/card.marko_0;/D b%l&;<section><button>clear</button><!></section>`]
{
  "PatchBranch:#text/0": [{
    "PatchChild:#childScope/0": {
      "PatchSetup:": {
        "PatchDynamicTag:#text/1": "^^packages/runtime-tags/src/__tests__/fixtures/patch-zz-kcoh-nest2l/template.marko_2*content"
      }
    },
    "PatchClientBranch:2": [{
      "PatchChild:#childScope/0": {
        "PatchSetup:": {
          "PatchDynamicTag:#text/1": "^^packages/runtime-tags/src/__tests__/fixtures/patch-zz-kcoh-nest2l/template.marko_4*content"
        }
      },
      "PatchClientBranch:4": {
        "PatchDynamicTag:#text/0": [">span", 0, {
          content: _.a = {
            content: _.b = [
              [], "packages/runtime-tags/src/__tests__/fixtures/patch-zz-kcoh-nest2l/template.marko_3*content", 1
            ]
          }
        }],
        "PatchChild:BranchScopes:#text/0": {
          "PatchChild:BranchScopes:#span/0": {
            "PatchText:#text/0": "b"
          }
        },
        "PatchChild:#childScope/1": {
          "PatchSetup:": {
            "PatchDynamicTag:#text/1": "^^packages/runtime-tags/src/__tests__/fixtures/patch-zz-kcoh-nest2l/template.marko_5*content"
          }
        },
        "PatchClientBranch:5": {
          "PatchDynamicTag:#text/0": [">span", 0, {
            content: _.a
          }],
          "PatchChild:BranchScopes:#text/0": {
            "PatchChild:BranchScopes:#span/0": {
              "PatchText:#text/0": "b"
            }
          }
        }
      }
    }, _.b]
  }, "packages/runtime-tags/src/__tests__/fixtures/patch-zz-kcoh-nest2l/template.marko_1*shell"],
  "PatchSubscribers:packages/runtime-tags/src/__tests__/fixtures/patch-zz-kcoh-nest2l/template.marko_0_input_label#4/subscribers": "input_label",
  "PatchMarkedWrite:input_label": "b",
  "PatchMarkedWrite:input_tag": "span"
}
;D2w

// PATCH holding D2w
{
  "PatchBranch:#text/0": [{
    "PatchChild:#childScope/0": {
      "PatchSetup:": {
        "PatchDynamicTag:#text/1": "^^packages/runtime-tags/src/__tests__/fixtures/patch-zz-kcoh-nest2l/template.marko_2*content"
      }
    },
    "PatchClientBranch:2": [{
      "PatchChild:#childScope/0": {
        "PatchSetup:": {
          "PatchDynamicTag:#text/1": "^^packages/runtime-tags/src/__tests__/fixtures/patch-zz-kcoh-nest2l/template.marko_4*content"
        }
      },
      "PatchClientBranch:4": {
        "PatchDynamicTag:#text/0": [">i", 0, {
          content: _.a = {
            content: _.b = [
              [], "packages/runtime-tags/src/__tests__/fixtures/patch-zz-kcoh-nest2l/template.marko_3*content", 1
            ]
          }
        }],
        "PatchChild:BranchScopes:#text/0": {
          "PatchChild:BranchScopes:#i/0": {
            "PatchText:#text/0": "c"
          }
        },
        "PatchChild:#childScope/1": {
          "PatchSetup:": {
            "PatchDynamicTag:#text/1": "^^packages/runtime-tags/src/__tests__/fixtures/patch-zz-kcoh-nest2l/template.marko_5*content"
          }
        },
        "PatchClientBranch:5": {
          "PatchDynamicTag:#text/0": [">i", 0, {
            content: _.a
          }],
          "PatchChild:BranchScopes:#text/0": {
            "PatchChild:BranchScopes:#i/0": {
              "PatchText:#text/0": "c"
            }
          }
        }
      }
    }, _.b]
  }, "packages/runtime-tags/src/__tests__/fixtures/patch-zz-kcoh-nest2l/template.marko_1*shell"],
  "PatchSubscribers:packages/runtime-tags/src/__tests__/fixtures/patch-zz-kcoh-nest2l/template.marko_0_input_label#4/subscribers": "input_label",
  "PatchMarkedWrite:input_label": "c",
  "PatchMarkedWrite:input_tag": "i"
}

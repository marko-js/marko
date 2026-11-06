// PATCH
[`packages/runtime-tags/src/__tests__/fixtures/patch-zz-kco-nested/template.marko_2*content|2 !#childScope/0>packages/runtime-tags/src/__tests__/fixtures/patch-zz-kco-nested/tags/card.marko_0;/D b%l&;<section><button>clear</button><!></section>`, `packages/runtime-tags/src/__tests__/fixtures/patch-zz-kco-nested/template.marko_3*content|3;b%b%;<!><!><!><!>`, `packages/runtime-tags/src/__tests__/fixtures/patch-zz-kco-nested/template.marko_1*shell !#childScope/0>packages/runtime-tags/src/__tests__/fixtures/patch-zz-kco-nested/tags/card.marko_0;/D b%l&;<section><button>clear</button><!></section>`]
{
  "PatchBranch:#text/0": [{
    "PatchChild:#childScope/0": {
      "PatchSetup:": {
        "PatchDynamicTag:#text/1": "^^packages/runtime-tags/src/__tests__/fixtures/patch-zz-kco-nested/template.marko_2*content"
      }
    },
    "PatchClientBranch:2": s => ({
      "PatchChild:#childScope/0": {
        "PatchSetup:": {
          "PatchDynamicTag:#text/1": "^^packages/runtime-tags/src/__tests__/fixtures/patch-zz-kco-nested/template.marko_3*content"
        }
      },
      "PatchClientBranch:3": s2 => ({
        "PatchDynamicTag:#text/0": [">span", 0, {
          content: {
            content: _([s], "packages/runtime-tags/src/__tests__/fixtures/patch-zz-kco-nested/template.marko_5*content", 1)
          }
        }],
        "PatchChild:BranchScopes:#text/0": {
          "PatchChild:BranchScopes:#span/0": {
            "PatchText:#text/0": "b!"
          }
        },
        "PatchDynamicTag:#text/1": [">span", 0, {
          content: {
            content: _([s2], "packages/runtime-tags/src/__tests__/fixtures/patch-zz-kco-nested/template.marko_4*content", 1)
          }
        }],
        "PatchChild:BranchScopes:#text/1": {
          "PatchChild:BranchScopes:#span/0": {
            "PatchText:#text/0": "b"
          }
        }
      }),
      "PatchSubscribers:packages/runtime-tags/src/__tests__/fixtures/patch-zz-kco-nested/template.marko_2_outer#1/subscribers": "outer",
      "PatchMarkedWrite:outer": "b!"
    })
  }, "packages/runtime-tags/src/__tests__/fixtures/patch-zz-kco-nested/template.marko_1*shell"],
  "PatchSubscribers:packages/runtime-tags/src/__tests__/fixtures/patch-zz-kco-nested/template.marko_0_input_label#4/subscribers": "input_label",
  "PatchMarkedWrite:input_label": "b",
  "PatchMarkedWrite:input_tag": "span"
}
;Dxw

// PATCH holding Dxw
{
  "PatchBranch:#text/0": [{
    "PatchChild:#childScope/0": {
      "PatchSetup:": {
        "PatchDynamicTag:#text/1": "^^packages/runtime-tags/src/__tests__/fixtures/patch-zz-kco-nested/template.marko_2*content"
      }
    },
    "PatchClientBranch:2": s => ({
      "PatchChild:#childScope/0": {
        "PatchSetup:": {
          "PatchDynamicTag:#text/1": "^^packages/runtime-tags/src/__tests__/fixtures/patch-zz-kco-nested/template.marko_3*content"
        }
      },
      "PatchClientBranch:3": s2 => ({
        "PatchDynamicTag:#text/0": [">i", 0, {
          content: {
            content: _([s], "packages/runtime-tags/src/__tests__/fixtures/patch-zz-kco-nested/template.marko_5*content", 1)
          }
        }],
        "PatchChild:BranchScopes:#text/0": {
          "PatchChild:BranchScopes:#i/0": {
            "PatchText:#text/0": "c!"
          }
        },
        "PatchDynamicTag:#text/1": [">i", 0, {
          content: {
            content: _([s2], "packages/runtime-tags/src/__tests__/fixtures/patch-zz-kco-nested/template.marko_4*content", 1)
          }
        }],
        "PatchChild:BranchScopes:#text/1": {
          "PatchChild:BranchScopes:#i/0": {
            "PatchText:#text/0": "c"
          }
        }
      }),
      "PatchSubscribers:packages/runtime-tags/src/__tests__/fixtures/patch-zz-kco-nested/template.marko_2_outer#1/subscribers": "outer",
      "PatchMarkedWrite:outer": "c!"
    })
  }, "packages/runtime-tags/src/__tests__/fixtures/patch-zz-kco-nested/template.marko_1*shell"],
  "PatchSubscribers:packages/runtime-tags/src/__tests__/fixtures/patch-zz-kco-nested/template.marko_0_input_label#4/subscribers": "input_label",
  "PatchMarkedWrite:input_label": "c",
  "PatchMarkedWrite:input_tag": "i"
}

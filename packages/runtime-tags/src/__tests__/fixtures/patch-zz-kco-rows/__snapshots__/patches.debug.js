// PATCH
[`packages/runtime-tags/src/__tests__/fixtures/patch-zz-kco-rows/template.marko_2*content|2;b%;<!><!><!>`, `packages/runtime-tags/src/__tests__/fixtures/patch-zz-kco-rows/template.marko_1*shell !#childScope/0>packages/runtime-tags/src/__tests__/fixtures/patch-zz-kco-rows/tags/card.marko_0;/D b%l&;<section><button>clear</button><!></section>`]
{
  "PatchLoop:#text/0": [1, {
    "PatchMarkedWrite:row_label": "a",
    "PatchChild:#childScope/0": {
      "PatchSetup:": {
        "PatchDynamicTag:#text/1": _.a = "^^packages/runtime-tags/src/__tests__/fixtures/patch-zz-kco-rows/template.marko_2*content"
      }
    },
    "PatchClientBranch:2": s => ({
      "PatchDynamicTag:#text/0": [">span", 0, {
        content: {
          content: _([s], "packages/runtime-tags/src/__tests__/fixtures/patch-zz-kco-rows/template.marko_3*content", 1)
        }
      }],
      "PatchChild:BranchScopes:#text/0": {
        "PatchChild:BranchScopes:#span/0": {
          "PatchText:#text/0": "a"
        }
      }
    }),
    "PatchSubscribers:packages/runtime-tags/src/__tests__/fixtures/patch-zz-kco-rows/template.marko_1_row_label#3/subscribers": "row_label"
  }, 2, {
    "PatchMarkedWrite:row_label": "b",
    "PatchChild:#childScope/0": {
      "PatchSetup:": {
        "PatchDynamicTag:#text/1": _.a
      }
    },
    "PatchClientBranch:2": s => ({
      "PatchDynamicTag:#text/0": [">span", 0, {
        content: {
          content: _([s], "packages/runtime-tags/src/__tests__/fixtures/patch-zz-kco-rows/template.marko_3*content", 1)
        }
      }],
      "PatchChild:BranchScopes:#text/0": {
        "PatchChild:BranchScopes:#span/0": {
          "PatchText:#text/0": "b"
        }
      }
    }),
    "PatchSubscribers:packages/runtime-tags/src/__tests__/fixtures/patch-zz-kco-rows/template.marko_1_row_label#3/subscribers": "row_label"
  }, "packages/runtime-tags/src/__tests__/fixtures/patch-zz-kco-rows/template.marko_1*shell"],
  "PatchMarkedWrite:input_tag": "span"
}
;Cww

// PATCH holding Cww
{
  "PatchLoop:#text/0": [2, {
    "PatchMarkedWrite:row_label": "c",
    "PatchChild:#childScope/0": {
      "PatchSetup:": {
        "PatchDynamicTag:#text/1": _.a = "^^packages/runtime-tags/src/__tests__/fixtures/patch-zz-kco-rows/template.marko_2*content"
      }
    },
    "PatchClientBranch:2": s => ({
      "PatchDynamicTag:#text/0": [">i", 0, {
        content: {
          content: _([s], "packages/runtime-tags/src/__tests__/fixtures/patch-zz-kco-rows/template.marko_3*content", 1)
        }
      }],
      "PatchChild:BranchScopes:#text/0": {
        "PatchChild:BranchScopes:#i/0": {
          "PatchText:#text/0": "c"
        }
      }
    }),
    "PatchSubscribers:packages/runtime-tags/src/__tests__/fixtures/patch-zz-kco-rows/template.marko_1_row_label#3/subscribers": "row_label"
  }, 3, {
    "PatchMarkedWrite:row_label": "d",
    "PatchChild:#childScope/0": {
      "PatchSetup:": {
        "PatchDynamicTag:#text/1": _.a
      }
    },
    "PatchClientBranch:2": s => ({
      "PatchDynamicTag:#text/0": [">i", 0, {
        content: {
          content: _([s], "packages/runtime-tags/src/__tests__/fixtures/patch-zz-kco-rows/template.marko_3*content", 1)
        }
      }],
      "PatchChild:BranchScopes:#text/0": {
        "PatchChild:BranchScopes:#i/0": {
          "PatchText:#text/0": "d"
        }
      }
    }),
    "PatchSubscribers:packages/runtime-tags/src/__tests__/fixtures/patch-zz-kco-rows/template.marko_1_row_label#3/subscribers": "row_label"
  }, "packages/runtime-tags/src/__tests__/fixtures/patch-zz-kco-rows/template.marko_1*shell"],
  "PatchMarkedWrite:input_tag": "i"
}

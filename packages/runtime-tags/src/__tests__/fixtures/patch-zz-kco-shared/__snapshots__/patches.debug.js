// PATCH
[`packages/runtime-tags/src/__tests__/fixtures/patch-zz-kco-shared/template.marko_2*content|2;b%;<!><!><!>`, `packages/runtime-tags/src/__tests__/fixtures/patch-zz-kco-shared/template.marko_1*shell !#childScope/0>packages/runtime-tags/src/__tests__/fixtures/patch-zz-kco-shared/tags/card.marko_0;/D b%l&;<section><button>clear</button><!></section>`]
{
  "PatchBranch:#text/0": [{
    "PatchChild:#childScope/0": {
      "PatchSetup:": {
        "PatchDynamicTag:#text/1": "^^packages/runtime-tags/src/__tests__/fixtures/patch-zz-kco-shared/template.marko_2*content"
      }
    },
    "PatchClientBranch:2": [{
      "PatchDynamicTag:#text/0": [">span", 0, {
        content: {
          content: 0
        }
      }],
      "PatchChild:BranchScopes:#text/0": {
        "PatchChild:BranchScopes:#span/0": {
          "PatchText:#text/0": _.a = "a label long enough to share"
        }
      }
    }, {
      "PatchDynamicTag:#text/0": {
        2: {
          content: {
            content: [
              [], "packages/runtime-tags/src/__tests__/fixtures/patch-zz-kco-shared/template.marko_3*content", 1
            ]
          }
        }
      }
    }]
  }, "packages/runtime-tags/src/__tests__/fixtures/patch-zz-kco-shared/template.marko_1*shell"],
  "PatchText:#text/1": _.a,
  "PatchSubscribers:packages/runtime-tags/src/__tests__/fixtures/patch-zz-kco-shared/template.marko_0_input_label#5/subscribers": "input_label",
  "PatchMarkedWrite:input_label": _.a,
  "PatchMarkedWrite:input_tag": "span"
}
;Cww

// PATCH holding Cww
{
  "PatchBranch:#text/0": [{
    "PatchChild:#childScope/0": {
      "PatchSetup:": {
        "PatchDynamicTag:#text/1": "^^packages/runtime-tags/src/__tests__/fixtures/patch-zz-kco-shared/template.marko_2*content"
      }
    },
    "PatchClientBranch:2": [{
      "PatchDynamicTag:#text/0": [">i", 0, {
        content: {
          content: 0
        }
      }],
      "PatchChild:BranchScopes:#text/0": {
        "PatchChild:BranchScopes:#i/0": {
          "PatchText:#text/0": _.a = "another label long enough"
        }
      }
    }, {
      "PatchDynamicTag:#text/0": {
        2: {
          content: {
            content: [
              [], "packages/runtime-tags/src/__tests__/fixtures/patch-zz-kco-shared/template.marko_3*content", 1
            ]
          }
        }
      }
    }]
  }, "packages/runtime-tags/src/__tests__/fixtures/patch-zz-kco-shared/template.marko_1*shell"],
  "PatchText:#text/1": _.a,
  "PatchSubscribers:packages/runtime-tags/src/__tests__/fixtures/patch-zz-kco-shared/template.marko_0_input_label#5/subscribers": "input_label",
  "PatchMarkedWrite:input_label": _.a,
  "PatchMarkedWrite:input_tag": "i"
}

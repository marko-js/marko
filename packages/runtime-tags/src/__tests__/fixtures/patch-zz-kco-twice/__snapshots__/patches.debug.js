// PATCH
[`packages/runtime-tags/src/__tests__/fixtures/patch-zz-kco-twice/template.marko_2*content|2;b%;<!><!><!>`, `packages/runtime-tags/src/__tests__/fixtures/patch-zz-kco-twice/template.marko_1*shell !#childScope/0>packages/runtime-tags/src/__tests__/fixtures/patch-zz-kco-twice/tags/card.marko_0;/D b%b%l&;<section><button>clear</button><!><!></section>`]
{
  "PatchBranch:#text/0": [{
    "PatchChild:#childScope/0": {
      "PatchSetup:": {
        "PatchDynamicTag:#text/1": _.a = "^^packages/runtime-tags/src/__tests__/fixtures/patch-zz-kco-twice/template.marko_2*content",
        "PatchDynamicTag:#text/2": _.a
      }
    },
    "PatchClientBranch:2": s => ({
      "PatchDynamicTag:#text/0": [">span", 0, {
        content: {
          content: _([s], "packages/runtime-tags/src/__tests__/fixtures/patch-zz-kco-twice/template.marko_3*content", 1)
        }
      }],
      "PatchChild:BranchScopes:#text/0": {
        "PatchChild:BranchScopes:#span/0": {
          "PatchText:#text/0": "b"
        }
      }
    })
  }, "packages/runtime-tags/src/__tests__/fixtures/patch-zz-kco-twice/template.marko_1*shell"],
  "PatchSubscribers:packages/runtime-tags/src/__tests__/fixtures/patch-zz-kco-twice/template.marko_0_input_label#4/subscribers": "input_label",
  "PatchMarkedWrite:input_label": "b",
  "PatchMarkedWrite:input_tag": "span"
}
;Cww

// PATCH holding Cww
{
  "PatchBranch:#text/0": [{
    "PatchChild:#childScope/0": {
      "PatchSetup:": {
        "PatchDynamicTag:#text/1": _.a = "^^packages/runtime-tags/src/__tests__/fixtures/patch-zz-kco-twice/template.marko_2*content",
        "PatchDynamicTag:#text/2": _.a
      }
    },
    "PatchClientBranch:2": s => ({
      "PatchDynamicTag:#text/0": [">i", 0, {
        content: {
          content: _([s], "packages/runtime-tags/src/__tests__/fixtures/patch-zz-kco-twice/template.marko_3*content", 1)
        }
      }],
      "PatchChild:BranchScopes:#text/0": {
        "PatchChild:BranchScopes:#i/0": {
          "PatchText:#text/0": "c"
        }
      }
    })
  }, "packages/runtime-tags/src/__tests__/fixtures/patch-zz-kco-twice/template.marko_1*shell"],
  "PatchSubscribers:packages/runtime-tags/src/__tests__/fixtures/patch-zz-kco-twice/template.marko_0_input_label#4/subscribers": "input_label",
  "PatchMarkedWrite:input_label": "c",
  "PatchMarkedWrite:input_tag": "i"
}

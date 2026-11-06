// PATCH
[`packages/runtime-tags/src/__tests__/fixtures/patch-zz-kco-fn/template.marko_2*content|2;b%;<!><!><!>`, `packages/runtime-tags/src/__tests__/fixtures/patch-zz-kco-fn/template.marko_3*content`, `packages/runtime-tags/src/__tests__/fixtures/patch-zz-kco-fn/template.marko_1*shell !#childScope/0>packages/runtime-tags/src/__tests__/fixtures/patch-zz-kco-fn/tags/card.marko_0;/D b%l&;<section><button>clear</button><!></section>`]
{
  "PatchMarkedWrite:input_label": "b",
  "PatchBranch:#text/0": [{
    "PatchChild:#childScope/0": {
      "PatchSetup:": {
        "PatchDynamicTag:#text/1": "^^packages/runtime-tags/src/__tests__/fixtures/patch-zz-kco-fn/template.marko_2*content"
      }
    },
    "PatchClientBranch:2": s => ({
      "PatchDynamicTag:#text/0": [">span", "packages/runtime-tags/src/__tests__/fixtures/patch-zz-kco-fn/template.marko_3*content", {
        onClick: _([s], "packages/runtime-tags/src/__tests__/fixtures/patch-zz-kco-fn/template.marko_2/onClick")
      }],
      "PatchChild:BranchScopes:#text/0": {
        "PatchChild:BranchScopes:#span/0": {
          "PatchText:#text/0": "b"
        }
      }
    })
  }, "packages/runtime-tags/src/__tests__/fixtures/patch-zz-kco-fn/template.marko_1*shell"],
  "PatchSubscribers:packages/runtime-tags/src/__tests__/fixtures/patch-zz-kco-fn/template.marko_0_input_label#5/subscribers": "input_label",
  "PatchMarkedWrite:input_tag": "span"
}
;Cxw

// PATCH holding Cxw
{
  "PatchMarkedWrite:input_label": "c",
  "PatchBranch:#text/0": [{
    "PatchChild:#childScope/0": {
      "PatchSetup:": {
        "PatchDynamicTag:#text/1": "^^packages/runtime-tags/src/__tests__/fixtures/patch-zz-kco-fn/template.marko_2*content"
      }
    },
    "PatchClientBranch:2": s => ({
      "PatchDynamicTag:#text/0": [">i", "packages/runtime-tags/src/__tests__/fixtures/patch-zz-kco-fn/template.marko_3*content", {
        onClick: _([s], "packages/runtime-tags/src/__tests__/fixtures/patch-zz-kco-fn/template.marko_2/onClick")
      }],
      "PatchChild:BranchScopes:#text/0": {
        "PatchChild:BranchScopes:#i/0": {
          "PatchText:#text/0": "c"
        }
      }
    })
  }, "packages/runtime-tags/src/__tests__/fixtures/patch-zz-kco-fn/template.marko_1*shell"],
  "PatchSubscribers:packages/runtime-tags/src/__tests__/fixtures/patch-zz-kco-fn/template.marko_0_input_label#5/subscribers": "input_label",
  "PatchMarkedWrite:input_tag": "i"
}

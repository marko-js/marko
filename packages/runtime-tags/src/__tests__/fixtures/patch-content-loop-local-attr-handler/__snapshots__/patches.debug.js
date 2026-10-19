// PATCH
[`packages/runtime-tags/src/__tests__/fixtures/patch-content-loop-local-attr-handler/tags/menu.marko_1*shell; D ;<button> </button>`, {
  "PatchChild:#childScope/0": {
    "PatchLoop:#text/0": [{
      "PatchWrite:it_onPick": _([], "packages/runtime-tags/src/__tests__/fixtures/patch-content-loop-local-attr-handler/template.marko_0/onPick", _.a = {
        "x/6": {
          id: 1,
          name: "B"
        }
      }),
      "PatchAttr:#button/0 class": "b1",
      "PatchText:#text/1": "B",
      "PatchEffect:packages/runtime-tags/src/__tests__/fixtures/patch-content-loop-local-attr-handler/tags/menu.marko_1_it_onPick#5": "it_onPick"
    }, "packages/runtime-tags/src/__tests__/fixtures/patch-content-loop-local-attr-handler/tags/menu.marko_1*shell"]
  }
}]
;BgE

// PATCH holding BgE
{
  "PatchChild:#childScope/0": {
    "PatchLoop:#text/0": [{
      "PatchWrite:it_onPick": _([], "packages/runtime-tags/src/__tests__/fixtures/patch-content-loop-local-attr-handler/template.marko_0/onPick", _.a = {
        "x/6": {
          id: 1,
          name: "C"
        }
      }),
      "PatchAttr:#button/0 class": "b1",
      "PatchText:#text/1": "C",
      "PatchEffect:packages/runtime-tags/src/__tests__/fixtures/patch-content-loop-local-attr-handler/tags/menu.marko_1_it_onPick#5": "it_onPick"
    }, {
      "PatchWrite:it_onPick": _([], "packages/runtime-tags/src/__tests__/fixtures/patch-content-loop-local-attr-handler/template.marko_0/onPick", _.b = {
        "x/6": {
          id: 2,
          name: "D"
        }
      }),
      "PatchAttr:#button/0 class": "b2",
      "PatchText:#text/1": "D",
      "PatchEffect:packages/runtime-tags/src/__tests__/fixtures/patch-content-loop-local-attr-handler/tags/menu.marko_1_it_onPick#5": "it_onPick"
    }, "packages/runtime-tags/src/__tests__/fixtures/patch-content-loop-local-attr-handler/tags/menu.marko_1*shell"]
  }
}

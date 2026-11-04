// PATCH
`packages/runtime-tags/src/__tests__/fixtures/patch-kept-content-id-client-rows-created-inside/template.marko_2*shell; b D ;<input><label> </label>`
{
  "PatchChild:#childScope/0": {
    "PatchLoopItem:#text/1": [0, {
      "PatchChild:#childScope/0": {
        "PatchClientBranch:#text/0": [{
          "PatchBranch:#text/0": [{
            "PatchSetup:": {
              "PatchAttr:#input/0 id": _.a = "sM_.#childScope/0@0[0].#childScope/0@0.#text/0@0.uid",
              "PatchAttr:#label/1 for": _.a
            },
            "PatchText:#text/2": "b"
          }, _.c = "packages/runtime-tags/src/__tests__/fixtures/patch-kept-content-id-client-rows-created-inside/template.marko_2*shell"]
        }, _.d = "packages/runtime-tags/src/__tests__/fixtures/patch-kept-content-id-client-rows-created-inside/template.marko_1*content"]
      }
    }, 1, {
      "PatchChild:#childScope/0": {
        "PatchClientBranch:#text/0": [{
          "PatchBranch:#text/0": [{
            "PatchSetup:": {
              "PatchAttr:#input/0 id": _.b = "sM_.#childScope/0@0[1].#childScope/0@0.#text/0@0.uid",
              "PatchAttr:#label/1 for": _.b
            },
            "PatchText:#text/2": "b"
          }, _.c]
        }, _.d]
      }
    }]
  },
  "PatchMarkedWrite:input_label": "b"
}
;CAM

// PATCH holding CAM
{
  "PatchChild:#childScope/0": {
    "PatchLoopItem:#text/1": [0, {
      "PatchChild:#childScope/0": {
        "PatchClientBranch:#text/0": [{
          "PatchBranch:#text/0": [{
            "PatchSetup:": {
              "PatchAttr:#input/0 id": _.a = "sM_.#childScope/0@0[0].#childScope/0@0.#text/0@0.uid",
              "PatchAttr:#label/1 for": _.a
            },
            "PatchText:#text/2": "c"
          }, _.c = "packages/runtime-tags/src/__tests__/fixtures/patch-kept-content-id-client-rows-created-inside/template.marko_2*shell"]
        }, _.d = "packages/runtime-tags/src/__tests__/fixtures/patch-kept-content-id-client-rows-created-inside/template.marko_1*content"]
      }
    }, 1, {
      "PatchChild:#childScope/0": {
        "PatchClientBranch:#text/0": [{
          "PatchBranch:#text/0": [{
            "PatchSetup:": {
              "PatchAttr:#input/0 id": _.b = "sM_.#childScope/0@0[1].#childScope/0@0.#text/0@0.uid",
              "PatchAttr:#label/1 for": _.b
            },
            "PatchText:#text/2": "c"
          }, _.c]
        }, _.d]
      }
    }]
  },
  "PatchMarkedWrite:input_label": "c"
}

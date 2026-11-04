// PATCH
`packages/runtime-tags/src/__tests__/fixtures/patch-kept-content-id-client-switched-content/template.marko_2*shell; b D ;<input><label> </label>`
{
  "PatchChild:#childScope/0": {
    "PatchClientBranch:#text/1": [{
      "PatchBranch:#text/0": [{
        "PatchSetup:": {
          "PatchAttr:#input/0 id": _.a = "sM_.#childScope/0@0.#text/1@0.uid",
          "PatchAttr:#label/1 for": _.a
        },
        "PatchText:#text/2": "b"
      }, _.c = "packages/runtime-tags/src/__tests__/fixtures/patch-kept-content-id-client-switched-content/template.marko_2*shell"]
    }, _.d = "packages/runtime-tags/src/__tests__/fixtures/patch-kept-content-id-client-switched-content/template.marko_1*content"],
    "PatchClientBranch:#text/2": [{
      "PatchBranch:#text/0": [{
        "PatchSetup:": {
          "PatchAttr:#input/0 id": _.b = "sM_.#childScope/0@0.#text/2@1.uid",
          "PatchAttr:#label/1 for": _.b
        },
        "PatchText:#text/2": "b"
      }, _.c]
    }, _.d]
  },
  "PatchMarkedWrite:input_label": "b"
}
;CAM

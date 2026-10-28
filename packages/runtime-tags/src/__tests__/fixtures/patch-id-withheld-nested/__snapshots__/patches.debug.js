// PATCH
[`packages/runtime-tags/src/__tests__/fixtures/patch-id-withheld-nested/template.marko_2*shell; b D ;<input><label> </label>`, `packages/runtime-tags/src/__tests__/fixtures/patch-id-withheld-nested/template.marko_3*shell; b D ;<input><label> </label>`, {
  "PatchChild:#childScope/0": {
    "PatchWithheld:#text/1": [{
      "PatchBranch:#text/0": [{
        "PatchSetup:": {
          "PatchAttr:#input/0 id": _.a = "sM_.#childScope/0@0.#text/1@0.uid",
          "PatchAttr:#label/1 for": _.a
        },
        "PatchText:#text/2": "b"
      }, _.d = "packages/runtime-tags/src/__tests__/fixtures/patch-id-withheld-nested/template.marko_2*shell"],
      "PatchLoop:#text/1": [1, {
        "PatchSetup:": {
          "PatchAttr:#input/0 id": _.b = "sM_.#childScope/0@0.#text/1@0[1].rid",
          "PatchAttr:#label/1 for": _.b
        },
        "PatchText:#text/2": 1
      }, _.f = "packages/runtime-tags/src/__tests__/fixtures/patch-id-withheld-nested/template.marko_3*shell"]
    }, _.g = "packages/runtime-tags/src/__tests__/fixtures/patch-id-withheld-nested/template.marko_1*content"],
    "PatchWithheld:#text/2": [{
      "PatchBranch:#text/0": [{
        "PatchSetup:": {
          "PatchAttr:#input/0 id": _.c = "sM_.#childScope/0@0.#text/2@1.uid",
          "PatchAttr:#label/1 for": _.c
        },
        "PatchText:#text/2": "b"
      }, _.d],
      "PatchLoop:#text/1": [1, {
        "PatchSetup:": {
          "PatchAttr:#input/0 id": _.e = "sM_.#childScope/0@0.#text/2@1[1].rid",
          "PatchAttr:#label/1 for": _.e
        },
        "PatchText:#text/2": 1
      }, _.f]
    }, _.g]
  }
}]
;Cww

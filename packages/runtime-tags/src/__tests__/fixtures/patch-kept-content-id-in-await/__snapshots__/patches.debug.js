// PATCH
[`packages/runtime-tags/src/__tests__/fixtures/patch-kept-content-id-in-await/template.marko_2*content|2;b%;<!><!><!>`, `packages/runtime-tags/src/__tests__/fixtures/patch-kept-content-id-in-await/template.marko_3*content; b D%b%;<input><label><!><!></label>`, `packages/runtime-tags/src/__tests__/fixtures/patch-kept-content-id-in-await/template.marko_1*shell !#childScope/0>packages/runtime-tags/src/__tests__/fixtures/patch-kept-content-id-in-await/tags/card.marko_0;/D b%b%l&;<section><button>clear</button><!><!></section>`]
{
  "PatchBranch:#text/0": [{
    "PatchChild:#childScope/0": {
      "PatchSetup:": {
        "PatchDynamicTag:#text/1": _.a = "^^packages/runtime-tags/src/__tests__/fixtures/patch-kept-content-id-in-await/template.marko_2*content",
        "PatchDynamicTag:#text/2": _.a
      },
      "PatchClientBranch:#text/1": [{
        "PatchPending:#text/0": _.b = "packages/runtime-tags/src/__tests__/fixtures/patch-kept-content-id-in-await/template.marko_3*content"
      }, _.c = "packages/runtime-tags/src/__tests__/fixtures/patch-kept-content-id-in-await/template.marko_2*content"],
      "PatchClientBranch:#text/2": [{
        "PatchPending:#text/0": _.b
      }, _.c]
    }
  }, "packages/runtime-tags/src/__tests__/fixtures/patch-kept-content-id-in-await/template.marko_1*shell"],
  "PatchMarkedWrite:input_p": (p => p = new Promise((f, r) => _.d = {
    f,
    r(e) {
      p.catch(_ => 0);
      r(e)
    }
  }))(),
  "PatchMarkedWrite:input_label": "b"
}
[{
  "PatchChild:BranchScopes:#text/0": {
    "PatchChild:#childScope/0": {
      "PatchClientBranch:#text/1": [{
        "PatchChild:BranchScopes:#text/0": {
          "PatchSetup:": {
            "PatchAttr:#input/0 id": _.e = "sM_.#childScope/0@0.#text/1@0.uid",
            "PatchAttr:#label/1 for": _.e
          },
          "PatchText:#text/2": "y",
          "PatchText:#text/3": "b"
        }
      }, _.c],
      "PatchClientBranch:#text/2": [{
        "PatchChild:BranchScopes:#text/0": {
          "PatchSetup:": {
            "PatchAttr:#input/0 id": _.f = "sM_.#childScope/0@0.#text/2@1.uid",
            "PatchAttr:#label/1 for": _.f
          },
          "PatchText:#text/2": "y",
          "PatchText:#text/3": "b"
        }
      }, _.c]
    }
  }
}, _.d.f("y")][0]
;DSw

// PATCH holding DSw
{
  "PatchBranch:#text/0": [{
    "PatchChild:#childScope/0": {
      "PatchSetup:": {
        "PatchDynamicTag:#text/1": _.a = "^^packages/runtime-tags/src/__tests__/fixtures/patch-kept-content-id-in-await/template.marko_2*content",
        "PatchDynamicTag:#text/2": _.a
      },
      "PatchClientBranch:#text/1": [{
        "PatchPending:#text/0": _.b = "packages/runtime-tags/src/__tests__/fixtures/patch-kept-content-id-in-await/template.marko_3*content"
      }, _.c = "packages/runtime-tags/src/__tests__/fixtures/patch-kept-content-id-in-await/template.marko_2*content"],
      "PatchClientBranch:#text/2": [{
        "PatchPending:#text/0": _.b
      }, _.c]
    }
  }, "packages/runtime-tags/src/__tests__/fixtures/patch-kept-content-id-in-await/template.marko_1*shell"],
  "PatchMarkedWrite:input_p": (p => p = new Promise((f, r) => _.d = {
    f,
    r(e) {
      p.catch(_ => 0);
      r(e)
    }
  }))(),
  "PatchMarkedWrite:input_label": "c"
}
[{
  "PatchChild:BranchScopes:#text/0": {
    "PatchChild:#childScope/0": {
      "PatchClientBranch:#text/1": [{
        "PatchChild:BranchScopes:#text/0": {
          "PatchSetup:": {
            "PatchAttr:#input/0 id": _.e = "sM_.#childScope/0@0.#text/1@0.uid",
            "PatchAttr:#label/1 for": _.e
          },
          "PatchText:#text/2": "z",
          "PatchText:#text/3": "c"
        }
      }, _.c],
      "PatchClientBranch:#text/2": [{
        "PatchChild:BranchScopes:#text/0": {
          "PatchSetup:": {
            "PatchAttr:#input/0 id": _.f = "sM_.#childScope/0@0.#text/2@1.uid",
            "PatchAttr:#label/1 for": _.f
          },
          "PatchText:#text/2": "z",
          "PatchText:#text/3": "c"
        }
      }, _.c]
    }
  }
}, _.d.f("z")][0]

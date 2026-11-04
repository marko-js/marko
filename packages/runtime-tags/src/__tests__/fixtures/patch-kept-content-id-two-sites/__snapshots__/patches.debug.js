// PATCH
[`packages/runtime-tags/src/__tests__/fixtures/patch-kept-content-id-two-sites/template.marko_2*content|2; b D ;<input><label> </label>`, `packages/runtime-tags/src/__tests__/fixtures/patch-kept-content-id-two-sites/template.marko_1*shell !#childScope/0>packages/runtime-tags/src/__tests__/fixtures/patch-kept-content-id-two-sites/tags/card.marko_0 #childScope/1>packages/runtime-tags/src/__tests__/fixtures/patch-kept-content-id-two-sites/tags/card.marko_0;/ b%c&/ b%c&b;<button>clear</button><!><!><button>clear</button><!><!><!>`]
{
  "PatchLoop:#text/0": [1, {
    "PatchChild:#childScope/0": {
      "PatchSetup:": {
        "PatchDynamicTag:#text/1": _.b = "^^packages/runtime-tags/src/__tests__/fixtures/patch-kept-content-id-two-sites/template.marko_2*content"
      },
      "PatchClientBranch:#text/1": [{
        "PatchSetup:": {
          "PatchAttr:#input/0 id": _.a = "sM_[1].#childScope/0@0.#text/1@0.uid",
          "PatchAttr:#label/1 for": _.a
        }
      }, _.d = "packages/runtime-tags/src/__tests__/fixtures/patch-kept-content-id-two-sites/template.marko_2*content"]
    },
    "PatchClientBranch:2": {
      "PatchText:#text/2": "b"
    },
    "PatchChild:#childScope/1": {
      "PatchSetup:": {
        "PatchDynamicTag:#text/1": _.b
      },
      "PatchClientBranch:#text/1": [{
        "PatchSetup:": {
          "PatchAttr:#input/0 id": _.c = "sM_[1].#childScope/1@1.#text/1@0.uid",
          "PatchAttr:#label/1 for": _.c
        }
      }, _.d]
    }
  }, 2, {
    "PatchChild:#childScope/0": {
      "PatchSetup:": {
        "PatchDynamicTag:#text/1": _.b
      },
      "PatchClientBranch:#text/1": [{
        "PatchSetup:": {
          "PatchAttr:#input/0 id": _.e = "sM_[2].#childScope/0@0.#text/1@0.uid",
          "PatchAttr:#label/1 for": _.e
        }
      }, _.d]
    },
    "PatchClientBranch:2": {
      "PatchText:#text/2": "b"
    },
    "PatchChild:#childScope/1": {
      "PatchSetup:": {
        "PatchDynamicTag:#text/1": _.b
      },
      "PatchClientBranch:#text/1": [{
        "PatchSetup:": {
          "PatchAttr:#input/0 id": _.f = "sM_[2].#childScope/1@1.#text/1@0.uid",
          "PatchAttr:#label/1 for": _.f
        }
      }, _.d]
    }
  }, "packages/runtime-tags/src/__tests__/fixtures/patch-kept-content-id-two-sites/template.marko_1*shell"],
  "PatchMarkedWrite:input_label": "b"
}
;CQw

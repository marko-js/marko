// PATCH
[`packages/runtime-tags/src/__tests__/fixtures/patch-id-withheld-two-templates/tags/relay.marko_1*content|1; b ;<input><label>relay</label>`, `packages/runtime-tags/src/__tests__/fixtures/patch-id-withheld-two-templates/template.marko_2*content|2; b Db%;<input><label>p <!></label>`, `packages/runtime-tags/src/__tests__/fixtures/patch-id-withheld-two-templates/template.marko_1*shell !#childScope/0>#childScope/0>packages/runtime-tags/src/__tests__/fixtures/patch-id-withheld-two-templates/tags/card.marko_0;// b%b%c&b&b;<button>clear</button><!><!><!><!><!>`]
{
  "PatchLoop:#text/0": [1, {
    "PatchChild:#childScope/0": {
      "PatchChild:#childScope/0": {
        "PatchSetup:": {
          "PatchDynamicTag:#text/1": _.c = "^^packages/runtime-tags/src/__tests__/fixtures/patch-id-withheld-two-templates/tags/relay.marko_1*content",
          "PatchDynamicTag:#text/2": _.d = "^^^packages/runtime-tags/src/__tests__/fixtures/patch-id-withheld-two-templates/template.marko_2*content"
        },
        "PatchClientBranch:#text/1": [{
          "PatchSetup:": {
            "PatchAttr:#input/0 id": _.a = "sM_[1].#childScope/0@0.#childScope/0@0.#text/1@0.rid",
            "PatchAttr:#label/1 for": _.a
          }
        }, _.f = "packages/runtime-tags/src/__tests__/fixtures/patch-id-withheld-two-templates/tags/relay.marko_1*content"],
        "PatchClientBranch:#text/2": [{
          "PatchSetup:": {
            "PatchAttr:#input/0 id": _.b = "sM_[1].#childScope/0@0.#childScope/0@0.#text/2@1.uid",
            "PatchAttr:#label/1 for": _.b
          }
        }, _.h = "packages/runtime-tags/src/__tests__/fixtures/patch-id-withheld-two-templates/template.marko_2*content"]
      }
    },
    "PatchClientBranch:2": {
      "PatchText:#text/2": 1
    }
  }, 2, {
    "PatchChild:#childScope/0": {
      "PatchChild:#childScope/0": {
        "PatchSetup:": {
          "PatchDynamicTag:#text/1": _.c,
          "PatchDynamicTag:#text/2": _.d
        },
        "PatchClientBranch:#text/1": [{
          "PatchSetup:": {
            "PatchAttr:#input/0 id": _.e = "sM_[2].#childScope/0@0.#childScope/0@0.#text/1@0.rid",
            "PatchAttr:#label/1 for": _.e
          }
        }, _.f],
        "PatchClientBranch:#text/2": [{
          "PatchSetup:": {
            "PatchAttr:#input/0 id": _.g = "sM_[2].#childScope/0@0.#childScope/0@0.#text/2@1.uid",
            "PatchAttr:#label/1 for": _.g
          }
        }, _.h]
      }
    },
    "PatchClientBranch:2": {
      "PatchText:#text/2": 2
    }
  }, "packages/runtime-tags/src/__tests__/fixtures/patch-id-withheld-two-templates/template.marko_1*shell"]
}
;DTQ

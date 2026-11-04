// PATCH
[`packages/runtime-tags/src/__tests__/fixtures/patch-kept-content-id-created-client-rows-await-settled-two/template.marko_1*shell !#childScope/0>packages/runtime-tags/src/__tests__/fixtures/patch-kept-content-id-created-client-rows-await-settled-two/tags/outer.marko_0;/ b%c&b;<button>x</button><!><!><!>`, `packages/runtime-tags/src/__tests__/fixtures/patch-kept-content-id-created-client-rows-await-settled-two/template.marko_2*content|2; b D ;<input><label> </label>`]
{
  "PatchBranch:#text/0": [{
    "PatchChild:#childScope/0": {
      "PatchRender:packages/runtime-tags/src/__tests__/fixtures/patch-kept-content-id-created-client-rows-await-settled-two/tags/outer.marko_1_input_promise#0:5/setup": "input_promise",
      "PatchSetupValues:": {
        "PatchFill:packages/runtime-tags/src/__tests__/fixtures/patch-kept-content-id-created-client-rows-await-settled-two/tags/outer.marko_0_rows#6/fill": [_.a = _(["BranchScopes:#text/0"], "=packages/runtime-tags/src/__tests__/fixtures/patch-kept-content-id-created-client-rows-await-settled-two/template.marko_2*content", 1), _.a]
      },
      "PatchSetup:": {
        "PatchWrite:input_promise": (p => p = new Promise((f, r) => _.b = {
          f,
          r(e) {
            p.catch(_ => 0);
            r(e)
          }
        }))()
      },
      "PatchLoopItem:#text/1": [0, {
        "PatchChild:BranchScopes:#text/0": {
          "PatchChild:#childScope/0": {
            "PatchClientBranch:#text/0": [{
              "PatchSetup:": {
                "PatchAttr:#input/0 id": _.c = "sM_.#childScope/0@0[0].#childScope/0@0.#text/0@0.uid",
                "PatchAttr:#label/1 for": _.c
              }
            }, _.e = "packages/runtime-tags/src/__tests__/fixtures/patch-kept-content-id-created-client-rows-await-settled-two/template.marko_2*content"]
          }
        }
      }, 1, {
        "PatchChild:BranchScopes:#text/0": {
          "PatchChild:#childScope/0": {
            "PatchClientBranch:#text/0": [{
              "PatchSetup:": {
                "PatchAttr:#input/0 id": _.d = "sM_.#childScope/0@0[1].#childScope/0@0.#text/0@0.uid",
                "PatchAttr:#label/1 for": _.d
              }
            }, _.e]
          }
        }
      }]
    },
    "PatchClientBranch:2": {
      "PatchText:#text/2": "b"
    }
  }, "packages/runtime-tags/src/__tests__/fixtures/patch-kept-content-id-created-client-rows-await-settled-two/template.marko_1*shell"],
  "PatchMarkedWrite:input_label": "b"
}
(_.b.f(0), 0)
;Cxg

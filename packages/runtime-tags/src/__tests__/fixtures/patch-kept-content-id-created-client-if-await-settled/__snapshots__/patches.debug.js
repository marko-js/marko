// PATCH
[`packages/runtime-tags/src/__tests__/fixtures/patch-kept-content-id-created-client-if-await-settled/template.marko_2*content|2; b D ;<input><label> </label>`, `packages/runtime-tags/src/__tests__/fixtures/patch-kept-content-id-created-client-if-await-settled/template.marko_1*shell !#childScope/0>packages/runtime-tags/src/__tests__/fixtures/patch-kept-content-id-created-client-if-await-settled/tags/outer.marko_0;/ b%c&b;<button>x</button><!><!><!>`]
{
  "PatchBranch:#text/0": [{
    "PatchChild:#childScope/0": {
      "PatchRender:packages/runtime-tags/src/__tests__/fixtures/patch-kept-content-id-created-client-if-await-settled/tags/outer.marko_1_input_promise#0:5/setup": "input_promise",
      "PatchSetupValues:": {
        "PatchBindFill:packages/runtime-tags/src/__tests__/fixtures/patch-kept-content-id-created-client-if-await-settled/tags/outer.marko_0_c#6/fill": "^=packages/runtime-tags/src/__tests__/fixtures/patch-kept-content-id-created-client-if-await-settled/template.marko_2*content"
      },
      "PatchSetup:": {
        "PatchWrite:input_promise": (p => p = new Promise((f, r) => _.a = {
          f,
          r(e) {
            p.catch(_ => 0);
            r(e)
          }
        }))()
      },
      "PatchClientBranch:#text/1": [{
        "PatchChild:BranchScopes:#text/0": {
          "PatchChild:#childScope/0": {
            "PatchClientBranch:#text/0": [{
              "PatchSetup:": {
                "PatchAttr:#input/0 id": _.b = "sM_.#childScope/0@0.#childScope/0@0.#text/0@0.uid",
                "PatchAttr:#label/1 for": _.b
              }
            }, "packages/runtime-tags/src/__tests__/fixtures/patch-kept-content-id-created-client-if-await-settled/template.marko_2*content"]
          }
        }
      }, 0]
    },
    "PatchClientBranch:2": {
      "PatchText:#text/2": "b"
    }
  }, "packages/runtime-tags/src/__tests__/fixtures/patch-kept-content-id-created-client-if-await-settled/template.marko_1*shell"],
  "PatchMarkedWrite:input_label": "b"
}
(_.a.f(0), 0)
;Cxg

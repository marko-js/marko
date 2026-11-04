// PATCH
`packages/runtime-tags/src/__tests__/fixtures/patch-let-content-id-created-client-if-await-settled/template.marko_1*shell !#childScope/0>packages/runtime-tags/src/__tests__/fixtures/patch-let-content-id-created-client-if-await-settled/tags/outer.marko_0;/ b%c&b;<button>x</button><!><!><!>`
{
  "PatchBranch:#text/0": [{
    "PatchChild:#childScope/0": {
      "PatchRender:packages/runtime-tags/src/__tests__/fixtures/patch-let-content-id-created-client-if-await-settled/tags/outer.marko_1_input_promise#0:5/setup": "input_promise",
      "PatchSetupValues:": {
        "PatchBindFill:packages/runtime-tags/src/__tests__/fixtures/patch-let-content-id-created-client-if-await-settled/tags/outer.marko_0_c#6/fill": "^packages/runtime-tags/src/__tests__/fixtures/patch-let-content-id-created-client-if-await-settled/template.marko_2*content"
      },
      "PatchSetup:": {
        "PatchWrite:input_promise": (p => p = new Promise((f, r) => _.a = {
          f,
          r(e) {
            p.catch(_ => 0);
            r(e)
          }
        }))()
      }
    }
  }, "packages/runtime-tags/src/__tests__/fixtures/patch-let-content-id-created-client-if-await-settled/template.marko_1*shell"],
  "PatchMarkedWrite:input_label": "b",
  "PatchSubscribers:packages/runtime-tags/src/__tests__/fixtures/patch-let-content-id-created-client-if-await-settled/template.marko_0_input_label#4/subscribers": "input_label"
}
(_.a.f(0), 0)
;CgM

// PATCH
`packages/runtime-tags/src/__tests__/fixtures/patch-let-content-id-in-await/template.marko_1*shell !#childScope/0>packages/runtime-tags/src/__tests__/fixtures/patch-let-content-id-in-await/tags/card.marko_0;/D b%b%l&;<section><button>clear</button><!><!></section>`
{
  "PatchBranch:#text/0": [{
    "PatchChild:#childScope/0": {
      "PatchSetup:": {
        "PatchDynamicTag:#text/1": _.a = "^^packages/runtime-tags/src/__tests__/fixtures/patch-let-content-id-in-await/template.marko_2*content",
        "PatchDynamicTag:#text/2": _.a
      }
    }
  }, "packages/runtime-tags/src/__tests__/fixtures/patch-let-content-id-in-await/template.marko_1*shell"],
  "PatchMarkedWrite:input_p": (p => p = new Promise((f, r) => _.b = {
    f,
    r(e) {
      p.catch(_ => 0);
      r(e)
    }
  }))(),
  "PatchSubscribers:packages/runtime-tags/src/__tests__/fixtures/patch-let-content-id-in-await/template.marko_0_input_p#4/subscribers": "input_p",
  "PatchMarkedWrite:input_label": "b",
  "PatchSubscribers:packages/runtime-tags/src/__tests__/fixtures/patch-let-content-id-in-await/template.marko_0_input_label#5/subscribers": "input_label"
}
(_.b.f("y"), 0)
;BgI

// PATCH holding BgI
{
  "PatchBranch:#text/0": [{
    "PatchChild:#childScope/0": {
      "PatchSetup:": {
        "PatchDynamicTag:#text/1": _.a = "^^packages/runtime-tags/src/__tests__/fixtures/patch-let-content-id-in-await/template.marko_2*content",
        "PatchDynamicTag:#text/2": _.a
      }
    }
  }, "packages/runtime-tags/src/__tests__/fixtures/patch-let-content-id-in-await/template.marko_1*shell"],
  "PatchMarkedWrite:input_p": (p => p = new Promise((f, r) => _.b = {
    f,
    r(e) {
      p.catch(_ => 0);
      r(e)
    }
  }))(),
  "PatchSubscribers:packages/runtime-tags/src/__tests__/fixtures/patch-let-content-id-in-await/template.marko_0_input_p#4/subscribers": "input_p",
  "PatchMarkedWrite:input_label": "c",
  "PatchSubscribers:packages/runtime-tags/src/__tests__/fixtures/patch-let-content-id-in-await/template.marko_0_input_label#5/subscribers": "input_label"
}
(_.b.f("z"), 0)

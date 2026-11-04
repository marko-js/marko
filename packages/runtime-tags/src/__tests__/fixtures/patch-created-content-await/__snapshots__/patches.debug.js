// PATCH
`packages/runtime-tags/src/__tests__/fixtures/patch-created-content-await/template.marko_3*shell !#childScope/0>packages/runtime-tags/src/__tests__/fixtures/patch-created-content-await/tags/card.marko_0;/D b%l&;<section><button>clear</button><!></section>`
{
  "PatchBranch:#text/0": [{
    "PatchChild:#childScope/0": {
      "PatchSetup:": {
        "PatchDynamicTag:#text/1": "^^^packages/runtime-tags/src/__tests__/fixtures/patch-created-content-await/template.marko_1*content"
      }
    }
  }, "packages/runtime-tags/src/__tests__/fixtures/patch-created-content-await/template.marko_3*shell"],
  "PatchMarkedWrite:input_p": (p => p = new Promise((f, r) => _.a = {
    f,
    r(e) {
      p.catch(_ => 0);
      r(e)
    }
  }))(),
  "PatchSubscribers:packages/runtime-tags/src/__tests__/fixtures/patch-created-content-await/template.marko_0_input_p#3/subscribers": "input_p",
  "PatchMarkedWrite:input_label": "b",
  "PatchSubscribers:packages/runtime-tags/src/__tests__/fixtures/patch-created-content-await/template.marko_0_input_label#4/subscribers": "input_label"
}
(_.a.f("y"), 0)
;BgI

// PATCH holding BgI
{
  "PatchBranch:#text/0": [{
    "PatchChild:#childScope/0": {
      "PatchSetup:": {
        "PatchDynamicTag:#text/1": "^^^packages/runtime-tags/src/__tests__/fixtures/patch-created-content-await/template.marko_1*content"
      }
    }
  }, "packages/runtime-tags/src/__tests__/fixtures/patch-created-content-await/template.marko_3*shell"],
  "PatchMarkedWrite:input_p": (p => p = new Promise((f, r) => _.a = {
    f,
    r(e) {
      p.catch(_ => 0);
      r(e)
    }
  }))(),
  "PatchSubscribers:packages/runtime-tags/src/__tests__/fixtures/patch-created-content-await/template.marko_0_input_p#3/subscribers": "input_p",
  "PatchMarkedWrite:input_label": "c",
  "PatchSubscribers:packages/runtime-tags/src/__tests__/fixtures/patch-created-content-await/template.marko_0_input_label#4/subscribers": "input_label"
}
(_.a.f("z"), 0)

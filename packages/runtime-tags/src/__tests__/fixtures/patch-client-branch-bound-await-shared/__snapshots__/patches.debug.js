// PATCH
`packages/runtime-tags/src/__tests__/fixtures/patch-client-branch-bound-await-shared/template.marko_1*shell !#childScope/0>packages/runtime-tags/src/__tests__/fixtures/patch-client-branch-bound-await-shared/tags/card.marko_0;/D b%l&;<section><button>clear</button><!></section>`
{
  "PatchBranch:#text/0": [{
    "PatchChild:#childScope/0": {
      "PatchSetup:": {
        "PatchDynamicTag:#text/1": "^^packages/runtime-tags/src/__tests__/fixtures/patch-client-branch-bound-await-shared/template.marko_2*content"
      }
    }
  }, "packages/runtime-tags/src/__tests__/fixtures/patch-client-branch-bound-await-shared/template.marko_1*shell"],
  "PatchMarkedWrite:input_label": "b",
  "PatchSubscribers:packages/runtime-tags/src/__tests__/fixtures/patch-client-branch-bound-await-shared/template.marko_0_input_label#4/subscribers": "input_label",
  "PatchMarkedWrite:input_tag": "span",
  "PatchSubscribers:packages/runtime-tags/src/__tests__/fixtures/patch-client-branch-bound-await-shared/template.marko_0_input_tag#5/subscribers": "input_tag",
  "PatchMarkedWrite:input_p": (p => p = new Promise((f, r) => _.a = {
    f,
    r(e) {
      p.catch(_ => 0);
      r(e)
    }
  }))(),
  "PatchSubscribers:packages/runtime-tags/src/__tests__/fixtures/patch-client-branch-bound-await-shared/template.marko_0_input_p#6/subscribers": "input_p"
}
(_.a.f("y"), 0)
;BgI

// PATCH holding BgI
{
  "PatchBranch:#text/0": [{
    "PatchChild:#childScope/0": {
      "PatchSetup:": {
        "PatchDynamicTag:#text/1": "^^packages/runtime-tags/src/__tests__/fixtures/patch-client-branch-bound-await-shared/template.marko_2*content"
      }
    }
  }, "packages/runtime-tags/src/__tests__/fixtures/patch-client-branch-bound-await-shared/template.marko_1*shell"],
  "PatchMarkedWrite:input_label": "c",
  "PatchSubscribers:packages/runtime-tags/src/__tests__/fixtures/patch-client-branch-bound-await-shared/template.marko_0_input_label#4/subscribers": "input_label",
  "PatchMarkedWrite:input_tag": "i",
  "PatchSubscribers:packages/runtime-tags/src/__tests__/fixtures/patch-client-branch-bound-await-shared/template.marko_0_input_tag#5/subscribers": "input_tag",
  "PatchMarkedWrite:input_p": (p => p = new Promise((f, r) => _.a = {
    f,
    r(e) {
      p.catch(_ => 0);
      r(e)
    }
  }))(),
  "PatchSubscribers:packages/runtime-tags/src/__tests__/fixtures/patch-client-branch-bound-await-shared/template.marko_0_input_p#6/subscribers": "input_p"
}
(_.a.f("z"), 0)

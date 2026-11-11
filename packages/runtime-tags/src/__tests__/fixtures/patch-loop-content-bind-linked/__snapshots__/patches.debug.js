// PATCH
`packages/runtime-tags/src/__tests__/fixtures/patch-loop-content-bind-linked/tags/list.marko_1*shell packages/runtime-tags/src/__tests__/fixtures/patch-loop-content-bind-linked/tags/list.marko_1_open#0:7/setup;b%;<!><!><!>`
{
  "PatchMarkedWrite:input_note": "y",
  "PatchSubscribers:packages/runtime-tags/src/__tests__/fixtures/patch-loop-content-bind-linked/template.marko_0_input_note#3/subscribers": "input_note",
  "PatchChild:#childScope/0": {
    "PatchLoop:#text/2": [{
      "PatchBind:item_content": [_.a = "^^packages/runtime-tags/src/__tests__/fixtures/patch-loop-content-bind-linked/template.marko_1*content", {
        label: "a"
      }],
      "PatchRender:packages/runtime-tags/src/__tests__/fixtures/patch-loop-content-bind-linked/tags/list.marko_2_item_content#1:3/setup": "item_content"
    }, {
      "PatchBind:item_content": [_.a, {
        label: "b"
      }],
      "PatchRender:packages/runtime-tags/src/__tests__/fixtures/patch-loop-content-bind-linked/tags/list.marko_2_item_content#1:3/setup": "item_content"
    }, {
      "PatchBind:item_content": [_.a, {
        label: "c"
      }],
      "PatchRender:packages/runtime-tags/src/__tests__/fixtures/patch-loop-content-bind-linked/tags/list.marko_2_item_content#1:3/setup": "item_content"
    }, "packages/runtime-tags/src/__tests__/fixtures/patch-loop-content-bind-linked/tags/list.marko_1*shell"],
    "PatchEffect:": "packages/runtime-tags/src/__tests__/fixtures/patch-loop-content-bind-linked/tags/list.marko_0_input_onPick#5",
    "PatchBind:input_onPick": "^packages/runtime-tags/src/__tests__/fixtures/patch-loop-content-bind-linked/template.marko_0/onPick"
  }
}
;BgE

// PATCH holding BgE
{
  "PatchMarkedWrite:input_note": "z",
  "PatchSubscribers:packages/runtime-tags/src/__tests__/fixtures/patch-loop-content-bind-linked/template.marko_0_input_note#3/subscribers": "input_note",
  "PatchChild:#childScope/0": {
    "PatchLoop:#text/2": [{
      "PatchBind:item_content": ["^^packages/runtime-tags/src/__tests__/fixtures/patch-loop-content-bind-linked/template.marko_1*content", {
        label: "c"
      }],
      "PatchRender:packages/runtime-tags/src/__tests__/fixtures/patch-loop-content-bind-linked/tags/list.marko_2_item_content#1:3/setup": "item_content"
    }, "packages/runtime-tags/src/__tests__/fixtures/patch-loop-content-bind-linked/tags/list.marko_1*shell"],
    "PatchEffect:": "packages/runtime-tags/src/__tests__/fixtures/patch-loop-content-bind-linked/tags/list.marko_0_input_onPick#5",
    "PatchBind:input_onPick": "^packages/runtime-tags/src/__tests__/fixtures/patch-loop-content-bind-linked/template.marko_0/onPick"
  }
}

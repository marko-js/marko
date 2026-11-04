// PATCH
`packages/runtime-tags/src/__tests__/fixtures/patch-loop-content-bind-same-input/tags/list.marko_1*shell packages/runtime-tags/src/__tests__/fixtures/patch-loop-content-bind-same-input/tags/list.marko_1_open#0:5/setup;b%;<!><!><!>`
{
  "PatchChild:#childScope/0": {
    "PatchLoop:#text/1": [{
      "PatchBind:item_content": [_.a = "^^packages/runtime-tags/src/__tests__/fixtures/patch-loop-content-bind-same-input/template.marko_1*content", {
        label: "a"
      }],
      "PatchRender:packages/runtime-tags/src/__tests__/fixtures/patch-loop-content-bind-same-input/tags/list.marko_2_item_content#1:3/setup": "item_content"
    }, {
      "PatchBind:item_content": [_.a, {
        label: "b"
      }],
      "PatchRender:packages/runtime-tags/src/__tests__/fixtures/patch-loop-content-bind-same-input/tags/list.marko_2_item_content#1:3/setup": "item_content"
    }, "packages/runtime-tags/src/__tests__/fixtures/patch-loop-content-bind-same-input/tags/list.marko_1*shell"]
  },
  "PatchMarkedWrite:input_note": "x",
  "PatchSubscribers:packages/runtime-tags/src/__tests__/fixtures/patch-loop-content-bind-same-input/template.marko_0_input_note#4/subscribers": "input_note"
}
;BgE

// PATCH
`packages/runtime-tags/src/__tests__/fixtures/patch-loop-row-fills-withheld-content/template.marko_1*shell packages/runtime-tags/src/__tests__/fixtures/patch-loop-row-fills-withheld-content/template.marko_1_open#0:5/setup;/ b&;<div class=panel></div>`
{
  "PatchLoop:#text/1": [{
    "PatchMarkedWrite:p_text": "T0b",
    "PatchChild:#childScope/0": {
      "PatchRender:packages/runtime-tags/src/__tests__/fixtures/patch-loop-row-fills-withheld-content/tags/panel.marko_1_input_content#0:4/setup": _.a = "input_content",
      "PatchSetup:": {
        "PatchBind:input_content": _.b = "^packages/runtime-tags/src/__tests__/fixtures/patch-loop-row-fills-withheld-content/template.marko_2*content"
      }
    },
    "PatchSubscribers:packages/runtime-tags/src/__tests__/fixtures/patch-loop-row-fills-withheld-content/template.marko_1_p_text#3/subscribers": "p_text"
  }, {
    "PatchMarkedWrite:p_text": "T1b",
    "PatchChild:#childScope/0": {
      "PatchRender:packages/runtime-tags/src/__tests__/fixtures/patch-loop-row-fills-withheld-content/tags/panel.marko_1_input_content#0:4/setup": _.a,
      "PatchSetup:": {
        "PatchBind:input_content": _.b
      }
    },
    "PatchSubscribers:packages/runtime-tags/src/__tests__/fixtures/patch-loop-row-fills-withheld-content/template.marko_1_p_text#3/subscribers": "p_text"
  }, "packages/runtime-tags/src/__tests__/fixtures/patch-loop-row-fills-withheld-content/template.marko_1*shell"]
}
;CgM

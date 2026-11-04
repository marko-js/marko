// PATCH
`packages/runtime-tags/src/__tests__/fixtures/patch-loop-row-child-calls-chosen-fn/template.marko_1*shell;/ b&;<output></output>`
{
  "PatchMarkedWrite:input_title": "b",
  "PatchLoop:#text/0": [1, {
    "PatchChild:#childScope/0": {
      "PatchEffect:": _.a = "packages/runtime-tags/src/__tests__/fixtures/patch-loop-row-child-calls-chosen-fn/tags/label-view.marko_0_input#2",
      "PatchMarkedWrite:input": {
        get: _([], "packages/runtime-tags/src/__tests__/fixtures/patch-loop-row-child-calls-chosen-fn/template.marko_0/low")
      }
    }
  }, 2, {
    "PatchChild:#childScope/0": {
      "PatchEffect:": _.a,
      "PatchMarkedWrite:input": {
        get: _([], "packages/runtime-tags/src/__tests__/fixtures/patch-loop-row-child-calls-chosen-fn/template.marko_0/low")
      }
    }
  }, "packages/runtime-tags/src/__tests__/fixtures/patch-loop-row-child-calls-chosen-fn/template.marko_1*shell"]
}
;BgI

// PATCH holding BgI
{
  "PatchMarkedWrite:input_title": "b",
  "PatchLoop:#text/0": [2, {
    "PatchChild:#childScope/0": {
      "PatchEffect:": _.a = "packages/runtime-tags/src/__tests__/fixtures/patch-loop-row-child-calls-chosen-fn/tags/label-view.marko_0_input#2",
      "PatchMarkedWrite:input": {
        get: _([], "packages/runtime-tags/src/__tests__/fixtures/patch-loop-row-child-calls-chosen-fn/template.marko_0/up")
      }
    }
  }, 3, {
    "PatchChild:#childScope/0": {
      "PatchEffect:": _.a,
      "PatchMarkedWrite:input": {
        get: _([], "packages/runtime-tags/src/__tests__/fixtures/patch-loop-row-child-calls-chosen-fn/template.marko_0/low")
      }
    }
  }, "packages/runtime-tags/src/__tests__/fixtures/patch-loop-row-child-calls-chosen-fn/template.marko_1*shell"]
}

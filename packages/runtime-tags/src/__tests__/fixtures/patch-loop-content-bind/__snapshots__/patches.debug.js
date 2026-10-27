// PATCH
[`packages/runtime-tags/src/__tests__/fixtures/patch-loop-content-bind/tags/list.marko_1*shell packages/runtime-tags/src/__tests__/fixtures/patch-loop-content-bind/tags/list.marko_1_open#0:5/init;b%;<!><!><!>`, {
  "PatchChild:#childScope/0": {
    "PatchLoop:#text/1": [{
      "PatchBindFill:packages/runtime-tags/src/__tests__/fixtures/patch-loop-content-bind/tags/list.marko_fill1": [_.a = "^^packages/runtime-tags/src/__tests__/fixtures/patch-loop-content-bind/template.marko_1*content", {
        label: "a"
      }]
    }, {
      "PatchBindFill:packages/runtime-tags/src/__tests__/fixtures/patch-loop-content-bind/tags/list.marko_fill1": [_.a, {
        label: "b"
      }]
    }, {
      "PatchBindFill:packages/runtime-tags/src/__tests__/fixtures/patch-loop-content-bind/tags/list.marko_fill1": [_.a, {
        label: "c"
      }]
    }, "packages/runtime-tags/src/__tests__/fixtures/patch-loop-content-bind/tags/list.marko_1*shell"]
  },
  "PatchFill:packages/runtime-tags/src/__tests__/fixtures/patch-loop-content-bind/template.marko_fill0": "y"
}]
;BgE

// PATCH holding BgE
{
  "PatchChild:#childScope/0": {
    "PatchLoop:#text/1": [{
      "PatchBindFill:packages/runtime-tags/src/__tests__/fixtures/patch-loop-content-bind/tags/list.marko_fill1": ["^^packages/runtime-tags/src/__tests__/fixtures/patch-loop-content-bind/template.marko_1*content", {
        label: "c"
      }]
    }, "packages/runtime-tags/src/__tests__/fixtures/patch-loop-content-bind/tags/list.marko_1*shell"]
  },
  "PatchFill:packages/runtime-tags/src/__tests__/fixtures/patch-loop-content-bind/template.marko_fill0": "z"
}

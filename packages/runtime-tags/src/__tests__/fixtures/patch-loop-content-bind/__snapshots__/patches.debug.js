// PATCH
[`packages/runtime-tags/src/__tests__/fixtures/patch-loop-content-bind/tags/list.marko_1*shell packages/runtime-tags/src/__tests__/fixtures/patch-loop-content-bind/tags/list.marko_1_open#0:5/init;b%;<!><!><!>`, {
  "PatchValue:packages/runtime-tags/src/__tests__/fixtures/patch-loop-content-bind/template.marko_fill0": "y",
  "PatchChild:#childScope/0": {
    "PatchLoop:#text/1": [{
      "PatchBindValue:packages/runtime-tags/src/__tests__/fixtures/patch-loop-content-bind/tags/list.marko_fill1": [_.a = "packages/runtime-tags/src/__tests__/fixtures/patch-loop-content-bind/template.marko_1*content", 2, {
        label: "a"
      }]
    }, {
      "PatchBindValue:packages/runtime-tags/src/__tests__/fixtures/patch-loop-content-bind/tags/list.marko_fill1": [_.a, 2, {
        label: "b"
      }]
    }, {
      "PatchBindValue:packages/runtime-tags/src/__tests__/fixtures/patch-loop-content-bind/tags/list.marko_fill1": [_.a, 2, {
        label: "c"
      }]
    }, "packages/runtime-tags/src/__tests__/fixtures/patch-loop-content-bind/tags/list.marko_1*shell"]
  }
}]
;BgE

// PATCH holding BgE
{
  "PatchValue:packages/runtime-tags/src/__tests__/fixtures/patch-loop-content-bind/template.marko_fill0": "z",
  "PatchChild:#childScope/0": {
    "PatchLoop:#text/1": [{
      "PatchBindValue:packages/runtime-tags/src/__tests__/fixtures/patch-loop-content-bind/tags/list.marko_fill1": ["packages/runtime-tags/src/__tests__/fixtures/patch-loop-content-bind/template.marko_1*content", 2, {
        label: "c"
      }]
    }, "packages/runtime-tags/src/__tests__/fixtures/patch-loop-content-bind/tags/list.marko_1*shell"]
  }
}

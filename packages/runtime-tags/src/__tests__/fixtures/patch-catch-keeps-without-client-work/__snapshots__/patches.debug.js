// PATCH
[`packages/runtime-tags/src/__tests__/fixtures/patch-catch-keeps-without-client-work/tags/child.marko_1*content;D%c%c%;<b><!> <!> <!></b>`, `packages/runtime-tags/src/__tests__/fixtures/patch-catch-keeps-without-client-work/tags/child.marko_3*content;D%c%c%;<b><!> <!> <!></b>`]
{
  "$global:": {
    label: "b"
  },
  "PatchChild:#childScope/0": {
    "PatchCatch:#text/1": [{
      "PatchText:#text/0": "b",
      "PatchText:#text/1": "b",
      "PatchText:#text/2": "early"
    }, "packages/runtime-tags/src/__tests__/fixtures/patch-catch-keeps-without-client-work/tags/child.marko_1*content"],
    "PatchCatch:#text/2": [{
      "PatchText:#text/0": "b",
      "PatchText:#text/1": "b",
      "PatchText:#text/2": "late"
    }, "packages/runtime-tags/src/__tests__/fixtures/patch-catch-keeps-without-client-work/tags/child.marko_3*content"],
    "PatchMarkedWrite:input_label": "b",
    "PatchSubscribers:packages/runtime-tags/src/__tests__/fixtures/patch-catch-keeps-without-client-work/tags/child.marko_0_input_label#6/subscribers": "input_label"
  }
}
;DQo

// PATCH holding DQo
{
  "$global:": {
    label: "c"
  },
  "PatchChild:#childScope/0": {
    "PatchCatch:#text/1": [{
      "PatchText:#text/0": "c",
      "PatchText:#text/1": "c",
      "PatchText:#text/2": "early"
    }, "packages/runtime-tags/src/__tests__/fixtures/patch-catch-keeps-without-client-work/tags/child.marko_1*content"],
    "PatchCatch:#text/2": [{
      "PatchText:#text/0": "c",
      "PatchText:#text/1": "c",
      "PatchText:#text/2": "late"
    }, "packages/runtime-tags/src/__tests__/fixtures/patch-catch-keeps-without-client-work/tags/child.marko_3*content"],
    "PatchMarkedWrite:input_label": "c",
    "PatchSubscribers:packages/runtime-tags/src/__tests__/fixtures/patch-catch-keeps-without-client-work/tags/child.marko_0_input_label#6/subscribers": "input_label"
  }
}

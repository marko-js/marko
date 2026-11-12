// PATCH
[`packages/runtime-tags/src/__tests__/fixtures/patch-catch-follows-caller-client-state/tags/child.marko_1*content;D%c%c%;<b><!> <!> <!></b>`, `packages/runtime-tags/src/__tests__/fixtures/patch-catch-follows-caller-client-state/tags/child.marko_3*content;D%c%c%;<b><!> <!> <!></b>`]
{
  "$global:": {
    label: "b"
  },
  "PatchChild:#childScope/2": {
    "PatchCatch:#text/1": [{
      "PatchText:#text/0": "b",
      "PatchText:#text/1": "b",
      "PatchText:#text/2": "early",
      "PatchSetup:": {
        "PatchRender:": "packages/runtime-tags/src/__tests__/fixtures/patch-catch-follows-caller-client-state/tags/child.marko_1_$global_label#0:13/subscribe",
        "PatchSubscribers:packages/runtime-tags/src/__tests__/fixtures/patch-catch-follows-caller-client-state/tags/child.marko_1_input_label#0:6/subscribe": 0
      }
    }, "packages/runtime-tags/src/__tests__/fixtures/patch-catch-follows-caller-client-state/tags/child.marko_1*content"],
    "PatchCatch:#text/2": [{
      "PatchText:#text/0": "b",
      "PatchText:#text/1": "b",
      "PatchText:#text/2": "late",
      "PatchSetup:": {
        "PatchRender:": "packages/runtime-tags/src/__tests__/fixtures/patch-catch-follows-caller-client-state/tags/child.marko_3_$global_label#0:13/subscribe",
        "PatchSubscribers:packages/runtime-tags/src/__tests__/fixtures/patch-catch-follows-caller-client-state/tags/child.marko_3_input_label#0:6/subscribe": 0
      }
    }, "packages/runtime-tags/src/__tests__/fixtures/patch-catch-follows-caller-client-state/tags/child.marko_3*content"],
    "PatchMarkedWrite:input_label": "b",
    "PatchSubscribers:packages/runtime-tags/src/__tests__/fixtures/patch-catch-follows-caller-client-state/tags/child.marko_0_input_label#6/subscribers": "input_label"
  }
}
;DQo

// PATCH holding DQo
{
  "$global:": {
    label: "c"
  },
  "PatchChild:#childScope/2": {
    "PatchCatch:#text/1": [{
      "PatchText:#text/0": "c",
      "PatchText:#text/1": "c",
      "PatchText:#text/2": "early",
      "PatchSetup:": {
        "PatchRender:": "packages/runtime-tags/src/__tests__/fixtures/patch-catch-follows-caller-client-state/tags/child.marko_1_$global_label#0:13/subscribe",
        "PatchSubscribers:packages/runtime-tags/src/__tests__/fixtures/patch-catch-follows-caller-client-state/tags/child.marko_1_input_label#0:6/subscribe": 0
      }
    }, "packages/runtime-tags/src/__tests__/fixtures/patch-catch-follows-caller-client-state/tags/child.marko_1*content"],
    "PatchCatch:#text/2": [{
      "PatchText:#text/0": "c",
      "PatchText:#text/1": "c",
      "PatchText:#text/2": "late",
      "PatchSetup:": {
        "PatchRender:": "packages/runtime-tags/src/__tests__/fixtures/patch-catch-follows-caller-client-state/tags/child.marko_3_$global_label#0:13/subscribe",
        "PatchSubscribers:packages/runtime-tags/src/__tests__/fixtures/patch-catch-follows-caller-client-state/tags/child.marko_3_input_label#0:6/subscribe": 0
      }
    }, "packages/runtime-tags/src/__tests__/fixtures/patch-catch-follows-caller-client-state/tags/child.marko_3*content"],
    "PatchMarkedWrite:input_label": "c",
    "PatchSubscribers:packages/runtime-tags/src/__tests__/fixtures/patch-catch-follows-caller-client-state/tags/child.marko_0_input_label#6/subscribers": "input_label"
  }
}

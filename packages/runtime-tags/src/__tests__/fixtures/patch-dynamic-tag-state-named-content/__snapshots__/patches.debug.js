// PATCH
[`packages/runtime-tags/src/__tests__/fixtures/patch-dynamic-tag-state-named-content/template.marko_2*content`, `packages/runtime-tags/src/__tests__/fixtures/patch-dynamic-tag-state-named-content/template.marko_1*shell !#childScope/0>packages/runtime-tags/src/__tests__/fixtures/patch-dynamic-tag-state-named-content/tags/keep.marko_0;/ bD%l&;<button class=reset>reset</button><div><!></div>`]
{
  "PatchLoop:#text/0": [{
    "PatchMarkedWrite:b": 1,
    "PatchChild:#childScope/0": {
      "PatchSetup:": {
        "PatchDynamicTag:#text/1": _.a = "^^packages/runtime-tags/src/__tests__/fixtures/patch-dynamic-tag-state-named-content/template.marko_2*content",
        "PatchChild:BranchScopes:#text/1": {
          "PatchText:#text/0": 1,
          "PatchText:#text/1": "b"
        },
        "PatchBind:input_content": _.b = "^packages/runtime-tags/src/__tests__/fixtures/patch-dynamic-tag-state-named-content/template.marko_2*content"
      }
    },
    "PatchSubscribers:packages/runtime-tags/src/__tests__/fixtures/patch-dynamic-tag-state-named-content/template.marko_1_b#2/subscribers": "b"
  }, {
    "PatchMarkedWrite:b": 2,
    "PatchChild:#childScope/0": {
      "PatchSetup:": {
        "PatchDynamicTag:#text/1": _.a,
        "PatchChild:BranchScopes:#text/1": {
          "PatchText:#text/0": 2,
          "PatchText:#text/1": "b"
        },
        "PatchBind:input_content": _.b
      }
    },
    "PatchSubscribers:packages/runtime-tags/src/__tests__/fixtures/patch-dynamic-tag-state-named-content/template.marko_1_b#2/subscribers": "b"
  }, "packages/runtime-tags/src/__tests__/fixtures/patch-dynamic-tag-state-named-content/template.marko_1*shell"],
  "PatchSubscribers:packages/runtime-tags/src/__tests__/fixtures/patch-dynamic-tag-state-named-content/template.marko_0_input_note#4/subscribers": "input_note",
  "PatchMarkedWrite:input_note": "b"
}
;CQw

// PATCH holding CQw
{
  "PatchLoop:#text/0": [{
    "PatchMarkedWrite:b": 2,
    "PatchChild:#childScope/0": {
      "PatchSetup:": {
        "PatchDynamicTag:#text/1": "^^packages/runtime-tags/src/__tests__/fixtures/patch-dynamic-tag-state-named-content/template.marko_2*content",
        "PatchChild:BranchScopes:#text/1": {
          "PatchText:#text/0": 2,
          "PatchText:#text/1": "c"
        },
        "PatchBind:input_content": "^packages/runtime-tags/src/__tests__/fixtures/patch-dynamic-tag-state-named-content/template.marko_2*content"
      }
    },
    "PatchSubscribers:packages/runtime-tags/src/__tests__/fixtures/patch-dynamic-tag-state-named-content/template.marko_1_b#2/subscribers": "b"
  }, "packages/runtime-tags/src/__tests__/fixtures/patch-dynamic-tag-state-named-content/template.marko_1*shell"],
  "PatchSubscribers:packages/runtime-tags/src/__tests__/fixtures/patch-dynamic-tag-state-named-content/template.marko_0_input_note#4/subscribers": "input_note",
  "PatchMarkedWrite:input_note": "c"
}

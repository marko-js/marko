// PATCH
[`packages/runtime-tags/src/__tests__/fixtures/patch-dynamic-tag-body-let-content/tags/card.marko !;b%;<!><!><!>`, `packages/runtime-tags/src/__tests__/fixtures/patch-dynamic-tag-body-let-content/template.marko_1*content`]
{
  "PatchDynamicTag:#text/0": ["packages/runtime-tags/src/__tests__/fixtures/patch-dynamic-tag-body-let-content/tags/card.marko", "packages/runtime-tags/src/__tests__/fixtures/patch-dynamic-tag-body-let-content/template.marko_1*content"],
  "PatchChild:BranchScopes:#text/0": {
    "PatchRender:packages/runtime-tags/src/__tests__/fixtures/patch-dynamic-tag-body-let-content/tags/card.marko_0_input_p#4_c#5/setup": "input_p",
    "PatchSetupValues:": {
      "PatchBindFill:packages/runtime-tags/src/__tests__/fixtures/patch-dynamic-tag-body-let-content/tags/card.marko_fill0": "^packages/runtime-tags/src/__tests__/fixtures/patch-dynamic-tag-body-let-content/template.marko_1*content"
    },
    "PatchMarkedWrite:input_p": (p => p = new Promise((f, r) => _.a = {
      f,
      r(e) {
        p.catch(_ => 0);
        r(e)
      }
    }))()
  },
  "PatchSubscribers:packages/runtime-tags/src/__tests__/fixtures/patch-dynamic-tag-body-let-content/template.marko_0_input_note#6/subscribers": "input_note",
  "PatchMarkedWrite:input_note": "b"
}
(_.a.f(1), 0)
;CQk

// PATCH holding CQk
{
  "PatchDynamicTag:#text/0": ["packages/runtime-tags/src/__tests__/fixtures/patch-dynamic-tag-body-let-content/tags/card.marko", "packages/runtime-tags/src/__tests__/fixtures/patch-dynamic-tag-body-let-content/template.marko_1*content"],
  "PatchChild:BranchScopes:#text/0": {
    "PatchRender:packages/runtime-tags/src/__tests__/fixtures/patch-dynamic-tag-body-let-content/tags/card.marko_0_input_p#4_c#5/setup": "input_p",
    "PatchSetupValues:": {
      "PatchBindFill:packages/runtime-tags/src/__tests__/fixtures/patch-dynamic-tag-body-let-content/tags/card.marko_fill0": "^packages/runtime-tags/src/__tests__/fixtures/patch-dynamic-tag-body-let-content/template.marko_1*content"
    },
    "PatchMarkedWrite:input_p": (p => p = new Promise((f, r) => _.a = {
      f,
      r(e) {
        p.catch(_ => 0);
        r(e)
      }
    }))()
  },
  "PatchSubscribers:packages/runtime-tags/src/__tests__/fixtures/patch-dynamic-tag-body-let-content/template.marko_0_input_note#6/subscribers": "input_note",
  "PatchMarkedWrite:input_note": "c"
}
(_.a.f(1), 0)

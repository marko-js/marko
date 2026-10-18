// PATCH
[`packages/runtime-tags/src/__tests__/fixtures/patch-dynamic-tag-body-let-content/tags/card.marko;b%;<!><!><!>`, {
  "PatchDynamicTag:#text/0": "packages/runtime-tags/src/__tests__/fixtures/patch-dynamic-tag-body-let-content/tags/card.marko",
  "PatchChild:BranchScopes:#text/0": {
    "PatchSetup:": {
      "PatchBindValue:packages/runtime-tags/src/__tests__/fixtures/patch-dynamic-tag-body-let-content/tags/card.marko_fill1": ["packages/runtime-tags/src/__tests__/fixtures/patch-dynamic-tag-body-let-content/template.marko_1*content", 1]
    },
    "PatchValue:packages/runtime-tags/src/__tests__/fixtures/patch-dynamic-tag-body-let-content/tags/card.marko_fill0": (p => p = new Promise((f, r) => _.a = {
      f,
      r(e) {
        p.catch(_ => 0);
        r(e)
      }
    }))()
  },
  "PatchValue:packages/runtime-tags/src/__tests__/fixtures/patch-dynamic-tag-body-let-content/template.marko_fill0": "b"
}]
(_.a.f(1), 0)
;CAA

// PATCH holding CAA
{
  "PatchDynamicTag:#text/0": "packages/runtime-tags/src/__tests__/fixtures/patch-dynamic-tag-body-let-content/tags/card.marko",
  "PatchChild:BranchScopes:#text/0": {
    "PatchSetup:": {
      "PatchBindValue:packages/runtime-tags/src/__tests__/fixtures/patch-dynamic-tag-body-let-content/tags/card.marko_fill1": ["packages/runtime-tags/src/__tests__/fixtures/patch-dynamic-tag-body-let-content/template.marko_1*content", 1]
    },
    "PatchValue:packages/runtime-tags/src/__tests__/fixtures/patch-dynamic-tag-body-let-content/tags/card.marko_fill0": (p => p = new Promise((f, r) => _.a = {
      f,
      r(e) {
        p.catch(_ => 0);
        r(e)
      }
    }))()
  },
  "PatchValue:packages/runtime-tags/src/__tests__/fixtures/patch-dynamic-tag-body-let-content/template.marko_fill0": "c"
}
(_.a.f(1), 0)

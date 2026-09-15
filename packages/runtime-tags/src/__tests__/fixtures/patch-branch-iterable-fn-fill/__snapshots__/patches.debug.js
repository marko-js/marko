// PATCH
(_.a = {
  1: "packages/runtime-tags/src/__tests__/fixtures/patch-branch-iterable-fn-fill/template.marko_0/getTitle",
  "PatchValue:packages/runtime-tags/src/__tests__/fixtures/patch-branch-iterable-fn-fill/template.marko0": {
    label: "b",
    *[(_.b = [bind(1)], Symbol.iterator)]() {
      yield* _.b
    }
  },
  "PatchValue:packages/runtime-tags/src/__tests__/fixtures/patch-branch-iterable-fn-fill/template.marko1": "b",
  "PatchWrite:input_title": "b",
  "PatchWrite:getTitle": bind(1)
}, _.a)

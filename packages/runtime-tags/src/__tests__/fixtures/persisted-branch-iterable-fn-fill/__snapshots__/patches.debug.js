// PATCH
{
  1: "packages/runtime-tags/src/__tests__/fixtures/persisted-branch-iterable-fn-fill/template.marko_0/getTitle",
  "PatchValue:packages/runtime-tags/src/__tests__/fixtures/persisted-branch-iterable-fn-fill/template.marko0": {
    label: "b",
    *[(_.a = [bind(1)], Symbol.iterator)]() {
      yield* _.a
    }
  },
  "PatchValue:packages/runtime-tags/src/__tests__/fixtures/persisted-branch-iterable-fn-fill/template.marko1": "b",
  "PatchWrite:input_title": "b",
  "PatchWrite:getTitle": bind(1)
}

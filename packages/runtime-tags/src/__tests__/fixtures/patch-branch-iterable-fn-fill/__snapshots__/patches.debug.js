// PATCH
{
  "PatchMarkedWrite:input_title": "b",
  "PatchBind:getTitle": "packages/runtime-tags/src/__tests__/fixtures/patch-branch-iterable-fn-fill/template.marko_0/getTitle",
  "PatchRender:packages/runtime-tags/src/__tests__/fixtures/patch-branch-iterable-fn-fill/template.marko_1_api#0:6/setup": "api input_title",
  "PatchRender:packages/runtime-tags/src/__tests__/fixtures/patch-branch-iterable-fn-fill/template.marko_1_api_label#0:7/setup": "api_label",
  "PatchMarkedWrite:api": {
    label: "b",
    *[(_.a = [_([], "packages/runtime-tags/src/__tests__/fixtures/patch-branch-iterable-fn-fill/template.marko_0/getTitle")], Symbol.iterator)]() {
      yield* _.a
    }
  },
  "PatchMarkedWrite:api_label": "b"
}

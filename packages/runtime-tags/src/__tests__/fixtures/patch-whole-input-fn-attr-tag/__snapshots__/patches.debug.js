// PATCH
{
  "PatchMarkedWrite:input_label": "b",
  "PatchChild:#childScope/0": {
    "PatchWrite:input": {
      read: _([], "packages/runtime-tags/src/__tests__/fixtures/patch-whole-input-fn-attr-tag/template.marko_0/read"),
      onRead: _([], "packages/runtime-tags/src/__tests__/fixtures/patch-whole-input-fn-attr-tag/template.marko_0/onRead"),
      opt: {
        v: "b",
        *[Symbol.iterator]() {
          yield this
        }
      }
    }
  }
}

// PATCH
{
  "PatchFill:packages/runtime-tags/src/__tests__/fixtures/patch-try-stateful-branch-catch-error/template.marko_fill0": "b",
  "PatchFill:packages/runtime-tags/src/__tests__/fixtures/patch-try-stateful-branch-catch-error/template.marko_fill1": (p => p = new Promise((f, r) => _.a = {
    f,
    r(e) {
      p.catch(_ => 0);
      r(e)
    }
  }))()
}
(_.a.r(_.a = new Error("boom two", {
  cause: new Error("cause")
})), 0)

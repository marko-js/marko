// PATCH
{
  "PatchFill:packages/runtime-tags/src/__tests__/fixtures/patch-let-assigned-by-child/template.marko_fill0": (p => p = new Promise((f, r) => _.a = {
    f,
    r(e) {
      p.catch(_ => 0);
      r(e)
    }
  }))()
}
(_.a.f("ho"), 0)

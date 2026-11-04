// PATCH
{
  "PatchSubscribers:packages/runtime-tags/src/__tests__/fixtures/patch-try-stateful-branch-catch-error/template.marko_0_input_title#4/subscribers": "input_title",
  "PatchSubscribers:packages/runtime-tags/src/__tests__/fixtures/patch-try-stateful-branch-catch-error/template.marko_0_input_p#5/subscribers": "input_p",
  "PatchMarkedWrite:input_title": "b",
  "PatchMarkedWrite:input_p": (p => p = new Promise((f, r) => _.a = {
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

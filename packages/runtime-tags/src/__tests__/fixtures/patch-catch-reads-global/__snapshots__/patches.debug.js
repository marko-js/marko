// PATCH
[`packages/runtime-tags/src/__tests__/fixtures/patch-catch-reads-global/template.marko_3*content`, `packages/runtime-tags/src/__tests__/fixtures/patch-catch-reads-global/template.marko_4*content;D ;<i> </i>`, `packages/runtime-tags/src/__tests__/fixtures/patch-catch-reads-global/template.marko_5*content`, `packages/runtime-tags/src/__tests__/fixtures/patch-catch-reads-global/template.marko_6*content;D ;<i> </i>`]
{
  "$global:": {
    label: "g1",
    p: (p => p = new Promise((f, r) => _.a = {
      f,
      r(e) {
        p.catch(_ => 0);
        r(e)
      }
    }))()
  },
  "PatchCatch:#text/0": [{
    "PatchText:#text/0": "g1 early",
    "PatchPending:#text/1": "packages/runtime-tags/src/__tests__/fixtures/patch-catch-reads-global/template.marko_4*content",
    "PatchSetup:": {
      "PatchRender:": "packages/runtime-tags/src/__tests__/fixtures/patch-catch-reads-global/template.marko_3_$global_label#0:10_err_message#4 packages/runtime-tags/src/__tests__/fixtures/patch-catch-reads-global/template.marko_3_$global_p#0:14",
      "PatchWrite:err_message": "early"
    },
    "PatchChild:BranchScopes:#text/1": {
      "PatchText:#text/0": "x"
    }
  }, "packages/runtime-tags/src/__tests__/fixtures/patch-catch-reads-global/template.marko_3*content"],
  "PatchCatch:#text/1": [{
    "PatchText:#text/0": "g1 late",
    "PatchPending:#text/1": "packages/runtime-tags/src/__tests__/fixtures/patch-catch-reads-global/template.marko_6*content",
    "PatchSetup:": {
      "PatchRender:": "packages/runtime-tags/src/__tests__/fixtures/patch-catch-reads-global/template.marko_5_$global_label#0:10_err_message#4 packages/runtime-tags/src/__tests__/fixtures/patch-catch-reads-global/template.marko_5_$global_p#0:14",
      "PatchWrite:err_message": "late"
    },
    "PatchChild:BranchScopes:#text/1": {
      "PatchText:#text/0": "x"
    }
  }, "packages/runtime-tags/src/__tests__/fixtures/patch-catch-reads-global/template.marko_5*content"]
}
(_.a.f("x"), 0)
;E2gB

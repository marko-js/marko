// PATCH
[`packages/runtime-tags/src/__tests__/fixtures/patch-catch-created-reads-global/template.marko_3*content packages/runtime-tags/src/__tests__/fixtures/patch-catch-created-reads-global/template.marko_3_$global_label#0:10/subscribe packages/runtime-tags/src/__tests__/fixtures/patch-catch-created-reads-global/template.marko_3_$global_p#0:14/subscribe`, `packages/runtime-tags/src/__tests__/fixtures/patch-catch-created-reads-global/template.marko_4*content;D ;<i> </i>`, `packages/runtime-tags/src/__tests__/fixtures/patch-catch-created-reads-global/template.marko_5*content packages/runtime-tags/src/__tests__/fixtures/patch-catch-created-reads-global/template.marko_5_$global_label#0:10/subscribe packages/runtime-tags/src/__tests__/fixtures/patch-catch-created-reads-global/template.marko_5_$global_p#0:14/subscribe`, `packages/runtime-tags/src/__tests__/fixtures/patch-catch-created-reads-global/template.marko_6*content;D ;<i> </i>`]
{
  "$global:": {
    label: "g2",
    p: (p => p = new Promise((f, r) => _.a = {
      f,
      r(e) {
        p.catch(_ => 0);
        r(e)
      }
    }))()
  },
  "PatchCatch:#text/0": [{
    "PatchText:#text/0": "g2 early",
    "PatchPending:#text/1": "packages/runtime-tags/src/__tests__/fixtures/patch-catch-created-reads-global/template.marko_4*content",
    "PatchSetup:": {
      "PatchWrite:err_message": "early"
    },
    "PatchChild:BranchScopes:#text/1": {
      "PatchText:#text/0": "y"
    }
  }, "packages/runtime-tags/src/__tests__/fixtures/patch-catch-created-reads-global/template.marko_3*content"],
  "PatchCatch:#text/1": [{
    "PatchText:#text/0": "g2 late",
    "PatchPending:#text/1": "packages/runtime-tags/src/__tests__/fixtures/patch-catch-created-reads-global/template.marko_6*content",
    "PatchSetup:": {
      "PatchWrite:err_message": "late"
    },
    "PatchChild:BranchScopes:#text/1": {
      "PatchText:#text/0": "y"
    }
  }, "packages/runtime-tags/src/__tests__/fixtures/patch-catch-created-reads-global/template.marko_5*content"]
}
(_.a.f("y"), 0)
;E2gB

// PATCH holding E2gB
{
  "$global:": {
    label: "g3",
    p: (p => p = new Promise((f, r) => _.a = {
      f,
      r(e) {
        p.catch(_ => 0);
        r(e)
      }
    }))()
  },
  "PatchCatch:#text/0": [{
    "PatchText:#text/0": "g3 early",
    "PatchPending:#text/1": "packages/runtime-tags/src/__tests__/fixtures/patch-catch-created-reads-global/template.marko_4*content",
    "PatchSetup:": {
      "PatchWrite:err_message": "early"
    },
    "PatchChild:BranchScopes:#text/1": {
      "PatchText:#text/0": "z"
    }
  }, "packages/runtime-tags/src/__tests__/fixtures/patch-catch-created-reads-global/template.marko_3*content"],
  "PatchCatch:#text/1": [{
    "PatchText:#text/0": "g3 late",
    "PatchPending:#text/1": "packages/runtime-tags/src/__tests__/fixtures/patch-catch-created-reads-global/template.marko_6*content",
    "PatchSetup:": {
      "PatchWrite:err_message": "late"
    },
    "PatchChild:BranchScopes:#text/1": {
      "PatchText:#text/0": "z"
    }
  }, "packages/runtime-tags/src/__tests__/fixtures/patch-catch-created-reads-global/template.marko_5*content"]
}
(_.a.f("z"), 0)

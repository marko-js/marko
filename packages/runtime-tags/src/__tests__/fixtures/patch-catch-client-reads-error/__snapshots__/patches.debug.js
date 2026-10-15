// PATCH
[`packages/runtime-tags/src/__tests__/fixtures/patch-catch-client-reads-error/template.marko_1*content;D ;<p> </p>`, `packages/runtime-tags/src/__tests__/fixtures/patch-catch-client-reads-error/template.marko_2*content;D ;<p> </p>`, {
  "PatchChild:BranchScopes:#text/0": [{
    "PatchText:#text/0": "ok"
  }, "packages/runtime-tags/src/__tests__/fixtures/patch-catch-client-reads-error/template.marko_1*content", "packages/runtime-tags/src/__tests__/fixtures/patch-catch-client-reads-error/template.marko_3*content"],
  "PatchChild:BranchScopes:#text/1": [{
    "PatchText:#text/0": "ok"
  }, "packages/runtime-tags/src/__tests__/fixtures/patch-catch-client-reads-error/template.marko_2*content", "packages/runtime-tags/src/__tests__/fixtures/patch-catch-client-reads-error/template.marko_4*content"]
}]
;BwY

// PATCH holding BwY
{
  "PatchChild:BranchScopes:#text/0": [{}, "packages/runtime-tags/src/__tests__/fixtures/patch-catch-client-reads-error/template.marko_1*content", _.b = "packages/runtime-tags/src/__tests__/fixtures/patch-catch-client-reads-error/template.marko_3*content"],
  "PatchCatch:#text/0": [{
    "PatchWrite:err_message": _.a = "SHOWN_message2",
    "PatchText:#text/0": _.a
  }, _.b],
  "PatchChild:BranchScopes:#text/1": [{}, "packages/runtime-tags/src/__tests__/fixtures/patch-catch-client-reads-error/template.marko_2*content", _.c = "packages/runtime-tags/src/__tests__/fixtures/patch-catch-client-reads-error/template.marko_4*content"],
  "PatchCatch:#text/1": [{
    "PatchWrite:err_cause_code": "SHOWN_code2",
    "PatchEffect:packages/runtime-tags/src/__tests__/fixtures/patch-catch-client-reads-error/template.marko_4_err_cause_code#3": "err_cause_code",
    "PatchSetup:": {
      "PatchInit:": "!packages/runtime-tags/src/__tests__/fixtures/patch-catch-client-reads-error/template.marko_4_err_cause_code#3"
    }
  }, _.c]
}

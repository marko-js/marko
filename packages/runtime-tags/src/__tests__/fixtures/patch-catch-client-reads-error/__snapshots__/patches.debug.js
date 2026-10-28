// PATCH
[`packages/runtime-tags/src/__tests__/fixtures/patch-catch-client-reads-error/template.marko_3*content !packages/runtime-tags/src/__tests__/fixtures/patch-catch-client-reads-error/template.marko_3`, `packages/runtime-tags/src/__tests__/fixtures/patch-catch-client-reads-error/template.marko_4*content !packages/runtime-tags/src/__tests__/fixtures/patch-catch-client-reads-error/template.marko_4_err_cause_code#3`, {
  "PatchCatch:#text/0": [{
    "PatchWrite:err_message": _.a = "SHOWN_message1",
    "PatchText:#text/0": _.a
  }, "packages/runtime-tags/src/__tests__/fixtures/patch-catch-client-reads-error/template.marko_3*content"],
  "PatchCatch:#text/1": [{
    "PatchWrite:err_cause_code": "SHOWN_code1"
  }, "packages/runtime-tags/src/__tests__/fixtures/patch-catch-client-reads-error/template.marko_4*content"]
}]
;Cxg

// PATCH holding Cxg
{
  "PatchCatch:#text/0": [{
    "PatchWrite:err_message": _.a = "SHOWN_message2",
    "PatchText:#text/0": _.a
  }, "packages/runtime-tags/src/__tests__/fixtures/patch-catch-client-reads-error/template.marko_3*content"],
  "PatchCatch:#text/1": [{
    "PatchWrite:err_cause_code": "SHOWN_code2"
  }, "packages/runtime-tags/src/__tests__/fixtures/patch-catch-client-reads-error/template.marko_4*content"]
}

// PATCH holding Cxg
{
  "PatchChild:BranchScopes:#text/0": [{
    "PatchText:#text/0": "ok"
  }, "packages/runtime-tags/src/__tests__/fixtures/patch-catch-client-reads-error/template.marko_3*content"],
  "PatchChild:BranchScopes:#text/1": [{
    "PatchText:#text/0": "ok"
  }, "packages/runtime-tags/src/__tests__/fixtures/patch-catch-client-reads-error/template.marko_4*content"]
}

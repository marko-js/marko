// PATCH
`packages/runtime-tags/src/__tests__/fixtures/patch-catch-created-reads-param-later/template.marko_1*content`
{
  "PatchCatch:#text/0": [{
    "PatchText:#text/0": "b",
    "PatchText:#text/1": "b",
    "PatchSetup:": {
      "PatchSubscribers:packages/runtime-tags/src/__tests__/fixtures/patch-catch-created-reads-param-later/template.marko_1_input_msg#0:3/subscribe": 0
    }
  }, "packages/runtime-tags/src/__tests__/fixtures/patch-catch-created-reads-param-later/template.marko_1*content"],
  "PatchMarkedWrite:input_msg": "b",
  "PatchSubscribers:packages/runtime-tags/src/__tests__/fixtures/patch-catch-created-reads-param-later/template.marko_0_input_msg#3/subscribers": "input_msg"
}
;BgE

// PATCH holding BgE
{
  "PatchCatch:#text/0": [{
    "PatchText:#text/0": "c",
    "PatchText:#text/1": "c",
    "PatchSetup:": {
      "PatchSubscribers:packages/runtime-tags/src/__tests__/fixtures/patch-catch-created-reads-param-later/template.marko_1_input_msg#0:3/subscribe": 0
    }
  }, "packages/runtime-tags/src/__tests__/fixtures/patch-catch-created-reads-param-later/template.marko_1*content"],
  "PatchMarkedWrite:input_msg": "c",
  "PatchSubscribers:packages/runtime-tags/src/__tests__/fixtures/patch-catch-created-reads-param-later/template.marko_0_input_msg#3/subscribers": "input_msg"
}

// PATCH holding BgE
{
  "PatchChild:BranchScopes:#text/0": [{
    "PatchText:#text/0": "d"
  }, "packages/runtime-tags/src/__tests__/fixtures/patch-catch-created-reads-param-later/template.marko_1*content"],
  "PatchMarkedWrite:input_msg": "d",
  "PatchSubscribers:packages/runtime-tags/src/__tests__/fixtures/patch-catch-created-reads-param-later/template.marko_0_input_msg#3/subscribers": "input_msg"
}

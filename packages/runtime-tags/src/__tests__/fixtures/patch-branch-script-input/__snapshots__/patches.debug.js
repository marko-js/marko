// PATCH
[`packages/runtime-tags/src/__tests__/fixtures/patch-branch-script-input/template.marko_1*shell,<p>promo</p>`, {
  "PatchText:#text/0": "Store",
  "PatchBranch:#text/1": [{
    "PatchEffect:packages/runtime-tags/src/__tests__/fixtures/patch-branch-script-input/template.marko_1_input_value#0:6": ">input_value"
  }, "packages/runtime-tags/src/__tests__/fixtures/patch-branch-script-input/template.marko_1*shell"],
  "PatchMarkedWrite:input_value": "b"
}]
;BAE

// PATCH holding BAE
{
  "PatchText:#text/0": "Store",
  "PatchBranch:#text/1": 0,
  "PatchMarkedWrite:input_value": "c"
}

// PATCH holding BAE
{
  "PatchText:#text/0": "Store",
  "PatchBranch:#text/1": [{
    "PatchEffect:packages/runtime-tags/src/__tests__/fixtures/patch-branch-script-input/template.marko_1_input_value#0:6": ">input_value"
  }, "packages/runtime-tags/src/__tests__/fixtures/patch-branch-script-input/template.marko_1*shell"],
  "PatchMarkedWrite:input_value": "d"
}

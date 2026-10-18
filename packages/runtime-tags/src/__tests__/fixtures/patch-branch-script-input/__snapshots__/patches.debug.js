// PATCH
[`packages/runtime-tags/src/__tests__/fixtures/patch-branch-script-input/template.marko_1*shell !packages/runtime-tags/src/__tests__/fixtures/patch-branch-script-input/template.marko_1_input_value#0:6,<p>promo</p>`, {
  "PatchText:#text/0": "Store",
  "PatchWrite:input_value": "b",
  "PatchBranch:#text/1": [{
    "PatchEffect:packages/runtime-tags/src/__tests__/fixtures/patch-branch-script-input/template.marko_1_input_value#0:6": "1 input_value"
  }, "packages/runtime-tags/src/__tests__/fixtures/patch-branch-script-input/template.marko_1*shell"]
}]
;BAE

// PATCH holding BAE
{
  "PatchText:#text/0": "Store",
  "PatchWrite:input_value": "c",
  "PatchBranch:#text/1": 0
}

// PATCH holding BAE
{
  "PatchText:#text/0": "Store",
  "PatchWrite:input_value": "d",
  "PatchBranch:#text/1": [{
    "PatchEffect:packages/runtime-tags/src/__tests__/fixtures/patch-branch-script-input/template.marko_1_input_value#0:6": "1 input_value"
  }, "packages/runtime-tags/src/__tests__/fixtures/patch-branch-script-input/template.marko_1*shell"]
}

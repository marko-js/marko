// PATCH
[`packages/runtime-tags/src/__tests__/fixtures/patch-branch-script-mixed/template.marko_1*shell !packages/runtime-tags/src/__tests__/fixtures/patch-branch-script-mixed/template.marko_1_input_value#0:6_$global_brand#0:8,<p>promo</p>`, {
  "$global:": {
    brand: "Marko"
  },
  "PatchText:#text/0": "Store",
  "PatchWrite:input_value": "b",
  "PatchBranch:#text/1": [{
    "PatchEffect:packages/runtime-tags/src/__tests__/fixtures/patch-branch-script-mixed/template.marko_1_input_value#0:6_$global_brand#0:8": "1 input_value"
  }, "packages/runtime-tags/src/__tests__/fixtures/patch-branch-script-mixed/template.marko_1*shell"]
}]
;BAE

// PATCH holding BAE
{
  "$global:": {
    brand: "Marko"
  },
  "PatchText:#text/0": "Store!",
  "PatchWrite:input_value": "b",
  "PatchBranch:#text/1": [{
    "PatchEffect:packages/runtime-tags/src/__tests__/fixtures/patch-branch-script-mixed/template.marko_1_input_value#0:6_$global_brand#0:8": "1 input_value"
  }, "packages/runtime-tags/src/__tests__/fixtures/patch-branch-script-mixed/template.marko_1*shell"]
}

// PATCH holding BAE
{
  "$global:": {
    brand: "Fresh"
  },
  "PatchText:#text/0": "Store",
  "PatchWrite:input_value": "b",
  "PatchBranch:#text/1": [{
    "PatchEffect:packages/runtime-tags/src/__tests__/fixtures/patch-branch-script-mixed/template.marko_1_input_value#0:6_$global_brand#0:8": "1 input_value"
  }, "packages/runtime-tags/src/__tests__/fixtures/patch-branch-script-mixed/template.marko_1*shell"]
}

// PATCH holding BAE
{
  "$global:": {
    brand: "Patch"
  },
  "PatchText:#text/0": "Store",
  "PatchWrite:input_value": "c",
  "PatchBranch:#text/1": [{
    "PatchEffect:packages/runtime-tags/src/__tests__/fixtures/patch-branch-script-mixed/template.marko_1_input_value#0:6_$global_brand#0:8": "1 input_value"
  }, "packages/runtime-tags/src/__tests__/fixtures/patch-branch-script-mixed/template.marko_1*shell"]
}

// PATCH
{
  "$global:": {
    brand: "Marko"
  },
  "PatchText:#text/0": "Marko",
  "PatchBranch:#text/1": 0,
  "PatchWrite:$global_brand": "Marko"
}

// PATCH
[`packages/runtime-tags/src/__tests__/fixtures/persisted-branch-script-global/template.marko_1*shell !packages/runtime-tags/src/__tests__/fixtures/persisted-branch-script-global/template.marko_1_$global_brand#5,<p>promo</p>`, {
  "$global:": {
    brand: "Fresh"
  },
  "PatchText:#text/0": "Fresh",
  "PatchBranch:#text/1": [{
    "PatchEffect:packages/runtime-tags/src/__tests__/fixtures/persisted-branch-script-global/template.marko_1_$global_brand#5": "$global_brand 1"
  }, "packages/runtime-tags/src/__tests__/fixtures/persisted-branch-script-global/template.marko_1*shell"],
  "PatchWrite:$global_brand": "Fresh"
}]

// PATCH
[`packages/runtime-tags/src/__tests__/fixtures/persisted-branch-script-global/template.marko_1*shell !packages/runtime-tags/src/__tests__/fixtures/persisted-branch-script-global/template.marko_1_$global_brand#5,<p>promo</p>`, {
  "$global:": {
    brand: "Patch"
  },
  "PatchText:#text/0": "Patch",
  "PatchBranch:#text/1": [{
    "PatchEffect:packages/runtime-tags/src/__tests__/fixtures/persisted-branch-script-global/template.marko_1_$global_brand#5": "$global_brand 1"
  }, "packages/runtime-tags/src/__tests__/fixtures/persisted-branch-script-global/template.marko_1*shell"],
  "PatchWrite:$global_brand": "Patch"
}]

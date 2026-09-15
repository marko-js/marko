// PATCH
{
  "$global:": {
    brand: "Marko"
  },
  "PatchText:#text/0": "Marko",
  "PatchBranch:#text/1": 0
}

// PATCH
[`packages/runtime-tags/src/__tests__/fixtures/patch-branch-script-global/template.marko_1*shell !packages/runtime-tags/src/__tests__/fixtures/patch-branch-script-global/template.marko_1_$global_brand#5,<p>promo</p>`, {
  "$global:": {
    brand: "Fresh"
  },
  "PatchText:#text/0": "Fresh",
  "PatchBranch:#text/1": "packages/runtime-tags/src/__tests__/fixtures/patch-branch-script-global/template.marko_1*shell"
}]
"packages/runtime-tags/src/__tests__/fixtures/patch-branch-script-global/template.marko_1*shell:AQ"

// PATCH holding packages/runtime-tags/src/__tests__/fixtures/patch-branch-script-global/template.marko_1*shell:AQ
{
  "$global:": {
    brand: "Patch"
  },
  "PatchText:#text/0": "Patch",
  "PatchBranch:#text/1": "packages/runtime-tags/src/__tests__/fixtures/patch-branch-script-global/template.marko_1*shell"
}

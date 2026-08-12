// PATCH
M._.a = (_, $) => ({
  "$global:": {
    brand: "Marko"
  },
  "PatchText:#text/0": "Marko",
  "PatchBranch:#text/1": 0
})

// PATCH
M._.a = (_, $) => ([`packages/runtime-tags/src/__tests__/fixtures/persisted-branch-script-global/template.marko_1*shell packages/runtime-tags/src/__tests__/fixtures/persisted-branch-script-global/template.marko_1,<p>promo</p>`, {
  "$global:": {
    brand: "Fresh"
  },
  "PatchText:#text/0": "Fresh",
  "PatchBranch:#text/1": [{
    "PatchGlobalEffect:packages/runtime-tags/src/__tests__/fixtures/persisted-branch-script-global/template.marko_1": "! brand"
  }, "packages/runtime-tags/src/__tests__/fixtures/persisted-branch-script-global/template.marko_1*shell"]
}])

// PATCH
M._.a = (_, $) => ([`packages/runtime-tags/src/__tests__/fixtures/persisted-branch-script-global/template.marko_1*shell packages/runtime-tags/src/__tests__/fixtures/persisted-branch-script-global/template.marko_1,<p>promo</p>`, {
  "$global:": {
    brand: "Patch"
  },
  "PatchText:#text/0": "Patch",
  "PatchBranch:#text/1": [{
    "PatchGlobalEffect:packages/runtime-tags/src/__tests__/fixtures/persisted-branch-script-global/template.marko_1": "! brand"
  }, "packages/runtime-tags/src/__tests__/fixtures/persisted-branch-script-global/template.marko_1*shell"]
}])

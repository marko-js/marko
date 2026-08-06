// PATCH
{
  "$global:": {
    brand: "Marko"
  },
  "PatchChild:#childScope/0": {
    "PatchText:#text/0": "Marko",
    "PatchGlobalEffect:packages/runtime-tags/src/__tests__/fixtures/persisted-child-script-global/tags/badge/index.marko_0": "! brand"
  }
}

// PATCH
{
  "$global:": {
    brand: "Runtime"
  },
  "PatchChild:#childScope/0": {
    "PatchText:#text/0": "Runtime",
    "PatchGlobalEffect:packages/runtime-tags/src/__tests__/fixtures/persisted-child-script-global/tags/badge/index.marko_0": "! brand"
  }
}

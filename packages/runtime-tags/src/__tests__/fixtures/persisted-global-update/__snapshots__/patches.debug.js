// PATCH
{
  "$global:": {
    brand: "Runtime"
  },
  "PatchText:#text/0": "Runtime",
  "PatchEffect:packages/runtime-tags/src/__tests__/fixtures/persisted-global-update/template.marko_0_$global_brand#4": "$global_brand",
  "PatchWrite:$global_brand": "Runtime"
}

// PATCH
{
  "$global:": {
    brand: $
  },
  "PatchText:#text/0": "",
  "PatchEffect:packages/runtime-tags/src/__tests__/fixtures/persisted-global-update/template.marko_0_$global_brand#4": "$global_brand",
  "PatchWrite:$global_brand": $
}

// PATCH
[`packages/runtime-tags/src/__tests__/fixtures/patch-dynamic-global-server-owned/card.marko;D ;<em> </em>`, {
  "$global:": {
    brand: "b"
  },
  "PatchDynamicTag:#text/0": "packages/runtime-tags/src/__tests__/fixtures/patch-dynamic-global-server-owned/card.marko",
  "PatchChild:BranchScopes:#text/0": {
    "PatchText:#text/0": "b"
  }
}]
;BAA

// PATCH holding BAA
{
  "$global:": {
    brand: "b"
  },
  "PatchDynamicTag:#text/0": 0
}

// PATCH holding BAA
{
  "$global:": {
    brand: "c"
  },
  "PatchDynamicTag:#text/0": "packages/runtime-tags/src/__tests__/fixtures/patch-dynamic-global-server-owned/card.marko",
  "PatchChild:BranchScopes:#text/0": {
    "PatchText:#text/0": "c"
  }
}

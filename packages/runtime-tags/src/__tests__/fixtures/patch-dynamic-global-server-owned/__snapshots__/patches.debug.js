// PATCH
[`packages/runtime-tags/src/__tests__/fixtures/patch-dynamic-global-server-owned/card.marko;D ;<em> </em>`, (_.a = {
  "$global:": {
    brand: "b"
  },
  "PatchDynamicTag:#text/0": "packages/runtime-tags/src/__tests__/fixtures/patch-dynamic-global-server-owned/card.marko",
  "PatchChild:BranchScopes:#text/0": {
    "PatchText:#text/0": "b"
  }
}, _.a)]
"AgA"

// PATCH holding AgA
[(_.a = {
  "$global:": {
    brand: "b"
  },
  "PatchDynamicTag:#text/0": 0
}, _.a)]

// PATCH holding AgA
[(_.a = {
  "$global:": {
    brand: "c"
  },
  "PatchDynamicTag:#text/0": "packages/runtime-tags/src/__tests__/fixtures/patch-dynamic-global-server-owned/card.marko",
  "PatchChild:BranchScopes:#text/0": {
    "PatchText:#text/0": "c"
  }
}, _.a)]

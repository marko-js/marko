// PATCH
"ready:packages/runtime-tags/src/__tests__/fixtures/patch-global-closure-lazy/child.marko", {
  "$global:": {
    brand: "bmce"
  },
  "PatchChild:#childScope/1": {
    "PatchBranch:#text/2": [{
      "PatchLoop:#text/0": [{
        "PatchText:#text/1": "bmce"
      }, {
        "PatchText:#text/1": "bmce"
      }]
    }]
  }
}

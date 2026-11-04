// PATCH
{
  "$global:": {
    brand: "bmce"
  },
  "PatchChild:BranchScopes:#text/2": {
    "PatchPending:#text/0": 1,
    "PatchChild:BranchScopes:#text/0": {
      "PatchText:#text/0": "s2"
    }
  },
  "PatchChild:#childScope/3": {
    "PatchChild:BranchScopes:#text/0": {
      "PatchPending:#text/0": 1,
      "PatchChild:BranchScopes:#text/0": {
        "PatchText:#text/0": "s2"
      }
    },
    "PatchChild:BranchScopes:#text/1": 0,
    "PatchSubscribers:packages/runtime-tags/src/__tests__/fixtures/patch-child-off-branch-path/tags/card.marko_0_input_other#6/subscribers": "input_other",
    "PatchMarkedWrite:input_other": (p => p = new Promise((f, r) => _.a = {
      f,
      r(e) {
        p.catch(_ => 0);
        r(e)
      }
    }))(),
    "PatchCatch:#text/1": []
  },
  "PatchSubscribers:packages/runtime-tags/src/__tests__/fixtures/patch-child-off-branch-path/template.marko_0_input_label#6/subscribers": "input_label",
  "PatchSubscribers:packages/runtime-tags/src/__tests__/fixtures/patch-child-off-branch-path/template.marko_0_brand#10/subscribers": "brand",
  "PatchMarkedWrite:input_label": "b",
  "PatchMarkedWrite:brand": "bmce!"
}
(_.a.f("o2"), 0)

// PATCH
{
  "$global:": {
    brand: "cmce"
  },
  "PatchChild:BranchScopes:#text/2": {
    "PatchPending:#text/0": 1,
    "PatchChild:BranchScopes:#text/0": {
      "PatchText:#text/0": "s3"
    }
  },
  "PatchChild:#childScope/3": {
    "PatchChild:BranchScopes:#text/0": {
      "PatchPending:#text/0": 1,
      "PatchChild:BranchScopes:#text/0": {
        "PatchText:#text/0": "s3"
      }
    },
    "PatchChild:BranchScopes:#text/1": 0,
    "PatchSubscribers:packages/runtime-tags/src/__tests__/fixtures/patch-child-off-branch-path/tags/card.marko_0_input_other#6/subscribers": "input_other",
    "PatchMarkedWrite:input_other": (p => p = new Promise((f, r) => _.a = {
      f,
      r(e) {
        p.catch(_ => 0);
        r(e)
      }
    }))(),
    "PatchCatch:#text/1": []
  },
  "PatchSubscribers:packages/runtime-tags/src/__tests__/fixtures/patch-child-off-branch-path/template.marko_0_input_label#6/subscribers": "input_label",
  "PatchSubscribers:packages/runtime-tags/src/__tests__/fixtures/patch-child-off-branch-path/template.marko_0_brand#10/subscribers": "brand",
  "PatchMarkedWrite:input_label": "c",
  "PatchMarkedWrite:brand": "cmce!"
}
(_.a.f("o3"), 0)

// PATCH
(_.a = {
  "PatchPending:#text/0": 1,
  "PatchPending:#text/1": 1
}, _.a)
(_.b = {
  "PatchChild:BranchScopes:#text/0": {
    "PatchChild:#childScope/0": {
      "PatchAttr:#button/0 id": "a",
      "PatchText:#text/1": "y",
      "PatchSetup:": {
        "PatchInit:": "!packages/runtime-tags/src/__tests__/fixtures/patch-cross-flush-value/tags/tagged/index.marko_0",
        "PatchValue:packages/runtime-tags/src/__tests__/fixtures/patch-cross-flush-value/tags/tagged/index.marko0": 0
      },
      "PatchWrite:input_tag": {
        name: "y"
      }
    }
  }
}, _.b)
(_.c = {
  "PatchChild:BranchScopes:#text/1": {
    "PatchChild:#childScope/0": {
      "PatchAttr:#button/0 id": "b",
      "PatchText:#text/1": "y",
      "PatchSetup:": {
        "PatchInit:": _.d = _.b["PatchChild:BranchScopes:#text/0"]["PatchChild:#childScope/0"]["PatchSetup:"]["PatchInit:"],
        "PatchValue:packages/runtime-tags/src/__tests__/fixtures/patch-cross-flush-value/tags/tagged/index.marko0": 0
      },
      "PatchWrite:input_tag": _.e = _.b["PatchChild:BranchScopes:#text/0"]["PatchChild:#childScope/0"]["PatchWrite:input_tag"]
    }
  }
}, _.c)

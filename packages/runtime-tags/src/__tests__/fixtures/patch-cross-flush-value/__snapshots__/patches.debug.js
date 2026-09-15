// PATCH
{
  "PatchPending:#text/0": 1,
  "PatchPending:#text/1": 1
}
{
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
}
{
  "PatchChild:BranchScopes:#text/1": {
    "PatchChild:#childScope/0": {
      "PatchAttr:#button/0 id": "b",
      "PatchText:#text/1": "y",
      "PatchSetup:": {
        "PatchInit:": _.a = _(1)["PatchChild:BranchScopes:#text/0"]["PatchChild:#childScope/0"]["PatchSetup:"]["PatchInit:"],
        "PatchValue:packages/runtime-tags/src/__tests__/fixtures/patch-cross-flush-value/tags/tagged/index.marko0": 0
      },
      "PatchWrite:input_tag": _.b = _(1)["PatchChild:BranchScopes:#text/0"]["PatchChild:#childScope/0"]["PatchWrite:input_tag"]
    }
  }
}

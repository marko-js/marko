// PATCH
{
  "PatchPending:#text/0": 1,
  "PatchPending:#text/1": 1
}
{
  "PatchChild:BranchScopes:#text/0": {
    "PatchChild:#childScope/0": {
      "PatchText:#text/1": "y",
      "PatchMarkedWrite:input_tag": {
        name: "y"
      }
    }
  }
}
{
  "PatchChild:BranchScopes:#text/1": {
    "PatchChild:#childScope/0": {
      "PatchText:#text/1": "y",
      "PatchMarkedWrite:input_tag": _(1)["PatchChild:BranchScopes:#text/0"]["PatchChild:#childScope/0"]["PatchMarkedWrite:input_tag"]
    }
  }
}

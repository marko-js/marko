// PATCH
{
  "PatchText:#text/0": "Store!",
  "PatchChild:#childScope/3": {
    "PatchBranch:#text/0": 0
  },
  "PatchChild:#childScope/4": {
    "PatchBranch:#text/0": 0
  }
}

// PATCH
[`packages/runtime-tags/src/__tests__/fixtures/persisted-child-controllable-siblings/tags/counter/index.marko_1*shell packages/runtime-tags/src/__tests__/fixtures/persisted-child-controllable-siblings/tags/counter/index.marko_1;Db%l ;<span>Seen <!></span><button>+</button>`, {
  "PatchText:#text/0": "Store!",
  "PatchBind:1": ["packages/runtime-tags/src/__tests__/fixtures/persisted-child-controllable-siblings/template.marko_0/onCount", "#childScope/3", _.a = "BranchScopes:#text/0", _.b = "TagVariableChange:count"],
  "PatchChild:#childScope/3": {
    "PatchBranch:#text/0": [{
      "PatchSetup:": {
        "PatchValue:packages/runtime-tags/src/__tests__/fixtures/persisted-child-controllable-siblings/tags/counter/index.marko0": 0
      }
    }, _.c = "packages/runtime-tags/src/__tests__/fixtures/persisted-child-controllable-siblings/tags/counter/index.marko_1*shell"]
  },
  "PatchBind:2": ["packages/runtime-tags/src/__tests__/fixtures/persisted-child-controllable-siblings/template.marko_0/onCount2", "#childScope/4", _.a, _.b],
  "PatchChild:#childScope/4": {
    "PatchBranch:#text/0": [{
      "PatchSetup:": {
        "PatchValue:packages/runtime-tags/src/__tests__/fixtures/persisted-child-controllable-siblings/tags/counter/index.marko0": 0
      }
    }, _.c]
  }
}]

// PATCH
{
  "PatchText:#text/0": "Store!",
  "PatchLoop:#text/1": [{
    "PatchText:#text/0": "a",
    "PatchChild:#childScope/2": {
      "PatchBranch:#text/0": 0
    },
    "PatchFresh:": {
      "PatchValue:packages/runtime-tags/src/__tests__/fixtures/persisted-child-controllable-loop/template.marko0": 0
    }
  }, {
    "PatchText:#text/0": "b",
    "PatchChild:#childScope/2": {
      "PatchBranch:#text/0": 0
    },
    "PatchFresh:": {
      "PatchValue:packages/runtime-tags/src/__tests__/fixtures/persisted-child-controllable-loop/template.marko0": 0
    }
  }]
}

// PATCH
[`packages/runtime-tags/src/__tests__/fixtures/persisted-child-controllable-loop/tags/counter/index.marko_1_shell packages/runtime-tags/src/__tests__/fixtures/persisted-child-controllable-loop/tags/counter/index.marko_1;Db%l ;<span>Seen <!></span><button>+</button>`, {
  "PatchText:#text/0": "Store!",
  "PatchLoop:#text/1": [{
    "PatchText:#text/0": "a",
    "PatchBind:1": [_.a = "packages/runtime-tags/src/__tests__/fixtures/persisted-child-controllable-loop/template.marko_1/onCount", _.b = "#childScope/2", _.c = "BranchScopes:#text/0", _.d = "TagVariableChange:count"],
    "PatchChild:#childScope/2": {
      "PatchBranch:#text/0": [{
        "PatchFresh:": {
          "PatchValue:packages/runtime-tags/src/__tests__/fixtures/persisted-child-controllable-loop/tags/counter/index.marko0": 0
        }
      }, _.e = "packages/runtime-tags/src/__tests__/fixtures/persisted-child-controllable-loop/tags/counter/index.marko_1_shell"]
    },
    "PatchFresh:": {
      "PatchValue:packages/runtime-tags/src/__tests__/fixtures/persisted-child-controllable-loop/template.marko0": 0
    }
  }, {
    "PatchText:#text/0": "b",
    "PatchBind:2": [_.a, _.b, _.c, _.d],
    "PatchChild:#childScope/2": {
      "PatchBranch:#text/0": [{
        "PatchFresh:": {
          "PatchValue:packages/runtime-tags/src/__tests__/fixtures/persisted-child-controllable-loop/tags/counter/index.marko0": 0
        }
      }, _.e]
    },
    "PatchFresh:": {
      "PatchValue:packages/runtime-tags/src/__tests__/fixtures/persisted-child-controllable-loop/template.marko0": 0
    }
  }]
}]

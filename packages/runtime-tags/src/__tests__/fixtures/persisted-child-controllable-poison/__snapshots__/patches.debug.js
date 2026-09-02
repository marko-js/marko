// PATCH
[`packages/runtime-tags/src/__tests__/fixtures/persisted-child-controllable-poison/template.marko_1*shell;b/b%c&b;<!><!><!><!><!>`, {
  "PatchText:#text/0": "Store!",
  "PatchLoop:#text/2": [{
    "PatchChild:#childScope/0": {
      "PatchBranch:#text/0": 0,
      "PatchWrite:input_step": 1
    }
  }, {
    "PatchChild:#childScope/0": {
      "PatchBranch:#text/0": 0,
      "PatchWrite:input_step": 2
    }
  }, "packages/runtime-tags/src/__tests__/fixtures/persisted-child-controllable-poison/template.marko_1*shell"]
}]

// PATCH
[`packages/runtime-tags/src/__tests__/fixtures/persisted-child-controllable-poison/tags/counter/index.marko_1*shell !packages/runtime-tags/src/__tests__/fixtures/persisted-child-controllable-poison/tags/counter/index.marko_1;Db%l ;<span>Seen <!></span><button>+</button>`, `packages/runtime-tags/src/__tests__/fixtures/persisted-child-controllable-poison/template.marko_1*shell;b/b%c&b;<!><!><!><!><!>`, {
  "PatchText:#text/0": "Store!",
  "PatchBind:1": [_.a = "packages/runtime-tags/src/__tests__/fixtures/persisted-child-controllable-poison/template.marko_0/onCount", [_.b = "BranchScopes:#text/2", 0], _.c = "#childScope/0", _.d = "BranchScopes:#text/0", _.e = "TagVariableChange:count"],
  "PatchBind:2": [_.a, [_.b, 1], _.c, _.d, _.e],
  "PatchLoop:#text/2": [{
    "PatchChild:#childScope/0": {
      "PatchBranch:#text/0": [{
        "PatchSetup:": {
          "PatchValue:packages/runtime-tags/src/__tests__/fixtures/persisted-child-controllable-poison/tags/counter/index.marko1": 0
        }
      }, _.f = "packages/runtime-tags/src/__tests__/fixtures/persisted-child-controllable-poison/tags/counter/index.marko_1*shell"],
      "PatchWrite:input_step": 1
    }
  }, {
    "PatchChild:#childScope/0": {
      "PatchBranch:#text/0": [{
        "PatchSetup:": {
          "PatchValue:packages/runtime-tags/src/__tests__/fixtures/persisted-child-controllable-poison/tags/counter/index.marko1": 0
        }
      }, _.f],
      "PatchWrite:input_step": 2
    }
  }, "packages/runtime-tags/src/__tests__/fixtures/persisted-child-controllable-poison/template.marko_1*shell"]
}]

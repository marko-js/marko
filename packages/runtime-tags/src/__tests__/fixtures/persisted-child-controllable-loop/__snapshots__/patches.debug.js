// PATCH
[`packages/runtime-tags/src/__tests__/fixtures/persisted-child-controllable-loop/template.marko_1*shell !;D%c%l/b%c&b;<p><!> hit <!></p><!><!><!><!>`, {
  "PatchText:#text/0": "Store!",
  "PatchLoop:#text/1": [{
    "PatchText:#text/0": "a",
    "PatchChild:#childScope/2": {
      "PatchBranch:#text/0": 0
    },
    "PatchSetup:": {
      "PatchValue:packages/runtime-tags/src/__tests__/fixtures/persisted-child-controllable-loop/template.marko0": 0
    }
  }, {
    "PatchText:#text/0": "b",
    "PatchChild:#childScope/2": {
      "PatchBranch:#text/0": 0
    },
    "PatchSetup:": {
      "PatchValue:packages/runtime-tags/src/__tests__/fixtures/persisted-child-controllable-loop/template.marko0": 0
    }
  }, "packages/runtime-tags/src/__tests__/fixtures/persisted-child-controllable-loop/template.marko_1*shell"]
}]

// PATCH
[`packages/runtime-tags/src/__tests__/fixtures/persisted-child-controllable-loop/tags/counter/index.marko_1*shell !packages/runtime-tags/src/__tests__/fixtures/persisted-child-controllable-loop/tags/counter/index.marko_1;Db%l ;<span>Seen <!></span><button>+</button>`, `packages/runtime-tags/src/__tests__/fixtures/persisted-child-controllable-loop/template.marko_1*shell !;D%c%l/b%c&b;<p><!> hit <!></p><!><!><!><!>`, {
  "PatchText:#text/0": "Store!",
  "PatchLoop:#text/1": [{
    "PatchText:#text/0": "a",
    "PatchChild:#childScope/2": {
      "PatchBranch:#text/0": [{
        "PatchSetup:": {
          "PatchValue:packages/runtime-tags/src/__tests__/fixtures/persisted-child-controllable-loop/tags/counter/index.marko1": 0
        },
        "PatchBind:1": [_.a = "packages/runtime-tags/src/__tests__/fixtures/persisted-child-controllable-loop/template.marko_1/onCount", 2, _.b = "TagVariableChange:count"]
      }, _.c = "packages/runtime-tags/src/__tests__/fixtures/persisted-child-controllable-loop/tags/counter/index.marko_1*shell"]
    },
    "PatchSetup:": {
      "PatchValue:packages/runtime-tags/src/__tests__/fixtures/persisted-child-controllable-loop/template.marko0": 0
    }
  }, {
    "PatchText:#text/0": "b",
    "PatchChild:#childScope/2": {
      "PatchBranch:#text/0": [{
        "PatchSetup:": {
          "PatchValue:packages/runtime-tags/src/__tests__/fixtures/persisted-child-controllable-loop/tags/counter/index.marko1": 0
        },
        "PatchBind:2": [_.a, 2, _.b]
      }, _.c]
    },
    "PatchSetup:": {
      "PatchValue:packages/runtime-tags/src/__tests__/fixtures/persisted-child-controllable-loop/template.marko0": 0
    }
  }, "packages/runtime-tags/src/__tests__/fixtures/persisted-child-controllable-loop/template.marko_1*shell"]
}]

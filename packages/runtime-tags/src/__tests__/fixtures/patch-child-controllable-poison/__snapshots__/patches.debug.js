// PATCH
[`packages/runtime-tags/src/__tests__/fixtures/patch-child-controllable-poison/template.marko_1*shell;b/b%c&b;<!><!><!><!><!>`, (_.a = {
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
  }, "packages/runtime-tags/src/__tests__/fixtures/patch-child-controllable-poison/template.marko_1*shell"]
}, _.a)]
"BAM"

// PATCH holding BAM
[`packages/runtime-tags/src/__tests__/fixtures/patch-child-controllable-poison/tags/counter/index.marko_1*shell !packages/runtime-tags/src/__tests__/fixtures/patch-child-controllable-poison/tags/counter/index.marko_1;Db%l ;<span>Seen <!></span><button>+</button>`, (_.a = {
  "PatchText:#text/0": "Store!",
  "PatchLoop:#text/2": [{
    "PatchChild:#childScope/0": {
      "PatchBranch:#text/0": [{
        "PatchSetup:": {
          "PatchValue:packages/runtime-tags/src/__tests__/fixtures/patch-child-controllable-poison/tags/counter/index.marko1": 0
        },
        "PatchBind:1": [_.b = "packages/runtime-tags/src/__tests__/fixtures/patch-child-controllable-poison/template.marko_0/onCount", 3, _.c = "TagVariableChange:count"]
      }, _.d = "packages/runtime-tags/src/__tests__/fixtures/patch-child-controllable-poison/tags/counter/index.marko_1*shell"],
      "PatchWrite:input_step": 1
    }
  }, {
    "PatchChild:#childScope/0": {
      "PatchBranch:#text/0": [{
        "PatchSetup:": {
          "PatchValue:packages/runtime-tags/src/__tests__/fixtures/patch-child-controllable-poison/tags/counter/index.marko1": 0
        },
        "PatchBind:2": [_.b, 3, _.c]
      }, _.d],
      "PatchWrite:input_step": 2
    }
  }, "packages/runtime-tags/src/__tests__/fixtures/patch-child-controllable-poison/template.marko_1*shell"]
}, _.a)]
"BAEB"

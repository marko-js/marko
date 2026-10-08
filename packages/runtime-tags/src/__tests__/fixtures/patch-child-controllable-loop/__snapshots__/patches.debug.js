// PATCH
{
  "PatchText:#text/0": "Store!",
  "PatchLoop:#text/1": [{
    "PatchChild:#childScope/2": {
      "PatchBranch:#text/0": 0
    }
  }, {
    "PatchChild:#childScope/2": {
      "PatchBranch:#text/0": 0
    }
  }]
}

// PATCH
[`packages/runtime-tags/src/__tests__/fixtures/patch-child-controllable-loop/tags/counter/index.marko_1*shell !packages/runtime-tags/src/__tests__/fixtures/patch-child-controllable-loop/tags/counter/index.marko_1;Db%l ;<span>Seen <!></span><button>+</button>`, {
  "PatchText:#text/0": "Store!",
  "PatchLoop:#text/1": [{
    "PatchChild:#childScope/2": {
      "PatchBranch:#text/0": [{
        "PatchValue:packages/runtime-tags/src/__tests__/fixtures/patch-child-controllable-loop/tags/counter/index.marko_fill1": 0,
        "PatchSetup:": {
          "PatchValue:packages/runtime-tags/src/__tests__/fixtures/patch-child-controllable-loop/tags/counter/index.marko_fill1": 0
        },
        "PatchBind:TagVariableChange:count": [_.a = "packages/runtime-tags/src/__tests__/fixtures/patch-child-controllable-loop/template.marko_1/onCount", 2]
      }, _.b = "packages/runtime-tags/src/__tests__/fixtures/patch-child-controllable-loop/tags/counter/index.marko_1*shell"]
    }
  }, {
    "PatchChild:#childScope/2": {
      "PatchBranch:#text/0": [{
        "PatchValue:packages/runtime-tags/src/__tests__/fixtures/patch-child-controllable-loop/tags/counter/index.marko_fill1": 0,
        "PatchSetup:": {
          "PatchValue:packages/runtime-tags/src/__tests__/fixtures/patch-child-controllable-loop/tags/counter/index.marko_fill1": 0
        },
        "PatchBind:TagVariableChange:count": [_.a, 2]
      }, _.b]
    }
  }]
}]
"BAE"

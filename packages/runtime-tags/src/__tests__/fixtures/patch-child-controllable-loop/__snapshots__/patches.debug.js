// PATCH
[`packages/runtime-tags/src/__tests__/fixtures/patch-child-controllable-loop/template.marko_1*shell !;D%c%l/b%c&b;<p><!> hit <!></p><!><!><!><!>`, {
  "PatchText:#text/0": "Store!",
  "PatchLoop:#text/1": [{
    "PatchSetup:": {
      "PatchText:#text/0": "a",
      "PatchValue:packages/runtime-tags/src/__tests__/fixtures/patch-child-controllable-loop/template.marko_fill0": 0
    },
    "PatchChild:#childScope/2": {
      "PatchBranch:#text/0": 0
    }
  }, {
    "PatchSetup:": {
      "PatchText:#text/0": "b",
      "PatchValue:packages/runtime-tags/src/__tests__/fixtures/patch-child-controllable-loop/template.marko_fill0": 0
    },
    "PatchChild:#childScope/2": {
      "PatchBranch:#text/0": 0
    }
  }, "packages/runtime-tags/src/__tests__/fixtures/patch-child-controllable-loop/template.marko_1*shell"]
}]
"BAM"

// PATCH holding BAM
[`packages/runtime-tags/src/__tests__/fixtures/patch-child-controllable-loop/tags/counter/index.marko_1*shell !packages/runtime-tags/src/__tests__/fixtures/patch-child-controllable-loop/tags/counter/index.marko_1;Db%l ;<span>Seen <!></span><button>+</button>`, {
  "PatchText:#text/0": "Store!",
  "PatchLoop:#text/1": [{
    "PatchSetup:": {
      "PatchText:#text/0": "a",
      "PatchValue:packages/runtime-tags/src/__tests__/fixtures/patch-child-controllable-loop/template.marko_fill0": 0
    },
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
    "PatchSetup:": {
      "PatchText:#text/0": "b",
      "PatchValue:packages/runtime-tags/src/__tests__/fixtures/patch-child-controllable-loop/template.marko_fill0": 0
    },
    "PatchChild:#childScope/2": {
      "PatchBranch:#text/0": [{
        "PatchValue:packages/runtime-tags/src/__tests__/fixtures/patch-child-controllable-loop/tags/counter/index.marko_fill1": 0,
        "PatchSetup:": {
          "PatchValue:packages/runtime-tags/src/__tests__/fixtures/patch-child-controllable-loop/tags/counter/index.marko_fill1": 0
        },
        "PatchBind:TagVariableChange:count": [_.a, 2]
      }, _.b]
    }
  }, "packages/runtime-tags/src/__tests__/fixtures/patch-child-controllable-loop/template.marko_1*shell"]
}]
"BAEB"

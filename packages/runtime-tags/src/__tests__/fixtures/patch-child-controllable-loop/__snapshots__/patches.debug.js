// PATCH
[`packages/runtime-tags/src/__tests__/fixtures/patch-child-controllable-loop/template.marko_1*shell !;D%c%l/b%c&b;<p><!> hit <!></p><!><!><!><!>`, (_.a = {
  "PatchText:#text/0": "Store!",
  "PatchLoop:#text/1": [{
    "PatchText:#text/0": "a",
    "PatchChild:#childScope/2": {
      "PatchBranch:#text/0": 0
    },
    "PatchSetup:": {
      "PatchValue:packages/runtime-tags/src/__tests__/fixtures/patch-child-controllable-loop/template.marko0": 0
    }
  }, {
    "PatchText:#text/0": "b",
    "PatchChild:#childScope/2": {
      "PatchBranch:#text/0": 0
    },
    "PatchSetup:": {
      "PatchValue:packages/runtime-tags/src/__tests__/fixtures/patch-child-controllable-loop/template.marko0": 0
    }
  }, "packages/runtime-tags/src/__tests__/fixtures/patch-child-controllable-loop/template.marko_1*shell"]
}, _.a)]
"BAM"

// PATCH holding BAM
[`packages/runtime-tags/src/__tests__/fixtures/patch-child-controllable-loop/tags/counter/index.marko_1*shell !packages/runtime-tags/src/__tests__/fixtures/patch-child-controllable-loop/tags/counter/index.marko_1;Db%l ;<span>Seen <!></span><button>+</button>`, (_.a = {
  "PatchText:#text/0": "Store!",
  "PatchLoop:#text/1": [{
    "PatchText:#text/0": "a",
    "PatchChild:#childScope/2": {
      "PatchBranch:#text/0": [{
        "PatchSetup:": {
          "PatchValue:packages/runtime-tags/src/__tests__/fixtures/patch-child-controllable-loop/tags/counter/index.marko1": 0
        },
        "PatchBind:1": [_.b = "packages/runtime-tags/src/__tests__/fixtures/patch-child-controllable-loop/template.marko_1/onCount", 2, _.c = "TagVariableChange:count"]
      }, _.d = "packages/runtime-tags/src/__tests__/fixtures/patch-child-controllable-loop/tags/counter/index.marko_1*shell"]
    },
    "PatchSetup:": {
      "PatchValue:packages/runtime-tags/src/__tests__/fixtures/patch-child-controllable-loop/template.marko0": 0
    }
  }, {
    "PatchText:#text/0": "b",
    "PatchChild:#childScope/2": {
      "PatchBranch:#text/0": [{
        "PatchSetup:": {
          "PatchValue:packages/runtime-tags/src/__tests__/fixtures/patch-child-controllable-loop/tags/counter/index.marko1": 0
        },
        "PatchBind:2": [_.b, 2, _.c]
      }, _.d]
    },
    "PatchSetup:": {
      "PatchValue:packages/runtime-tags/src/__tests__/fixtures/patch-child-controllable-loop/template.marko0": 0
    }
  }, "packages/runtime-tags/src/__tests__/fixtures/patch-child-controllable-loop/template.marko_1*shell"]
}, _.a)]
"BAEB"

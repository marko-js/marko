// PATCH
[`packages/runtime-tags/src/__tests__/fixtures/persisted-bind-loop-sibling/template.marko_3*shell packages/runtime-tags/src/__tests__/fixtures/persisted-bind-loop-sibling/template.marko_3_store_set#9/init!packages/runtime-tags/src/__tests__/fixtures/persisted-bind-loop-sibling/template.marko_3;Db%l ;<span>Seen <!></span><button>+</button>`, `packages/runtime-tags/src/__tests__/fixtures/persisted-bind-loop-sibling/template.marko_2*shell;b%;<!><!><!>`, `packages/runtime-tags/src/__tests__/fixtures/persisted-bind-loop-sibling/template.marko_1*shell;0&D%c%l%c;<p><!>:<!></p><!><!>`, {
  "PatchLoop:#text/0": ["x", {
    "PatchChild:#childScope/0": {
      "PatchSetup:": {
        "PatchValue:packages/runtime-tags/src/__tests__/fixtures/persisted-bind-loop-sibling/tags/store.marko0": 0,
        "PatchWrite:#TagVariable": bind(1)
      },
      "PatchBindSource:2": _.a = "packages/runtime-tags/src/__tests__/fixtures/persisted-bind-loop-sibling/tags/store.marko_0/_return"
    },
    "PatchBindSource:1": _.b = "packages/runtime-tags/src/__tests__/fixtures/persisted-bind-loop-sibling/template.marko_1_store#7/var",
    "PatchSetup:": {
      "PatchWrite:store": {
        last: 0,
        set: bind(2)
      }
    },
    "PatchText:#text/2": "x",
    "PatchLoop:#text/4": ["y", {
      "PatchBranch:#text/0": 0
    }, "x", {
      "PatchBranch:#text/0": [{
        "PatchSetup:": {
          "PatchValue:packages/runtime-tags/src/__tests__/fixtures/persisted-bind-loop-sibling/template.marko0": 0
        },
        "PatchBind:3": [_.a, 2, _.c = "#childScope/0", _.d = "TagVariableChange:count"]
      }, _.e = "packages/runtime-tags/src/__tests__/fixtures/persisted-bind-loop-sibling/template.marko_3*shell"]
    }, _.f = "packages/runtime-tags/src/__tests__/fixtures/persisted-bind-loop-sibling/template.marko_2*shell"]
  }, "y", {
    "PatchChild:#childScope/0": {
      "PatchSetup:": {
        "PatchValue:packages/runtime-tags/src/__tests__/fixtures/persisted-bind-loop-sibling/tags/store.marko0": 0,
        "PatchWrite:#TagVariable": bind(4)
      },
      "PatchBindSource:5": _.a
    },
    "PatchBindSource:4": _.b,
    "PatchSetup:": {
      "PatchWrite:store": {
        last: 0,
        set: bind(5)
      }
    },
    "PatchText:#text/2": "y",
    "PatchLoop:#text/4": ["y", {
      "PatchBranch:#text/0": [{
        "PatchSetup:": {
          "PatchValue:packages/runtime-tags/src/__tests__/fixtures/persisted-bind-loop-sibling/template.marko0": 0
        },
        "PatchBind:6": [_.a, 2, _.c, _.d]
      }, _.e]
    }, "x", {
      "PatchBranch:#text/0": 0
    }, _.f]
  }, "packages/runtime-tags/src/__tests__/fixtures/persisted-bind-loop-sibling/template.marko_1*shell"]
}]

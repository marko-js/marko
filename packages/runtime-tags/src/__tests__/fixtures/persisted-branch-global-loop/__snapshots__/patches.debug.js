// PATCH
[`packages/runtime-tags/src/__tests__/fixtures/persisted-branch-global-loop/template.marko_3*shell;/D b D m&;<p> <button> </button></p>`, `packages/runtime-tags/src/__tests__/fixtures/persisted-branch-global-loop/template.marko_1*shell; ;<div></div>`, {
  "$global:": {
    search: [{
      q: "b"
    }]
  },
  "PatchBranch:#text/0": [1, {
    "PatchLoop:#div/0": [1, {
      "PatchChild:#childScope/0": {
        "PatchText:#text/0": "b1",
        "PatchSetup:": {
          "PatchInit:": _.a = "!packages/runtime-tags/src/__tests__/fixtures/persisted-branch-global-loop/tags/row.marko_0",
          "PatchValue:packages/runtime-tags/src/__tests__/fixtures/persisted-branch-global-loop/tags/row.marko0": 0
        }
      }
    }, 2, {
      "PatchChild:#childScope/0": {
        "PatchText:#text/0": "b2",
        "PatchSetup:": {
          "PatchInit:": _.a,
          "PatchValue:packages/runtime-tags/src/__tests__/fixtures/persisted-branch-global-loop/tags/row.marko0": 0
        }
      }
    }, 3, {
      "PatchChild:#childScope/0": {
        "PatchText:#text/0": "b3",
        "PatchSetup:": {
          "PatchInit:": _.a,
          "PatchValue:packages/runtime-tags/src/__tests__/fixtures/persisted-branch-global-loop/tags/row.marko0": 0
        }
      }
    }, "packages/runtime-tags/src/__tests__/fixtures/persisted-branch-global-loop/template.marko_3*shell"]
  }, "packages/runtime-tags/src/__tests__/fixtures/persisted-branch-global-loop/template.marko_1*shell"]
}]

// PATCH
[`packages/runtime-tags/src/__tests__/fixtures/persisted-branch-global-loop/template.marko_2*shell,<p>invalid</p>`, {
  "$global:": {
    search: [null, !0]
  },
  "PatchBranch:#text/0": "packages/runtime-tags/src/__tests__/fixtures/persisted-branch-global-loop/template.marko_2*shell"
}]

// PATCH
[`packages/runtime-tags/src/__tests__/fixtures/persisted-branch-global-loop/template.marko_3*shell;/D b D m&;<p> <button> </button></p>`, `packages/runtime-tags/src/__tests__/fixtures/persisted-branch-global-loop/template.marko_1*shell; ;<div></div>`, {
  "$global:": {
    search: [{
      q: "c"
    }]
  },
  "PatchBranch:#text/0": [1, {
    "PatchLoop:#div/0": [1, {
      "PatchChild:#childScope/0": {
        "PatchText:#text/0": "c1",
        "PatchSetup:": {
          "PatchInit:": _.a = "!packages/runtime-tags/src/__tests__/fixtures/persisted-branch-global-loop/tags/row.marko_0",
          "PatchValue:packages/runtime-tags/src/__tests__/fixtures/persisted-branch-global-loop/tags/row.marko0": 0
        }
      }
    }, 2, {
      "PatchChild:#childScope/0": {
        "PatchText:#text/0": "c2",
        "PatchSetup:": {
          "PatchInit:": _.a,
          "PatchValue:packages/runtime-tags/src/__tests__/fixtures/persisted-branch-global-loop/tags/row.marko0": 0
        }
      }
    }, 3, {
      "PatchChild:#childScope/0": {
        "PatchText:#text/0": "c3",
        "PatchSetup:": {
          "PatchInit:": _.a,
          "PatchValue:packages/runtime-tags/src/__tests__/fixtures/persisted-branch-global-loop/tags/row.marko0": 0
        }
      }
    }, "packages/runtime-tags/src/__tests__/fixtures/persisted-branch-global-loop/template.marko_3*shell"]
  }, "packages/runtime-tags/src/__tests__/fixtures/persisted-branch-global-loop/template.marko_1*shell"]
}]

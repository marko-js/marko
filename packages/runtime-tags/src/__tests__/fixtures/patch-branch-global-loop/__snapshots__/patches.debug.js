// PATCH
[`packages/runtime-tags/src/__tests__/fixtures/patch-branch-global-loop/template.marko_3*shell !#childScope/0>packages/runtime-tags/src/__tests__/fixtures/patch-branch-global-loop/tags/row.marko_0;/D b D m&;<p> <button> </button></p>`, `packages/runtime-tags/src/__tests__/fixtures/patch-branch-global-loop/template.marko_1*shell; ;<div></div>`, {
  "$global:": {
    search: [{
      q: "b"
    }]
  },
  "PatchBranch:#text/0": [1, {
    "PatchLoop:#div/0": [1, {
      "PatchChild:#childScope/0": {
        "PatchText:#text/0": "b1",
        "PatchSetupValues:": {
          "PatchFill:packages/runtime-tags/src/__tests__/fixtures/patch-branch-global-loop/tags/row.marko_fill0": 0
        }
      }
    }, 2, {
      "PatchChild:#childScope/0": {
        "PatchText:#text/0": "b2",
        "PatchSetupValues:": {
          "PatchFill:packages/runtime-tags/src/__tests__/fixtures/patch-branch-global-loop/tags/row.marko_fill0": 0
        }
      }
    }, 3, {
      "PatchChild:#childScope/0": {
        "PatchText:#text/0": "b3",
        "PatchSetupValues:": {
          "PatchFill:packages/runtime-tags/src/__tests__/fixtures/patch-branch-global-loop/tags/row.marko_fill0": 0
        }
      }
    }, "packages/runtime-tags/src/__tests__/fixtures/patch-branch-global-loop/template.marko_3*shell"]
  }, "packages/runtime-tags/src/__tests__/fixtures/patch-branch-global-loop/template.marko_1*shell"]
}]
;CxQ

// PATCH holding CxQ
[`packages/runtime-tags/src/__tests__/fixtures/patch-branch-global-loop/template.marko_2*shell,<p>invalid</p>`, {
  "$global:": {
    search: [null, !0]
  },
  "PatchBranch:#text/0": "packages/runtime-tags/src/__tests__/fixtures/patch-branch-global-loop/template.marko_2*shell"
}]
;Cxw

// PATCH holding Cxw
{
  "$global:": {
    search: [{
      q: "c"
    }]
  },
  "PatchBranch:#text/0": [1, {
    "PatchLoop:#div/0": [1, {
      "PatchChild:#childScope/0": {
        "PatchText:#text/0": "c1",
        "PatchSetupValues:": {
          "PatchFill:packages/runtime-tags/src/__tests__/fixtures/patch-branch-global-loop/tags/row.marko_fill0": 0
        }
      }
    }, 2, {
      "PatchChild:#childScope/0": {
        "PatchText:#text/0": "c2",
        "PatchSetupValues:": {
          "PatchFill:packages/runtime-tags/src/__tests__/fixtures/patch-branch-global-loop/tags/row.marko_fill0": 0
        }
      }
    }, 3, {
      "PatchChild:#childScope/0": {
        "PatchText:#text/0": "c3",
        "PatchSetupValues:": {
          "PatchFill:packages/runtime-tags/src/__tests__/fixtures/patch-branch-global-loop/tags/row.marko_fill0": 0
        }
      }
    }, "packages/runtime-tags/src/__tests__/fixtures/patch-branch-global-loop/template.marko_3*shell"]
  }, "packages/runtime-tags/src/__tests__/fixtures/patch-branch-global-loop/template.marko_1*shell"]
}

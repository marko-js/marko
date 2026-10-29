// PATCH
[`packages/runtime-tags/src/__tests__/fixtures/patch-page-loop-child-let-content/template.marko_1*content`, `packages/runtime-tags/src/__tests__/fixtures/patch-page-loop-child-let-content/tags/outer.marko_1*shell !#childScope/0>packages/runtime-tags/src/__tests__/fixtures/patch-page-loop-child-let-content/tags/card.marko_0;/ b%c&b;<button>clear</button><!><!><!>`, {
  "PatchChild:#childScope/0": {
    "PatchLoop:#text/0": [1, {
      "PatchChild:#childScope/0": {
        "PatchSetup:": {
          "PatchDynamicTag:#text/1": _.a = "^^^^packages/runtime-tags/src/__tests__/fixtures/patch-page-loop-child-let-content/template.marko_1*content",
          "PatchChild:BranchScopes:#text/1": {
            "PatchText:#text/0": "b",
            "PatchSetup:": {
              "PatchInit:": _.b = "packages/runtime-tags/src/__tests__/fixtures/patch-page-loop-child-let-content/template.marko_1_input_label#0:4/subscribe"
            }
          }
        }
      }
    }, 2, {
      "PatchChild:#childScope/0": {
        "PatchSetup:": {
          "PatchDynamicTag:#text/1": _.a,
          "PatchChild:BranchScopes:#text/1": {
            "PatchText:#text/0": "b",
            "PatchSetup:": {
              "PatchInit:": _.b
            }
          }
        }
      }
    }, "packages/runtime-tags/src/__tests__/fixtures/patch-page-loop-child-let-content/tags/outer.marko_1*shell"]
  },
  "PatchFill:packages/runtime-tags/src/__tests__/fixtures/patch-page-loop-child-let-content/template.marko_fill0": "b"
}]
;CxQ

// PATCH holding CxQ
{
  "PatchChild:#childScope/0": {
    "PatchLoop:#text/0": [1, {
      "PatchChild:#childScope/0": {
        "PatchSetup:": {
          "PatchDynamicTag:#text/1": _.a = "^^^^packages/runtime-tags/src/__tests__/fixtures/patch-page-loop-child-let-content/template.marko_1*content",
          "PatchChild:BranchScopes:#text/1": {
            "PatchText:#text/0": "c",
            "PatchSetup:": {
              "PatchInit:": _.b = "packages/runtime-tags/src/__tests__/fixtures/patch-page-loop-child-let-content/template.marko_1_input_label#0:4/subscribe"
            }
          }
        }
      }
    }, 2, {
      "PatchChild:#childScope/0": {
        "PatchSetup:": {
          "PatchDynamicTag:#text/1": _.a,
          "PatchChild:BranchScopes:#text/1": {
            "PatchText:#text/0": "c",
            "PatchSetup:": {
              "PatchInit:": _.b
            }
          }
        }
      }
    }, 3, {
      "PatchChild:#childScope/0": {
        "PatchSetup:": {
          "PatchDynamicTag:#text/1": _.a,
          "PatchChild:BranchScopes:#text/1": {
            "PatchText:#text/0": "c",
            "PatchSetup:": {
              "PatchInit:": _.b
            }
          }
        }
      }
    }, "packages/runtime-tags/src/__tests__/fixtures/patch-page-loop-child-let-content/tags/outer.marko_1*shell"]
  },
  "PatchFill:packages/runtime-tags/src/__tests__/fixtures/patch-page-loop-child-let-content/template.marko_fill0": "c"
}

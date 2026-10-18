// PATCH
[`packages/runtime-tags/src/__tests__/fixtures/patch-loop-define-content-owner/template.marko_6*content packages/runtime-tags/src/__tests__/fixtures/patch-loop-define-content-owner/template.marko_6_n#2:11/init;D%c%;<i><!> <!></i>`, `packages/runtime-tags/src/__tests__/fixtures/patch-loop-define-content-owner/template.marko_4*shell;b%;<!><!><!>`, `packages/runtime-tags/src/__tests__/fixtures/patch-loop-define-content-owner/template.marko_7*content packages/runtime-tags/src/__tests__/fixtures/patch-loop-define-content-owner/template.marko_7_n#2:11/init,`, `packages/runtime-tags/src/__tests__/fixtures/patch-loop-define-content-owner/template.marko_1*content !,`, `packages/runtime-tags/src/__tests__/fixtures/patch-loop-define-content-owner/template.marko_5*content packages/runtime-tags/src/__tests__/fixtures/patch-loop-define-content-owner/template.marko_5_n#2:11/init,`, `packages/runtime-tags/src/__tests__/fixtures/patch-loop-define-content-owner/template.marko_3*shell;b%;<!><!><!>`, `packages/runtime-tags/src/__tests__/fixtures/patch-loop-define-content-owner/template.marko_2*shell !packages/runtime-tags/src/__tests__/fixtures/patch-loop-define-content-owner/template.marko_2;D D l/D%b%l&%b%l;<section><button> </button><p><!><!></p><!><!></section>`, {
  "PatchLoop:#text/0": [1, {
    "PatchChild:#childScope/2": {
      "PatchSetup:": {
        "PatchText:#text/0": "direct"
      },
      "PatchBranch:#text/1": [{
        "PatchDynamicTag:#text/0": _.a = "^^^packages/runtime-tags/src/__tests__/fixtures/patch-loop-define-content-owner/template.marko_6*content",
        "PatchChild:BranchScopes:#text/0": {
          "PatchText:#text/0": "b"
        }
      }, _.b = "packages/runtime-tags/src/__tests__/fixtures/patch-loop-define-content-owner/template.marko_4*shell"]
    },
    "PatchDynamicTag:#text/3": [">span", {
      label: "dynamic"
    }, "packages/runtime-tags/src/__tests__/fixtures/patch-loop-define-content-owner/template.marko_7*content"],
    "PatchChild:BranchScopes:#text/3": {
      "PatchChild:BranchScopes:#span/0": {
        "PatchText:#text/0": "b"
      }
    },
    "PatchLoop:#text/4": [],
    "PatchSetup:": {
      "PatchWrite:Label": {
        content: _([
          ["#text/0", [0, 1]]
        ], "packages/runtime-tags/src/__tests__/fixtures/patch-loop-define-content-owner/template.marko_5*content", 1)
      },
      "PatchValue:packages/runtime-tags/src/__tests__/fixtures/patch-loop-define-content-owner/template.marko_fill2": 0
    }
  }, 2, {
    "PatchChild:#childScope/2": {
      "PatchSetup:": {
        "PatchText:#text/0": "direct"
      },
      "PatchBranch:#text/1": [{
        "PatchDynamicTag:#text/0": _.a,
        "PatchChild:BranchScopes:#text/0": {
          "PatchText:#text/0": "c"
        }
      }, _.b]
    },
    "PatchDynamicTag:#text/3": "^^packages/runtime-tags/src/__tests__/fixtures/patch-loop-define-content-owner/template.marko_1*content",
    "PatchChild:BranchScopes:#text/3": {
      "PatchText:#text/0": "dynamic",
      "PatchBranch:#text/1": [{
        "PatchDynamicTag:#text/0": "^#ClosestBranch #ParentBranch #ParentBranch packages/runtime-tags/src/__tests__/fixtures/patch-loop-define-content-owner/template.marko_7*content",
        "PatchChild:BranchScopes:#text/0": {
          "PatchText:#text/0": "c"
        }
      }, _.b]
    },
    "PatchLoop:#text/4": [{
      "PatchDynamicTag:#text/0": _.c = "^^^packages/runtime-tags/src/__tests__/fixtures/patch-loop-define-content-owner/template.marko_1*content",
      "PatchChild:BranchScopes:#text/0": {
        "PatchText:#text/0": "y",
        "PatchBranch:#text/1": [{
          "PatchDynamicTag:#text/0": _.d = "^#ClosestBranch #ParentBranch #ParentBranch #ParentBranch packages/runtime-tags/src/__tests__/fixtures/patch-loop-define-content-owner/template.marko_5*content",
          "PatchChild:BranchScopes:#text/0": {
            "PatchText:#text/0": "c"
          }
        }, _.b]
      }
    }, {
      "PatchDynamicTag:#text/0": _.c,
      "PatchChild:BranchScopes:#text/0": {
        "PatchText:#text/0": "z",
        "PatchBranch:#text/1": [{
          "PatchDynamicTag:#text/0": _.d,
          "PatchChild:BranchScopes:#text/0": {
            "PatchText:#text/0": "c"
          }
        }, _.b]
      }
    }, "packages/runtime-tags/src/__tests__/fixtures/patch-loop-define-content-owner/template.marko_3*shell"],
    "PatchValue:packages/runtime-tags/src/__tests__/fixtures/patch-loop-define-content-owner/template.marko_fill1": "c",
    "PatchSetup:": {
      "PatchWrite:Label": {
        content: _([
          ["#text/0", [1, 2]]
        ], "packages/runtime-tags/src/__tests__/fixtures/patch-loop-define-content-owner/template.marko_5*content", 1)
      },
      "PatchValue:packages/runtime-tags/src/__tests__/fixtures/patch-loop-define-content-owner/template.marko_fill2": 0
    }
  }, "packages/runtime-tags/src/__tests__/fixtures/patch-loop-define-content-owner/template.marko_2*shell"]
}]
;Ef4

// PATCH holding Ef4
{
  "PatchLoop:#text/0": [2, {
    "PatchChild:#childScope/2": {
      "PatchSetup:": {
        "PatchText:#text/0": "direct"
      },
      "PatchBranch:#text/1": [{
        "PatchDynamicTag:#text/0": _.b = "^^^packages/runtime-tags/src/__tests__/fixtures/patch-loop-define-content-owner/template.marko_6*content",
        "PatchChild:BranchScopes:#text/0": {
          "PatchText:#text/0": "d"
        }
      }, _.c = "packages/runtime-tags/src/__tests__/fixtures/patch-loop-define-content-owner/template.marko_4*shell"]
    },
    "PatchDynamicTag:#text/3": [">span", {
      label: "dynamic"
    }, "packages/runtime-tags/src/__tests__/fixtures/patch-loop-define-content-owner/template.marko_7*content"],
    "PatchChild:BranchScopes:#text/3": {
      "PatchChild:BranchScopes:#span/0": {
        "PatchText:#text/0": "d"
      }
    },
    "PatchLoop:#text/4": [{
      "PatchDynamicTag:#text/0": [">span", {
        label: "z",
        content: _.a = {
          content: _([
            ["#text/0", [0, 2]]
          ], "packages/runtime-tags/src/__tests__/fixtures/patch-loop-define-content-owner/template.marko_5*content", 1)
        }
      }],
      "PatchChild:BranchScopes:#text/0": {
        "PatchChild:BranchScopes:#span/0": {
          "PatchText:#text/0": "d"
        }
      }
    }, _.d = "packages/runtime-tags/src/__tests__/fixtures/patch-loop-define-content-owner/template.marko_3*shell"],
    "PatchValue:packages/runtime-tags/src/__tests__/fixtures/patch-loop-define-content-owner/template.marko_fill1": "d",
    "PatchSetup:": {
      "PatchWrite:Label": _.a,
      "PatchValue:packages/runtime-tags/src/__tests__/fixtures/patch-loop-define-content-owner/template.marko_fill2": 0
    }
  }, 1, {
    "PatchChild:#childScope/2": {
      "PatchSetup:": {
        "PatchText:#text/0": "direct"
      },
      "PatchBranch:#text/1": [{
        "PatchDynamicTag:#text/0": _.b,
        "PatchChild:BranchScopes:#text/0": {
          "PatchText:#text/0": "e"
        }
      }, _.c]
    },
    "PatchDynamicTag:#text/3": "^^packages/runtime-tags/src/__tests__/fixtures/patch-loop-define-content-owner/template.marko_1*content",
    "PatchChild:BranchScopes:#text/3": {
      "PatchText:#text/0": "dynamic",
      "PatchBranch:#text/1": [{
        "PatchDynamicTag:#text/0": "^#ClosestBranch #ParentBranch #ParentBranch packages/runtime-tags/src/__tests__/fixtures/patch-loop-define-content-owner/template.marko_7*content",
        "PatchChild:BranchScopes:#text/0": {
          "PatchText:#text/0": "e"
        }
      }, _.c]
    },
    "PatchLoop:#text/4": [{
      "PatchDynamicTag:#text/0": "^^^packages/runtime-tags/src/__tests__/fixtures/patch-loop-define-content-owner/template.marko_1*content",
      "PatchChild:BranchScopes:#text/0": {
        "PatchText:#text/0": "x",
        "PatchBranch:#text/1": [{
          "PatchDynamicTag:#text/0": "^#ClosestBranch #ParentBranch #ParentBranch #ParentBranch packages/runtime-tags/src/__tests__/fixtures/patch-loop-define-content-owner/template.marko_5*content",
          "PatchChild:BranchScopes:#text/0": {
            "PatchText:#text/0": "e"
          }
        }, _.c]
      }
    }, _.d],
    "PatchValue:packages/runtime-tags/src/__tests__/fixtures/patch-loop-define-content-owner/template.marko_fill1": "e",
    "PatchSetup:": {
      "PatchWrite:Label": {
        content: _([
          ["#text/0", 1]
        ], "packages/runtime-tags/src/__tests__/fixtures/patch-loop-define-content-owner/template.marko_5*content", 1)
      },
      "PatchValue:packages/runtime-tags/src/__tests__/fixtures/patch-loop-define-content-owner/template.marko_fill2": 0
    }
  }, "packages/runtime-tags/src/__tests__/fixtures/patch-loop-define-content-owner/template.marko_2*shell"]
}

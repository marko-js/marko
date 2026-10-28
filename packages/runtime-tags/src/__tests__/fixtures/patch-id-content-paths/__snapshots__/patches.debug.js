// PATCH
[`packages/runtime-tags/src/__tests__/fixtures/patch-id-content-paths/template.marko_2*shell;b// D l b%c&b&b;<!><label> </label><input><!><!><!><!>`, `packages/runtime-tags/src/__tests__/fixtures/patch-id-content-paths/tags/field.marko; D l b%;<label> </label><input><!><!>`, `packages/runtime-tags/src/__tests__/fixtures/patch-id-content-paths/template.marko_6*content;/ D l b%c&b;<label> </label><input><!><!><!>`, `packages/runtime-tags/src/__tests__/fixtures/patch-id-content-paths/template.marko_7*content;/ D l b%c&b;<label> </label><input><!><!><!>`, `packages/runtime-tags/src/__tests__/fixtures/patch-id-content-paths/template.marko_5*shell;b%;<!><!><!>`, {
  "PatchBranch:#text/0": [{
    "PatchChild:#childScope/0": {
      "PatchChild:#childScope/0": {
        "PatchSetup:": {
          "PatchAttr:#label/0 for": _.a = "sM_.#childScope/0@2.#childScope/0@0.uid",
          "PatchText:#text/1": "first",
          "PatchAttr:#input/2 id": _.a,
          "PatchAttr:#input/2 aria-describedby": $
        },
        "PatchDynamicTag:#text/3": 0
      }
    }
  }, "packages/runtime-tags/src/__tests__/fixtures/patch-id-content-paths/template.marko_2*shell"],
  "PatchDynamicTag:#text/1": ["packages/runtime-tags/src/__tests__/fixtures/patch-id-content-paths/tags/field.marko", "packages/runtime-tags/src/__tests__/fixtures/patch-id-content-paths/template.marko_6*content"],
  "PatchChild:BranchScopes:#text/1": {
    "PatchAttr:#label/0 for": _.b = "sM_.#text/1@4.uid",
    "PatchText:#text/1": "dynamic",
    "PatchAttr:#input/2 id": _.b,
    "PatchAttr:#input/2 aria-describedby": $,
    "PatchDynamicTag:#text/3": "^^packages/runtime-tags/src/__tests__/fixtures/patch-id-content-paths/template.marko_6*content",
    "PatchChild:BranchScopes:#text/3": {
      "PatchChild:#childScope/0": {
        "PatchSetup:": {
          "PatchAttr:#label/0 for": _.c = "sM_.#text/1@4.#text/3@0.#childScope/0@3.uid",
          "PatchText:#text/1": "content",
          "PatchAttr:#input/2 id": _.c,
          "PatchAttr:#input/2 aria-describedby": $
        },
        "PatchDynamicTag:#text/3": 0
      }
    }
  },
  "PatchChild:#childScope/2": {
    "PatchLoop:#text/0": [{
      "PatchDynamicTag:#text/0": _.e = "^^^packages/runtime-tags/src/__tests__/fixtures/patch-id-content-paths/template.marko_7*content",
      "PatchChild:BranchScopes:#text/0": {
        "PatchChild:#childScope/0": {
          "PatchSetup:": {
            "PatchAttr:#label/0 for": _.d = "sM_.#childScope/2@6[0].#text/0@1.#childScope/0@5.uid",
            "PatchAttr:#input/2 id": _.d,
            "PatchAttr:#input/2 aria-describedby": $
          },
          "PatchText:#text/1": "b",
          "PatchDynamicTag:#text/3": 0
        }
      }
    }, {
      "PatchDynamicTag:#text/0": _.e,
      "PatchChild:BranchScopes:#text/0": {
        "PatchChild:#childScope/0": {
          "PatchSetup:": {
            "PatchAttr:#label/0 for": _.f = "sM_.#childScope/2@6[1].#text/0@1.#childScope/0@5.uid",
            "PatchAttr:#input/2 id": _.f,
            "PatchAttr:#input/2 aria-describedby": $
          },
          "PatchText:#text/1": "c",
          "PatchDynamicTag:#text/3": 0
        }
      }
    }, "packages/runtime-tags/src/__tests__/fixtures/patch-id-content-paths/template.marko_5*shell"]
  }
}]
;F0EH

// PATCH holding F0EH
[`packages/runtime-tags/src/__tests__/fixtures/patch-id-content-paths/template.marko_3*shell;b// D l b%c&b&b;<!><label> </label><input><!><!><!><!>`, {
  "PatchBranch:#text/0": [1, {
    "PatchChild:#childScope/0": {
      "PatchChild:#childScope/0": {
        "PatchSetup:": {
          "PatchAttr:#label/0 for": _.a = "sM_.#childScope/0@2.#childScope/0@0.uid",
          "PatchText:#text/1": "other",
          "PatchAttr:#input/2 id": _.a,
          "PatchAttr:#input/2 aria-describedby": $
        },
        "PatchDynamicTag:#text/3": 0
      }
    }
  }, "packages/runtime-tags/src/__tests__/fixtures/patch-id-content-paths/template.marko_3*shell"],
  "PatchDynamicTag:#text/1": [">section", "packages/runtime-tags/src/__tests__/fixtures/patch-id-content-paths/template.marko_6*content", {
    name: "dynamic"
  }],
  "PatchChild:BranchScopes:#text/1": {
    "PatchChild:BranchScopes:#section/0": {
      "PatchChild:#childScope/0": {
        "PatchSetup:": {
          "PatchAttr:#label/0 for": _.b = "sM_.#text/1@4.#childScope/0@3.uid",
          "PatchText:#text/1": "content",
          "PatchAttr:#input/2 id": _.b,
          "PatchAttr:#input/2 aria-describedby": $
        },
        "PatchDynamicTag:#text/3": 0
      }
    }
  },
  "PatchChild:#childScope/2": {
    "PatchLoop:#text/0": [{
      "PatchDynamicTag:#text/0": _.d = "^^^packages/runtime-tags/src/__tests__/fixtures/patch-id-content-paths/template.marko_7*content",
      "PatchChild:BranchScopes:#text/0": {
        "PatchChild:#childScope/0": {
          "PatchSetup:": {
            "PatchAttr:#label/0 for": _.c = "sM_.#childScope/2@6[0].#text/0@1.#childScope/0@5.uid",
            "PatchAttr:#input/2 id": _.c,
            "PatchAttr:#input/2 aria-describedby": $
          },
          "PatchText:#text/1": "c",
          "PatchDynamicTag:#text/3": 0
        }
      }
    }, {
      "PatchDynamicTag:#text/0": _.d,
      "PatchChild:BranchScopes:#text/0": {
        "PatchChild:#childScope/0": {
          "PatchSetup:": {
            "PatchAttr:#label/0 for": _.e = "sM_.#childScope/2@6[1].#text/0@1.#childScope/0@5.uid",
            "PatchAttr:#input/2 id": _.e,
            "PatchAttr:#input/2 aria-describedby": $
          },
          "PatchText:#text/1": "a",
          "PatchDynamicTag:#text/3": 0
        }
      }
    }, "packages/runtime-tags/src/__tests__/fixtures/patch-id-content-paths/template.marko_5*shell"]
  }
}]
;F8EH

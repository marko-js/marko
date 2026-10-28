// PATCH
[`packages/runtime-tags/src/__tests__/fixtures/patch-id-created-label/template.marko_2*shell; D ;<label> </label>`, `packages/runtime-tags/src/__tests__/fixtures/patch-id-created-label/template.marko_1*shell; b%;<input><!><!>`, `packages/runtime-tags/src/__tests__/fixtures/patch-id-created-label/template.marko_3*content`, `packages/runtime-tags/src/__tests__/fixtures/patch-id-created-label/template.marko_4*shell; ;<label>field</label>`, `~packages/runtime-tags/src/__tests__/fixtures/patch-id-created-label/template.marko_6*content; b D ;<input><label> </label>`, `packages/runtime-tags/src/__tests__/fixtures/patch-id-created-label/template.marko_5*shell !#childScope/0>packages/runtime-tags/src/__tests__/fixtures/patch-id-created-label/tags/card.marko_0;/ b%c&b;<button>clear</button><!><!><!>`, {
  "PatchLoop:#text/0": ["b", {
    "PatchSetup:": {
      "PatchAttr:#input/0 id": "sM_[\"b\"].uid"
    },
    "PatchBranch:#text/1": [{
      "PatchSetup:": {
        "PatchAttr:#label/0 for": "sM_[\"b\"].uid"
      },
      "PatchText:#text/1": "b"
    }, _.a = "packages/runtime-tags/src/__tests__/fixtures/patch-id-created-label/template.marko_2*shell"]
  }, "a", {
    "PatchSetup:": {
      "PatchAttr:#input/0 id": "sM_[\"a\"].uid"
    },
    "PatchBranch:#text/1": [{
      "PatchSetup:": {
        "PatchAttr:#label/0 for": "sM_[\"a\"].uid"
      },
      "PatchText:#text/1": "a"
    }, _.a]
  }, "packages/runtime-tags/src/__tests__/fixtures/patch-id-created-label/template.marko_1*shell"],
  "PatchDynamicTag:#text/1": _.c = "^packages/runtime-tags/src/__tests__/fixtures/patch-id-created-label/template.marko_3*content",
  "PatchChild:BranchScopes:#text/1": {
    "PatchSetup:": {
      "PatchAttr:#input/0 id": _.b = "sM_.#text/1@0.uid~1",
      "PatchWrite:uid": _.b
    },
    "PatchBranch:#text/1": [{
      "PatchSetup:": {
        "PatchAttr:#label/0 for": _.b
      }
    }, _.e = "packages/runtime-tags/src/__tests__/fixtures/patch-id-created-label/template.marko_4*shell"]
  },
  "PatchDynamicTag:#text/2": _.c,
  "PatchChild:BranchScopes:#text/2": {
    "PatchSetup:": {
      "PatchAttr:#input/0 id": _.d = "sM_.#text/2@1.uid~1",
      "PatchWrite:uid": _.d
    },
    "PatchBranch:#text/1": [{
      "PatchSetup:": {
        "PatchAttr:#label/0 for": _.d
      }
    }, _.e]
  },
  "PatchLoop:#text/3": [1, {
    "PatchChild:#childScope/0": {
      "PatchWithheld:#text/1": [{
        "PatchSetup:": {
          "PatchAttr:#input/0 id": _.f = "sM_[1].#childScope/0@2.#text/1@0.uid~2",
          "PatchAttr:#label/1 for": _.f
        },
        "PatchText:#text/2": 1
      }, _.h = "packages/runtime-tags/src/__tests__/fixtures/patch-id-created-label/template.marko_6*content", "^^"]
    }
  }, 2, {
    "PatchChild:#childScope/0": {
      "PatchWithheld:#text/1": [{
        "PatchSetup:": {
          "PatchAttr:#input/0 id": _.g = "sM_[2].#childScope/0@2.#text/1@0.uid~2",
          "PatchAttr:#label/1 for": _.g
        },
        "PatchText:#text/2": 2
      }, _.h, "^^"]
    }
  }, "packages/runtime-tags/src/__tests__/fixtures/patch-id-created-label/template.marko_5*shell"]
}]
;E3wB

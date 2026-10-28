// PATCH
[`packages/runtime-tags/src/__tests__/fixtures/patch-id-catch-rows/template.marko_3*content;b%;<!><!><!>`, `packages/runtime-tags/src/__tests__/fixtures/patch-id-catch-rows/template.marko_4*content;D ;<p> </p>`, `packages/runtime-tags/src/__tests__/fixtures/patch-id-catch-rows/template.marko_1*shell;b%;<!><!><!>`, {
  "PatchLoop:#text/1": ["a", {
    "PatchChild:BranchScopes:#text/0": [{
      "PatchPending:#text/0": _.a = "packages/runtime-tags/src/__tests__/fixtures/patch-id-catch-rows/template.marko_4*content"
    }, _.b = "packages/runtime-tags/src/__tests__/fixtures/patch-id-catch-rows/template.marko_2*content", _.c = "packages/runtime-tags/src/__tests__/fixtures/patch-id-catch-rows/template.marko_3*content"]
  }, "b", {
    "PatchChild:BranchScopes:#text/0": [{
      "PatchPending:#text/0": _.a
    }, _.b, _.c]
  }, "packages/runtime-tags/src/__tests__/fixtures/patch-id-catch-rows/template.marko_1*shell"]
}]
[`packages/runtime-tags/src/__tests__/fixtures/patch-id-catch-rows/template.marko_2*content;/ D l b&;<label> </label><input>`, {
  "PatchLoopItem:#text/1": [
    [0, "a"], {
      "PatchCatch:#text/0": [{
        "PatchChild:#childScope/0": {
          "PatchSetup:": {
            "PatchAttr:#label/0 for": _.d = "sM_[\"a\"].#childScope/0@0.uid",
            "PatchAttr:#input/2 id": _.d,
            "PatchAttr:#input/2 aria-describedby": "sM_.heading"
          },
          "PatchText:#text/1": "x"
        }
      }, _.b]
    },
    [1, "b"], {
      "PatchCatch:#text/0": [{
        "PatchChild:#childScope/0": {
          "PatchSetup:": {
            "PatchAttr:#label/0 for": _.e = "sM_[\"b\"].#childScope/0@0.uid",
            "PatchAttr:#input/2 id": _.e,
            "PatchAttr:#input/2 aria-describedby": "sM_.heading"
          },
          "PatchText:#text/1": "y"
        }
      }, _.b]
    }
  ]
}]
;D1w

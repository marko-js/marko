// PATCH
[`packages/runtime-tags/src/__tests__/fixtures/patch-id-catch-rows/template.marko_3*content;b%;<!><!><!>`, `packages/runtime-tags/src/__tests__/fixtures/patch-id-catch-rows/template.marko_4*content;D ;<p> </p>`, `packages/runtime-tags/src/__tests__/fixtures/patch-id-catch-rows/template.marko_1*shell;b%;<!><!><!>`, {
  "PatchLoop:#text/1": ["a", {}, "b", {}, "packages/runtime-tags/src/__tests__/fixtures/patch-id-catch-rows/template.marko_1*shell"]
}]
[`packages/runtime-tags/src/__tests__/fixtures/patch-id-catch-rows/template.marko_2*content;/ D l b&;<label> </label><input>`, {
  "PatchLoopItem:#text/1": [
    [0, "a"], {
      "PatchChild:BranchScopes:#text/0": [0, _.b = "packages/runtime-tags/src/__tests__/fixtures/patch-id-catch-rows/template.marko_2*content", "packages/runtime-tags/src/__tests__/fixtures/patch-id-catch-rows/template.marko_3*content"],
      "PatchCatch:#text/0": [{
        "PatchChild:#childScope/0": {
          "PatchSetup:": {
            "PatchAttr:#label/0 for": _.a = "sM_[\"a\"].#childScope/0@0.uid",
            "PatchAttr:#input/2 id": _.a,
            "PatchAttr:#input/2 aria-describedby": "sM_.heading"
          },
          "PatchText:#text/1": "x"
        }
      }, _.b]
    }
  ]
}]
{
  "PatchLoopItem:#text/1": [
    [1, "b"], {
      "PatchChild:BranchScopes:#text/0": [0, _.b, _(1)["PatchLoopItem:#text/1"][1]["PatchChild:BranchScopes:#text/0"][2]],
      "PatchCatch:#text/0": [{
        "PatchChild:#childScope/0": {
          "PatchSetup:": {
            "PatchAttr:#label/0 for": _.c = "sM_[\"b\"].#childScope/0@0.uid",
            "PatchAttr:#input/2 id": _.c,
            "PatchAttr:#input/2 aria-describedby": "sM_.heading"
          },
          "PatchText:#text/1": "y"
        }
      }, _.b]
    }
  ]
}
;D1w

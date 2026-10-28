// PATCH
[`packages/runtime-tags/src/__tests__/fixtures/patch-loop-content-closure-scopes/template.marko_2*content;D ;<p> </p>`, `packages/runtime-tags/src/__tests__/fixtures/patch-loop-content-closure-scopes/template.marko_1*shell;/E lD%m&;<div class=panel><h4> </h4><div class=body><!></div></div>`, {
  "PatchLoop:#text/0": [{
    "PatchChild:#childScope/0": {
      "PatchText:#text/0": "L0b",
      "PatchDynamicTag:#text/1": _.a = "^^packages/runtime-tags/src/__tests__/fixtures/patch-loop-content-closure-scopes/template.marko_2*content",
      "PatchChild:BranchScopes:#text/1": {
        "PatchText:#text/0": "T0b"
      }
    }
  }, {
    "PatchChild:#childScope/0": {
      "PatchText:#text/0": "L1b",
      "PatchDynamicTag:#text/1": _.a,
      "PatchChild:BranchScopes:#text/1": {
        "PatchText:#text/0": "T1b"
      }
    }
  }, {
    "PatchChild:#childScope/0": {
      "PatchText:#text/0": "L2b",
      "PatchDynamicTag:#text/1": _.a,
      "PatchChild:BranchScopes:#text/1": {
        "PatchText:#text/0": "T2b"
      }
    }
  }, "packages/runtime-tags/src/__tests__/fixtures/patch-loop-content-closure-scopes/template.marko_1*shell"]
}]
;Cww

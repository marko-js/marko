// PATCH
[`packages/runtime-tags/src/__tests__/fixtures/patch-content-global-scriptless/template.marko_3*content;D ;<i> </i>`, `packages/runtime-tags/src/__tests__/fixtures/patch-content-global-scriptless/template.marko_2*shell;/E l%l&;<section><h2> </h2><!></section>`, (_.a = {
  "$global:": {
    brand: "Zed"
  },
  "PatchChild:#childScope/0": {
    "PatchText:#text/0": "b",
    "PatchChild:BranchScopes:#text/1": {
      "PatchText:#text/0": "Zed"
    }
  },
  "PatchBranch:#text/1": [{
    "PatchChild:#childScope/0": {
      "PatchText:#text/0": "x",
      "PatchDynamicTag:#text/1": "^packages/runtime-tags/src/__tests__/fixtures/patch-content-global-scriptless/template.marko_3*content",
      "PatchChild:BranchScopes:#text/1": {
        "PatchText:#text/0": "Zed"
      }
    }
  }, "packages/runtime-tags/src/__tests__/fixtures/patch-content-global-scriptless/template.marko_2*shell"]
}, _.a)]
"BQMA"

// PATCH holding BQMA
(_.a = {
  "$global:": {
    brand: "Zed"
  },
  "PatchChild:#childScope/0": {
    "PatchText:#text/0": "c",
    "PatchChild:BranchScopes:#text/1": {
      "PatchText:#text/0": "Zed"
    }
  },
  "PatchBranch:#text/1": [{
    "PatchChild:#childScope/0": {
      "PatchText:#text/0": "x",
      "PatchDynamicTag:#text/1": "^packages/runtime-tags/src/__tests__/fixtures/patch-content-global-scriptless/template.marko_3*content",
      "PatchChild:BranchScopes:#text/1": {
        "PatchText:#text/0": "Zed"
      }
    }
  }, "packages/runtime-tags/src/__tests__/fixtures/patch-content-global-scriptless/template.marko_2*shell"]
}, _.a)

// PATCH holding BQMA
(_.a = {
  "$global:": {
    brand: "Qux"
  },
  "PatchChild:#childScope/0": {
    "PatchText:#text/0": "d",
    "PatchChild:BranchScopes:#text/1": {
      "PatchText:#text/0": "Qux"
    }
  },
  "PatchBranch:#text/1": [{
    "PatchChild:#childScope/0": {
      "PatchText:#text/0": "x",
      "PatchDynamicTag:#text/1": "^packages/runtime-tags/src/__tests__/fixtures/patch-content-global-scriptless/template.marko_3*content",
      "PatchChild:BranchScopes:#text/1": {
        "PatchText:#text/0": "Qux"
      }
    }
  }, "packages/runtime-tags/src/__tests__/fixtures/patch-content-global-scriptless/template.marko_2*shell"]
}, _.a)

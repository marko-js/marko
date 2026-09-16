// PATCH
[`packages/runtime-tags/src/__tests__/fixtures/patch-content-inner-branch/template.marko_2*shell;D ;<em> </em>`, (_.a = {
  "PatchChild:#childScope/0": {
    "PatchText:#text/0": "b",
    "PatchChild:BranchScopes:#text/1": {
      "PatchBranch:#text/0": [{
        "PatchText:#text/0": "x"
      }, "packages/runtime-tags/src/__tests__/fixtures/patch-content-inner-branch/template.marko_2*shell"]
    }
  }
}, _.a)]
"BAM"

// PATCH holding BAM
[(_.a = {
  "PatchChild:#childScope/0": {
    "PatchText:#text/0": "c",
    "PatchChild:BranchScopes:#text/1": {
      "PatchBranch:#text/0": [{
        "PatchText:#text/0": "y"
      }, "packages/runtime-tags/src/__tests__/fixtures/patch-content-inner-branch/template.marko_2*shell"]
    }
  }
}, _.a)]

// PATCH holding BAM
[(_.a = {
  "PatchChild:#childScope/0": {
    "PatchText:#text/0": "d",
    "PatchChild:BranchScopes:#text/1": {
      "PatchBranch:#text/0": 0
    }
  }
}, _.a)]

// PATCH holding BAM
[(_.a = {
  "PatchChild:#childScope/0": {
    "PatchText:#text/0": "e",
    "PatchChild:BranchScopes:#text/1": {
      "PatchBranch:#text/0": [{
        "PatchText:#text/0": "z"
      }, "packages/runtime-tags/src/__tests__/fixtures/patch-content-inner-branch/template.marko_2*shell"]
    }
  }
}, _.a)]

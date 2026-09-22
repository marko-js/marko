// PATCH
[`packages/runtime-tags/src/__tests__/fixtures/patch-branch-hidden-before-content/template.marko_3*content;D ;<em> </em>`, {
  "PatchBranch:#text/0": 0,
  "PatchChild:#childScope/1": {
    "PatchChild:BranchScopes:#text/0": {
      "PatchPending:#text/0": "packages/runtime-tags/src/__tests__/fixtures/patch-branch-hidden-before-content/template.marko_3*content",
      "PatchChild:BranchScopes:#text/0": {
        "PatchText:#text/0": "two"
      }
    }
  }
}]
"BgU"

// PATCH holding BgU
[`packages/runtime-tags/src/__tests__/fixtures/patch-branch-hidden-before-content/template.marko_1*shell;D ;<p class=error> </p>`, {
  "PatchBranch:#text/0": [{
    "PatchText:#text/0": "bad"
  }, "packages/runtime-tags/src/__tests__/fixtures/patch-branch-hidden-before-content/template.marko_1*shell"],
  "PatchChild:#childScope/1": {
    "PatchChild:BranchScopes:#text/0": {
      "PatchPending:#text/0": "packages/runtime-tags/src/__tests__/fixtures/patch-branch-hidden-before-content/template.marko_3*content"
    }
  }
}]
{
  "PatchChild:#childScope/1": {
    "PatchChild:BranchScopes:#text/0": {
      "PatchChild:BranchScopes:#text/0": {
        "PatchText:#text/0": "three"
      }
    }
  }
}
"BgIC"

// PATCH holding BgIC
{
  "PatchBranch:#text/0": 0,
  "PatchChild:#childScope/1": {
    "PatchChild:BranchScopes:#text/0": {
      "PatchPending:#text/0": "packages/runtime-tags/src/__tests__/fixtures/patch-branch-hidden-before-content/template.marko_3*content"
    }
  }
}
{
  "PatchChild:#childScope/1": {
    "PatchChild:BranchScopes:#text/0": {
      "PatchChild:BranchScopes:#text/0": {
        "PatchText:#text/0": "four"
      }
    }
  }
}

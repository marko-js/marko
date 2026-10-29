// PATCH
[`packages/runtime-tags/src/__tests__/fixtures/patch-async-await-in-branch/template.marko_3*content;D ;<em> </em>`, `packages/runtime-tags/src/__tests__/fixtures/patch-async-await-in-branch/template.marko_1*shell;b%;<!><!><!>`, {
  "PatchText:#text/0": "Store",
  "PatchBranch:#text/1": [{
    "PatchPending:#text/0": "packages/runtime-tags/src/__tests__/fixtures/patch-async-await-in-branch/template.marko_3*content"
  }, "packages/runtime-tags/src/__tests__/fixtures/patch-async-await-in-branch/template.marko_1*shell"]
}]
{
  "PatchChild:BranchScopes:#text/1": {
    "PatchChild:BranchScopes:#text/0": {
      "PatchText:#text/0": "hi"
    }
  }
}
;CxI

// PATCH holding CxI
{
  "PatchText:#text/0": "Store!",
  "PatchBranch:#text/1": [{
    "PatchPending:#text/0": "packages/runtime-tags/src/__tests__/fixtures/patch-async-await-in-branch/template.marko_3*content"
  }, "packages/runtime-tags/src/__tests__/fixtures/patch-async-await-in-branch/template.marko_1*shell"]
}
{
  "PatchChild:BranchScopes:#text/1": {
    "PatchChild:BranchScopes:#text/0": {
      "PatchText:#text/0": "slow"
    }
  }
}

// PATCH holding CxI
[`packages/runtime-tags/src/__tests__/fixtures/patch-async-await-in-branch/template.marko_2*shell,<em>closed</em>`, {
  "PatchText:#text/0": "Store!",
  "PatchBranch:#text/1": [1, {}, "packages/runtime-tags/src/__tests__/fixtures/patch-async-await-in-branch/template.marko_2*shell"]
}]
;Cxo

// PATCH holding Cxo
{
  "PatchText:#text/0": "Open",
  "PatchBranch:#text/1": [{
    "PatchPending:#text/0": "packages/runtime-tags/src/__tests__/fixtures/patch-async-await-in-branch/template.marko_3*content"
  }, "packages/runtime-tags/src/__tests__/fixtures/patch-async-await-in-branch/template.marko_1*shell"]
}
{
  "PatchChild:BranchScopes:#text/1": {
    "PatchChild:BranchScopes:#text/0": {
      "PatchText:#text/0": "back"
    }
  }
}

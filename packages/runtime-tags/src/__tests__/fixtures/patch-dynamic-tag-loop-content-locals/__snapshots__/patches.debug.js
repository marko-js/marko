// PATCH
[`packages/runtime-tags/src/__tests__/fixtures/patch-dynamic-tag-loop-content-locals/tags/tabs.marko_2*shell;b%;<!><!><!>`, `packages/runtime-tags/src/__tests__/fixtures/patch-dynamic-tag-loop-content-locals/tags/tabs.marko_1*shell;b%;<!><!><!>`, {
  "PatchChild:#childScope/0": {
    "PatchLoop:#text/0": [{
      "PatchBranch:#text/0": 0
    }, {
      "PatchBranch:#text/0": [{
        "PatchDynamicTag:#text/0": ["^^^^packages/runtime-tags/src/__tests__/fixtures/patch-dynamic-tag-loop-content-locals/template.marko_1*content", 0, 0, 0, {
          t: "b"
        }],
        "PatchChild:BranchScopes:#text/0": {
          "PatchText:#text/0": "b"
        }
      }, "packages/runtime-tags/src/__tests__/fixtures/patch-dynamic-tag-loop-content-locals/tags/tabs.marko_2*shell"]
    }, {
      "PatchBranch:#text/0": 0
    }, "packages/runtime-tags/src/__tests__/fixtures/patch-dynamic-tag-loop-content-locals/tags/tabs.marko_1*shell"]
  }
}]
"BAEA"

// PATCH holding BAEA
{
  "PatchChild:#childScope/0": {
    "PatchLoop:#text/0": [{
      "PatchBranch:#text/0": 0
    }, {
      "PatchBranch:#text/0": 0
    }, {
      "PatchBranch:#text/0": [{
        "PatchDynamicTag:#text/0": ["^^^^packages/runtime-tags/src/__tests__/fixtures/patch-dynamic-tag-loop-content-locals/template.marko_1*content", 0, 0, 0, {
          t: "c"
        }],
        "PatchChild:BranchScopes:#text/0": {
          "PatchText:#text/0": "c"
        }
      }, "packages/runtime-tags/src/__tests__/fixtures/patch-dynamic-tag-loop-content-locals/tags/tabs.marko_2*shell"]
    }, "packages/runtime-tags/src/__tests__/fixtures/patch-dynamic-tag-loop-content-locals/tags/tabs.marko_1*shell"]
  }
}

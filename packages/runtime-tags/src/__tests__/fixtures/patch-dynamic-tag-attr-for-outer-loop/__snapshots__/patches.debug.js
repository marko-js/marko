// PATCH
[`packages/runtime-tags/src/__tests__/fixtures/patch-dynamic-tag-attr-for-outer-loop/tags/list.marko; ;<ul></ul>`, `packages/runtime-tags/src/__tests__/fixtures/patch-dynamic-tag-attr-for-outer-loop/template.marko_2*content`, `packages/runtime-tags/src/__tests__/fixtures/patch-dynamic-tag-attr-for-outer-loop/tags/list.marko_1*shell;D%;<li><!></li>`, `packages/runtime-tags/src/__tests__/fixtures/patch-dynamic-tag-attr-for-outer-loop/template.marko_1*shell !;b%;<!><!><!>`, {
  "PatchLoop:#text/2": [{
    "PatchDynamicTag:#text/0": _.a = "packages/runtime-tags/src/__tests__/fixtures/patch-dynamic-tag-attr-for-outer-loop/tags/list.marko",
    "PatchChild:BranchScopes:#text/0": {
      "PatchLoop:#ul/0": [{
        "PatchDynamicTag:#text/0": _.b = "^^^packages/runtime-tags/src/__tests__/fixtures/patch-dynamic-tag-attr-for-outer-loop/template.marko_2*content",
        "PatchChild:BranchScopes:#text/0": {
          "PatchText:#text/0": "x",
          "PatchText:#text/1": 1,
          "PatchText:#text/2": "m"
        }
      }, _.c = "packages/runtime-tags/src/__tests__/fixtures/patch-dynamic-tag-attr-for-outer-loop/tags/list.marko_1*shell"]
    }
  }, {
    "PatchDynamicTag:#text/0": _.a,
    "PatchChild:BranchScopes:#text/0": {
      "PatchLoop:#ul/0": [{
        "PatchDynamicTag:#text/0": _.b,
        "PatchChild:BranchScopes:#text/0": {
          "PatchText:#text/0": "y",
          "PatchText:#text/1": 1,
          "PatchText:#text/2": "m"
        }
      }, _.c]
    }
  }, "packages/runtime-tags/src/__tests__/fixtures/patch-dynamic-tag-attr-for-outer-loop/template.marko_1*shell"]
}]
;D2M

// PATCH holding D2M
[`packages/runtime-tags/src/__tests__/fixtures/patch-dynamic-tag-attr-for-outer-loop/tags/list2.marko; ;<ol></ol>`, `packages/runtime-tags/src/__tests__/fixtures/patch-dynamic-tag-attr-for-outer-loop/tags/list2.marko_1*shell;D%;<li><!></li>`, {
  "PatchLoop:#text/2": [{
    "PatchDynamicTag:#text/0": "packages/runtime-tags/src/__tests__/fixtures/patch-dynamic-tag-attr-for-outer-loop/tags/list2.marko",
    "PatchChild:BranchScopes:#text/0": {
      "PatchLoop:#ol/0": [{
        "PatchDynamicTag:#text/0": "^^^packages/runtime-tags/src/__tests__/fixtures/patch-dynamic-tag-attr-for-outer-loop/template.marko_2*content",
        "PatchChild:BranchScopes:#text/0": {
          "PatchText:#text/0": "y",
          "PatchText:#text/1": 2,
          "PatchText:#text/2": "o"
        }
      }, "packages/runtime-tags/src/__tests__/fixtures/patch-dynamic-tag-attr-for-outer-loop/tags/list2.marko_1*shell"]
    }
  }, "packages/runtime-tags/src/__tests__/fixtures/patch-dynamic-tag-attr-for-outer-loop/template.marko_1*shell"]
}]
;D28

// PATCH holding D28
{
  "PatchLoop:#text/2": [{
    "PatchDynamicTag:#text/0": "packages/runtime-tags/src/__tests__/fixtures/patch-dynamic-tag-attr-for-outer-loop/tags/list.marko",
    "PatchChild:BranchScopes:#text/0": {
      "PatchLoop:#ul/0": [{
        "PatchDynamicTag:#text/0": "^^^packages/runtime-tags/src/__tests__/fixtures/patch-dynamic-tag-attr-for-outer-loop/template.marko_2*content",
        "PatchChild:BranchScopes:#text/0": {
          "PatchText:#text/0": "z",
          "PatchText:#text/1": 3,
          "PatchText:#text/2": "p"
        }
      }, "packages/runtime-tags/src/__tests__/fixtures/patch-dynamic-tag-attr-for-outer-loop/tags/list.marko_1*shell"]
    }
  }, "packages/runtime-tags/src/__tests__/fixtures/patch-dynamic-tag-attr-for-outer-loop/template.marko_1*shell"]
}

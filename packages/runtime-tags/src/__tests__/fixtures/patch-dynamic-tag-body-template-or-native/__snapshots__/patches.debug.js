// PATCH
[`packages/runtime-tags/src/__tests__/fixtures/patch-dynamic-tag-body-template-or-native/template.marko_1*content,`, {
  "PatchDynamicTag:#text/0": [">div", 0, "packages/runtime-tags/src/__tests__/fixtures/patch-dynamic-tag-body-template-or-native/template.marko_1*content"],
  "PatchChild:BranchScopes:#text/0": {
    "PatchChild:BranchScopes:#div/0": {
      "PatchText:#text/0": "b"
    }
  }
}]
;BgI

// PATCH holding BgI
{
  "PatchDynamicTag:#text/0": [">div", 0, "packages/runtime-tags/src/__tests__/fixtures/patch-dynamic-tag-body-template-or-native/template.marko_1*content"],
  "PatchChild:BranchScopes:#text/0": {
    "PatchChild:BranchScopes:#div/0": {
      "PatchText:#text/0": "c"
    }
  }
}

// PATCH holding BgI
[`packages/runtime-tags/src/__tests__/fixtures/patch-dynamic-tag-body-template-or-native/outer.marko;D%;<section><!></section>`, {
  "PatchDynamicTag:#text/0": "packages/runtime-tags/src/__tests__/fixtures/patch-dynamic-tag-body-template-or-native/outer.marko",
  "PatchChild:BranchScopes:#text/0": {
    "PatchDynamicTag:#text/0": "^^packages/runtime-tags/src/__tests__/fixtures/patch-dynamic-tag-body-template-or-native/template.marko_1*content",
    "PatchChild:BranchScopes:#text/0": {
      "PatchText:#text/0": "d"
    }
  }
}]
;BwU

// PATCH
[`packages/runtime-tags/src/__tests__/fixtures/patch-content-attr-elided/template.marko_1*content;D ;<em> </em>`, {
  "PatchDynamicTag:#section/0": "^packages/runtime-tags/src/__tests__/fixtures/patch-content-attr-elided/template.marko_1*content",
  "PatchChild:BranchScopes:#section/0": {
    "PatchText:#text/0": "two"
  },
  "PatchText:#text/1": "two"
}]
;BAE

// PATCH holding BAE
{
  "PatchDynamicTag:#section/0": 0,
  "PatchText:#text/1": "three"
}

// PATCH holding BAE
{
  "PatchDynamicTag:#section/0": "^packages/runtime-tags/src/__tests__/fixtures/patch-content-attr-elided/template.marko_1*content",
  "PatchChild:BranchScopes:#section/0": {
    "PatchText:#text/0": "four"
  },
  "PatchText:#text/1": "four"
}

// PATCH
`packages/runtime-tags/src/__tests__/fixtures/patch-let-content-reads-global-created/template.marko_1*shell !#childScope/0>packages/runtime-tags/src/__tests__/fixtures/patch-let-content-reads-global-created/tags/card.marko_0;/ b%c&b;<button class=clear>clear</button><!><!><!>`
{
  "$global:": {
    label: "b"
  },
  "PatchBranch:#text/0": [{
    "PatchChild:#childScope/0": {
      "PatchSetup:": {
        "PatchDynamicTag:#text/1": "^^packages/runtime-tags/src/__tests__/fixtures/patch-let-content-reads-global-created/template.marko_2*content"
      }
    }
  }, "packages/runtime-tags/src/__tests__/fixtures/patch-let-content-reads-global-created/template.marko_1*shell"]
}
;BgI

// PATCH holding BgI
{
  "$global:": {
    label: "c"
  },
  "PatchBranch:#text/0": [{
    "PatchChild:#childScope/0": {
      "PatchSetup:": {
        "PatchDynamicTag:#text/1": "^^packages/runtime-tags/src/__tests__/fixtures/patch-let-content-reads-global-created/template.marko_2*content"
      }
    }
  }, "packages/runtime-tags/src/__tests__/fixtures/patch-let-content-reads-global-created/template.marko_1*shell"]
}

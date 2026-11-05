// PATCH
`packages/runtime-tags/src/__tests__/fixtures/patch-bound-content-locals/template.marko_1*shell !#childScope/0>packages/runtime-tags/src/__tests__/fixtures/patch-bound-content-locals/tags/list.marko_0;/ b%c&b;<button>copy</button><!><!><!>`
{
  "PatchBranch:#text/1": [{
    "PatchChild:#childScope/0": {
      "PatchSetupValues:": {
        "PatchFill:packages/runtime-tags/src/__tests__/fixtures/patch-bound-content-locals/tags/list.marko_fill0": {
          content: _(["BranchScopes:#text/1"], "packages/runtime-tags/src/__tests__/fixtures/patch-bound-content-locals/template.marko_2*content", 1, {
            item_text: "b"
          }),
          *[(_.a = [{
            content: _(["BranchScopes:#text/1"], "packages/runtime-tags/src/__tests__/fixtures/patch-bound-content-locals/template.marko_2*content", 1, {
              item_text: "c"
            })
          }], Symbol.iterator)]() {
            yield this;
            yield* _.a
          }
        }
      }
    }
  }, "packages/runtime-tags/src/__tests__/fixtures/patch-bound-content-locals/template.marko_1*shell"]
}
;BgI

// PATCH holding BgI
{
  "PatchBranch:#text/1": [{
    "PatchChild:#childScope/0": {
      "PatchSetupValues:": {
        "PatchFill:packages/runtime-tags/src/__tests__/fixtures/patch-bound-content-locals/tags/list.marko_fill0": {
          content: _(["BranchScopes:#text/1"], "packages/runtime-tags/src/__tests__/fixtures/patch-bound-content-locals/template.marko_2*content", 1, {
            item_text: "d"
          }),
          *[(_.a = [{
            content: _(["BranchScopes:#text/1"], "packages/runtime-tags/src/__tests__/fixtures/patch-bound-content-locals/template.marko_2*content", 1, {
              item_text: "e"
            })
          }], Symbol.iterator)]() {
            yield this;
            yield* _.a
          }
        }
      }
    }
  }, "packages/runtime-tags/src/__tests__/fixtures/patch-bound-content-locals/template.marko_1*shell"]
}

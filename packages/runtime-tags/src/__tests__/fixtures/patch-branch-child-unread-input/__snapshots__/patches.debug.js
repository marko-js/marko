// PATCH
[`packages/runtime-tags/src/__tests__/fixtures/patch-branch-child-unread-input/template.marko_1*shell;/D l&;<section> </section>`, `packages/runtime-tags/src/__tests__/fixtures/patch-branch-child-unread-input/template.marko_3*shell !#childScope/1>packages/runtime-tags/src/__tests__/fixtures/patch-branch-child-unread-input/tags/toggle.marko_0;/D l&/ D l&;<div> </div><button> </button>`]
{
  "PatchBranch:#text/2": [{
    "PatchChild:#childScope/0": {
      "PatchText:#text/0": "SHOWN_title2"
    }
  }, "packages/runtime-tags/src/__tests__/fixtures/patch-branch-child-unread-input/template.marko_1*shell"],
  "PatchBranch:#text/3": [{
    "PatchChild:#childScope/0": {
      "PatchText:#text/0": "SHOWN_name2p"
    },
    "PatchChild:#childScope/1": {
      "PatchRender:packages/runtime-tags/src/__tests__/fixtures/patch-branch-child-unread-input/tags/toggle.marko_0_input_user_bio#5_input_user_name#6_open#7/setup": "input_user_bio input_user_name",
      "PatchSetupValues:": {
        "PatchFill:packages/runtime-tags/src/__tests__/fixtures/patch-branch-child-unread-input/tags/toggle.marko_fill0": !1
      },
      "PatchMarkedWrite:input_user_bio": "BIO_2o",
      "PatchMarkedWrite:input_user_name": "SHOWN_name2o"
    }
  }, "packages/runtime-tags/src/__tests__/fixtures/patch-branch-child-unread-input/template.marko_3*shell"]
}
;D1A

// PATCH holding D1A
`packages/runtime-tags/src/__tests__/fixtures/patch-branch-child-unread-input/template.marko_2*shell;/D l&;<div> </div>`
{
  "PatchBranch:#text/2": [1, {
    "PatchChild:#childScope/0": {
      "PatchText:#text/0": "SHOWN_name3"
    }
  }, "packages/runtime-tags/src/__tests__/fixtures/patch-branch-child-unread-input/template.marko_2*shell"],
  "PatchBranch:#text/3": 0
}
;D3A

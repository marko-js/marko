// PATCH
[`packages/runtime-tags/src/__tests__/fixtures/patch-id-async-dynamic-content/template.marko_2*content;b%;<!><!><!>`, `packages/runtime-tags/src/__tests__/fixtures/patch-id-async-dynamic-content/template.marko_3*content;b%;<!><!><!>`, `packages/runtime-tags/src/__tests__/fixtures/patch-id-async-dynamic-content/template.marko_1*shell;b%;<!><!><!>`, {
  "PatchLoop:#text/0": ["b", {
    "PatchChild:BranchScopes:#text/0": [{
      "PatchPending:#text/0": _.a = "packages/runtime-tags/src/__tests__/fixtures/patch-id-async-dynamic-content/template.marko_3*content"
    }, $, _.b = "packages/runtime-tags/src/__tests__/fixtures/patch-id-async-dynamic-content/template.marko_2*content", _.c = "packages/runtime-tags/src/__tests__/fixtures/patch-id-async-dynamic-content/template.marko_5*content"]
  }, "c", {
    "PatchChild:BranchScopes:#text/0": [{
      "PatchPending:#text/0": _.a
    }, $, _.b, _.c]
  }, "packages/runtime-tags/src/__tests__/fixtures/patch-id-async-dynamic-content/template.marko_1*shell"]
}]
[`packages/runtime-tags/src/__tests__/fixtures/patch-id-async-dynamic-content/tags/loaded.marko;/ D l b&%c;<label> </label><input><!><!>`, `packages/runtime-tags/src/__tests__/fixtures/patch-id-async-dynamic-content/template.marko_4*content`, {
  "PatchLoopItem:#text/0": [
    [0, "b"], {
      "PatchChild:BranchScopes:#text/0": [{
        "PatchChild:BranchScopes:#text/0": {
          "PatchDynamicTag:#text/0": [_.f = "packages/runtime-tags/src/__tests__/fixtures/patch-id-async-dynamic-content/tags/loaded.marko", _.g = "packages/runtime-tags/src/__tests__/fixtures/patch-id-async-dynamic-content/template.marko_4*content"],
          "PatchChild:BranchScopes:#text/0": {
            "PatchChild:#childScope/0": {
              "PatchSetup:": {
                "PatchAttr:#label/0 for": _.d = "sM_[\"b\"].#text/0@2.#childScope/0@0.uid",
                "PatchAttr:#input/2 id": _.d,
                "PatchAttr:#input/2 aria-describedby": $
              },
              "PatchText:#text/1": "b"
            },
            "PatchDynamicTag:#text/1": _.i = "^^packages/runtime-tags/src/__tests__/fixtures/patch-id-async-dynamic-content/template.marko_4*content",
            "PatchChild:BranchScopes:#text/1": {
              "PatchChild:#childScope/0": {
                "PatchSetup:": {
                  "PatchAttr:#label/0 for": _.e = "sM_[\"b\"].#text/0@2.#text/1@1.#childScope/0@1.uid",
                  "PatchText:#text/1": "b",
                  "PatchAttr:#input/2 id": _.e,
                  "PatchAttr:#input/2 aria-describedby": $
                }
              }
            }
          }
        }
      }, $, _.b, _.c]
    },
    [1, "c"], {
      "PatchChild:BranchScopes:#text/0": [{
        "PatchChild:BranchScopes:#text/0": {
          "PatchDynamicTag:#text/0": [_.f, _.g],
          "PatchChild:BranchScopes:#text/0": {
            "PatchChild:#childScope/0": {
              "PatchSetup:": {
                "PatchAttr:#label/0 for": _.h = "sM_[\"c\"].#text/0@2.#childScope/0@0.uid",
                "PatchAttr:#input/2 id": _.h,
                "PatchAttr:#input/2 aria-describedby": $
              },
              "PatchText:#text/1": "c"
            },
            "PatchDynamicTag:#text/1": _.i,
            "PatchChild:BranchScopes:#text/1": {
              "PatchChild:#childScope/0": {
                "PatchSetup:": {
                  "PatchAttr:#label/0 for": _.j = "sM_[\"c\"].#text/0@2.#text/1@1.#childScope/0@1.uid",
                  "PatchText:#text/1": "c",
                  "PatchAttr:#input/2 id": _.j,
                  "PatchAttr:#input/2 aria-describedby": $
                }
              }
            }
          }
        }
      }, $, _.b, _.c]
    }
  ]
}]
;Edo

// PATCH holding Edo
{
  "PatchLoop:#text/0": ["c", {
    "PatchChild:BranchScopes:#text/0": [{
      "PatchPending:#text/0": _.a = "packages/runtime-tags/src/__tests__/fixtures/patch-id-async-dynamic-content/template.marko_3*content"
    }, $, _.c = "packages/runtime-tags/src/__tests__/fixtures/patch-id-async-dynamic-content/template.marko_2*content", _.d = "packages/runtime-tags/src/__tests__/fixtures/patch-id-async-dynamic-content/template.marko_5*content"]
  }, "a", {
    "PatchChild:BranchScopes:#text/0": [{
      "PatchPending:#text/0": _.a,
      "PatchChild:BranchScopes:#text/0": {
        "PatchDynamicTag:#text/0": [">section", "packages/runtime-tags/src/__tests__/fixtures/patch-id-async-dynamic-content/template.marko_4*content", {
          name: "a"
        }],
        "PatchChild:BranchScopes:#text/0": {
          "PatchChild:BranchScopes:#section/0": {
            "PatchChild:#childScope/0": {
              "PatchSetup:": {
                "PatchAttr:#label/0 for": _.b = "sM_[\"a\"].#text/0@2.#childScope/0@1.uid",
                "PatchText:#text/1": "a",
                "PatchAttr:#input/2 id": _.b,
                "PatchAttr:#input/2 aria-describedby": $
              }
            }
          }
        }
      }
    }, $, _.c, _.d]
  }, "packages/runtime-tags/src/__tests__/fixtures/patch-id-async-dynamic-content/template.marko_1*shell"]
}
{
  "PatchLoopItem:#text/0": [
    [0, "c"], {
      "PatchChild:BranchScopes:#text/0": [{
        "PatchChild:BranchScopes:#text/0": {
          "PatchDynamicTag:#text/0": [">section", _(0)["PatchLoop:#text/0"][3]["PatchChild:BranchScopes:#text/0"][0]["PatchChild:BranchScopes:#text/0"]["PatchDynamicTag:#text/0"][1], {
            name: "c"
          }],
          "PatchChild:BranchScopes:#text/0": {
            "PatchChild:BranchScopes:#section/0": {
              "PatchChild:#childScope/0": {
                "PatchSetup:": {
                  "PatchAttr:#label/0 for": _.e = "sM_[\"c\"].#text/0@2.#childScope/0@1.uid",
                  "PatchText:#text/1": "c",
                  "PatchAttr:#input/2 id": _.e,
                  "PatchAttr:#input/2 aria-describedby": $
                }
              }
            }
          }
        }
      }, $, _.c, _.d]
    }
  ]
}

// PATCH
[`packages/runtime-tags/src/__tests__/fixtures/patch-client-branch-bound-cycle/template.marko_2*content|2;/ b b bD l&;<button>array</button><button>set</button><button>map</button><p> </p>`, `packages/runtime-tags/src/__tests__/fixtures/patch-client-branch-bound-cycle/template.marko_1*shell !#childScope/0>packages/runtime-tags/src/__tests__/fixtures/patch-client-branch-bound-cycle/tags/card.marko_0;/D b%l&;<section><button>clear</button><!></section>`]
[{
  "PatchMarkedWrite:input_label": "b",
  "PatchBranch:#text/0": [{
    "PatchChild:#childScope/0": {
      "PatchSetup:": {
        "PatchDynamicTag:#text/1": "^^packages/runtime-tags/src/__tests__/fixtures/patch-client-branch-bound-cycle/template.marko_2*content"
      },
      "PatchClientBranch:#text/1": [{
        "PatchChild:#childScope/0": {
          "PatchEffect:": "packages/runtime-tags/src/__tests__/fixtures/patch-client-branch-bound-cycle/tags/get.marko_0_input_m#11 packages/runtime-tags/src/__tests__/fixtures/patch-client-branch-bound-cycle/tags/get.marko_0_input_s#10 packages/runtime-tags/src/__tests__/fixtures/patch-client-branch-bound-cycle/tags/get.marko_0_input_a_1_1_0#9 packages/runtime-tags/src/__tests__/fixtures/patch-client-branch-bound-cycle/tags/get.marko_0_input_a#6_input_s#10_input_m#11",
          "PatchMarkedWrite:input_a": _.a = [_(["BranchScopes:#text/0", "#childScope/0", "BranchScopes:#text/1"], "packages/runtime-tags/src/__tests__/fixtures/patch-client-branch-bound-cycle/template.marko_2/f"), ],
          "PatchBind:input_a_1_1_0": "^packages/runtime-tags/src/__tests__/fixtures/patch-client-branch-bound-cycle/template.marko_2/f",
          "PatchMarkedWrite:input_s": ((s, i) => (i[1] = s, i.forEach(i => s.add(i)), s))(new Set, _.b = [_(["BranchScopes:#text/0", "#childScope/0", "BranchScopes:#text/1"], "packages/runtime-tags/src/__tests__/fixtures/patch-client-branch-bound-cycle/template.marko_2/f"), 0]),
          "PatchMarkedWrite:input_m": ((m, a) => (a[1][1] = m, a.forEach(i => m.set(i[0], i[1])), m))(new Map, _.c = [
            ["f", _(["BranchScopes:#text/0", "#childScope/0", "BranchScopes:#text/1"], "packages/runtime-tags/src/__tests__/fixtures/patch-client-branch-bound-cycle/template.marko_2/f")],
            ["self"]
          ])
        }
      }, "packages/runtime-tags/src/__tests__/fixtures/patch-client-branch-bound-cycle/template.marko_2*content", {
        "PatchChild:#childScope/0": {
          "PatchSetup:": {
            "PatchText:#text/3": ""
          }
        }
      }]
    }
  }, "packages/runtime-tags/src/__tests__/fixtures/patch-client-branch-bound-cycle/template.marko_1*shell"]
}, _.a[1] = _.a][0]
;Cxg

// PATCH holding Cxg
[{
  "PatchMarkedWrite:input_label": "c",
  "PatchBranch:#text/0": [{
    "PatchChild:#childScope/0": {
      "PatchSetup:": {
        "PatchDynamicTag:#text/1": "^^packages/runtime-tags/src/__tests__/fixtures/patch-client-branch-bound-cycle/template.marko_2*content"
      },
      "PatchClientBranch:#text/1": [{
        "PatchChild:#childScope/0": {
          "PatchEffect:": "packages/runtime-tags/src/__tests__/fixtures/patch-client-branch-bound-cycle/tags/get.marko_0_input_m#11 packages/runtime-tags/src/__tests__/fixtures/patch-client-branch-bound-cycle/tags/get.marko_0_input_s#10 packages/runtime-tags/src/__tests__/fixtures/patch-client-branch-bound-cycle/tags/get.marko_0_input_a_1_1_0#9 packages/runtime-tags/src/__tests__/fixtures/patch-client-branch-bound-cycle/tags/get.marko_0_input_a#6_input_s#10_input_m#11",
          "PatchMarkedWrite:input_a": _.a = [_(["BranchScopes:#text/0", "#childScope/0", "BranchScopes:#text/1"], "packages/runtime-tags/src/__tests__/fixtures/patch-client-branch-bound-cycle/template.marko_2/f"), ],
          "PatchBind:input_a_1_1_0": "^packages/runtime-tags/src/__tests__/fixtures/patch-client-branch-bound-cycle/template.marko_2/f",
          "PatchMarkedWrite:input_s": ((s, i) => (i[1] = s, i.forEach(i => s.add(i)), s))(new Set, _.b = [_(["BranchScopes:#text/0", "#childScope/0", "BranchScopes:#text/1"], "packages/runtime-tags/src/__tests__/fixtures/patch-client-branch-bound-cycle/template.marko_2/f"), 0]),
          "PatchMarkedWrite:input_m": ((m, a) => (a[1][1] = m, a.forEach(i => m.set(i[0], i[1])), m))(new Map, _.c = [
            ["f", _(["BranchScopes:#text/0", "#childScope/0", "BranchScopes:#text/1"], "packages/runtime-tags/src/__tests__/fixtures/patch-client-branch-bound-cycle/template.marko_2/f")],
            ["self"]
          ])
        }
      }, "packages/runtime-tags/src/__tests__/fixtures/patch-client-branch-bound-cycle/template.marko_2*content", {
        "PatchChild:#childScope/0": {
          "PatchSetup:": {
            "PatchText:#text/3": ""
          }
        }
      }]
    }
  }, "packages/runtime-tags/src/__tests__/fixtures/patch-client-branch-bound-cycle/template.marko_1*shell"]
}, _.a[1] = _.a][0]

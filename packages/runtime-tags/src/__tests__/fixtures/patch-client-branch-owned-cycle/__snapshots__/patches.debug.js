// PATCH
[`packages/runtime-tags/src/__tests__/fixtures/patch-client-branch-owned-cycle/template.marko_2*content|2;/ b b bD l&;<button>array</button><button>set</button><button>map</button><p> </p>`, `packages/runtime-tags/src/__tests__/fixtures/patch-client-branch-owned-cycle/template.marko_1*shell !#childScope/0>packages/runtime-tags/src/__tests__/fixtures/patch-client-branch-owned-cycle/tags/card.marko_0;/D b%l&;<section><button>clear</button><!></section>`]
[{
  "PatchMarkedWrite:input_label": "b",
  "PatchBranch:#text/0": [{
    "PatchChild:#childScope/0": {
      "PatchSetup:": {
        "PatchDynamicTag:#text/1": "^^packages/runtime-tags/src/__tests__/fixtures/patch-client-branch-owned-cycle/template.marko_2*content"
      }
    },
    "PatchClientBranch:2": [{
      "PatchChild:#childScope/0": {
        "PatchSetup:": {
          "PatchText:#text/3": ""
        },
        "PatchEffect:packages/runtime-tags/src/__tests__/fixtures/patch-client-branch-owned-cycle/tags/get.marko_0_input_m#11": "input_m",
        "PatchEffect:packages/runtime-tags/src/__tests__/fixtures/patch-client-branch-owned-cycle/tags/get.marko_0_input_s#10": "input_s",
        "PatchEffect:packages/runtime-tags/src/__tests__/fixtures/patch-client-branch-owned-cycle/tags/get.marko_0_input_a_1_1_0#9": "input_a_1_1_0",
        "PatchEffect:packages/runtime-tags/src/__tests__/fixtures/patch-client-branch-owned-cycle/tags/get.marko_0_input_a#6_input_s#10_input_m#11": "input_a input_s input_m",
        "PatchMarkedWrite:input_a": _.a = [_.c = [
          [], "packages/runtime-tags/src/__tests__/fixtures/patch-client-branch-owned-cycle/template.marko_2/f"
        ], ],
        "PatchBind:input_a_1_1_0": "^packages/runtime-tags/src/__tests__/fixtures/patch-client-branch-owned-cycle/template.marko_2/f",
        "PatchMarkedWrite:input_s": ((s, i) => (i[1] = s, i.forEach(i => s.add(i)), s))(new Set, _.b = [_.c, 0]),
        "PatchMarkedWrite:input_m": ((m, a) => (a[1][1] = m, a.forEach(i => m.set(i[0], i[1])), m))(new Map, _.d = [
          ["f", _.c],
          ["self"]
        ])
      }
    }, _.c]
  }, "packages/runtime-tags/src/__tests__/fixtures/patch-client-branch-owned-cycle/template.marko_1*shell"]
}, _.a[1] = _.a][0]
;Cxg

// PATCH holding Cxg
[{
  "PatchMarkedWrite:input_label": "c",
  "PatchBranch:#text/0": [{
    "PatchChild:#childScope/0": {
      "PatchSetup:": {
        "PatchDynamicTag:#text/1": "^^packages/runtime-tags/src/__tests__/fixtures/patch-client-branch-owned-cycle/template.marko_2*content"
      }
    },
    "PatchClientBranch:2": [{
      "PatchChild:#childScope/0": {
        "PatchSetup:": {
          "PatchText:#text/3": ""
        },
        "PatchEffect:packages/runtime-tags/src/__tests__/fixtures/patch-client-branch-owned-cycle/tags/get.marko_0_input_m#11": "input_m",
        "PatchEffect:packages/runtime-tags/src/__tests__/fixtures/patch-client-branch-owned-cycle/tags/get.marko_0_input_s#10": "input_s",
        "PatchEffect:packages/runtime-tags/src/__tests__/fixtures/patch-client-branch-owned-cycle/tags/get.marko_0_input_a_1_1_0#9": "input_a_1_1_0",
        "PatchEffect:packages/runtime-tags/src/__tests__/fixtures/patch-client-branch-owned-cycle/tags/get.marko_0_input_a#6_input_s#10_input_m#11": "input_a input_s input_m",
        "PatchMarkedWrite:input_a": _.a = [_.c = [
          [], "packages/runtime-tags/src/__tests__/fixtures/patch-client-branch-owned-cycle/template.marko_2/f"
        ], ],
        "PatchBind:input_a_1_1_0": "^packages/runtime-tags/src/__tests__/fixtures/patch-client-branch-owned-cycle/template.marko_2/f",
        "PatchMarkedWrite:input_s": ((s, i) => (i[1] = s, i.forEach(i => s.add(i)), s))(new Set, _.b = [_.c, 0]),
        "PatchMarkedWrite:input_m": ((m, a) => (a[1][1] = m, a.forEach(i => m.set(i[0], i[1])), m))(new Map, _.d = [
          ["f", _.c],
          ["self"]
        ])
      }
    }, _.c]
  }, "packages/runtime-tags/src/__tests__/fixtures/patch-client-branch-owned-cycle/template.marko_1*shell"]
}, _.a[1] = _.a][0]

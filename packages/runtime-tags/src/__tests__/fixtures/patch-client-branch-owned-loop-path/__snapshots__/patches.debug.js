// PATCH
[`packages/runtime-tags/src/__tests__/fixtures/patch-client-branch-owned-loop-path/template.marko_2*content|2; ;<ul></ul>`, `packages/runtime-tags/src/__tests__/fixtures/patch-client-branch-owned-loop-path/template.marko_4*content`, `packages/runtime-tags/src/__tests__/fixtures/patch-client-branch-owned-loop-path/template.marko_3*shell;D%;<li><!></li>`, `packages/runtime-tags/src/__tests__/fixtures/patch-client-branch-owned-loop-path/template.marko_1*shell !#childScope/0>packages/runtime-tags/src/__tests__/fixtures/patch-client-branch-owned-loop-path/tags/card.marko_0;/D b%l&;<section><button>clear</button><!></section>`]
{
  "PatchMarkedWrite:input_label": "b",
  "PatchBranch:#text/0": [{
    "PatchChild:#childScope/0": {
      "PatchSetup:": {
        "PatchDynamicTag:#text/1": "^^packages/runtime-tags/src/__tests__/fixtures/patch-client-branch-owned-loop-path/template.marko_2*content"
      }
    },
    "PatchClientBranch:2": [{
      "PatchLoop:#ul/0": [1, {
        "PatchMarkedWrite:r_label": "r1",
        "PatchDynamicTag:#text/0": [">span", _.a = "packages/runtime-tags/src/__tests__/fixtures/patch-client-branch-owned-loop-path/template.marko_4*content", {
          onClick: _.b = [
            [
              ["#ul/0", [0, 1]]
            ], "packages/runtime-tags/src/__tests__/fixtures/patch-client-branch-owned-loop-path/template.marko_3/onClick"
          ]
        }],
        "PatchChild:BranchScopes:#text/0": {
          "PatchChild:BranchScopes:#span/0": {
            "PatchText:#text/0": "r1"
          }
        },
        "PatchSubscribers:packages/runtime-tags/src/__tests__/fixtures/patch-client-branch-owned-loop-path/template.marko_3_r_label#3/subscribers": "r_label"
      }, 2, {
        "PatchMarkedWrite:r_label": "r2",
        "PatchDynamicTag:#text/0": [">span", _.a, {
          onClick: _.c = [
            [
              ["#ul/0", [1, 2]]
            ], "packages/runtime-tags/src/__tests__/fixtures/patch-client-branch-owned-loop-path/template.marko_3/onClick"
          ]
        }],
        "PatchChild:BranchScopes:#text/0": {
          "PatchChild:BranchScopes:#span/0": {
            "PatchText:#text/0": "r2"
          }
        },
        "PatchSubscribers:packages/runtime-tags/src/__tests__/fixtures/patch-client-branch-owned-loop-path/template.marko_3_r_label#3/subscribers": "r_label"
      }, 3, {
        "PatchMarkedWrite:r_label": "r3",
        "PatchDynamicTag:#text/0": [">span", _.a, {
          onClick: _.d = [
            [
              ["#ul/0", [2, 3]]
            ], "packages/runtime-tags/src/__tests__/fixtures/patch-client-branch-owned-loop-path/template.marko_3/onClick"
          ]
        }],
        "PatchChild:BranchScopes:#text/0": {
          "PatchChild:BranchScopes:#span/0": {
            "PatchText:#text/0": "r3"
          }
        },
        "PatchSubscribers:packages/runtime-tags/src/__tests__/fixtures/patch-client-branch-owned-loop-path/template.marko_3_r_label#3/subscribers": "r_label"
      }, "packages/runtime-tags/src/__tests__/fixtures/patch-client-branch-owned-loop-path/template.marko_3*shell"]
    }, _.b, _.c, _.d]
  }, "packages/runtime-tags/src/__tests__/fixtures/patch-client-branch-owned-loop-path/template.marko_1*shell"],
  "PatchMarkedWrite:input_rows": [{
    id: 1,
    label: "r1"
  }, {
    id: 2,
    label: "r2"
  }, {
    id: 3,
    label: "r3"
  }],
  "PatchMarkedWrite:input_tag": "span"
}
;DTw

// PATCH holding DTw
{
  "PatchMarkedWrite:input_label": "c",
  "PatchBranch:#text/0": [{
    "PatchChild:#childScope/0": {
      "PatchSetup:": {
        "PatchDynamicTag:#text/1": "^^packages/runtime-tags/src/__tests__/fixtures/patch-client-branch-owned-loop-path/template.marko_2*content"
      }
    },
    "PatchClientBranch:2": [{
      "PatchLoop:#ul/0": [3, {
        "PatchMarkedWrite:r_label": "r3",
        "PatchDynamicTag:#text/0": [">i", _.a = "packages/runtime-tags/src/__tests__/fixtures/patch-client-branch-owned-loop-path/template.marko_4*content", {
          onClick: _.b = [
            [
              ["#ul/0", [0, 3]]
            ], "packages/runtime-tags/src/__tests__/fixtures/patch-client-branch-owned-loop-path/template.marko_3/onClick"
          ]
        }],
        "PatchChild:BranchScopes:#text/0": {
          "PatchChild:BranchScopes:#i/0": {
            "PatchText:#text/0": "r3"
          }
        },
        "PatchSubscribers:packages/runtime-tags/src/__tests__/fixtures/patch-client-branch-owned-loop-path/template.marko_3_r_label#3/subscribers": "r_label"
      }, 1, {
        "PatchMarkedWrite:r_label": "r1",
        "PatchDynamicTag:#text/0": [">i", _.a, {
          onClick: _.c = [
            [
              ["#ul/0", 1]
            ], "packages/runtime-tags/src/__tests__/fixtures/patch-client-branch-owned-loop-path/template.marko_3/onClick"
          ]
        }],
        "PatchChild:BranchScopes:#text/0": {
          "PatchChild:BranchScopes:#i/0": {
            "PatchText:#text/0": "r1"
          }
        },
        "PatchSubscribers:packages/runtime-tags/src/__tests__/fixtures/patch-client-branch-owned-loop-path/template.marko_3_r_label#3/subscribers": "r_label"
      }, "packages/runtime-tags/src/__tests__/fixtures/patch-client-branch-owned-loop-path/template.marko_3*shell"]
    }, _.b, _.c]
  }, "packages/runtime-tags/src/__tests__/fixtures/patch-client-branch-owned-loop-path/template.marko_1*shell"],
  "PatchMarkedWrite:input_rows": [{
    id: 3,
    label: "r3"
  }, {
    id: 1,
    label: "r1"
  }],
  "PatchMarkedWrite:input_tag": "i"
}

// PATCH holding DTw
{
  "PatchMarkedWrite:input_label": "d",
  "PatchBranch:#text/0": [{
    "PatchChild:#childScope/0": {
      "PatchSetup:": {
        "PatchDynamicTag:#text/1": "^^packages/runtime-tags/src/__tests__/fixtures/patch-client-branch-owned-loop-path/template.marko_2*content"
      }
    },
    "PatchClientBranch:2": [{
      "PatchLoop:#ul/0": [2, {
        "PatchMarkedWrite:r_label": "r2",
        "PatchDynamicTag:#text/0": [">i", _.a = "packages/runtime-tags/src/__tests__/fixtures/patch-client-branch-owned-loop-path/template.marko_4*content", {
          onClick: _.b = [
            [
              ["#ul/0", [0, 2]]
            ], "packages/runtime-tags/src/__tests__/fixtures/patch-client-branch-owned-loop-path/template.marko_3/onClick"
          ]
        }],
        "PatchChild:BranchScopes:#text/0": {
          "PatchChild:BranchScopes:#i/0": {
            "PatchText:#text/0": "r2"
          }
        },
        "PatchSubscribers:packages/runtime-tags/src/__tests__/fixtures/patch-client-branch-owned-loop-path/template.marko_3_r_label#3/subscribers": "r_label"
      }, 3, {
        "PatchMarkedWrite:r_label": "r3",
        "PatchDynamicTag:#text/0": [">i", _.a, {
          onClick: _.c = [
            [
              ["#ul/0", [1, 3]]
            ], "packages/runtime-tags/src/__tests__/fixtures/patch-client-branch-owned-loop-path/template.marko_3/onClick"
          ]
        }],
        "PatchChild:BranchScopes:#text/0": {
          "PatchChild:BranchScopes:#i/0": {
            "PatchText:#text/0": "r3"
          }
        },
        "PatchSubscribers:packages/runtime-tags/src/__tests__/fixtures/patch-client-branch-owned-loop-path/template.marko_3_r_label#3/subscribers": "r_label"
      }, 1, {
        "PatchMarkedWrite:r_label": "r1",
        "PatchDynamicTag:#text/0": [">i", _.a, {
          onClick: _.d = [
            [
              ["#ul/0", [2, 1]]
            ], "packages/runtime-tags/src/__tests__/fixtures/patch-client-branch-owned-loop-path/template.marko_3/onClick"
          ]
        }],
        "PatchChild:BranchScopes:#text/0": {
          "PatchChild:BranchScopes:#i/0": {
            "PatchText:#text/0": "r1"
          }
        },
        "PatchSubscribers:packages/runtime-tags/src/__tests__/fixtures/patch-client-branch-owned-loop-path/template.marko_3_r_label#3/subscribers": "r_label"
      }, 4, {
        "PatchMarkedWrite:r_label": "r4",
        "PatchDynamicTag:#text/0": [">i", _.a, {
          onClick: _.e = [
            [
              ["#ul/0", [3, 4]]
            ], "packages/runtime-tags/src/__tests__/fixtures/patch-client-branch-owned-loop-path/template.marko_3/onClick"
          ]
        }],
        "PatchChild:BranchScopes:#text/0": {
          "PatchChild:BranchScopes:#i/0": {
            "PatchText:#text/0": "r4"
          }
        },
        "PatchSubscribers:packages/runtime-tags/src/__tests__/fixtures/patch-client-branch-owned-loop-path/template.marko_3_r_label#3/subscribers": "r_label"
      }, "packages/runtime-tags/src/__tests__/fixtures/patch-client-branch-owned-loop-path/template.marko_3*shell"]
    }, _.b, _.c, _.d, _.e]
  }, "packages/runtime-tags/src/__tests__/fixtures/patch-client-branch-owned-loop-path/template.marko_1*shell"],
  "PatchMarkedWrite:input_rows": [{
    id: 2,
    label: "r2"
  }, {
    id: 3,
    label: "r3"
  }, {
    id: 1,
    label: "r1"
  }, {
    id: 4,
    label: "r4"
  }],
  "PatchMarkedWrite:input_tag": "i"
}

// PATCH
[`packages/runtime-tags/src/__tests__/fixtures/patch-loop-child-tag/template.marko_1*shell;/D%b%l&;<li><!><!></li>`, (_.a = {
  "PatchLoop:#ul/0": [1, {
    "PatchChild:#childScope/0": {
      "PatchText:#text/0": "one",
      "PatchText:#text/1": ""
    }
  }, 2, {
    "PatchChild:#childScope/0": {
      "PatchText:#text/0": "two",
      "PatchText:#text/1": " 🔥"
    }
  }, "packages/runtime-tags/src/__tests__/fixtures/patch-loop-child-tag/template.marko_1*shell"]
}, _.a)]
"AwI"

// PATCH holding AwI
(_.a = {
  "PatchLoop:#ul/0": [2, {
    "PatchChild:#childScope/0": {
      "PatchText:#text/0": "two!",
      "PatchText:#text/1": ""
    }
  }, "packages/runtime-tags/src/__tests__/fixtures/patch-loop-child-tag/template.marko_1*shell"]
}, _.a)

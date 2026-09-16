// PATCH
[`packages/runtime-tags/src/__tests__/fixtures/patch-loop/template.marko_1*shell;D ;<li> </li>`, (_.a = {
  "PatchText:#text/0": "Store",
  "PatchLoop:#ul/1": [1, {
    "PatchText:#text/0": "Apples!"
  }, 2, {
    "PatchText:#text/0": "Bread"
  }, "packages/runtime-tags/src/__tests__/fixtures/patch-loop/template.marko_1*shell"]
}, _.a)]
"AgE"

// PATCH holding AgE
[(_.a = {
  "PatchText:#text/0": "Store",
  "PatchLoop:#ul/1": [1, {
    "PatchText:#text/0": "Apples!"
  }, 2, {
    "PatchText:#text/0": "Bread"
  }, 3, {
    "PatchText:#text/0": "Milk"
  }, "packages/runtime-tags/src/__tests__/fixtures/patch-loop/template.marko_1*shell"]
}, _.a)]

// PATCH holding AgE
[(_.a = {
  "PatchText:#text/0": "Store",
  "PatchLoop:#ul/1": [3, {
    "PatchText:#text/0": "Milk"
  }, 1, {
    "PatchText:#text/0": "Apples!"
  }, "packages/runtime-tags/src/__tests__/fixtures/patch-loop/template.marko_1*shell"]
}, _.a)]

// PATCH holding AgE
[(_.a = {
  "PatchText:#text/0": "Store",
  "PatchLoop:#ul/1": []
}, _.a)]

// PATCH holding AgE
[(_.a = {
  "PatchText:#text/0": "Store",
  "PatchLoop:#ul/1": [2, {
    "PatchText:#text/0": "Rye"
  }, 3, {
    "PatchText:#text/0": "Milk"
  }, "packages/runtime-tags/src/__tests__/fixtures/patch-loop/template.marko_1*shell"]
}, _.a)]

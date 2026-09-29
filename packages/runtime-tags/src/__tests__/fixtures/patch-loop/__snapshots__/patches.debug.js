// PATCH
[`packages/runtime-tags/src/__tests__/fixtures/patch-loop/template.marko_1*shell;D ;<li> </li>`, {
  "PatchText:#text/0": "Store",
  "PatchLoop:#ul/1": [1, {
    "PatchText:#text/0": "Apples!"
  }, 2, {
    "PatchText:#text/0": "Bread"
  }, "packages/runtime-tags/src/__tests__/fixtures/patch-loop/template.marko_1*shell"]
}]
"AgE"

// PATCH holding AgE
{
  "PatchText:#text/0": "Store",
  "PatchLoop:#ul/1": [1, {
    "PatchText:#text/0": "Apples!"
  }, 2, {
    "PatchText:#text/0": "Bread"
  }, 3, {
    "PatchText:#text/0": "Milk"
  }, "packages/runtime-tags/src/__tests__/fixtures/patch-loop/template.marko_1*shell"]
}

// PATCH holding AgE
{
  "PatchText:#text/0": "Store",
  "PatchLoop:#ul/1": [3, {
    "PatchText:#text/0": "Milk"
  }, 1, {
    "PatchText:#text/0": "Apples!"
  }, "packages/runtime-tags/src/__tests__/fixtures/patch-loop/template.marko_1*shell"]
}

// PATCH holding AgE
{
  "PatchText:#text/0": "Store",
  "PatchLoop:#ul/1": []
}

// PATCH holding AgE
{
  "PatchText:#text/0": "Store",
  "PatchLoop:#ul/1": [2, {
    "PatchText:#text/0": "Rye"
  }, 3, {
    "PatchText:#text/0": "Milk"
  }, "packages/runtime-tags/src/__tests__/fixtures/patch-loop/template.marko_1*shell"]
}

// PATCH
[`packages/runtime-tags/src/__tests__/fixtures/patch-loop-let-nested/template.marko_2*shell !packages/runtime-tags/src/__tests__/fixtures/patch-loop-let-nested/template.marko_2;D l ;<span> </span><button>note</button>`, `packages/runtime-tags/src/__tests__/fixtures/patch-loop-let-nested/template.marko_1*shell;D%b%;<li><!><!></li>`, (_.a = {
  "PatchLoop:#ul/0": [1, {
    "PatchText:#text/0": "Fuji Apples",
    "PatchBranch:#text/1": [{
      "PatchSetup:": {
        "PatchValue:packages/runtime-tags/src/__tests__/fixtures/patch-loop-let-nested/template.marko0": 0
      }
    }, "packages/runtime-tags/src/__tests__/fixtures/patch-loop-let-nested/template.marko_2*shell"]
  }, "packages/runtime-tags/src/__tests__/fixtures/patch-loop-let-nested/template.marko_1*shell"]
}, _.a)]
"AwEA"

// PATCH holding AwEA
[(_.a = {
  "PatchLoop:#ul/0": [1, {
    "PatchText:#text/0": "Fuji Apples",
    "PatchBranch:#text/1": 0
  }, "packages/runtime-tags/src/__tests__/fixtures/patch-loop-let-nested/template.marko_1*shell"]
}, _.a)]

// PATCH holding AwEA
[(_.a = {
  "PatchLoop:#ul/0": [1, {
    "PatchText:#text/0": "Fuji Apples",
    "PatchBranch:#text/1": [{
      "PatchSetup:": {
        "PatchValue:packages/runtime-tags/src/__tests__/fixtures/patch-loop-let-nested/template.marko0": 0
      }
    }, "packages/runtime-tags/src/__tests__/fixtures/patch-loop-let-nested/template.marko_2*shell"]
  }, "packages/runtime-tags/src/__tests__/fixtures/patch-loop-let-nested/template.marko_1*shell"]
}, _.a)]

// PATCH holding AwEA
[(_.a = {
  "PatchLoop:#ul/0": [2, {
    "PatchText:#text/0": "Milk",
    "PatchBranch:#text/1": [{
      "PatchSetup:": {
        "PatchValue:packages/runtime-tags/src/__tests__/fixtures/patch-loop-let-nested/template.marko0": 0
      }
    }, _.b = "packages/runtime-tags/src/__tests__/fixtures/patch-loop-let-nested/template.marko_2*shell"]
  }, 1, {
    "PatchText:#text/0": "Fuji Apples",
    "PatchBranch:#text/1": [{
      "PatchSetup:": {
        "PatchValue:packages/runtime-tags/src/__tests__/fixtures/patch-loop-let-nested/template.marko0": 0
      }
    }, _.b]
  }, "packages/runtime-tags/src/__tests__/fixtures/patch-loop-let-nested/template.marko_1*shell"]
}, _.a)]

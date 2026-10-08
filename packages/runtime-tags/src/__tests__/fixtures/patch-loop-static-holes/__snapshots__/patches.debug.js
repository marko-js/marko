// PATCH
[`packages/runtime-tags/src/__tests__/fixtures/patch-loop-static-holes/template.marko_3*shell;D%c%;<p><!>:<!></p>`, `packages/runtime-tags/src/__tests__/fixtures/patch-loop-static-holes/template.marko_2*shell; ;<div></div>`, {
  "PatchLoop:#ul/0": [{
    "PatchText:#text/1": "b"
  }, {
    "PatchText:#text/1": "b"
  }],
  "PatchBranch:#text/2": [{
    "PatchLoop:#div/0": [{
      "PatchSetup:": {
        "PatchText:#text/0": "1"
      },
      "PatchText:#text/1": "b"
    }, {
      "PatchSetup:": {
        "PatchText:#text/0": "2"
      },
      "PatchText:#text/1": "b"
    }, "packages/runtime-tags/src/__tests__/fixtures/patch-loop-static-holes/template.marko_3*shell"]
  }, "packages/runtime-tags/src/__tests__/fixtures/patch-loop-static-holes/template.marko_2*shell"]
}]
"BQIA"

// PATCH holding BQIA
{
  "PatchLoop:#ul/0": [{
    "PatchText:#text/1": "c"
  }, {
    "PatchText:#text/1": "c"
  }],
  "PatchBranch:#text/2": [{
    "PatchLoop:#div/0": [{
      "PatchSetup:": {
        "PatchText:#text/0": "1"
      },
      "PatchText:#text/1": "c"
    }, {
      "PatchSetup:": {
        "PatchText:#text/0": "2"
      },
      "PatchText:#text/1": "c"
    }, "packages/runtime-tags/src/__tests__/fixtures/patch-loop-static-holes/template.marko_3*shell"]
  }, "packages/runtime-tags/src/__tests__/fixtures/patch-loop-static-holes/template.marko_2*shell"]
}

// PATCH holding BQIA
{
  "PatchLoop:#ul/0": [{
    "PatchText:#text/1": "d"
  }, {
    "PatchText:#text/1": "d"
  }],
  "PatchBranch:#text/2": 0
}

// PATCH holding BQIA
{
  "PatchLoop:#ul/0": [{
    "PatchText:#text/1": "e"
  }, {
    "PatchText:#text/1": "e"
  }],
  "PatchBranch:#text/2": [{
    "PatchLoop:#div/0": [{
      "PatchSetup:": {
        "PatchText:#text/0": "1"
      },
      "PatchText:#text/1": "e"
    }, {
      "PatchSetup:": {
        "PatchText:#text/0": "2"
      },
      "PatchText:#text/1": "e"
    }, "packages/runtime-tags/src/__tests__/fixtures/patch-loop-static-holes/template.marko_3*shell"]
  }, "packages/runtime-tags/src/__tests__/fixtures/patch-loop-static-holes/template.marko_2*shell"]
}

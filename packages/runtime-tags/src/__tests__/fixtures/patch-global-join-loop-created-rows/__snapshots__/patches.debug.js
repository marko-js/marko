// PATCH
[`packages/runtime-tags/src/__tests__/fixtures/patch-global-join-loop-created-rows/template.marko_1*shell packages/runtime-tags/src/__tests__/fixtures/patch-global-join-loop-created-rows/template.marko_1_n#0:6/init;D%c%c%;<li><!>:<!>:<!></li>`, {
  "$global:": {
    x: "2"
  },
  "PatchLoop:#ul/2": [{
    "PatchText:#text/0": "a",
    "PatchText:#text/1": "2"
  }, {
    "PatchText:#text/0": "b",
    "PatchText:#text/1": "2"
  }, {
    "PatchText:#text/0": "c",
    "PatchText:#text/1": "2"
  }, "packages/runtime-tags/src/__tests__/fixtures/patch-global-join-loop-created-rows/template.marko_1*shell"]
}]
;BAE

// PATCH holding BAE
{
  "$global:": {
    x: "3"
  },
  "PatchLoop:#ul/2": [{
    "PatchText:#text/0": "c",
    "PatchText:#text/1": "3"
  }, "packages/runtime-tags/src/__tests__/fixtures/patch-global-join-loop-created-rows/template.marko_1*shell"]
}

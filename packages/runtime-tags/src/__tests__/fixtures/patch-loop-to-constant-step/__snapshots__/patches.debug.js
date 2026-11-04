// PATCH
[`packages/runtime-tags/src/__tests__/fixtures/patch-loop-to-constant-step/template.marko_1*shell !packages/runtime-tags/src/__tests__/fixtures/patch-loop-to-constant-step/template.marko_1; D ;<button> </button>`, `packages/runtime-tags/src/__tests__/fixtures/patch-loop-to-constant-step/template.marko_2*shell !packages/runtime-tags/src/__tests__/fixtures/patch-loop-to-constant-step/template.marko_2; D ;<button> </button>`]
{
  "PatchLoop:#div/1": [1, {
    "PatchText:#text/1": 1
  }, 3, {
    "PatchText:#text/1": 3
  }, 5, {
    "PatchText:#text/1": 5
  }, 7, {
    "PatchText:#text/1": 7
  }, 9, {
    "PatchText:#text/1": 9
  }, "packages/runtime-tags/src/__tests__/fixtures/patch-loop-to-constant-step/template.marko_1*shell"],
  "PatchLoop:#div/2": [0, {
    "PatchText:#text/1": 0
  }, 3, {
    "PatchText:#text/1": 3
  }, 6, {
    "PatchText:#text/1": 6
  }, "packages/runtime-tags/src/__tests__/fixtures/patch-loop-to-constant-step/template.marko_2*shell"]
}
;BwY

// PATCH holding BwY
{
  "PatchLoop:#div/1": [1, {
    "PatchText:#text/1": 1
  }, 3, {
    "PatchText:#text/1": 3
  }, "packages/runtime-tags/src/__tests__/fixtures/patch-loop-to-constant-step/template.marko_1*shell"],
  "PatchLoop:#div/2": [{
    "PatchText:#text/1": 0
  }, "packages/runtime-tags/src/__tests__/fixtures/patch-loop-to-constant-step/template.marko_2*shell"]
}

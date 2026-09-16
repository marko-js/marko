// PATCH
[`packages/runtime-tags/src/__tests__/fixtures/patch-dynamic-tag-var/tags/one.marko,<i>one</i>`, (_.a = {
  "PatchDynamicTag:#text/0": ["packages/runtime-tags/src/__tests__/fixtures/patch-dynamic-tag-var/tags/one.marko", {
    a: "b"
  }, 0, "packages/runtime-tags/src/__tests__/fixtures/patch-dynamic-tag-var/template.marko_0_x#8/var"],
  "PatchText:#text/2": "b!"
}, _.a)]
"AwA"

// PATCH holding AwA
[`packages/runtime-tags/src/__tests__/fixtures/patch-dynamic-tag-var/tags/two.marko,<b>two</b>`, (_.a = {
  "PatchDynamicTag:#text/0": ["packages/runtime-tags/src/__tests__/fixtures/patch-dynamic-tag-var/tags/two.marko", {
    a: "c"
  }, 0, "packages/runtime-tags/src/__tests__/fixtures/patch-dynamic-tag-var/template.marko_0_x#8/var"],
  "PatchText:#text/2": "c?"
}, _.a)]
"AwAA"

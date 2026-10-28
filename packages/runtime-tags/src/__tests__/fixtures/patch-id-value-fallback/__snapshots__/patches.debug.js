// PATCH
[`packages/runtime-tags/src/__tests__/fixtures/patch-id-value-fallback/template.marko_1*shell;/ D l b&;<label> </label><input>`, {
  "PatchAttr:#h1/0 id": "sM_.heading",
  "PatchLoop:#text/3": ["b", {
    "PatchChild:#childScope/0": {
      "PatchAttr:#label/0 for": _.a = "sM_[\"b\"].#childScope/0@0.uid",
      "PatchSetup:": {
        "PatchText:#text/1": "b"
      },
      "PatchAttr:#input/2 id": _.a,
      "PatchAttr:#input/2 aria-describedby": "sM_.heading"
    }
  }, "c", {
    "PatchChild:#childScope/0": {
      "PatchAttr:#label/0 for": "provided-c",
      "PatchSetup:": {
        "PatchText:#text/1": "c"
      },
      "PatchAttr:#input/2 id": "provided-c",
      "PatchAttr:#input/2 aria-describedby": "sM_.heading"
    }
  }, "packages/runtime-tags/src/__tests__/fixtures/patch-id-value-fallback/template.marko_1*shell"]
}]
;BgI

// PATCH holding BgI
{
  "PatchAttr:#h1/0 id": "sM_.heading",
  "PatchLoop:#text/3": ["b", {
    "PatchChild:#childScope/0": {
      "PatchAttr:#label/0 for": "provided-b",
      "PatchSetup:": {
        "PatchText:#text/1": "b"
      },
      "PatchAttr:#input/2 id": "provided-b",
      "PatchAttr:#input/2 aria-describedby": "sM_.heading"
    }
  }, "c", {
    "PatchChild:#childScope/0": {
      "PatchAttr:#label/0 for": _.a = "sM_[\"c\"].#childScope/0@0.uid",
      "PatchSetup:": {
        "PatchText:#text/1": "c"
      },
      "PatchAttr:#input/2 id": _.a,
      "PatchAttr:#input/2 aria-describedby": "sM_.heading"
    }
  }, "packages/runtime-tags/src/__tests__/fixtures/patch-id-value-fallback/template.marko_1*shell"]
}

// PATCH holding BgI
{
  "PatchAttr:#h1/0 id": _.b = "provided-heading",
  "PatchLoop:#text/3": ["c", {
    "PatchChild:#childScope/0": {
      "PatchAttr:#label/0 for": _.a = "sM_[\"c\"].#childScope/0@0.uid",
      "PatchSetup:": {
        "PatchText:#text/1": "c"
      },
      "PatchAttr:#input/2 id": _.a,
      "PatchAttr:#input/2 aria-describedby": _.b
    }
  }, "d", {
    "PatchChild:#childScope/0": {
      "PatchAttr:#label/0 for": _.c = "sM_[\"d\"].#childScope/0@0.uid",
      "PatchSetup:": {
        "PatchText:#text/1": "d"
      },
      "PatchAttr:#input/2 id": _.c,
      "PatchAttr:#input/2 aria-describedby": _.b
    }
  }, "packages/runtime-tags/src/__tests__/fixtures/patch-id-value-fallback/template.marko_1*shell"]
}

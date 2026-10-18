// PATCH
[`packages/runtime-tags/src/__tests__/fixtures/patch-loop-item-root-attrs/template.marko_1*shell; D/D l&D m;<a class=link><svg viewBox="0 0 1 1"><title></title></svg><span> </span></a>`, `packages/runtime-tags/src/__tests__/fixtures/patch-loop-item-root-attrs/template.marko_2*shell;D ;<p> </p>`, {
  "PatchLoop:#nav/0": [{
    "PatchAttr:#a/0 class": "link",
    "PatchAttr:#a/0 href": "/a",
    "PatchText:#text/2": "A",
    "PatchChild:#childScope/1": {
      "PatchTextContent:#title/0": "a"
    }
  }, {
    "PatchAttr:#a/0 class": "link active",
    "PatchAttr:#a/0 href": "/b",
    "PatchText:#text/2": "B",
    "PatchChild:#childScope/1": {
      "PatchTextContent:#title/0": "b"
    }
  }, "packages/runtime-tags/src/__tests__/fixtures/patch-loop-item-root-attrs/template.marko_1*shell"],
  "PatchBranch:#main/1": [{
    "PatchText:#text/0": "b"
  }, "packages/runtime-tags/src/__tests__/fixtures/patch-loop-item-root-attrs/template.marko_2*shell"]
}]
;CQw

// PATCH holding CQw
{
  "PatchLoop:#nav/0": [{
    "PatchAttr:#a/0 class": "link active",
    "PatchAttr:#a/0 href": "/b",
    "PatchText:#text/2": "B",
    "PatchChild:#childScope/1": {
      "PatchTextContent:#title/0": "b"
    }
  }, "packages/runtime-tags/src/__tests__/fixtures/patch-loop-item-root-attrs/template.marko_1*shell"],
  "PatchBranch:#main/1": 0
}

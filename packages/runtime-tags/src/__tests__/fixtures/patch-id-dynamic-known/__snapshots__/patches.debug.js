// PATCH
[`packages/runtime-tags/src/__tests__/fixtures/patch-id-dynamic-known/tags/labeled.marko; D l ;<label> </label><input>`, `packages/runtime-tags/src/__tests__/fixtures/patch-id-dynamic-known/tags/plain.marko;D ;<span> </span>`, `packages/runtime-tags/src/__tests__/fixtures/patch-id-dynamic-known/template.marko_1*shell;b%;<!><!><!>`, `packages/runtime-tags/src/__tests__/fixtures/patch-id-dynamic-known/template.marko_3*content; D l ;<label> </label><input>`, `packages/runtime-tags/src/__tests__/fixtures/patch-id-dynamic-known/template.marko_2*shell;b%;<!><!><!>`, `packages/runtime-tags/src/__tests__/fixtures/patch-id-dynamic-known/template.marko_5*content; D l ;<label> </label><input>`, `packages/runtime-tags/src/__tests__/fixtures/patch-id-dynamic-known/template.marko_4*shell;b%;<!><!><!>`, {
  "PatchLoop:#text/0": [{
    "PatchDynamicTag:#text/0": "packages/runtime-tags/src/__tests__/fixtures/patch-id-dynamic-known/tags/labeled.marko",
    "PatchChild:BranchScopes:#text/0": {
      "PatchSetup:": {
        "PatchAttr:#label/0 for": _.a = "sM_[0].#text/0@0.uid",
        "PatchAttr:#input/2 id": _.a
      },
      "PatchText:#text/1": "b"
    }
  }, {
    "PatchDynamicTag:#text/0": _.e = "packages/runtime-tags/src/__tests__/fixtures/patch-id-dynamic-known/tags/plain.marko",
    "PatchChild:BranchScopes:#text/0": {
      "PatchText:#text/0": "c"
    }
  }, "packages/runtime-tags/src/__tests__/fixtures/patch-id-dynamic-known/template.marko_1*shell"],
  "PatchLoop:#text/1": [{
    "PatchDynamicTag:#text/0": [">p", _.c = "packages/runtime-tags/src/__tests__/fixtures/patch-id-dynamic-known/template.marko_3*content"],
    "PatchChild:BranchScopes:#text/0": {
      "PatchChild:BranchScopes:#p/0": {
        "PatchSetup:": {
          "PatchAttr:#label/0 for": _.b = "sM_[0].#text/0@1.bodyId",
          "PatchAttr:#input/2 id": _.b
        },
        "PatchText:#text/1": "b"
      }
    }
  }, {
    "PatchDynamicTag:#text/0": [">div", _.c],
    "PatchChild:BranchScopes:#text/0": {
      "PatchChild:BranchScopes:#div/0": {
        "PatchSetup:": {
          "PatchAttr:#label/0 for": _.d = "sM_[1].#text/0@1.bodyId",
          "PatchAttr:#input/2 id": _.d
        },
        "PatchText:#text/1": "c"
      }
    }
  }, "packages/runtime-tags/src/__tests__/fixtures/patch-id-dynamic-known/template.marko_2*shell"],
  "PatchLoop:#text/2": [{
    "PatchDynamicTag:#text/0": [_.e, _.f = "packages/runtime-tags/src/__tests__/fixtures/patch-id-dynamic-known/template.marko_5*content"],
    "PatchChild:BranchScopes:#text/0": {
      "PatchText:#text/0": "b"
    }
  }, {
    "PatchDynamicTag:#text/0": [0, _.f],
    "PatchChild:BranchScopes:#text/0": {
      "PatchSetup:": {
        "PatchAttr:#label/0 for": _.g = "sM_[1].#text/0@2.nullId",
        "PatchAttr:#input/2 id": _.g
      },
      "PatchText:#text/1": "c"
    }
  }, "packages/runtime-tags/src/__tests__/fixtures/patch-id-dynamic-known/template.marko_4*shell"]
}]
;Efs

// PATCH holding Efs
{
  "PatchLoop:#text/0": [{
    "PatchDynamicTag:#text/0": "packages/runtime-tags/src/__tests__/fixtures/patch-id-dynamic-known/tags/labeled.marko",
    "PatchChild:BranchScopes:#text/0": {
      "PatchSetup:": {
        "PatchAttr:#label/0 for": _.a = "sM_[0].#text/0@0.uid",
        "PatchAttr:#input/2 id": _.a
      },
      "PatchText:#text/1": "c"
    }
  }, "packages/runtime-tags/src/__tests__/fixtures/patch-id-dynamic-known/template.marko_1*shell"],
  "PatchLoop:#text/1": [{
    "PatchDynamicTag:#text/0": [">p", "packages/runtime-tags/src/__tests__/fixtures/patch-id-dynamic-known/template.marko_3*content"],
    "PatchChild:BranchScopes:#text/0": {
      "PatchChild:BranchScopes:#p/0": {
        "PatchSetup:": {
          "PatchAttr:#label/0 for": _.b = "sM_[0].#text/0@1.bodyId",
          "PatchAttr:#input/2 id": _.b
        },
        "PatchText:#text/1": "c"
      }
    }
  }, "packages/runtime-tags/src/__tests__/fixtures/patch-id-dynamic-known/template.marko_2*shell"],
  "PatchLoop:#text/2": [{
    "PatchDynamicTag:#text/0": ["packages/runtime-tags/src/__tests__/fixtures/patch-id-dynamic-known/tags/plain.marko", "packages/runtime-tags/src/__tests__/fixtures/patch-id-dynamic-known/template.marko_5*content"],
    "PatchChild:BranchScopes:#text/0": {
      "PatchText:#text/0": "c"
    }
  }, "packages/runtime-tags/src/__tests__/fixtures/patch-id-dynamic-known/template.marko_4*shell"]
}

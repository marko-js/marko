// PATCH
[`packages/runtime-tags/src/__tests__/fixtures/patch-id-loop-forms/template.marko_1*shell;/ D l b&;<label> </label><input>`, `packages/runtime-tags/src/__tests__/fixtures/patch-id-loop-forms/template.marko_2*shell;/ D l b&;<label> </label><input>`, `packages/runtime-tags/src/__tests__/fixtures/patch-id-loop-forms/template.marko_3*shell;/ D l b&;<label> </label><input>`, `packages/runtime-tags/src/__tests__/fixtures/patch-id-loop-forms/template.marko_4*shell;/ D l b&;<label> </label><input>`, `packages/runtime-tags/src/__tests__/fixtures/patch-id-loop-forms/template.marko_5*shell;/ D l b&;<label> </label><input>`, `packages/runtime-tags/src/__tests__/fixtures/patch-id-loop-forms/template.marko_6*shell;/ D l b&;<label> </label><input>`, `packages/runtime-tags/src/__tests__/fixtures/patch-id-loop-forms/template.marko_7*shell;/ D l b&;<label> </label><input>`, `packages/runtime-tags/src/__tests__/fixtures/patch-id-loop-forms/template.marko_8*shell;/ D l b&;<label> </label><input>`, {
  "PatchLoop:#text/1": [{
    "PatchChild:#childScope/0": {
      "PatchSetup:": {
        "PatchAttr:#label/0 for": _.a = "sM_[0].#childScope/0@0.uid",
        "PatchAttr:#input/2 id": _.a,
        "PatchAttr:#input/2 aria-describedby": "sM_.heading"
      },
      "PatchText:#text/1": "b"
    }
  }, {
    "PatchChild:#childScope/0": {
      "PatchSetup:": {
        "PatchAttr:#label/0 for": _.b = "sM_[1].#childScope/0@0.uid",
        "PatchAttr:#input/2 id": _.b,
        "PatchAttr:#input/2 aria-describedby": "sM_.heading"
      },
      "PatchText:#text/1": "c"
    }
  }, "packages/runtime-tags/src/__tests__/fixtures/patch-id-loop-forms/template.marko_1*shell"],
  "PatchLoop:#text/2": ["b", {
    "PatchChild:#childScope/0": {
      "PatchSetup:": {
        "PatchAttr:#label/0 for": _.c = "sM_[\"b\"].#childScope/0@1.uid",
        "PatchText:#text/1": "b",
        "PatchAttr:#input/2 id": _.c,
        "PatchAttr:#input/2 aria-describedby": "sM_.heading"
      }
    }
  }, "c", {
    "PatchChild:#childScope/0": {
      "PatchSetup:": {
        "PatchAttr:#label/0 for": _.d = "sM_[\"c\"].#childScope/0@1.uid",
        "PatchText:#text/1": "c",
        "PatchAttr:#input/2 id": _.d,
        "PatchAttr:#input/2 aria-describedby": "sM_.heading"
      }
    }
  }, "packages/runtime-tags/src/__tests__/fixtures/patch-id-loop-forms/template.marko_2*shell"],
  "PatchLoop:#text/3": ["b", {
    "PatchChild:#childScope/0": {
      "PatchSetup:": {
        "PatchAttr:#label/0 for": _.e = "sM_[\"b\"].#childScope/0@2.uid",
        "PatchText:#text/1": "b",
        "PatchAttr:#input/2 id": _.e,
        "PatchAttr:#input/2 aria-describedby": "sM_.heading"
      }
    }
  }, "c", {
    "PatchChild:#childScope/0": {
      "PatchSetup:": {
        "PatchAttr:#label/0 for": _.f = "sM_[\"c\"].#childScope/0@2.uid",
        "PatchText:#text/1": "c",
        "PatchAttr:#input/2 id": _.f,
        "PatchAttr:#input/2 aria-describedby": "sM_.heading"
      }
    }
  }, "packages/runtime-tags/src/__tests__/fixtures/patch-id-loop-forms/template.marko_3*shell"],
  "PatchLoop:#text/4": ["key-b", {
    "PatchChild:#childScope/0": {
      "PatchSetup:": {
        "PatchAttr:#label/0 for": _.g = "sM_[\"key-b\"].#childScope/0@3.uid",
        "PatchAttr:#input/2 id": _.g,
        "PatchAttr:#input/2 aria-describedby": "sM_.heading"
      },
      "PatchText:#text/1": 2
    }
  }, "key-c", {
    "PatchChild:#childScope/0": {
      "PatchSetup:": {
        "PatchAttr:#label/0 for": _.h = "sM_[\"key-c\"].#childScope/0@3.uid",
        "PatchAttr:#input/2 id": _.h,
        "PatchAttr:#input/2 aria-describedby": "sM_.heading"
      },
      "PatchText:#text/1": 3
    }
  }, "packages/runtime-tags/src/__tests__/fixtures/patch-id-loop-forms/template.marko_4*shell"],
  "PatchLoop:#text/5": [1, {
    "PatchChild:#childScope/0": {
      "PatchSetup:": {
        "PatchAttr:#label/0 for": _.i = "sM_[1].#childScope/0@4.uid",
        "PatchText:#text/1": 1,
        "PatchAttr:#input/2 id": _.i,
        "PatchAttr:#input/2 aria-describedby": "sM_.heading"
      }
    }
  }, 2, {
    "PatchChild:#childScope/0": {
      "PatchSetup:": {
        "PatchAttr:#label/0 for": _.j = "sM_[2].#childScope/0@4.uid",
        "PatchText:#text/1": 2,
        "PatchAttr:#input/2 id": _.j,
        "PatchAttr:#input/2 aria-describedby": "sM_.heading"
      }
    }
  }, 3, {
    "PatchChild:#childScope/0": {
      "PatchSetup:": {
        "PatchAttr:#label/0 for": _.k = "sM_[3].#childScope/0@4.uid",
        "PatchText:#text/1": 3,
        "PatchAttr:#input/2 id": _.k,
        "PatchAttr:#input/2 aria-describedby": "sM_.heading"
      }
    }
  }, 4, {
    "PatchChild:#childScope/0": {
      "PatchSetup:": {
        "PatchAttr:#label/0 for": _.l = "sM_[4].#childScope/0@4.uid",
        "PatchText:#text/1": 4,
        "PatchAttr:#input/2 id": _.l,
        "PatchAttr:#input/2 aria-describedby": "sM_.heading"
      }
    }
  }, 5, {
    "PatchChild:#childScope/0": {
      "PatchSetup:": {
        "PatchAttr:#label/0 for": _.m = "sM_[5].#childScope/0@4.uid",
        "PatchText:#text/1": 5,
        "PatchAttr:#input/2 id": _.m,
        "PatchAttr:#input/2 aria-describedby": "sM_.heading"
      }
    }
  }, "packages/runtime-tags/src/__tests__/fixtures/patch-id-loop-forms/template.marko_5*shell"],
  "PatchLoop:#text/6": ["to-1", {
    "PatchChild:#childScope/0": {
      "PatchSetup:": {
        "PatchAttr:#label/0 for": _.n = "sM_[\"to-1\"].#childScope/0@5.uid",
        "PatchAttr:#input/2 id": _.n,
        "PatchAttr:#input/2 aria-describedby": "sM_.heading"
      },
      "PatchText:#text/1": 1
    }
  }, "to-2", {
    "PatchChild:#childScope/0": {
      "PatchSetup:": {
        "PatchAttr:#label/0 for": _.o = "sM_[\"to-2\"].#childScope/0@5.uid",
        "PatchAttr:#input/2 id": _.o,
        "PatchAttr:#input/2 aria-describedby": "sM_.heading"
      },
      "PatchText:#text/1": 2
    }
  }, "to-3", {
    "PatchChild:#childScope/0": {
      "PatchSetup:": {
        "PatchAttr:#label/0 for": _.p = "sM_[\"to-3\"].#childScope/0@5.uid",
        "PatchAttr:#input/2 id": _.p,
        "PatchAttr:#input/2 aria-describedby": "sM_.heading"
      },
      "PatchText:#text/1": 3
    }
  }, "to-4", {
    "PatchChild:#childScope/0": {
      "PatchSetup:": {
        "PatchAttr:#label/0 for": _.q = "sM_[\"to-4\"].#childScope/0@5.uid",
        "PatchAttr:#input/2 id": _.q,
        "PatchAttr:#input/2 aria-describedby": "sM_.heading"
      },
      "PatchText:#text/1": 4
    }
  }, "to-5", {
    "PatchChild:#childScope/0": {
      "PatchSetup:": {
        "PatchAttr:#label/0 for": _.r = "sM_[\"to-5\"].#childScope/0@5.uid",
        "PatchAttr:#input/2 id": _.r,
        "PatchAttr:#input/2 aria-describedby": "sM_.heading"
      },
      "PatchText:#text/1": 5
    }
  }, "packages/runtime-tags/src/__tests__/fixtures/patch-id-loop-forms/template.marko_6*shell"],
  "PatchLoop:#text/7": [1, {
    "PatchChild:#childScope/0": {
      "PatchSetup:": {
        "PatchAttr:#label/0 for": _.s = "sM_[1].#childScope/0@6.uid",
        "PatchText:#text/1": 1,
        "PatchAttr:#input/2 id": _.s,
        "PatchAttr:#input/2 aria-describedby": "sM_.heading"
      }
    }
  }, 3, {
    "PatchChild:#childScope/0": {
      "PatchSetup:": {
        "PatchAttr:#label/0 for": _.t = "sM_[3].#childScope/0@6.uid",
        "PatchText:#text/1": 3,
        "PatchAttr:#input/2 id": _.t,
        "PatchAttr:#input/2 aria-describedby": "sM_.heading"
      }
    }
  }, "packages/runtime-tags/src/__tests__/fixtures/patch-id-loop-forms/template.marko_7*shell"],
  "PatchLoop:#text/8": ["until-1", {
    "PatchChild:#childScope/0": {
      "PatchSetup:": {
        "PatchAttr:#label/0 for": _.u = "sM_[\"until-1\"].#childScope/0@7.uid",
        "PatchAttr:#input/2 id": _.u,
        "PatchAttr:#input/2 aria-describedby": "sM_.heading"
      },
      "PatchText:#text/1": 1
    }
  }, "until-3", {
    "PatchChild:#childScope/0": {
      "PatchSetup:": {
        "PatchAttr:#label/0 for": _.v = "sM_[\"until-3\"].#childScope/0@7.uid",
        "PatchAttr:#input/2 id": _.v,
        "PatchAttr:#input/2 aria-describedby": "sM_.heading"
      },
      "PatchText:#text/1": 3
    }
  }, "packages/runtime-tags/src/__tests__/fixtures/patch-id-loop-forms/template.marko_8*shell"]
}]
;FfwD

// PATCH holding FfwD
{
  "PatchLoop:#text/1": [],
  "PatchLoop:#text/2": [],
  "PatchLoop:#text/3": [],
  "PatchLoop:#text/4": [],
  "PatchLoop:#text/5": [{
    "PatchChild:#childScope/0": {
      "PatchSetup:": {
        "PatchAttr:#label/0 for": _.a = "sM_[0].#childScope/0@4.uid",
        "PatchText:#text/1": 0,
        "PatchAttr:#input/2 id": _.a,
        "PatchAttr:#input/2 aria-describedby": "sM_.heading"
      }
    }
  }, "packages/runtime-tags/src/__tests__/fixtures/patch-id-loop-forms/template.marko_5*shell"],
  "PatchLoop:#text/6": ["to-0", {
    "PatchChild:#childScope/0": {
      "PatchSetup:": {
        "PatchAttr:#label/0 for": _.b = "sM_[\"to-0\"].#childScope/0@5.uid",
        "PatchAttr:#input/2 id": _.b,
        "PatchAttr:#input/2 aria-describedby": "sM_.heading"
      },
      "PatchText:#text/1": 0
    }
  }, "packages/runtime-tags/src/__tests__/fixtures/patch-id-loop-forms/template.marko_6*shell"],
  "PatchLoop:#text/7": [],
  "PatchLoop:#text/8": []
}

// PATCH holding FfwD
{
  "PatchLoop:#text/1": [{
    "PatchChild:#childScope/0": {
      "PatchSetup:": {
        "PatchAttr:#label/0 for": _.a = "sM_[0].#childScope/0@0.uid",
        "PatchAttr:#input/2 id": _.a,
        "PatchAttr:#input/2 aria-describedby": "sM_.heading"
      },
      "PatchText:#text/1": "c"
    }
  }, "packages/runtime-tags/src/__tests__/fixtures/patch-id-loop-forms/template.marko_1*shell"],
  "PatchLoop:#text/2": ["c", {
    "PatchChild:#childScope/0": {
      "PatchSetup:": {
        "PatchAttr:#label/0 for": _.b = "sM_[\"c\"].#childScope/0@1.uid",
        "PatchText:#text/1": "c",
        "PatchAttr:#input/2 id": _.b,
        "PatchAttr:#input/2 aria-describedby": "sM_.heading"
      }
    }
  }, "packages/runtime-tags/src/__tests__/fixtures/patch-id-loop-forms/template.marko_2*shell"],
  "PatchLoop:#text/3": ["c", {
    "PatchChild:#childScope/0": {
      "PatchSetup:": {
        "PatchAttr:#label/0 for": _.c = "sM_[\"c\"].#childScope/0@2.uid",
        "PatchText:#text/1": "c",
        "PatchAttr:#input/2 id": _.c,
        "PatchAttr:#input/2 aria-describedby": "sM_.heading"
      }
    }
  }, "packages/runtime-tags/src/__tests__/fixtures/patch-id-loop-forms/template.marko_3*shell"],
  "PatchLoop:#text/4": ["key-c", {
    "PatchChild:#childScope/0": {
      "PatchSetup:": {
        "PatchAttr:#label/0 for": _.d = "sM_[\"key-c\"].#childScope/0@3.uid",
        "PatchAttr:#input/2 id": _.d,
        "PatchAttr:#input/2 aria-describedby": "sM_.heading"
      },
      "PatchText:#text/1": 4
    }
  }, "packages/runtime-tags/src/__tests__/fixtures/patch-id-loop-forms/template.marko_4*shell"],
  "PatchLoop:#text/5": [-2, {
    "PatchChild:#childScope/0": {
      "PatchSetup:": {
        "PatchAttr:#label/0 for": _.e = "sM_[-2].#childScope/0@4.uid",
        "PatchText:#text/1": -2,
        "PatchAttr:#input/2 id": _.e,
        "PatchAttr:#input/2 aria-describedby": "sM_.heading"
      }
    }
  }, -1, {
    "PatchChild:#childScope/0": {
      "PatchSetup:": {
        "PatchAttr:#label/0 for": _.f = "sM_[-1].#childScope/0@4.uid",
        "PatchText:#text/1": -1,
        "PatchAttr:#input/2 id": _.f,
        "PatchAttr:#input/2 aria-describedby": "sM_.heading"
      }
    }
  }, 0, {
    "PatchChild:#childScope/0": {
      "PatchSetup:": {
        "PatchAttr:#label/0 for": _.g = "sM_[0].#childScope/0@4.uid",
        "PatchText:#text/1": 0,
        "PatchAttr:#input/2 id": _.g,
        "PatchAttr:#input/2 aria-describedby": "sM_.heading"
      }
    }
  }, 1, {
    "PatchChild:#childScope/0": {
      "PatchSetup:": {
        "PatchAttr:#label/0 for": _.h = "sM_[1].#childScope/0@4.uid",
        "PatchText:#text/1": 1,
        "PatchAttr:#input/2 id": _.h,
        "PatchAttr:#input/2 aria-describedby": "sM_.heading"
      }
    }
  }, 2, {
    "PatchChild:#childScope/0": {
      "PatchSetup:": {
        "PatchAttr:#label/0 for": _.i = "sM_[2].#childScope/0@4.uid",
        "PatchText:#text/1": 2,
        "PatchAttr:#input/2 id": _.i,
        "PatchAttr:#input/2 aria-describedby": "sM_.heading"
      }
    }
  }, "packages/runtime-tags/src/__tests__/fixtures/patch-id-loop-forms/template.marko_5*shell"],
  "PatchLoop:#text/6": ["to--2", {
    "PatchChild:#childScope/0": {
      "PatchSetup:": {
        "PatchAttr:#label/0 for": _.j = "sM_[\"to--2\"].#childScope/0@5.uid",
        "PatchAttr:#input/2 id": _.j,
        "PatchAttr:#input/2 aria-describedby": "sM_.heading"
      },
      "PatchText:#text/1": -2
    }
  }, "to--1", {
    "PatchChild:#childScope/0": {
      "PatchSetup:": {
        "PatchAttr:#label/0 for": _.k = "sM_[\"to--1\"].#childScope/0@5.uid",
        "PatchAttr:#input/2 id": _.k,
        "PatchAttr:#input/2 aria-describedby": "sM_.heading"
      },
      "PatchText:#text/1": -1
    }
  }, "to-0", {
    "PatchChild:#childScope/0": {
      "PatchSetup:": {
        "PatchAttr:#label/0 for": _.l = "sM_[\"to-0\"].#childScope/0@5.uid",
        "PatchAttr:#input/2 id": _.l,
        "PatchAttr:#input/2 aria-describedby": "sM_.heading"
      },
      "PatchText:#text/1": 0
    }
  }, "to-1", {
    "PatchChild:#childScope/0": {
      "PatchSetup:": {
        "PatchAttr:#label/0 for": _.m = "sM_[\"to-1\"].#childScope/0@5.uid",
        "PatchAttr:#input/2 id": _.m,
        "PatchAttr:#input/2 aria-describedby": "sM_.heading"
      },
      "PatchText:#text/1": 1
    }
  }, "to-2", {
    "PatchChild:#childScope/0": {
      "PatchSetup:": {
        "PatchAttr:#label/0 for": _.n = "sM_[\"to-2\"].#childScope/0@5.uid",
        "PatchAttr:#input/2 id": _.n,
        "PatchAttr:#input/2 aria-describedby": "sM_.heading"
      },
      "PatchText:#text/1": 2
    }
  }, "packages/runtime-tags/src/__tests__/fixtures/patch-id-loop-forms/template.marko_6*shell"],
  "PatchLoop:#text/7": [-2, {
    "PatchChild:#childScope/0": {
      "PatchSetup:": {
        "PatchAttr:#label/0 for": _.o = "sM_[-2].#childScope/0@6.uid",
        "PatchText:#text/1": -2,
        "PatchAttr:#input/2 id": _.o,
        "PatchAttr:#input/2 aria-describedby": "sM_.heading"
      }
    }
  }, 0, {
    "PatchChild:#childScope/0": {
      "PatchSetup:": {
        "PatchAttr:#label/0 for": _.p = "sM_[0].#childScope/0@6.uid",
        "PatchText:#text/1": 0,
        "PatchAttr:#input/2 id": _.p,
        "PatchAttr:#input/2 aria-describedby": "sM_.heading"
      }
    }
  }, "packages/runtime-tags/src/__tests__/fixtures/patch-id-loop-forms/template.marko_7*shell"],
  "PatchLoop:#text/8": ["until--2", {
    "PatchChild:#childScope/0": {
      "PatchSetup:": {
        "PatchAttr:#label/0 for": _.q = "sM_[\"until--2\"].#childScope/0@7.uid",
        "PatchAttr:#input/2 id": _.q,
        "PatchAttr:#input/2 aria-describedby": "sM_.heading"
      },
      "PatchText:#text/1": -2
    }
  }, "until-0", {
    "PatchChild:#childScope/0": {
      "PatchSetup:": {
        "PatchAttr:#label/0 for": _.r = "sM_[\"until-0\"].#childScope/0@7.uid",
        "PatchAttr:#input/2 id": _.r,
        "PatchAttr:#input/2 aria-describedby": "sM_.heading"
      },
      "PatchText:#text/1": 0
    }
  }, "packages/runtime-tags/src/__tests__/fixtures/patch-id-loop-forms/template.marko_8*shell"]
}

// PATCH holding FfwD
{
  "PatchLoop:#text/1": [{
    "PatchChild:#childScope/0": {
      "PatchSetup:": {
        "PatchAttr:#label/0 for": _.a = "sM_[0].#childScope/0@0.uid",
        "PatchAttr:#input/2 id": _.a,
        "PatchAttr:#input/2 aria-describedby": "sM_.heading"
      },
      "PatchText:#text/1": "a"
    }
  }, {
    "PatchChild:#childScope/0": {
      "PatchSetup:": {
        "PatchAttr:#label/0 for": _.b = "sM_[1].#childScope/0@0.uid",
        "PatchAttr:#input/2 id": _.b,
        "PatchAttr:#input/2 aria-describedby": "sM_.heading"
      },
      "PatchText:#text/1": "b"
    }
  }, {
    "PatchChild:#childScope/0": {
      "PatchSetup:": {
        "PatchAttr:#label/0 for": _.c = "sM_[2].#childScope/0@0.uid",
        "PatchAttr:#input/2 id": _.c,
        "PatchAttr:#input/2 aria-describedby": "sM_.heading"
      },
      "PatchText:#text/1": "c"
    }
  }, "packages/runtime-tags/src/__tests__/fixtures/patch-id-loop-forms/template.marko_1*shell"],
  "PatchLoop:#text/2": ["a", {
    "PatchChild:#childScope/0": {
      "PatchSetup:": {
        "PatchAttr:#label/0 for": _.d = "sM_[\"a\"].#childScope/0@1.uid",
        "PatchText:#text/1": "a",
        "PatchAttr:#input/2 id": _.d,
        "PatchAttr:#input/2 aria-describedby": "sM_.heading"
      }
    }
  }, "b", {
    "PatchChild:#childScope/0": {
      "PatchSetup:": {
        "PatchAttr:#label/0 for": _.e = "sM_[\"b\"].#childScope/0@1.uid",
        "PatchText:#text/1": "b",
        "PatchAttr:#input/2 id": _.e,
        "PatchAttr:#input/2 aria-describedby": "sM_.heading"
      }
    }
  }, "c", {
    "PatchChild:#childScope/0": {
      "PatchSetup:": {
        "PatchAttr:#label/0 for": _.f = "sM_[\"c\"].#childScope/0@1.uid",
        "PatchText:#text/1": "c",
        "PatchAttr:#input/2 id": _.f,
        "PatchAttr:#input/2 aria-describedby": "sM_.heading"
      }
    }
  }, "packages/runtime-tags/src/__tests__/fixtures/patch-id-loop-forms/template.marko_2*shell"],
  "PatchLoop:#text/3": ["a", {
    "PatchChild:#childScope/0": {
      "PatchSetup:": {
        "PatchAttr:#label/0 for": _.g = "sM_[\"a\"].#childScope/0@2.uid",
        "PatchText:#text/1": "a",
        "PatchAttr:#input/2 id": _.g,
        "PatchAttr:#input/2 aria-describedby": "sM_.heading"
      }
    }
  }, "b", {
    "PatchChild:#childScope/0": {
      "PatchSetup:": {
        "PatchAttr:#label/0 for": _.h = "sM_[\"b\"].#childScope/0@2.uid",
        "PatchText:#text/1": "b",
        "PatchAttr:#input/2 id": _.h,
        "PatchAttr:#input/2 aria-describedby": "sM_.heading"
      }
    }
  }, "c", {
    "PatchChild:#childScope/0": {
      "PatchSetup:": {
        "PatchAttr:#label/0 for": _.i = "sM_[\"c\"].#childScope/0@2.uid",
        "PatchText:#text/1": "c",
        "PatchAttr:#input/2 id": _.i,
        "PatchAttr:#input/2 aria-describedby": "sM_.heading"
      }
    }
  }, "packages/runtime-tags/src/__tests__/fixtures/patch-id-loop-forms/template.marko_3*shell"],
  "PatchLoop:#text/4": ["key-a", {
    "PatchChild:#childScope/0": {
      "PatchSetup:": {
        "PatchAttr:#label/0 for": _.j = "sM_[\"key-a\"].#childScope/0@3.uid",
        "PatchAttr:#input/2 id": _.j,
        "PatchAttr:#input/2 aria-describedby": "sM_.heading"
      },
      "PatchText:#text/1": 1
    }
  }, "key-b", {
    "PatchChild:#childScope/0": {
      "PatchSetup:": {
        "PatchAttr:#label/0 for": _.k = "sM_[\"key-b\"].#childScope/0@3.uid",
        "PatchAttr:#input/2 id": _.k,
        "PatchAttr:#input/2 aria-describedby": "sM_.heading"
      },
      "PatchText:#text/1": 2
    }
  }, "key-c", {
    "PatchChild:#childScope/0": {
      "PatchSetup:": {
        "PatchAttr:#label/0 for": _.l = "sM_[\"key-c\"].#childScope/0@3.uid",
        "PatchAttr:#input/2 id": _.l,
        "PatchAttr:#input/2 aria-describedby": "sM_.heading"
      },
      "PatchText:#text/1": 3
    }
  }, "packages/runtime-tags/src/__tests__/fixtures/patch-id-loop-forms/template.marko_4*shell"],
  "PatchLoop:#text/5": [{
    "PatchChild:#childScope/0": {
      "PatchSetup:": {
        "PatchAttr:#label/0 for": _.m = "sM_[0].#childScope/0@4.uid",
        "PatchText:#text/1": 0,
        "PatchAttr:#input/2 id": _.m,
        "PatchAttr:#input/2 aria-describedby": "sM_.heading"
      }
    }
  }, {
    "PatchChild:#childScope/0": {
      "PatchSetup:": {
        "PatchAttr:#label/0 for": _.n = "sM_[1].#childScope/0@4.uid",
        "PatchText:#text/1": 1,
        "PatchAttr:#input/2 id": _.n,
        "PatchAttr:#input/2 aria-describedby": "sM_.heading"
      }
    }
  }, {
    "PatchChild:#childScope/0": {
      "PatchSetup:": {
        "PatchAttr:#label/0 for": _.o = "sM_[2].#childScope/0@4.uid",
        "PatchText:#text/1": 2,
        "PatchAttr:#input/2 id": _.o,
        "PatchAttr:#input/2 aria-describedby": "sM_.heading"
      }
    }
  }, {
    "PatchChild:#childScope/0": {
      "PatchSetup:": {
        "PatchAttr:#label/0 for": _.p = "sM_[3].#childScope/0@4.uid",
        "PatchText:#text/1": 3,
        "PatchAttr:#input/2 id": _.p,
        "PatchAttr:#input/2 aria-describedby": "sM_.heading"
      }
    }
  }, {
    "PatchChild:#childScope/0": {
      "PatchSetup:": {
        "PatchAttr:#label/0 for": _.q = "sM_[4].#childScope/0@4.uid",
        "PatchText:#text/1": 4,
        "PatchAttr:#input/2 id": _.q,
        "PatchAttr:#input/2 aria-describedby": "sM_.heading"
      }
    }
  }, "packages/runtime-tags/src/__tests__/fixtures/patch-id-loop-forms/template.marko_5*shell"],
  "PatchLoop:#text/6": ["to-0", {
    "PatchChild:#childScope/0": {
      "PatchSetup:": {
        "PatchAttr:#label/0 for": _.r = "sM_[\"to-0\"].#childScope/0@5.uid",
        "PatchAttr:#input/2 id": _.r,
        "PatchAttr:#input/2 aria-describedby": "sM_.heading"
      },
      "PatchText:#text/1": 0
    }
  }, "to-1", {
    "PatchChild:#childScope/0": {
      "PatchSetup:": {
        "PatchAttr:#label/0 for": _.s = "sM_[\"to-1\"].#childScope/0@5.uid",
        "PatchAttr:#input/2 id": _.s,
        "PatchAttr:#input/2 aria-describedby": "sM_.heading"
      },
      "PatchText:#text/1": 1
    }
  }, "to-2", {
    "PatchChild:#childScope/0": {
      "PatchSetup:": {
        "PatchAttr:#label/0 for": _.t = "sM_[\"to-2\"].#childScope/0@5.uid",
        "PatchAttr:#input/2 id": _.t,
        "PatchAttr:#input/2 aria-describedby": "sM_.heading"
      },
      "PatchText:#text/1": 2
    }
  }, "to-3", {
    "PatchChild:#childScope/0": {
      "PatchSetup:": {
        "PatchAttr:#label/0 for": _.u = "sM_[\"to-3\"].#childScope/0@5.uid",
        "PatchAttr:#input/2 id": _.u,
        "PatchAttr:#input/2 aria-describedby": "sM_.heading"
      },
      "PatchText:#text/1": 3
    }
  }, "to-4", {
    "PatchChild:#childScope/0": {
      "PatchSetup:": {
        "PatchAttr:#label/0 for": _.v = "sM_[\"to-4\"].#childScope/0@5.uid",
        "PatchAttr:#input/2 id": _.v,
        "PatchAttr:#input/2 aria-describedby": "sM_.heading"
      },
      "PatchText:#text/1": 4
    }
  }, "packages/runtime-tags/src/__tests__/fixtures/patch-id-loop-forms/template.marko_6*shell"],
  "PatchLoop:#text/7": [0, {
    "PatchChild:#childScope/0": {
      "PatchSetup:": {
        "PatchAttr:#label/0 for": _.w = "sM_[0].#childScope/0@6.uid",
        "PatchText:#text/1": 0,
        "PatchAttr:#input/2 id": _.w,
        "PatchAttr:#input/2 aria-describedby": "sM_.heading"
      }
    }
  }, 2, {
    "PatchChild:#childScope/0": {
      "PatchSetup:": {
        "PatchAttr:#label/0 for": _.x = "sM_[2].#childScope/0@6.uid",
        "PatchText:#text/1": 2,
        "PatchAttr:#input/2 id": _.x,
        "PatchAttr:#input/2 aria-describedby": "sM_.heading"
      }
    }
  }, "packages/runtime-tags/src/__tests__/fixtures/patch-id-loop-forms/template.marko_7*shell"],
  "PatchLoop:#text/8": ["until-0", {
    "PatchChild:#childScope/0": {
      "PatchSetup:": {
        "PatchAttr:#label/0 for": _.y = "sM_[\"until-0\"].#childScope/0@7.uid",
        "PatchAttr:#input/2 id": _.y,
        "PatchAttr:#input/2 aria-describedby": "sM_.heading"
      },
      "PatchText:#text/1": 0
    }
  }, "until-2", {
    "PatchChild:#childScope/0": {
      "PatchSetup:": {
        "PatchAttr:#label/0 for": _.z = "sM_[\"until-2\"].#childScope/0@7.uid",
        "PatchAttr:#input/2 id": _.z,
        "PatchAttr:#input/2 aria-describedby": "sM_.heading"
      },
      "PatchText:#text/1": 2
    }
  }, "packages/runtime-tags/src/__tests__/fixtures/patch-id-loop-forms/template.marko_8*shell"]
}

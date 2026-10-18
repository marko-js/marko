// PATCH
[`packages/runtime-tags/src/__tests__/fixtures/patch-spread-normalized-attrs/template.marko_1*shell !packages/runtime-tags/src/__tests__/fixtures/patch-spread-normalized-attrs/template.marko_1_input_link#0:9; ;<a>z</a>`, {
  "PatchAttrs:#div/2": {
    class: {
      SHOWN_on2: !0,
      SECRET_off2: !1
    },
    style: {
      color: "red",
      "--SECRET_var2": !1
    },
    title: "SHOWN_t2",
    tabindex: 1,
    "data-x": null,
    hidden: !1
  },
  "PatchAttrs:#input/4": [{
    value: "SHOWN_v",
    "data-secret": !1
  }, 0, 1],
  "PatchBranch:#text/3": [{
    "PatchAttrs:#a/0": {
      href: "/SHOWN_link2",
      class: {
        SHOWN_lc2: !0,
        SECRET_lc2: !1
      }
    }
  }, "packages/runtime-tags/src/__tests__/fixtures/patch-spread-normalized-attrs/template.marko_1*shell"]
}]
;BAE

// PATCH holding BAE
{
  "PatchAttrs:#div/2": {
    class: {
      SHOWN_on3: !0,
      SECRET_off3: !1
    },
    style: {
      color: "red",
      "--SECRET_var3": !1
    },
    title: "SHOWN_t3",
    tabindex: 1,
    "data-x": null,
    hidden: !1
  },
  "PatchAttrs:#input/4": [{
    value: "SHOWN_v",
    "data-secret": !1
  }, 0, 1],
  "PatchBranch:#text/3": [{
    "PatchAttrs:#a/0": {
      href: "/SHOWN_link3",
      class: ["SHOWN_lc3"]
    }
  }, "packages/runtime-tags/src/__tests__/fixtures/patch-spread-normalized-attrs/template.marko_1*shell"]
}

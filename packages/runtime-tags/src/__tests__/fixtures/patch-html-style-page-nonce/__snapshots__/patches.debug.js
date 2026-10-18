// PATCH
[`packages/runtime-tags/src/__tests__/fixtures/patch-html-style-page-nonce/template.marko_1*shell !packages/runtime-tags/src/__tests__/fixtures/patch-html-style-page-nonce/template.marko_1_input_attrs#0:5; b ;<style>p.s { color: red }</style><style>p.t { color: green }</style>`, {
  "PatchAttrs:#style/1": [{
    "data-x": "1"
  }, {
    nonce: 1
  }],
  "PatchTextContent:#style/1": "p.u { --page: 1 }",
  "PatchBranch:#text/0": [1, {
    "PatchAttrs:#style/1": [{
      "data-x": "1"
    }, {
      nonce: 1
    }]
  }, "packages/runtime-tags/src/__tests__/fixtures/patch-html-style-page-nonce/template.marko_1*shell"]
}]
;BgE

// PATCH holding BgE
{
  "PatchAttrs:#style/1": [{
    "data-x": "2"
  }, {
    nonce: 1
  }],
  "PatchTextContent:#style/1": "p.u { --page: 2 }",
  "PatchBranch:#text/0": [1, {
    "PatchAttrs:#style/1": [{
      "data-x": "2"
    }, {
      nonce: 1
    }]
  }, "packages/runtime-tags/src/__tests__/fixtures/patch-html-style-page-nonce/template.marko_1*shell"]
}

packages/translator/src/__tests__/fixtures/dynamic-tag-name/template.marko(14,4): Unable to find entry point for custom tag <[object Object]>.
  12 | <${large ? "h1" : "h2"} class=["a", "b"] other=other/>
  13 |
> 14 | <${showTagA ? tagA : tagB} class=["a", "b"] other=other class=["a", "b"] other=other/>
     |    ^^^^^^^^^^^^^^^^^^^^^^
  15 | <${showTagA && tagA} class=["a", "b"] other=other/>
  16 | <${showTagA && tagA} class=["a", "b"] other=other>
  17 |   Body content
packages/translator/src/__tests__/fixtures/attr-class/template.marko(12,4): Dynamic @tags cannot be mixed with body content.
  10 |
  11 | <${input.test} class=["a", { b: c, d }]>
> 12 |   <@test class=["a", { b: c, d }]>Hello</@test>
     |    ^^^^^
  13 | </>
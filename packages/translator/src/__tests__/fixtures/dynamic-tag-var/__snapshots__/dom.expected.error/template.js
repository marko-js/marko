packages/translator/src/__tests__/fixtures/dynamic-tag-var/template.marko(4,4): Unable to find entry point for custom tag <[object Object]>.
  2 |
  3 | <attrs/{ show, dynamic }/>
> 4 | <${child}/data1/>
    |    ^^^^^
  5 | <${show && child}/data2/>
  6 | <${dynamic}/data3/>
  7 | <${show && "div"}/el1/>
packages/translator/src/__tests__/fixtures/context-tag-from-relative-path/template.marko(3,4): Unable to find entry point for custom tag <[object Object]>.
  1 | import Other from "./other.marko";
  2 |
> 3 | <${Other}>
    |    ^^^^^
  4 |   <span>
  5 |     <get/message="./other.marko"/>
  6 |     ${message}
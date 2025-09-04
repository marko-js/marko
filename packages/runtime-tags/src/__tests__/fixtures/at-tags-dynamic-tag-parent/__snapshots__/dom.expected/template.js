export const $template = "<!><!><!>";
export const $walks = /* over(1), replace, over(2) */"b%c";
import Hello from "./tags/hello/index.marko";
const x = Hello;
import * as _ from "@marko/runtime-tags/debug/dom";
const $footer_content = _._content_resume("__tests__/template.marko_3_content", "Footer content", /* over(1) */"b");
const $header_content = _._content_resume("__tests__/template.marko_2_content", "Header content", /* over(1) */"b");
const $x_content = _._content_resume("__tests__/template.marko_1_content", "Body content", /* over(1) */"b");
const $dynamicTag = /* @__PURE__ */_._dynamic_tag("#text/0", $x_content);
export function $setup($scope) {
  $dynamicTag($scope, x, () => ({
    footer: _.attrTag({
      class: "my-footer",
      content: $footer_content($scope)
    }),
    header: _.attrTag({
      class: "my-header",
      content: $header_content($scope)
    })
  }));
}
export default /* @__PURE__ */_._template("__tests__/template.marko", $template, $walks, $setup);
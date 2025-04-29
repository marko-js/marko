export const $template = "<!><!><!>";
export const $walks = /* replace, over(1) */"D%bD";
import Hello from "./tags/hello/index.marko";
const x = Hello;
import * as _$ from "@marko/runtime-tags/debug/dom";
const $footer_content = _$.registerContent("__tests__/template.marko_3_renderer", "Footer content");
const $header_content = _$.registerContent("__tests__/template.marko_2_renderer", "Header content");
const $x_content = _$.registerContent("__tests__/template.marko_1_renderer", "Body content");
const $dynamicTag = /* @__PURE__ */_$.dynamicTag("#text/0", $x_content);
export function $setup($scope) {
  $dynamicTag($scope, x, () => ({
    footer: _$.attrTag({
      class: "my-footer",
      content: $footer_content($scope)
    }),
    header: _$.attrTag({
      class: "my-header",
      content: $header_content($scope)
    })
  }));
}
export default /* @__PURE__ */_$.createTemplate("__tests__/template.marko", $template, $walks, $setup);
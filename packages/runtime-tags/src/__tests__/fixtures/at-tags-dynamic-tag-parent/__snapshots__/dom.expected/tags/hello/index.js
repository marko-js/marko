export const $template = "<header><!></header><main><!></main><footer><!></footer>";
export const $walks = /* get, next(1), replace, out(1), next(1), replace, out(1), get, next(1), replace, out(1) */" D%lD%l D%l";
export const $setup = () => {};
import * as _ from "@marko/runtime-tags/debug/dom";
export const $input_header_class = /* @__PURE__ */_._const("input_header_class", ($scope, input_header_class) => _._attr_class($scope["#header/0"], input_header_class));
const $dynamicTag = /* @__PURE__ */_._dynamic_tag("#text/1");
export const $input_header_content = /* @__PURE__ */_._const("input_header_content", $dynamicTag);
const $dynamicTag2 = /* @__PURE__ */_._dynamic_tag("#text/2");
export const $input_content = /* @__PURE__ */_._const("input_content", $dynamicTag2);
export const $input_footer_class = /* @__PURE__ */_._const("input_footer_class", ($scope, input_footer_class) => _._attr_class($scope["#footer/3"], input_footer_class));
const $dynamicTag3 = /* @__PURE__ */_._dynamic_tag("#text/4");
export const $input_footer_content = /* @__PURE__ */_._const("input_footer_content", $dynamicTag3);
export const $input = /* @__PURE__ */_._const("input", ($scope, input) => {
  $input_header($scope, input.header);
  $input_content($scope, input.content);
  $input_footer($scope, input.footer);
});
export const $input_header = /* @__PURE__ */_._const("input_header", ($scope, input_header) => {
  $input_header_class($scope, input_header?.class);
  $input_header_content($scope, input_header?.content);
});
export const $input_footer = /* @__PURE__ */_._const("input_footer", ($scope, input_footer) => {
  $input_footer_class($scope, input_footer?.class);
  $input_footer_content($scope, input_footer?.content);
});
export default /* @__PURE__ */_._template("__tests__/tags/hello/index.marko", $template, $walks, $setup, $input);
export const $template = "<!><!><!><!>";
export const $walks = /* over(1), replace, over(1), replace, over(2) */"b%b%c";
export const $setup = () => {};
import * as _ from "@marko/runtime-tags/debug/dom";
const $for_content__dynamicTag = /* @__PURE__ */_._dynamic_tag("#text/0");
const $for_content__item_content = ($scope, item_content) => $for_content__dynamicTag($scope, item_content);
const $for_content__$params = ($scope, $params2) => $for_content__item($scope, $params2[0]);
const $for_content__item = ($scope, item) => $for_content__item_content($scope, item?.content);
const $for = /* @__PURE__ */_._for_of("#text/0", "<!><!><!>", /* over(1), replace, over(2) */"b%c", 0, $for_content__$params);
export const $input_item = ($scope, input_item) => $for($scope, [input_item]);
const $dynamicTag = /* @__PURE__ */_._dynamic_tag("#text/1");
export const $input_other = ($scope, input_other) => $dynamicTag($scope, input_other);
export const $input = ($scope, input) => {
  $input_item($scope, input.item);
  $input_other($scope, input.other);
};
export default /* @__PURE__ */_._template("__tests__/tags/hello/index.marko", $template, $walks, $setup, $input);
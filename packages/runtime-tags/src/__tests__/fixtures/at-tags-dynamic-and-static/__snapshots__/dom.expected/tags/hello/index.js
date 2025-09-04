export const $template = "<!><!><!><!>";
export const $walks = /* over(1), replace, over(1), replace, over(2) */"b%b%c";
export const $setup = () => {};
import * as _ from "@marko/runtime-tags/debug/dom";
const $for_content__dynamicTag = /* @__PURE__ */_._dynamic_tag("#text/0");
const $for_content__item_content = /* @__PURE__ */_._const("item_content", $for_content__dynamicTag);
const $for_content__$params = /* @__PURE__ */_._const("$params2", ($scope, $params2) => $for_content__item($scope, $params2[0]));
const $for_content__item = /* @__PURE__ */_._const("item", ($scope, item) => $for_content__item_content($scope, item?.content));
const $for_content = /* @__PURE__ */_._content_branch("<!><!><!>", /* over(1), replace, over(2) */"b%c", 0, $for_content__$params);
const $for = /* @__PURE__ */_._for_of("#text/0", $for_content);
export const $input_item = /* @__PURE__ */_._const("input_item", ($scope, input_item) => $for($scope, [input_item]));
const $dynamicTag = /* @__PURE__ */_._dynamic_tag("#text/1");
export const $input_other = /* @__PURE__ */_._const("input_other", $dynamicTag);
export const $input = /* @__PURE__ */_._const("input", ($scope, input) => {
  $input_item($scope, input.item);
  $input_other($scope, input.other);
});
export default /* @__PURE__ */_._template("__tests__/tags/hello/index.marko", $template, $walks, $setup, $input);
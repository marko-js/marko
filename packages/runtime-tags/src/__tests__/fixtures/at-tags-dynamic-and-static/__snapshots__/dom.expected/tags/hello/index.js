export const $template = "<!><!><!><!>";
export const $walks = /* replace, over(1), replace, over(1) */"D%b%bD";
export const $setup = () => {};
import * as _$ from "@marko/runtime-tags/debug/dom";
const $dynamicTag$for$content = /* @__PURE__ */_$.dynamicTag("#text/0");
const $item_content$for$content = /* @__PURE__ */_$.value("item_content", $dynamicTag$for$content);
const $params2$for$content = /* @__PURE__ */_$.value("$params2", ($scope, $params2) => $item$for$content($scope, $params2[0]));
const $item$for$content = /* @__PURE__ */_$.value("item", ($scope, item) => $item_content$for$content($scope, item?.content));
const $for_content = /* @__PURE__ */_$.createRenderer("<!><!><!>", /* replace */"D%D", 0, $params2$for$content);
const $for = /* @__PURE__ */_$.loopOf("#text/0", $for_content);
export const $input_item = /* @__PURE__ */_$.value("input_item", ($scope, input_item) => $for($scope, [input_item]));
const $dynamicTag = /* @__PURE__ */_$.dynamicTag("#text/1");
export const $input_other = /* @__PURE__ */_$.value("input_other", $dynamicTag);
export const $input = /* @__PURE__ */_$.value("input", ($scope, input) => {
  $input_item($scope, input.item);
  $input_other($scope, input.other);
});
export default /* @__PURE__ */_$.createTemplate("__tests__/tags/hello/index.marko", $template, $walks, $setup, $input);
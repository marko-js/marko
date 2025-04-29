export const $template = "<!><!><!><!>";
export const $walks = /* replace, over(1), replace, over(1) */"D%b%bD";
export const $setup = () => {};
import * as _$ from "@marko/runtime-tags/debug/dom";
const $row$for$content_effect = _$.effect("__tests__/tags/hello/index.marko_3_row", $scope => _$.attrsEvents($scope, "#div/0"));
const $row$for$content = /* @__PURE__ */_$.value("row", ($scope, row) => {
  _$.partialAttrs($scope, "#div/0", row, {
    class: 1
  });
  $row_content$for$content($scope, row?.content);
  $row$for$content_effect($scope);
});
const $dynamicTag$for$content2 = /* @__PURE__ */_$.dynamicTag("#text/1");
const $row_content$for$content = /* @__PURE__ */_$.value("row_content", $dynamicTag$for$content2);
const $params4$for$content = /* @__PURE__ */_$.value("$params4", ($scope, $params4) => $row$for$content($scope, $params4[0]));
const $for_content3 = /* @__PURE__ */_$.createRenderer("<div class=row><!></div>", /* get, next(1), replace */" D%", 0, $params4$for$content);
const $col$for$content_effect = _$.effect("__tests__/tags/hello/index.marko_2_col", $scope => _$.attrsEvents($scope, "#div/0"));
const $col$for$content = /* @__PURE__ */_$.value("col", ($scope, col) => {
  _$.partialAttrs($scope, "#div/0", col, {
    class: 1
  });
  $col_row$for$content($scope, col?.row);
  $col$for$content_effect($scope);
});
const $for$for$content = /* @__PURE__ */_$.loopOf("#text/1", $for_content3);
const $col_row$for$content = /* @__PURE__ */_$.value("col_row", ($scope, col_row) => $for$for$content($scope, [col_row]));
const $params3$for$content = /* @__PURE__ */_$.value("$params3", ($scope, $params3) => $col$for$content($scope, $params3[0]));
const $for_content2 = /* @__PURE__ */_$.createRenderer("<div class=col></div><!><!>", /* get, over(1), replace */" b%D", 0, $params3$for$content);
const $item$for$content_effect = _$.effect("__tests__/tags/hello/index.marko_1_item", $scope => _$.attrsEvents($scope, "#div/0"));
const $item$for$content = /* @__PURE__ */_$.value("item", ($scope, item) => {
  _$.partialAttrs($scope, "#div/0", item, {
    class: 1
  });
  $item_content$for$content($scope, item?.content);
  $item$for$content_effect($scope);
});
const $dynamicTag$for$content = /* @__PURE__ */_$.dynamicTag("#text/1");
const $item_content$for$content = /* @__PURE__ */_$.value("item_content", $dynamicTag$for$content);
const $params2$for$content = /* @__PURE__ */_$.value("$params2", ($scope, $params2) => $item$for$content($scope, $params2[0]));
const $for_content = /* @__PURE__ */_$.createRenderer("<div class=item><!></div>", /* get, next(1), replace */" D%", 0, $params2$for$content);
const $for = /* @__PURE__ */_$.loopOf("#text/0", $for_content);
export const $input_list_item = /* @__PURE__ */_$.value("input_list_item", ($scope, input_list_item) => $for($scope, [input_list_item]));
const $for2 = /* @__PURE__ */_$.loopOf("#text/1", $for_content2);
export const $input_col = /* @__PURE__ */_$.value("input_col", ($scope, input_col) => $for2($scope, [input_col]));
export const $input = /* @__PURE__ */_$.value("input", ($scope, input) => {
  $input_list($scope, input.list);
  $input_col($scope, input.col);
});
export const $input_list = /* @__PURE__ */_$.value("input_list", ($scope, input_list) => $input_list_item($scope, input_list?.item));
export default /* @__PURE__ */_$.createTemplate("__tests__/tags/hello/index.marko", $template, $walks, $setup, $input);
export const $template = "<!><!><!><!>";
export const $walks = /* over(1), replace, over(1), replace, over(2) */"b%b%c";
export const $setup = () => {};
import * as _ from "@marko/runtime-tags/debug/dom";
const $for_content3__row__script = _._script("__tests__/tags/hello/index.marko_3_row", $scope => _._attrs_script($scope, "#div/0"));
const $for_content3__row = /* @__PURE__ */_._const("row", $scope => {
  _._attrs_partial($scope, "#div/0", $scope.row, {
    class: 1
  });
  $for_content3__row_content($scope, $scope.row?.content);
  $for_content3__row__script($scope);
});
const $for_content3__dynamicTag = /* @__PURE__ */_._dynamic_tag("#text/1");
const $for_content3__row_content = /* @__PURE__ */_._const("row_content", $scope => $for_content3__dynamicTag($scope, $scope.row_content));
const $for_content3__$params = /* @__PURE__ */_._const("$params4", $scope => $for_content3__row($scope, $scope.$params4[0]));
const $for_content3 = /* @__PURE__ */_._content_branch("<div class=row><!></div>", /* get, next(1), replace, out(1) */" D%l", 0, $for_content3__$params);
const $for_content2__col__script = _._script("__tests__/tags/hello/index.marko_2_col", $scope => _._attrs_script($scope, "#div/0"));
const $for_content2__col = /* @__PURE__ */_._const("col", $scope => {
  _._attrs_partial_content($scope, "#div/0", $scope.col, {
    class: 1
  });
  $for_content2__col_row($scope, $scope.col?.row);
  $for_content2__col__script($scope);
});
const $for_content2__for = /* @__PURE__ */_._for_of("#text/1", $for_content3);
const $for_content2__col_row = /* @__PURE__ */_._const("col_row", $scope => $for_content2__for($scope, [$scope.col_row]));
const $for_content2__$params = /* @__PURE__ */_._const("$params3", $scope => $for_content2__col($scope, $scope.$params3[0]));
const $for_content2 = /* @__PURE__ */_._content_branch("<div class=col></div><!><!>", /* get, over(1), replace, over(2) */" b%c", 0, $for_content2__$params);
const $for_content__item__script = _._script("__tests__/tags/hello/index.marko_1_item", $scope => _._attrs_script($scope, "#div/0"));
const $for_content__item = /* @__PURE__ */_._const("item", $scope => {
  _._attrs_partial($scope, "#div/0", $scope.item, {
    class: 1
  });
  $for_content__item_content($scope, $scope.item?.content);
  $for_content__item__script($scope);
});
const $for_content__dynamicTag = /* @__PURE__ */_._dynamic_tag("#text/1");
const $for_content__item_content = /* @__PURE__ */_._const("item_content", $scope => $for_content__dynamicTag($scope, $scope.item_content));
const $for_content__$params = /* @__PURE__ */_._const("$params2", $scope => $for_content__item($scope, $scope.$params2[0]));
const $for_content = /* @__PURE__ */_._content_branch("<div class=item><!></div>", /* get, next(1), replace, out(1) */" D%l", 0, $for_content__$params);
const $for = /* @__PURE__ */_._for_of("#text/0", $for_content);
export const $input_list_item = /* @__PURE__ */_._const("input_list_item", $scope => $for($scope, [$scope.input_list_item]));
const $for2 = /* @__PURE__ */_._for_of("#text/1", $for_content2);
export const $input_col = /* @__PURE__ */_._const("input_col", $scope => $for2($scope, [$scope.input_col]));
export const $input = /* @__PURE__ */_._const("input", $scope => {
  $input_list($scope, $scope.input.list);
  $input_col($scope, $scope.input.col);
});
export const $input_list = /* @__PURE__ */_._const("input_list", $scope => $input_list_item($scope, $scope.input_list?.item));
export default /* @__PURE__ */_._template("__tests__/tags/hello/index.marko", $template, $walks, $setup, $input);
export const $template = "<button>Toggle</button><div></div><!><!>";
export const $walks = /* get, over(1), get, over(1), replace, over(2) */" b b%c";
import * as _ from "@marko/runtime-tags/debug/dom";
import { $setup as _child, $write as _child_input_write, $name as _child_input_name, $template as _child_template, $walks as _child_walks } from "./tags/child.marko";
const $for_content2__write = /* @__PURE__ */_._closure_get("write", $scope => _child_input_write($scope["#childScope/0"], $scope._._.write), $scope => $scope._._);
const $for_content2__setup = $scope => {
  $for_content2__write($scope);
  $for_content2__outerItem._($scope);
  _child($scope["#childScope/0"]);
};
const $for_content2__outerItem__OR__middleItem = /* @__PURE__ */_._or(3, $scope => _child_input_name($scope["#childScope/0"], `${$scope._.outerItem}.${$scope.middleItem}`));
const $for_content2__outerItem = /* @__PURE__ */_._for_closure("#text/1", $for_content2__outerItem__OR__middleItem);
const $for_content2__middleItem = /* @__PURE__ */_._const("middleItem", $for_content2__outerItem__OR__middleItem);
const $for_content2__$params = ($scope, $params3) => $for_content2__middleItem($scope, $params3[0]);
const $for_content__for = /* @__PURE__ */_._for_of("#text/1", `<div>${_child_template}</div>`, /* next(1), <child>, out(1) */`D/${_child_walks}&l`, $for_content2__setup, $for_content2__$params);
const $for_content__items = /* @__PURE__ */_._for_closure("#text/2", $scope => $for_content__for($scope, [$scope._.items]));
const $for_content__setup = $scope => {
  $for_content__items._($scope);
  $for_content__write._($scope);
  _child($scope["#childScope/0"]);
};
const $for_content__write = /* @__PURE__ */_._for_closure("#text/2", $scope => _child_input_write($scope["#childScope/0"], $scope._.write));
const $for_content__outerItem = /* @__PURE__ */_._const("outerItem", $scope => {
  _child_input_name($scope["#childScope/0"], `${$scope.outerItem}`);
  $for_content2__outerItem($scope);
});
const $for_content__$params = ($scope, $params2) => $for_content__outerItem($scope, $params2[0]);
const $for = /* @__PURE__ */_._for_of("#text/2", `<div>${_child_template}<!></div>`, /* next(1), <child>, replace, out(1) */`D/${_child_walks}&%l`, $for_content__setup, $for_content__$params);
const $items__script = _._script("__tests__/template.marko_0_items", $scope => _._on($scope["#button/0"], "click", function () {
  $items($scope, $scope.items?.length ? $scope.items.slice(0, -1) : [1, 2, 3]);
}));
const $items = /* @__PURE__ */_._let("items/3", $scope => {
  $for($scope, [$scope.items]);
  $for_content__items($scope);
  $items__script($scope);
});
const $write2 = /* @__PURE__ */_._const("write");
export function $setup($scope) {
  $items($scope, [1, 2, 3]);
  $write2($scope, $write($scope));
}
function $write($scope) {
  return function (msg) {
    _._el_read($scope["#div/1"]).innerHTML += '\n' + msg;
  };
}
_._resume("__tests__/template.marko_0/write", $write);
export default /* @__PURE__ */_._template("__tests__/template.marko", $template, $walks, $setup);
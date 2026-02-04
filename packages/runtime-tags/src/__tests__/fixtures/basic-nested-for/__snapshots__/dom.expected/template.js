export const $template = "<button>Push</button><!><!>";
export const $walks = /* get, over(1), replace, over(2) */" b%c";
import * as _ from "@marko/runtime-tags/debug/dom";
import { $setup as _child, $name as _child_input_name, $template as _child_template, $walks as _child_walks } from "./tags/child.marko";
const $for_content2__outer__OR__inner = /* @__PURE__ */_._or(3, $scope => _child_input_name($scope["#childScope/0"], `${$scope._.outer}.${$scope.inner}`));
const $for_content2__outer = /* @__PURE__ */_._for_closure("#text/0", $for_content2__outer__OR__inner);
const $for_content2__setup = $scope => {
  $for_content2__outer._($scope);
  _child($scope["#childScope/0"]);
};
const $for_content2__inner = /* @__PURE__ */_._const("inner", $for_content2__outer__OR__inner);
const $for_content2__$params = ($scope, $params3) => $for_content2__inner($scope, $params3[0]);
const $for_content__for = /* @__PURE__ */_._for_of("#text/0", _child_template, /* <child> */`/${_child_walks}&`, $for_content2__setup, $for_content2__$params);
const $for_content__items = /* @__PURE__ */_._for_closure("#text/1", $scope => $for_content__for($scope, [$scope._.items]));
const $for_content__setup = $for_content__items;
const $for_content__$params = ($scope, $params2) => $for_content__outer($scope, $params2[0]);
const $for_content__outer = /* @__PURE__ */_._const("outer", $for_content2__outer);
const $for = /* @__PURE__ */_._for_of("#text/1", "<!><!><!>", /* over(1), replace, over(2) */"b%c", $for_content__setup, $for_content__$params);
const $items__script = _._script("__tests__/template.marko_0_items", $scope => _._on($scope["#button/0"], "click", function () {
  $items($scope, [...$scope.items, $scope.items?.length]);
}));
const $items = /* @__PURE__ */_._let("items/2", $scope => {
  $for($scope, [$scope.items]);
  $for_content__items($scope);
  $items__script($scope);
});
export function $setup($scope) {
  $items($scope, [0, 1]);
}
export default /* @__PURE__ */_._template("__tests__/template.marko", $template, $walks, $setup);
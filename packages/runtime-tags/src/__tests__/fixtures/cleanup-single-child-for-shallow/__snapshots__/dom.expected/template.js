export const $template = "<button>Toggle</button><div></div><!><!>";
export const $walks = /* get, over(1), get, over(1), replace, over(1) */" b b%bD";
import * as _$ from "@marko/runtime-tags/debug/dom";
import { $setup as _child, $write as _child_input_write, $name as _child_input_name, $template as _child_template, $walks as _child_walks } from "./tags/child.marko";
const $setup$for$content = $scope => {
  _child($scope["#childScope/0"]);
};
const $write$for$content = /* @__PURE__ */_$.loopClosure("write", "#text/2", ($scope, write) => _child_input_write($scope["#childScope/0"], write));
const $item$for$content = /* @__PURE__ */_$.value("item", ($scope, item) => _child_input_name($scope["#childScope/0"], item));
const $params2$for$content = /* @__PURE__ */_$.value("$params2", ($scope, $params2) => $item$for$content($scope, $params2[0]));
const $for_content = /* @__PURE__ */_$.createRenderer(_child_template, /* beginChild, _child_walks, endChild */`/${_child_walks}&`, $setup$for$content, $params2$for$content, $scope => $write$for$content._($scope));
const $for = /* @__PURE__ */_$.loopOf("#text/2", $for_content);
const $items_effect = _$.effect("__tests__/template.marko_0_items", ($scope, {
  items
}) => _$.on($scope["#button/0"], "click", function () {
  $items($scope, items.length ? items.slice(0, -1) : [1, 2, 3]);
}));
const $items = /* @__PURE__ */_$.state("items/3", ($scope, items) => {
  $for($scope, [items]);
  $items_effect($scope);
});
const $write2 = /* @__PURE__ */_$.value("write");
export function $setup($scope) {
  $items($scope, [1, 2, 3]);
  $write2($scope, $write($scope));
}
function $write($scope) {
  return function (msg) {
    $scope["#div/1"].innerHTML += '\n' + msg;
  };
}
_$.register("__tests__/template.marko_0/write", $write);
export default /* @__PURE__ */_$.createTemplate("__tests__/template.marko", $template, $walks, $setup);
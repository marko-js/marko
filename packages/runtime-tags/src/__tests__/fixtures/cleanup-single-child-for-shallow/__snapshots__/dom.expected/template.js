export const $template = "<button>Toggle</button><div></div><!><!>";
export const $walks = /* get, over(1), get, over(1), replace, over(2) */" b b%c";
import * as _ from "@marko/runtime-tags/debug/dom";
import { $setup as _child, $write as _child_input_write, $name as _child_input_name, $template as _child_template, $walks as _child_walks } from "./tags/child.marko";
const $for_content__setup = $scope => {
  _child($scope["#childScope/0"]);
  $for_content__write._($scope);
};
const $for_content__write = /* @__PURE__ */_._for_closure("write", "#text/2", ($scope, write) => _child_input_write($scope["#childScope/0"], write));
const $for_content__item = /* @__PURE__ */_._const("item", ($scope, item) => _child_input_name($scope["#childScope/0"], item));
const $for_content__$params = /* @__PURE__ */_._const("$params2", ($scope, $params2) => $for_content__item($scope, $params2[0]));
const $for_content = /* @__PURE__ */_._content_branch(_child_template, /* beginChild, _child_walks, endChild */`/${_child_walks}&`, $for_content__setup, $for_content__$params);
const $for = /* @__PURE__ */_._for_of("#text/2", $for_content);
const $items__script = _._script("__tests__/template.marko_0_items", ($scope, {
  items
}) => _._on($scope["#button/0"], "click", function () {
  $items($scope, items = items.length ? items.slice(0, -1) : [1, 2, 3]);
}));
const $items = /* @__PURE__ */_._let("items/3", ($scope, items) => {
  $for($scope, [items]);
  $items__script($scope);
});
const $write2 = /* @__PURE__ */_._const("write");
export function $setup($scope) {
  $items($scope, [1, 2, 3]);
  $write2($scope, $write($scope));
}
function $write($scope) {
  return function (msg) {
    $scope["#div/1"].innerHTML += '\n' + msg;
  };
}
_._resume("__tests__/template.marko_0/write", $write);
export default /* @__PURE__ */_._template("__tests__/template.marko", $template, $walks, $setup);
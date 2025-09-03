export const $template = "<button>Toggle</button><div></div><!><!>";
export const $walks = /* get, over(1), get, over(1), replace, over(2) */" b b%c";
import * as _$ from "@marko/runtime-tags/debug/dom";
import { $setup as _child, $write as _child_input_write, $name as _child_input_name, $template as _child_template, $walks as _child_walks } from "./tags/child.marko";
const $setup$for$content2 = $scope => {
  _child($scope["#childScope/0"]);
  $write$for$content2($scope);
  $outerItem$for$content2._($scope);
};
const $write$for$content2 = /* @__PURE__ */_$.dynamicClosureRead("write", ($scope, write) => _child_input_write($scope["#childScope/0"], write), $scope => $scope._._);
const $expr_outerItem_middleItem$for$content = /* @__PURE__ */_$.intersection(3, $scope => {
  let {
    _: {
      outerItem
    },
    middleItem
  } = $scope;
  _child_input_name($scope["#childScope/0"], `${outerItem}.${middleItem}`);
});
const $outerItem$for$content2 = /* @__PURE__ */_$.loopClosure("outerItem", "#text/1", $expr_outerItem_middleItem$for$content);
const $middleItem$for$content = /* @__PURE__ */_$.value("middleItem", $expr_outerItem_middleItem$for$content);
const $params3$for$content = /* @__PURE__ */_$.value("$params3", ($scope, $params3) => $middleItem$for$content($scope, $params3[0]));
const $for_content2 = /* @__PURE__ */_$.createRenderer(`<div>${_child_template}</div>`, /* next(1), beginChild, _child_walks, endChild, out(1) */`D/${_child_walks}&l`, $setup$for$content2, $params3$for$content);
const $setup$for$content = $scope => {
  _child($scope["#childScope/0"]);
  $items$for$content._($scope);
  $write$for$content._($scope);
};
const $write$for$content = /* @__PURE__ */_$.loopClosure("write", "#text/2", ($scope, write) => _child_input_write($scope["#childScope/0"], write));
const $outerItem$for$content = /* @__PURE__ */_$.value("outerItem", ($scope, outerItem) => {
  _child_input_name($scope["#childScope/0"], `${outerItem}`);
  $outerItem$for$content2($scope);
});
const $for$for$content = /* @__PURE__ */_$.loopOf("#text/1", $for_content2);
const $items$for$content = /* @__PURE__ */_$.loopClosure("items", "#text/2", ($scope, items) => $for$for$content($scope, [items]));
const $params2$for$content = /* @__PURE__ */_$.value("$params2", ($scope, $params2) => $outerItem$for$content($scope, $params2[0]));
const $for_content = /* @__PURE__ */_$.createRenderer(`<div>${_child_template}<!></div>`, /* next(1), beginChild, _child_walks, endChild, replace, out(1) */`D/${_child_walks}&%l`, $setup$for$content, $params2$for$content);
const $for = /* @__PURE__ */_$.loopOf("#text/2", $for_content);
const $items_effect = _$.effect("__tests__/template.marko_0_items", ($scope, {
  items
}) => _$.on($scope["#button/0"], "click", function () {
  $items($scope, items = items.length ? items.slice(0, -1) : [1, 2, 3]);
}));
const $items = /* @__PURE__ */_$.state("items/3", ($scope, items) => {
  $for($scope, [items]);
  $items$for$content($scope);
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
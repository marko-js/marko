export const $template = "<button>Push</button><!><!>";
export const $walks = /* get, over(1), replace, over(2) */" b%c";
import * as _$ from "@marko/runtime-tags/debug/dom";
import { $setup as _child, $name as _child_input_name, $template as _child_template, $walks as _child_walks } from "./tags/child.marko";
const $setup$for$content = $scope => {
  _child($scope["#childScope/0"]);
  $outer$for$content._($scope);
};
const $expr_outer_inner$for$content = /* @__PURE__ */_$.intersection(3, $scope => {
  let {
    _: {
      outer
    },
    inner
  } = $scope;
  _child_input_name($scope["#childScope/0"], `${outer}.${inner}`);
});
const $outer$for$content = /* @__PURE__ */_$.loopClosure("outer", "#text/0", $expr_outer_inner$for$content);
const $inner$for$content = /* @__PURE__ */_$.value("inner", $expr_outer_inner$for$content);
const $params3$for$content = /* @__PURE__ */_$.value("$params3", ($scope, $params3) => $inner$for$content($scope, $params3[0]));
const $for_content2 = /* @__PURE__ */_$.createRenderer(_child_template, /* beginChild, _child_walks, endChild */`/${_child_walks}&`, $setup$for$content, $params3$for$content);
const $for$for$content = /* @__PURE__ */_$.loopOf("#text/0", $for_content2);
const $items$for$content = /* @__PURE__ */_$.loopClosure("items", "#text/1", ($scope, items) => $for$for$content($scope, [items]));
const $setup$for$content2 = $items$for$content;
const $params2$for$content = /* @__PURE__ */_$.value("$params2", ($scope, $params2) => $outer$for$content2($scope, $params2[0]));
const $outer$for$content2 = /* @__PURE__ */_$.value("outer", $outer$for$content);
const $for_content = /* @__PURE__ */_$.createRenderer("<!><!><!>", /* over(1), replace, over(2) */"b%c", $setup$for$content2, $params2$for$content);
const $for = /* @__PURE__ */_$.loopOf("#text/1", $for_content);
const $items_effect = _$.effect("__tests__/template.marko_0_items", ($scope, {
  items
}) => _$.on($scope["#button/0"], "click", function () {
  $items($scope, items = [...items, items.length]);
}));
const $items = /* @__PURE__ */_$.state("items/2", ($scope, items) => {
  $for($scope, [items]);
  $items$for$content($scope);
  $items_effect($scope);
});
export function $setup($scope) {
  $items($scope, [0, 1]);
}
export default /* @__PURE__ */_$.createTemplate("__tests__/template.marko", $template, $walks, $setup);
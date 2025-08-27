export const $template = "<button>Toggle</button><div></div><!><!>";
export const $walks = /* get, over(1), get, over(1), replace, over(2) */" b b%c";
import * as _$ from "@marko/runtime-tags/debug/dom";
import { $setup as _child, $input as _child_input, $template as _child_template, $walks as _child_walks } from "./tags/child.marko";
const $setup$if$content = $scope => {
  _child($scope["#childScope/0"]);
  _child_input($scope["#childScope/0"], {
    write: $write($scope)
  });
};
const $if_content = /* @__PURE__ */_$.createRenderer(_child_template, /* beginChild, _child_walks, endChild */`/${_child_walks}&`, $setup$if$content);
const $if = /* @__PURE__ */_$.conditional("#text/2", $if_content);
const $show_effect = _$.effect("__tests__/template.marko_0_show", ($scope, {
  show
}) => _$.on($scope["#button/0"], "click", function () {
  $show($scope, show = !show);
}));
const $show = /* @__PURE__ */_$.state("show/3", ($scope, show) => {
  $if($scope, show ? 0 : 1);
  $show_effect($scope);
});
export function $setup($scope) {
  $show($scope, true);
}
function $write($scope) {
  return function (state) {
    $scope._["#div/1"].innerHTML = state;
  };
}
_$.register("__tests__/template.marko_1/write", $write);
export default /* @__PURE__ */_$.createTemplate("__tests__/template.marko", $template, $walks, $setup);
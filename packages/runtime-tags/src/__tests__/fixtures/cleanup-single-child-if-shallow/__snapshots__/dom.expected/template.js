export const $template = "<button>Toggle</button><div></div><!><!>";
export const $walks = /* get, over(1), get, over(1), replace, over(2) */" b b%c";
import * as _ from "@marko/runtime-tags/debug/dom";
import { $setup as _child, $input as _child_input, $template as _child_template, $walks as _child_walks } from "./tags/child.marko";
const $if_content__setup = $scope => {
  _child($scope["#childScope/0"]);
  _child_input($scope["#childScope/0"], {
    write: $write($scope)
  });
};
const $if_content = /* @__PURE__ */_._content_branch(_child_template, /* beginChild, _child_walks, endChild */`/${_child_walks}&`, $if_content__setup);
const $if = /* @__PURE__ */_._if("#text/2", $if_content);
const $show__script = _._script("__tests__/template.marko_0_show", ($scope, {
  show
}) => _._on($scope["#button/0"], "click", function () {
  $show($scope, show = !show);
}));
const $show = /* @__PURE__ */_._let("show/3", ($scope, show) => {
  $if($scope, show ? 0 : 1);
  $show__script($scope);
});
export function $setup($scope) {
  $show($scope, true);
}
function $write($scope) {
  return function (state) {
    $scope._["#div/1"].innerHTML = state;
  };
}
_._resume("__tests__/template.marko_1/write", $write);
export default /* @__PURE__ */_._template("__tests__/template.marko", $template, $walks, $setup);
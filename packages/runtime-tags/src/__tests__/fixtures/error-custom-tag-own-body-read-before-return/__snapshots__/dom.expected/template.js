export const $template = `<!>${_child_template}<div> </div>`;
export const $walks = /* over(1), <child/var>, next(1), get, out(1) */`b0${_child_walks}&D l`;
import * as _ from "@marko/runtime-tags/debug/dom";
import { $setup as _child, $input_content as _child_input_content, $template as _child_template, $walks as _child_walks } from "./tags/child.marko";
const $child_content__x = /* @__PURE__ */_._closure_get("x", $scope => {
  debugger;
  _._text($scope["#text/0"], $scope._.x);
});
const $child_content__setup = $scope => {
  $child_content__x($scope);
  _._return($scope, 1);
};
const $child_content = /* @__PURE__ */_._content("__tests__/template.marko_1_content", "<span> </span>", /* next(1), get, out(1) */"D l", $child_content__setup);
const $x__closure = /* @__PURE__ */_._closure($child_content__x);
const $x = _._var_resume("__tests__/template.marko_0_x/var", /* @__PURE__ */_._const("x", $scope => {
  _._text($scope["#text/2"], $scope.x);
  $x__closure($scope);
}));
export function $setup($scope) {
  _._var($scope, "#childScope/0", $x);
  _child($scope["#childScope/0"]);
  _child_input_content($scope["#childScope/0"], $child_content($scope));
}
export default /* @__PURE__ */_._template("__tests__/template.marko", $template, $walks, $setup);
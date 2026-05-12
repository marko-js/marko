export const $template = /*@__PURE__*/(_w0 => `<!>${_w0}<button id=increment>click</button>`)(_outer_template);
export const $walks =
/*@__PURE__*/
/* over(1), <outer>, get, over(1) */
(_w0 => `b/${_w0}& b`)(_outer_walks);
import * as _ from "@marko/runtime-tags/debug/dom";
import { $setup as _outer, $input_content as _outer_input_content, $template as _outer_template, $walks as _outer_walks } from "./tags/outer.marko";
const $outer_content__count = /* @__PURE__ */_._closure_get("count", $scope => _._text($scope["#text/0"], $scope._.count));
const $outer_content__setup = $outer_content__count;
const $outer_content = /* @__PURE__ */_._content("__tests__/template.marko_1_content", "<span> </span>", /* next(1), get, out(1) */"D l", $outer_content__setup);
const $count__closure = /* @__PURE__ */_._closure($outer_content__count);
const $count__script = _._script("__tests__/template.marko_0_count", $scope => _._on($scope["#button/1"], "click", function () {
  $count($scope, $scope.count + 1);
}));
const $count = /* @__PURE__ */_._let("count/2", $scope => {
  $count__closure($scope);
  $count__script($scope);
});
export function $setup($scope) {
  _outer($scope["#childScope/0"]);
  _outer_input_content($scope["#childScope/0"], $outer_content($scope));
  $count($scope, 0);
}
export default /* @__PURE__ */_._template("__tests__/template.marko", $template, $walks, $setup);
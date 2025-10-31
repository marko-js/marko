export const $template = `<!>${_child_template}<!>`;
export const $walks = /* over(1), beginChild, _child_walks, endChild, over(1) */`b/${_child_walks}&b`;
import * as _ from "@marko/runtime-tags/debug/dom";
import { $setup as _child, $input_content as _child_input_content, $template as _child_template, $walks as _child_walks } from "./tags/child.marko";
const $child_content__count__script = _._script("__tests__/template.marko_1_count", $scope => _._on($scope["#button/0"], "click", function () {
  $count($scope._, $scope._.count + 1);
}));
const $child_content__count = /* @__PURE__ */_._closure_get("count", $scope => {
  _._text($scope["#text/1"], $scope._.count);
  $child_content__count__script($scope);
});
const $child_content__setup = $child_content__count;
const $child_content = /* @__PURE__ */_._content("__tests__/template.marko_1_content", "<button> </button>", /* get, next(1), get, out(1) */" D l", $child_content__setup);
const $count__closure = /* @__PURE__ */_._closure($child_content__count);
const $count = /* @__PURE__ */_._let("count/1", $count__closure);
export function $setup($scope) {
  _child($scope["#childScope/0"]);
  _child_input_content($scope["#childScope/0"], $child_content($scope));
  $count($scope, 0);
}
export default /* @__PURE__ */_._template("__tests__/template.marko", $template, $walks, $setup);
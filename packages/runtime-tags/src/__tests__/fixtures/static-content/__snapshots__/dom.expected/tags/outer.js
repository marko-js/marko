export const $template = /*@__PURE__*/(_w0 => `<!>${_w0}<!>`)(_inner_template);
export const $walks =
/*@__PURE__*/
/* over(1), <inner>, over(1) */
(_w0 => `b/${_w0}&b`)(_inner_walks);
import * as _ from "@marko/runtime-tags/debug/dom";
import { $setup as _inner, $input_content as _inner_input_content, $template as _inner_template, $walks as _inner_walks } from "./inner.marko";
const $inner_content__dynamicTag = /* @__PURE__ */_._dynamic_tag("#text/1");
const $inner_content__input_content = /* @__PURE__ */_._closure_get("input_content", $scope => $inner_content__dynamicTag($scope, $scope._.input_content));
const $inner_content__setup__script = _._script("__tests__/tags/outer.marko_1", $scope => _._on($scope["#button/0"], "click", function () {
  this.doThing();
}));
const $inner_content__setup = $scope => {
  $inner_content__input_content($scope);
  $inner_content__setup__script($scope);
};
const $inner_content = /* @__PURE__ */_._content("__tests__/tags/outer.marko_1_content", "<button>click</button><!><!>", /* get, over(1), replace, over(2) */" b%c", $inner_content__setup);
export function $setup($scope) {
  _inner($scope["#childScope/0"]);
  _inner_input_content($scope["#childScope/0"], $inner_content($scope));
}
export const $input = ($scope, input) => $input_content($scope, input.content);
const $input_content__closure = /* @__PURE__ */_._closure($inner_content__input_content);
export const $input_content = /* @__PURE__ */_._const("input_content", $input_content__closure);
export default /* @__PURE__ */_._template("__tests__/tags/outer.marko", $template, $walks, $setup, $input);
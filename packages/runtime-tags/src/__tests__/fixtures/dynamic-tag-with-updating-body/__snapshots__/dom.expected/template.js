export const $template = "<!><!><button id=changeTag></button>";
export const $walks = /* over(1), replace, over(1), get, over(1) */"b%b b";
import { $setup as _counter, $template as _counter_template, $walks as _counter_walks } from "./tags/counter.marko";
import * as _ from "@marko/runtime-tags/debug/dom";
const $tagName_content__setup = $scope => {
  _counter($scope["#childScope/0"]);
};
const $tagName_content = _._content_resume("__tests__/template.marko_1_content", _counter_template, /* <counter> */`/${_counter_walks}&`, $tagName_content__setup);
const $dynamicTag = /* @__PURE__ */_._dynamic_tag("#text/0", $tagName_content);
const $tagName__script = _._script("__tests__/template.marko_0_tagName", $scope => _._on($scope["#button/1"], "click", function () {
  $tagName($scope, $scope.tagName === "span" ? "div" : "span");
}));
const $tagName = /* @__PURE__ */_._let("tagName/2", $scope => {
  $dynamicTag($scope, $scope.tagName);
  $tagName__script($scope);
});
export function $setup($scope) {
  $tagName($scope, "div");
}
export default /* @__PURE__ */_._template("__tests__/template.marko", $template, $walks, $setup);
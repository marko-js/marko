export const $template = `<!>${_child_template}<!>`;
export const $walks = /* over(1), beginChild, _child_walks, endChild, over(1) */`b/${_child_walks}&b`;
import * as _$ from "@marko/runtime-tags/debug/dom";
import { $setup as _child, $input_content as _child_input_content, $template as _child_template, $walks as _child_walks } from "./tags/child.marko";
const $count$child$content_effect = _$.effect("__tests__/template.marko_1_count", ($scope, {
  _: {
    count
  }
}) => _$.on($scope["#button/0"], "click", function () {
  $count($scope._, ++count)
}));
const $count$child$content = /* @__PURE__ */_$.dynamicClosureRead("count", ($scope, count) => {
  _$.data($scope["#text/1"], count);
  $count$child$content_effect($scope);
});
const $setup$child$content = $count$child$content;
const $child_content = /* @__PURE__ */_$.createContent("__tests__/template.marko_1_renderer", "<button> </button>", /* get, next(1), get, out(1) */" D l", $setup$child$content);
const $count_closure = /* @__PURE__ */_$.dynamicClosure($count$child$content);
const $count = /* @__PURE__ */_$.state("count/1", $count_closure);
export function $setup($scope) {
  _child($scope["#childScope/0"]);
  _child_input_content($scope["#childScope/0"], $child_content($scope));
  $count($scope, 0);
}
export default /* @__PURE__ */_$.createTemplate("__tests__/template.marko", $template, $walks, $setup);
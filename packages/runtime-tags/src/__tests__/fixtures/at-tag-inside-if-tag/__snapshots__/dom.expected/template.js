export const $template = `<!>${_customTag_template}`;
export const $walks = /* over(1), <custom-tag> */`b/${_customTag_walks}&`;
import { $setup as _customTag, $thing2 as _customTag_input_thing, $template as _customTag_template, $walks as _customTag_walks } from "./tags/custom-tag/index.marko";
import * as _ from "@marko/runtime-tags/debug/dom";
const $thing_content2 = /* @__PURE__ */_._content("__tests__/template.marko_2_content", "Goodbye", /* over(1) */"b");
const $thing_content = /* @__PURE__ */_._content("__tests__/template.marko_1_content", "Hello", /* over(1) */"b");
export function $setup($scope) {
  _customTag($scope["#childScope/0"]);
}
export const $x = /* @__PURE__ */_._const("x", $scope => {
  let $thing;
  if ($scope.x) {
    $thing = _.attrTag({
      x: 1,
      content: $thing_content($scope)
    });
  } else {
    $thing = _.attrTag({
      x: 2,
      content: $thing_content2($scope)
    });
  }
  _customTag_input_thing($scope["#childScope/0"], $thing);
});
export const $input = /* @__PURE__ */_._const("input", $scope => $x($scope, $scope.input.x));
export default /* @__PURE__ */_._template("__tests__/template.marko", $template, $walks, $setup, $input);
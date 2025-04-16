export const $template = `<div></div><div style=width:100px></div><div style="color: green"></div>${_customTag_template}${_customTag_template}${_customTag_template}<!><!>`;
export const $walks = /* get, over(3), beginChild, _customTag_walks, endChild, beginChild, _customTag_walks, endChild, beginChild, _customTag_walks, endChild, replace, over(1) */` d/${_customTag_walks}&/${_customTag_walks}&/${_customTag_walks}&%bD`;
import * as _$ from "@marko/runtime-tags/debug/dom";
import { $setup as _customTag, $style as _customTag_input_style, $template as _customTag_template, $walks as _customTag_walks } from "./tags/custom-tag.marko";
const $test_content = _$.registerContent("__tests__/template.marko_1_renderer", "Hello");
const $dynamicTag = /* @__PURE__ */_$.dynamicTag("#text/4");
export const $test = /* @__PURE__ */_$.value("test", ($scope, test) => $dynamicTag($scope, test, () => ({
  style: {
    color: "green"
  },
  test: _$.attrTag({
    style: {
      color: "green"
    },
    content: $test_content($scope)
  })
})));
export const $color = /* @__PURE__ */_$.value("color", ($scope, color) => {
  _$.styleItem($scope["#div/0"], "color", color);
  _customTag_input_style($scope["#childScope/1"], {
    color: color
  });
});
export const $input = /* @__PURE__ */_$.value("input", ($scope, input) => {
  $color($scope, input.color);
  $test($scope, input.test);
});
export function $setup($scope) {
  _customTag($scope["#childScope/1"]);
  _customTag($scope["#childScope/2"]);
  _customTag($scope["#childScope/3"]);
  _customTag_input_style($scope["#childScope/2"], {
    width: 100
  });
  _customTag_input_style($scope["#childScope/3"], "color: green");
}
export default /* @__PURE__ */_$.createTemplate("__tests__/template.marko", $template, $walks, $setup, $input);
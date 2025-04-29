export const $template = `<div></div><div style=width:100px></div><div style="color: green"></div>${_customTag_template}${_customTag_template}${_customTag_template}<!><!>`;
export const $walks = /* get, over(3), beginChild, _customTag_walks, endChild, beginChild, _customTag_walks, endChild, beginChild, _customTag_walks, endChild, replace, over(1) */` d/${_customTag_walks}&/${_customTag_walks}&/${_customTag_walks}&%bD`;
import CustomTag from "./tags/custom-tag.marko";
const TestTag = CustomTag;
import * as _$ from "@marko/runtime-tags/debug/dom";
import { $setup as _customTag, $input_style as _customTag_input_style, $input_test as _customTag_input_test, $template as _customTag_template, $walks as _customTag_walks } from "./tags/custom-tag.marko";
const $test_content = _$.registerContent("__tests__/template.marko_1_renderer", "Hello");
export const $input_color = /* @__PURE__ */_$.value("input_color", ($scope, input_color) => {
  _$.styleItem($scope["#div/0"], "color", input_color);
  _customTag_input_style($scope["#childScope/1"], {
    color: input_color
  });
});
const $dynamicTag = /* @__PURE__ */_$.dynamicTag("#text/4");
export function $setup($scope) {
  _customTag($scope["#childScope/1"]);
  _customTag_input_test($scope["#childScope/1"], void 0);
  _customTag($scope["#childScope/2"]);
  _customTag_input_style($scope["#childScope/2"], {
    width: "100px"
  });
  _customTag_input_test($scope["#childScope/2"], void 0);
  _customTag($scope["#childScope/3"]);
  _customTag_input_style($scope["#childScope/3"], "color: green");
  _customTag_input_test($scope["#childScope/3"], void 0);
  $dynamicTag($scope, TestTag, () => ({
    style: {
      color: "green"
    },
    test: _$.attrTag({
      style: {
        color: "green"
      },
      content: $test_content($scope)
    })
  }));
}
export const $input = /* @__PURE__ */_$.value("input", ($scope, input) => $input_color($scope, input.color));
export default /* @__PURE__ */_$.createTemplate("__tests__/template.marko", $template, $walks, $setup, $input);
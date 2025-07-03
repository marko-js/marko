export const $template = "<button><!></button>";
export const $walks = /* get, next(1), replace, out(1) */" D%l";
export const $setup = () => {};
import * as _$ from "@marko/runtime-tags/debug/dom";
const $attrs_effect = _$.effect("__tests__/tags/FancyButton.marko_0_attrs", $scope => _$.attrsEvents($scope, "#button/0"));
const $attrs = /* @__PURE__ */_$.value("attrs", ($scope, attrs) => {
  _$.attrs($scope, "#button/0", attrs);
  $attrs_effect($scope);
});
const $dynamicTag = /* @__PURE__ */_$.dynamicTag("#text/1");
const $content = /* @__PURE__ */_$.value("content", $dynamicTag);
export const $input = /* @__PURE__ */_$.value("input", ($scope, input) => {
  (({
    content,
    ...attrs
  }) => $attrs($scope, attrs))(input);
  $content($scope, input.content);
});
export default /* @__PURE__ */_$.createTemplate("__tests__/tags/FancyButton.marko", $template, $walks, $setup, $input);
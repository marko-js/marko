export const $template = "<!><!><span> </span>";
export const $walks = /* over(1), replace, over(1), next(1), get, out(1) */"b%bD l";
import * as _$ from "@marko/runtime-tags/debug/dom";
const $setup$tagselect$content_effect = _$.effect("__tests__/template.marko_1", $scope => {
  _$.attrsEvents($scope, "#option/0");
  _$.attrsEvents($scope, "#option/1");
  _$.attrsEvents($scope, "#option/2");
});
const $setup$tagselect$content = $scope => {
  _$.attrs($scope, "#option/0", {
    value: "a"
  });
  _$.attrs($scope, "#option/1", {
    value: "b"
  });
  _$.attrs($scope, "#option/2", {
    value: "c"
  });
  $setup$tagselect$content_effect($scope);
};
const $tagselect_content = _$.registerContent("__tests__/template.marko_1_renderer", "<option>A</option><option>B</option><option>C</option>", /* get, over(1), get, over(1), get, over(1) */" b b b", $setup$tagselect$content);
const $dynamicTag = /* @__PURE__ */_$.dynamicTag("#text/0", $tagselect_content);
const $expr_value_tag = /* @__PURE__ */_$.intersection(4, $scope => {
  let {
    value,
    tag
  } = $scope;
  $dynamicTag($scope, tag ? "select" : {}, () => ({
    value,
    valueChange: $valueChange($scope)
  }));
});
const $value = /* @__PURE__ */_$.state("value/2", ($scope, value) => {
  _$.data($scope["#text/1"], value);
  $expr_value_tag($scope);
});
const $tag = /* @__PURE__ */_$.value("tag", $expr_value_tag);
export function $setup($scope) {
  $value($scope, "b");
  $tag($scope, "select");
}
function $valueChange($scope) {
  return function (v) {
    $value($scope, v);
  };
}
_$.register("__tests__/template.marko_0/valueChange", $valueChange);
export default /* @__PURE__ */_$.createTemplate("__tests__/template.marko", $template, $walks, $setup);
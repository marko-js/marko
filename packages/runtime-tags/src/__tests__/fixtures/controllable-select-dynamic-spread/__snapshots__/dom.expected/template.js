export const $template = "<!><!><span> </span>";
export const $walks = /* over(1), replace, over(1), next(1), get, out(1) */"b%bD l";
import * as _ from "@marko/runtime-tags/debug/dom";
const $tagselect_content__setup__script = _._script("__tests__/template.marko_1", $scope => {
  _._attrs_script($scope, "#option/0");
  _._attrs_script($scope, "#option/1");
  _._attrs_script($scope, "#option/2");
});
const $tagselect_content__setup = $scope => {
  _._attrs($scope, "#option/0", {
    value: "a"
  });
  _._attrs($scope, "#option/1", {
    value: "b"
  });
  _._attrs($scope, "#option/2", {
    value: "c"
  });
  $tagselect_content__setup__script($scope);
};
const $tagselect_content = _._content_resume("__tests__/template.marko_1_content", "<option>A</option><option>B</option><option>C</option>", /* get, over(1), get, over(1), get, over(1) */" b b b", $tagselect_content__setup);
const $dynamicTag = /* @__PURE__ */_._dynamic_tag("#text/0", $tagselect_content);
const $value__OR__tag = /* @__PURE__ */_._or(4, $scope => {
  let {
    value,
    tag
  } = $scope;
  $dynamicTag($scope, tag ? "select" : {}, () => ({
    value,
    valueChange: $valueChange($scope)
  }));
});
const $value = /* @__PURE__ */_._let("value/2", ($scope, value) => {
  _._text($scope["#text/1"], value);
  $value__OR__tag($scope);
});
const $tag = /* @__PURE__ */_._const("tag", $value__OR__tag);
export function $setup($scope) {
  $value($scope, "b");
  $tag($scope, "select");
}
function $valueChange($scope) {
  return function (v) {
    $value($scope, v);
  };
}
_._resume("__tests__/template.marko_0/valueChange", $valueChange);
export default /* @__PURE__ */_._template("__tests__/template.marko", $template, $walks, $setup);
export const $template = "<div><svg><!><!></svg><math><!><!></math><!><button class=toggle-parent>Toggle Parent</button><button class=toggle-child>Toggle Child</button></div>";
export const $walks = /* get, next(2), replace, over(1), replace, out(1), next(1), replace, over(1), replace, out(1), replace, over(1), get, over(1), get, out(1) */" E%b%lD%b%l%b b l";
import * as _ from "@marko/runtime-tags/debug/dom";
const $Child_content2 = _._content_resume("__tests__/template.marko_3_content", "Hi", /* over(1) */"b");
const $Child_content = _._content_resume("__tests__/template.marko_2_content", "Hi", /* over(1) */"b");
const $Parent_content__input_value = /* @__PURE__ */_._closure_get("input_value", $scope => _._html($scope, $scope._.input_value, "#text/0"));
const $Parent_content__setup = $Parent_content__input_value;
const $Parent_content = _._content_resume("__tests__/template.marko_1_content", " ", /* get, over(1) */" b", $Parent_content__setup);
const $dynamicTag3 = /* @__PURE__ */_._dynamic_tag("#text/5", $Parent_content);
const $Parent__OR__Child__script = _._script("__tests__/template.marko_0_Parent_Child", $scope => {
  $scope.Parent;
  $scope.Child;
  for (const node of _._el_read($scope["#div/0"]).querySelectorAll("a")) {
    if (node.getAttribute("ns") !== node.namespaceURI) {
      node.setAttribute("ns", node.namespaceURI);
    }
  }
});
const $Parent__OR__Child = /* @__PURE__ */_._or(13, $Parent__OR__Child__script);
const $Parent__script = _._script("__tests__/template.marko_0_Parent", $scope => _._on($scope["#button/6"], "click", function () {
  $Parent($scope, $scope.Parent === "div" ? "svg" : "div");
}));
const $Parent = /* @__PURE__ */_._let("Parent/11", $scope => {
  $dynamicTag3($scope, $scope.Parent);
  $Parent__OR__Child($scope);
  $Parent__script($scope);
});
const $dynamicTag = /* @__PURE__ */_._dynamic_tag("#text/2", $Child_content);
const $dynamicTag2 = /* @__PURE__ */_._dynamic_tag("#text/4", $Child_content2);
const $Child__script = _._script("__tests__/template.marko_0_Child", $scope => _._on($scope["#button/7"], "click", function () {
  $Child($scope, $scope.Child === "a" ? null : "a");
}));
const $Child = /* @__PURE__ */_._let("Child/12", $scope => {
  $dynamicTag($scope, $scope.Child, () => ({
    href: "#bar"
  }));
  $dynamicTag2($scope, $scope.Child, () => ({
    href: "#bar"
  }));
  $Parent__OR__Child($scope);
  $Child__script($scope);
});
export function $setup($scope) {
  $Parent($scope, "div");
  $Child($scope, "a");
}
const $input_value__closure = /* @__PURE__ */_._closure($Parent_content__input_value);
export const $input_value = /* @__PURE__ */_._const("input_value", $scope => {
  _._html($scope, $scope.input_value, "#text/1");
  _._html($scope, $scope.input_value, "#text/3");
  $input_value__closure($scope);
});
export const $input = ($scope, input) => $input_value($scope, input.value);
export default /* @__PURE__ */_._template("__tests__/template.marko", $template, $walks, $setup, $input);
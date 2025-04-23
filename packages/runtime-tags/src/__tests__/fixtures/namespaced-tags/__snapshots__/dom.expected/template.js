export const $template = "<div><svg><!><!></svg><math><!><!></math><!><button class=toggle-parent>Toggle Parent</button><button class=toggle-child>Toggle Child</button></div>";
export const $walks = /* get, next(2), replace, over(1), replace, out(1), next(1), replace, over(1), replace, out(1), replace, over(1), get, over(1), get, out(1) */" E%b%lD%b%l%b b l";
import * as _$ from "@marko/runtime-tags/debug/dom";
const $Child_content2 = _$.registerContent("__tests__/template.marko_3_renderer", "Hi");
const $Child_content = _$.registerContent("__tests__/template.marko_2_renderer", "Hi");
const $input_value$Parent$content = /* @__PURE__ */_$.dynamicClosureRead("input_value", ($scope, input_value) => _$.html($scope, input_value, "#text/0"));
const $Parent_content = _$.registerContent("__tests__/template.marko_1_renderer", " ", /* get */" ", 0, 0, $scope => $input_value$Parent$content($scope));
const $dynamicTag3 = /* @__PURE__ */_$.dynamicTag("#text/5", $Parent_content);
const $expr_Parent_Child_effect = _$.effect("__tests__/template.marko_0_Parent_Child", ($scope, {
  Parent,
  Child
}) => {
  Parent;
  Child;
  for (const node of $scope["#div/0"].querySelectorAll("a")) {
    if (node.getAttribute("ns") !== node.namespaceURI) {
      node.setAttribute("ns", node.namespaceURI);
    }
  }
});
const $expr_Parent_Child = /* @__PURE__ */_$.intersection(13, $expr_Parent_Child_effect);
const $Parent_effect = _$.effect("__tests__/template.marko_0_Parent", ($scope, {
  Parent
}) => _$.on($scope["#button/6"], "click", function () {
  $Parent($scope, Parent === "div" ? "svg" : "div");
}));
const $Parent = /* @__PURE__ */_$.state("Parent/11", ($scope, Parent) => {
  $dynamicTag3($scope, Parent);
  $expr_Parent_Child($scope);
  $Parent_effect($scope);
});
const $dynamicTag = /* @__PURE__ */_$.dynamicTag("#text/2", $Child_content);
const $dynamicTag2 = /* @__PURE__ */_$.dynamicTag("#text/4", $Child_content2);
const $Child_effect = _$.effect("__tests__/template.marko_0_Child", ($scope, {
  Child
}) => _$.on($scope["#button/7"], "click", function () {
  $Child($scope, Child === "a" ? null : "a");
}));
const $Child = /* @__PURE__ */_$.state("Child/12", ($scope, Child) => {
  $dynamicTag($scope, Child, () => ({
    href: "#bar"
  }));
  $dynamicTag2($scope, Child, () => ({
    href: "#bar"
  }));
  $expr_Parent_Child($scope);
  $Child_effect($scope);
});
export function $setup($scope) {
  $Parent($scope, "div");
  $Child($scope, "a");
}
const $input_value_closure = /* @__PURE__ */_$.dynamicClosure($input_value$Parent$content);
export const $input_value = /* @__PURE__ */_$.value("input_value", ($scope, input_value) => {
  _$.html($scope, input_value, "#text/1");
  _$.html($scope, input_value, "#text/3");
  $input_value_closure($scope);
});
export const $input = /* @__PURE__ */_$.value("input", ($scope, input) => $input_value($scope, input.value));
export default /* @__PURE__ */_$.createTemplate("__tests__/template.marko", $template, $walks, $setup, $input);
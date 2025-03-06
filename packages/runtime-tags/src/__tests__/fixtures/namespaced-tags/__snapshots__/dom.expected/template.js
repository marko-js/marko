export const _template_ = "<div><svg><!><!></svg><math><!><!></math><!><button class=toggle-parent>Toggle Parent</button><button class=toggle-child>Toggle Child</button></div>";
export const _walks_ = /* get, next(2), replace, over(1), replace, out(1), next(1), replace, over(1), replace, out(1), replace, over(1), get, over(1), get, out(1) */" E%b%lD%b%l%b b l";
import * as _$ from "@marko/runtime-tags/debug/dom";
const _Child_content2 = _$.registerContent("__tests__/template.marko_3_renderer", "Hi");
const _Child_content = _$.registerContent("__tests__/template.marko_2_renderer", "Hi");
const _input_value$Parent_content = _$.registerDynamicClosure("__tests__/template.marko_1_input_value/subscriber", "input_value", (_scope, input_value) => _$.html(_scope, input_value, "#text/0"));
const _Parent_content = _$.registerContent("__tests__/template.marko_1_renderer", " ", /* get */" ", 0, 0, _scope => _input_value$Parent_content._(_scope));
const _expr_Parent_Child_effect = _$.effect("__tests__/template.marko_0_Parent_Child", (_scope, {
  Parent,
  Child
}) => {
  Parent;
  Child;
  for (const node of _scope["#div/0"].querySelectorAll("a")) {
    if (node.getAttribute("ns") !== node.namespaceURI) {
      node.setAttribute("ns", node.namespaceURI);
    }
  }
});
const _expr_Parent_Child = /* @__PURE__ */_$.intersection(13, _scope => {
  const {
    Parent,
    Child
  } = _scope;
  _expr_Parent_Child_effect(_scope);
});
const _dynamicTag3 = /* @__PURE__ */_$.dynamicTag("#text/5", _Parent_content);
const _dynamicTag2 = /* @__PURE__ */_$.dynamicTag("#text/4", _Child_content2);
const _dynamicTag = /* @__PURE__ */_$.dynamicTag("#text/2", _Child_content);
const _Child_effect = _$.effect("__tests__/template.marko_0_Child", (_scope, {
  Child
}) => _$.on(_scope["#button/7"], "click", function () {
  _Child(_scope, Child === "a" ? null : "a");
}));
const _Child = /* @__PURE__ */_$.state("Child/12", (_scope, Child) => {
  _dynamicTag(_scope, Child, () => ({
    href: "#bar"
  }));
  _dynamicTag2(_scope, Child, () => ({
    href: "#bar"
  }));
  _expr_Parent_Child(_scope);
  _Child_effect(_scope);
});
const _Parent_effect = _$.effect("__tests__/template.marko_0_Parent", (_scope, {
  Parent
}) => _$.on(_scope["#button/6"], "click", function () {
  _Parent(_scope, Parent === "div" ? "svg" : "div");
}));
const _Parent = /* @__PURE__ */_$.state("Parent/11", (_scope, Parent) => {
  _dynamicTag3(_scope, Parent);
  _expr_Parent_Child(_scope);
  _Parent_effect(_scope);
});
export const _input_value_ = /* @__PURE__ */_$.value("input_value", (_scope, input_value) => {
  _$.html(_scope, input_value, "#text/1");
  _$.html(_scope, input_value, "#text/3");
  _input_value$Parent_content(_scope);
});
export const _input_ = /* @__PURE__ */_$.value("input", (_scope, input) => _input_value_(_scope, input.value));
export function _setup_(_scope) {
  _Parent(_scope, "div");
  _Child(_scope, "a");
}
export default /* @__PURE__ */_$.createTemplate("__tests__/template.marko", _template_, _walks_, _setup_, _input_);
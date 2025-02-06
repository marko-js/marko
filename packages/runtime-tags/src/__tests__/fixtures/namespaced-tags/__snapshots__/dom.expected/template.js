export const _template_ = "<div><svg><!><!></svg><math><!><!></math><!><button class=toggle-parent>Toggle Parent</button><button class=toggle-child>Toggle Child</button></div>";
export const _walks_ = /* get, next(2), replace, over(1), replace, out(1), next(1), replace, over(1), replace, out(1), replace, over(1), get, over(1), get, out(1) */" E%b%lD%b%l%b b l";
import * as _$ from "@marko/runtime-tags/debug/dom";
const _Child_content2 = _$.register("__tests__/template.marko_3_renderer", /* @__PURE__ */_$.createRendererWithOwner("Hi", ""));
const _Child_content = _$.register("__tests__/template.marko_2_renderer", /* @__PURE__ */_$.createRendererWithOwner("Hi", ""));
const _input_value$Parent_content = _$.registerSubscriber("__tests__/template.marko_1_input_value/subscriber", /* @__PURE__ */_$.dynamicClosure((_scope, input_value) => _$.html(_scope, input_value, "#text/0")));
const _setup$Parent_content = _scope => {
  _input_value$Parent_content._(_scope, _scope._["input_value"]);
};
const _Parent_content = _$.register("__tests__/template.marko_1_renderer", /* @__PURE__ */_$.createRendererWithOwner(" ", /* get */" ", _setup$Parent_content));
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
const _expr_Parent_Child = /* @__PURE__ */_$.intersection(2, _scope => {
  const {
    Parent,
    Child
  } = _scope;
  _expr_Parent_Child_effect(_scope);
});
const _Parent_input = /* @__PURE__ */_$.dynamicTagAttrs("#text/5", _Parent_content);
const _dynamicTagName3 = /* @__PURE__ */_$.conditional("#text/5", _scope => _Parent_input(_scope, () => ({})), () => _Parent_input);
const _Child_input2 = /* @__PURE__ */_$.dynamicTagAttrs("#text/4", _Child_content2);
const _dynamicTagName2 = /* @__PURE__ */_$.conditional("#text/4", _scope => _Child_input2(_scope, () => ({
  href: "#bar"
})), () => _Child_input2);
const _Child_input = /* @__PURE__ */_$.dynamicTagAttrs("#text/2", _Child_content);
const _dynamicTagName = /* @__PURE__ */_$.conditional("#text/2", _scope => _Child_input(_scope, () => ({
  href: "#bar"
})), () => _Child_input);
const _Child_effect = _$.effect("__tests__/template.marko_0_Child", (_scope, {
  Child
}) => _$.on(_scope["#button/7"], "click", function () {
  _Child(_scope, Child === "a" ? null : "a");
}));
const _Child = /* @__PURE__ */_$.state("Child", (_scope, Child) => {
  _Child_effect(_scope);
  _dynamicTagName(_scope, Child || _Child_content(_scope));
  _dynamicTagName2(_scope, Child || _Child_content2(_scope));
}, () => _$.intersections([_expr_Parent_Child, _dynamicTagName, _dynamicTagName2]));
const _Parent_effect = _$.effect("__tests__/template.marko_0_Parent", (_scope, {
  Parent
}) => _$.on(_scope["#button/6"], "click", function () {
  _Parent(_scope, Parent === "div" ? "svg" : "div");
}));
const _Parent = /* @__PURE__ */_$.state("Parent", (_scope, Parent) => {
  _Parent_effect(_scope);
  _dynamicTagName3(_scope, Parent || _Parent_content(_scope));
}, () => _$.intersections([_expr_Parent_Child, _dynamicTagName3]));
export const _input_value_ = /* @__PURE__ */_$.value("input_value", (_scope, input_value) => {
  _$.html(_scope, input_value, "#text/1");
  _$.html(_scope, input_value, "#text/3");
  _input_value$Parent_content(_scope, input_value);
});
export const _input_ = /* @__PURE__ */_$.value("input", (_scope, input) => _input_value_(_scope, input.value));
export const _params__ = /* @__PURE__ */_$.value("_params_", (_scope, _params_) => _input_(_scope, _params_[0]));
export function _setup_(_scope) {
  _Parent(_scope, "div");
  _Child(_scope, "a");
}
export default /* @__PURE__ */_$.createTemplate("__tests__/template.marko", _template_, _walks_, _setup_, () => _params__);
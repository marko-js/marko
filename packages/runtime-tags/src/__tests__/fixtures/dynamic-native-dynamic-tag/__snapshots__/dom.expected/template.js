export const _template_ = "<!><!><button></button>";
export const _walks_ = /* replace, over(1), get, over(1) */"D%b b";
import * as _$ from "@marko/runtime-tags/debug/dom";
const _tagName_content = _$.register("__tests__/template.marko_1_renderer", /* @__PURE__ */_$.createRendererWithOwner("body content", ""));
const _tagName_input = _$.dynamicTagAttrs("#text/0", _tagName_content);
const _expr_Text_className = /* @__PURE__ */_$.intersection(2, _scope => {
  const {
    className
  } = _scope;
  _tagName_input(_scope, () => ({
    class: className
  }));
}, () => _tagName_input);
const _dynamicTagName = /* @__PURE__ */_$.conditional("#text/0", 0, () => _expr_Text_className);
const _className = /* @__PURE__ */_$.state("className", 0, () => _expr_Text_className);
const _tagName_effect = _$.effect("__tests__/template.marko_0_tagName", (_scope, {
  tagName
}) => _$.on(_scope["#button/1"], "click", function () {
  _tagName(_scope, tagName === "span" ? "div" : "span");
}));
const _tagName = /* @__PURE__ */_$.state("tagName", (_scope, tagName) => {
  _tagName_effect(_scope);
  _dynamicTagName(_scope, tagName || _tagName_content(_scope));
}, () => _dynamicTagName);
export function _setup_(_scope) {
  _tagName(_scope, "span");
  _className(_scope, "A");
}
export default /* @__PURE__ */_$.createTemplate("__tests__/template.marko", _template_, _walks_, _setup_);
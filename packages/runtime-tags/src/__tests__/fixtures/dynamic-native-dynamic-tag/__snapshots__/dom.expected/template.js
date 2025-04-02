export const _template = "<!><!><button></button>";
export const _walks = /* replace, over(1), get, over(1) */"D%b b";
import * as _$ from "@marko/runtime-tags/debug/dom";
const _tagName_content = _$.registerContent("__tests__/template.marko_1_renderer", "body content");
const _expr_tagName_className = /* @__PURE__ */_$.intersection(4, _scope => {
  const {
    tagName,
    className
  } = _scope;
  _dynamicTag(_scope, tagName, () => ({
    class: className
  }));
});
const _dynamicTag = /* @__PURE__ */_$.dynamicTag("#text/0", _tagName_content);
const _className = /* @__PURE__ */_$.state("className/3", _scope => _expr_tagName_className(_scope));
const _tagName_effect = _$.effect("__tests__/template.marko_0_tagName", (_scope, {
  tagName
}) => _$.on(_scope["#button/1"], "click", function () {
  _tagName(_scope, tagName === "span" ? "div" : "span");
}));
const _tagName = /* @__PURE__ */_$.state("tagName/2", _scope => {
  _expr_tagName_className(_scope);
  _tagName_effect(_scope);
});
export function _setup(_scope) {
  _tagName(_scope, "span");
  _className(_scope, "A");
}
export default /* @__PURE__ */_$.createTemplate("__tests__/template.marko", _template, _walks, _setup);
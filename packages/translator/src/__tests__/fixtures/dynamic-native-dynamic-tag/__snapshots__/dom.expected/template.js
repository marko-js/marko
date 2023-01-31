import { setSource as _setSource, dynamicAttrsProxy as _dynamicAttrsProxy, dynamicTagAttrs as _dynamicTagAttrs, on as _on, queueSource as _queueSource, createRenderer as _createRenderer, subscriber as _subscriber, conditional as _conditional, source as _source, register as _register, queueHydrate as _queueHydrate, createRenderFn as _createRenderFn } from "@marko/runtime-fluurt/src/dom";
const _tagNameBody = /* @__PURE__ */_createRenderer("body content", "");
const _expr_dynamicTagName_className = /* @__PURE__ */_subscriber([_dynamicAttrsProxy("#text/0")], 2, (_scope, dynamicTagName = _scope["#text/0"], className = _scope["className"]) => _dynamicTagAttrs(_scope, "#text/0", () => ({
  class: className
}), _tagNameBody));
const _dynamicTagName = /* @__PURE__ */_conditional("#text/0", 1, (_scope, tagName = _scope["tagName"]) => tagName || _tagNameBody, _expr_dynamicTagName_className);
const _className = /* @__PURE__ */_source("className", [_expr_dynamicTagName_className]);
const _hydrate_tagName = _register("packages/translator/src/__tests__/fixtures/dynamic-native-dynamic-tag/template.marko_0_tagName", _scope => _on(_scope["#button/1"], "click", function () {
  const tagName = _scope["tagName"];
  _queueSource(_scope, _tagName, tagName === "span" ? "div" : "span");
}));
const _tagName = /* @__PURE__ */_source("tagName", [_dynamicTagName], (_scope, tagName) => _queueHydrate(_scope, _hydrate_tagName));
const _setup = _scope => {
  _setSource(_scope, _tagName, "span");
  _setSource(_scope, _className, "A");
};
export const template = "<!><button></button>";
export const walks = /* replace, over(1), get, over(1) */"%b b";
export const setup = _setup;
export default /* @__PURE__ */_createRenderFn(template, walks, setup, null, null, "packages/translator/src/__tests__/fixtures/dynamic-native-dynamic-tag/template.marko");
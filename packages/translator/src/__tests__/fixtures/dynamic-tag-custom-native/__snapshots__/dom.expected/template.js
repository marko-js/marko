import child from "./components/child.marko";
import { setSource as _setSource, on as _on, queueSource as _queueSource, dynamicAttrsProxy as _dynamicAttrsProxy, dynamicTagAttrs as _dynamicTagAttrs, conditional as _conditional, source as _source, register as _register, queueHydrate as _queueHydrate, createRenderFn as _createRenderFn } from "@marko/runtime-fluurt/src/dom";
const _dynamicTagName = /* @__PURE__ */_conditional("#text/1", 1, (_scope, tagName = _scope["tagName"]) => tagName, _dynamicAttrsProxy("#text/1"), _scope => _dynamicTagAttrs(_scope, "#text/1", () => ({
  id: "dynamic"
})));
const _hydrate_tagName = _register("packages/translator/src/__tests__/fixtures/dynamic-tag-custom-native/template.marko_0_tagName", _scope => _on(_scope["#button/0"], "click", function () {
  const tagName = _scope["tagName"];
  _queueSource(_scope, _tagName, tagName === child ? "div" : child);
}));
const _tagName = /* @__PURE__ */_source("tagName", [_dynamicTagName], (_scope, tagName) => _queueHydrate(_scope, _hydrate_tagName));
const _setup = _scope => {
  _setSource(_scope, _tagName, child);
};
export const template = "<button></button><!>";
export const walks = /* get, over(1), replace, over(1) */" b%b";
export const setup = _setup;
export default /* @__PURE__ */_createRenderFn(template, walks, setup, null, null, "packages/translator/src/__tests__/fixtures/dynamic-tag-custom-native/template.marko");
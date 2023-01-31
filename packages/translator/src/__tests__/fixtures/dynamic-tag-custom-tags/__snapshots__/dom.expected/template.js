import child1 from "./components/child1.marko";
import child2 from "./components/child2.marko";
import { setSource as _setSource, dynamicAttrsProxy as _dynamicAttrsProxy, dynamicTagAttrs as _dynamicTagAttrs, on as _on, queueSource as _queueSource, subscriber as _subscriber, conditional as _conditional, source as _source, register as _register, queueHydrate as _queueHydrate, createRenderFn as _createRenderFn } from "@marko/runtime-fluurt/src/dom";
const _expr_dynamicTagName_val = /* @__PURE__ */_subscriber([_dynamicAttrsProxy("#text/0")], 2, (_scope, dynamicTagName = _scope["#text/0"], val = _scope["val"]) => _dynamicTagAttrs(_scope, "#text/0", () => ({
  value: val
})));
const _dynamicTagName = /* @__PURE__ */_conditional("#text/0", 1, (_scope, tagName = _scope["tagName"]) => tagName, _expr_dynamicTagName_val);
const _val = /* @__PURE__ */_source("val", [_expr_dynamicTagName_val]);
const _hydrate_tagName = _register("packages/translator/src/__tests__/fixtures/dynamic-tag-custom-tags/template.marko_0_tagName", _scope => _on(_scope["#button/1"], "click", function () {
  const tagName = _scope["tagName"];
  _queueSource(_scope, _tagName, tagName === child1 ? child2 : child1);
}));
const _tagName = /* @__PURE__ */_source("tagName", [_dynamicTagName], (_scope, tagName) => _queueHydrate(_scope, _hydrate_tagName));
const _setup = _scope => {
  _setSource(_scope, _tagName, child1);
  _setSource(_scope, _val, 3);
};
export const template = "<!><button></button>";
export const walks = /* replace, over(1), get, over(1) */"%b b";
export const setup = _setup;
export default /* @__PURE__ */_createRenderFn(template, walks, setup, null, null, "packages/translator/src/__tests__/fixtures/dynamic-tag-custom-tags/template.marko");
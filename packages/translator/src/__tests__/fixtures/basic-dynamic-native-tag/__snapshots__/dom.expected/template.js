import { dynamicAttrsProxy as _dynamicAttrsProxy, dynamicTagAttrs as _dynamicTagAttrs, createRenderer as _createRenderer, conditional as _conditional, source as _source, setSource as _setSource, destructureSources as _destructureSources, createRenderFn as _createRenderFn } from "@marko/runtime-fluurt/src/dom";
const _tagNameBody = /* @__PURE__ */_createRenderer("Hello World", "");
const _dynamicTagName = /* @__PURE__ */_conditional("#text/0", 1, (_scope, tagName = _scope["tagName"]) => tagName || _tagNameBody, _dynamicAttrsProxy("#text/0"), _scope => _dynamicTagAttrs(_scope, "#text/0", () => ({
  class: ["a", "b"]
}), _tagNameBody));
const _tagName = /* @__PURE__ */_source("tagName", [_dynamicTagName]);
export const attrs = /* @__PURE__ */_destructureSources([_tagName], (_scope, {
  tagName
}) => {
  _setSource(_scope, _tagName, tagName);
});
export { _tagName as _apply_tagName };
export const template = "<!>";
export const walks = /* replace, over(1) */"%b";
export const setup = function () {};
export default /* @__PURE__ */_createRenderFn(template, walks, setup, attrs);
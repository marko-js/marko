import { createRenderer as _createRenderer, conditional as _conditional, source as _source, setSource as _setSource, destructureSources as _destructureSources, createRenderFn as _createRenderFn } from "@marko/runtime-fluurt/src/dom";

const _tagNameBody = /* @__PURE__ */_createRenderer("Hello World", "");

const _dynamicTagName = /* @__PURE__ */_conditional(0, 1, (_scope, tagName = _scope[6]) => tagName);

const _tagName = /* @__PURE__ */_source(6, [_dynamicTagName]);

export const attrs = /* @__PURE__ */_destructureSources([_tagName], (_scope, {
  tagName
}) => {
  _setSource(_scope, _tagName, tagName);
});
export { _tagName as _apply_tagName };
export const template = "<!>";
export const walks =
/* replace, skip(5), over(1) */
"%-b";
export const setup = function () {};
export default /* @__PURE__ */_createRenderFn(template, walks, setup, attrs);
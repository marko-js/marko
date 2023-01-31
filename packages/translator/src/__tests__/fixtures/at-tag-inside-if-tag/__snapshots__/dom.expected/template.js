let _thing;
import { write as _write, bindRenderer as _bindRenderer, createRenderer as _createRenderer, register as _register, conditional as _conditional, dynamicSubscribers as _dynamicSubscribers, dynamicClosure as _dynamicClosure, source as _source, setSource as _setSource, destructureSources as _destructureSources, createRenderFn as _createRenderFn } from "@marko/runtime-fluurt/src/dom";
import { setup as _customTag, template as _customTag_template, walks as _customTag_walks } from "./components/custom-tag/index.marko";
const _ifBody = _register("packages/translator/src/__tests__/fixtures/at-tag-inside-if-tag/template.marko_2_renderer", /* @__PURE__ */_createRenderer("", ""));
const _if$customTagBody = /* @__PURE__ */_conditional("#text/0", 1, (_scope, x = _scope._["x"]) => x ? _ifBody : null);
const _x$customTagBody = _dynamicClosure(1, "x", [_if$customTagBody]);
const _customTagBody = /* @__PURE__ */_createRenderer("<!>", /* replace */"%", null, [_x$customTagBody]);
const _x = /* @__PURE__ */_source("x", [_dynamicSubscribers("x")]);
const _setup = _scope => {
  _customTag(_scope["#childScope/0"]);
};
export const attrs = /* @__PURE__ */_destructureSources([_x], (_scope, {
  x
}) => {
  _setSource(_scope, _x, x);
});
export { _x as _apply_x };
export const template = `${_customTag_template}`;
export const walks = /* beginChild, _customTag_walks, endChild */`/${_customTag_walks}&`;
export const setup = _setup;
export default /* @__PURE__ */_createRenderFn(template, walks, setup, attrs, null, "packages/translator/src/__tests__/fixtures/at-tag-inside-if-tag/template.marko");
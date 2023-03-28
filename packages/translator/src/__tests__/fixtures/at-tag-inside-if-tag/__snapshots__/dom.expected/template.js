let _thing;
import { write as _write, bindRenderer as _bindRenderer, createRenderer as _createRenderer, register as _register, conditional as _conditional, dynamicClosure as _dynamicClosure, dynamicSubscribers as _dynamicSubscribers, value as _value, createRenderFn as _createRenderFn } from "@marko/runtime-fluurt/src/dom";
import { setup as _customTag, template as _customTag_template, walks as _customTag_walks } from "./components/custom-tag/index.marko";
const _ifBody = _register("packages/translator/src/__tests__/fixtures/at-tag-inside-if-tag/template.marko_2_renderer", /* @__PURE__ */_createRenderer("", ""));
const _if$customTagBody = /* @__PURE__ */_conditional("#text/0");
const _x$customTagBody = /* @__PURE__ */_dynamicClosure("x", (_scope, x) => _if$customTagBody(_scope, x ? _ifBody : null));
const _customTagBody = /* @__PURE__ */_createRenderer("<!>", /* replace */"%", null, [_x$customTagBody]);
const _x = /* @__PURE__ */_value("x", (_scope, x, _dirty) => _dynamicSubscribers(_scope["x*"], _dirty));
const _setup = _scope => {
  _customTag(_scope["#childScope/0"]);
};
export const attrs = (_scope, _destructure, _dirty = true) => {
  let x;
  if (_dirty) ({
    x
  } = _destructure);
  _x(_scope, x, _dirty);
};
export { _x as _apply_x };
export const template = `${_customTag_template}`;
export const walks = /* beginChild, _customTag_walks, endChild */`/${_customTag_walks}&`;
export const setup = _setup;
export default /* @__PURE__ */_createRenderFn(template, walks, setup, attrs, null, "packages/translator/src/__tests__/fixtures/at-tag-inside-if-tag/template.marko");
import { on as _on, data as _data, value as _value, register as _register, queueHydrate as _queueHydrate, createRenderFn as _createRenderFn } from "@marko/runtime-fluurt/src/dom";
const _text = /* @__PURE__ */_value("text", (_scope, text) => _data(_scope["#text/1"], text));
const _hydrate_onClick = _register("packages/translator/src/__tests__/fixtures/basic-component-attrs/components/my-button.marko_0_onClick", _scope => {
  const onClick = _scope["onClick"];
  _on(_scope["#button/0"], "click", onClick);
});
const _onClick = /* @__PURE__ */_value("onClick", (_scope, onClick) => _queueHydrate(_scope, _hydrate_onClick));
export const attrs = (_scope, _destructure, _dirty = true) => {
  let onClick, text;
  if (_dirty) ({
    onClick,
    text
  } = _destructure);
  _onClick(_scope, onClick, _dirty);
  _text(_scope, text, _dirty);
};
export { _onClick as _apply_onClick, _text as _apply_text };
export const template = "<button> </button>";
export const walks = /* get, next(1), get, out(1) */" D l";
export const setup = function () {};
export default /* @__PURE__ */_createRenderFn(template, walks, setup, attrs, null, "packages/translator/src/__tests__/fixtures/basic-component-attrs/components/my-button.marko");
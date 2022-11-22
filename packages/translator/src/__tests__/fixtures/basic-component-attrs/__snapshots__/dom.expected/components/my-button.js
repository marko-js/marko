import { on as _on, data as _data, source as _source, register as _register, queueHydrate as _queueHydrate, setSource as _setSource, destructureSources as _destructureSources, createRenderFn as _createRenderFn } from "@marko/runtime-fluurt/src/dom";
const _text = /* @__PURE__ */_source(3, [], (_scope, text) => _data(_scope[1], text));
const _hydrate_onClick = _register("packages/translator/src/__tests__/fixtures/basic-component-attrs/components/my-button.marko_0_onClick", _scope => {
  const onClick = _scope[2];
  _on(_scope[0], "click", onClick);
});
const _onClick = /* @__PURE__ */_source(2, [], (_scope, onClick) => _queueHydrate(_scope, _hydrate_onClick));
export const attrs = /* @__PURE__ */_destructureSources([_onClick, _text], (_scope, {
  onClick,
  text
}) => {
  _setSource(_scope, _onClick, onClick);
  _setSource(_scope, _text, text);
});
export { _onClick as _apply_onClick, _text as _apply_text };
export const template = "<button> </button>";
export const walks = /* get, next(1), get, out(1) */" D l";
export const setup = function () {};
export default /* @__PURE__ */_createRenderFn(template, walks, setup, attrs);
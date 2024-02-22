import { on as _on, conditional as _conditional, value as _value, register as _register, queueEffect as _queueEffect, createRenderer as _createRenderer, createTemplate as _createTemplate } from "@marko/runtime-tags/debug/dom";
const _dynamicTagName = /* @__PURE__ */_conditional("#text/1");
const _renderBody = /* @__PURE__ */_value("renderBody", (_scope, renderBody) => _dynamicTagName(_scope, renderBody), void 0, _dynamicTagName);
const _onClick_effect = _register("packages/translator-tags/src/__tests__/fixtures/basic-component-renderBody/components/my-button.marko_0_onClick", _scope => {
  const {
    onClick
  } = _scope;
  _on(_scope["#button/0"], "click", onClick);
});
const _onClick = /* @__PURE__ */_value("onClick", (_scope, onClick) => _queueEffect(_scope, _onClick_effect));
export const args = (_scope, _destructure, _clean) => {
  let onClick, renderBody;
  if (!_clean) [{
    onClick,
    renderBody
  }] = _destructure;
  _onClick(_scope, onClick, _clean);
  _renderBody(_scope, renderBody, _clean);
};
export { _onClick, _renderBody };
export const template = "<button><!></button>";
export const walks = /* get, next(1), replace, out(1) */" D%l";
export const setup = function () {};
export default /* @__PURE__ */_createTemplate( /* @__PURE__ */_createRenderer(template, walks, setup, void 0, void 0, void 0, void 0, void 0, args), "packages/translator-tags/src/__tests__/fixtures/basic-component-renderBody/components/my-button.marko");
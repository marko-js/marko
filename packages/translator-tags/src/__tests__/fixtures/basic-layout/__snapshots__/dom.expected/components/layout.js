import { conditional as _conditional, value as _value, createRenderer as _createRenderer, createTemplate as _createTemplate } from "@marko/runtime-tags/src/dom";
const _dynamicTagName = /* @__PURE__ */_conditional("#text/0");
const _renderBody = /* @__PURE__ */_value("renderBody", (_scope, renderBody) => _dynamicTagName(_scope, renderBody), void 0, _dynamicTagName);
export const attrs = (_scope, _destructure, _clean) => {
  let renderBody;
  if (!_clean) ({
    renderBody
  } = _destructure);
  _renderBody(_scope, renderBody, _clean);
};
export { _renderBody };
export const template = "<body><!></body>";
export const walks = /* next(1), replace, out(1) */"D%l";
export const setup = function () {};
export default /* @__PURE__ */_createTemplate( /* @__PURE__ */_createRenderer(template, walks, setup, void 0, void 0, void 0, void 0, void 0, attrs), "packages/translator-tags/src/__tests__/fixtures/basic-layout/components/layout.marko");
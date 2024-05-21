import { conditional as _conditional, value as _value, createRenderer as _createRenderer, createTemplate as _createTemplate } from "@marko/runtime-tags/debug/dom";
const _dynamicTagName = /* @__PURE__ */_conditional("#text/0");
export const _renderBody_ = /* @__PURE__ */_value("renderBody", (_scope, renderBody) => _dynamicTagName(_scope, renderBody), void 0, _dynamicTagName);
const _destructure2 = (_scope, _destructure, _clean) => {
  let renderBody;
  if (!_clean) ({
    renderBody
  } = _destructure);
  _renderBody_(_scope, renderBody, _clean);
};
export const _input_ = /* @__PURE__ */_value("input", (_scope, input) => _destructure2(_scope, input), void 0, _destructure2);
export const _template_ = "<!><!><!>";
export const _walks_ = /* replace, over(1) */"D%bD";
export const _setup_ = function () {};
export default /* @__PURE__ */_createTemplate( /* @__PURE__ */_createRenderer(_template_, _walks_, _setup_, void 0, void 0, (_scope, _destructure3, _clean) => {
  let input;
  if (!_clean) [input] = _destructure3;
  _input_(_scope, input, _clean);
}), "packages/translator-tags/src/__tests__/fixtures/custom-tag-render-body/components/child/index.marko");
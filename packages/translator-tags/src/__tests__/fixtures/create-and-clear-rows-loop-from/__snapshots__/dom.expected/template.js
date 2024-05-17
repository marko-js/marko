import { data as _data, value as _value, createRenderer as _createRenderer, register as _register, loopTo as _loopTo, createTemplate as _createTemplate } from "@marko/runtime-tags/debug/dom";
const _n$forBody = /* @__PURE__ */_value("n", (_scope, n) => _data(_scope["#text/0"], n));
const _forBody = _register("packages/translator-tags/src/__tests__/fixtures/create-and-clear-rows-loop-from/template.marko_1_renderer", /* @__PURE__ */_createRenderer("<!>, ", /* replace */"%", void 0, void 0, void 0, (_scope, _destructure, _clean) => {
  let n;
  if (!_clean) [n] = _destructure;
  _n$forBody(_scope, n, _clean);
}));
const _for = /* @__PURE__ */_loopTo("#div/0", _forBody);
export const _input_ = /* @__PURE__ */_value("input", (_scope, input) => _for(_scope, [input.to, input.from, input.step]));
export const _template_ = "<div></div>";
export const _walks_ = /* get, over(1) */" b";
export const _setup_ = function () {};
export default /* @__PURE__ */_createTemplate( /* @__PURE__ */_createRenderer(_template_, _walks_, _setup_, void 0, void 0, (_scope, _destructure2, _clean) => {
  let input;
  if (!_clean) [input] = _destructure2;
  _input_(_scope, input, _clean);
}), "packages/translator-tags/src/__tests__/fixtures/create-and-clear-rows-loop-from/template.marko");
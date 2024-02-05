import { data as _data, value as _value, createRenderer as _createRenderer, loopTo as _loopTo, createTemplate as _createTemplate } from "@marko/runtime-tags/debug/dom";
const _n$forBody = /* @__PURE__ */_value("n", (_scope, n) => _data(_scope["#text/0"], n));
const _forBody = /* @__PURE__ */_createRenderer("<!>, ", /* replace */"%", void 0, void 0, void 0, void 0, void 0, void 0, (_scope, _destructure, _clean) => {
  let n;
  if (!_clean) [n] = _destructure;
  _n$forBody(_scope, n, _clean);
});
const _for = /* @__PURE__ */_loopTo("#div/0", _forBody);
const _input = /* @__PURE__ */_value("input", (_scope, input) => _for(_scope, [input.to, input.from, input.step]));
export const args = (_scope, _destructure2, _clean) => {
  let input;
  if (!_clean) [input] = _destructure2;
  _input(_scope, input, _clean);
};
export { _input };
export const template = "<div></div>";
export const walks = /* get, over(1) */" b";
export const setup = function () {};
export default /* @__PURE__ */_createTemplate( /* @__PURE__ */_createRenderer(template, walks, setup, void 0, void 0, void 0, void 0, void 0, args), "packages/translator-tags/src/__tests__/fixtures/create-and-clear-rows-loop-from/template.marko");
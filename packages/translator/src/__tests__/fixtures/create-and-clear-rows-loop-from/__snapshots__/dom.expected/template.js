import { data as _data, computeLoopToFrom as _computeLoopToFrom, value as _value, createRenderer as _createRenderer, loop as _loop, createRenderFn as _createRenderFn } from "@marko/runtime-fluurt/src/dom";
const _n$forBody = /* @__PURE__ */_value("n", (_scope, n) => _data(_scope["#text/0"], n));
const _forBody = /* @__PURE__ */_createRenderer("<!>, ", /* replace */"%");
const _for = /* @__PURE__ */_loop("#div/0", _forBody, (_scope, _destructure, _clean) => {
  let n;
  if (!_clean) [n] = _destructure;
  _n$forBody(_scope, n, _clean);
});
const _input = /* @__PURE__ */_value("input", (_scope, input) => _for(_scope, _computeLoopToFrom(input.to, input.from, input.step)));
export const attrs = _input;
export { _input };
export const template = "<div></div>";
export const walks = /* get, over(1) */" b";
export const setup = function () {};
export default /* @__PURE__ */_createRenderFn(template, walks, setup, attrs, null, "packages/translator/src/__tests__/fixtures/create-and-clear-rows-loop-from/template.marko");
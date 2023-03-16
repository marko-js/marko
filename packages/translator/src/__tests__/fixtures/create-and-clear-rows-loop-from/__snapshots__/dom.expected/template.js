import { data as _data, computeLoopToFrom as _computeLoopToFrom, source as _source, createRenderer as _createRenderer, setSource as _setSource, loop as _loop, destructureSources as _destructureSources, createRenderFn as _createRenderFn } from "@marko/runtime-fluurt/src/dom";
const _n$forBody = /* @__PURE__ */_source("n", [], (_scope, n) => _data(_scope["#text/0"], n));
const _forBody = /* @__PURE__ */_createRenderer("<!>, ", /* replace */"%");
const _for = /* @__PURE__ */_loop("#div/0", 1, _forBody, [_n$forBody], (_scope, [n]) => _setSource(_scope, _n$forBody, n), (_scope, input = _scope["input"]) => _computeLoopToFrom(input.to, input.from, input.step));
const _input = /* @__PURE__ */_source("input", [_for]);
export const attrs = /* @__PURE__ */_destructureSources([_input], (_scope, input) => {
  _setSource(_scope, _input, input);
});
export { _input as _apply_input };
export const template = "<div></div>";
export const walks = /* get, over(1) */" b";
export const setup = function () {};
export default /* @__PURE__ */_createRenderFn(template, walks, setup, attrs, null, "packages/translator/src/__tests__/fixtures/create-and-clear-rows-loop-from/template.marko");
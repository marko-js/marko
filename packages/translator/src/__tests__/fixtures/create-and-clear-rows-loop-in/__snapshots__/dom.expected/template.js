import { data as _data, computeLoopIn as _computeLoopIn, value as _value, createRenderer as _createRenderer, loop as _loop, createRenderFn as _createRenderFn } from "@marko/runtime-fluurt/src/dom";
const _key$forBody2 = /* @__PURE__ */_value("key", (_scope, key) => _data(_scope["#text/0"], key));
const _forBody2 = /* @__PURE__ */_createRenderer("<p> </p>", /* next(1), get */"D ");
const _text$forBody = /* @__PURE__ */_value("text", (_scope, text) => _data(_scope["#text/1"], text));
const _key$forBody = /* @__PURE__ */_value("key", (_scope, key) => _data(_scope["#text/0"], key));
const _forBody = /* @__PURE__ */_createRenderer("<p><!>: <!></p>", /* next(1), replace, over(2), replace */"D%c%");
const _for2 = /* @__PURE__ */_loop("#text/1", _forBody2, (_scope, _destructure2, _dirty = true) => {
  let key;
  if (_dirty) [[key]] = _destructure2;
  _key$forBody2(_scope, key, _dirty);
});
const _for = /* @__PURE__ */_loop("#text/0", _forBody, (_scope, _destructure, _dirty = true) => {
  let key, text;
  if (_dirty) [[key, text]] = _destructure;
  _key$forBody(_scope, key, _dirty);
  _text$forBody(_scope, text, _dirty);
});
const _input = /* @__PURE__ */_value("input", (_scope, input) => {
  _for(_scope, _computeLoopIn(input.children));
  _for2(_scope, _computeLoopIn(input.children));
});
export const attrs = _input;
export { _input };
export const template = "<div><!><!></div>";
export const walks = /* next(1), replace, over(1), replace, out(1) */"D%b%l";
export const setup = function () {};
export default /* @__PURE__ */_createRenderFn(template, walks, setup, attrs, null, "packages/translator/src/__tests__/fixtures/create-and-clear-rows-loop-in/template.marko");
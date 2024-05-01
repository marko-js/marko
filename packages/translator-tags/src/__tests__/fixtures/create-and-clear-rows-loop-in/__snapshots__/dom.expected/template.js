import { data as _data, value as _value, createRenderer as _createRenderer, register as _register, loopIn as _loopIn, createTemplate as _createTemplate } from "@marko/runtime-tags/debug/dom";
const _key$forBody2 = /* @__PURE__ */_value("key", (_scope, key) => _data(_scope["#text/0"], key));
const _forBody2 = _register("packages/translator-tags/src/__tests__/fixtures/create-and-clear-rows-loop-in/template.marko_2_renderer", /* @__PURE__ */_createRenderer("<p> </p>", /* next(1), get */"D ", void 0, void 0, void 0, (_scope, _destructure, _clean) => {
  let key;
  if (!_clean) [key] = _destructure;
  _key$forBody2(_scope, key, _clean);
}));
const _text$forBody = /* @__PURE__ */_value("text", (_scope, text) => _data(_scope["#text/1"], text));
const _key$forBody = /* @__PURE__ */_value("key", (_scope, key) => _data(_scope["#text/0"], key));
const _forBody = _register("packages/translator-tags/src/__tests__/fixtures/create-and-clear-rows-loop-in/template.marko_1_renderer", /* @__PURE__ */_createRenderer("<p><!>: <!></p>", /* next(1), replace, over(2), replace */"D%c%", void 0, void 0, void 0, (_scope, _destructure2, _clean) => {
  let key, text;
  if (!_clean) [key, text] = _destructure2;
  _key$forBody(_scope, key, _clean);
  _text$forBody(_scope, text, _clean);
}));
const _for2 = /* @__PURE__ */_loopIn("#text/1", _forBody2);
const _for = /* @__PURE__ */_loopIn("#text/0", _forBody);
const _input = /* @__PURE__ */_value("input", (_scope, input) => {
  _for(_scope, [input.children]);
  _for2(_scope, [input.children]);
});
export const _args_ = (_scope, _destructure3, _clean) => {
  let input;
  if (!_clean) [input] = _destructure3;
  _input(_scope, input, _clean);
};
export const _template_ = "<div><!><!></div>";
export const _walks_ = /* next(1), replace, over(1), replace, out(1) */"D%b%l";
export const _setup_ = function () {};
export default /* @__PURE__ */_createTemplate( /* @__PURE__ */_createRenderer(_template_, _walks_, _setup_, void 0, void 0, _args_), "packages/translator-tags/src/__tests__/fixtures/create-and-clear-rows-loop-in/template.marko");
export const _template_ = "<div><!><!></div>";
export const _walks_ = /* next(1), replace, over(1), replace, out(1) */"D%b%l";
export const _setup_ = () => {};
import { data as _data, createRenderer as _createRenderer, value as _value, register as _register, loopIn as _loopIn, createTemplate as _createTemplate } from "@marko/runtime-tags/debug/dom";
const _key$forBody2 = /* @__PURE__ */_value("key", (_scope, key) => _data(_scope["#text/0"], key));
const _params_3$forBody = /* @__PURE__ */_value("_params_3", (_scope, _params_3) => _key$forBody2(_scope, _params_3[0]));
const _forBody2 = _register("packages/translator-tags/src/__tests__/fixtures/create-and-clear-rows-loop-in/template.marko_2_renderer", /* @__PURE__ */_createRenderer("<p> </p>", /* next(1), get */"D ", void 0, void 0, void 0, _params_3$forBody));
const _text$forBody = /* @__PURE__ */_value("text", (_scope, text) => _data(_scope["#text/1"], text));
const _key$forBody = /* @__PURE__ */_value("key", (_scope, key) => _data(_scope["#text/0"], key));
const _params_2$forBody = /* @__PURE__ */_value("_params_2", (_scope, _params_2) => {
  _key$forBody(_scope, _params_2[0]);
  _text$forBody(_scope, _params_2[1]);
});
const _forBody = _register("packages/translator-tags/src/__tests__/fixtures/create-and-clear-rows-loop-in/template.marko_1_renderer", /* @__PURE__ */_createRenderer("<p><!>: <!></p>", /* next(1), replace, over(2), replace */"D%c%", void 0, void 0, void 0, _params_2$forBody));
const _for2 = /* @__PURE__ */_loopIn("#text/1", _forBody2);
const _for = /* @__PURE__ */_loopIn("#text/0", _forBody);
export const _input_ = /* @__PURE__ */_value("input", (_scope, input) => {
  _for(_scope, [input.children]);
  _for2(_scope, [input.children]);
});
export const _params__ = /* @__PURE__ */_value("_params_", (_scope, _params_) => _input_(_scope, _params_[0]));
export default /* @__PURE__ */_createTemplate(/* @__PURE__ */_createRenderer(_template_, _walks_, _setup_, void 0, void 0, _params__), "packages/translator-tags/src/__tests__/fixtures/create-and-clear-rows-loop-in/template.marko");
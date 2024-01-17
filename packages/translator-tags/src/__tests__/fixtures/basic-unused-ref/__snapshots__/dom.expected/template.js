import { on as _on, queueSource as _queueSource, data as _data, register as _register, queueEffect as _queueEffect, value as _value, createRenderer as _createRenderer, createTemplate as _createTemplate } from "@marko/runtime-fluurt/src/dom";
const _clickCount_effect = _register("packages/translator/src/__tests__/fixtures/basic-unused-ref/template.marko_0_clickCount", _scope => _on(_scope["#button/0"], "click", function () {
  const {
    clickCount
  } = _scope;
  _queueSource(_scope, _clickCount, clickCount + 1);
}));
const _clickCount = /* @__PURE__ */_value("clickCount", (_scope, clickCount) => {
  _data(_scope["#text/1"], clickCount);
  _queueEffect(_scope, _clickCount_effect);
});
const _unused_2 = (_scope, unused_2) => {};
const _unused_ = (_scope, unused_1) => {};
const _setup = _scope => {
  _unused_(_scope, 123);
  _unused_2(_scope, 456);
  _clickCount(_scope, 0);
};
export const template = "<div><button> </button></div>";
export const walks = /* next(1), get, next(1), get, out(2) */"D D m";
export const setup = _setup;
export default /* @__PURE__ */_createTemplate( /* @__PURE__ */_createRenderer(template, walks, setup), "packages/translator/src/__tests__/fixtures/basic-unused-ref/template.marko");
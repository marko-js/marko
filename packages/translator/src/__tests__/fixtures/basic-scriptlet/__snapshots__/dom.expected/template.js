import { on as _on, queueSource as _queueSource, data as _data, register as _register, queueEffect as _queueEffect, value as _value, createRenderFn as _createRenderFn } from "@marko/runtime-fluurt/src/dom";
const _clickCount_effect = _register("packages/translator/src/__tests__/fixtures/basic-scriptlet/template.marko_0_clickCount", _scope => _on(_scope["#button/0"], "click", function () {
  const clickCount = _scope["clickCount"];
  _queueSource(_scope, _clickCount, clickCount + 1);
}));
const _clickCount = /* @__PURE__ */_value("clickCount", (_scope, clickCount) => {
  const doubleCount = clickCount * 2;
  _queueEffect(_scope, _clickCount_effect);
});
const _setup = _scope => {
  _data(_scope["#text/1"], doubleCount);
  _clickCount(_scope, 0);
};
export const template = "<div><button> </button></div>";
export const walks = /* next(1), get, next(1), get, out(2) */"D D m";
export const setup = _setup;
export default /* @__PURE__ */_createRenderFn(template, walks, setup, null, null, "packages/translator/src/__tests__/fixtures/basic-scriptlet/template.marko");
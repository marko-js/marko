import { on as _on, queueSource as _queueSource, data as _data, value as _value, register as _register, queueEffect as _queueEffect, createRenderFn as _createRenderFn } from "@marko/runtime-fluurt/src/dom";
const _lastCount2 = /* @__PURE__ */_value("lastCount2", (_scope, lastCount2) => _data(_scope["#text/3"], lastCount2));
const _lastCount = /* @__PURE__ */_value("lastCount", (_scope, lastCount) => _data(_scope["#text/2"], lastCount));
const _clickCount_effect = _register("packages/translator/src/__tests__/fixtures/nested-assignment-expression/template.marko_0_clickCount", _scope => _on(_scope["#button/0"], "click", function () {
  const clickCount = _scope["clickCount"];
  const last = _queueSource(_scope, _lastCount, (_queueSource(_scope, _clickCount, clickCount + 1), clickCount));
  _queueSource(_scope, _lastCount2, last);
}));
const _clickCount = /* @__PURE__ */_value("clickCount", (_scope, clickCount) => {
  _data(_scope["#text/1"], clickCount);
  _queueEffect(_scope, _clickCount_effect);
});
const _setup = _scope => {
  _clickCount(_scope, 0);
  _lastCount(_scope, 0);
  _lastCount2(_scope, 0);
};
export const template = "<button> </button>used to be <span> </span> which should be the same as <span> </span>";
export const walks = /* get, next(1), get, out(1), over(1), next(1), get, out(1), over(1), next(1), get, out(1) */" D lbD lbD l";
export const setup = _setup;
export default /* @__PURE__ */_createRenderFn(template, walks, setup, null, null, "packages/translator/src/__tests__/fixtures/nested-assignment-expression/template.marko");
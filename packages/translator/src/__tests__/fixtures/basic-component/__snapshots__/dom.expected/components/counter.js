import { setSource as _setSource, on as _on, queueSource as _queueSource, data as _data, source as _source, register as _register, queueHydrate as _queueHydrate, bind as _bind, createRenderFn as _createRenderFn } from "@marko/runtime-fluurt/src/dom";
const _onClick = function (_scope) {
  const clickCount = _scope[2];
  _queueSource(_scope, _clickCount, clickCount + 1);
};
const _hydrate_clickCount = _register("packages/translator/src/__tests__/fixtures/basic-component/components/counter.marko_0_clickCount", _scope => {
  const clickCount = _scope[2];
  _on(_scope[0], "click", /* @__PURE__ */_bind(_scope, _onClick));
});
const _clickCount = /* @__PURE__ */_source(2, [], (_scope, clickCount) => {
  _data(_scope[1], clickCount);
  _queueHydrate(_scope, _hydrate_clickCount);
});
const _setup = _scope => {
  _setSource(_scope, _clickCount, 0);
};
export const template = "<button> </button>";
export const walks = /* get, next(1), get, out(1) */" D l";
export const setup = _setup;
export default /* @__PURE__ */_createRenderFn(template, walks, setup);
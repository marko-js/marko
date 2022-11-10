import { setSource as _setSource, queueSource as _queueSource, on as _on, data as _data, source as _source, register as _register, queueHydrate as _queueHydrate, bind as _bind, createRenderFn as _createRenderFn } from "@marko/runtime-fluurt/src/dom";
const _onclick = function (_scope) {
  const count = _scope[2];
  {
    _queueSource(_scope, _count, count + 1);
  }
};
const _hydrate_count = _register("packages/translator/src/__tests__/fixtures/basic-fn-with-block/template.marko_0_count", _scope => {
  const count = _scope[2];
  _on(_scope[0], "click", /* @__PURE__ */_bind(_scope, _onclick));
});
const _count = /* @__PURE__ */_source(2, [], (_scope, count) => {
  _data(_scope[1], count);
  _queueHydrate(_scope, _hydrate_count);
});
const _setup = _scope => {
  _setSource(_scope, _count, 0);
};
export const template = "<button> </button>";
export const walks = /* get, next(1), get, out(1) */" D l";
export const setup = _setup;
export default /* @__PURE__ */_createRenderFn(template, walks, setup);
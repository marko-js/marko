import { setSource as _setSource, on as _on, queueSource as _queueSource, data as _data, source as _source, register as _register, queueHydrate as _queueHydrate, createRenderFn as _createRenderFn } from "@marko/runtime-fluurt/src/dom";
const _hydrate_count = _register("packages/translator/src/__tests__/fixtures/basic-fn-with-block/template.marko_0_count", _scope => _on(_scope["#button/0"], "click", function () {
  const count = _scope["count"];
  {
    _queueSource(_scope, _count, count + 1);
  }
}));
const _count = /* @__PURE__ */_source("count", [], (_scope, count) => {
  _data(_scope["#text/1"], count);
  _queueHydrate(_scope, _hydrate_count);
});
const _setup = _scope => {
  _setSource(_scope, _count, 0);
};
export const template = "<button> </button>";
export const walks = /* get, next(1), get, out(1) */" D l";
export const setup = _setup;
export default /* @__PURE__ */_createRenderFn(template, walks, setup);
import { setSource as _setSource, on as _on, queueSource as _queueSource, data as _data, source as _source, register as _register, queueHydrate as _queueHydrate, createRenderFn as _createRenderFn } from "@marko/runtime-fluurt/src/dom";
const _hydrate_count = _register("packages/translator/src/__tests__/fixtures/reassignment-expression-counter/template.marko_0_count", _scope => {
  _on(_scope[0], "click", function () {
    const count = _scope[6];
    _queueSource(_scope, _count, count + 2);
  });
  _on(_scope[2], "click", function () {
    const count = _scope[6];
    _queueSource(_scope, _count, count * 3);
  });
  _on(_scope[4], "click", function () {
    const count = _scope[6];
    _queueSource(_scope, _count, count ** 3);
  });
});
const _count = /* @__PURE__ */_source(6, [], (_scope, count) => {
  _data(_scope[1], count);
  _data(_scope[3], count);
  _data(_scope[5], count);
  _queueHydrate(_scope, _hydrate_count);
});
const _setup = _scope => {
  _setSource(_scope, _count, 0);
};
export const template = "<button id=addTwo> </button><button id=triple> </button><button id=cube> </button>";
export const walks = /* get, next(1), get, out(1), get, next(1), get, out(1), get, next(1), get, out(1) */" D l D l D l";
export const setup = _setup;
export default /* @__PURE__ */_createRenderFn(template, walks, setup);
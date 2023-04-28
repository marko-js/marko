import { on as _on, queueSource as _queueSource, data as _data, register as _register, queueEffect as _queueEffect, value as _value, createRenderFn as _createRenderFn } from "@marko/runtime-fluurt/src/dom";
const _count_effect = _register("packages/translator/src/__tests__/fixtures/reassignment-expression-counter/template.marko_0_count", _scope => {
  _on(_scope["#button/0"], "click", function () {
    const {
      count
    } = _scope;
    _queueSource(_scope, _count, count + 2);
  });
  _on(_scope["#button/2"], "click", function () {
    const {
      count
    } = _scope;
    _queueSource(_scope, _count, count * 3);
  });
  _on(_scope["#button/4"], "click", function () {
    const {
      count
    } = _scope;
    _queueSource(_scope, _count, count ** 3);
  });
});
const _count = /* @__PURE__ */_value("count", (_scope, count) => {
  _data(_scope["#text/1"], count);
  _data(_scope["#text/3"], count);
  _data(_scope["#text/5"], count);
  _queueEffect(_scope, _count_effect);
});
const _setup = _scope => {
  _count(_scope, 0);
};
export const template = "<button id=addTwo> </button><button id=triple> </button><button id=cube> </button>";
export const walks = /* get, next(1), get, out(1), get, next(1), get, out(1), get, next(1), get, out(1) */" D l D l D l";
export const setup = _setup;
export default /* @__PURE__ */_createRenderFn(template, walks, setup, null, null, "packages/translator/src/__tests__/fixtures/reassignment-expression-counter/template.marko");
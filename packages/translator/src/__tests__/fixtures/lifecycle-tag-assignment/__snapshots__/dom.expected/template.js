import { setSource as _setSource, queueSource as _queueSource, lifecycle as _lifecycle, data as _data, on as _on, source as _source, register as _register, queueHydrate as _queueHydrate, createRenderFn as _createRenderFn } from "@marko/runtime-fluurt/src/dom";
const _prev = /* @__PURE__ */_source(4, [], (_scope, prev) => _data(_scope[1], prev));
const _hydrate_x = _register("packages/translator/src/__tests__/fixtures/lifecycle-tag-assignment/template.marko_0_x", _scope => {
  _lifecycle(_scope, 5, {
    onMount: function () {
      const x = _scope[3];
      this.cur = x;
    },
    onUpdate: function () {
      const x = _scope[3];
      _queueSource(_scope, _prev, this.cur);
      this.cur = x;
    }
  });
  _on(_scope[2], "click", function () {
    const x = _scope[3];
    _queueSource(_scope, _x, x + 1);
  });
});
const _x = /* @__PURE__ */_source(3, [], (_scope, x) => {
  _data(_scope[0], x);
  _queueHydrate(_scope, _hydrate_x);
});
const _setup = _scope => {
  _setSource(_scope, _x, 0);
  _setSource(_scope, _prev, false);
};
export const template = "<div>x=<span> </span>, was=<!></div><button id=increment>Increment</button>";
export const walks = /* next(1), over(1), next(1), get, out(1), over(1), replace, out(1), get, over(1) */"DbD lb%l b";
export const setup = _setup;
export default /* @__PURE__ */_createRenderFn(template, walks, setup);
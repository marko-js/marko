import { on as _on, queueSource as _queueSource, data as _data, conditional as _conditional, register as _register, queueEffect as _queueEffect, value as _value, createRenderer as _createRenderer, createTemplate as _createTemplate } from "@marko/runtime-fluurt/dist/debug/dom";
import _classCounter from "./components/class-counter.marko";
const _dynamicTagName_ChildScope = /* @__PURE__ */_conditional("#text/2");
const _count_effect = _register("packages/translator-interop/src/__tests__/fixtures/interop-tags-to-class/template.marko_0_count", _scope => _on(_scope["#button/0"], "click", function () {
  const {
    count
  } = _scope;
  _queueSource(_scope, _count, count + 1);
}));
const _count = /* @__PURE__ */_value("count", (_scope, count) => {
  _data(_scope["#text/1"], count);
  _queueEffect(_scope, _count_effect);
});
const _setup = _scope => {
  _count(_scope, 0);
  _dynamicTagName_ChildScope(_scope, _classCounter);
};
export const template = "<button> </button><!>";
export const walks = /* get, next(1), get, out(1), replace, over(1) */" D l%b";
export const setup = _setup;
export default /* @__PURE__ */_createTemplate( /* @__PURE__ */_createRenderer(template, walks, setup), "packages/translator-interop/src/__tests__/fixtures/interop-tags-to-class/template.marko");
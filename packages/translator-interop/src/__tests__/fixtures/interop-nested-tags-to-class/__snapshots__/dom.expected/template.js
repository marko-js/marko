import { on as _on, queueSource as _queueSource, data as _data, register as _register, queueEffect as _queueEffect, dynamicClosure as _dynamicClosure, registerSubscriber as _registerSubscriber, createRenderer as _createRenderer, dynamicTagAttrs as _dynamicTagAttrs, conditional as _conditional, dynamicSubscribers as _dynamicSubscribers, value as _value, createTemplate as _createTemplate } from "@marko/runtime-tags/debug/dom";
import _classLayout from "./components/class-layout.marko";
import "marko/src/runtime/helpers/tags-compat/dom-debug.mjs";
_register("packages/translator-interop/src/__tests__/fixtures/interop-nested-tags-to-class/components/class-layout.marko", _classLayout);
const _onClick = _scope => {
  const {
    _: {
      count
    }
  } = _scope;
  return function () {
    _queueSource(_scope._, _count, count + 1);
  };
};
const _count$classLayoutBody_effect = _register("packages/translator-interop/src/__tests__/fixtures/interop-nested-tags-to-class/template.marko_1_count", _scope => _on(_scope["#button/0"], "click", _onClick(_scope)));
const _count$classLayoutBody = _registerSubscriber("packages/translator-interop/src/__tests__/fixtures/interop-nested-tags-to-class/template.marko_1_count/subscriber", /* @__PURE__ */_dynamicClosure("count", (_scope, count) => {
  _data(_scope["#text/1"], count);
  _queueEffect(_scope, _count$classLayoutBody_effect);
}));
const _classLayoutBody = _register("packages/translator-interop/src/__tests__/fixtures/interop-nested-tags-to-class/template.marko_1_renderer", /* @__PURE__ */_createRenderer("<button id=tags> </button>", /* get, next(1), get */" D ", void 0, [_count$classLayoutBody]));
const _classLayout_input = _dynamicTagAttrs("#text/0", _classLayoutBody);
const _dynamicTagName = /* @__PURE__ */_conditional("#text/0", _scope => _classLayout_input(_scope, () => ({})), void 0, _classLayout_input);
const _count = /* @__PURE__ */_value("count", null, _dynamicSubscribers("count"));
const _setup = _scope => {
  _count(_scope, 0);
  _dynamicTagName(_scope, _classLayout || _classLayoutBody);
};
export const _template_ = "<!><!><!>";
export const _walks_ = /* replace, over(1) */"D%bD";
export const _setup_ = _setup;
export default /* @__PURE__ */_createTemplate( /* @__PURE__ */_createRenderer(_template_, _walks_, _setup_), "packages/translator-interop/src/__tests__/fixtures/interop-nested-tags-to-class/template.marko");
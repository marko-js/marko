import { on as _on, queueSource as _queueSource, data as _data, register as _register, queueEffect as _queueEffect, dynamicClosure as _dynamicClosure, registerSubscriber as _registerSubscriber, createRenderer as _createRenderer, dynamicTagAttrs as _dynamicTagAttrs, conditional as _conditional, dynamicSubscribers as _dynamicSubscribers, value as _value, createTemplate as _createTemplate } from "@marko/runtime-tags/dist/debug/dom";
import _classLayout from "./components/class-layout.marko";
import _marko_tags_compat from "marko/src/runtime/helpers/tags-compat-dom.js";
_register("packages/translator-interop/src/__tests__/fixtures/interop-nested-tags-to-class/components/class-layout.marko", _classLayout);
const _count$classLayoutBody_effect = _register("packages/translator-interop/src/__tests__/fixtures/interop-nested-tags-to-class/template.marko_1_count", _scope => _on(_scope["#button/0"], "click", function () {
  const {
    _: {
      count
    }
  } = _scope;
  _queueSource(_scope._, _count, count + 1);
}));
const _count$classLayoutBody = _registerSubscriber("packages/translator-interop/src/__tests__/fixtures/interop-nested-tags-to-class/template.marko_1_count/subscriber", /* @__PURE__ */_dynamicClosure("count", (_scope, count) => {
  _data(_scope["#text/1"], count);
  _queueEffect(_scope, _count$classLayoutBody_effect);
}));
const _classLayoutBody = /* @__PURE__ */_createRenderer("<button id=tags> </button>", /* get, next(1), get */" D ", void 0, [_count$classLayoutBody]);
const _classLayout_input = _dynamicTagAttrs("#text/0", _classLayoutBody);
const _dynamicTagName__childScope = /* @__PURE__ */_conditional("#text/0", _scope => _classLayout_input(_scope, () => ({})), void 0, _classLayout_input);
const _count = /* @__PURE__ */_value("count", null, _dynamicSubscribers("count"));
const _setup = _scope => {
  _count(_scope, 0);
  _dynamicTagName__childScope(_scope, _classLayout || _classLayoutBody);
};
export const template = "<!>";
export const walks = /* replace, over(1) */"%b";
export const setup = _setup;
export default /* @__PURE__ */_createTemplate( /* @__PURE__ */_createRenderer(template, walks, setup), "packages/translator-interop/src/__tests__/fixtures/interop-nested-tags-to-class/template.marko");
import { data as _data, on as _on, queueSource as _queueSource, intersection as _intersection, value as _value, register as _register, queueEffect as _queueEffect, dynamicClosure as _dynamicClosure, createRenderer as _createRenderer, dynamicTagAttrs as _dynamicTagAttrs, conditional as _conditional, dynamicSubscribers as _dynamicSubscribers, createTemplate as _createTemplate } from "@marko/runtime-fluurt/dist/debug/dom";
import _classLayout from "./components/class-layout.marko";
import _marko_tags_compat from "marko/src/runtime/helpers/tags-compat.js";
const _expr_multiplier_baseCount$classLayoutBody = /* @__PURE__ */_intersection(2, _scope => {
  const {
    _: {
      multiplier
    },
    baseCount
  } = _scope;
  _data(_scope["#text/4"], multiplier * baseCount);
});
const _message$classLayoutBody = /* @__PURE__ */_value("message", (_scope, message) => _data(_scope["#text/0"], message));
const _baseCount$classLayoutBody = /* @__PURE__ */_value("baseCount", (_scope, baseCount) => _data(_scope["#text/3"], baseCount), _expr_multiplier_baseCount$classLayoutBody);
const _multiplier$classLayoutBody_effect = _register("packages/translator-interop/src/__tests__/fixtures/interop-tag-params-tags-to-class/template.marko_1_multiplier", _scope => _on(_scope["#button/1"], "click", function () {
  const {
    _: {
      multiplier
    }
  } = _scope;
  _queueSource(_scope._, _multiplier, multiplier + 1);
}));
const _multiplier$classLayoutBody = /* @__PURE__ */_dynamicClosure("multiplier", (_scope, multiplier) => {
  _data(_scope["#text/2"], multiplier);
  _queueEffect(_scope, _multiplier$classLayoutBody_effect);
}, void 0, _expr_multiplier_baseCount$classLayoutBody);
const _classLayoutBody = /* @__PURE__ */_createRenderer("<h1> </h1><button id=tags><!> * <!> = <!></button>", /* next(1), get, out(1), get, next(1), replace, over(2), replace, over(2), replace */"D l D%c%c%", void 0, [_multiplier$classLayoutBody], void 0, void 0, void 0, void 0, (_scope, _destructure, _clean) => {
  let baseCount, message;
  if (!_clean) ({
    value: [baseCount, message]
  } = _destructure);
  _baseCount$classLayoutBody(_scope, baseCount, _clean);
  _message$classLayoutBody(_scope, message, _clean);
});
const _classLayout_input = _dynamicTagAttrs("#text/0", _classLayoutBody);
const _dynamicTagName_ChildScope = /* @__PURE__ */_conditional("#text/0", _scope => _classLayout_input(_scope, () => ({})), void 0, _classLayout_input);
const _multiplier = /* @__PURE__ */_value("multiplier", null, _dynamicSubscribers("multiplier"));
const _setup = _scope => {
  _multiplier(_scope, 1);
  _dynamicTagName_ChildScope(_scope, _classLayout || _classLayoutBody);
};
export const template = "<!>";
export const walks = /* replace, over(1) */"%b";
export const setup = _setup;
export default /* @__PURE__ */_createTemplate( /* @__PURE__ */_createRenderer(template, walks, setup), "packages/translator-interop/src/__tests__/fixtures/interop-tag-params-tags-to-class/template.marko");
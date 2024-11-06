export const _template_ = "<div><button id=outer></button><!></div>";
export const _walks_ = /* next(1), get, over(1), replace, out(1) */"D b%l";
import { on as _on, data as _data, createRenderer as _createRenderer, effect as _effect, dynamicClosure as _dynamicClosure, registerSubscriber as _registerSubscriber, register as _register, conditional as _conditional, closure as _closure, dynamicSubscribers as _dynamicSubscribers, state as _state, inConditionalScope as _inConditionalScope, createTemplate as _createTemplate } from "@marko/runtime-tags/debug/dom";
const _onClick = _scope => {
  const {
    _: {
      _: {
        count
      }
    }
  } = _scope;
  return function () {
    _count(_scope._._, count + 1);
  };
};
const _count$ifBody_effect = _effect("packages/translator-tags/src/__tests__/fixtures/toggle-nested-2/template.marko_2_count", _scope => _on(_scope["#button/0"], "click", _onClick(_scope)));
const _count$ifBody = _registerSubscriber("packages/translator-tags/src/__tests__/fixtures/toggle-nested-2/template.marko_2_count/subscriber", /* @__PURE__ */_dynamicClosure("count", (_scope, count) => {
  _data(_scope["#text/1"], count);
  _count$ifBody_effect(_scope);
}, _scope => _scope._._));
const _ifBody2 = _register("packages/translator-tags/src/__tests__/fixtures/toggle-nested-2/template.marko_2_renderer", /* @__PURE__ */_createRenderer("<button id=count> </button>", /* get, next(1), get */" D ", void 0, () => [_count$ifBody]));
const _if$ifBody = /* @__PURE__ */_conditional("#text/1");
const _onClick2 = _scope => {
  const {
    _: {
      inner
    }
  } = _scope;
  return function () {
    _inner(_scope._, !inner);
  };
};
const _inner$ifBody_effect = _effect("packages/translator-tags/src/__tests__/fixtures/toggle-nested-2/template.marko_1_inner", _scope => _on(_scope["#button/0"], "click", _onClick2(_scope)));
const _inner$ifBody = /* @__PURE__ */_closure("inner", (_scope, inner) => {
  _inner$ifBody_effect(_scope);
  _if$ifBody(_scope, inner ? _ifBody2 : null);
}, void 0, () => _if$ifBody);
const _ifBody = _register("packages/translator-tags/src/__tests__/fixtures/toggle-nested-2/template.marko_1_renderer", /* @__PURE__ */_createRenderer("<button id=inner></button><!><!>", /* get, over(1), replace */" b%D", void 0, () => [_inner$ifBody]));
const _if = /* @__PURE__ */_conditional("#text/1");
const _count = /* @__PURE__ */_state("count", null, () => _dynamicSubscribers("count"));
const _inner = /* @__PURE__ */_state("inner", null, () => _inConditionalScope(_inner$ifBody, "#text/1"));
const _onClick3 = _scope => {
  const {
    outer
  } = _scope;
  return function () {
    _outer(_scope, !outer);
  };
};
const _outer_effect = _effect("packages/translator-tags/src/__tests__/fixtures/toggle-nested-2/template.marko_0_outer", _scope => _on(_scope["#button/0"], "click", _onClick3(_scope)));
const _outer = /* @__PURE__ */_state("outer", (_scope, outer) => {
  _outer_effect(_scope);
  _if(_scope, outer ? _ifBody : null);
}, () => _if);
export function _setup_(_scope) {
  _outer(_scope, true);
  _inner(_scope, true);
  _count(_scope, 0);
}
export default /* @__PURE__ */_createTemplate(/* @__PURE__ */_createRenderer(_template_, _walks_, _setup_), "packages/translator-tags/src/__tests__/fixtures/toggle-nested-2/template.marko");
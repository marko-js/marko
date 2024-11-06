export const _template_ = "<div><button id=outer></button><!></div>";
export const _walks_ = /* next(1), get, over(1), replace, out(1) */"D b%l";
import * as _$ from "@marko/runtime-tags/debug/dom";
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
const _count$ifBody_effect = _$.effect("packages/translator-tags/src/__tests__/fixtures/toggle-nested-2/template.marko_2_count", _scope => _$.on(_scope["#button/0"], "click", _onClick(_scope)));
const _count$ifBody = _$.registerSubscriber("packages/translator-tags/src/__tests__/fixtures/toggle-nested-2/template.marko_2_count/subscriber", /* @__PURE__ */_$.dynamicClosure("count", (_scope, count) => {
  _$.data(_scope["#text/1"], count);
  _count$ifBody_effect(_scope);
}, _scope => _scope._._));
const _ifBody2 = _$.register("packages/translator-tags/src/__tests__/fixtures/toggle-nested-2/template.marko_2_renderer", /* @__PURE__ */_$.createRenderer("<button id=count> </button>", /* get, next(1), get */" D ", void 0, () => [_count$ifBody]));
const _if$ifBody = /* @__PURE__ */_$.conditional("#text/1", 0);
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
const _inner$ifBody_effect = _$.effect("packages/translator-tags/src/__tests__/fixtures/toggle-nested-2/template.marko_1_inner", _scope => _$.on(_scope["#button/0"], "click", _onClick2(_scope)));
const _inner$ifBody = /* @__PURE__ */_$.closure("inner", (_scope, inner) => {
  _inner$ifBody_effect(_scope);
  _if$ifBody(_scope, inner ? _ifBody2 : null);
}, void 0, () => _if$ifBody);
const _ifBody = _$.register("packages/translator-tags/src/__tests__/fixtures/toggle-nested-2/template.marko_1_renderer", /* @__PURE__ */_$.createRenderer("<button id=inner></button><!><!>", /* get, over(1), replace */" b%D", void 0, () => [_inner$ifBody]));
const _if = /* @__PURE__ */_$.conditional("#text/1", 0);
const _count = /* @__PURE__ */_$.state("count", 0, () => _$.dynamicSubscribers("count"));
const _inner = /* @__PURE__ */_$.state("inner", 0, () => _$.inConditionalScope(_inner$ifBody, "#text/1"));
const _onClick3 = _scope => {
  const {
    outer
  } = _scope;
  return function () {
    _outer(_scope, !outer);
  };
};
const _outer_effect = _$.effect("packages/translator-tags/src/__tests__/fixtures/toggle-nested-2/template.marko_0_outer", _scope => _$.on(_scope["#button/0"], "click", _onClick3(_scope)));
const _outer = /* @__PURE__ */_$.state("outer", (_scope, outer) => {
  _outer_effect(_scope);
  _if(_scope, outer ? _ifBody : null);
}, () => _if);
export function _setup_(_scope) {
  _outer(_scope, true);
  _inner(_scope, true);
  _count(_scope, 0);
}
export default /* @__PURE__ */_$.createTemplate("packages/translator-tags/src/__tests__/fixtures/toggle-nested-2/template.marko", _template_, _walks_, _setup_);
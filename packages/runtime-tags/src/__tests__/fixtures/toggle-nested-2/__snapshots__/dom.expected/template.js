export const _template_ = "<div><button id=outer></button><!></div>";
export const _walks_ = /* next(1), get, over(1), replace, out(1) */"D b%l";
import * as _$ from "@marko/runtime-tags/debug/dom";
const _count$if_content_effect = _$.effect("__tests__/template.marko_2_count", (_scope, {
  _: {
    _: {
      count
    }
  }
}) => _$.on(_scope["#button/0"], "click", function () {
  _count(_scope._._, count + 1), count;
}));
const _count$if_content = _$.registerSubscriber("__tests__/template.marko_2_count/subscriber", /* @__PURE__ */_$.dynamicClosure("count", (_scope, count) => {
  _$.data(_scope["#text/1"], count);
  _count$if_content_effect(_scope);
}, _scope => _scope._._));
const _if_content2 = _$.register("__tests__/template.marko_2_renderer", /* @__PURE__ */_$.createRenderer("<button id=count> </button>", /* get, next(1), get */" D ", void 0, () => [_count$if_content]));
const _if$if_content = /* @__PURE__ */_$.conditional("#text/1", 0);
const _inner$if_content_effect = _$.effect("__tests__/template.marko_1_inner", (_scope, {
  _: {
    inner
  }
}) => _$.on(_scope["#button/0"], "click", function () {
  _inner(_scope._, !inner);
}));
const _inner$if_content = /* @__PURE__ */_$.closure("inner", (_scope, inner) => {
  _inner$if_content_effect(_scope);
  _if$if_content(_scope, inner ? _if_content2 : null);
}, void 0, () => _if$if_content);
const _if_content = _$.register("__tests__/template.marko_1_renderer", /* @__PURE__ */_$.createRenderer("<button id=inner></button><!><!>", /* get, over(1), replace */" b%D", void 0, () => [_inner$if_content]));
const _if = /* @__PURE__ */_$.conditional("#text/1", 0);
const _count = /* @__PURE__ */_$.state("count", 0, () => _$.dynamicSubscribers("count"));
const _inner = /* @__PURE__ */_$.state("inner", 0, () => _$.inConditionalScope(_inner$if_content, "#text/1"));
const _outer_effect = _$.effect("__tests__/template.marko_0_outer", (_scope, {
  outer
}) => _$.on(_scope["#button/0"], "click", function () {
  _outer(_scope, !outer);
}));
const _outer = /* @__PURE__ */_$.state("outer", (_scope, outer) => {
  _outer_effect(_scope);
  _if(_scope, outer ? _if_content : null);
}, () => _if);
export function _setup_(_scope) {
  _outer(_scope, true);
  _inner(_scope, true);
  _count(_scope, 0);
}
export default /* @__PURE__ */_$.createTemplate("__tests__/template.marko", _template_, _walks_, _setup_);
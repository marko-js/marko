export const _template_ = "<div><button id=outer></button><!> hello</div>";
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
const _count$if_content = _$.registerSubscriber("__tests__/template.marko_2_count/subscriber", /* @__PURE__ */_$.dynamicClosure((_scope, count) => {
  _$.data(_scope["#text/1"], count);
  _count$if_content_effect(_scope);
}, _scope => _scope._._));
const _setup$if_content2 = _scope => {
  _count$if_content._(_scope, _scope._._["count"]);
};
const _if_content2 = /* @__PURE__ */_$.createRenderer("<button id=count> </button>", /* get, next(1), get */" D ", _setup$if_content2);
const _if$if_content = /* @__PURE__ */_$.conditional("#text/1", _if_content2);
const _inner$if_content_effect = _$.effect("__tests__/template.marko_1_inner", (_scope, {
  _: {
    inner
  }
}) => _$.on(_scope["#button/0"], "click", function () {
  _inner(_scope._, !inner);
}));
const _inner$if_content = /* @__PURE__ */_$.conditionalClosure("#text/1", 0, (_scope, inner) => {
  _inner$if_content_effect(_scope);
  _if$if_content(_scope, inner ? 0 : 1);
}, () => _if$if_content);
const _setup$if_content = _scope => {
  _inner$if_content._(_scope, _scope._["inner"]);
};
const _if_content = /* @__PURE__ */_$.createRenderer("<button id=inner></button><!><!>", /* get, over(1), replace */" b%D", _setup$if_content);
const _if = /* @__PURE__ */_$.conditional("#text/1", _if_content);
const _count = /* @__PURE__ */_$.state("count", (_scope, count) => _count$if_content(_scope, count));
const _inner = /* @__PURE__ */_$.state("inner", (_scope, inner) => _inner$if_content(_scope, inner));
const _outer_effect = _$.effect("__tests__/template.marko_0_outer", (_scope, {
  outer
}) => _$.on(_scope["#button/0"], "click", function () {
  _outer(_scope, !outer);
}));
const _outer = /* @__PURE__ */_$.state("outer", (_scope, outer) => {
  _outer_effect(_scope);
  _if(_scope, outer ? 0 : 1);
}, () => _if);
export function _setup_(_scope) {
  _outer(_scope, true);
  _inner(_scope, true);
  _count(_scope, 0);
}
export default /* @__PURE__ */_$.createTemplate("__tests__/template.marko", _template_, _walks_, _setup_);
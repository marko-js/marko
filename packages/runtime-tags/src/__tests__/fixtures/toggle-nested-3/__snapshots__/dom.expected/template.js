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
const _count$if_content = /* @__PURE__ */_$.dynamicClosureRead("count", (_scope, count) => {
  _$.data(_scope["#text/1"], count);
  _count$if_content_effect(_scope);
}, _scope => _scope._._);
const _if_content2 = /* @__PURE__ */_$.createRenderer("<button id=count> </button>", /* get, next(1), get */" D ", 0, 0, _scope => _count$if_content(_scope));
const _if$if_content = /* @__PURE__ */_$.conditional("#text/1", _if_content2);
const _inner$if_content_effect = _$.effect("__tests__/template.marko_1_inner", (_scope, {
  _: {
    inner
  }
}) => _$.on(_scope["#button/0"], "click", function () {
  _inner(_scope._, !inner);
}));
const _inner$if_content = /* @__PURE__ */_$.conditionalClosure("inner", "#text/1", 0, (_scope, inner) => {
  _if$if_content(_scope, inner ? 0 : 1);
  _inner$if_content_effect(_scope);
});
const _if_content = /* @__PURE__ */_$.createRenderer("<button id=inner></button><!><!>", /* get, over(1), replace */" b%D", 0, 0, _scope => _inner$if_content._(_scope));
const _if = /* @__PURE__ */_$.conditional("#text/1", _if_content);
const _count_closure = /* @__PURE__ */_$.dynamicClosure(_count$if_content);
const _count = /* @__PURE__ */_$.state("count/4", (_scope, count) => _count_closure(_scope));
const _inner = /* @__PURE__ */_$.state("inner/3", (_scope, inner) => _inner$if_content(_scope));
const _outer_effect = _$.effect("__tests__/template.marko_0_outer", (_scope, {
  outer
}) => _$.on(_scope["#button/0"], "click", function () {
  _outer(_scope, !outer);
}));
const _outer = /* @__PURE__ */_$.state("outer/2", (_scope, outer) => {
  _if(_scope, outer ? 0 : 1);
  _outer_effect(_scope);
});
export function _setup_(_scope) {
  _outer(_scope, true);
  _inner(_scope, true);
  _count(_scope, 0);
}
export default /* @__PURE__ */_$.createTemplate("__tests__/template.marko", _template_, _walks_, _setup_);
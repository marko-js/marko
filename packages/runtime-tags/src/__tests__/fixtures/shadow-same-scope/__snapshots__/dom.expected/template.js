export const _template = "<div><button> </button><div><button> </button><div><button> </button></div></div></div><div><button> </button></div>";
export const _walks = /* next(1), get, next(1), get, out(1), next(1), get, next(1), get, out(1), next(1), get, next(1), get, out(4), next(1), get, next(1), get, out(2) */"D D lD D lD D oD D m";
import * as _$ from "@marko/runtime-tags/debug/dom";
const _count7_effect = _$.effect("__tests__/template.marko_0__count3", (_scope, {
  _count3
}) => _$.on(_scope["#button/6"], "click", function () {
  _count7(_scope, _count3 + 1), _count3;
}));
const _count7 = /* @__PURE__ */_$.state("_count3/11", (_scope, _count3) => {
  _$.data(_scope["#text/7"], _count3);
  _count7_effect(_scope);
});
const _count6_effect = _$.effect("__tests__/template.marko_0__count2", (_scope, {
  _count2
}) => _$.on(_scope["#button/4"], "click", function () {
  _count6(_scope, _count2 + 1), _count2;
}));
const _count6 = /* @__PURE__ */_$.state("_count2/10", (_scope, _count2) => {
  _$.data(_scope["#text/5"], _count2);
  _count6_effect(_scope);
});
const _count5_effect = _$.effect("__tests__/template.marko_0__count", (_scope, {
  _count
}) => _$.on(_scope["#button/2"], "click", function () {
  _count5(_scope, _count + 1), _count;
}));
const _count5 = /* @__PURE__ */_$.state("_count/9", (_scope, _count) => {
  _$.data(_scope["#text/3"], _count);
  _count5_effect(_scope);
});
const _count4_effect = _$.effect("__tests__/template.marko_0_count", (_scope, {
  count
}) => _$.on(_scope["#button/0"], "click", function () {
  _count4(_scope, count + 1), count;
}));
const _count4 = /* @__PURE__ */_$.state("count/8", (_scope, count) => {
  _$.data(_scope["#text/1"], count);
  _count4_effect(_scope);
});
export function _setup(_scope) {
  _count4(_scope, 0);
  _count5(_scope, 0);
  _count6(_scope, 0);
  _count7(_scope, 0);
}
export default /* @__PURE__ */_$.createTemplate("__tests__/template.marko", _template, _walks, _setup);
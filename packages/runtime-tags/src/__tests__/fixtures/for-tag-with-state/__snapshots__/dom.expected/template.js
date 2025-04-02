export const _template = "<!><!><!><!>";
export const _walks = /* replace, over(1), replace, over(1) */"D%b%bD";
import * as _$ from "@marko/runtime-tags/debug/dom";
const _i$for_content2 = /* @__PURE__ */_$.value("i", (_scope, i) => _$.data(_scope["#text/0"], i));
const _val$for_content2 = /* @__PURE__ */_$.value("val", (_scope, val) => _$.data(_scope["#text/1"], val));
const _params3$for_content = /* @__PURE__ */_$.value("_params3", (_scope, _params3) => {
  _val$for_content2(_scope, _params3[0]);
  _i$for_content2(_scope, _params3[1]);
});
const _for_content2 = /* @__PURE__ */_$.createRenderer("<div><!>: <!></div>", /* next(1), replace, over(2), replace */"D%c%", 0, _params3$for_content);
const _i$for_content = /* @__PURE__ */_$.value("i", (_scope, i) => _$.data(_scope["#text/0"], i));
const _val$for_content = /* @__PURE__ */_$.value("val", (_scope, val) => _$.data(_scope["#text/1"], val));
const _params2$for_content = /* @__PURE__ */_$.value("_params2", (_scope, _params2) => {
  _val$for_content(_scope, _params2[0]);
  _i$for_content(_scope, _params2[1]);
});
const _for_content = /* @__PURE__ */_$.createRenderer("<div><!>: <!></div>", /* next(1), replace, over(2), replace */"D%c%", 0, _params2$for_content);
const _for2 = /* @__PURE__ */_$.loopOf("#text/1", _for_content2);
const _for = /* @__PURE__ */_$.loopOf("#text/0", _for_content);
const _arrB = /* @__PURE__ */_$.state("arrB/3", (_scope, arrB) => _for2(_scope, [arrB]));
const _arrA = /* @__PURE__ */_$.value("arrA", (_scope, arrA) => _for(_scope, [arrA]));
export function _setup(_scope) {
  _arrA(_scope, [1, 2, 3]);
  _arrB(_scope, [1, 2, 3]);
}
export default /* @__PURE__ */_$.createTemplate("__tests__/template.marko", _template, _walks, _setup);
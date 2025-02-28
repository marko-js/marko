export const _template_ = "<!><!><!>";
export const _walks_ = /* replace, over(1) */"D%bD";
import * as _$ from "@marko/runtime-tags/debug/dom";
const _setup$if_content_effect = _$.effect("__tests__/template.marko_1", _scope => _$.on(_scope["#button/0"], "click", function () {
  _hide(_scope._, true);
}));
const _setup$if_content = _scope => {
  _setup$if_content_effect(_scope);
};
const _if_content = /* @__PURE__ */_$.createRenderer("<button></button>", /* get */" ", _setup$if_content);
const _if = /* @__PURE__ */_$.conditional("#text/0", _if_content);
const _hide = /* @__PURE__ */_$.state("hide/1", (_scope, hide) => _if(_scope, !hide ? 0 : 1));
export function _setup_(_scope) {
  _hide(_scope, undefined);
}
export default /* @__PURE__ */_$.createTemplate("__tests__/template.marko", _template_, _walks_, _setup_);
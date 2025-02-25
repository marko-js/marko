export const _template_ = "<!><!><!>";
export const _walks_ = /* replace, over(1) */"D%bD";
import * as _$ from "@marko/runtime-tags/debug/dom";
const _hoist_el = _$.register("__tests__/template.marko_0/_hoisted_el", _$.hoist("#div/0>", "#text/0!"));
const _if_content = /* @__PURE__ */_$.createRenderer("<div></div>", /* get */" ");
const _if = /* @__PURE__ */_$.conditional("#text/0", _if_content);
const _hoisted_el_effect = _$.effect("__tests__/template.marko_0__hoisted_el", ({
  _hoisted_el
}) => {
  {
    const first = _hoisted_el();
    if (first) {
      first.innerHTML = 'Hello World';
    }
  }
});
const _hoisted_el = /* @__PURE__ */_$.value("_hoisted_el", (_scope, _hoisted_el) => _hoisted_el_effect(_scope));
export function _setup_(_scope) {
  _hoisted_el(_scope, _hoist_el(_scope));
  _if(_scope, true ? 0 : 1);
}
export default /* @__PURE__ */_$.createTemplate("__tests__/template.marko", _template_, _walks_, _setup_);
export const _template_ = "<!><!><!>";
export const _walks_ = /* replace, over(1) */"D%bD";
import * as _$ from "@marko/runtime-tags/debug/dom";
const _hoist_el = _$.register("__tests__/template.marko_0/_hoisted_el", _$.hoist("#div/0>", "#text/0!", "#text/0!"));
const _if_content2 = /* @__PURE__ */_$.createRenderer("<div></div>", /* get */" ");
const _if$if_content = /* @__PURE__ */_$.conditional("#text/0", _if_content2);
const _input_show$if_content = /* @__PURE__ */_$.conditionalClosure("input_show", "#text/0", 0, (_scope, input_show) => _if$if_content(_scope, input_show ? 0 : 1));
const _setup$if_content = _scope => {
  _input_show$if_content._(_scope);
};
const _if_content = /* @__PURE__ */_$.createRenderer("<!><!><!>", /* replace */"D%D", _setup$if_content);
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
export const _input_show_ = /* @__PURE__ */_$.value("input_show", (_scope, input_show) => {
  _if(_scope, input_show ? 0 : 1);
  _input_show$if_content(_scope);
}, () => _if);
export const _input_ = /* @__PURE__ */_$.value("input", (_scope, input) => _input_show_(_scope, input.show), () => _input_show_);
export const _params__ = /* @__PURE__ */_$.value("_params_", (_scope, _params_) => _input_(_scope, _params_[0]), () => _input_);
export function _setup_(_scope) {
  _hoisted_el(_scope, _hoist_el(_scope));
}
export default /* @__PURE__ */_$.createTemplate("__tests__/template.marko", _template_, _walks_, _setup_, () => _params__);
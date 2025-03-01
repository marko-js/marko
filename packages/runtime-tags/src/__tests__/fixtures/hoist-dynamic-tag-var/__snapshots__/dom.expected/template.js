export const _template_ = `<!><!>${_thing_template}<!><!><!><!>`;
export const _walks_ = /* replace, over(1), beginChild, _thing_walks, endChild, replace, over(1), replace, over(1), replace, over(1) */`D%b/${_thing_walks}&%b%b%bD`;
import Child from "./tags/child.marko";
import { _setup_ as _thing, _input_value_ as _thing_input_value, _template_ as _thing_template, _walks_ as _thing_walks } from "./tags/thing.marko";
import * as _$ from "@marko/runtime-tags/debug/dom";
const _setup$if_content5_effect = _$.effect("__tests__/template.marko_5", _scope => _get_hoisted_setHtml(_scope._)("Hello world"));
const _setup$if_content5 = _scope => {
  _setup$if_content5_effect(_scope);
};
const _if_content5 = /* @__PURE__ */_$.createRenderer(void 0, void 0, _setup$if_content5);
const _get_hoisted_setHtml = _$.hoist("setHtml3", "#text/3!");
const _dynamicTag$if_content3 = /* @__PURE__ */_$.dynamicTag("#text/0", 0, () => _setHtml3$if_content);
const _setHtml3$if_content = _$.registerBoundSignal("__tests__/template.marko_4_setHtml3/var", /* @__PURE__ */_$.value("setHtml3"));
const _setup$if_content4 = _scope => {
  _dynamicTag$if_content3(_scope, 1 && Child);
};
const _if_content4 = /* @__PURE__ */_$.createRenderer("<!><!><!>", /* dynamicTagWithVar */"D1D", _setup$if_content4);
const _get_hoisted_setHtml2 = _$.hoist("setHtml2", "#text/2!");
const _dynamicTag$if_content2 = /* @__PURE__ */_$.dynamicTag("#text/0", 0, () => _setHtml2$if_content);
const _setHtml2$if_content = _$.registerBoundSignal("__tests__/template.marko_3_setHtml2/var", /* @__PURE__ */_$.value("setHtml2"));
const _setup$if_content3 = _scope => {
  _dynamicTag$if_content2(_scope, 1 && Child);
};
const _if_content3 = /* @__PURE__ */_$.createRenderer("<!><!><!>", /* dynamicTagWithVar */"D1D", _setup$if_content3);
const _get_hoisted_setHtml3 = _$.register("__tests__/template.marko_0/_hoisted_setHtml", _$.hoist("setHtml", "#text/0!", "#text/0!"));
const _dynamicTag$if_content = /* @__PURE__ */_$.dynamicTag("#text/0", 0, () => _setHtml$if_content);
const _setHtml$if_content = _$.registerBoundSignal("__tests__/template.marko_2_setHtml/var", /* @__PURE__ */_$.value("setHtml"));
const _setup$if_content = _scope => {
  _dynamicTag$if_content(_scope, 1 && Child);
};
const _if_content2 = /* @__PURE__ */_$.createRenderer("<!><!><!>", /* dynamicTagWithVar */"D1D", _setup$if_content);
const _if$if_content = /* @__PURE__ */_$.conditional("#text/0", _if_content2);
const _input_show$if_content = /* @__PURE__ */_$.conditionalClosure("input_show", "#text/0", 0, (_scope, input_show) => _if$if_content(_scope, input_show ? 0 : 1));
const _setup$if_content2 = _scope => {
  _input_show$if_content._(_scope);
};
const _if_content = /* @__PURE__ */_$.createRenderer("<!><!><!>", /* replace */"D%D", _setup$if_content2);
const _if4 = /* @__PURE__ */_$.conditional("#text/4", _if_content5);
const _if3 = /* @__PURE__ */_$.conditional("#text/3", _if_content4);
const _if2 = /* @__PURE__ */_$.conditional("#text/2", _if_content3);
const _if = /* @__PURE__ */_$.conditional("#text/0", _if_content);
const _hoisted_setHtml = /* @__PURE__ */_$.value("_hoisted_setHtml", (_scope, _hoisted_setHtml) => _thing_input_value(_scope["#childScope/1"], _hoisted_setHtml));
export const _input_show_ = /* @__PURE__ */_$.value("input_show", (_scope, input_show) => {
  _if(_scope, input_show ? 0 : 1);
  _input_show$if_content(_scope);
});
export const _input_ = /* @__PURE__ */_$.value("input", (_scope, input) => _input_show_(_scope, input.show));
export const _params__ = /* @__PURE__ */_$.value("_params_", (_scope, _params_) => _input_(_scope, _params_[0]));
const _setup__effect = _$.effect("__tests__/template.marko_0", _scope => {
  _get_hoisted_setHtml3(_scope)("Hello world");
  _get_hoisted_setHtml2(_scope)("Hello world");
});
export function _setup_(_scope) {
  _thing(_scope["#childScope/1"]);
  _if2(_scope, true ? 0 : 1);
  _if3(_scope, true ? 0 : 1);
  _if4(_scope, true ? 0 : 1);
  _hoisted_setHtml(_scope, _get_hoisted_setHtml3(_scope));
  _setup__effect(_scope);
}
export default /* @__PURE__ */_$.createTemplate("__tests__/template.marko", _template_, _walks_, _setup_, () => _params__);
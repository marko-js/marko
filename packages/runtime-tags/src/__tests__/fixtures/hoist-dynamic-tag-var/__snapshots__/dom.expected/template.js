export const _template = `<!><!>${_thing_template}<!><!><!><!>`;
export const _walks = /* replace, over(1), beginChild, _thing_walks, endChild, replace, over(1), replace, over(1), replace, over(1) */`D%b/${_thing_walks}&%b%b%bD`;
import Child from "./tags/child.marko";
import { _setup as _thing, _input_value as _thing_input_value, _template as _thing_template, _walks as _thing_walks } from "./tags/thing.marko";
import * as _$ from "@marko/runtime-tags/debug/dom";
const _setup$if_content4_effect = _$.effect("__tests__/template.marko_5", _scope => _get_hoisted_setHtml(_scope._)("Hello world"));
const _setup$if_content4 = _setup$if_content4_effect;
const _if_content5 = /* @__PURE__ */_$.createRenderer(0, 0, _setup$if_content4);
const _get_hoisted_setHtml = _$.hoist("setHtml3", "ConditionalScope:#text/3");
const _dynamicTag$if_content3 = /* @__PURE__ */_$.dynamicTag("#text/0", 0, () => _setHtml3$if_content);
const _setHtml3$if_content = _$.registerBoundSignal("__tests__/template.marko_4_setHtml3/var", /* @__PURE__ */_$.value("setHtml3"));
const _setup$if_content3 = _scope => {
  _dynamicTag$if_content3(_scope, 1 && Child);
};
const _if_content4 = /* @__PURE__ */_$.createRenderer("<!><!><!>", /* dynamicTagWithVar */"D1D", _setup$if_content3);
const _get_hoisted_setHtml2 = _$.hoist("setHtml2", "ConditionalScope:#text/2");
const _dynamicTag$if_content2 = /* @__PURE__ */_$.dynamicTag("#text/0", 0, () => _setHtml2$if_content);
const _setHtml2$if_content = _$.registerBoundSignal("__tests__/template.marko_3_setHtml2/var", /* @__PURE__ */_$.value("setHtml2"));
const _setup$if_content2 = _scope => {
  _dynamicTag$if_content2(_scope, 1 && Child);
};
const _if_content3 = /* @__PURE__ */_$.createRenderer("<!><!><!>", /* dynamicTagWithVar */"D1D", _setup$if_content2);
const _get_hoisted_setHtml3 = _$.register("__tests__/template.marko_0__hoisted_setHtml/hoist", _$.hoist("setHtml", "ConditionalScope:#text/0", "ConditionalScope:#text/0"));
const _dynamicTag$if_content = /* @__PURE__ */_$.dynamicTag("#text/0", 0, () => _setHtml$if_content);
const _setHtml$if_content = _$.registerBoundSignal("__tests__/template.marko_2_setHtml/var", /* @__PURE__ */_$.value("setHtml"));
const _setup$if_content = _scope => {
  _dynamicTag$if_content(_scope, 1 && Child);
};
const _if_content2 = /* @__PURE__ */_$.createRenderer("<!><!><!>", /* dynamicTagWithVar */"D1D", _setup$if_content);
const _if$if_content = /* @__PURE__ */_$.conditional("#text/0", _if_content2);
const _input_show$if_content = /* @__PURE__ */_$.conditionalClosure("input_show", "#text/0", 0, (_scope, input_show) => _if$if_content(_scope, input_show ? 0 : 1));
const _if_content = /* @__PURE__ */_$.createRenderer("<!><!><!>", /* replace */"D%D", 0, 0, _scope => _input_show$if_content._(_scope));
const _if4 = /* @__PURE__ */_$.conditional("#text/4", _if_content5);
const _if3 = /* @__PURE__ */_$.conditional("#text/3", _if_content4);
const _if2 = /* @__PURE__ */_$.conditional("#text/2", _if_content3);
const _if = /* @__PURE__ */_$.conditional("#text/0", _if_content);
const _hoisted_setHtml4 = /* @__PURE__ */_$.value("_hoisted_setHtml", (_scope, _hoisted_setHtml) => _thing_input_value(_scope["#childScope/1"], _hoisted_setHtml));
export const _input_show = /* @__PURE__ */_$.value("input_show", (_scope, input_show) => {
  _if(_scope, input_show ? 0 : 1);
  _input_show$if_content(_scope);
});
export const _input = /* @__PURE__ */_$.value("input", (_scope, input) => _input_show(_scope, input.show));
const _setup_effect = _$.effect("__tests__/template.marko_0", _scope => {
  _get_hoisted_setHtml3(_scope)("Hello world");
  _get_hoisted_setHtml2(_scope)("Hello world");
});
export function _setup(_scope) {
  _thing(_scope["#childScope/1"]);
  _if2(_scope, true ? 0 : 1);
  _if3(_scope, true ? 0 : 1);
  _if4(_scope, true ? 0 : 1);
  _hoisted_setHtml4(_scope, _get_hoisted_setHtml3(_scope));
  _setup_effect(_scope);
}
export default /* @__PURE__ */_$.createTemplate("__tests__/template.marko", _template, _walks, _setup, _input);
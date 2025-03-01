export const _template_ = `<!>${_thing_template}<!><!><!>`;
export const _walks_ = /* beginChild, _thing_walks, endChild, replace, over(1), replace, over(1) */`D/${_thing_walks}&%b%bD`;
import Thing from "./tags/thing.marko";
import { _setup_ as _child, _template_ as _child_template, _walks_ as _child_walks } from "./tags/child.marko";
import * as _$ from "@marko/runtime-tags/debug/dom";
import { _setup_ as _thing, _input_content_ as _thing_input_content, _template_ as _thing_template, _walks_ as _thing_walks } from "./tags/thing.marko";
const _get_hoisted_setHtml = _$.hoist("setHtml3", "#text/2?");
const _setHtml3$inputShowSectionNull_content = _$.registerBoundSignal("__tests__/template.marko_4_setHtml3/var", /* @__PURE__ */_$.value("setHtml3"));
const _setup$inputShowSectionNull_content = _scope => {
  _$.setTagVar(_scope, "#childScope/0", _setHtml3$inputShowSectionNull_content);
  _child(_scope["#childScope/0"]);
};
const _inputShowSectionNull_content = _$.registerContent("__tests__/template.marko_4_renderer", _child_template, /* beginChildWithVar, _child_walks, endChild */`0${_child_walks}&`, _setup$inputShowSectionNull_content, 0, "#text/2?");
const _get_hoisted_setHtml2 = _$.hoist("setHtml2", "#childScope/0?", "#text/1?");
const _setHtml2$thing_content = _$.registerBoundSignal("__tests__/template.marko_3_setHtml2/var", /* @__PURE__ */_$.value("setHtml2"));
const _setup$thing_content2 = _scope => {
  _$.setTagVar(_scope, "#childScope/0", _setHtml2$thing_content);
  _child(_scope["#childScope/0"]);
};
const _thing_content2 = _$.registerContent("__tests__/template.marko_3_renderer", _child_template, /* beginChildWithVar, _child_walks, endChild */`0${_child_walks}&`, _setup$thing_content2, 0, "#childScope/0?");
const _setup$inputShowThingNull_content = _scope => {
  _thing(_scope["#childScope/0"]);
  _thing_input_content(_scope["#childScope/0"], _thing_content2(_scope));
};
const _inputShowThingNull_content = _$.registerContent("__tests__/template.marko_2_renderer", `<!>${_thing_template}<!>`, /* beginChild, _thing_walks, endChild */`D/${_thing_walks}&D`, _setup$inputShowThingNull_content, 0, "#text/1?");
const _get_hoisted_setHtml3 = _$.register("__tests__/template.marko_0/_hoisted_setHtml", _$.hoist("setHtml", "#childScope/0?"));
const _setHtml$thing_content = _$.registerBoundSignal("__tests__/template.marko_1_setHtml/var", /* @__PURE__ */_$.value("setHtml"));
const _setup$thing_content = _scope => {
  _$.setTagVar(_scope, "#childScope/0", _setHtml$thing_content);
  _child(_scope["#childScope/0"]);
};
const _thing_content = _$.registerContent("__tests__/template.marko_1_renderer", _child_template, /* beginChildWithVar, _child_walks, endChild */`0${_child_walks}&`, _setup$thing_content, 0, "#childScope/0?");
const _dynamicTag2 = /* @__PURE__ */_$.dynamicTag("#text/2", _inputShowSectionNull_content);
const _dynamicTag = /* @__PURE__ */_$.dynamicTag("#text/1", _inputShowThingNull_content);
const _hoisted_setHtml_effect = _$.effect("__tests__/template.marko_0__hoisted_setHtml", ({
  _hoisted_setHtml
}) => {
  for (const fn of _hoisted_setHtml) {
    fn('Hoist from custom tag');
  }
});
const _hoisted_setHtml = /* @__PURE__ */_$.value("_hoisted_setHtml", (_scope, _hoisted_setHtml) => _hoisted_setHtml_effect(_scope));
export const _input_show_ = /* @__PURE__ */_$.value("input_show", (_scope, input_show) => {
  _dynamicTag(_scope, input_show ? Thing : null);
  _dynamicTag2(_scope, input_show ? 'section' : null);
});
export const _input_ = /* @__PURE__ */_$.value("input", (_scope, input) => _input_show_(_scope, input.show));
export const _params__ = /* @__PURE__ */_$.value("_params_", (_scope, _params_) => _input_(_scope, _params_[0]));
const _setup__effect = _$.effect("__tests__/template.marko_0", _scope => {
  _get_hoisted_setHtml2(_scope)('Hoist from dynamic tag');
  _get_hoisted_setHtml(_scope)('Hoist from dynamic tag');
});
export function _setup_(_scope) {
  _thing(_scope["#childScope/0"]);
  _thing_input_content(_scope["#childScope/0"], _thing_content(_scope));
  _hoisted_setHtml(_scope, _get_hoisted_setHtml3(_scope));
  _setup__effect(_scope);
}
export default /* @__PURE__ */_$.createTemplate("__tests__/template.marko", _template_, _walks_, _setup_, () => _params__);
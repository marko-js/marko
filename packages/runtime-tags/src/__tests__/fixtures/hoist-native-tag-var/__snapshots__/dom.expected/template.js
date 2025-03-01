export const _template_ = `<!><!>${_child_template}<hr><!><!>`;
export const _walks_ = /* replace, over(1), beginChild, _child_walks, endChild, over(1), replace, over(1) */`D%b/${_child_walks}&b%bD`;
import * as _$ from "@marko/runtime-tags/debug/dom";
const _get_el = _$.nodeRef("__tests__/template.marko_2/#div", "#div/0>");
import { _setup_ as _child, _input_ as _child_input, _template_ as _child_template, _walks_ as _child_walks } from "./tags/child.marko";
const _get_hoisted_el = _$.hoist("#div/0>", "#text/2!");
const _if_content3 = /* @__PURE__ */_$.createRenderer("<div></div>", /* get */" ");
const _get_hoisted_el2 = _$.register("__tests__/template.marko_0/_hoisted_el", _$.hoist("#div/0>", "#text/0!", "#text/0!"));
const _setup$if_content = _scope => {
  _child(_scope["#childScope/1"]);
  _child_input(_scope["#childScope/1"], {
    value: _get_el(_scope)
  });
};
const _if_content2 = /* @__PURE__ */_$.createRenderer(`<div></div>${_child_template}`, /* get, over(1), beginChild, _child_walks, endChild */` b/${_child_walks}&`, _setup$if_content);
const _if$if_content = /* @__PURE__ */_$.conditional("#text/0", _if_content2);
const _input_show$if_content = /* @__PURE__ */_$.conditionalClosure("input_show", "#text/0", 0, (_scope, input_show) => _if$if_content(_scope, input_show ? 0 : 1));
const _setup$if_content2 = _scope => {
  _input_show$if_content._(_scope);
};
const _if_content = /* @__PURE__ */_$.createRenderer("<!><!><!>", /* replace */"D%D", _setup$if_content2);
const _if2 = /* @__PURE__ */_$.conditional("#text/2", _if_content3);
const _if = /* @__PURE__ */_$.conditional("#text/0", _if_content);
const _hoisted_el = /* @__PURE__ */_$.value("_hoisted_el", (_scope, _hoisted_el) => _child_input(_scope["#childScope/1"], {
  value: _hoisted_el
}));
export const _input_show_ = /* @__PURE__ */_$.value("input_show", (_scope, input_show) => {
  _if(_scope, input_show ? 0 : 1);
  _input_show$if_content(_scope);
});
export const _input_ = /* @__PURE__ */_$.value("input", (_scope, input) => _input_show_(_scope, input.show));
export const _params__ = /* @__PURE__ */_$.value("_params_", (_scope, _params_) => _input_(_scope, _params_[0]));
const _setup__effect = _$.effect("__tests__/template.marko_0", _scope => {
  {
    const first = _get_hoisted_el2(_scope)();
    if (first) {
      first.innerHTML = 'Hello World';
    }
  }
  {
    const first = _get_hoisted_el(_scope)();
    if (first) {
      first.innerHTML = 'Hello World';
    }
  }
});
export function _setup_(_scope) {
  _child(_scope["#childScope/1"]);
  _if2(_scope, true ? 0 : 1);
  _hoisted_el(_scope, _get_hoisted_el2(_scope));
  _setup__effect(_scope);
}
export default /* @__PURE__ */_$.createTemplate("__tests__/template.marko", _template_, _walks_, _setup_, () => _params__);
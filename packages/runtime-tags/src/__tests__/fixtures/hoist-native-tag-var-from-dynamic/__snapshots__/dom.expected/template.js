export const _template_ = `<!>${_child_template}<!><!><!>`;
export const _walks_ = /* beginChild, _child_walks, endChild, replace, over(1), replace, over(1) */`D/${_child_walks}&%b%bD`;
import Child from "./tags/child.marko";
import { _setup_ as _child, _input_content_ as _child_input_content, _template_ as _child_template, _walks_ as _child_walks } from "./tags/child.marko";
import * as _$ from "@marko/runtime-tags/debug/dom";
const _get_hoisted_el = _$.hoist("Getter:#p/0", "ClosureScopes:4");
const _inputShowSectionNull_content = _$.registerContent("__tests__/template.marko_4_renderer", "<p></p>", /* get */" ", 0, 0, 0, "ClosureScopes:4");
const _get_hoisted_el2 = _$.register("__tests__/template.marko_2__hoisted_el2/hoist", _$.hoist("Getter:#div/0", "ClosureScopes:3"));
const _get_hoisted_el3 = _$.register("__tests__/template.marko_0__hoisted_el3/hoist", _$.hoist("Getter:#div/0", "ClosureScopes:3", "ClosureScopes:2"));
const _child_content2 = /* @__PURE__ */_$.createContent("__tests__/template.marko_3_renderer", "<div></div>", /* get */" ", 0, 0, 0, "ClosureScopes:3");
const _hoisted_el2$inputShowChildNull_content_effect = _$.effect("__tests__/template.marko_2__hoisted_el2", ({
  _hoisted_el2
}) => {
  for (const element of _hoisted_el2) {
    element().classList.add('inner');
  }
});
const _hoisted_el2$inputShowChildNull_content = /* @__PURE__ */_$.value("_hoisted_el2", _scope => _hoisted_el2$inputShowChildNull_content_effect(_scope));
const _setup$inputShowChildNull_content = _scope => {
  _child(_scope["#childScope/0"]);
  _child_input_content(_scope["#childScope/0"], _child_content2(_scope));
  _hoisted_el2$inputShowChildNull_content(_scope, _get_hoisted_el2(_scope));
};
const _inputShowChildNull_content = _$.registerContent("__tests__/template.marko_2_renderer", `<!>${_child_template}<!>`, /* beginChild, _child_walks, endChild */`D/${_child_walks}&D`, _setup$inputShowChildNull_content, 0, 0, "ClosureScopes:2");
const _get_hoisted_el4 = _$.register("__tests__/template.marko_0__hoisted_el/hoist", _$.hoist("Getter:#span/0", "ClosureScopes:1"));
const _child_content = /* @__PURE__ */_$.createContent("__tests__/template.marko_1_renderer", "<span></span>", /* get */" ", 0, 0, 0, "ClosureScopes:1");
const _dynamicTag2 = /* @__PURE__ */_$.dynamicTag("#text/2", _inputShowSectionNull_content);
const _dynamicTag = /* @__PURE__ */_$.dynamicTag("#text/1", _inputShowChildNull_content);
const _hoisted_el2_effect = _$.effect("__tests__/template.marko_0__hoisted_el3", ({
  _hoisted_el3
}) => {
  for (const element of _hoisted_el3) {
    element().classList.add('outer');
  }
});
const _hoisted_el2 = /* @__PURE__ */_$.value("_hoisted_el3", _scope => _hoisted_el2_effect(_scope));
const _hoisted_el_effect = _$.effect("__tests__/template.marko_0__hoisted_el", ({
  _hoisted_el
}) => {
  for (const element of _hoisted_el) {
    element().innerHTML = 'Hoist from custom tag';
  }
});
const _hoisted_el = /* @__PURE__ */_$.value("_hoisted_el", _scope => _hoisted_el_effect(_scope));
export const _input_show_ = /* @__PURE__ */_$.value("input_show", (_scope, input_show) => {
  _dynamicTag(_scope, input_show ? Child : null);
  _dynamicTag2(_scope, input_show ? 'section' : null);
});
export const _input_ = /* @__PURE__ */_$.value("input", (_scope, input) => _input_show_(_scope, input.show));
const _setup__effect = _$.effect("__tests__/template.marko_0", _scope => {
  {
    const element = _get_hoisted_el(_scope)();
    if (element) {
      element.innerHTML = 'Hoist from dynamic tag';
    }
  }
});
export function _setup_(_scope) {
  _child(_scope["#childScope/0"]);
  _child_input_content(_scope["#childScope/0"], _child_content(_scope));
  _hoisted_el2(_scope, _get_hoisted_el3(_scope));
  _hoisted_el(_scope, _get_hoisted_el4(_scope));
  _setup__effect(_scope);
}
export default /* @__PURE__ */_$.createTemplate("__tests__/template.marko", _template_, _walks_, _setup_, _input_);
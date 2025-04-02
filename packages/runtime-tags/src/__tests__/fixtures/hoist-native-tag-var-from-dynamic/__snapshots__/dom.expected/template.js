export const _template = `<!>${_child_template}<!><!><!>`;
export const _walks = /* beginChild, _child_walks, endChild, replace, over(1), replace, over(1) */`D/${_child_walks}&%b%bD`;
import Child from "./tags/child.marko";
import { _setup as _child, _input_content as _child_input_content, _template as _child_template, _walks as _child_walks } from "./tags/child.marko";
import * as _$ from "@marko/runtime-tags/debug/dom";
const _get_hoisted_el = _$.hoist("Getter:#p/0", "ClosureScopes:4");
const _inputshowsectionnull_content = _$.registerContent("__tests__/template.marko_4_renderer", "<p></p>", /* get */" ", 0, 0, 0, "ClosureScopes:4");
const _get_hoisted_el2 = _$.register("__tests__/template.marko_2__hoisted_el2/hoist", _$.hoist("Getter:#div/0", "ClosureScopes:3"));
const _get_hoisted_el3 = _$.register("__tests__/template.marko_0__hoisted_el3/hoist", _$.hoist("Getter:#div/0", "ClosureScopes:3", "ClosureScopes:2"));
const _child_content2 = /* @__PURE__ */_$.createContent("__tests__/template.marko_3_renderer", "<div></div>", /* get */" ", 0, 0, 0, "ClosureScopes:3");
const _hoisted_el2$inputshowChildnull_content_effect = _$.effect("__tests__/template.marko_2__hoisted_el2", ({
  _hoisted_el2
}) => {
  for (const element of _hoisted_el2) {
    element().classList.add('inner');
  }
});
const _hoisted_el2$inputshowChildnull_content = /* @__PURE__ */_$.value("_hoisted_el2", _hoisted_el2$inputshowChildnull_content_effect);
const _setup$inputshowChildnull_content = _scope => {
  _child(_scope["#childScope/0"]);
  _child_input_content(_scope["#childScope/0"], _child_content2(_scope));
  _hoisted_el2$inputshowChildnull_content(_scope, _get_hoisted_el2(_scope));
};
const _inputshowChildnull_content = _$.registerContent("__tests__/template.marko_2_renderer", `<!>${_child_template}<!>`, /* beginChild, _child_walks, endChild */`D/${_child_walks}&D`, _setup$inputshowChildnull_content, 0, 0, "ClosureScopes:2");
const _get_hoisted_el4 = _$.register("__tests__/template.marko_0__hoisted_el/hoist", _$.hoist("Getter:#span/0", "ClosureScopes:1"));
const _child_content = /* @__PURE__ */_$.createContent("__tests__/template.marko_1_renderer", "<span></span>", /* get */" ", 0, 0, 0, "ClosureScopes:1");
const _dynamicTag2 = /* @__PURE__ */_$.dynamicTag("#text/2", _inputshowsectionnull_content);
const _dynamicTag = /* @__PURE__ */_$.dynamicTag("#text/1", _inputshowChildnull_content);
const _hoisted_el6_effect = _$.effect("__tests__/template.marko_0__hoisted_el3", ({
  _hoisted_el3
}) => {
  for (const element of _hoisted_el3) {
    element().classList.add('outer');
  }
});
const _hoisted_el6 = /* @__PURE__ */_$.value("_hoisted_el3", _hoisted_el6_effect);
const _hoisted_el5_effect = _$.effect("__tests__/template.marko_0__hoisted_el", ({
  _hoisted_el
}) => {
  for (const element of _hoisted_el) {
    element().innerHTML = 'Hoist from custom tag';
  }
});
const _hoisted_el5 = /* @__PURE__ */_$.value("_hoisted_el", _hoisted_el5_effect);
export const _input_show = /* @__PURE__ */_$.value("input_show", (_scope, input_show) => {
  _dynamicTag(_scope, input_show ? Child : null);
  _dynamicTag2(_scope, input_show ? 'section' : null);
});
export const _input = /* @__PURE__ */_$.value("input", (_scope, input) => _input_show(_scope, input.show));
const _setup_effect = _$.effect("__tests__/template.marko_0", _scope => {
  {
    const element = _get_hoisted_el(_scope)();
    if (element) {
      element.innerHTML = 'Hoist from dynamic tag';
    }
  }
});
export function _setup(_scope) {
  _child(_scope["#childScope/0"]);
  _child_input_content(_scope["#childScope/0"], _child_content(_scope));
  _hoisted_el6(_scope, _get_hoisted_el3(_scope));
  _hoisted_el5(_scope, _get_hoisted_el4(_scope));
  _setup_effect(_scope);
}
export default /* @__PURE__ */_$.createTemplate("__tests__/template.marko", _template, _walks, _setup, _input);
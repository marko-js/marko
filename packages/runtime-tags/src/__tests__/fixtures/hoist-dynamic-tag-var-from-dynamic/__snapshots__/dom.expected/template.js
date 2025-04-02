export const _template = `<!>${_thing_template}<!><!><!>`;
export const _walks = /* beginChild, _thing_walks, endChild, replace, over(1), replace, over(1) */`D/${_thing_walks}&%b%bD`;
import Child from "./tags/child.marko";
import Thing from "./tags/thing.marko";
import { _setup as _thing, _input_content as _thing_input_content, _template as _thing_template, _walks as _thing_walks } from "./tags/thing.marko";
import * as _$ from "@marko/runtime-tags/debug/dom";
const _get_hoisted_setHtml = _$.hoist("setHtml3", "ClosureScopes:4");
const _dynamicTag$inputshowsectionnull_content = /* @__PURE__ */_$.dynamicTag("#text/0", 0, () => _setHtml3$inputshowsectionnull_content);
const _setHtml3$inputshowsectionnull_content = _$.registerBoundSignal("__tests__/template.marko_4_setHtml3/var", /* @__PURE__ */_$.value("setHtml3"));
const _setup$inputshowsectionnull_content = _scope => {
  _dynamicTag$inputshowsectionnull_content(_scope, 1 && Child);
};
const _inputshowsectionnull_content = _$.registerContent("__tests__/template.marko_4_renderer", "<!><!><!>", /* dynamicTagWithVar */"D1D", _setup$inputshowsectionnull_content, 0, 0, "ClosureScopes:4");
const _get_hoisted_setHtml2 = _$.hoist("setHtml2", "ClosureScopes:3", "ClosureScopes:2");
const _dynamicTag$thing_content2 = /* @__PURE__ */_$.dynamicTag("#text/0", 0, () => _setHtml2$thing_content);
const _setHtml2$thing_content = _$.registerBoundSignal("__tests__/template.marko_3_setHtml2/var", /* @__PURE__ */_$.value("setHtml2"));
const _setup$thing_content2 = _scope => {
  _dynamicTag$thing_content2(_scope, 1 && Child);
};
const _thing_content2 = /* @__PURE__ */_$.createContent("__tests__/template.marko_3_renderer", "<!><!><!>", /* dynamicTagWithVar */"D1D", _setup$thing_content2, 0, 0, "ClosureScopes:3");
const _setup$inputshowThingnull_content = _scope => {
  _thing(_scope["#childScope/0"]);
  _thing_input_content(_scope["#childScope/0"], _thing_content2(_scope));
};
const _inputshowThingnull_content = _$.registerContent("__tests__/template.marko_2_renderer", `<!>${_thing_template}<!>`, /* beginChild, _thing_walks, endChild */`D/${_thing_walks}&D`, _setup$inputshowThingnull_content, 0, 0, "ClosureScopes:2");
const _get_hoisted_setHtml3 = _$.register("__tests__/template.marko_0__hoisted_setHtml/hoist", _$.hoist("setHtml", "ClosureScopes:1"));
const _dynamicTag$thing_content = /* @__PURE__ */_$.dynamicTag("#text/0", 0, () => _setHtml$thing_content);
const _setHtml$thing_content = _$.registerBoundSignal("__tests__/template.marko_1_setHtml/var", /* @__PURE__ */_$.value("setHtml"));
const _setup$thing_content = _scope => {
  _dynamicTag$thing_content(_scope, 1 && Child);
};
const _thing_content = /* @__PURE__ */_$.createContent("__tests__/template.marko_1_renderer", "<!><!><!>", /* dynamicTagWithVar */"D1D", _setup$thing_content, 0, 0, "ClosureScopes:1");
const _dynamicTag2 = /* @__PURE__ */_$.dynamicTag("#text/2", _inputshowsectionnull_content);
const _dynamicTag = /* @__PURE__ */_$.dynamicTag("#text/1", _inputshowThingnull_content);
const _hoisted_setHtml4_effect = _$.effect("__tests__/template.marko_0__hoisted_setHtml", ({
  _hoisted_setHtml
}) => {
  for (const fn of _hoisted_setHtml) {
    fn('Hoist from custom tag');
  }
});
const _hoisted_setHtml4 = /* @__PURE__ */_$.value("_hoisted_setHtml", _scope => _hoisted_setHtml4_effect(_scope));
export const _input_show = /* @__PURE__ */_$.value("input_show", (_scope, input_show) => {
  _dynamicTag(_scope, input_show ? Thing : null);
  _dynamicTag2(_scope, input_show ? 'section' : null);
});
export const _input = /* @__PURE__ */_$.value("input", (_scope, input) => _input_show(_scope, input.show));
const _setup_effect = _$.effect("__tests__/template.marko_0", _scope => {
  _get_hoisted_setHtml2(_scope)('Hoist from dynamic tag');
  _get_hoisted_setHtml(_scope)('Hoist from dynamic tag');
});
export function _setup(_scope) {
  _thing(_scope["#childScope/0"]);
  _thing_input_content(_scope["#childScope/0"], _thing_content(_scope));
  _hoisted_setHtml4(_scope, _get_hoisted_setHtml3(_scope));
  _setup_effect(_scope);
}
export default /* @__PURE__ */_$.createTemplate("__tests__/template.marko", _template, _walks, _setup, _input);
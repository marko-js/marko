export const _template_ = `<!>${_thing_template}<!>`;
export const _walks_ = /* beginChild, _thing_walks, endChild */`D/${_thing_walks}&D`;
import { _setup_ as _child, _template_ as _child_template, _walks_ as _child_walks } from "./tags/child.marko";
import * as _$ from "@marko/runtime-tags/debug/dom";
import { _setup_ as _thing, _input_what_ as _thing_input_what, _template_ as _thing_template, _walks_ as _thing_walks } from "./tags/thing.marko";
const _get_hoisted_setHtml = _$.register("__tests__/template.marko_0__hoisted_setHtml/hoist", _$.hoist("setHtml", "ClosureScopes:1"));
const _setHtml$what_content = _$.registerBoundSignal("__tests__/template.marko_1_setHtml/var", /* @__PURE__ */_$.value("setHtml"));
const _setup$what_content = _scope => {
  _$.setTagVar(_scope, "#childScope/0", _setHtml$what_content);
  _child(_scope["#childScope/0"]);
};
const _what_content = _$.registerContent("__tests__/template.marko_1_renderer", _child_template, /* beginChildWithVar, _child_walks, endChild */`0${_child_walks}&`, _setup$what_content, 0, 0, "ClosureScopes:1");
const _hoisted_setHtml_effect = _$.effect("__tests__/template.marko_0__hoisted_setHtml", ({
  _hoisted_setHtml
}) => {
  for (const fn of _hoisted_setHtml) {
    fn('Hoist from custom tag');
  }
});
const _hoisted_setHtml = /* @__PURE__ */_$.value("_hoisted_setHtml", (_scope, _hoisted_setHtml) => _hoisted_setHtml_effect(_scope));
export function _setup_(_scope) {
  _thing(_scope["#childScope/0"]);
  _thing_input_what(_scope["#childScope/0"], _$.attrTag({
    content: _what_content(_scope)
  }));
  _hoisted_setHtml(_scope, _get_hoisted_setHtml(_scope));
}
export default /* @__PURE__ */_$.createTemplate("__tests__/template.marko", _template_, _walks_, _setup_);
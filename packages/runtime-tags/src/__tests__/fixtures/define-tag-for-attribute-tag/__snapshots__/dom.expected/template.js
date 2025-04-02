export const _template = `${_child_template}<button>Toggle</button>`;
export const _walks = /* beginChild, _child_walks, endChild, get, over(1) */`/${_child_walks}& b`;
import { _setup as _child, _input_thing as _child_input_thing, _template as _child_template, _walks as _child_walks } from "./tags/child.marko";
import * as _$ from "@marko/runtime-tags/debug/dom";
const _define_content = /* @__PURE__ */_$.createContent("__tests__/template.marko_1_renderer", "<span>The thing</span>");
const _myThing = /* @__PURE__ */_$.value("myThing", (_scope, myThing) => _child_input_thing(_scope["#childScope/0"], myThing));
const _selected_effect = _$.effect("__tests__/template.marko_0_selected", (_scope, {
  selected
}) => _$.on(_scope["#button/1"], "click", function () {
  _selected(_scope, !selected);
}));
const _selected = /* @__PURE__ */_$.state("selected/2", (_scope, selected) => {
  _myThing(_scope, {
    selected: selected,
    content: _define_content(_scope)
  });
  _selected_effect(_scope);
});
export function _setup(_scope) {
  _child(_scope["#childScope/0"]);
  _selected(_scope, false);
}
export default /* @__PURE__ */_$.createTemplate("__tests__/template.marko", _template, _walks, _setup);
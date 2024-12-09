export const _template_ = `${_child_template}<button>Toggle</button>`;
export const _walks_ = /* beginChild, _child_walks, endChild, get, over(1) */`/${_child_walks}& b`;
import { _setup_ as _child, _input_thing_ as _child_input_thing, _template_ as _child_template, _walks_ as _child_walks } from "./components/child.marko";
import * as _$ from "@marko/runtime-tags/debug/dom";
const _defineBody = _$.register("packages/translator-tags/src/__tests__/fixtures/define-tag-for-attribute-tag/template.marko_1_renderer", /* @__PURE__ */_$.createRendererWithOwner("<span>The thing</span>", ""));
const _myThing = /* @__PURE__ */_$.value("myThing", (_scope, myThing) => _child_input_thing(_scope["#childScope/0"], myThing), () => _$.inChild("#childScope/0", _child_input_thing));
const _selected_effect = _$.effect("packages/translator-tags/src/__tests__/fixtures/define-tag-for-attribute-tag/template.marko_0_selected", (_scope, {
  selected
}) => _$.on(_scope["#button/1"], "click", function () {
  _selected(_scope, !selected);
}));
const _selected = /* @__PURE__ */_$.state("selected", (_scope, selected) => {
  _selected_effect(_scope);
  _myThing(_scope, {
    selected: selected,
    renderBody: _defineBody(_scope)
  });
}, () => _myThing);
export function _setup_(_scope) {
  _child(_scope["#childScope/0"]);
  _selected(_scope, false);
}
export default /* @__PURE__ */_$.createTemplate("packages/translator-tags/src/__tests__/fixtures/define-tag-for-attribute-tag/template.marko", _template_, _walks_, _setup_);
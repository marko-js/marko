export const _template_ = `${_child_template}<button>Toggle</button>`;
export const _walks_ = /* beginChild, _child_walks, endChild, get, over(1) */`/${_child_walks}& b`;
import { _setup_ as _child, _input_ as _child_input, _template_ as _child_template, _walks_ as _child_walks } from "./components/child.marko";
import { inChild as _inChild, on as _on, createRendererWithOwner as _createRendererWithOwner, register as _register, value as _value, effect as _effect, state as _state, createRenderer as _createRenderer, createTemplate as _createTemplate } from "@marko/runtime-tags/debug/dom";
const _defineBody = _register("packages/translator-tags/src/__tests__/fixtures/define-tag-for-attribute-tag/template.marko_1_renderer", /* @__PURE__ */_createRendererWithOwner("<span>The thing</span>", ""));
const _myThing = /* @__PURE__ */_value("myThing", (_scope, myThing) => _child_input(_scope["#childScope/0"], {
  thing: myThing
}), () => _inChild("#childScope/0", _child_input));
const _onClick = _scope => {
  const {
    selected
  } = _scope;
  return function () {
    _selected(_scope, !selected);
  };
};
const _selected_effect = _effect("packages/translator-tags/src/__tests__/fixtures/define-tag-for-attribute-tag/template.marko_0_selected", _scope => _on(_scope["#button/1"], "click", _onClick(_scope)));
const _selected = /* @__PURE__ */_state("selected", (_scope, selected) => {
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
export default /* @__PURE__ */_createTemplate(/* @__PURE__ */_createRenderer(_template_, _walks_, _setup_), "packages/translator-tags/src/__tests__/fixtures/define-tag-for-attribute-tag/template.marko");
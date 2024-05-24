import { bindRenderer as _bindRenderer, inChild as _inChild, on as _on, queueSource as _queueSource, createRenderer as _createRenderer, register as _register, value as _value, queueEffect as _queueEffect, createTemplate as _createTemplate } from "@marko/runtime-tags/debug/dom";
import { _setup_ as _child, _input_ as _child_input, _template_ as _child_template, _walks_ as _child_walks } from "./components/child.marko";
const _defineBody = _register("packages/translator-tags/src/__tests__/fixtures/define-tag-for-attribute-tag/template.marko_1_renderer", /* @__PURE__ */_createRenderer("<span>The thing</span>", ""));
const _myThing = /* @__PURE__ */_value("myThing", (_scope, myThing) => _child_input(_scope["#childScope/0"], {
  thing: myThing
}), void 0, _inChild("#childScope/0", _child_input));
const _onClick = _scope => {
  const {
    selected
  } = _scope;
  return function () {
    _queueSource(_scope, _selected, !selected);
  };
};
const _selected_effect = _register("packages/translator-tags/src/__tests__/fixtures/define-tag-for-attribute-tag/template.marko_0_selected", _scope => _on(_scope["#button/1"], "click", _onClick(_scope)));
const _selected = /* @__PURE__ */_value("selected", (_scope, selected) => {
  _queueEffect(_scope, _selected_effect);
  _myThing(_scope, {
    selected: selected,
    renderBody: /* @__PURE__ */_bindRenderer(_scope, _defineBody)
  });
}, void 0, _myThing);
const _setup = _scope => {
  _child(_scope["#childScope/0"]);
  _selected(_scope, false);
};
export const _template_ = `${_child_template}<button>Toggle</button>`;
export const _walks_ = /* beginChild, _child_walks, endChild, get, over(1) */`/${_child_walks}& b`;
export const _setup_ = _setup;
export default /* @__PURE__ */_createTemplate( /* @__PURE__ */_createRenderer(_template_, _walks_, _setup_), "packages/translator-tags/src/__tests__/fixtures/define-tag-for-attribute-tag/template.marko");
import { bindRenderer as _bindRenderer, inChild as _inChild, on as _on, queueSource as _queueSource, createRenderer as _createRenderer, register as _register, value as _value, queueEffect as _queueEffect, createTemplate as _createTemplate } from "@marko/runtime-tags/debug/dom";
import { setup as _child, args as _child_args, template as _child_template, walks as _child_walks } from "./components/child.marko";
const _defineBody = _register("packages/translator-tags/src/__tests__/fixtures/define-tag-for-attribute-tag/template.marko_1_renderer", /* @__PURE__ */_createRenderer("<span>The thing</span>", ""));
const _myThing = /* @__PURE__ */_value("myThing", (_scope, myThing) => _child_args(_scope["#childScope/0"], [{
  thing: myThing
}]), void 0, _inChild("#childScope/0", _child_args));
const _selected_effect = _register("packages/translator-tags/src/__tests__/fixtures/define-tag-for-attribute-tag/template.marko_0_selected", _scope => _on(_scope["#button/1"], "click", function () {
  const {
    selected
  } = _scope;
  _queueSource(_scope, _selected, !selected);
}));
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
export const template = `${_child_template}<button>Toggle</button>`;
export const walks = /* beginChild, _child_walks, endChild, get, over(1) */`/${_child_walks}& b`;
export const setup = _setup;
export default /* @__PURE__ */_createTemplate( /* @__PURE__ */_createRenderer(template, walks, setup), "packages/translator-tags/src/__tests__/fixtures/define-tag-for-attribute-tag/template.marko");
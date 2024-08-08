import { queueSource as _queueSource, register as _register, inChild as _inChild, data as _data, value as _value, createRenderer as _createRenderer, createTemplate as _createTemplate } from "@marko/runtime-tags/debug/dom";
import { _setup_ as _child, _input_ as _child_input, _template_ as _child_template, _walks_ as _child_walks } from "./components/child.marko";
const _valueChange = _register("packages/translator-tags/src/__tests__/fixtures/let-tag-controllable-child/template.marko_0/valueChange", _scope => function (newValue) {
  _queueSource(_scope, _source, newValue);
});
const _source = /* @__PURE__ */_value("source", (_scope, source) => {
  _data(_scope["#text/1"], source);
  _child_input(_scope["#childScope/0"], {
    value: source,
    valueChange: _valueChange(_scope)
  });
}, _inChild("#childScope/0", _child_input));
const _setup = _scope => {
  _child(_scope["#childScope/0"]);
  _source(_scope, 1);
};
export const _template_ = `${_child_template}source=<!>`;
export const _walks_ = /* beginChild, _child_walks, endChild, over(1), replace, over(1) */`/${_child_walks}&b%b`;
export const _setup_ = _setup;
export default /* @__PURE__ */_createTemplate( /* @__PURE__ */_createRenderer(_template_, _walks_, _setup_), "packages/translator-tags/src/__tests__/fixtures/let-tag-controllable-child/template.marko");
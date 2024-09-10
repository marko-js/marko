export const _template_ = `${_child_template}source=<!>`;
export const _walks_ = /* beginChild, _child_walks, endChild, over(1), replace, over(1) */`/${_child_walks}&b%b`;
import { register as _register, inChild as _inChild, data as _data, queueSource as _queueSource, value as _value, createRenderer as _createRenderer, createTemplate as _createTemplate } from "@marko/runtime-tags/debug/dom";
const _valueChange = _register("packages/translator-tags/src/__tests__/fixtures/let-tag-controllable-child/template.marko_0/valueChange", _scope => function (_new_source) {
  _queueSource(_scope, _source, _new_source);
});
import { _setup_ as _child, _input_ as _child_input, _template_ as _child_template, _walks_ as _child_walks } from "./components/child.marko";
const _source = /* @__PURE__ */_value("source", (_scope, source) => {
  _data(_scope["#text/1"], source);
  _child_input(_scope["#childScope/0"], {
    value: source,
    valueChange: _valueChange(_scope)
  });
}, _inChild("#childScope/0", _child_input));
export function _setup_(_scope) {
  _child(_scope["#childScope/0"]);
  _source(_scope, 1);
}
export default /* @__PURE__ */_createTemplate( /* @__PURE__ */_createRenderer(_template_, _walks_, _setup_), "packages/translator-tags/src/__tests__/fixtures/let-tag-controllable-child/template.marko");
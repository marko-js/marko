import { classAttr as _classAttr, write as _write, createRenderer as _createRenderer, subscriber as _subscriber, conditional as _conditional, source as _source, setSource as _setSource, destructureSources as _destructureSources, createRenderFn as _createRenderFn } from "@marko/runtime-fluurt/src/dom";
import { setup as _customTag, template as _customTag_template, walks as _customTag_walks } from "./components/custom-tag.marko";
const _dynamicBody2 = /* @__PURE__ */_createRenderer("", "");
const _expr_c_d = /* @__PURE__ */_subscriber([], 2, (_scope, c = _scope[3], d = _scope[4]) => _classAttr(_scope[0], ["a", {
  b: c,
  d
}]));
const _dynamicTagName = /* @__PURE__ */_conditional(1, 1, (_scope, input = _scope[2]) => input.test);
const _d = "SIGNAL NOT INITIALIZED";
const _c = "SIGNAL NOT INITIALIZED";
const _input = /* @__PURE__ */_source(2, [_dynamicTagName]);
const _setup = _scope => {
  _customTag(_scope[5]);
  _customTag(_scope[6]);
};
export const attrs = /* @__PURE__ */_destructureSources([_input], (_scope, input) => {
  _setSource(_scope, _input, input);
});
export { _input as _apply_input };
export const template = `<div></div><div class="a b"></div><div class="a b c"></div>${_customTag_template}${_customTag_template}<!>`;
export const walks = /* get, over(3), beginChild(5), _customTag_walks, endChild, beginChild(6), _customTag_walks, endChild, replace, over(1) */` d4${_customTag_walks}&5${_customTag_walks}&%b`;
export const setup = _setup;
export default /* @__PURE__ */_createRenderFn(template, walks, setup, attrs);
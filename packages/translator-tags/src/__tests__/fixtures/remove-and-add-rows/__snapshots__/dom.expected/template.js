import { data as _data, value as _value, createRenderer as _createRenderer, register as _register, loopOf as _loopOf, createTemplate as _createTemplate } from "@marko/runtime-tags/debug/dom";
const _child$forBody = /* @__PURE__ */_value("child", (_scope, child) => _data(_scope["#text/0"], child.text));
const _forBody = _register("packages/translator-tags/src/__tests__/fixtures/remove-and-add-rows/template.marko_1_renderer", /* @__PURE__ */_createRenderer(" ", /* get */" ", void 0, void 0, void 0, (_scope, _destructure2, _clean) => {
  let child;
  if (!_clean) [child] = _destructure2;
  _child$forBody(_scope, child, _clean);
}));
const _for = /* @__PURE__ */_loopOf("#div/0", _forBody);
const _by = _scope => function (c) {
  return c.id;
};
const _children = /* @__PURE__ */_value("children", (_scope, children) => _for(_scope, [children, _by(_scope)]));
const _destructure3 = (_scope, {
  children
}) => {
  _children(_scope, children);
};
const _input = /* @__PURE__ */_value("input", (_scope, input) => _destructure3(_scope, input));
export const _args_ = (_scope, _destructure4, _clean) => {
  let input;
  if (!_clean) [input] = _destructure4;
  _input(_scope, input, _clean);
};
export const _template_ = "<div></div>";
export const _walks_ = /* get, over(1) */" b";
export const _setup_ = function () {};
export default /* @__PURE__ */_createTemplate( /* @__PURE__ */_createRenderer(_template_, _walks_, _setup_, void 0, void 0, _args_), "packages/translator-tags/src/__tests__/fixtures/remove-and-add-rows/template.marko");
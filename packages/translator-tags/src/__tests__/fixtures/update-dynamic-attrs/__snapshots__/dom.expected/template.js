import { attrs as _attrs, intersection as _intersection, value as _value, createRenderer as _createRenderer, createTemplate as _createTemplate } from "@marko/runtime-tags/debug/dom";
const _expr_input_a = /* @__PURE__ */_intersection(2, _scope => {
  const {
    input,
    a
  } = _scope;
  _attrs(_scope, "#div/1", {
    a: a,
    ...input.value
  });
  _attrs(_scope, "#div/2", {
    ...input.value,
    a: a
  });
});
const _a = /* @__PURE__ */_value("a", null, _expr_input_a);
const _input = /* @__PURE__ */_value("input", (_scope, input) => _attrs(_scope, "#div/0", input.value), _expr_input_a);
const _setup = _scope => {
  _a(_scope, 0);
};
export const args = (_scope, _destructure, _clean) => {
  let input;
  if (!_clean) [input] = _destructure;
  _input(_scope, input, _clean);
};
export const template = "<div></div><div></div><div></div>";
export const walks = /* get, over(1), get, over(1), get, over(1) */" b b b";
export const setup = _setup;
export default /* @__PURE__ */_createTemplate( /* @__PURE__ */_createRenderer(template, walks, setup, void 0, void 0, args), "packages/translator-tags/src/__tests__/fixtures/update-dynamic-attrs/template.marko");
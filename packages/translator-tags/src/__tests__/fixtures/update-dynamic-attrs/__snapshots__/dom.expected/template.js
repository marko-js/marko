import { attrs as _attrs, value as _value, createRenderer as _createRenderer, createTemplate as _createTemplate } from "@marko/runtime-tags/src/dom";
const _input = /* @__PURE__ */_value("input", (_scope, input) => {
  _attrs(_scope, "#div/0", input.value);
  _attrs(_scope, "#div/1", {
    a: 0,
    ...input.value
  });
  _attrs(_scope, "#div/2", {
    ...input.value,
    a: 0
  });
});
export const attrs = _input;
export { _input };
export const template = "<div></div><div></div><div></div>";
export const walks = /* get, over(1), get, over(1), get, over(1) */" b b b";
export const setup = function () {};
export default /* @__PURE__ */_createTemplate( /* @__PURE__ */_createRenderer(template, walks, setup, void 0, void 0, void 0, void 0, void 0, attrs), "packages/translator-tags/src/__tests__/fixtures/update-dynamic-attrs/template.marko");
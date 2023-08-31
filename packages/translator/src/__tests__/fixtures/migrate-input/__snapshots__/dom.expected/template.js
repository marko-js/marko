import { data as _data, value as _value, createRenderer as _createRenderer, createTemplate as _createTemplate } from "@marko/runtime-fluurt/src/dom";
const _input = /* @__PURE__ */_value("input", (_scope, input) => _data(_scope["#text/0"], input.x));
export const attrs = _input;
export { _input };
export const template = "<div><span> </span></div>";
export const walks = /* next(2), get, out(2) */"E m";
export const setup = function () {};
export default /* @__PURE__ */_createTemplate( /* @__PURE__ */_createRenderer(template, walks, setup, void 0, void 0, void 0, void 0, void 0, attrs), "packages/translator/src/__tests__/fixtures/migrate-input/template.marko");
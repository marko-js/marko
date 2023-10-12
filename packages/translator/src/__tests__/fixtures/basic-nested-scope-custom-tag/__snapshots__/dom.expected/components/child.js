import { conditional as _conditional, value as _value, createRenderer as _createRenderer, createTemplate as _createTemplate } from "@marko/runtime-fluurt/src/dom";
const _dynamicTagName = /* @__PURE__ */_conditional("#text/0");
const _input = /* @__PURE__ */_value("input", (_scope, input) => _dynamicTagName(_scope, input.renderBody), void 0, _dynamicTagName);
export const attrs = _input;
export { _input };
export const template = "<!>";
export const walks = /* replace, over(1) */"%b";
export const setup = function () {};
export default /* @__PURE__ */_createTemplate( /* @__PURE__ */_createRenderer(template, walks, setup, void 0, void 0, void 0, void 0, void 0, attrs), "packages/translator/src/__tests__/fixtures/basic-nested-scope-custom-tag/components/child.marko");
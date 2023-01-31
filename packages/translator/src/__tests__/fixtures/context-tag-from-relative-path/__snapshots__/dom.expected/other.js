import { conditional as _conditional, source as _source, setSource as _setSource, destructureSources as _destructureSources, createRenderFn as _createRenderFn } from "@marko/runtime-fluurt/src/dom";
const _dynamicTagName = /* @__PURE__ */_conditional("#text/0", 1, (_scope, input = _scope["input"]) => input.renderBody);
const _input = /* @__PURE__ */_source("input", [_dynamicTagName]);
export const attrs = /* @__PURE__ */_destructureSources([_input], (_scope, input) => {
  _setSource(_scope, _input, input);
});
export { _input as _apply_input };
export const template = "<set value=hello><!></set>";
export const walks = /* next(1), replace, out(1) */"D%l";
export const setup = function () {};
export default /* @__PURE__ */_createRenderFn(template, walks, setup, attrs, null, "packages/translator/src/__tests__/fixtures/context-tag-from-relative-path/other.marko");
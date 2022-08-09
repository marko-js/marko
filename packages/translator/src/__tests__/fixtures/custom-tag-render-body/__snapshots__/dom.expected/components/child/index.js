import { dynamicTag as _dynamicTag, source as _source, setSource as _setSource, destructureSources as _destructureSources, createRenderFn as _createRenderFn } from "@marko/runtime-fluurt/src/dom";

const _input = _source(0, []);

export const attrs = _destructureSources([_input], (_scope, input) => {
  _setSource(_scope, _input, input);
});
export { _input as _apply_input };
export const template = "";
export const walks = "";
export const setup = function () {};
export default _createRenderFn(template, walks, setup, attrs);
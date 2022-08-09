import { data as _data, source as _source, setSource as _setSource, destructureSources as _destructureSources, createRenderFn as _createRenderFn } from "@marko/runtime-fluurt/src/dom";

const _input = _source(1, [], (_scope, input) => _data(_scope[0], input.x));

export const attrs = _destructureSources([_input], (_scope, input) => {
  _setSource(_scope, _input, input);
});
export { _input as _apply_input };
export const template = "<div><span> </span></div>";
export const walks =
/* next(2), get, out(2) */
"E m";
export const setup = function () {};
export default _createRenderFn(template, walks, setup, attrs);
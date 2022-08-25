import { write as _write, dynamicTag as _dynamicTag, source as _source, setSource as _setSource, destructureSources as _destructureSources, createRenderFn as _createRenderFn } from "@marko/runtime-fluurt/src/dom";

const _x = /* @__PURE__ */_source(0, []);

export const attrs = /* @__PURE__ */_destructureSources([_x], (_scope, {
  x
}) => {
  _setSource(_scope, _x, x);
});
export { _x as _apply_x };
export const template = "Body content";
export const walks =
/* over(3) */
"d";
export const setup = function () {};
export default /* @__PURE__ */_createRenderFn(template, walks, setup, attrs);
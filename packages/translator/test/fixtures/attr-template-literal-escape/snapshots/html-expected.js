import { attr as _attr, write as _write, wrapHydratable as _wrapHydratable, createRenderFn as _createRenderFn } from "@marko/runtime-fluurt/src/html";

const _renderer = _wrapHydratable(input => {
  _write(`<div${_attr("foo", `Hello ${input.name}`)}></div>`);
});

export default _renderer;
export const render = _createRenderFn(_renderer);
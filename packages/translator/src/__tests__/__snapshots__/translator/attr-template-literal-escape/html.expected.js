import { attr as _attr, write as _write, register as _register, createRenderer as _createRenderer } from "@marko/runtime-fluurt/dist/html";

const _renderer = _register("YAPeYJGX", input => {
  _write(`<div${_attr("foo", `Hello ${input.name}`)}></div>`);
});

export default _renderer;
export const render = _createRenderer(_renderer);
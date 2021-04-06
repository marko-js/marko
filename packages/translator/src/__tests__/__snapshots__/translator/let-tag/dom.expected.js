import { attr as _attr, walk as _walk, data as _data, register as _register, createRenderFn as _createRenderFn } from "@marko/runtime-fluurt/dist/dom";
export const template = "<div><!></div><!>";
export const walks = " D%l%b";
export const hydrate = _register("gkPDmCwa", input => {
  const x = 1;
  const y = 1;

  _walk();

  _attr("onclick", () => x = y = x + y);

  _data(x);

  _data(y);
});
export default _createRenderFn(template, walks, [], hydrate);
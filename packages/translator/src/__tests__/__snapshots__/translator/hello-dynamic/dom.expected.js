import { data as _data, html as _html, register as _register, createRenderFn as _createRenderFn } from "@marko/runtime-fluurt/dist/dom";
export const template = "Hello <!>! Hello <!>! Hello <!>!";
export const walks = "b%c%c%c";
export const hydrate = _register("lmbWBe9s", input => {
  _data(input.name);

  _html(input.name);

  _html(input.missing);
});
export default _createRenderFn(template, walks, ["name", "missing"], hydrate);
import { text as _text, html as _html, register as _register, createRenderFn as _createRenderFn } from "@marko/runtime-fluurt/dist/dom";
export const template = "Hello <!>! Hello <!>! Hello <!>!";
export const walks = "]&^&^&^";
export const hydrate = _register("lmbWBe9s", input => {
  _text(input.name);

  _html(input.name);

  _html(input.missing);
});
export default _createRenderFn(template, walks, ["name", "missing"], hydrate);
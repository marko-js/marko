import { data as _data, html as _html, register as _register, createRenderFn as _createRenderFn } from "@marko/runtime-fluurt/src/dom";
export const template = "Hello <!>! Hello <!>! Hello <!>!";
export const walks = "b%c%c%c";
export const hydrate = _register("packages/translator/src/__tests__/fixtures/hello-dynamic/template.marko", input => {
  _data(name);

  _html(name);

  _html(missing);
});
export default _createRenderFn(template, walks, ["name", "missing"], hydrate);
import { data as _data, html as _html, register as _register, createRenderFn as _createRenderFn } from "@marko/runtime-fluurt/src/dom";
export const template = "<div><div>a</div><!>Hello Text &lt;a/><!><!><script>\n    Hello &lt;b> &lt;/script>\n  </script></div>";
export const walks = "Db%c%c%l";
export const hydrate = _register("src/__tests__/fixtures/placeholders/template.marko", input => {
  _data(input.x);

  _html(input.x);

  _html("Hello HTML <a/>");
});
export default _createRenderFn(template, walks, ["x"], hydrate);
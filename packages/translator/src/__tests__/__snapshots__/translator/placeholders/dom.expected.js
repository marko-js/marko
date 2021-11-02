import { text as _text, html as _html, register as _register, createRenderFn as _createRenderFn } from "@marko/runtime-fluurt/dist/dom";
export const template = "<div><script>\n    <!>\n  </script></div>";
export const walks = "]#####^&(";
export const hydrate = _register("+2Y4wOVt", input => {
  _text(input.x);

  _text("Hello world <a/>");

  _html(input.x);

  _html(null);

  _html("Hello world <a/>");

  _text("Hello <b> </script>");
});
export default _createRenderFn(template, walks, ["x"], hydrate);
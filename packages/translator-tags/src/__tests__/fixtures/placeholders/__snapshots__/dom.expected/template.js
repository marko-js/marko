import { data as _data, html as _html, value as _value, createRenderer as _createRenderer, createTemplate as _createTemplate } from "@marko/runtime-tags/src/dom";
const _input = /* @__PURE__ */_value("input", (_scope, input) => {
  _data(_scope["#text/0"], input.x);
  _data(_scope["#text/1"], input.x);
  _data(_scope["#text/2"], input.x);
  _html(_scope, input.x, "#text/3");
});
const _setup = _scope => {
  _html(_scope, "Hello HTML <a/>", "#text/4");
};
export const args = (_scope, _destructure, _clean) => {
  let input;
  if (!_clean) [input] = _destructure;
  _input(_scope, input, _clean);
};
export { _input };
export const template = "<!><span> <div></div></span><div><div>a</div><!>Hello Text &lt;a/><!><!><script>\n    Hello &lt;b> &lt;/script>\n  </script></div>";
export const walks = /* replace, over(1), next(1), get, out(1), next(1), over(1), replace, over(2), replace, over(2), replace, out(1) */"%bD lDb%c%c%l";
export const setup = _setup;
export default /* @__PURE__ */_createTemplate( /* @__PURE__ */_createRenderer(template, walks, setup, void 0, void 0, void 0, void 0, void 0, args), "packages/translator-tags/src/__tests__/fixtures/placeholders/template.marko");
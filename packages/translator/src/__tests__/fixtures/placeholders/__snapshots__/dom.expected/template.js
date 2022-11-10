import { data as _data, html as _html, source as _source, setSource as _setSource, destructureSources as _destructureSources, createRenderFn as _createRenderFn } from "@marko/runtime-fluurt/src/dom";
const _x = /* @__PURE__ */_source(5, [], (_scope, x) => {
  _data(_scope[0], x);
  _data(_scope[1], x);
  _data(_scope[2], x);
  _html(_scope[3], x);
});
const _setup = _scope => {
  _html(_scope[4], "Hello HTML <a/>");
};
export const attrs = /* @__PURE__ */_destructureSources([_x], (_scope, {
  x
}) => {
  _setSource(_scope, _x, x);
});
export { _x as _apply_x };
export const template = "<!><span> <div></div></span><div><div>a</div><!>Hello Text &lt;a/><!><!><script>\n    Hello &lt;b> &lt;/script>\n  </script></div>";
export const walks = /* replace, over(1), next(1), get, out(1), next(1), over(1), replace, over(2), replace, over(2), replace, out(1) */"%bD lDb%c%c%l";
export const setup = _setup;
export default /* @__PURE__ */_createRenderFn(template, walks, setup, attrs);
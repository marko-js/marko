import { data as _data, html as _html, write as _write, createRenderFn as _createRenderFn } from "@marko/runtime-fluurt/src/dom";

function _apply_x(_scope, x) {
  if (_write(_scope, 3, x)) {
    _data(_scope, 0, x);

    _html(_scope, 1, x);
  }
}

function _apply(_scope) {
  _html(_scope, 2, "Hello HTML <a/>");
}

export const applyAttrs = function (_scope, {
  x
}) {
  _apply_x(_scope, x);
};
export { _apply_x };
export const template = "<div><div>a</div><!>Hello Text &lt;a/><!><!><script>\n    Hello &lt;b> &lt;/script>\n  </script></div>";
export const walks =
/* next(1), over(1), replace, over(2), replace, over(2), replace, out(1) */
"Db%c%c%l";
export const apply = _apply;
export default _createRenderFn(template, walks, apply, applyAttrs);
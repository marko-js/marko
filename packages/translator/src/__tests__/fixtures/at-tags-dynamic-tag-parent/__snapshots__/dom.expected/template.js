import { write as _write, createRenderer as _createRenderer, dynamicTagAttrs as _dynamicTagAttrs, conditional as _conditional, value as _value, createRenderFn as _createRenderFn } from "@marko/runtime-fluurt/src/dom";
const _xBody = /* @__PURE__ */_createRenderer("Body content", "");
const _x_input = _dynamicTagAttrs("#text/0", _xBody);
const _dynamicTagName = /* @__PURE__ */_conditional("#text/0", _scope => _x_input(_scope, () => ({
  header: {
    class: "my-header",
    renderBody() {
      _write("Header content");
    }
  },
  footer: {
    class: "my-footer",
    renderBody() {
      _write("Footer content");
    }
  }
})), null, _x_input);
const _x = /* @__PURE__ */_value("x", (_scope, x) => _dynamicTagName(_scope, x || _xBody), null, _dynamicTagName);
export const attrs = (_scope, _destructure, _clean) => {
  let x;
  if (!_clean) ({
    x
  } = _destructure);
  _x(_scope, x, _clean);
};
export { _x };
export const template = "<!>";
export const walks = /* replace, over(1) */"%b";
export const setup = function () {};
export default /* @__PURE__ */_createRenderFn(template, walks, setup, attrs, null, "packages/translator/src/__tests__/fixtures/at-tags-dynamic-tag-parent/template.marko");
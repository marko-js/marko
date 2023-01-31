import { write as _write, dynamicAttrsProxy as _dynamicAttrsProxy, dynamicTagAttrs as _dynamicTagAttrs, createRenderer as _createRenderer, conditional as _conditional, source as _source, setSource as _setSource, destructureSources as _destructureSources, createRenderFn as _createRenderFn } from "@marko/runtime-fluurt/src/dom";
const _xBody = /* @__PURE__ */_createRenderer("Body content", "");
const _dynamicTagName = /* @__PURE__ */_conditional("#text/0", 1, (_scope, x = _scope["x"]) => x || _xBody, _dynamicAttrsProxy("#text/0"), _scope => _dynamicTagAttrs(_scope, "#text/0", () => ({
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
}), _xBody));
const _x = /* @__PURE__ */_source("x", [_dynamicTagName]);
export const attrs = /* @__PURE__ */_destructureSources([_x], (_scope, {
  x
}) => {
  _setSource(_scope, _x, x);
});
export { _x as _apply_x };
export const template = "<!>";
export const walks = /* replace, over(1) */"%b";
export const setup = function () {};
export default /* @__PURE__ */_createRenderFn(template, walks, setup, attrs, null, "packages/translator/src/__tests__/fixtures/at-tags-dynamic-tag-parent/template.marko");
import * as _$ from "@marko/runtime-tags/debug/html";
const _renderer = /* @__PURE__ */_$.createRenderer((input, _tagVar) => {
  const _scope0_id = _$.nextScopeId();
  const {
    content
  } = input;
  _$.write("<body>");
  const _dynamicScope = _$.peekNextScope();
  _$.dynamicTagInput(_scope0_id, "#text/0", content, {});
  _$.writeTrailers("</body>");
  _$.debug(_$.writeScope(_scope0_id, {
    "#text/0!": _$.writeExistingScope(_dynamicScope),
    "#text/0(": _$.normalizeDynamicRenderer(content)
  }), "__tests__/tags/layout.marko", 0, {
    "content": "1:10"
  });
});
export default /* @__PURE__ */_$.createTemplate("__tests__/tags/layout.marko", _renderer);
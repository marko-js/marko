import * as _$ from "@marko/runtime-tags/debug/html";
const _renderer = /* @__PURE__ */_$.createRenderer(input => {
  const _scope0_id = _$.nextScopeId();
  const {
    content,
    value
  } = input;
  _$.write("<div>");
  const _dynamicScope = _$.peekNextScope();
  _$.dynamicTagInput(_scope0_id, "#text/0", content, value);
  _$.write("</div>");
  _$.writeScope(_scope0_id, {
    content: content,
    value: value,
    "#text/0!": _$.writeExistingScope(_dynamicScope),
    "#text/0(": _$.normalizeDynamicRenderer(content)
  }, "__tests__/tags/child.marko", 0, {
    content: "1:9",
    value: "1:18"
  });
});
export default /* @__PURE__ */_$.createTemplate("__tests__/tags/child.marko", _renderer);
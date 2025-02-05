import * as _$ from "@marko/runtime-tags/debug/html";
const _renderer = /* @__PURE__ */_$.createRenderer(input => {
  const _scope0_id = _$.nextScopeId();
  const {
    thing: {
      x,
      content
    }
  } = input;
  const _dynamicScope = _$.peekNextScope();
  _$.dynamicTagInput(_scope0_id, "#text/0", content, {});
  _$.write(`<div>${_$.escapeXML(x)}${_$.markResumeNode(_scope0_id, "#text/1")}</div>`);
  _$.debug(_$.writeScope(_scope0_id, {
    "#text/0!": _$.writeExistingScope(_dynamicScope),
    "#text/0(": _$.normalizeDynamicRenderer(content)
  }), "__tests__/tags/custom-tag/index.marko", 0, {
    "_pattern_": "1:17",
    "x": "1:19",
    "content": "1:22"
  });
});
export default /* @__PURE__ */_$.createTemplate("__tests__/tags/custom-tag/index.marko", _renderer);
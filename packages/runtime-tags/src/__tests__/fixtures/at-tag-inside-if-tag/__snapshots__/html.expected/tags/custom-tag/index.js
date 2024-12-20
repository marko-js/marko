import * as _$ from "@marko/runtime-tags/debug/html";
const _renderer = /* @__PURE__ */_$.createRenderer((input, _tagVar) => {
  const _scope0_id = _$.nextScopeId();
  const {
    thing: {
      x,
      content
    }
  } = input;
  const _dynamicScope = _$.peekNextScope();
  _$.dynamicTagInput(_dynamicScope, content, {});
  _$.write(`${_$.markResumeControlEnd(_scope0_id, "#text/0")}<div>${_$.escapeXML(x)}${_$.markResumeNode(_scope0_id, "#text/1")}</div>`);
  _$.writeScope(_scope0_id, {
    "#text/0!": _$.writeExistingScope(_dynamicScope),
    "#text/0(": _$.normalizeDynamicRenderer(content)
  });
});
export default /* @__PURE__ */_$.createTemplate("__tests__/tags/custom-tag/index.marko", _renderer);
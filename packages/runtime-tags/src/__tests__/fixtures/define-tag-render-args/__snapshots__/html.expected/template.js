import * as _$ from "@marko/runtime-tags/debug/html";
const _renderer = /* @__PURE__ */_$.createRenderer((input, _tagVar) => {
  const _scope0_id = _$.nextScopeId();
  const x = 1;
  const MyTag = {
    content: _$.register(/* @__PURE__ */_$.createRenderer((a, b, c) => {
      const _scope1_id = _$.nextScopeId();
      _$.write(`<div>${_$.escapeXML(a)}${_$.markResumeNode(_scope1_id, "#text/0")}|<!>${_$.escapeXML(b)}${_$.markResumeNode(_scope1_id, "#text/1")}|<!>${_$.escapeXML(c)}${_$.markResumeNode(_scope1_id, "#text/2")}</div>`);
    }), "__tests__/template.marko_1_renderer", _scope0_id)
  };
  const _dynamicScope = _$.peekNextScope();
  _$.dynamicTagArgs(_dynamicScope, MyTag, [1, "Hello", x]);
  _$.write(`${_$.markResumeControlEnd(_scope0_id, "#text/0")}<button>${_$.escapeXML(x)}${_$.markResumeNode(_scope0_id, "#text/2")}</button>${_$.markResumeNode(_scope0_id, "#button/1")}`);
  _$.writeEffect(_scope0_id, "__tests__/template.marko_0_x");
  _$.writeScope(_scope0_id, {
    "x": x,
    "#text/0!": _$.writeExistingScope(_dynamicScope),
    "#text/0(": _$.normalizeDynamicRenderer(MyTag)
  });
});
export default /* @__PURE__ */_$.createTemplate("__tests__/template.marko", _renderer);
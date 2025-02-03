import * as _$ from "@marko/runtime-tags/debug/html";
const _renderer = /* @__PURE__ */_$.createRenderer((input, _tagVar) => {
  const _scope0_id = _$.nextScopeId();
  const MyTag = {
    content: _$.register(/* @__PURE__ */_$.createRenderer(({
      name
    }) => {
      const _scope1_id = _$.nextScopeId();
      const y = 1;
      _$.write(`<div>Hello <!>${_$.escapeXML(name)}${_$.markResumeNode(_scope1_id, "#text/0")} <!>${_$.escapeXML(y)}${_$.markResumeNode(_scope1_id, "#text/1")}</div><button>${_$.escapeXML(y)}${_$.markResumeNode(_scope1_id, "#text/3")}</button>${_$.markResumeNode(_scope1_id, "#button/2")}`);
      _$.writeEffect(_scope1_id, "__tests__/template.marko_1_y");
      _$.debug(_$.writeScope(_scope1_id, {
        "y": y
      }), "__tests__/template.marko", "1:2", {
        "_pattern_": "1:15",
        "name": "1:16",
        "y": "2:8"
      });
      _$.resumeClosestBranch(_scope1_id);
    }), "__tests__/template.marko_1_renderer", _scope0_id)
  };
  const _dynamicScope = _$.peekNextScope();
  _$.dynamicTagInput(_scope0_id, "#text/0", MyTag, {
    name: "Ryan"
  });
  _$.debug(_$.writeScope(_scope0_id, {
    "#text/0!": _$.writeExistingScope(_dynamicScope),
    "#text/0(": _$.normalizeDynamicRenderer(MyTag)
  }), "__tests__/template.marko", 0, {
    "MyTag": "1:9"
  });
});
export default /* @__PURE__ */_$.createTemplate("__tests__/template.marko", _renderer);
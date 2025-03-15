import * as _$ from "@marko/runtime-tags/debug/html";
export default /* @__PURE__ */_$.createTemplate("__tests__/template.marko", input => {
  const _scope0_id = _$.nextScopeId();
  const MyTag = {
    content: /* @__PURE__ */_$.createContent("__tests__/template.marko_1_renderer", ({
      name
    }) => {
      const _scope1_id = _$.nextScopeId();
      let y = 1;
      _$.write(`<div>Hello <!>${_$.escapeXML(name)}${_$.markResumeNode(_scope1_id, "#text/0")} <!>${_$.escapeXML(y)}${_$.markResumeNode(_scope1_id, "#text/1")}</div><button>${_$.escapeXML(y)}${_$.markResumeNode(_scope1_id, "#text/3")}</button>${_$.markResumeNode(_scope1_id, "#button/2")}`);
      _$.writeEffect(_scope1_id, "__tests__/template.marko_1_y");
      _$.writeScope(_scope1_id, {
        y
      }, "__tests__/template.marko", "1:2", {
        y: "2:8"
      });
      _$.resumeClosestBranch(_scope1_id);
    })
  };
  const _dynamicScope = _$.peekNextScope();
  _$.dynamicTagInput(_scope0_id, "#text/0", MyTag, {
    name: "Ryan"
  });
  _$.writeScope(_scope0_id, {
    "#text/0!": _$.writeExistingScope(_dynamicScope),
    "#text/0(": _$.dynamicTagId(MyTag)
  }, "__tests__/template.marko", 0);
});
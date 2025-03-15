import * as _$ from "@marko/runtime-tags/debug/html";
export default /* @__PURE__ */_$.createTemplate("__tests__/template.marko", input => {
  const _scope0_id = _$.nextScopeId();
  let x = 1;
  const MyTag = {
    content: _$.registerContent("__tests__/template.marko_1_renderer", ({
      number
    }) => {
      const _scope1_id = _$.nextScopeId();
      _$.write(`<div>${_$.escapeXML(number)}${_$.markResumeNode(_scope1_id, "#text/0")}</div>`);
    }, _scope0_id)
  };
  const _dynamicScope = _$.peekNextScope();
  _$.dynamicTagInput(_scope0_id, "#text/0", MyTag, {
    number: x
  });
  _$.write(`<button>${_$.escapeXML(x)}${_$.markResumeNode(_scope0_id, "#text/2")}</button>${_$.markResumeNode(_scope0_id, "#button/1")}`);
  _$.writeEffect(_scope0_id, "__tests__/template.marko_0_x");
  _$.writeScope(_scope0_id, {
    x,
    MyTag,
    "#text/0!": _$.writeExistingScope(_dynamicScope),
    "#text/0(": _$.dynamicTagId(MyTag)
  }, "__tests__/template.marko", 0, {
    x: "1:6",
    MyTag: "2:9"
  });
  _$.resumeClosestBranch(_scope0_id);
});
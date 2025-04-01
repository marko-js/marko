import * as _$ from "@marko/runtime-tags/debug/html";
export default _$.createTemplate("__tests__/template.marko", input => {
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
  _$.dynamicTag(_scope0_id, "#text/0", MyTag, {
    number: x
  }, 0, 0, 1);
  _$.write(`<button>${_$.escapeXML(x)}${_$.markResumeNode(_scope0_id, "#text/2")}</button>${_$.markResumeNode(_scope0_id, "#button/1")}`);
  _$.writeEffect(_scope0_id, "__tests__/template.marko_0_x");
  _$.writeScope(_scope0_id, {
    x,
    MyTag
  }, "__tests__/template.marko", 0, {
    x: "1:6",
    MyTag: "2:9"
  });
  _$.resumeClosestBranch(_scope0_id);
});
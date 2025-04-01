import * as _$ from "@marko/runtime-tags/debug/html";
export default _$.createTemplate("__tests__/template.marko", input => {
  const _scope0_id = _$.nextScopeId();
  let id = 0;
  let items = [{
    name: "Marko",
    description: "HTML Reimagined"
  }];
  _$.write("<div>");
  _$.resumeSingleNodeForOf(items, ({
    name,
    description
  }) => {
    const _scope1_id = _$.nextScopeId();
    _$.write(`<div>${_$.escapeXML(name)}${_$.markResumeNode(_scope1_id, "#text/0")}: <!>${_$.escapeXML(description)}${_$.markResumeNode(_scope1_id, "#text/1")}</div>`);
  }, 0, _scope0_id, "#text/0");
  _$.write(`<button id=add>Add</button>${_$.markResumeNode(_scope0_id, "#button/1")}<button id=remove>Remove</button>${_$.markResumeNode(_scope0_id, "#button/2")}</div>`);
  _$.writeEffect(_scope0_id, "__tests__/template.marko_0_items");
  _$.writeScope(_scope0_id, {
    items
  }, "__tests__/template.marko", 0, {
    items: "3:8"
  });
  _$.resumeClosestBranch(_scope0_id);
});
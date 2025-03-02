import * as _$ from "@marko/runtime-tags/debug/html";
export default /* @__PURE__ */_$.createTemplate("__tests__/template.marko", input => {
  const _scope0_id = _$.nextScopeId();
  const _scope1_ = new Map();
  const id = 0;
  const items = [];
  _$.write("<div>");
  _$.resumeSingleNodeForOf(items, (item, _index) => {
    const _scope1_id = _$.nextScopeId();
    _scope1_.set(_index, _$.ensureScopeWithId(_scope1_id));
    _$.write(`${_$.escapeXML(item)}${_$.markResumeNode(_scope1_id, "#text/0")}`);
    _$.writeScope(_scope1_id, {}, "__tests__/template.marko", "5:4");
  }, _scope0_id, "#text/0");
  _$.write(`<button id=add>Add</button>${_$.markResumeNode(_scope0_id, "#button/1")}<button id=remove>Remove</button>${_$.markResumeNode(_scope0_id, "#button/2")}</div>`);
  _$.writeEffect(_scope0_id, "__tests__/template.marko_0_items");
  _$.writeEffect(_scope0_id, "__tests__/template.marko_0_id_items");
  _$.writeScope(_scope0_id, {
    id,
    items,
    "#text/0(": _scope1_.size ? _scope1_ : undefined
  }, "__tests__/template.marko", 0, {
    id: "2:8",
    items: "3:8"
  });
  _$.resumeClosestBranch(_scope0_id);
});
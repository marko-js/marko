import * as _$ from "@marko/runtime-tags/debug/html";
const _renderer = /* @__PURE__ */_$.createRenderer((input, _tagVar) => {
  const _scope0_id = _$.nextScopeId();
  const id = 0;
  const items = [{
    name: "Marko",
    description: "HTML Reimagined"
  }];
  _$.write("<div>");
  const _forScopeIds = [],
    _scope1_ = new Map();
  _$.forOf(items, (_list, _index) => {
    const _scope1_id = _$.nextScopeId();
    let {
      name,
      description
    } = _list;
    _forScopeIds.push(_scope1_id);
    _$.write(`<div>${_$.escapeXML(name)}${_$.markResumeNode(_scope1_id, "#text/0")}: <!>${_$.escapeXML(description)}${_$.markResumeNode(_scope1_id, "#text/1")}</div>`);
    _$.writeScope(_scope1_id, {});
    _scope1_.set(_index, _$.getScopeById(_scope1_id));
  });
  _$.write(`${_$.markResumeControlSingleNodeEnd(_scope0_id, "#text/0", _forScopeIds)}<button id=add>Add</button>${_$.markResumeNode(_scope0_id, "#button/1")}<button id=remove>Remove</button>${_$.markResumeNode(_scope0_id, "#button/2")}</div>`);
  _$.writeEffect(_scope0_id, "__tests__/template.marko_0_items");
  _$.writeScope(_scope0_id, {
    "items": items,
    "#text/0(": _scope1_.size ? _scope1_ : undefined
  });
  _$.markResumeCleanup(_scope0_id);
});
export default /* @__PURE__ */_$.createTemplate("__tests__/template.marko", _renderer);
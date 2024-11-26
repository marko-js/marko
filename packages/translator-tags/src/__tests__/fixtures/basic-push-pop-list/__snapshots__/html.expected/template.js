import * as _$ from "@marko/runtime-tags/debug/html";
const _renderer = /* @__PURE__ */_$.createRenderer((input, _tagVar) => {
  const _scope0_id = _$.nextScopeId();
  const id = 0;
  const items = [];
  _$.write("<div>");
  const _forScopeIds = [],
    _scope1_ = new Map();
  _$.forOf(items, (item, _index) => {
    const _scope1_id = _$.nextScopeId();
    _forScopeIds.push(_scope1_id);
    _$.write(`${_$.escapeXML(item)}${_$.markResumeNode(_scope1_id, "#text/0")}`);
    _$.writeScope(_scope1_id, {});
    _scope1_.set(_index, _$.getScopeById(_scope1_id));
  });
  _$.write(`${_$.markResumeControlSingleNodeEnd(_scope0_id, "#text/0", _forScopeIds)}<button id=add>Add</button>${_$.markResumeNode(_scope0_id, "#button/1")}<button id=remove>Remove</button>${_$.markResumeNode(_scope0_id, "#button/2")}</div>`);
  _$.writeEffect(_scope0_id, "packages/translator-tags/src/__tests__/fixtures/basic-push-pop-list/template.marko_0_items");
  _$.writeEffect(_scope0_id, "packages/translator-tags/src/__tests__/fixtures/basic-push-pop-list/template.marko_0_id_items");
  _$.writeScope(_scope0_id, {
    "id": id,
    "items": items,
    "#text/0(": _scope1_.size ? _scope1_ : undefined
  });
});
export default /* @__PURE__ */_$.createTemplate("packages/translator-tags/src/__tests__/fixtures/basic-push-pop-list/template.marko", _renderer);
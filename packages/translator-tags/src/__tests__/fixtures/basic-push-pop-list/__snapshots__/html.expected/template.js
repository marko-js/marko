import { write as _write, escapeXML as _escapeXML, markResumeNode as _markResumeNode, markResumeControlSingleNodeEnd as _markResumeControlSingleNodeEnd, writeScope as _writeScope, nextScopeId as _nextScopeId, getScopeById as _getScopeById, writeEffect as _writeEffect, createRenderer as _createRenderer, createTemplate as _createTemplate } from "@marko/runtime-tags/debug/html";
const _renderer = /* @__PURE__ */_createRenderer((input, _tagVar) => {
  const _scope0_id = _nextScopeId();
  const id = 0;
  const items = [];
  _write("<div>");
  const _forScopeIds = [],
    _scope1_ = new Map();
  let _i2 = 0;
  for (const item of items) {
    const _scope1_id = _nextScopeId();
    let _i = _i2++;
    _forScopeIds.push(_scope1_id);
    _write(`${_escapeXML(item)}${_markResumeNode(_scope1_id, "#text/0")}`);
    _writeScope(_scope1_id, {});
    _scope1_.set(_i, _getScopeById(_scope1_id));
  }
  _write(`${_markResumeControlSingleNodeEnd(_scope0_id, "#text/0", _forScopeIds)}<button id=add>Add</button>${_markResumeNode(_scope0_id, "#button/1")}<button id=remove>Remove</button>${_markResumeNode(_scope0_id, "#button/2")}</div>`);
  _writeEffect(_scope0_id, "packages/translator-tags/src/__tests__/fixtures/basic-push-pop-list/template.marko_0_items");
  _writeEffect(_scope0_id, "packages/translator-tags/src/__tests__/fixtures/basic-push-pop-list/template.marko_0_id_items");
  _writeScope(_scope0_id, {
    "id": id,
    "items": items,
    "#text/0(": _scope1_.size ? _scope1_ : undefined
  });
});
export default /* @__PURE__ */_createTemplate(_renderer, "packages/translator-tags/src/__tests__/fixtures/basic-push-pop-list/template.marko");
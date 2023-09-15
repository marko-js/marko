import { write as _write, escapeXML as _escapeXML, markResumeNode as _markResumeNode, SYMBOL_OWNER as _SYMBOL_OWNER, markResumeControlSingleNodeEnd as _markResumeControlSingleNodeEnd, nextScopeId as _nextScopeId, writeScope as _writeScope, maybeFlush as _maybeFlush, writeEffect as _writeEffect, createRenderer as _createRenderer, createTemplate as _createTemplate } from "@marko/runtime-fluurt/src/html";
const _renderer = /* @__PURE__ */_createRenderer((input, _tagVar, _scope0_) => {
  const _scope0_id = _nextScopeId();
  const id = 0;
  const items = [{
    name: "Marko",
    description: "HTML Reimagined"
  }];
  _write("<div>");
  const _forScopeIds = [],
    _scope1_ = new Map();
  let _i2 = 0;
  for (const {
    name,
    description
  } of items) {
    const _scope1_id = _nextScopeId();
    let _i = _i2++;
    _forScopeIds.push(_scope1_id);
    _write(`<div>${_escapeXML(name)}${_markResumeNode(_scope1_id, "#text/0")}: <!>${_escapeXML(description)}${_markResumeNode(_scope1_id, "#text/1")}</div>`);
    _writeScope(_scope1_id, (_s => (_scope1_.set(_i, _s), _s))({
      [_SYMBOL_OWNER]: _scope0_id
    }));
    _maybeFlush();
  }
  _write(`${_markResumeControlSingleNodeEnd(_scope0_id, "#text/0", _forScopeIds)}<button id=add>Add</button>${_markResumeNode(_scope0_id, "#button/1")}<button id=remove>Remove</button>${_markResumeNode(_scope0_id, "#button/2")}</div>`);
  _writeEffect(_scope0_id, "packages/translator/src/__tests__/fixtures/for-destructure/template.marko_0_items");
  _writeScope(_scope0_id, {
    "items": items,
    "#text/0(": _scope1_.size ? _scope1_ : undefined
  }, _scope0_);
});
export default /* @__PURE__ */_createTemplate(_renderer, "packages/translator/src/__tests__/fixtures/for-destructure/template.marko");
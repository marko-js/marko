import { write as _write, escapeXML as _escapeXML, markHydrateNode as _markHydrateNode, SYMBOL_OWNER as _SYMBOL_OWNER, markHydrateControlSingleNodeEnd as _markHydrateControlSingleNodeEnd, nextScopeId as _nextScopeId, writeHydrateScope as _writeHydrateScope, maybeFlush as _maybeFlush, writeHydrateCall as _writeHydrateCall, register as _register, createRenderer as _createRenderer } from "@marko/runtime-fluurt/src/html";
const _renderer = _register((input, _tagVar, _scope0_) => {
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
    _write(`<div>${_escapeXML(name)}${_markHydrateNode(_scope1_id, "#text/0")}: <!>${_escapeXML(description)}${_markHydrateNode(_scope1_id, "#text/1")}</div>`);
    _writeHydrateScope(_scope1_id, (_s => (_scope1_.set(_i, _s), _s))({
      [_SYMBOL_OWNER]: _scope0_id
    }));
    _maybeFlush();
  }
  _write(`${_markHydrateControlSingleNodeEnd(_scope0_id, "#text/0", _forScopeIds)}<button id=add>Add</button>${_markHydrateNode(_scope0_id, "#button/1")}<button id=remove>Remove</button>${_markHydrateNode(_scope0_id, "#button/2")}</div>`);
  _writeHydrateCall(_scope0_id, "packages/translator/src/__tests__/fixtures/for-destructure/template.marko_0_items");
  _writeHydrateScope(_scope0_id, {
    "items": items,
    "#text/0(": _scope1_.size ? _scope1_ : undefined
  }, _scope0_);
}, "packages/translator/src/__tests__/fixtures/for-destructure/template.marko");
export default _renderer;
export const render = /* @__PURE__ */_createRenderer(_renderer);
import { attr as _attr, write as _write, escapeXML as _escapeXML, markResumeNode as _markResumeNode, SYMBOL_OWNER as _SYMBOL_OWNER, markResumeControlSingleNodeEnd as _markResumeControlSingleNodeEnd, nextScopeId as _nextScopeId, writeScope as _writeScope, maybeFlush as _maybeFlush, writeEffect as _writeEffect, createTemplate as _createTemplate } from "@marko/runtime-fluurt/src/html";
const _renderer = (input, _tagVar, _scope0_) => {
  const _scope0_id = _nextScopeId();
  const open = true;
  const list = [1, 2, 3];
  _write(`<ul${_attr("hidden", !open)}>`);
  const _forScopeIds = [],
    _scope1_ = new Map();
  const _by = function (x) {
    return x;
  };
  let _i2 = 0;
  for (const x of list) {
    const _scope1_id = _nextScopeId();
    let _i = _i2++;
    _forScopeIds.push(_scope1_id);
    _write(`<li>${_escapeXML(x)}${_markResumeNode(_scope1_id, "#text/0")}</li>`);
    _writeScope(_scope1_id, (_s => (_scope1_.set(_by(x, _i), _s), _s))({
      [_SYMBOL_OWNER]: _scope0_id
    }));
    _maybeFlush();
  }
  _write(`${_markResumeControlSingleNodeEnd(_scope0_id, "#ul/0", _forScopeIds)}</ul>${_markResumeNode(_scope0_id, "#ul/0")}<button id=toggle>Toggle</button>${_markResumeNode(_scope0_id, "#button/1")}<button id=reverse>Reverse</button>${_markResumeNode(_scope0_id, "#button/2")}`);
  _writeEffect(_scope0_id, "packages/translator/src/__tests__/fixtures/basic-shared-node-ref/template.marko_0_list");
  _writeEffect(_scope0_id, "packages/translator/src/__tests__/fixtures/basic-shared-node-ref/template.marko_0_open");
  _writeScope(_scope0_id, {
    "open": open,
    "list": list,
    "#ul/0(": _scope1_.size ? _scope1_ : undefined
  }, _scope0_);
};
export default /* @__PURE__ */_createTemplate(_renderer, "packages/translator/src/__tests__/fixtures/basic-shared-node-ref/template.marko");
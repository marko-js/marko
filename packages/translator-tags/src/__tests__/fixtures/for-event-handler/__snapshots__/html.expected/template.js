import { escapeXML as _escapeXML, markResumeNode as _markResumeNode, markResumeControlSingleNodeEnd as _markResumeControlSingleNodeEnd, write as _write, ensureScopeWithId as _ensureScopeWithId, writeEffect as _writeEffect, writeScope as _writeScope, nextScopeId as _nextScopeId, getScopeById as _getScopeById, maybeFlush as _maybeFlush, createRenderer as _createRenderer, createTemplate as _createTemplate } from "@marko/runtime-tags/debug/html";
const _renderer = /* @__PURE__ */_createRenderer((input, _tagVar) => {
  const _scope0_id = _nextScopeId();
  const num = 0;
  const _forScopeIds = [],
    _scope1_ = new Map();
  for (let _from = 0 ?? 0, _step = 1 ?? 1, _steps = (num - _from) / _step, _i = 0; _i <= _steps; _i++) {
    const _scope1_id = _nextScopeId();
    const i = _from + _i * _step;
    _forScopeIds.push(_scope1_id);
    _write(`<button>${_escapeXML(i)}${_markResumeNode(_scope1_id, "#text/1")}</button>${_markResumeNode(_scope1_id, "#button/0")}`);
    _writeEffect(_scope1_id, "packages/translator-tags/src/__tests__/fixtures/for-event-handler/template.marko_1_num");
    _writeScope(_scope1_id, {
      "_": _ensureScopeWithId(_scope0_id)
    });
    _scope1_.set(i, _getScopeById(_scope1_id));
    _maybeFlush();
  }
  _write(`${_markResumeControlSingleNodeEnd(_scope0_id, "#text/0", _forScopeIds)}`);
  _writeScope(_scope0_id, {
    "num": num,
    "#text/0(": _scope1_.size ? _scope1_ : undefined
  });
});
export default /* @__PURE__ */_createTemplate(_renderer, "packages/translator-tags/src/__tests__/fixtures/for-event-handler/template.marko");
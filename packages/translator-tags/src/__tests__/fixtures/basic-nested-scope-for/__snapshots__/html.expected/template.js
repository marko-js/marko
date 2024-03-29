import { attr as _attr, escapeXML as _escapeXML, markResumeNode as _markResumeNode, markResumeControlSingleNodeEnd as _markResumeControlSingleNodeEnd, write as _write, serializedScope as _serializedScope, writeEffect as _writeEffect, writeScope as _writeScope, nextScopeId as _nextScopeId, maybeFlush as _maybeFlush, createRenderer as _createRenderer, createTemplate as _createTemplate } from "@marko/runtime-tags/debug/html";
const _renderer = /* @__PURE__ */_createRenderer((input, _tagVar) => {
  const _scope0_id = _nextScopeId();
  const selected = 0;
  const _forScopeIds = [],
    _scope1_ = new Map();
  let _i2 = 0;
  for (const num of [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]) {
    const _scope1_id = _nextScopeId();
    let _i = _i2++;
    _forScopeIds.push(_scope1_id);
    _write(`<button${_attr("data-selected", selected === num)}${_attr("data-multiple", num % selected === 0)}>${_escapeXML(num)}${_markResumeNode(_scope1_id, "#text/1")}</button>${_markResumeNode(_scope1_id, "#button/0")}`);
    _writeEffect(_scope1_id, "packages/translator-tags/src/__tests__/fixtures/basic-nested-scope-for/template.marko_1_num");
    _writeScope(_scope1_id, (_s => (_scope1_.set(_i, _s), _s))({
      "num": num,
      "_": _serializedScope(_scope0_id)
    }));
    _maybeFlush();
  }
  _write(`${_markResumeControlSingleNodeEnd(_scope0_id, "#text/0", _forScopeIds)}`);
  _writeScope(_scope0_id, {
    "selected": selected,
    "#text/0(": _scope1_.size ? _scope1_ : undefined
  });
});
export default /* @__PURE__ */_createTemplate(_renderer, "packages/translator-tags/src/__tests__/fixtures/basic-nested-scope-for/template.marko");
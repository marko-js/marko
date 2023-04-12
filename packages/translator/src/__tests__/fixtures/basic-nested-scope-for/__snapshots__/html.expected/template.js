import { attr as _attr, escapeXML as _escapeXML, markHydrateNode as _markHydrateNode, SYMBOL_OWNER as _SYMBOL_OWNER, markHydrateControlSingleNodeEnd as _markHydrateControlSingleNodeEnd, write as _write, nextScopeId as _nextScopeId, writeHydrateCall as _writeHydrateCall, writeHydrateScope as _writeHydrateScope, maybeFlush as _maybeFlush, register as _register, createRenderer as _createRenderer } from "@marko/runtime-fluurt/src/html";
const _renderer = _register((input, _tagVar, _scope0_) => {
  const _scope0_id = _nextScopeId();
  const selected = 0;
  const _forScopeIds = [],
    _scope1_ = new Map();
  let _i2 = 0;
  for (const num of [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]) {
    const _scope1_id = _nextScopeId();
    let _i = _i2++;
    _forScopeIds.push(_scope1_id);
    _write(`<button${_attr("data-selected", selected === num)}${_attr("data-multiple", num % selected === 0)}>${_escapeXML(num)}${_markHydrateNode(_scope1_id, "#text/1")}</button>${_markHydrateNode(_scope1_id, "#button/0")}`);
    _writeHydrateCall(_scope1_id, "packages/translator/src/__tests__/fixtures/basic-nested-scope-for/template.marko_1_num");
    _writeHydrateScope(_scope1_id, (_s => (_scope1_.set(_i, _s), _s))({
      "selected": selected,
      "num": num,
      [_SYMBOL_OWNER]: _scope0_id
    }));
    _maybeFlush();
  }
  _write(`${_markHydrateControlSingleNodeEnd(_scope0_id, "#text/0", _forScopeIds)}`);
  _writeHydrateScope(_scope0_id, {
    "#text/0(": _scope1_.size ? _scope1_ : undefined
  }, _scope0_);
}, "packages/translator/src/__tests__/fixtures/basic-nested-scope-for/template.marko");
export default _renderer;
export const render = /* @__PURE__ */_createRenderer(_renderer);
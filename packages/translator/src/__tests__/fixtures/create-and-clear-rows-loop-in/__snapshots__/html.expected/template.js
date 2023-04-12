import { write as _write, escapeXML as _escapeXML, markHydrateNode as _markHydrateNode, SYMBOL_OWNER as _SYMBOL_OWNER, markHydrateControlSingleNodeEnd as _markHydrateControlSingleNodeEnd, nextScopeId as _nextScopeId, writeHydrateScope as _writeHydrateScope, maybeFlush as _maybeFlush, register as _register, createRenderer as _createRenderer } from "@marko/runtime-fluurt/src/html";
const _renderer = _register((input, _tagVar, _scope0_) => {
  const _scope0_id = _nextScopeId();
  _write("<div>");
  const _forScopeIds = [],
    _scope1_ = new Map();
  for (const key in input.children) {
    const _scope1_id = _nextScopeId();
    const text = input.children[key];
    _forScopeIds.push(_scope1_id);
    _write(`<p>${_escapeXML(key)}${_markHydrateNode(_scope1_id, "#text/0")}: <!>${_escapeXML(text)}${_markHydrateNode(_scope1_id, "#text/1")}</p>`);
    _writeHydrateScope(_scope1_id, (_s => (_scope1_.set(key, _s), _s))({
      [_SYMBOL_OWNER]: _scope0_id
    }));
    _maybeFlush();
  }
  _write(`${_markHydrateControlSingleNodeEnd(_scope0_id, "#text/0", _forScopeIds)}`);
  const _forScopeIds2 = [],
    _scope2_ = new Map();
  for (const key in input.children) {
    const _scope2_id = _nextScopeId();
    _forScopeIds2.push(_scope2_id);
    _write(`<p>${_escapeXML(key)}${_markHydrateNode(_scope2_id, "#text/0")}</p>`);
    _writeHydrateScope(_scope2_id, (_s2 => (_scope2_.set(key, _s2), _s2))({
      [_SYMBOL_OWNER]: _scope0_id
    }));
    _maybeFlush();
  }
  _write(`${_markHydrateControlSingleNodeEnd(_scope0_id, "#text/1", _forScopeIds2)}</div>`);
  _writeHydrateScope(_scope0_id, {
    "#text/0(": _scope1_.size ? _scope1_ : undefined,
    "#text/1(": _scope2_.size ? _scope2_ : undefined
  }, _scope0_);
}, "packages/translator/src/__tests__/fixtures/create-and-clear-rows-loop-in/template.marko");
export default _renderer;
export const render = /* @__PURE__ */_createRenderer(_renderer);
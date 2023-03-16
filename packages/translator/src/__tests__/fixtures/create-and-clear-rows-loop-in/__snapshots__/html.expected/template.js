import { write as _write, escapeXML as _escapeXML, markHydrateNode as _markHydrateNode, SYMBOL_OWNER as _SYMBOL_OWNER, nextScopeId as _nextScopeId, writeHydrateScope as _writeHydrateScope, maybeFlush as _maybeFlush, markHydrateControlSingleNodeEnd as _markHydrateControlSingleNodeEnd, register as _register, createRenderer as _createRenderer } from "@marko/runtime-fluurt/src/html";
const _renderer = _register((input, _tagVar, _scope0_) => {
  const _scope0_id = _nextScopeId();
  _write("<div>");
  let _forScopeIds = [];
  const _scope1_ = [];
  for (const key in input.children) {
    const text = input.children[key];
    const _scope1_id = _nextScopeId();
    _write(`<p>${_escapeXML(key)}${_markHydrateNode(_scope1_id, "#text/0")}: <!>${_escapeXML(text)}${_markHydrateNode(_scope1_id, "#text/1")}</p>`);
    _writeHydrateScope(_scope1_id, {
      [_SYMBOL_OWNER]: _scope0_id
    }, _scope1_);
    _maybeFlush();
    _forScopeIds.push(_scope1_id);
  }
  _write(`${_markHydrateControlSingleNodeEnd(_scope0_id, "#text/0", _forScopeIds)}`);
  let _forScopeIds2 = [];
  const _scope2_ = [];
  for (const key in input.children) {
    const _scope2_id = _nextScopeId();
    _write(`<p>${_escapeXML(key)}${_markHydrateNode(_scope2_id, "#text/0")}</p>`);
    _writeHydrateScope(_scope2_id, {
      [_SYMBOL_OWNER]: _scope0_id
    }, _scope2_);
    _maybeFlush();
    _forScopeIds2.push(_scope2_id);
  }
  _write(`${_markHydrateControlSingleNodeEnd(_scope0_id, "#text/1", _forScopeIds2)}</div>`);
}, "packages/translator/src/__tests__/fixtures/create-and-clear-rows-loop-in/template.marko");
export default _renderer;
export const render = /* @__PURE__ */_createRenderer(_renderer);
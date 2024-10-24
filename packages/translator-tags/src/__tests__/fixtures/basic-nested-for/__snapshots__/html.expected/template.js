import { markResumeNode as _markResumeNode, write as _write, peekNextScope as _peekNextScope, writeExistingScope as _writeExistingScope, markResumeControlSingleNodeEnd as _markResumeControlSingleNodeEnd, ensureScopeWithId as _ensureScopeWithId, writeScope as _writeScope, nextScopeId as _nextScopeId, getScopeById as _getScopeById, forOf as _forOf, writeEffect as _writeEffect, createRenderer as _createRenderer, createTemplate as _createTemplate } from "@marko/runtime-tags/debug/html";
import _child from "./components/child.marko";
const _renderer = /* @__PURE__ */_createRenderer((input, _tagVar) => {
  const _scope0_id = _nextScopeId();
  const items = [0, 1];
  _write(`<button>Push</button>${_markResumeNode(_scope0_id, "#button/0")}`);
  const _forScopeIds2 = [],
    _scope1_ = new Map();
  _forOf(items, (outer, _index2) => {
    const _scope1_id = _nextScopeId();
    const _forScopeIds = [],
      _scope2_ = new Map();
    _forOf(items, (inner, _index) => {
      const _scope2_id = _nextScopeId();
      const _childScope = _peekNextScope();
      _child({
        name: `${outer}.${inner}`
      });
      _forScopeIds.push(_scope2_id);
      _writeScope(_scope2_id, {
        "#childScope/0": _writeExistingScope(_childScope),
        "_": _ensureScopeWithId(_scope1_id)
      });
      _scope2_.set(_index, _getScopeById(_scope2_id));
    });
    _forScopeIds2.push(_scope1_id);
    _write(`${_markResumeControlSingleNodeEnd(_scope1_id, "#text/0", _forScopeIds)}`);
    _writeScope(_scope1_id, {
      "outer": outer,
      "#text/0(": _scope2_.size ? _scope2_ : undefined,
      "_": _ensureScopeWithId(_scope0_id)
    });
    _scope1_.set(_index2, _getScopeById(_scope1_id));
  });
  _write(`${_markResumeControlSingleNodeEnd(_scope0_id, "#text/1", _forScopeIds2)}`);
  _writeEffect(_scope0_id, "packages/translator-tags/src/__tests__/fixtures/basic-nested-for/template.marko_0_items");
  _writeScope(_scope0_id, {
    "items": items,
    "#text/1(": _scope1_.size ? _scope1_ : undefined
  });
});
export default /* @__PURE__ */_createTemplate(_renderer, "packages/translator-tags/src/__tests__/fixtures/basic-nested-for/template.marko");
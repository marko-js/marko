import { markResumeNode as _markResumeNode, register as _register, write as _write, peekNextScope as _peekNextScope, markResumeControlSingleNodeEnd as _markResumeControlSingleNodeEnd, ensureScopeWithId as _ensureScopeWithId, writeScope as _writeScope, nextScopeId as _nextScopeId, getScopeById as _getScopeById, writeEffect as _writeEffect, createRenderer as _createRenderer, createTemplate as _createTemplate } from "@marko/runtime-tags/debug/html";
import _child from "./components/child.marko";
const _renderer = /* @__PURE__ */_createRenderer((input, _tagVar) => {
  const _scope0_id = _nextScopeId();
  const items = [1, 2, 3];
  const el = () => {
    throw new Error("Cannot reference DOM node from server");
  };
  const write = _register(function (msg) {
    el().innerHTML += '\n' + msg;
  }, "packages/translator-tags/src/__tests__/fixtures/cleanup-single-child-for-deep/template.marko_0/_", _scope0_id);
  _write(`<button>Toggle</button>${_markResumeNode(_scope0_id, "#button/0")}<div></div>${_markResumeNode(_scope0_id, "#div/1")}`);
  const _forScopeIds2 = [],
    _scope1_ = new Map();
  let _i4 = 0;
  for (const outerItem of items) {
    const _scope1_id = _nextScopeId();
    let _i3 = _i4++;
    _write("<div>");
    const _childScope = _peekNextScope();
    _child._({
      write: write,
      name: `${outerItem}`
    });
    const _forScopeIds = [],
      _scope2_ = new Map();
    let _i2 = 0;
    for (const middleItem of items) {
      const _scope2_id = _nextScopeId();
      let _i = _i2++;
      _write("<div>");
      const _childScope2 = _peekNextScope();
      _child._({
        write: write,
        name: `${outerItem}.${middleItem}`
      });
      _forScopeIds.push(_scope2_id);
      _write("</div>");
      _writeScope(_scope2_id, {
        "#childScope/0": _childScope2,
        "_": _ensureScopeWithId(_scope1_id)
      });
      _scope2_.set(_i, _getScopeById(_scope2_id));
    }
    _forScopeIds2.push(_scope1_id);
    _write(`${_markResumeControlSingleNodeEnd(_scope1_id, "#text/1", _forScopeIds)}</div>`);
    _writeScope(_scope1_id, {
      "outerItem": outerItem,
      "#childScope/0": _childScope,
      "#text/1(": _scope2_.size ? _scope2_ : undefined,
      "_": _ensureScopeWithId(_scope0_id)
    });
    _scope1_.set(_i3, _getScopeById(_scope1_id));
  }
  _write(`${_markResumeControlSingleNodeEnd(_scope0_id, "#text/2", _forScopeIds2)}`);
  _writeEffect(_scope0_id, "packages/translator-tags/src/__tests__/fixtures/cleanup-single-child-for-deep/template.marko_0_items");
  _writeScope(_scope0_id, {
    "items": items,
    "write": write,
    "#text/2(": _scope1_.size ? _scope1_ : undefined
  });
});
export default /* @__PURE__ */_createTemplate(_renderer, "packages/translator-tags/src/__tests__/fixtures/cleanup-single-child-for-deep/template.marko");
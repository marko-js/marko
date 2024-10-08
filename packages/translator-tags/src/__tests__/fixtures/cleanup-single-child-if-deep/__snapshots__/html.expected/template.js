import { markResumeNode as _markResumeNode, register as _register, write as _write, peekNextScope as _peekNextScope, writeExistingScope as _writeExistingScope, writeScope as _writeScope, nextScopeId as _nextScopeId, createRenderer as _createRenderer, markResumeControlSingleNodeEnd as _markResumeControlSingleNodeEnd, getScopeById as _getScopeById, ensureScopeWithId as _ensureScopeWithId, writeEffect as _writeEffect, createTemplate as _createTemplate } from "@marko/runtime-tags/debug/html";
import _child from "./components/child.marko";
const _renderer = /* @__PURE__ */_createRenderer((input, _tagVar) => {
  const _scope0_id = _nextScopeId();
  const showOuter = true;
  const showMiddle = true;
  const showInner = true;
  const el = () => {
    throw new Error("Cannot reference DOM node from server");
  };
  const write = _register(function (msg) {
    el().innerHTML += '\n' + msg;
  }, "packages/translator-tags/src/__tests__/fixtures/cleanup-single-child-if-deep/template.marko_0/_", _scope0_id);
  _write(`<button id=outer>Toggle Outer</button>${_markResumeNode(_scope0_id, "#button/0")}<button id=middle>Toggle Middle</button>${_markResumeNode(_scope0_id, "#button/1")}<button id=inner>Toggle Inner</button>${_markResumeNode(_scope0_id, "#button/2")}<pre></pre>${_markResumeNode(_scope0_id, "#pre/3")}`);
  let _ifScopeId3, _ifRenderer3;
  if (showOuter) {
    const _scope1_id = _nextScopeId();
    _write("<div>");
    const _childScope = _peekNextScope();
    _child._({
      write: write,
      name: "Outer"
    });
    let _ifScopeId2, _ifRenderer2;
    if (showMiddle) {
      const _scope2_id = _nextScopeId();
      _write("<div>");
      const _childScope2 = _peekNextScope();
      _child._({
        write: write,
        name: "Middle"
      });
      let _ifScopeId, _ifRenderer;
      if (showInner) {
        const _scope3_id = _nextScopeId();
        const _childScope3 = _peekNextScope();
        _child._({
          write: write,
          name: "Inner"
        });
        _writeScope(_scope3_id, {
          "#childScope/0": _writeExistingScope(_childScope3)
        });
        _register(_ifRenderer = /* @__PURE__ */_createRenderer(() => {}), "packages/translator-tags/src/__tests__/fixtures/cleanup-single-child-if-deep/template.marko_3_renderer", _scope2_id);
        _ifScopeId = _scope3_id;
      }
      _write(`${_markResumeControlSingleNodeEnd(_scope2_id, "#text/1", _ifScopeId)}</div>`);
      _writeEffect(_scope2_id, "packages/translator-tags/src/__tests__/fixtures/cleanup-single-child-if-deep/template.marko_2_showInner/subscriber");
      _writeScope(_scope2_id, {
        "#childScope/0": _writeExistingScope(_childScope2),
        "#text/1(": _ifRenderer,
        "#text/1!": _getScopeById(_ifScopeId),
        "_": _ensureScopeWithId(_scope1_id)
      });
      _register(_ifRenderer2 = /* @__PURE__ */_createRenderer(() => {}), "packages/translator-tags/src/__tests__/fixtures/cleanup-single-child-if-deep/template.marko_2_renderer", _scope1_id);
      _ifScopeId2 = _scope2_id;
    }
    _write(`${_markResumeControlSingleNodeEnd(_scope1_id, "#text/1", _ifScopeId2)}</div>`);
    _writeScope(_scope1_id, {
      "#childScope/0": _writeExistingScope(_childScope),
      "_": _ensureScopeWithId(_scope0_id),
      "#text/1(": _ifRenderer2,
      "#text/1!": _getScopeById(_ifScopeId2)
    });
    _register(_ifRenderer3 = /* @__PURE__ */_createRenderer(() => {}), "packages/translator-tags/src/__tests__/fixtures/cleanup-single-child-if-deep/template.marko_1_renderer", _scope0_id);
    _ifScopeId3 = _scope1_id;
  }
  _write(`${_markResumeControlSingleNodeEnd(_scope0_id, "#text/4", _ifScopeId3)}`);
  _writeEffect(_scope0_id, "packages/translator-tags/src/__tests__/fixtures/cleanup-single-child-if-deep/template.marko_0_showInner");
  _writeEffect(_scope0_id, "packages/translator-tags/src/__tests__/fixtures/cleanup-single-child-if-deep/template.marko_0_showMiddle");
  _writeEffect(_scope0_id, "packages/translator-tags/src/__tests__/fixtures/cleanup-single-child-if-deep/template.marko_0_showOuter");
  _writeScope(_scope0_id, {
    "showOuter": showOuter,
    "showMiddle": showMiddle,
    "showInner": showInner,
    "write": write,
    "#text/4(": _ifRenderer3,
    "#text/4!": _getScopeById(_ifScopeId3)
  });
});
export default /* @__PURE__ */_createTemplate(_renderer, "packages/translator-tags/src/__tests__/fixtures/cleanup-single-child-if-deep/template.marko");
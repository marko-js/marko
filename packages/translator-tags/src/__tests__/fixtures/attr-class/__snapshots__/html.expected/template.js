import { classAttr as _classAttr, markResumeNode as _markResumeNode, write as _write, peekNextScope as _peekNextScope, createRenderer as _createRenderer, register as _register, ensureScopeWithId as _ensureScopeWithId, writeEffect as _writeEffect, writeScope as _writeScope, nextScopeId as _nextScopeId, dynamicTagInput as _dynamicTagInput, markResumeControlEnd as _markResumeControlEnd, createTemplate as _createTemplate } from "@marko/runtime-tags/debug/html";
import _customTag from "./components/custom-tag.marko";
const _renderer = /* @__PURE__ */_createRenderer((input, _tagVar) => {
  const _scope0_id = _nextScopeId();
  const {
    c,
    d
  } = input;
  _write(`<div${_classAttr(["a", {
    b: c,
    d
  }])}></div>${_markResumeNode(_scope0_id, "#div/0")}<div class="a b"></div><div class="a b c"></div>`);
  const _childScope = _peekNextScope();
  _customTag._({
    class: ["a", {
      b: c,
      d
    }]
  });
  const _childScope2 = _peekNextScope();
  _customTag._({
    class: ["a", false, "b"]
  });
  const _dynamicScope = _peekNextScope();
  _dynamicTagInput(_dynamicScope, input.test, {
    class: ["a", {
      b: c,
      d
    }],
    test: {
      class: ["a", {
        b: c,
        d
      }],
      renderBody: _register(/* @__PURE__ */_createRenderer(() => {
        _write("Hello");
      }), "packages/translator-tags/src/__tests__/fixtures/attr-class/template.marko_2_renderer")
    }
  }, _register(/* @__PURE__ */_createRenderer(() => {
    const _scope1_id = _nextScopeId();
    _writeEffect(_scope1_id, "packages/translator-tags/src/__tests__/fixtures/attr-class/template.marko_1_c/subscriber");
    _writeEffect(_scope1_id, "packages/translator-tags/src/__tests__/fixtures/attr-class/template.marko_1_d/subscriber");
    _writeScope(_scope1_id, {
      "_": _ensureScopeWithId(_scope0_id)
    });
  }), "packages/translator-tags/src/__tests__/fixtures/attr-class/template.marko_1_renderer", _scope0_id));
  _write(`${_markResumeControlEnd(_scope0_id, "#text/3")}`);
  _writeScope(_scope0_id, {
    "c": c,
    "d": d,
    "#childScope/1": _childScope,
    "#childScope/2": _childScope2,
    "#text/3!": _dynamicScope,
    "#text/3(": input.test
  });
});
export default /* @__PURE__ */_createTemplate(_renderer, "packages/translator-tags/src/__tests__/fixtures/attr-class/template.marko");
import { styleAttr as _styleAttr, markResumeNode as _markResumeNode, write as _write, peekNextScope as _peekNextScope, writeExistingScope as _writeExistingScope, createRenderer as _createRenderer, register as _register, dynamicTagInput as _dynamicTagInput, markResumeControlEnd as _markResumeControlEnd, normalizeDynamicRenderer as _normalizeDynamicRenderer, writeScope as _writeScope, nextScopeId as _nextScopeId, createTemplate as _createTemplate } from "@marko/runtime-tags/debug/html";
import _customTag from "./components/custom-tag.marko";
const _renderer = /* @__PURE__ */_createRenderer((input, _tagVar) => {
  const _scope0_id = _nextScopeId();
  const {
    color,
    test
  } = input;
  _write(`<div${_styleAttr({
    color: color
  })}></div>${_markResumeNode(_scope0_id, "#div/0")}<div style=width:100px></div><div style="color: green"></div>`);
  const _childScope = _peekNextScope();
  _customTag({
    style: {
      color: color
    }
  });
  const _childScope2 = _peekNextScope();
  _customTag({
    style: {
      width: 100
    }
  });
  const _childScope3 = _peekNextScope();
  _customTag({
    style: "color: green"
  });
  const _dynamicScope = _peekNextScope();
  _dynamicTagInput(_dynamicScope, test, {
    style: {
      color: "green"
    },
    test: {
      style: {
        color: "green"
      },
      renderBody: _register(/* @__PURE__ */_createRenderer(() => {
        _write("Hello");
      }), "packages/translator-tags/src/__tests__/fixtures/attr-style/template.marko_2_renderer", _scope0_id)
    }
  });
  _write(`${_markResumeControlEnd(_scope0_id, "#text/4")}`);
  _writeScope(_scope0_id, {
    "#childScope/1": _writeExistingScope(_childScope),
    "#childScope/2": _writeExistingScope(_childScope2),
    "#childScope/3": _writeExistingScope(_childScope3),
    "#text/4!": _writeExistingScope(_dynamicScope),
    "#text/4(": _normalizeDynamicRenderer(test)
  });
});
export default /* @__PURE__ */_createTemplate(_renderer, "packages/translator-tags/src/__tests__/fixtures/attr-style/template.marko");
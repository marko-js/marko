import { styleAttr as _styleAttr, markResumeNode as _markResumeNode, write as _write, peekNextScope as _peekNextScope, createRenderer as _createRenderer, dynamicTagInput as _dynamicTagInput, markResumeControlEnd as _markResumeControlEnd, writeScope as _writeScope, nextScopeId as _nextScopeId, createTemplate as _createTemplate } from "@marko/runtime-tags/debug/html";
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
  _customTag._({
    style: {
      color: color
    }
  });
  const _childScope2 = _peekNextScope();
  _customTag._({
    style: {
      width: 100
    }
  });
  const _childScope3 = _peekNextScope();
  _customTag._({
    style: "color: green"
  });
  const _dynamicScope = _dynamicTagInput(test, {
    style: {
      color: "green"
    },
    test: {
      style: {
        color: "green"
      },
      renderBody: /* @__PURE__ */_createRenderer(() => {
        _write("Hello");
      })
    }
  });
  _write(`${_markResumeControlEnd(_scope0_id, "#text/4")}`);
  _writeScope(_scope0_id, {
    "#childScope/1": _childScope,
    "#childScope/2": _childScope2,
    "#childScope/3": _childScope3,
    "#text/4!": _dynamicScope,
    "#text/4(": test
  });
});
export default /* @__PURE__ */_createTemplate(_renderer, "packages/translator-tags/src/__tests__/fixtures/attr-style/template.marko");
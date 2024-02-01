import { styleAttr as _styleAttr, markResumeNode as _markResumeNode, write as _write, dynamicTagInput as _dynamicTagInput, markResumeControlEnd as _markResumeControlEnd, writeScope as _writeScope, nextScopeId as _nextScopeId, createRenderer as _createRenderer, createTemplate as _createTemplate } from "@marko/runtime-tags/src/html";
import _customTag from "./components/custom-tag.marko";
const _renderer = /* @__PURE__ */_createRenderer(({
  color,
  test
}, _tagVar) => {
  const _scope0_id = _nextScopeId();
  _write(`<div${_styleAttr({
    color: color
  })}></div>${_markResumeNode(_scope0_id, "#div/0")}<div style=width:100px></div><div style="color: green"></div>`);
  _customTag._({
    style: {
      color: color
    }
  });
  _customTag._({
    style: {
      width: 100
    }
  });
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
      renderBody() {
        _write("Hello");
      }
    }
  });
  _write(`${_markResumeControlEnd(_scope0_id, "#text/4")}`);
  _writeScope(_scope0_id, {
    "#text/4!": _dynamicScope,
    "#text/4(": test
  });
});
export default /* @__PURE__ */_createTemplate(_renderer, "packages/translator-tags/src/__tests__/fixtures/attr-style/template.marko");
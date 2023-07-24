import { styleAttr as _styleAttr, markResumeNode as _markResumeNode, write as _write, nextScopeId as _nextScopeId, dynamicTag as _dynamicTag, markResumeControlEnd as _markResumeControlEnd, writeScope as _writeScope, register as _register, createRenderer as _createRenderer } from "@marko/runtime-fluurt/src/html";
import _customTag from "./components/custom-tag.marko";
const _renderer = _register(({
  color,
  test
}, _tagVar, _scope0_) => {
  const _scope0_id = _nextScopeId();
  _write(`<div${_styleAttr({
    color: color
  })}></div>${_markResumeNode(_scope0_id, "#div/0")}<div style=width:100px></div><div style="color: green"></div>`);
  _customTag({
    style: {
      color: color
    },
    renderBody() {
      const _scope3_id = _nextScopeId();
    }
  });
  _customTag({
    style: {
      width: 100
    },
    renderBody() {
      const _scope4_id = _nextScopeId();
    }
  });
  _customTag({
    style: "color: green",
    renderBody() {
      const _scope5_id = _nextScopeId();
    }
  });
  const _dynamicScope = _dynamicTag(test, {
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
  }, _scope0_);
}, "packages/translator/src/__tests__/fixtures/attr-style/template.marko");
export default _renderer;
export const render = /* @__PURE__ */_createRenderer(_renderer);
import { styleAttr as _styleAttr, markResumeNode as _markResumeNode, write as _write, nextScopeId as _nextScopeId, dynamicTag as _dynamicTag, markResumeControlEnd as _markResumeControlEnd, writeScope as _writeScope, createTemplate as _createTemplate } from "@marko/runtime-fluurt/src/html";
import _customTag from "./components/custom-tag.marko";
const _renderer = ({
  color,
  test
}, _tagVar, _scope0_) => {
  const _scope0_id = _nextScopeId();
  _write(`<div${_styleAttr({
    color: color
  })}></div>${_markResumeNode(_scope0_id, "#div/0")}<div style=width:100px></div><div style="color: green"></div>`);
  _customTag._({
    style: {
      color: color
    },
    renderBody() {
      const _scope3_id = _nextScopeId();
    }
  });
  _customTag._({
    style: {
      width: 100
    },
    renderBody() {
      const _scope4_id = _nextScopeId();
    }
  });
  _customTag._({
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
};
export default /* @__PURE__ */_createTemplate(_renderer, "packages/translator/src/__tests__/fixtures/attr-style/template.marko");
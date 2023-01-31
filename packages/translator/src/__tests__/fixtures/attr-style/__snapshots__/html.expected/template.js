import { styleAttr as _styleAttr, markHydrateNode as _markHydrateNode, write as _write, nextScopeId as _nextScopeId, dynamicTag as _dynamicTag, markHydrateControlEnd as _markHydrateControlEnd, writeHydrateScope as _writeHydrateScope, register as _register, createRenderer as _createRenderer } from "@marko/runtime-fluurt/src/html";
import _customTag from "./components/custom-tag.marko";
const _renderer = _register(({
  color,
  test
}, _tagVar, _scope0_) => {
  const _scope0_id = _nextScopeId();
  _write(`<div${_styleAttr({
    color: color
  })}></div>${_markHydrateNode(_scope0_id, "#div/0")}<div style=width:100px></div><div style="color: green"></div>`);
  _customTag({
    style: {
      color: color
    },
    renderBody() {
      const _scope2_id = _nextScopeId();
    }
  });
  _customTag({
    style: {
      width: 100
    },
    renderBody() {
      const _scope3_id = _nextScopeId();
    }
  });
  _customTag({
    style: "color: green",
    renderBody() {
      const _scope4_id = _nextScopeId();
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
  _write(`${_markHydrateControlEnd(_scope0_id, "#text/4")}`);
  _writeHydrateScope(_scope0_id, {
    "#text/4!": _dynamicScope,
    "#text/4(": test
  }, _scope0_);
}, "packages/translator/src/__tests__/fixtures/attr-style/template.marko");
export default _renderer;
export const render = /* @__PURE__ */_createRenderer(_renderer);
import { styleAttr as _styleAttr, markHydrateNode as _markHydrateNode, write as _write, nextScopeId as _nextScopeId, dynamicTag as _dynamicTag, createRenderer as _createRenderer } from "@marko/runtime-fluurt/src/html";
import _customTag from "./components/custom-tag.marko";
const _renderer = ({
  color,
  test
}, _tagVar) => {
  const _scope = _nextScopeId();
  _write(`<div${_styleAttr({
    color: color
  })}></div>${_markHydrateNode(_scope, 0)}<div style=width:100px></div><div style="color: green"></div>`);
  _customTag({
    style: {
      color: color
    },
    renderBody() {
      const _scope = _nextScopeId();
    }
  });
  _customTag({
    style: {
      width: 100
    },
    renderBody() {
      const _scope = _nextScopeId();
    }
  });
  _customTag({
    style: "color: green",
    renderBody() {
      const _scope = _nextScopeId();
    }
  });
  _dynamicTag(test, {
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
};
export default _renderer;
export const render = /* @__PURE__ */_createRenderer(_renderer);
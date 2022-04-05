import { markHydrateNode as _markHydrateNode, styleAttr as _styleAttr, write as _write, nextScopeId as _nextScopeId, createRenderer as _createRenderer } from "@marko/runtime-fluurt/src/html";
import _customTag from "./components/custom-tag.marko";

const _renderer = ({
  color,
  test
}) => {
  const _scope = _nextScopeId();

  _write(`${_markHydrateNode(_scope, 0)}<div${_styleAttr({
    color: color
  })}></div><div style=width:100px></div><div style="color: green"></div>`);

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

  <${test} style={
    color: "green"
  } test={
    style: {
      color: "green"
    },

    renderBody() {
      _write("Hello");
    }

  }/>
};

export default _renderer;
export const render = _createRenderer(_renderer);
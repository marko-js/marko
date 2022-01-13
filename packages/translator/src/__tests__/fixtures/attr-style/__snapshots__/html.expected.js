import { markScopeOffset as _markScopeOffset, styleAttr as _styleAttr, write as _write, register as _register, createRenderer as _createRenderer } from "@marko/runtime-fluurt/src/html";
import _customTag from "./components/custom-tag.marko";

const _renderer = _register("packages/translator/src/__tests__/fixtures/attr-style/template.marko", input => {
  _write(`${_markScopeOffset(0)}<div${_styleAttr({
    color: color
  })}></div><div style=width:100px></div><div style="color: green"></div>`);

  _customTag({
    style: {
      color: color
    }
  });

  _customTag({
    style: {
      width: 100
    }
  });

  _customTag({
    style: "color: green"
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
});

export default _renderer;
export const render = _createRenderer(_renderer);
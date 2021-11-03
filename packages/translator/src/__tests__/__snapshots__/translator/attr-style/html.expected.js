import { styleAttr as _styleAttr, write as _write, dynamicTag as _dynamicTag, register as _register, createRenderer as _createRenderer } from "@marko/runtime-fluurt/src/html";
import _customTag from "./components/custom-tag.marko";

const _renderer = _register("src/__tests__/fixtures/attr-style/template.marko", input => {
  _write(`<div${_styleAttr({
    color: input.color
  })}></div><div style=width:100px></div><div style="color: green"></div>`);

  _customTag({
    style: {
      color: input.color
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

  _dynamicTag(input.test, {
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
});

export default _renderer;
export const render = _createRenderer(_renderer);
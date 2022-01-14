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

import { styleAttr as _styleAttr, write as _write, dynamicTag as _dynamicTag, createRenderFn as _createRenderFn } from "@marko/runtime-fluurt/src/dom";
import { hydrate as _customTag, template as _customTag_template, walks as _customTag_walks } from "./components/custom-tag.marko";

function _apply_color(color) {
  if (_write(1, color)) _styleAttr(0, {
    color: color
  });
}

export const template = `<div></div><div style=width:100px></div><div style="color: green"></div>${_customTag_template}${_customTag_template}${_customTag_template}`;
export const walks = ` ${_customTag_walks}${_customTag_walks}${_customTag_walks}`;
export const apply = _apply_color;
export default _createRenderFn(template, walks, apply);
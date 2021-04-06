import { styleAttr as _styleAttr, walk as _walk, write as _write, dynamicTag as _dynamicTag, register as _register, createRenderFn as _createRenderFn } from "@marko/runtime-fluurt/dist/dom";
import { hydrate as _customTag, template as _customTag_template, walks as _customTag_walks } from "./components/custom-tag.marko";
export const template = `<div></div><div style=width:100px></div><div style="color: green"></div>${_customTag_template}${_customTag_template}${_customTag_template}`;
export const walks = ` ${_customTag_walks}${_customTag_walks}${_customTag_walks}d`;
export const hydrate = _register("rL9tpv82", input => {
  _walk();

  _styleAttr({
    color: input.color
  });

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
export default _createRenderFn(template, walks, ["color", "test"], hydrate);
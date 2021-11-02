_dynamicTag(input.test, {
  style: {
    color: "green"
  },
  test: {
    style: {
      color: "green"
    }
  }
});

import { attr as _attr, dynamicTag as _dynamicTag, register as _register, createRenderFn as _createRenderFn } from "@marko/runtime-fluurt/dist/dom";
import { hydrate as _customTag, template as _customTagTemplate, walks as _customTagWalks } from "./components/custom-tag.marko";
export const template = "<div></div><div style=\"[object Object]\"></div><div style=\"color: green\"></div>" + _customTagTemplate + _customTagTemplate + _customTagTemplate + "Hello";
export const walks = `!_${_customTagWalks}${_customTagWalks}${_customTagWalks}]`;
export const hydrate = _register("rL9tpv82", input => {
  _attr("style", {
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
});
export default _createRenderFn(template, walks, ["color", "test"], hydrate);
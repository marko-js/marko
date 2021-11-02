const {
  c,
  d
} = input;

_dynamicTag(input.test, {
  class: ["a", {
    b: c,
    d
  }],
  test: {
    class: ["a", {
      b: c,
      d
    }]
  }
});

import { attr as _attr, dynamicTag as _dynamicTag, register as _register, createRenderFn as _createRenderFn } from "@marko/runtime-fluurt/dist/dom";
import { hydrate as _customTag, template as _customTagTemplate, walks as _customTagWalks } from "./components/custom-tag.marko";
export const template = "<div></div><div class=a,false,b></div><div class=\"a b c\"></div>" + _customTagTemplate + _customTagTemplate + "Hello";
export const walks = `!_${_customTagWalks}${_customTagWalks}]`;
export const hydrate = _register("KWMISTno", input => {
  _attr("class", ["a", {
    b: c,
    d
  }]);

  _customTag({
    class: ["a", {
      b: c,
      d
    }]
  });

  _customTag({
    class: ["a", false, "b"]
  });
});
export default _createRenderFn(template, walks, ["", "test"], hydrate);
import { classAttr as _classAttr, write as _write, dynamicTag as _dynamicTag, register as _register, createRenderFn as _createRenderFn } from "@marko/runtime-fluurt/src/dom";
import { hydrate as _customTag, template as _customTag_template, walks as _customTag_walks } from "./components/custom-tag.marko";
export const template = `<div></div><div class="a b"></div><div class="a b c"></div>${_customTag_template}${_customTag_template}`;
export const walks = ` ${_customTag_walks}${_customTag_walks}d`;
export const hydrate = _register("packages/translator/src/__tests__/fixtures/attr-class/template.marko", input => {
  const {
    c,
    d
  } = input;

  _classAttr(["a", {
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

  _dynamicTag(input.test, {
    class: ["a", {
      b: c,
      d
    }],
    test: {
      class: ["a", {
        b: c,
        d
      }],

      renderBody() {
        _write("Hello");
      }

    }
  });
});
export default _createRenderFn(template, walks, ["", "test"], hydrate);
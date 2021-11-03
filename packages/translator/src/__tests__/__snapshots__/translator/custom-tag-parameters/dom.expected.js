import { data as _data, createRenderer as _createRenderer, register as _register, createRenderFn as _createRenderFn } from "@marko/runtime-fluurt/src/dom";
import { hydrate as _customTag, template as _customTag_template, walks as _customTag_walks } from "./components/custom-tag.marko";
export const template = `${_customTag_template}`;
export const walks = `${_customTag_walks}`;
export const hydrate = _register("src/__tests__/fixtures/custom-tag-parameters/template.marko", input => {
  _customTag({
    renderBody: _createRenderer("<div><!> <!> <!></div>", "D%c%c%l", (a, b, {
      c
    }) => {
      _data(a);

      _data(b);

      _data(c);
    })
  });
});
export default _createRenderFn(template, walks, [], hydrate);
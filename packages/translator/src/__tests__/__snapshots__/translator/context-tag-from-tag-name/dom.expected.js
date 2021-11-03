import { write as _write, getInContext as _getInContext, data as _data, createRenderer as _createRenderer, register as _register, createRenderFn as _createRenderFn } from "@marko/runtime-fluurt/src/dom";
import { hydrate as _other, template as _other_template, walks as _other_walks } from "./components/other.marko";
export const template = `${_other_template}`;
export const walks = `${_other_walks}`;
export const hydrate = _register("src/__tests__/fixtures/context-tag-from-tag-name/template.marko", input => {
  _other({
    renderBody: _createRenderer("<!></span>", "D%l", () => {
      _write("<span>");

      const message = _getInContext("src/__tests__/fixtures/context-tag-from-tag-name/components/other.marko");

      _data(message);
    })
  });
});
export default _createRenderFn(template, walks, [], hydrate);
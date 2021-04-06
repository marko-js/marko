import { write as _write, getInContext as _getInContext, data as _data, createRenderer as _createRenderer, register as _register, createRenderFn as _createRenderFn } from "@marko/runtime-fluurt/dist/dom";
import { hydrate as _other, template as _other_template, walks as _other_walks } from "./components/other.marko";
export const template = `${_other_template}`;
export const walks = `${_other_walks}`;
export const hydrate = _register("J7/2K4Cb", input => {
  _other({
    renderBody: _createRenderer("<!></span>", "D%l", () => {
      _write("<span>");

      const message = _getInContext("X9AHTyyj");

      _data(message);
    })
  });
});
export default _createRenderFn(template, walks, [], hydrate);
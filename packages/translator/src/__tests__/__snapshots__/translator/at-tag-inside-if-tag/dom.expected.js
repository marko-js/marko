import { write as _write, register as _register, createRenderFn as _createRenderFn } from "@marko/runtime-fluurt/dist/dom";
import { hydrate as _customTag, template as _customTag_template, walks as _customTag_walks } from "./components/custom-tag/index.marko";
export const template = `${_customTag_template}`;
export const walks = `${_customTag_walks}`;
export const hydrate = _register("nEl00T8v", input => {
  let _thing;

  if (input.x) _thing = {
    x: 1,

    renderBody() {
      _write("Hello");
    }

  };

  _customTag({
    thing: _thing
  });
});
export default _createRenderFn(template, walks, ["x"], hydrate);
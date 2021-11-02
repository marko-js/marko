let _thing;

if (input.x) _thing = {
  x: 1
};
import { hydrate as _customTag, template as _customTagTemplate, walks as _customTagWalks } from "./components/custom-tag/index.marko";
import { register as _register, createRenderFn as _createRenderFn } from "@marko/runtime-fluurt/dist/dom";
export const template = "Hello" + _customTagTemplate;
export const walks = `]${_customTagWalks}`;
export const hydrate = _register("nEl00T8v", input => {
  _customTag({
    thing: _thing
  });
});
export default _createRenderFn(template, walks, ["x"], hydrate);
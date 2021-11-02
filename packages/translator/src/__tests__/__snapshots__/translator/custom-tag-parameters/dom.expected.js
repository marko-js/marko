import { text as _text, register as _register, createRenderFn as _createRenderFn } from "@marko/runtime-fluurt/dist/dom";
import { hydrate as _customTag, template as _customTagTemplate, walks as _customTagWalks } from "./components/custom-tag.marko";
export const template = "<div> <!> </div>" + _customTagTemplate;
export const walks = `]#]&^$'${_customTagWalks}`;
export const hydrate = _register("ieufKsWG", input => {
  _text(a);

  _text(b);

  _text(c);

  _customTag();
});
export default _createRenderFn(template, walks, [], hydrate);
import { getInContext as _getInContext, text as _text, register as _register, createRenderFn as _createRenderFn } from "@marko/runtime-fluurt/dist/dom";
import { hydrate as _other, template as _otherTemplate, walks as _otherWalks } from "./components/other.marko";
export const template = "<span></span>" + _otherTemplate;
export const walks = `]$'${_otherWalks}`;
export const hydrate = _register("J7/2K4Cb", input => {
  _text(message);

  _other();
});
export default _createRenderFn(template, walks, [], hydrate);
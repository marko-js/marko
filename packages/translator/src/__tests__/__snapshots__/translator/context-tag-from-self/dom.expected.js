import { pushContext as _pushContext, write as _write, getInContext as _getInContext, data as _data, popContext as _popContext, register as _register, createRenderFn as _createRenderFn } from "@marko/runtime-fluurt/dist/dom";
export const template = "<div></div>";
export const walks = "b";
export const hydrate = _register("UFl+/m9P", input => {
  _pushContext("UFl+/m9P", 1);

  _write("<span>");

  const x = _getInContext("UFl+/m9P");

  _data(x);

  _popContext();
});
export default _createRenderFn(template, walks, [], hydrate);
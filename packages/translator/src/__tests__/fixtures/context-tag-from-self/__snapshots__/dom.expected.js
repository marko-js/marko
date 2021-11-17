import { pushContext as _pushContext, write as _write, getInContext as _getInContext, data as _data, popContext as _popContext, register as _register, createRenderFn as _createRenderFn } from "@marko/runtime-fluurt/src/dom";
export const template = "<div></div>";
export const walks = "b";
export const hydrate = _register("packages/translator/src/__tests__/fixtures/context-tag-from-self/template.marko", input => {
  _pushContext("packages/translator/src/__tests__/fixtures/context-tag-from-self/template.marko", 1);

  _write("<span>");

  const x = _getInContext("packages/translator/src/__tests__/fixtures/context-tag-from-self/template.marko");

  _data(x);

  _popContext();
});
export default _createRenderFn(template, walks, [], hydrate);
const MyTag = input => {};

import { text as _text, register as _register, createRenderFn as _createRenderFn } from "@marko/runtime-fluurt/dist/dom";
export const template = "Hello ";
export const walks = "]$";
export const hydrate = _register("165E3TM6", input => {
  _text(input.name);

  MyTag({
    name: "World"
  });
});
export default _createRenderFn(template, walks, [], hydrate);
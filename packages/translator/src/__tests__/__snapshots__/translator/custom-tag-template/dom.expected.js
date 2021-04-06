import { hydrate as _hello, template as _hello_template, walks as _hello_walks } from "./hello.marko";
import { register as _register, createRenderFn as _createRenderFn } from "@marko/runtime-fluurt/dist/dom";
export const template = `${_hello_template}`;
export const walks = `${_hello_walks}`;
export const hydrate = _register("iWOQOmk3", input => {
  _hello({
    name: "Frank"
  });
});
export default _createRenderFn(template, walks, [], hydrate);
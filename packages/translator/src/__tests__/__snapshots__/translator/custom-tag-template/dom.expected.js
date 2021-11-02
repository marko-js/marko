import { hydrate as _hello, template as _helloTemplate, walks as _helloWalks } from "./hello.marko";
import { register as _register, createRenderFn as _createRenderFn } from "@marko/runtime-fluurt/dist/dom";
export const template = _helloTemplate;
export const walks = `${_helloWalks}`;
export const hydrate = _register("iWOQOmk3", input => {
  _hello({
    name: "Frank"
  });
});
export default _createRenderFn(template, walks, [], hydrate);
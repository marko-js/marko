import { hydrate as _hello, template as _helloTemplate, walks as _helloWalks } from "./components/hello/index.marko";
import { register as _register, createRenderFn as _createRenderFn } from "@marko/runtime-fluurt/dist/dom";
export const template = "Foo!" + _helloTemplate;
export const walks = `]${_helloWalks}`;
export const hydrate = _register("Nh7PwUt/", input => {
  _hello({
    foo: {}
  });
});
export default _createRenderFn(template, walks, [], hydrate);
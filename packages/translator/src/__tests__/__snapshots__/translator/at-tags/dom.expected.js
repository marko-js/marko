import { write as _write, register as _register, createRenderFn as _createRenderFn } from "@marko/runtime-fluurt/dist/dom";
import { hydrate as _hello, template as _hello_template, walks as _hello_walks } from "./components/hello/index.marko";
export const template = `${_hello_template}`;
export const walks = `${_hello_walks}`;
export const hydrate = _register("Nh7PwUt/", input => {
  _hello({
    foo: {
      renderBody() {
        _write("Foo!");
      }

    }
  });
});
export default _createRenderFn(template, walks, [], hydrate);
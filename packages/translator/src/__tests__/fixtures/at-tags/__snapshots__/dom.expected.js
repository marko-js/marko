_hello({
  foo: {
    renderBody() {
      _write("Foo!");
    }

  }
});

import { write as _write, createRenderFn as _createRenderFn } from "@marko/runtime-fluurt/src/dom";
import { hydrate as _hello, template as _hello_template, walks as _hello_walks } from "./components/hello/index.marko";
export const template = `${_hello_template}`;
export const walks = `${_hello_walks}`;
export const apply;
export default _createRenderFn(template, walks, apply);
import { data as _data, write as _write, register as _register, createRenderFn as _createRenderFn } from "@marko/runtime-fluurt/src/dom";
import { hydrate as _hello, template as _hello_template, walks as _hello_walks } from "./components/hello/index.marko";
export const template = `${_hello_template}`;
export const walks = `${_hello_walks}`;
export const hydrate = _register("packages/translator/src/__tests__/fixtures/at-tags-dynamic-with-params/template.marko", input => {
  let _item;

  if (input.x) _item = {
    renderBody(y) {
      _data(y);

      _write("<!>");
    }

  };

  _hello({
    item: _item
  });
});
export default _createRenderFn(template, walks, ["x"], hydrate);
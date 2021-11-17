import { hydrate as _hello, template as _hello_template, walks as _hello_walks } from "./components/hello/index.marko";
import { register as _register, createRenderFn as _createRenderFn } from "@marko/runtime-fluurt/src/dom";
export const template = `${_hello_template}`;
export const walks = `${_hello_walks}`;
export const hydrate = _register("packages/translator/src/__tests__/fixtures/at-tags-dynamic-and-static/template.marko", input => {
  const _item = [];

  for (const a in {
    a: 1,
    b: 2
  }) {
    _item.push({});
  }

  _hello({
    item: _item,
    other: {}
  });
});
export default _createRenderFn(template, walks, [], hydrate);
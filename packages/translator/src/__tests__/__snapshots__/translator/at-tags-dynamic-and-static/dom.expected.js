const _item = [];

for (const a in {
  a: 1,
  b: 2
}) {
  _item.push({});
}

import { hydrate as _hello, template as _helloTemplate, walks as _helloWalks } from "./components/hello/index.marko";
import { register as _register, createRenderFn as _createRenderFn } from "@marko/runtime-fluurt/dist/dom";
export const template = _helloTemplate;
export const walks = `${_helloWalks}`;
export const hydrate = _register("s0ESh+4+", input => {
  _hello({
    item: _item,
    other: {}
  });
});
export default _createRenderFn(template, walks, [], hydrate);
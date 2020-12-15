import _hello from "./components/hello/index.marko";
import { wrapHydratable as _wrapHydratable, createRenderer as _createRenderer } from "@marko/runtime-fluurt/src/html";

const _renderer = _wrapHydratable("packages/translator/test/fixtures/at-tags-dynamic-and-static/template.marko", input => {
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

export default _renderer;
export const render = _createRenderer(_renderer);
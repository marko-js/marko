import { markHydrateNode as _markHydrateNode, write as _write, register as _register, createRenderer as _createRenderer } from "@marko/runtime-fluurt/src/html";
import _hello from "./components/hello/index.marko";

const _renderer = _register("packages/translator/src/__tests__/fixtures/at-tags-dynamic-and-static/template.marko", input => {
  const _item = [];

  _write(`${_markHydrateNode(0)}`);

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
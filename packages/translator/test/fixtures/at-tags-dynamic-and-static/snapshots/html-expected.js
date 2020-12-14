import _hello from "./components/hello/index.marko";
import { wrapHydratable as _wrapHydratable, createRenderFn as _createRenderFn } from "@marko/runtime-fluurt/src/html";

const _renderer = _wrapHydratable(input => {
  const _item = [];

  for (const a in b) {
    _item.push({});
  }

  _hello({
    item: _item,
    other: {}
  });
});

export default _renderer;
export const render = _createRenderFn(_renderer);
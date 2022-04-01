import { markHydrateNode as _markHydrateNode, write as _write, nextScopeId as _nextScopeId, createRenderer as _createRenderer } from "@marko/runtime-fluurt/src/html";
import _hello from "./components/hello/index.marko";

const _renderer = input => {
  const _item = [];

  _write(`${_markHydrateNode(0)}`);

  for (const a in {
    a: 1,
    b: 2
  }) {
    _item.push({});
  }

  const _scope = _nextScopeId();

  _hello({
    item: _item,
    other: {}
  });

  const _scope = _nextScopeId();
};

export default _renderer;
export const render = _createRenderer(_renderer);
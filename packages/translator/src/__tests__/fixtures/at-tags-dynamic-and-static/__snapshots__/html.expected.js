import { markHydrateNode as _markHydrateNode, write as _write, nextScopeId as _nextScopeId, createRenderer as _createRenderer } from "@marko/runtime-fluurt/src/html";
import _hello from "./components/hello/index.marko";

const _renderer = input => {
  const _scope = _nextScopeId();

  const _item = [];

  const _scope = _nextScopeId();

  _write(`${_markHydrateNode(_scope, 0)}`);

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
};

export default _renderer;
export const render = _createRenderer(_renderer);
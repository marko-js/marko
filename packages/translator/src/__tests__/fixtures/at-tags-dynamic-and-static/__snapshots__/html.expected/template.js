import { markHydrateNode as _markHydrateNode, write as _write, nextScopeId as _nextScopeId, maybeFlush as _maybeFlush, createRenderer as _createRenderer } from "@marko/runtime-fluurt/src/html";
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
    const _scope = _nextScopeId();
    _item.push({});
    _maybeFlush();
  }
  _hello({
    item: _item,
    other: {}
  });
};
export default _renderer;
export const render = /* @__PURE__ */_createRenderer(_renderer);
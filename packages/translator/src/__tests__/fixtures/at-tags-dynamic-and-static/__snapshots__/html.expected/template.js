import { nextScopeId as _nextScopeId, maybeFlush as _maybeFlush, createRenderer as _createRenderer } from "@marko/runtime-fluurt/src/html";
import _hello from "./components/hello/index.marko";
const _renderer = (input, _tagVar) => {
  const _scope0_ = _nextScopeId();
  const _item = [];
  const _scope1_ = _nextScopeId();
  for (const a in {
    a: 1,
    b: 2
  }) {
    const _scope2_ = _nextScopeId();
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
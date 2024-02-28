import { nextScopeId as _nextScopeId, maybeFlush as _maybeFlush, peekSerializedScope as _peekSerializedScope, writeScope as _writeScope, createRenderer as _createRenderer, createTemplate as _createTemplate } from "@marko/runtime-tags/debug/html";
import _hello from "./components/hello/index.marko";
const _renderer = /* @__PURE__ */_createRenderer((input, _tagVar) => {
  const _scope0_id = _nextScopeId();
  const _item = [];
  const _scope1_id = _nextScopeId();
  for (const a in {
    a: 1,
    b: 2
  }) {
    const _scope2_id = _nextScopeId();
    _item.push({});
    _maybeFlush();
  }
  const _childScope = _peekSerializedScope();
  _hello._({
    item: _item,
    other: {}
  });
  _writeScope(_scope0_id, {
    "#childScope/0": _childScope
  });
});
export default /* @__PURE__ */_createTemplate(_renderer, "packages/translator-tags/src/__tests__/fixtures/at-tags-dynamic-and-static/template.marko");
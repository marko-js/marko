import { forIn as _forIn, peekNextScope as _peekNextScope, writeExistingScope as _writeExistingScope, writeScope as _writeScope, nextScopeId as _nextScopeId, createRenderer as _createRenderer, createTemplate as _createTemplate } from "@marko/runtime-tags/debug/html";
import _hello from "./components/hello/index.marko";
const _renderer = /* @__PURE__ */_createRenderer((input, _tagVar) => {
  const _scope0_id = _nextScopeId();
  const _item = [];
  _forIn({
    a: 1,
    b: 2
  }, a => {
    _item.push({});
  });
  const _childScope = _peekNextScope();
  _hello({
    item: _item,
    other: {}
  });
  _writeScope(_scope0_id, {
    "#childScope/0": _writeExistingScope(_childScope)
  });
});
export default /* @__PURE__ */_createTemplate(_renderer, "packages/translator-tags/src/__tests__/fixtures/at-tags-dynamic-and-static/template.marko");
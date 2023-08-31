import { nextScopeId as _nextScopeId, maybeFlush as _maybeFlush, createTemplate as _createTemplate } from "@marko/runtime-fluurt/src/html";
import _hello from "./components/hello/index.marko";
const _renderer = (input, _tagVar, _scope0_) => {
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
  _hello._({
    item: _item,
    other: {}
  });
};
export default /* @__PURE__ */_createTemplate(_renderer, "packages/translator/src/__tests__/fixtures/at-tags-dynamic-and-static/template.marko");
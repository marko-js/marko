import _child from "./components/child.marko";
import { peekNextScope as _peekNextScope, writeExistingScope as _writeExistingScope, writeScope as _writeScope, nextScopeId as _nextScopeId, createRenderer as _createRenderer, createTemplate as _createTemplate } from "@marko/runtime-tags/debug/html";
const _renderer = /* @__PURE__ */_createRenderer((input, _tagVar) => {
  const _scope0_id = _nextScopeId();
  const x = "y";
  const _childScope = _peekNextScope();
  _child._({
    value: 3
  });
  const _childScope2 = _peekNextScope();
  _child._({
    value: x
  });
  _writeScope(_scope0_id, {
    "#childScope/0": _writeExistingScope(_childScope),
    "#childScope/1": _writeExistingScope(_childScope2)
  });
});
export default /* @__PURE__ */_createTemplate(_renderer, "packages/translator-tags/src/__tests__/fixtures/custom-tag-default-value/template.marko");
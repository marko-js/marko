import bazComp from "./components/baz.marko";
import { peekSerializedScope as _peekSerializedScope, writeScope as _writeScope, nextScopeId as _nextScopeId, createRenderer as _createRenderer, createTemplate as _createTemplate } from "@marko/runtime-tags/debug/html";
const _renderer = /* @__PURE__ */_createRenderer((input, _tagVar) => {
  const _scope0_id = _nextScopeId();
  const _childScope = _peekSerializedScope();
  bazComp._({});
  const _childScope2 = _peekSerializedScope();
  bazComp._({});
  _writeScope(_scope0_id, {
    "#childScope/0": _childScope,
    "#childScope/1": _childScope2
  });
});
export default /* @__PURE__ */_createTemplate(_renderer, "packages/translator-tags/src/__tests__/fixtures/import-tag-shorthand/template.marko");
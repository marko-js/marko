import { write as _write, nextScopeId as _nextScopeId, createRenderer as _createRenderer, peekSerializedScope as _peekSerializedScope, writeScope as _writeScope, createTemplate as _createTemplate } from "@marko/runtime-tags/debug/html";
import _child from "./components/child/index.marko";
const _renderer = /* @__PURE__ */_createRenderer((input, _tagVar) => {
  const _scope0_id = _nextScopeId();
  const _childScope = _peekSerializedScope();
  _child._({
    name: "World",
    renderBody: /* @__PURE__ */_createRenderer(() => {
      const _scope1_id = _nextScopeId();
      _write("This is the body content");
    })
  });
  _writeScope(_scope0_id, {
    "#childScope/0": _childScope
  });
});
export default /* @__PURE__ */_createTemplate(_renderer, "packages/translator-tags/src/__tests__/fixtures/custom-tag-render-body/template.marko");
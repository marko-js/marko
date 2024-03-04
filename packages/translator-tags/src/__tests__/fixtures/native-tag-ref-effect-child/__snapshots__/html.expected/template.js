import { markResumeNode as _markResumeNode, write as _write, peekSerializedScope as _peekSerializedScope, writeScope as _writeScope, nextScopeId as _nextScopeId, createRenderer as _createRenderer, createTemplate as _createTemplate } from "@marko/runtime-tags/debug/html";
import _helloSetter from "./components/hello-setter.marko";
const _renderer = /* @__PURE__ */_createRenderer((input, _tagVar) => {
  const _scope0_id = _nextScopeId();
  const el = () => {
    throw new Error("Cannot reference DOM node from server");
  };
  _write(`<div></div>${_markResumeNode(_scope0_id, "#div/0")}`);
  const _childScope = _peekSerializedScope();
  _helloSetter._({
    el: el
  });
  _writeScope(_scope0_id, {
    "#childScope/1": _childScope
  });
});
export default /* @__PURE__ */_createTemplate(_renderer, "packages/translator-tags/src/__tests__/fixtures/native-tag-ref-effect-child/template.marko");
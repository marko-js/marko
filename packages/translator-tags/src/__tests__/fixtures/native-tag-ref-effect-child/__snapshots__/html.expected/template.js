import { markResumeNode as _markResumeNode, write as _write, nextScopeId as _nextScopeId, createRenderer as _createRenderer, createTemplate as _createTemplate } from "@marko/runtime-tags/debug/html";
import _helloSetter from "./components/hello-setter.marko";
const _renderer = /* @__PURE__ */_createRenderer((input, _tagVar) => {
  const _scope0_id = _nextScopeId();
  const el = () => {
    throw new Error("Cannot reference DOM node from server");
  };
  _write(`<div></div>${_markResumeNode(_scope0_id, "#div/0")}`);
  _helloSetter._({
    el: el
  });
});
export default /* @__PURE__ */_createTemplate(_renderer, "packages/translator-tags/src/__tests__/fixtures/native-tag-ref-effect-child/template.marko");
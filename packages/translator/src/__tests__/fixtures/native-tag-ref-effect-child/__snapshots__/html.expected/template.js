import { markResumeNode as _markResumeNode, write as _write, nextScopeId as _nextScopeId, register as _register, createRenderer as _createRenderer } from "@marko/runtime-fluurt/src/html";
import _helloSetter from "./components/hello-setter.marko";
const _renderer = _register((input, _tagVar, _scope0_) => {
  const _scope0_id = _nextScopeId();
  const el = () => {
    throw new Error("Cannot reference DOM node from server");
  };
  _write(`<div></div>${_markResumeNode(_scope0_id, "#div/0")}`);
  _helloSetter({
    el: el,
    renderBody() {
      const _scope1_id = _nextScopeId();
    }
  });
}, "packages/translator/src/__tests__/fixtures/native-tag-ref-effect-child/template.marko");
export default _renderer;
export const render = /* @__PURE__ */_createRenderer(_renderer);
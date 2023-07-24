import { nextScopeId as _nextScopeId, markResumeNode as _markResumeNode, write as _write, writeEffect as _writeEffect, writeScope as _writeScope, register as _register, createRenderer as _createRenderer } from "@marko/runtime-fluurt/src/html";
import _displayIntersection from "./components/display-intersection.marko";
const _renderer = _register((input, _tagVar, _scope0_) => {
  const _scope0_id = _nextScopeId();
  const count = 0;
  _displayIntersection({
    value: count,
    renderBody() {
      const _scope1_id = _nextScopeId();
    }
  });
  _write(`<button></button>${_markResumeNode(_scope0_id, "#button/1")}`);
  _writeEffect(_scope0_id, "packages/translator/src/__tests__/fixtures/component-attrs-intersection/template.marko_0_count");
  _writeScope(_scope0_id, {
    "count": count
  }, _scope0_);
}, "packages/translator/src/__tests__/fixtures/component-attrs-intersection/template.marko");
export default _renderer;
export const render = /* @__PURE__ */_createRenderer(_renderer);
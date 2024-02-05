import _displayIntersection from "./components/display-intersection.marko";
import { markResumeNode as _markResumeNode, write as _write, writeEffect as _writeEffect, writeScope as _writeScope, nextScopeId as _nextScopeId, createRenderer as _createRenderer, createTemplate as _createTemplate } from "@marko/runtime-tags/debug/html";
const _renderer = /* @__PURE__ */_createRenderer((input, _tagVar) => {
  const _scope0_id = _nextScopeId();
  const count = 0;
  _displayIntersection._({
    value: count
  });
  _write(`<button></button>${_markResumeNode(_scope0_id, "#button/1")}`);
  _writeEffect(_scope0_id, "packages/translator-tags/src/__tests__/fixtures/component-attrs-intersection/template.marko_0_count");
  _writeScope(_scope0_id, {
    "count": count
  });
});
export default /* @__PURE__ */_createTemplate(_renderer, "packages/translator-tags/src/__tests__/fixtures/component-attrs-intersection/template.marko");
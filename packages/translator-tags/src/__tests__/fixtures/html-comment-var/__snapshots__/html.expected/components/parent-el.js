import { markResumeNode as _markResumeNode, write as _write, writeEffect as _writeEffect, writeScope as _writeScope, nextScopeId as _nextScopeId, createRenderer as _createRenderer, createTemplate as _createTemplate } from "@marko/runtime-tags/debug/html";
const _renderer = /* @__PURE__ */_createRenderer((input, _tagVar) => {
  const _scope0_id = _nextScopeId();
  const ref = () => {
    throw new Error("Cannot reference a DOM node from the server");
  };
  const tagName = undefined;
  _write(`<!--Body Text-->${_markResumeNode(_scope0_id, "#comment/0")}`);
  const _return = tagName;
  _writeEffect(_scope0_id, "packages/translator-tags/src/__tests__/fixtures/html-comment-var/components/parent-el.marko_0");
  _writeScope(_scope0_id, {
    "/": _tagVar
  });
  return _return;
});
export default /* @__PURE__ */_createTemplate(_renderer, "packages/translator-tags/src/__tests__/fixtures/html-comment-var/components/parent-el.marko");
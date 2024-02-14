import { write as _write, nextScopeId as _nextScopeId, markResumeNode as _markResumeNode, writeEffect as _writeEffect, writeScope as _writeScope, createRenderer as _createRenderer, createTemplate as _createTemplate } from "@marko/runtime-tags/debug/html";
import _child from "./components/child.marko";
const _renderer = /* @__PURE__ */_createRenderer((input, _tagVar) => {
  const _scope0_id = _nextScopeId();
  const selected = false;
  const myThing = {
    selected: selected,
    renderBody() {
      const _scope1_id = _nextScopeId();
      _write("<span>The thing</span>");
    }
  };
  _child._({
    thing: myThing
  });
  _write(`<button>Toggle</button>${_markResumeNode(_scope0_id, "#button/1")}`);
  _writeEffect(_scope0_id, "packages/translator-tags/src/__tests__/fixtures/define-tag-for-attribute-tag/template.marko_0_selected");
  _writeScope(_scope0_id, {
    "selected": selected
  });
});
export default /* @__PURE__ */_createTemplate(_renderer, "packages/translator-tags/src/__tests__/fixtures/define-tag-for-attribute-tag/template.marko");
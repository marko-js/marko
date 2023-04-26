import _style from "virtual:./template.marko.module.css \n  .content {\n    color: green;\n  }\n";
import { classAttr as _classAttr, markResumeNode as _markResumeNode, write as _write, nextScopeId as _nextScopeId, register as _register, createRenderer as _createRenderer } from "@marko/runtime-fluurt/src/html";
const _renderer = _register((input, _tagVar, _scope0_) => {
  const _scope0_id = _nextScopeId();
  const {
    content
  } = _style;
  _write(`<div${_classAttr(content)}>Hello</div>${_markResumeNode(_scope0_id, "#div/1")}`);
}, "packages/translator/src/__tests__/fixtures/style-tag-modules-destructured/template.marko");
export default _renderer;
export const render = /* @__PURE__ */_createRenderer(_renderer);
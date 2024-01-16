import myStyles from "virtual:./template.marko.module.css \n  .content {\n    color: green;\n  }\n";
import { classAttr as _classAttr, markResumeNode as _markResumeNode, write as _write, nextScopeId as _nextScopeId, createRenderer as _createRenderer, createTemplate as _createTemplate } from "@marko/runtime-tags/src/html";
const _renderer = /* @__PURE__ */_createRenderer((input, _tagVar) => {
  const _scope0_id = _nextScopeId();
  _write(`<div${_classAttr(myStyles.content)}>Hello</div>${_markResumeNode(_scope0_id, "#div/1")}`);
});
export default /* @__PURE__ */_createTemplate(_renderer, "packages/translator-tags/src/__tests__/fixtures/style-tag-modules-default/template.marko");
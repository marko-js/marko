import myStyles from "virtual:./template.marko.module.css \n  .content {\n    color: green;\n  }\n";
import { classAttr as _classAttr, markHydrateNode as _markHydrateNode, write as _write, nextScopeId as _nextScopeId, register as _register, createRenderer as _createRenderer } from "@marko/runtime-fluurt/src/html";
const _renderer = _register((input, _tagVar, _scope0_) => {
  const _scope0_id = _nextScopeId();
  _write(`<div${_classAttr(myStyles.content)}>Hello</div>${_markHydrateNode(_scope0_id, "#div/1")}`);
}, "packages/translator/src/__tests__/fixtures/style-tag-modules-default/template.marko");
export default _renderer;
export const render = /* @__PURE__ */_createRenderer(_renderer);
import { classAttr as _classAttr, attr as _attr, markResumeNode as _markResumeNode, write as _write, nextScopeId as _nextScopeId, createRenderer as _createRenderer, createTemplate as _createTemplate } from "@marko/runtime-tags/src/html";
const _renderer = /* @__PURE__ */_createRenderer((input, _tagVar) => {
  const _scope0_id = _nextScopeId();
  _write(`<div${_classAttr(input.foo)}${_attr("foo", 'a' + input.foo + 'b')}${_attr("bar", `a ${input.bar} b`)}${_attr("nested", `a ${input.foo + ` nested ${input.bar}`} b`)}></div>${_markResumeNode(_scope0_id, "#div/0")}`);
});
export default /* @__PURE__ */_createTemplate(_renderer, "packages/translator-tags/src/__tests__/fixtures/attr-escape/template.marko");
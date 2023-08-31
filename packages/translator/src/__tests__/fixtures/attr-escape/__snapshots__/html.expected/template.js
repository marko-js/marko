import { classAttr as _classAttr, attr as _attr, markResumeNode as _markResumeNode, write as _write, nextScopeId as _nextScopeId, createTemplate as _createTemplate } from "@marko/runtime-fluurt/src/html";
const _renderer = (input, _tagVar, _scope0_) => {
  const _scope0_id = _nextScopeId();
  _write(`<div${_classAttr(input.foo)}${_attr("foo", 'a' + input.foo + 'b')}${_attr("bar", `a ${input.bar} b`)}${_attr("nested", `a ${input.foo + ` nested ${input.bar}`} b`)}></div>${_markResumeNode(_scope0_id, "#div/0")}`);
};
export default /* @__PURE__ */_createTemplate(_renderer, "packages/translator/src/__tests__/fixtures/attr-escape/template.marko");
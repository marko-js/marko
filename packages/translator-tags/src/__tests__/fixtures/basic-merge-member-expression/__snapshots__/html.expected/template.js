import * as _$ from "@marko/runtime-tags/debug/html";
const _renderer = /* @__PURE__ */_$.createRenderer((input, _tagVar) => {
  const _scope0_id = _$.nextScopeId();
  const foo = {};
  const {
    class: fooClass
  } = foo;
  _$.write(`<div${_$.classAttr((foo, foo.class))}></div>${_$.markResumeNode(_scope0_id, "#div/0")}<div${_$.classAttr((foo, foo.class))}></div>${_$.markResumeNode(_scope0_id, "#div/1")}<button>Click</button>${_$.markResumeNode(_scope0_id, "#button/2")}`);
  _$.writeEffect(_scope0_id, "packages/translator-tags/src/__tests__/fixtures/basic-merge-member-expression/template.marko_0");
});
export default /* @__PURE__ */_$.createTemplate("packages/translator-tags/src/__tests__/fixtures/basic-merge-member-expression/template.marko", _renderer);
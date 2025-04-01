import * as _$ from "@marko/runtime-tags/debug/html";
export default _$.createTemplate("__tests__/template.marko", input => {
  const _scope0_id = _$.nextScopeId();
  let foo = {};
  const {
    class: fooClass
  } = foo;
  _$.write(`<div${_$.classAttr((foo, foo.class))}></div>${_$.markResumeNode(_scope0_id, "#div/0")}<div${_$.classAttr((foo, foo.class))}></div>${_$.markResumeNode(_scope0_id, "#div/1")}<button>Click</button>${_$.markResumeNode(_scope0_id, "#button/2")}`);
  _$.writeEffect(_scope0_id, "__tests__/template.marko_0");
  _$.resumeClosestBranch(_scope0_id);
});
import * as _$ from "@marko/runtime-tags/debug/html";
export default /* @__PURE__ */_$.createTemplate("__tests__/template.marko", input => {
  const _scope0_id = _$.nextScopeId();
  const promise = Promise.resolve("hello");
  _$.write("<div id=ref>0</div>");
  _$.writeEffect(_scope0_id, "__tests__/template.marko_0_promise");
  _$.writeScope(_scope0_id, {
    promise
  }, "__tests__/template.marko", 0, {
    promise: "1:8"
  });
});
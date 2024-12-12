import * as _$ from "@marko/runtime-tags/debug/html";
const _renderer = /* @__PURE__ */_$.createRenderer((input, _tagVar) => {
  const _scope0_id = _$.nextScopeId();
  const promise = Promise.resolve("hello");
  _$.write("<div id=ref>0</div>");
  _$.writeEffect(_scope0_id, "__tests__/template.marko_0_promise");
  _$.writeScope(_scope0_id, {
    "promise": promise
  });
});
export default /* @__PURE__ */_$.createTemplate("__tests__/template.marko", _renderer);
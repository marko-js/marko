import child from "./tags/child.marko";
import * as _$ from "@marko/runtime-tags/debug/html";
export default /* @__PURE__ */_$.createTemplate("__tests__/template.marko", input => {
  const _scope0_id = _$.nextScopeId();
  let tagName = child;
  _$.write(`<button></button>${_$.markResumeNode(_scope0_id, "#button/0")}`);
  /* @__PURE__ */_$.dynamicTag(_scope0_id, "#text/1", tagName, {
    id: "dynamic"
  }, 0, 0, 1);
  _$.writeEffect(_scope0_id, "__tests__/template.marko_0_tagName");
  _$.writeScope(_scope0_id, {
    tagName
  }, "__tests__/template.marko", 0, {
    tagName: "3:6"
  });
  _$.resumeClosestBranch(_scope0_id);
});
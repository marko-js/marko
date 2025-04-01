import child1 from "./tags/child1.marko";
import child2 from "./tags/child2.marko";
import * as _$ from "@marko/runtime-tags/debug/html";
export default _$.createTemplate("__tests__/template.marko", input => {
  const _scope0_id = _$.nextScopeId();
  let tagName = child1;
  let val = 3;
  _$.dynamicTag(_scope0_id, "#text/0", tagName, {
    value: val
  }, 0, 0, 1);
  _$.write(`<button></button>${_$.markResumeNode(_scope0_id, "#button/1")}`);
  _$.writeEffect(_scope0_id, "__tests__/template.marko_0_tagName");
  _$.writeScope(_scope0_id, {
    tagName,
    val
  }, "__tests__/template.marko", 0, {
    tagName: "4:6",
    val: "5:6"
  });
  _$.resumeClosestBranch(_scope0_id);
});
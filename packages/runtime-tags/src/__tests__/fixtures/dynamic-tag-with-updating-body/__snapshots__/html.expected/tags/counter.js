import * as _$ from "@marko/runtime-tags/debug/html";
export default _$.createTemplate("__tests__/tags/counter.marko", input => {
  const _scope0_id = _$.nextScopeId();
  let count = 0;
  _$.write(`<button id=count>${_$.escapeXML(count)}${_$.markResumeNode(_scope0_id, "#text/1")}</button>${_$.markResumeNode(_scope0_id, "#button/0")}`);
  _$.writeEffect(_scope0_id, "__tests__/tags/counter.marko_0_count");
  _$.writeScope(_scope0_id, {
    count
  }, "__tests__/tags/counter.marko", 0, {
    count: "1:5"
  });
  _$.resumeClosestBranch(_scope0_id);
});
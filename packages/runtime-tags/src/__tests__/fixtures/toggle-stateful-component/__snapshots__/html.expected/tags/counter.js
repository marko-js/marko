import * as _$ from "@marko/runtime-tags/debug/html";
export default /* @__PURE__ */_$.createTemplate("__tests__/tags/counter.marko", input => {
  const _scope0_id = _$.nextScopeId();
  let clickCount = 0;
  _$.write(`<button>${_$.escapeXML(((() => {
    if (clickCount > 0) throw new Error("This should not have executed since the parent removes this component when the count is greater than 0");
  })(), clickCount))}${_$.markResumeNode(_scope0_id, "#text/1")}</button>${_$.markResumeNode(_scope0_id, "#button/0")}`);
  _$.writeEffect(_scope0_id, "__tests__/tags/counter.marko_0_input_onCount_clickCount");
  _$.writeScope(_scope0_id, {
    input_onCount: input.onCount,
    clickCount
  }, "__tests__/tags/counter.marko", 0, {
    input_onCount: ["input.onCount"],
    clickCount: "1:6"
  });
  _$.resumeClosestBranch(_scope0_id);
});
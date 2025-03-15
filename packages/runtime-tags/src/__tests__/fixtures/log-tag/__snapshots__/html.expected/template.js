import testLog from "./test-log";
const staticVar = "static var";
import * as _$ from "@marko/runtime-tags/debug/html";
export default /* @__PURE__ */_$.createTemplate("__tests__/template.marko", input => {
  const _scope0_id = _$.nextScopeId();
  console.log("identifier");
  const tagVar = "tag var";
  console.log(tagVar);
  console.log(staticVar);
  let output = JSON.stringify(testLog);
  _$.write(`<!>${_$.escapeXML(output)}${_$.markResumeNode(_scope0_id, "#text/0")}`);
  _$.writeEffect(_scope0_id, "__tests__/template.marko_0");
  _$.resumeClosestBranch(_scope0_id);
});
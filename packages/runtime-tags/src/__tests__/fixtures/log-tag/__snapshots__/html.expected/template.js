import testLog from "./test-log";
const staticVar = "static var";
import * as _$ from "@marko/runtime-tags/debug/html";
const _renderer = /* @__PURE__ */_$.createRenderer((input, _tagVar) => {
  const _scope0_id = _$.nextScopeId();
  console.log("identifier");
  const tagVar = "tag var";
  console.log(tagVar);
  console.log(staticVar);
  const output = JSON.stringify(testLog);
  _$.write(`<!>${_$.escapeXML(output)}${_$.markResumeNode(_scope0_id, "#text/0")}`);
  _$.writeEffect(_scope0_id, "__tests__/template.marko_0");
  _$.markResumeCleanup(_scope0_id);
});
export default /* @__PURE__ */_$.createTemplate("__tests__/template.marko", _renderer);
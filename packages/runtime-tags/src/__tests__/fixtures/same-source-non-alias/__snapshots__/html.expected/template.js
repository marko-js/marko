function createWrapper(a) {
  return {
    a
  };
}
_$.register(createWrapper, "__tests__/template.marko_0/createWrapper");
import * as _$ from "@marko/runtime-tags/debug/html";
export default _$.createTemplate("__tests__/template.marko", input => {
  const _scope0_id = _$.nextScopeId();
  let count = 0;
  const {
    a,
    a: b
  } = createWrapper(count);
  _$.write(`<button>${_$.escapeXML(a)}${_$.markResumeNode(_scope0_id, "#text/1")} <!>${_$.escapeXML(b)}${_$.markResumeNode(_scope0_id, "#text/2")}</button>${_$.markResumeNode(_scope0_id, "#button/0")}`);
  _$.writeEffect(_scope0_id, "__tests__/template.marko_0_count");
  _$.writeScope(_scope0_id, {
    count
  }, "__tests__/template.marko", 0, {
    count: "5:6"
  });
  _$.resumeClosestBranch(_scope0_id);
});
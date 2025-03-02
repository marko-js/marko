import * as _$ from "@marko/runtime-tags/debug/html";
export default /* @__PURE__ */_$.createTemplate("__tests__/tags/counter.marko", input => {
  const _scope0_id = _$.nextScopeId();
  const x = 1;
  _$.write(`<button class=inc>${_$.escapeXML(x)}${_$.markResumeNode(_scope0_id, "#text/1")}</button>${_$.markResumeNode(_scope0_id, "#button/0")}`);
  const _return = x;
  _$.writeEffect(_scope0_id, "__tests__/tags/counter.marko_0_x");
  _$.writeScope(_scope0_id, {
    x,
    "@": _$.register(_new_x => {
      x = _new_x;
    }, "__tests__/tags/counter.marko_0/valueChange", _scope0_id)
  }, "__tests__/tags/counter.marko", 0, {
    x: "1:6"
  });
  _$.resumeClosestBranch(_scope0_id);
  return _return;
});
import * as _$ from "@marko/runtime-tags/debug/html";
const _renderer = /* @__PURE__ */_$.createRenderer(input => {
  const _scope0_id = _$.nextScopeId();
  const x = 1;
  const handler = _$.register(function (newValue) {
    x = newValue + 1;
  }, "__tests__/template.marko_0/handler", _scope0_id);
  const y = x;
  _$.write(`<button>${_$.escapeXML(x)}${_$.markResumeNode(_scope0_id, "#text/1")}|<!>${_$.escapeXML(y)}${_$.markResumeNode(_scope0_id, "#text/2")}</button>${_$.markResumeNode(_scope0_id, "#button/0")}`);
  _$.writeEffect(_scope0_id, "__tests__/template.marko_0_y");
  _$.writeScope(_scope0_id, {
    "x/3": x,
    "handler/4": handler,
    "y/6": y,
    "y/6@": handler
  }, "__tests__/template.marko", 0, {
    "x/3": "1:6",
    "handler/4": "2:6",
    "y/6": "3:6"
  });
  _$.resumeClosestBranch(_scope0_id);
});
export default /* @__PURE__ */_$.createTemplate("__tests__/template.marko", _renderer);
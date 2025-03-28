import * as _$ from "@marko/runtime-tags/debug/html";
export default /* @__PURE__ */_$.createTemplate("__tests__/template.marko", input => {
  const _scope0_id = _$.nextScopeId();
  let message = {
    text: "hi"
  };
  let show = true;
  _$.write(`<button>hide</button>${_$.markResumeNode(_scope0_id, "#button/0")}`);
  _$.resumeSingleNodeConditional(() => {
    if (show) {
      const _scope1_id = _$.nextScopeId();
      _$.write(`${_$.escapeXML(message.text)}${_$.markResumeNode(_scope1_id, "#text/0")}`);
      _$.writeScope(_scope1_id, {
        _: _$.ensureScopeWithId(_scope0_id)
      }, "__tests__/template.marko", "8:2");
      return 0;
    }
  }, _scope0_id, "#text/1", 1);
  _$.writeEffect(_scope0_id, "__tests__/template.marko_0");
  _$.writeScope(_scope0_id, {
    message_text: message?.text
  }, "__tests__/template.marko", 0, {
    message_text: ["message.text", "1:6"]
  });
  _$.resumeClosestBranch(_scope0_id);
});
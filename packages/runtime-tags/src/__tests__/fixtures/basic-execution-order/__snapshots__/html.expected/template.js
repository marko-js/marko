import * as _$ from "@marko/runtime-tags/debug/html";
const _renderer = /* @__PURE__ */_$.createRenderer((input, _tagVar) => {
  const _scope0_id = _$.nextScopeId();
  const message = {
    text: "hi"
  };
  const show = true;
  _$.write(`<button>hide</button>${_$.markResumeNode(_scope0_id, "#button/0")}`);
  let _ifScopeId, _ifRenderer;
  _$.resumeSingleNodeConditional(() => {
    if (show) {
      const _scope1_id = _$.nextScopeId();
      _$.write(`${_$.escapeXML(message.text)}${_$.markResumeNode(_scope1_id, "#text/0")}`);
      _$.debug(_$.writeScope(_scope1_id, {
        "_": _$.ensureScopeWithId(_scope0_id)
      }), "__tests__/template.marko", "8:2");
      _$.register(_ifRenderer = /* @__PURE__ */_$.createRenderer(() => {}), "__tests__/template.marko_1_renderer");
      _ifScopeId = _scope1_id;
    }
  }, _scope0_id, "#text/1");
  _$.writeEffect(_scope0_id, "__tests__/template.marko_0");
  _$.debug(_$.writeScope(_scope0_id, {
    "message_text": message?.text,
    "#text/1(": _ifRenderer,
    "#text/1!": _$.getScopeById(_ifScopeId)
  }), "__tests__/template.marko", 0, {
    "message": "1:6",
    "message_text": ["message.text", "1:6"],
    "show": "2:6"
  });
  _$.resumeClosestBranch(_scope0_id);
});
export default /* @__PURE__ */_$.createTemplate("__tests__/template.marko", _renderer);
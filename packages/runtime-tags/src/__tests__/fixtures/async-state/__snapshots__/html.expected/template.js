import { resolveAfter } from "../../utils/resolve";
import * as _$ from "@marko/runtime-tags/debug/html";
export default /* @__PURE__ */_$.createTemplate("__tests__/template.marko", input => {
  const _scope0_id = _$.nextScopeId();
  const _clickCount_closures = new Set();
  let clickCount = 0;
  _$.write(`<button>inc</button>${_$.markResumeNode(_scope0_id, "#button/0")}`);
  _$.tryContent(_scope0_id, "#text/1", _$.registerContent("__tests__/template.marko_1_renderer", () => {
    const _scope1_id = _$.nextScopeId();
    _$.fork(_scope1_id, "#text/0", resolveAfter(clickCount, 1), value => {
      const _scope3_id = _$.nextScopeId();
      _$.write(`${_$.escapeXML(value)}${_$.markResumeNode(_scope3_id, "#text/0")}`);
    });
    _$.writeSubscribe(_clickCount_closures, _$.writeScope(_scope1_id, {
      _: _$.ensureScopeWithId(_scope0_id),
      "ClosureSignalIndex:clickCount": 0
    }, "__tests__/template.marko", "6:2"));
    _$.resumeClosestBranch(_scope1_id);
  }, _scope0_id), {
    placeholder: _$.attrTag({
      content: _$.registerContent("__tests__/template.marko_2_renderer", () => {
        const _scope2_id = _$.nextScopeId();
        _$.write("LOADING...");
      }, _scope0_id)
    })
  });
  _$.writeEffect(_scope0_id, "__tests__/template.marko_0_clickCount");
  _$.writeScope(_scope0_id, {
    clickCount,
    "ClosureScopes:clickCount": _clickCount_closures
  }, "__tests__/template.marko", 0, {
    clickCount: "2:6"
  });
  _$.resumeClosestBranch(_scope0_id);
});
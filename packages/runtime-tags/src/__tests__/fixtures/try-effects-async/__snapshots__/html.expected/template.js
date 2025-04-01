import { resolveAfter } from "../../utils/resolve";
import * as _$ from "@marko/runtime-tags/debug/html";
export default _$.createTemplate("__tests__/template.marko", input => {
  const _scope0_id = _$.nextScopeId();
  const _clickCount_closures = new Set();
  let clickCount = 0;
  const el = _$.nodeRef();
  _$.write(`<button>inc</button>${_$.markResumeNode(_scope0_id, "#button/0")}<div></div>${_$.markResumeNode(_scope0_id, "#div/1")}`);
  _$.tryContent(_scope0_id, "#text/2", _$.registerContent("__tests__/template.marko_1_renderer", () => {
    const _scope1_id = _$.nextScopeId();
    _$.fork(_scope1_id, "#text/0", resolveAfter(clickCount, 1), value => {
      const _scope4_id = _$.nextScopeId();
      _$.write(`Async: <!>${_$.escapeXML(value > 1 ? (() => {
        throw new Error("ERROR!");
      })() : value)}${_$.markResumeNode(_scope4_id, "#text/0")}`);
    });
    _$.writeEffect(_scope1_id, "__tests__/template.marko_1_clickCount");
    _$.writeSubscribe(_clickCount_closures, _$.writeScope(_scope1_id, {
      _: _$.ensureScopeWithId(_scope0_id),
      "ClosureSignalIndex:clickCount": 0
    }, "__tests__/template.marko", "7:2"));
    _$.resumeClosestBranch(_scope1_id);
  }, _scope0_id), {
    catch: _$.attrTag({
      content: _$.registerContent("__tests__/template.marko_3_renderer", err => {
        const _scope3_id = _$.nextScopeId();
        _$.write(`${_$.escapeXML(err)}${_$.markResumeNode(_scope3_id, "#text/0")}`);
      }, _scope0_id)
    }),
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
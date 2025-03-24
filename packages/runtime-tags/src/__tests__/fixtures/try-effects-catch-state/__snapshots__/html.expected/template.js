import * as _$ from "@marko/runtime-tags/debug/html";
export default /* @__PURE__ */_$.createTemplate("__tests__/template.marko", input => {
  const _scope0_id = _$.nextScopeId();
  const _clickCount_closures = new Set();
  let clickCount = 0;
  const el = _$.nodeRef();
  _$.write(`<div></div>${_$.markResumeNode(_scope0_id, "#div/0")}`);
  _$.tryContent(_scope0_id, "#text/1", _$.registerContent("__tests__/template.marko_1_renderer", () => {
    const _scope1_id = _$.nextScopeId();
    _$.write(`<button>inc</button>${_$.markResumeNode(_scope1_id, "#button/0")} -- <!>${_$.escapeXML((() => {
      if (clickCount > 1) throw new Error("ERROR!");
    })())}${_$.markResumeNode(_scope1_id, "#text/1")}`);
    _$.writeEffect(_scope1_id, "__tests__/template.marko_1_clickCount");
    _$.writeSubscribe(_clickCount_closures, _$.writeScope(_scope1_id, {
      _: _$.ensureScopeWithId(_scope0_id),
      "ClosureSignalIndex:clickCount": 0
    }, "__tests__/template.marko", "4:2"));
    _$.resumeClosestBranch(_scope1_id);
  }, _scope0_id), {
    catch: _$.attrTag({
      content: _$.registerContent("__tests__/template.marko_2_renderer", err => {
        const _scope2_id = _$.nextScopeId();
        _$.write(`${_$.escapeXML(err)}${_$.markResumeNode(_scope2_id, "#text/0")}`);
      }, _scope0_id)
    })
  });
  _$.writeScope(_scope0_id, {
    clickCount,
    "ClosureScopes:clickCount": _clickCount_closures
  }, "__tests__/template.marko", 0, {
    clickCount: "1:6"
  });
  _$.resumeClosestBranch(_scope0_id);
});
import * as _$ from "@marko/runtime-tags/debug/html";
export default /* @__PURE__ */_$.createTemplate("__tests__/template.marko", input => {
  const _scope0_id = _$.nextScopeId();
  const Once = {
    content: _$.registerContent("__tests__/template.marko_1_renderer", ({
      value
    }) => {
      const _scope1_id = _$.nextScopeId();
      let call = 1;
      const _return = _$.register(function () {
        if (call) {
          call--;
          value();
        }
      }, "__tests__/template.marko_1/_return", _scope1_id);
      _$.writeScope(_scope1_id, {
        value,
        call
      }, "__tests__/template.marko", "1:1", {
        value: "1:15",
        call: "2:7"
      });
      _$.resumeClosestBranch(_scope1_id);
      return _return;
    }, _scope0_id)
  };
  let clickOnceCount = 0;
  const _dynamicScope = _$.peekNextScope();
  const onClickOnce = _$.dynamicTagInput(_scope0_id, "#text/0", Once, {
    value: _$.register(function () {
      clickOnceCount++;
    }, "__tests__/template.marko_0/onClickOnce", _scope0_id)
  }, void 0);
  _$.setTagVar(_scope0_id, "#scopeOffset/1", _dynamicScope, "__tests__/template.marko_0_onClickOnce/var");
  _$.write(`<button class=once>${_$.escapeXML(clickOnceCount)}${_$.markResumeNode(_scope0_id, "#text/3")}</button>${_$.markResumeNode(_scope0_id, "#button/2")}`);
  const Twice = {
    content: _$.registerContent("__tests__/template.marko_2_renderer", ({
      value
    }) => {
      const _scope2_id = _$.nextScopeId();
      let call = 2;
      const _return2 = _$.register(function () {
        if (call) {
          call--;
          value();
        }
      }, "__tests__/template.marko_2/_return", _scope2_id);
      _$.writeScope(_scope2_id, {
        value,
        call
      }, "__tests__/template.marko", "15:1", {
        value: "15:16",
        call: "16:7"
      });
      _$.resumeClosestBranch(_scope2_id);
      return _return2;
    }, _scope0_id)
  };
  let clickTwiceCount = 0;
  const _dynamicScope2 = _$.peekNextScope();
  const onClickTwice = _$.dynamicTagInput(_scope0_id, "#text/4", Twice, {
    value: _$.register(function () {
      clickTwiceCount++;
    }, "__tests__/template.marko_0/onClickTwice", _scope0_id)
  }, void 0);
  _$.setTagVar(_scope0_id, "#scopeOffset/5", _dynamicScope2, "__tests__/template.marko_0_onClickTwice/var");
  _$.write(`<button class=twice>${_$.escapeXML(clickTwiceCount)}${_$.markResumeNode(_scope0_id, "#text/7")}</button>${_$.markResumeNode(_scope0_id, "#button/6")}`);
  _$.writeEffect(_scope0_id, "__tests__/template.marko_0_onClickTwice");
  _$.writeEffect(_scope0_id, "__tests__/template.marko_0_onClickOnce");
  _$.writeScope(_scope0_id, {
    Once,
    clickOnceCount,
    onClickOnce,
    Twice,
    clickTwiceCount,
    onClickTwice,
    "ConditionalScope:#text/0": _$.writeExistingScope(_dynamicScope),
    "ConditionalRenderer:#text/0": _$.dynamicTagId(Once),
    "ConditionalScope:#text/4": _$.writeExistingScope(_dynamicScope2),
    "ConditionalRenderer:#text/4": _$.dynamicTagId(Twice)
  }, "__tests__/template.marko", 0, {
    Once: "1:8",
    clickOnceCount: "9:5",
    onClickOnce: "10:6",
    Twice: "15:8",
    clickTwiceCount: "23:5",
    onClickTwice: "24:7"
  });
  _$.resumeClosestBranch(_scope0_id);
});
import * as _$ from "@marko/runtime-tags/debug/html";
const _renderer = /* @__PURE__ */_$.createRenderer(input => {
  const _scope0_id = _$.nextScopeId();
  const Once = {
    content: _$.register(/* @__PURE__ */_$.createRenderer(({
      value
    }) => {
      const _scope1_id = _$.nextScopeId();
      const call = 1;
      const _return = _$.register(function () {
        if (call) {
          call--;
          value();
        }
      }, "__tests__/template.marko_1/_return", _scope1_id);
      _$.writeScope(_scope1_id, {
        "value/2": value,
        "call/3": call
      }, "__tests__/template.marko", "1:1", {
        "value/2": "1:15",
        "call/3": "2:7"
      });
      _$.resumeClosestBranch(_scope1_id);
      return _return;
    }), "__tests__/template.marko_1_renderer", _scope0_id)
  };
  const clickOnceCount = 0;
  const _dynamicScope = _$.peekNextScope();
  const onClickOnce = _$.dynamicTagInput(_scope0_id, "#text/0", Once, {
    value: _$.register(function () {
      clickOnceCount++;
    }, "__tests__/template.marko_0/onClickOnce", _scope0_id)
  }, void 0);
  _$.setTagVar(_scope0_id, "#scopeOffset/1", _dynamicScope, "__tests__/template.marko_0_onClickOnce/var");
  _$.write(`<button class=once>${_$.escapeXML(clickOnceCount)}${_$.markResumeNode(_scope0_id, "#text/3")}</button>${_$.markResumeNode(_scope0_id, "#button/2")}`);
  const Twice = {
    content: _$.register(/* @__PURE__ */_$.createRenderer(({
      value
    }) => {
      const _scope2_id = _$.nextScopeId();
      const call = 2;
      const _return2 = _$.register(function () {
        if (call) {
          call--;
          value();
        }
      }, "__tests__/template.marko_2/_return", _scope2_id);
      _$.writeScope(_scope2_id, {
        "value/2": value,
        "call/3": call
      }, "__tests__/template.marko", "15:1", {
        "value/2": "15:16",
        "call/3": "16:7"
      });
      _$.resumeClosestBranch(_scope2_id);
      return _return2;
    }), "__tests__/template.marko_2_renderer", _scope0_id)
  };
  const clickTwiceCount = 0;
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
    "Once/8": Once,
    "clickOnceCount/9": clickOnceCount,
    "onClickOnce/11": onClickOnce,
    "Twice/12": Twice,
    "clickTwiceCount/13": clickTwiceCount,
    "onClickTwice/15": onClickTwice,
    "#text/0!": _$.writeExistingScope(_dynamicScope),
    "#text/0(": _$.normalizeDynamicRenderer(Once),
    "#text/4!": _$.writeExistingScope(_dynamicScope2),
    "#text/4(": _$.normalizeDynamicRenderer(Twice)
  }, "__tests__/template.marko", 0, {
    "Once/8": "1:8",
    "clickOnceCount/9": "9:5",
    "onClickOnce/11": "10:6",
    "Twice/12": "15:8",
    "clickTwiceCount/13": "23:5",
    "onClickTwice/15": "24:7"
  });
  _$.resumeClosestBranch(_scope0_id);
});
export default /* @__PURE__ */_$.createTemplate("__tests__/template.marko", _renderer);
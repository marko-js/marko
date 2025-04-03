import * as _$ from "@marko/runtime-tags/debug/html";
export default _$.createTemplate("__tests__/template.marko", input => {
  const $scope0_id = _$.nextScopeId();
  const Once = {
    content: _$.registerContent("__tests__/template.marko_1_renderer", ({
      value
    }) => {
      const $scope1_id = _$.nextScopeId();
      let call = 1;
      const $return = _$.register(function () {
        if (call) {
          call--;
          value();
        }
      }, "__tests__/template.marko_1/_return", $scope1_id);
      _$.writeScope($scope1_id, {
        value,
        call
      }, "__tests__/template.marko", "1:1", {
        value: "1:15",
        call: "2:7"
      });
      _$.resumeClosestBranch($scope1_id);
      return $return;
    }, $scope0_id)
  };
  let clickOnceCount = 0;
  const $dynamicScope = _$.peekNextScope();
  const onClickOnce = _$.dynamicTag($scope0_id, "#text/0", Once, {
    value: _$.register(function () {
      clickOnceCount++;
    }, "__tests__/template.marko_0/onClickOnce", $scope0_id)
  }, 0, 0, 1);
  _$.setTagVar($scope0_id, "#scopeOffset/1", $dynamicScope, "__tests__/template.marko_0_onClickOnce/var");
  _$.write(`<button class=once>${_$.escapeXML(clickOnceCount)}${_$.markResumeNode($scope0_id, "#text/3")}</button>${_$.markResumeNode($scope0_id, "#button/2")}`);
  const Twice = {
    content: _$.registerContent("__tests__/template.marko_2_renderer", ({
      value
    }) => {
      const $scope2_id = _$.nextScopeId();
      let call = 2;
      const $return2 = _$.register(function () {
        if (call) {
          call--;
          value();
        }
      }, "__tests__/template.marko_2/_return2", $scope2_id);
      _$.writeScope($scope2_id, {
        value,
        call
      }, "__tests__/template.marko", "15:1", {
        value: "15:16",
        call: "16:7"
      });
      _$.resumeClosestBranch($scope2_id);
      return $return2;
    }, $scope0_id)
  };
  let clickTwiceCount = 0;
  const $dynamicScope2 = _$.peekNextScope();
  const onClickTwice = _$.dynamicTag($scope0_id, "#text/4", Twice, {
    value: _$.register(function () {
      clickTwiceCount++;
    }, "__tests__/template.marko_0/onClickTwice", $scope0_id)
  }, 0, 0, 1);
  _$.setTagVar($scope0_id, "#scopeOffset/5", $dynamicScope2, "__tests__/template.marko_0_onClickTwice/var");
  _$.write(`<button class=twice>${_$.escapeXML(clickTwiceCount)}${_$.markResumeNode($scope0_id, "#text/7")}</button>${_$.markResumeNode($scope0_id, "#button/6")}`);
  _$.writeEffect($scope0_id, "__tests__/template.marko_0_onClickTwice");
  _$.writeEffect($scope0_id, "__tests__/template.marko_0_onClickOnce");
  _$.writeScope($scope0_id, {
    Once,
    clickOnceCount,
    onClickOnce,
    Twice,
    clickTwiceCount,
    onClickTwice
  }, "__tests__/template.marko", 0, {
    Once: "1:8",
    clickOnceCount: "9:5",
    onClickOnce: "10:6",
    Twice: "15:8",
    clickTwiceCount: "23:5",
    onClickTwice: "24:7"
  });
  _$.resumeClosestBranch($scope0_id);
});
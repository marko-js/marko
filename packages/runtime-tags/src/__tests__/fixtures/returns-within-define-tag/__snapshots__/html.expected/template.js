import * as _ from "@marko/runtime-tags/debug/html";
export default _._template("__tests__/template.marko", input => {
  _._scope_reason();
  const $scope0_id = _._scope_id();
  const Once = {
    content: _._content("__tests__/template.marko_1_content", ({
      value
    }) => {
      const $scope1_id = _._scope_id();
      _._scope_reason();
      let call = 1;
      const $return = _._resume(function () {
        if (call) {
          call--;
          value();
        }
      }, "__tests__/template.marko_1/_return", $scope1_id);
      _._scope($scope1_id, {
        value,
        call
      }, "__tests__/template.marko", "1:1", {
        value: "1:15",
        call: "2:7"
      });
      _._resume_branch($scope1_id);
      return $return;
    })
  };
  let clickOnceCount = 0;
  const $childScope = _._peek_scope_id();
  let onClickOnce = Once.content({
    value: _._resume(function () {
      clickOnceCount++;
    }, "__tests__/template.marko_0/onClickOnce", $scope0_id)
  });
  _._var($scope0_id, "#scopeOffset/1", $childScope, "__tests__/template.marko_0_onClickOnce/var");
  _._html(`<button class=once>${_._escape(clickOnceCount)}${_._el_resume($scope0_id, "#text/3")}</button>${_._el_resume($scope0_id, "#button/2")}`);
  const Twice = {
    content: _._content("__tests__/template.marko_2_content", ({
      value
    }) => {
      const $scope2_id = _._scope_id();
      _._scope_reason();
      let call = 2;
      const $return2 = _._resume(function () {
        if (call) {
          call--;
          value();
        }
      }, "__tests__/template.marko_2/_return2", $scope2_id);
      _._scope($scope2_id, {
        value,
        call
      }, "__tests__/template.marko", "15:1", {
        value: "15:16",
        call: "16:7"
      });
      _._resume_branch($scope2_id);
      return $return2;
    })
  };
  let clickTwiceCount = 0;
  const $childScope2 = _._peek_scope_id();
  let onClickTwice = Twice.content({
    value: _._resume(function () {
      clickTwiceCount++;
    }, "__tests__/template.marko_0/onClickTwice", $scope0_id)
  });
  _._var($scope0_id, "#scopeOffset/5", $childScope2, "__tests__/template.marko_0_onClickTwice/var");
  _._html(`<button class=twice>${_._escape(clickTwiceCount)}${_._el_resume($scope0_id, "#text/7")}</button>${_._el_resume($scope0_id, "#button/6")}`);
  _._script($scope0_id, "__tests__/template.marko_0_onClickTwice");
  _._script($scope0_id, "__tests__/template.marko_0_onClickOnce");
  _._scope($scope0_id, {
    clickOnceCount,
    onClickOnce,
    clickTwiceCount,
    onClickTwice,
    "#childScope/0": _._existing_scope($childScope),
    "#childScope/4": _._existing_scope($childScope2)
  }, "__tests__/template.marko", 0, {
    clickOnceCount: "9:5",
    onClickOnce: "10:6",
    clickTwiceCount: "23:5",
    onClickTwice: "24:7"
  });
  _._resume_branch($scope0_id);
});
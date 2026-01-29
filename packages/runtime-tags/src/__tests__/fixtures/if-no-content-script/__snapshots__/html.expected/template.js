import * as _ from "@marko/runtime-tags/debug/html";
export default _._template("__tests__/template.marko", input => {
  _._scope_reason();
  const $scope0_id = _._scope_id();
  let count = 0;
  _._html(`<div></div>${_._el_resume($scope0_id, "#div/0")}<button>${_._escape(count)}${_._el_resume($scope0_id, "#text/2")}</button>${_._el_resume($scope0_id, "#button/1")}`);
  _._if(() => {
    if (!count) {
      const $scope1_id = _._scope_id();
      _._script($scope1_id, "__tests__/template.marko_1");
      _._scope($scope1_id, {
        _: _._scope_with_id($scope0_id)
      }, "__tests__/template.marko", "5:1");
      return 0;
    }
  }, $scope0_id, "#text/3");
  _._script($scope0_id, "__tests__/template.marko_0_count");
  _._scope($scope0_id, {
    count
  }, "__tests__/template.marko", 0, {
    count: "1:5"
  });
  _._resume_branch($scope0_id);
});
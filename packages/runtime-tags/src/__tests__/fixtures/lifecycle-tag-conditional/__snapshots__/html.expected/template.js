import * as _ from "@marko/runtime-tags/debug/html";
export default _._template("__tests__/template.marko", input => {
  _._scope_reason();
  const $scope0_id = _._scope_id();
  let x = 0;
  let show = true;
  _._if(() => {
    if (show) {
      const $scope1_id = _._scope_id();
      _._script($scope1_id, "__tests__/template.marko_1_x");
      _._scope($scope1_id, {
        _: _._scope_with_id($scope0_id)
      }, "__tests__/template.marko", "3:2");
      return 0;
    }
  }, $scope0_id, "#text/0");
  _._html(`<div id=ref></div><button id=increment>Increment</button>${_._el_resume($scope0_id, "#button/1")}<button id=toggle>Toggle</button>${_._el_resume($scope0_id, "#button/2")}`);
  _._script($scope0_id, "__tests__/template.marko_0_show");
  _._script($scope0_id, "__tests__/template.marko_0_x");
  _._scope($scope0_id, {
    x,
    show
  }, "__tests__/template.marko", 0, {
    x: "1:6",
    show: "2:6"
  });
  _._resume_branch($scope0_id);
});
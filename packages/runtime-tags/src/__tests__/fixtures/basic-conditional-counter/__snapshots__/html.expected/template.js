import * as _ from "@marko/runtime-tags/debug/html";
export default _._template("__tests__/template.marko", input => {
  _._scope_reason();
  const $scope0_id = _._scope_id();
  let show = true;
  let count = 0;
  _._html(`<button class=inc></button>${_._el_resume($scope0_id, "#button/0")}<button class=toggle></button>${_._el_resume($scope0_id, "#button/1")}`);
  _._if(() => {
    if (show) {
      const $scope1_id = _._scope_id();
      _._html(`<span>${_._escape(count)}${_._el_resume($scope1_id, "#text/0")}</span>`);
      _._scope($scope1_id, {
        _: _._scope_with_id($scope0_id)
      }, "__tests__/template.marko", "5:2");
      return 0;
    }
  }, $scope0_id, "#text/2", 1, /* show */1, /* show */1, 0, 1);
  _._script($scope0_id, "__tests__/template.marko_0_show");
  _._script($scope0_id, "__tests__/template.marko_0_count");
  _._scope($scope0_id, {
    show,
    count
  }, "__tests__/template.marko", 0, {
    show: "1:6",
    count: "2:6"
  });
  _._resume_branch($scope0_id);
});
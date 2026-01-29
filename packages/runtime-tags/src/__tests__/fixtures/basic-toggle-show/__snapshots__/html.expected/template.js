import * as _ from "@marko/runtime-tags/debug/html";
export default _._template("__tests__/template.marko", input => {
  _._scope_reason();
  const $scope0_id = _._scope_id();
  let show = true;
  _._html("<div>");
  _._if(() => {
    if (show) {
      const $scope1_id = _._scope_id();
      _._html("Hello!");
      _._scope($scope1_id, {}, "__tests__/template.marko", "3:4");
      return 0;
    }
  }, $scope0_id, "#text/0");
  _._html(`<button>Toggle</button>${_._el_resume($scope0_id, "#button/1")}</div>`);
  _._script($scope0_id, "__tests__/template.marko_0_show");
  _._scope($scope0_id, {
    show
  }, "__tests__/template.marko", 0, {
    show: "2:8"
  });
  _._resume_branch($scope0_id);
});
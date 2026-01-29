import * as _ from "@marko/runtime-tags/debug/html";
export default _._template("__tests__/template.marko", input => {
  _._scope_reason();
  const $scope0_id = _._scope_id();
  let show = false;
  _._html("<div>");
  _._if(() => {
    if (show) {
      const $scope1_id = _._scope_id();
      _._html(`<span>${_._escape(_.$global().x)}</span>`);
      _._scope($scope1_id, {}, "__tests__/template.marko", "3:4");
      return 0;
    }
  }, $scope0_id, "#text/0", 1, /* show */1, /* show */1, 0, 1);
  _._if(() => {
    if (!show) {
      const $scope2_id = _._scope_id();
      _._html(`<span class=hidden>${_._escape(_.$global().x)}</span>`);
      _._scope($scope2_id, {}, "__tests__/template.marko", "7:4");
      return 0;
    }
  }, $scope0_id, "#text/1", 1, /* show */1, /* show */1, 0, 1);
  _._html(`<button>Toggle</button>${_._el_resume($scope0_id, "#button/2")}</div>`);
  _._script($scope0_id, "__tests__/template.marko_0_show");
  _._scope($scope0_id, {
    show
  }, "__tests__/template.marko", 0, {
    show: "2:8"
  });
  _._resume_branch($scope0_id);
});
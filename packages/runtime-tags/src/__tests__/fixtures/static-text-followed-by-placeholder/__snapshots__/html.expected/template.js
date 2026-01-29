import * as _ from "@marko/runtime-tags/debug/html";
export default _._template("__tests__/template.marko", input => {
  _._scope_reason();
  const $scope0_id = _._scope_id();
  let count = 0;
  _._html(`= <!>${_._escape(count)}${_._el_resume($scope0_id, "#text/0")}<button>Inc</button>${_._el_resume($scope0_id, "#button/1")}`);
  _._script($scope0_id, "__tests__/template.marko_0_count");
  _._scope($scope0_id, {
    count
  }, "__tests__/template.marko", 0, {
    count: "1:5"
  });
  _._resume_branch($scope0_id);
});
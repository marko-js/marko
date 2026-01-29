import * as _ from "@marko/runtime-tags/debug/html";
export default _._template("__tests__/template.marko", input => {
  _._scope_reason();
  const $scope0_id = _._scope_id();
  let value = "before";
  _._html(`<textarea>${_._escape_text(value)}</textarea>${_._el_resume($scope0_id, "#textarea/0")}<button>update</button>${_._el_resume($scope0_id, "#button/1")}`);
  _._script($scope0_id, "__tests__/template.marko_0");
  _._scope($scope0_id, {}, "__tests__/template.marko", 0);
  _._resume_branch($scope0_id);
});
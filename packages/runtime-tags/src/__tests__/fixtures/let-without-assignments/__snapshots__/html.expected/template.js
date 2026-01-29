import * as _ from "@marko/runtime-tags/debug/html";
export default _._template("__tests__/template.marko", input => {
  _._scope_reason();
  const $scope0_id = _._scope_id();
  let count = 1;
  _._html("<ul>");
  _.forUntil(count, 0, 1, i => {
    const $scope1_id = _._scope_id();
    _._html(`<li>${_._escape(i)}</li>`);
  });
  _._html(`</ul>${_._el_resume($scope0_id, "#ul/0")}`);
  _._script($scope0_id, "__tests__/template.marko_0");
  _._scope($scope0_id, {}, "__tests__/template.marko", 0);
  _._resume_branch($scope0_id);
});
import * as _ from "@marko/runtime-tags/debug/html";
export default _._template("__tests__/template.marko", input => {
  _._scope_reason();
  const $scope0_id = _._scope_id();
  const arrA = [1, 2, 3];
  _.forOf(arrA, (val, i) => {
    const $scope1_id = _._scope_id();
    _._html(`<div>${_._escape(i)}: ${_._escape(val)}</div>`);
  });
  let arrB = [1, 2, 3];
  _._for_of(arrB, (val, i) => {
    const $scope2_id = _._scope_id();
    _._html(`<div>${_._escape(i)}: <!>${_._escape(val)}${_._el_resume($scope2_id, "#text/1")}</div>`);
    _._scope($scope2_id, {}, "__tests__/template.marko", "9:2");
  }, 0, $scope0_id, "#text/1", /* arrB */1, /* arrB */1, /* arrB */1, 0, 1);
  _._script($scope0_id, "__tests__/template.marko_0");
  _._scope($scope0_id, {}, "__tests__/template.marko", 0);
  _._resume_branch($scope0_id);
});
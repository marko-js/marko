import * as _ from "@marko/runtime-tags/debug/html";
export default _._template("__tests__/template.marko", input => {
  _._scope_reason();
  const $scope0_id = _._scope_id();
  const arrA = [1, 2, 3];
  _._html("<div>");
  _.forOf(arrA, val => {
    const $scope1_id = _._scope_id();
    _._html(`<div>${_._escape(val)}</div>`);
  });
  _._html("</div><div>");
  _.forOf(arrA, val => {
    const $scope2_id = _._scope_id();
    _._html(`<div>${_._escape(val)}</div>`);
  });
  _._html("<div></div></div>");
});
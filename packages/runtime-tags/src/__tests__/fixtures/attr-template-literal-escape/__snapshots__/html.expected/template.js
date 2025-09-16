import * as _ from "@marko/runtime-tags/debug/html";
export default _._template("__tests__/template.marko", input => {
  const $serialize = _._get_serialize_reason();
  const $scope0_id = _._scope_id();
  _._html(`<div${_._attr("foo", `Hello ${input.name}`)}></div>${_._el_resume($scope0_id, "#div/0", _._serialize_guard($serialize, /* input.name */0))}`);
  _._serialize_guard($serialize, /* input.name */0) && _._scope($scope0_id, {}, "__tests__/template.marko", 0);
});
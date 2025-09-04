import * as _ from "@marko/runtime-tags/debug/html";
export default _._template("__tests__/tags/child.marko", (input, $serialize) => {
  const $scope0_id = _._scope_id();
  const {
    name
  } = input;
  _._html(`<div>${_._escape(name)}${_._el_resume($scope0_id, "#text/0", _._serialize_guard($serialize, /* name */0))}</div>`);
  _._serialize_guard($serialize, /* name */0) && _._scope($scope0_id, {}, "__tests__/tags/child.marko", 0);
});
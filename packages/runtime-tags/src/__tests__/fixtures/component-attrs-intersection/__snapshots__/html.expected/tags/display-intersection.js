import * as _ from "@marko/runtime-tags/debug/html";
export default _._template("__tests__/tags/display-intersection.marko", (input, $serialize) => {
  const $scope0_id = _._scope_id();
  const {
    value
  } = input;
  let dummy = {};
  _._html(`<div>${_._escape((dummy, value))}${_._el_resume($scope0_id, "#text/0")}</div>`);
  _._scope($scope0_id, {
    value,
    dummy: _._serialize_if($serialize, /* input.value */0) && dummy
  }, "__tests__/tags/display-intersection.marko", 0, {
    value: "1:10",
    dummy: "2:6"
  });
  _._resume_branch($scope0_id);
});
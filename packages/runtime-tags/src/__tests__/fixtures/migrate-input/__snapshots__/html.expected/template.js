import * as _ from "@marko/runtime-tags/debug/html";
export default _._template("__tests__/template.marko", (input, $serialize) => {
  const $scope0_id = _._scope_id();
  _._html(`<div><span>${_._escape(input.x)}${_._el_resume($scope0_id, "#text/0", _._serialize_guard($serialize, /* input.x */0))}</span></div>`);
  _._serialize_guard($serialize, /* input.x */0) && _._scope($scope0_id, {}, "__tests__/template.marko", 0);
});
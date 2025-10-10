import * as _ from "@marko/runtime-tags/debug/html";
export default _._template("__tests__/template.marko", input => {
  const $scope0_reason = _._scope_reason();
  const $scope0_id = _._scope_id();
  _._html("<div>");
  _._for_in(input.children, (key, text) => {
    const $scope1_id = _._scope_id();
    _._html(`<p>${_._escape(key)}${_._el_resume($scope1_id, "#text/0", _._serialize_guard($scope0_reason, /* input.children */0))}: ${_._sep(_._serialize_guard($scope0_reason, /* input.children */0))}${_._escape(text)}${_._el_resume($scope1_id, "#text/1", _._serialize_guard($scope0_reason, /* input.children */0))}</p>`);
    _._serialize_guard($scope0_reason, /* input.children */0) && _._scope($scope1_id, {}, "__tests__/template.marko", "2:4");
  }, 0, $scope0_id, "#text/0", _._serialize_guard($scope0_reason, /* input.children */0), _._serialize_guard($scope0_reason, /* input.children */0), _._serialize_guard($scope0_reason, /* input.children */0), 0, 1);
  _._for_in(input.children, key => {
    const $scope2_id = _._scope_id();
    _._html(`<p>${_._escape(key)}${_._el_resume($scope2_id, "#text/0", _._serialize_guard($scope0_reason, /* input.children */0))}</p>`);
    _._serialize_guard($scope0_reason, /* input.children */0) && _._scope($scope2_id, {}, "__tests__/template.marko", "5:4");
  }, 0, $scope0_id, "#text/1", _._serialize_guard($scope0_reason, /* input.children */0), _._serialize_guard($scope0_reason, /* input.children */0), _._serialize_guard($scope0_reason, /* input.children */0), 0, 1);
  _._html("</div>");
  _._serialize_guard($scope0_reason, /* input.children */0) && _._scope($scope0_id, {}, "__tests__/template.marko", 0);
});
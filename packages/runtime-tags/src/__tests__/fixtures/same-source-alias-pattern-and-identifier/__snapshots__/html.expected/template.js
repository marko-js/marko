import * as _ from "@marko/runtime-tags/debug/html";
export default _._template("__tests__/template.marko", input => {
  const $scope0_reason = _._scope_reason();
  const $scope0_id = _._scope_id();
  const {
    a: {
      b
    }
  } = input;
  const {
    a
  } = input;
  const {
    b: c
  } = a;
  _._html(`<button>${_._escape(b)}${_._el_resume($scope0_id, "#text/0", _._serialize_guard($scope0_reason, /* input.a.b */0))} ${_._sep(_._serialize_guard($scope0_reason, /* input.a.b */0))}${_._escape(c)}${_._el_resume($scope0_id, "#text/1", _._serialize_guard($scope0_reason, /* input.a.b */0))}</button>`);
  _._serialize_if($scope0_reason, /* input.a.b */0) && _._scope($scope0_id, {}, "__tests__/template.marko", 0);
});
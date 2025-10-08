import * as _ from "@marko/runtime-tags/debug/html";
export default _._template("__tests__/template.marko", input => {
  const $serialize = _._get_serialize_reason();
  const $scope0_id = _._scope_id();
  const {
    a
  } = input;
  let b = a * 2;
  _._html(`<button>Increment</button>${_._el_resume($scope0_id, "#button/0")}${_._escape(a)}${_._el_resume($scope0_id, "#text/1", _._serialize_guard($serialize, /* input.a */0))} <!>${_._escape(b)}${_._el_resume($scope0_id, "#text/2")}`);
  _._script($scope0_id, "__tests__/template.marko_0_b");
  _._scope($scope0_id, {
    b
  }, "__tests__/template.marko", 0, {
    b: "2:6"
  });
  _._resume_branch($scope0_id);
});
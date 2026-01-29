import * as _ from "@marko/runtime-tags/debug/html";
export default _._template("__tests__/template.marko", input => {
  _._scope_reason();
  const $scope0_id = _._scope_id();
  const MyTag = {
    content: _._content("__tests__/template.marko_1_content", ({
      name
    }) => {
      const $scope1_id = _._scope_id();
      const $scope1_reason = _._scope_reason();
      let y = 1;
      _._html(`<div>Hello ${_._sep(_._serialize_guard($scope1_reason, /* name */0))}${_._escape(name)}${_._el_resume($scope1_id, "#text/0", _._serialize_guard($scope1_reason, /* name */0))} <!>${_._escape(y)}${_._el_resume($scope1_id, "#text/1")}</div><button>${_._escape(y)}${_._el_resume($scope1_id, "#text/3")}</button>${_._el_resume($scope1_id, "#button/2")}`);
      _._script($scope1_id, "__tests__/template.marko_1_y");
      _._scope($scope1_id, {
        y
      }, "__tests__/template.marko", "1:2", {
        y: "2:8"
      });
      _._resume_branch($scope1_id);
    })
  };
  MyTag.content({
    name: "Ryan"
  });
});
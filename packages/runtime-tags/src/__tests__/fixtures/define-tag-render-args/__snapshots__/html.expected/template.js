import * as _ from "@marko/runtime-tags/debug/html";
export default _._template("__tests__/template.marko", input => {
  const $scope0_id = _._scope_id();
  let x = 1;
  const MyTag = {
    content: _._content_resume("__tests__/template.marko_1_content", (a, b, c) => {
      const $scope1_id = _._scope_id();
      const $serialize = _._get_serialize_reason();
      _._html(`<div>${_._escape(a)}${_._el_resume($scope1_id, "#text/0", $serialize)}|${_._sep($serialize)}${_._escape(b)}${_._el_resume($scope1_id, "#text/1", $serialize)}|${_._sep($serialize)}${_._escape(c)}${_._el_resume($scope1_id, "#text/2", $serialize)}</div>`);
      $serialize && _._scope($scope1_id, {}, "__tests__/template.marko", "2:2");
    }, $scope0_id)
  };
  _._dynamic_tag($scope0_id, "#text/0", MyTag, [1, "Hello", x], 0, 1);
  _._html(`<button>${_._escape(x)}${_._el_resume($scope0_id, "#text/2")}</button>${_._el_resume($scope0_id, "#button/1")}`);
  _._script($scope0_id, "__tests__/template.marko_0_x");
  _._scope($scope0_id, {
    x,
    MyTag
  }, "__tests__/template.marko", 0, {
    x: "1:6",
    MyTag: "2:9"
  });
  _._resume_branch($scope0_id);
});
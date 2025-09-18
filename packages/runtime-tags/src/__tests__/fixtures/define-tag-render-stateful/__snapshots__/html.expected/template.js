import * as _ from "@marko/runtime-tags/debug/html";
export default _._template("__tests__/template.marko", input => {
  const $scope0_id = _._scope_id();
  let count = 0;
  _._html(`<button>${_._escape(count)}${_._el_resume($scope0_id, "#text/1")}</button>${_._el_resume($scope0_id, "#button/0")}`);
  const MyTag = {
    content: _._content_resume("__tests__/template.marko_1_content", ({
      name,
      count
    }) => {
      const $scope1_id = _._scope_id();
      const $serialize = _._get_serialize_reason();
      _._html(`<div>Hello ${_._sep(_._serialize_guard($serialize, /* name */1))}${_._escape(name)}${_._el_resume($scope1_id, "#text/0", _._serialize_guard($serialize, /* name */1))} ${_._sep(_._serialize_guard($serialize, /* count */2))}${_._escape(count)}${_._el_resume($scope1_id, "#text/1", _._serialize_guard($serialize, /* count */2))}</div>`);
      _._serialize_guard($serialize, /* name,count */0) && _._scope($scope1_id, {}, "__tests__/template.marko", "6:2");
    }, $scope0_id)
  };
  _._dynamic_tag($scope0_id, "#text/2", MyTag, {
    name: "Ryan",
    count: count
  });
  _._script($scope0_id, "__tests__/template.marko_0_count");
  _._scope($scope0_id, {
    count,
    MyTag
  }, "__tests__/template.marko", 0, {
    count: "1:6",
    MyTag: "6:9"
  });
  _._resume_branch($scope0_id);
});